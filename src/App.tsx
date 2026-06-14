import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  TIMELINE_DATA,
  CERTIFICATIONS_DATA,
  PROJECTS_DATA,
  LANGUAGES_DATA,
  TECHNICAL_SKILLS,
} from "./data";
import CleanArchVisualizer from "./components/CleanArchVisualizer";
import FlutterPackages from "./components/FlutterPackages";
import AIChatBot from "./components/AIChatBot";
import {
  Briefcase,
  Layers,
  Sliders,
  Bot,
  Mail,
  Linkedin,
  MapPin,
  ExternalLink,
  Award,
  Globe,
  Code2,
  Terminal,
  Cpu,
  BookmarkCheck,
  ChevronRight,
  Sparkles,
  PhoneCall,
  GraduationCap,
} from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<
    "experience" | "architecture" | "flutter_packages" | "ai"
  >("experience");
  const [timelineFilter, setTimelineFilter] = useState<
    "all" | "mobile" | "embedded" | "other"
  >("all");

  const filteredTimeline = TIMELINE_DATA.filter((item) => {
    if (timelineFilter === "all") return true;
    return item.type === timelineFilter;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans grid grid-cols-1 xl:grid-cols-12 relative overflow-x-hidden antialiased selection:bg-sky-500/20 selection:text-sky-200 p-4 sm:p-6 lg:p-8 gap-6">
      {/* Background ambient glows mixing Flutter Blue and Android Green */}
      <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-sky-900/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-[355px] h-[355px] bg-emerald-950/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* LEFT COLUMN/SIDEBAR: Developer Identity (Styled like a Bento Cell) */}
      <aside className="xl:col-span-4 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-8 xl:sticky xl:top-8 xl:h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="space-y-6">
          {/* Top visual Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-sky-500 to-emerald-400 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-sky-500/15 text-slate-950">
                M
              </div>
              <div>
                <h1 className="text-sm font-bold tracking-tight leading-none">
                  Mauricio
                </h1>
                <p className="text-[10px] text-slate-400 font-mono">
                  alexandre1992.dev.br
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse"></span>
                Disponível
              </span>
            </div>
          </div>

          {/* Core Profile info */}
          <div className="space-y-3 pt-2">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-100 leading-none">
              Mauricio Alexandre
            </h2>
            <p className="text-xs font-semibold uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400">
              Senior Mobile Engineer & Web Developer
            </p>
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              <span>São Paulo, SP, Brasil</span>
            </div>
          </div>

          {/* Career Statement in elegant bento styling */}
          <p className="text-slate-400 text-[12px] leading-relaxed border-l-2 border-emerald-500 pl-3">
            Engenheiro de Software com mais de 13 anos de jornada em tecnologia,
            com foco integral na criação de aplicações móveis (Android e
            Flutter) desde 2016. Sólido histórico em sistemas corporativos de
            grande porte com Delphi Intraweb (iniciado em 2012), além de ampla
            proficiência em Clean Architecture, testes de cobertura e automações
            CI/CD.
          </p>

          {/* Communication Channels */}
          <div className="space-y-2.5 bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 shadow-sm">
            <h4 className="text-[9px] font-mono uppercase tracking-widest text-slate-500 font-bold">
              Canais de Contato
            </h4>

            <div className="space-y-3">
              <a
                href="mailto:m.alexandre1992@gmail.com"
                className="flex items-center gap-3 text-xs text-slate-300 hover:text-indigo-400 transition-colors group"
                id="contact-email"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-indigo-500/30 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-400" />
                </div>
                <div className="truncate">
                  <p className="text-[9px] text-slate-500 uppercase font-bold tracking-tight">
                    Email Oficial
                  </p>
                  <p className="font-mono text-[11px]">
                    m.alexandre1992@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/mauricioalexandregaldino"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-xs text-slate-300 hover:text-indigo-400 transition-colors group"
                id="contact-linkedin"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-indigo-500/30 transition-colors">
                  <Linkedin className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-400" />
                </div>
                <div>
                  <p className="text-[9px] text-slate-500 uppercase font-bold tracking-tight">
                    Linkedin
                  </p>
                  <p className="font-mono text-[11px]">
                    in/mauricioalexandregaldino
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Technical Summary Pill Box */}
          <div className="space-y-2.5">
            <h4 className="text-[9px] font-mono uppercase tracking-widest text-slate-500 font-bold">
              Core Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {[
                "Android Native",
                "Kotlin",
                "Jetpack Compose",
                "Flutter & Dart",
                "BLoC Pattern",
                "React & Next.js",
                "TypeScript",
                "Clean Architecture",
                "CI/CD Protocols",
                "Unit Testing",
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-950 border border-slate-800/80 px-2 py-0.5 rounded-md text-[10px] font-mono text-slate-400 select-none hover:border-indigo-500/40 hover:text-slate-200 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* RIGHT COLUMN: Interactive Bento Dashboard Cockpit */}
      <main className="xl:col-span-8 flex flex-col space-y-6 overflow-y-auto xl:h-[calc(100vh-4rem)] pr-0 xl:pr-2">
        {/* Head Bar: Nav tabs styled like the clean Bento Badge System with Flutter-Android theme blending */}
        <nav className="flex flex-wrap gap-1.5 bg-slate-900 p-1.5 rounded-2xl border border-slate-800 sticky top-0 z-50 backdrop-blur-xl bg-slate-900/85">
          <button
            onClick={() => setActiveTab("experience")}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "experience"
                ? "bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow-lg shadow-sky-950/40"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-950"
            }`}
            id="tab-btn-experience"
          >
            <Briefcase className="w-3.5 h-3.5" />
            Carreira & Experiência
          </button>

          <button
            onClick={() => setActiveTab("architecture")}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "architecture"
                ? "bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow-lg shadow-sky-950/40"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-950"
            }`}
            id="tab-btn-architecture"
          >
            <Layers className="w-3.5 h-3.5" />
            Clean Architecture
          </button>

          <button
            onClick={() => setActiveTab("flutter_packages")}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "flutter_packages"
                ? "bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow-lg shadow-sky-950/40"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-950"
            }`}
            id="tab-btn-flutter-packages"
          >
            <Globe className="w-3.5 h-3.5" />
            Comunidade Flutter
          </button>

          <button
            onClick={() => setActiveTab("ai")}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer relative ${
              activeTab === "ai"
                ? "bg-gradient-to-r from-sky-600 to-emerald-600 text-white shadow-lg shadow-sky-950/40"
                : "text-slate-400 hover:text-slate-200 hover:bg-slate-950"
            }`}
            id="tab-btn-ai"
          >
            <Bot className="w-3.5 h-3.5" />
            Gêmeo IA Chatbot
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </button>
        </nav>

        {/* Tab contents with smooth container wrappers */}
        <div className="flex-1 mt-2">
          <AnimatePresence mode="wait">
            {activeTab === "experience" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                className="space-y-6"
                key="experience-tab"
              >
                {/* Visual grid structure for Bento items */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* Hero Box (2x2 style in bento grid concept, reduced size scale to fit) */}
                  <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-6 flex flex-col justify-end relative overflow-hidden shadow-lg shadow-indigo-950/20">
                    <div className="absolute top-6 right-6 opacity-15">
                      <svg
                        width="90"
                        height="90"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-indigo-200 mb-2 font-bold block">
                      Engineering Philosophy
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold mb-3 leading-tight text-white">
                      Criando ecossistemas móveis de excelência.
                    </h3>
                    <p className="text-indigo-100 text-[11.5px] opacity-90 leading-relaxed">
                      Desenvolvimento mobile com Flutter e Kotlin, criando
                      aplicações de alta performance, escaláveis e com
                      arquiteturas orientadas a testes para soluções
                      corporativas.
                    </p>
                  </div>

                  {/* Mobile Architecture & Engineering Box (2x1) */}
                  <div className="md:col-span-2 bg-slate-900 border border-slate-800 rounded-3xl p-5 overflow-hidden relative">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3">
                          Mobile Engineering Core
                        </h3>
                        <div className="flex gap-8 font-mono text-[10.5px] text-indigo-400">
                          <div className="flex flex-col gap-1">
                            <span className="text-slate-500 text-[9px] uppercase font-bold">
                              Native & Cross-Platform
                            </span>
                            <span className="text-slate-300">
                              📱 Android (Kotlin/Java)
                            </span>
                            <span className="text-slate-300">
                              🎯 Flutter (BLoC Pattern)
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-slate-500 text-[9px] uppercase font-bold">
                              Tech Stack & Quality
                            </span>
                            <span className="text-indigo-300">
                              🏗️ Clean Architecture
                            </span>
                            <span className="text-indigo-300">
                              🧪 Unit & Widget Testing
                            </span>
                            <span className="text-indigo-300">
                              🚀 CI/CD Automation
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-indigo-500/10 p-2.5 rounded-xl border border-indigo-500/10 shrink-0 text-right">
                        <p className="text-[10px] font-bold text-indigo-400">
                          13+ Years
                        </p>
                        <p className="text-[9px] text-slate-400 font-mono mt-0.5">
                          Experience
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Android Specialist (1x1 style) */}
                  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2">
                        Android Specialist
                      </h3>
                      <p className="text-[11px] text-slate-300 leading-normal">
                        Foco em performance e componentes Jetpack. Expertise em
                        manutenção de apps complexos e sistemas embarcados.
                      </p>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <span className="px-2 py-1 rounded bg-slate-800 text-[9px] text-indigo-300 border border-slate-700">
                        Jetpack
                      </span>
                      <span className="px-2 py-1 rounded bg-slate-800 text-[9px] text-indigo-300 border border-slate-700">
                        Gradle
                      </span>
                    </div>
                  </div>

                  {/* Releases Stat Box (1x1 style) */}
                  <div className="bg-indigo-600 rounded-3xl p-5 flex flex-col justify-center items-center text-center shadow-md">
                    <span className="text-3xl font-black text-white leading-none">
                      10+ Anos
                    </span>
                    <span className="text-[9px] uppercase font-bold text-indigo-200 tracking-wider mt-1.5">
                      Aplicativos (2016)
                    </span>
                    <p className="text-[10px] text-indigo-100 opacity-90 mt-1 leading-snug">
                      E desde 2012 no mercado.
                    </p>
                  </div>
                </div>

                {/* Classic core specialties split - Styled as bento row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 bg-slate-900 border border-slate-800 rounded-3xl space-y-1.5 hover:border-slate-700/80 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/10">
                      <Cpu className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-xs font-bold text-slate-200 uppercase tracking-widest mt-2">
                      Mobile Native
                    </h3>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      Kotlin, Compose e Java. Domínio de componentes reativos,
                      serviços em background e performance nativa.
                    </p>
                  </div>

                  <div className="p-5 bg-slate-900 border border-slate-800 rounded-3xl space-y-1.5 hover:border-slate-700/80 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/10">
                      <Code2 className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-xs font-bold text-slate-200 uppercase tracking-widest mt-2">
                      Multiplataforma
                    </h3>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      Dart, Flutter e BLoC Pattern. Componentização desacoplada
                      de alto desempenho e cobertura de teste.
                    </p>
                  </div>

                  <div className="p-5 bg-slate-900 border border-slate-800 rounded-3xl space-y-1.5 hover:border-slate-700/80 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 border border-violet-500/10">
                      <Terminal className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-xs font-bold text-slate-200 uppercase tracking-widest mt-2">
                      DevOps & Web
                    </h3>
                    <p className="text-[11px] text-slate-400 leading-normal">
                      React web, Next.js, Azure pipelines CI/CD, SonarQube
                      quality checks e monitoramento avançado.
                    </p>
                  </div>
                </div>

                {/* Timeline Filters and Content inside Bento borders */}
                <div className="space-y-6 pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-900 pb-4">
                    <div>
                      <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-indigo-400" />
                        Histórico de Carreira (Métricas & Conquistas)
                      </h2>
                      <p className="text-xs text-slate-400">
                        Explore a jornada com foco móvel desde 2016 e
                        especialização corporativa iniciada em 2012.
                      </p>
                    </div>

                    <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800 text-[11px]">
                      {(["all", "mobile", "embedded", "other"] as const).map(
                        (filter) => (
                          <button
                            key={filter}
                            onClick={() => setTimelineFilter(filter)}
                            className={`px-3 py-1 rounded-lg capitalize font-bold transition-all ${
                              timelineFilter === filter
                                ? "bg-slate-850 text-slate-100 shadow-sm"
                                : "text-slate-500 hover:text-slate-300"
                            }`}
                            id={`filter-btn-${filter}`}
                          >
                            {filter === "all"
                              ? "Todos"
                              : filter === "mobile"
                                ? "Mobile"
                                : filter === "embedded"
                                  ? "Embarcados"
                                  : "Outros"}
                          </button>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Vertically Styled Career Feed wrapper */}
                  <div className="space-y-6 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-px before:bg-slate-900">
                    {filteredTimeline.map((item) => (
                      <div
                        key={item.id}
                        className="relative pl-8 group animate-fade-in"
                      >
                        {/* Bullet Marker */}
                        <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-800 group-hover:border-indigo-500 transition-colors flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-indigo-400 transition-colors" />
                        </div>

                        {/* Card Body with Bento design theme rounding and borders */}
                        <div className="bg-slate-900 hover:bg-slate-900/90 border border-slate-800/80 hover:border-slate-700/85 rounded-3xl p-5 space-y-4 transition-all duration-200">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                            <div>
                              <h3 className="text-sm font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                                {item.role}
                              </h3>
                              <p className="text-xs text-slate-400 font-semibold">
                                {item.company}
                              </p>
                            </div>
                            <div className="sm:text-right">
                              <span className="text-[10px] font-mono tracking-wide bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-md text-indigo-300 font-semibold">
                                {item.period}
                              </span>
                              <p className="text-[10px] text-slate-500 mt-1.5 flex items-center gap-1 sm:justify-end font-mono">
                                <MapPin className="w-3 h-3 text-rose-500" />
                                {item.location}
                              </p>
                            </div>
                          </div>

                          <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-3 rounded-2xl border border-slate-850/60 font-medium">
                            {item.description}
                          </p>

                          <div className="space-y-2">
                            <span className="text-[9.5px] font-mono text-slate-500 uppercase tracking-widest font-bold block">
                              Principais Conquistas & Soluções:
                            </span>
                            <ul className="space-y-1.5">
                              {item.achievements.map((ach, idx) => (
                                <li
                                  key={idx}
                                  className="text-slate-300 text-[11.5px] leading-relaxed flex items-start gap-2 font-medium"
                                >
                                  <ChevronRight className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                                  <span>{ach}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex flex-wrap gap-1 mt-4">
                            {item.tags.map((t) => (
                              <span
                                key={t}
                                className="bg-indigo-950/15 text-indigo-300 border border-indigo-950/40 px-2.5 py-0.5 rounded-md text-[9px] font-mono"
                              >
                                #{t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Grid for Certifications & Technical Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                  {/* Left Column: Certifications */}
                  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-sm">
                    <h3 className="text-sm font-bold text-slate-250 flex items-center gap-2 border-b border-slate-800/80 pb-3">
                      <Award className="w-4 h-4 text-indigo-400" />
                      Certificações Oficiais
                    </h3>

                    <div className="space-y-3">
                      {CERTIFICATIONS_DATA.map((cert, index) => (
                        <div
                          key={index}
                          className="flex gap-3 bg-slate-950/50 p-3 rounded-2xl border border-slate-850/60 hover:bg-slate-950/80 transition-all"
                        >
                          <div className="w-8 h-8 rounded-lg bg-indigo-600/10 flex items-center justify-center text-indigo-400 shrink-0">
                            <BookmarkCheck className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-[11.5px] font-bold text-slate-200 leading-tight">
                              {cert.title}
                            </h4>
                            <p className="text-[10px] text-slate-500 mt-0.5 font-semibold">
                              {cert.issuer}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Education, Languages & Methodology */}
                  <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4 shadow-sm">
                    <h3 className="text-sm font-bold text-slate-250 flex items-center gap-2 border-b border-slate-800/80 pb-3">
                      <GraduationCap className="w-4 h-4 text-indigo-400" />
                      Formação & Especialidades
                    </h3>

                    <div className="space-y-4">
                      {/* Educação */}
                      <div className="space-y-2">
                        <div className="bg-slate-950/50 p-3 rounded-2xl border border-slate-850/60">
                          <h4 className="text-[11.5px] font-bold text-slate-200">
                            Bacharelado em Sistemas de Informação
                          </h4>
                          <p className="text-[10px] text-slate-500 font-semibold">
                            Faculdade Impacta Tecnologia | 2013-2016
                          </p>
                        </div>
                        <div className="bg-slate-950/50 p-3 rounded-2xl border border-slate-850/60">
                          <h4 className="text-[11.5px] font-bold text-slate-200">
                            Técnico em Informática
                          </h4>
                          <p className="text-[10px] text-slate-500 font-semibold">
                            ETEC Itaquera | 2010-2011
                          </p>
                        </div>
                      </div>

                      {/* Idiomas */}
                      <div className="space-y-2">
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2">
                          Idiomas
                        </h4>
                        {LANGUAGES_DATA.map((lang, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between items-center text-xs border-b border-slate-850 pb-2"
                          >
                            <span className="font-bold text-slate-300">
                              {lang.name}
                            </span>
                            <span className="text-[10px] font-mono bg-slate-950 px-2.5 py-0.5 rounded-md text-indigo-300 border border-slate-850">
                              {lang.level}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Metodologia de Trabalho */}
                      <div className="p-4 bg-indigo-950/10 border border-indigo-900/15 rounded-2xl space-y-2 mt-2">
                        <span className="text-[9px] font-mono uppercase text-indigo-400 font-bold tracking-widest flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 animate-spin" />{" "}
                          Metodologia
                        </span>
                        <p className="text-[10.5px] text-slate-300 leading-relaxed font-semibold">
                          Forte vivência em equipes ágeis, aplicando GitFlow
                          rigoroso, code reviews com automação no SonarQube e
                          esteiras integradas de CI/CD via Azure DevOps.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "architecture" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                key="architecture-tab"
              >
                <CleanArchVisualizer />
              </motion.div>
            )}

            {activeTab === "flutter_packages" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                key="flutter-packages-tab"
              >
                <FlutterPackages />
              </motion.div>
            )}

            {activeTab === "ai" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.15 }}
                key="ai-tab"
              >
                <AIChatBot />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
