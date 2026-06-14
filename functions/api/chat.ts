import { GoogleGenerativeAI } from "@google/generative-ai";
// Importa o contexto do seu currículo (certifique-se de que o caminho está correto)
import { MAURICIO_RESUME_CONTEXT } from "../../src/utils/resumeContext";

export const onRequestPost = async (context: any) => {
  try {
    const { message, history } = (await context.request.json()) as any;

    // O Cloudflare injeta a variável de ambiente através do context.env
    const currentApiKey = context.env.GEMINI_API_KEY;

    if (!currentApiKey || currentApiKey === "MY_GEMINI_API_KEY") {
      const mockResponses = [
        "Olá! Atualmente meu portfólio está em modo offline pois a API Key do Gemini não está configurada.",
        "Pode entrar em contato pelo email m.alexandre1992@gmail.com",
      ];
      const responseText =
        mockResponses[Math.floor(Math.random() * mockResponses.length)];
      return new Response(
        JSON.stringify({ text: responseText, isMock: true }),
        {
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const genAI = new GoogleGenerativeAI(currentApiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-3.5-flash",
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
      headers: { "Content-Type": "application/json" },
    });
  }
};
