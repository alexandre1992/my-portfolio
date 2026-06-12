import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CLEAN_ARCH_CODE } from "../data";
import { Code, Server, Layers, HelpCircle, CheckCircle2, ArrowRight } from "lucide-react";

export default function CleanArchVisualizer() {
  const [platform, setPlatform] = useState<"android" | "flutter">("android");
  const [activeLayer, setActiveLayer] = useState<"presentation" | "domain" | "data">("domain");

  const layersInfo = {
    presentation: {
       title: "Presentation Layer (Camada de Apresentação)",
       subtitle: "ViewModels, BLoC, Jetpack Compose, Widgets",
       bgGrad: "from-indigo-600 to-violet-700",
       accentColor: "text-indigo-400",
       description: "Esta camada lida puramente com a exibição visual e a captura de eventos de usuário. Ela traduz eventos do usuário em comandos, chama fluxos do domínio e observa as atualizações reativas de estado (StateFlow no Android, Stream/BLoC no Flutter) para remontar a tela de maneira limpa.",
       points: [
         "Totalmente desacoplada de conexões de internet diretas ou drivers JDBC/SQL.",
         "Usa renderização moderna e declarativa (Jetpack Compose ou Flutter Widgets).",
         "O estado é exposto de forma imutável para prevenir bugs de concorrência."
       ]
    },
    domain: {
       title: "Domain Layer (Camada de Domínio)",
       subtitle: "Entities, Use Cases (Interactors), Repository Contracts",
       bgGrad: "from-indigo-500 to-violet-600",
       accentColor: "text-indigo-400",
       description: "O coração pulsa aqui. É a camada mais interna e pura, livre de dependências de frameworks, bibliotecas externas ou persistência física. Ela define o modelo de domínio do negócio e os Use Cases que encapsulam as regras lógicas cruciais da aplicação de maneira totalmente testável.",
       points: [
         "Contém as regras de negócio puras (Use Cases como GetUserProfile ou ProcessTransaction).",
         "Define interfaces Repository abstratas (Contratos de Dados) que a Data Layer implementa.",
         "Não conhece bancos de dados, conexões HTTP ou bibliotecas de interface."
       ]
    },
    data: {
       title: "Data Layer (Camada de Dados)",
       subtitle: "Mappers, Local SQL Database, Remote API Drivers",
       bgGrad: "from-indigo-600 to-violet-700",
       accentColor: "text-indigo-400",
       description: "Esta camada orquestra e coordena de onde os dados vêm. Ela lida com a implantação concreta das interfaces de repositório definidas no Domínio, gerencia mappers de serialização de rede, banco local (Room/Hive) e decide as diretrizes de sincronização offline.",
       points: [
         "Contempla chamadas do Retrofit (Android) ou Dio (Flutter).",
         "Lida com suporte offline cacheando dados em banco local imutável.",
         "Mapeia objetos de transporte de rede (DTOs) para entidades puras de domínio."
       ]
    }
  };

  const codeString = CLEAN_ARCH_CODE[platform][activeLayer];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl overflow-hidden" id="clean-arch-container">
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5 mb-6">
        <div>
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-400" />
            Clean Architecture Simulator
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Explore interactively how data flows across three-tier Clean Architecture.
          </p>
        </div>

        {/* Platform Selector Switches */}
        <div className="flex bg-slate-950 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto">
          <button
            onClick={() => setPlatform("android")}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
              platform === "android"
                ? "bg-slate-800 text-slate-100 border border-slate-700 shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
             id="btn-platform-android"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Android (Kotlin)
          </button>
          <button
            onClick={() => setPlatform("flutter")}
            className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
              platform === "flutter"
                ? "bg-slate-800 text-slate-100 border border-slate-700 shadow-sm"
                : "text-slate-400 hover:text-slate-200"
            }`}
             id="btn-platform-flutter"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            Flutter (Dart)
          </button>
        </div>
      </div>

      {/* Main Grid: Visual stack vs Code & Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Visual Interactive Stack */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
          <span className="text-[10px] font-mono tracking-wider uppercase text-slate-500 font-bold">
            Estrutura Concêntrica Ativa
          </span>

          <div className="relative w-full max-w-[320px] h-[340px] flex items-center justify-center p-4">
            {/* Layers Stack Graphic */}
            <div className="absolute inset-0 flex flex-col justify-between p-2">
              {/* Presentation Layer Circle Outer */}
              <button
                onClick={() => setActiveLayer("presentation")}
                className={`w-full hover:scale-[1.02] transform transition-all h-[95px] rounded-2xl flex items-center justify-between px-5 text-left border relative overflow-hidden ${
                  activeLayer === "presentation"
                    ? "bg-slate-950/90 border-indigo-500 ring-2 ring-indigo-500/20"
                    : "bg-slate-800/40 border-slate-800 text-slate-400 hover:border-slate-700"
                }`}
                id="btn-layer-presentation"
              >
                <div className={`absolute top-0 left-0 w-1.5 h-full bg-indigo-500`}></div>
                <div className="z-10">
                  <div className="text-[10px] font-mono tracking-wider uppercase opacity-60">
                    Presentation (UI)
                  </div>
                  <div className={`text-sm font-bold text-slate-100 flex items-center gap-1.5 mt-0.5`}>
                     Compose / Widgets
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-indigo-500/10 text-indigo-400`}>
                  <Code className="w-4 h-4" />
                </div>
              </button>

              {/* Arrow Indicator */}
              <div className="flex justify-center my-0 max-h-1.5">
                <ArrowRight className="w-4 h-4 text-slate-700 rotate-90" />
              </div>

              {/* Domain Layer Circle Inner */}
              <button
                onClick={() => setActiveLayer("domain")}
                className={`w-full hover:scale-[1.02] transform transition-all h-[95px] rounded-2xl flex items-center justify-between px-5 text-left border relative overflow-hidden ${
                  activeLayer === "domain"
                    ? "bg-slate-950/90 border-indigo-500 ring-2 ring-indigo-500/20"
                    : "bg-slate-800/40 border-slate-800 text-slate-400 hover:border-slate-700"
                }`}
                id="btn-layer-domain"
              >
                <div className={`absolute top-0 left-0 w-1.5 h-full bg-indigo-500`}></div>
                <div className="z-10">
                  <div className="text-[10px] font-mono tracking-wider uppercase opacity-60">
                     Domain (Core)
                  </div>
                  <div className={`text-sm font-bold text-slate-100 mt-0.5`}>
                     Use Cases / Rules
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-indigo-500/10 text-indigo-400`}>
                  <Layers className="w-4 h-4" />
                </div>
              </button>

              {/* Arrow Indicator */}
              <div className="flex justify-center my-0 max-h-1.5">
                <ArrowRight className="w-4 h-4 text-slate-700 rotate-90" />
              </div>

              {/* Data Layer Circle Inner */}
              <button
                onClick={() => setActiveLayer("data")}
                className={`w-full hover:scale-[1.02] transform transition-all h-[95px] rounded-2xl flex items-center justify-between px-5 text-left border relative overflow-hidden ${
                  activeLayer === "data"
                    ? "bg-slate-950/90 border-indigo-500 ring-2 ring-indigo-500/20"
                    : "bg-slate-800/40 border-slate-800 text-slate-400 hover:border-slate-700"
                }`}
                id="btn-layer-data"
              >
                <div className={`absolute top-0 left-0 w-1.5 h-full bg-indigo-500`}></div>
                <div className="z-10">
                  <div className="text-[10px] font-mono tracking-wider uppercase opacity-60">
                     Data (Source)
                  </div>
                  <div className={`text-sm font-bold text-slate-100 mt-0.5`}>
                     Network & Repos
                  </div>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-indigo-500/10 text-indigo-400`}>
                  <Server className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 text-center max-w-[260px] leading-relaxed">
            Clique nas fatias da arquitetura para simular o fluxo de isolamento e depuração.
          </p>
        </div>

        {/* Right Side: Tab details & Code block */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          {/* Layer Info Board */}
          <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800">
            <h3 className="text-indigo-450 font-bold text-sm sm:text-base flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              {layersInfo[activeLayer].title}
            </h3>
            <span className="text-[11px] text-indigo-400 tracking-wide font-mono block mt-0.5">
              {layersInfo[activeLayer].subtitle}
            </span>

            <p className="text-slate-300 text-xs mt-3 leading-relaxed">
              {layersInfo[activeLayer].description}
            </p>

            <div className="mt-4 space-y-2">
              {layersInfo[activeLayer].points.map((point, index) => (
                <div key={index} className="flex items-start gap-2 text-[11.5px] text-slate-300">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-indigo-400" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Code Mock Terminal */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow">
            {/* Top Bar Terminal look */}
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/85"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/85"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/85"></div>
                <span className="text-[10px] font-mono text-slate-400 ml-2">
                  {platform === "android" ? "Kotlin (Android)" : "Dart (Flutter)"}
                </span>
              </div>
              <span className="text-[9px] font-mono bg-slate-900 border border-slate-800 text-indigo-400 px-2 py-0.5 rounded">
                {activeLayer === "domain" ? "PURE LAYER" : "FRAMEWORK LAYER"}
              </span>
            </div>

            {/* Code Content */}
            <div className="p-4 overflow-x-auto text-[11px] font-mono text-slate-350 max-h-[290px] overflow-y-auto whitespace-pre leading-normal select-all">
              {codeString}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
