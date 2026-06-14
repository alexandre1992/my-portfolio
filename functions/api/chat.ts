import { GoogleGenerativeAI } from "@google/generative-ai";

const MAURICIO_RESUME_CONTEXT = `Você é o Assistente Inteligente Oficial do Mauricio... (cole aqui o conteúdo do seu arquivo resumeContext.ts)`;

export const onRequestPost = async (context: any) => {
  try {
    const { message, history } = (await context.request.json()) as any;
    const currentApiKey = context.env.GEMINI_API_KEY;

    if (!currentApiKey || currentApiKey === "MY_GEMINI_API_KEY") {
      const mockResponses = [
        "Olá! Atualmente meu portfólio está configurado com mock responses...",
        "Estou à disposição para responder sobre minha experiência com Android (Kotlin) e Flutter!",
        "Pode entrar em contato pelo email m.alexandre1992@gmail.com",
      ];
      const responseText =
        mockResponses[Math.floor(Math.random() * mockResponses.length)];
      return new Response(JSON.stringify({ text: responseText, isMock: true }));
    }

    const genAI = new GoogleGenerativeAI(currentApiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: MAURICIO_RESUME_CONTEXT,
    });

    const chat = model.startChat({
      history: history
        ? history.map((h: any) => ({
            role: h.role === "user" ? "user" : "model",
            parts: [{ text: h.text }],
          }))
        : [],
    });

    const result = await chat.sendMessage(message);
    const response = await result.response;

    return new Response(
      JSON.stringify({ text: response.text(), isMock: false }),
      {
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};
