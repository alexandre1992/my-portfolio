import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChatMessage } from "../types";
import { Send, Bot, User, Trash2, HelpCircle, Loader2 } from "lucide-react";

export default function AIChatBot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
       id: "welcome",
       role: "model",
       text: "Olá! Sou o Assistente Inteligente Oficial do Mauricio. Fui treinado diretamente com o histórico de sua carreira, suas certificações de Android/Flutter e seus projetos de design system. Pode perguntar sobre minhas experiências na Kantar IBOPE ou Fundação Zerrenner, minhas competências técnicas ou projetos! Como posso te ajudar?",
       timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const starterChips = [
    { text: "Qual a sua experiência na Fundação Zerrenner?", value: "Explique em detalhes seu histórico, conquistas e tecnologias na Fundação Zerrenner." },
    { text: "Explique seu foco em Clean Architecture.", value: "Quais são as 3 camadas da Clean Architecture que você utiliza nos apps Android (Kotlin) e Flutter?" },
    { text: "Quais tecnologias você mais domina?", value: "Quais são suas principais competências entre mobile e web (React/Flutter/Android)?" },
    { text: "Como entrar em contato?", value: "Qual o seu melhor email e LinkedIn para contato?" }
  ];

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userMessage: ChatMessage = {
       id: `user-${Date.now()}`,
       role: "user",
       text: textToSend,
       timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          // Extract text and role for the Gemini API call
          history: messages.map((m) => ({ role: m.role, text: m.text }))
        }),
      });

      if (!response.ok) {
         throw new Error("Erro na comunicação com a API");
      }

      const data = await response.json();

      const assistantMessage: ChatMessage = {
         id: `model-${Date.now()}`,
         role: "model",
         text: data.text,
         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
         isMock: data.isMock
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      console.error(err);
      const errorMessage: ChatMessage = {
         id: `error-${Date.now()}`,
         role: "model",
         text: "Desculpe! Ocorreu um erro ao processar sua requisição no servidor do portfólio. Certifique-se de que a API Key externa esteja configurada no painel de Secrets ou que o servidor backend esteja respondendo adecuadamente.",
         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
         id: "welcome-reset",
         role: "model",
         text: "Chat reiniciado! Pode me testar novamente com qualquer outra pergunta sobre o currículo ou especificações técnicas do Mauricio.",
         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col h-[560px]" id="aichat-container">
      {/* Bot Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-violet-600/15 border border-violet-500/20 flex items-center justify-center text-violet-400">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-slate-100">Mauricio Alexandre Digital Twin</h3>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" title="Pronto para conversar"></span>
            </div>
            <p className="text-[10px] text-slate-400">Inteligência Artificial (Gemini 3.5 Assistant) especializada no currículo</p>
          </div>
        </div>

        <button
          onClick={handleClearChat}
          className="p-2 text-slate-500 hover:text-slate-300 rounded-lg hover:bg-slate-800/60 transition-colors"
          title="Limpar Conversa"
          id="btn-clear-chat"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      {/* Message Stream */}
      <div className="flex-1 overflow-y-auto pr-1 space-y-4 mb-4 text-xs">
        {messages.map((msg) => {
          const isModel = msg.role === "model";
          return (
            <div
              key={msg.id}
              className={`flex gap-3 max-w-[85%] ${isModel ? "self-start" : "ml-auto flex-row-reverse"}`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-slate-200 border ${
                isModel
                  ? "bg-slate-800 border-slate-700 text-violet-400"
                  : "bg-violet-600 border-violet-500 text-slate-100"
              }`}>
                {isModel ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
              </div>

              <div className="flex flex-col space-y-1">
                <div className={`p-3 rounded-2xl leading-relaxed text-slate-200 ${
                  isModel
                    ? "bg-slate-950 border border-slate-800/80 rounded-tl-none"
                    : "bg-slate-800 rounded-tr-none text-right"
                }`}>
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                  {msg.isMock && (
                    <span className="text-[9px] text-amber-500 block mt-1.5 font-mono">
                      ⚠️ Modo offline (fallback ativo sem chave Gemini configurada).
                    </span>
                  )}
                </div>
                <span className={`text-[9.5px] text-slate-500 font-mono tracking-tight ${isModel ? "" : "text-right"}`}>
                  {msg.timestamp}
                </span>
              </div>
            </div>
          );
        })}

        {loading && (
          <div className="flex gap-3 max-w-[85%] self-start">
            <div className="w-7 h-7 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-violet-400 shrink-0">
              <Bot className="w-3.5 h-3.5" />
            </div>
            <div className="bg-slate-950 border border-slate-800/80 p-3 rounded-2xl rounded-tl-none flex items-center gap-2 text-slate-400">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Analisando currículo...</span>
            </div>
          </div>
        )}
        <div ref={scrollRef}></div>
      </div>

      {/* Suggested Starter Chips */}
      {messages.length === 1 && (
        <div className="mb-4">
          <span className="text-[10px] text-slate-400 font-medium mb-2 block flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" /> Perguntas Frequentes :
          </span>
          <div className="flex flex-wrap gap-2">
            {starterChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(chip.value)}
                className="bg-slate-950 text-[10px] sm:text-xs text-slate-300 px-3 py-1.5 rounded-lg border border-slate-800 hover:border-violet-500/50 hover:bg-slate-900 transition-all cursor-pointer"
                id={`btn-starter-chip-${idx}`}
              >
                {chip.text}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Keyboard Input bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(input);
        }}
        className="flex gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Pergunte sobre experiência com APIs, banco local, metodologias ágeis..."
          disabled={loading}
          className="flex-1 bg-slate-950 border border-slate-800 focus:border-violet-500 outline-none text-slate-100 placeholder-slate-500 px-4 py-2.5 text-xs rounded-xl transition-all"
          id="chat-input-text"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="bg-violet-600 hover:bg-violet-500 disabled:bg-slate-800 text-slate-100 disabled:text-slate-600 px-4 py-2 rounded-xl flex items-center justify-center transition-colors font-medium shrink-0 cursor-pointer"
          id="btn-chat-submit"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
