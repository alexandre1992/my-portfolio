import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  Heart,
  Globe,
  Copy,
  Check,
  Code,
  ExternalLink,
  BookOpen,
  ShieldCheck,
  Flame,
  RefreshCw,
} from "lucide-react";

interface PackageData {
  name: string;
  version: string;
  description: string;
  pubPoints: number;
  likes: number;
  popularity: string;
  githubUrl: string;
  pubUrl: string;
  platforms: string[];
  features: string[];
  installation: string;
  exampleCode: string;
  tags: string[];
}

const PACKAGES_DATA: PackageData[] = [
  {
    name: "flutter_gemini_nano",
    version: "2.0.0",
    description:
      "Integração do modelo on-device Gemini Nano do Google para aplicações Flutter. Permite executar processamento de Linguagem Natural (NLP) localmente com baixíssima latência, privacidade absoluta e sem custos de rede ou chaves de API.",
    pubPoints: 135,
    likes: 48,
    popularity: "94%",
    githubUrl: "https://github.com/alexandre1992/flutter_gemini_nano",
    pubUrl: "https://pub.dev/packages/flutter_gemini_nano",
    platforms: ["Android"],
    features: [
      "Inferência de texto de altíssima velocidade e processamento local offline (on-device).",
      "Suporte nativo para tarefas de sumarização, correção gramatical inteligente e categorização de conteúdo.",
      "Zero custos de infraestrutura ou latência de consulta - modelo rodando diretamente no hardware de dispositivos compatíveis.",
      "Garante a privacidade estrita dos dados sensíveis do usuário, pois nenhuma informação sai do aparelho ou se comunica com servidores.",
    ],
    installation: "flutter pub add flutter_gemini_nano",
    exampleCode: `import 'package:flutter/material.dart';
import 'package:flutter_gemini_nano/flutter_gemini_nano.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      debugShowCheckedModeBanner: false,
      home: GeminiNanoExample(),
    );
  }
}

class GeminiNanoExample extends StatefulWidget {
  const GeminiNanoExample({super.key});

  @override
  State<GeminiNanoExample> createState() => _GeminiNanoExampleState();
}

class _GeminiNanoExampleState extends State<GeminiNanoExample> {
  final _plugin = FlutterGeminiNano();
  final _controller = TextEditingController();

  bool _loading = false;
  bool? _isAvailable;
  String? _result;
  String? _error;

  @override
  void initState() {
    super.initState();
    _checkAvailability();
  }

  Future<void> _checkAvailability() async {
    try {
      final available = await _plugin.isAvailable();
      setState(() {
        _isAvailable = available;
      });
    } catch (_) {
      setState(() {
        _isAvailable = false;
      });
    }
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  Future<void> _runGemini() async {
    if (_isAvailable != true) {
      setState(() {
        _error = 'Gemini Nano no available on this device.';
      });
      return;
    }

    setState(() {
      _loading = true;
      _result = null;
      _error = null;
    });

    try {
      final response = await _plugin.generate(
        prompt: _controller.text,
        temperature: 0.7,
        maxOutputTokens: 128,
      );

      setState(() {
        _result = response.result ?? 'No resposta';
      });
    } on UnsupportedError catch (e) {
      setState(() {
        _error = e.message;
      });
    } catch (e) {
      setState(() {
        _error = e.toString();
      });
    } finally {
      setState(() {
        _loading = false;
      });
    }
  }

  Widget _availabilityStatus() {
    if (_isAvailable == null) {
      return const Row(
        children: [
          SizedBox(
            height: 16,
            width: 16,
            child: CircularProgressIndicator(strokeWidth: 2),
          ),
          SizedBox(width: 8),
          Text('Checking Gemini Nano...'),
        ],
      );
    }

    return Row(
      children: [
        Icon(
          _isAvailable! ? Icons.check_circle : Icons.cancel,
          color: _isAvailable! ? Colors.green : Colors.red,
          size: 18,
        ),
        const SizedBox(width: 8),
        Text(
          _isAvailable! ? 'Gemini Nano available' : 'Gemini Nano unavailable',
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Flutter Gemini Nano Example')),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(
          children: [
            _availabilityStatus(),
            const SizedBox(height: 12),
            TextField(
              controller: _controller,
              decoration: const InputDecoration(
                labelText: 'Prompt',
                border: OutlineInputBorder(),
              ),
              minLines: 2,
              maxLines: 4,
            ),
            const SizedBox(height: 12),
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                onPressed: (_loading || _isAvailable != true)
                    ? null
                    : _runGemini,
                child: _loading
                    ? const SizedBox(
                        height: 20,
                        width: 20,
                        child: CircularProgressIndicator(strokeWidth: 2),
                      )
                    : const Text('Run Gemini Nano'),
              ),
            ),
            const SizedBox(height: 16),
            if (_result != null)
              Expanded(
                child: SingleChildScrollView(
                  child: Text(_result!, style: const TextStyle(fontSize: 16)),
                ),
              ),
            if (_error != null)
              Text(_error!, style: const TextStyle(color: Colors.red)),
          ],
        ),
      ),
    );
  }
}`,
    tags: ["Generative AI", "Gemini Nano", "On-Device AI", "Android"],
  },
  {
    name: "device_context_plus",
    version: "1.0.3",
    description:
      "Extensão de hardware de alto nível para extração inteligente e reativa de contextos operacionais, telemetria de consumo energético, estado térmico detalhado e ciclo de vida em aplicações Flutter.",
    pubPoints: 125,
    likes: 31,
    popularity: "91%",
    githubUrl: "https://github.com/alexandre1992/device_context_plus",
    pubUrl: "https://pub.dev/packages/device_context_plus",
    platforms: ["Android", "iOS"],
    features: [
      "ID da Equipe iOS (recurso exclusivo)",
      "Origem da instalação no Android (Play Store, APK, etc.)",
      "Informações do dispositivo e do sistema operacional",
      "Localidade (idioma/região) e fuso horário",
      "API estruturada e tipada",
    ],
    installation: "flutter pub add device_context_plus",
    exampleCode: `import 'package:device_context_plus/device_context_plus.dart';
import 'package:device_context_plus/models/device_context.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  DeviceContext? data;

  @override
  void initState() {
    super.initState();
    loadData();
  }

  Future<void> loadData() async {
    final result = await DeviceContextPlus.getAll();
    setState(() => data = result);
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        appBar: AppBar(title: const Text('Device Context Example')),
        body: data == null
            ? const Center(child: CircularProgressIndicator())
            : ListView(
                padding: const EdgeInsets.all(16),
                children: [
                  const Text(
                    '📱 App Information',
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 8),
                  ...data!.app.entries.map((e) => _buildItem(e.key, e.value)),
                  const SizedBox(height: 20),
                  const Text(
                    '🧠 Device Information',
                    style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                  ),
                  const SizedBox(height: 8),
                  ...data!.device.entries.map(
                    (e) => _buildItem(e.key, e.value),
                  ),
                ],
              ),
      ),
    );
  }

  Widget _buildItem(String key, dynamic value) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('$key: ', style: const TextStyle(fontWeight: FontWeight.w600)),
          Expanded(child: Text(value.toString())),
        ],
      ),
    );
  }
}
`,
    tags: [
      "Device Information",
      "System Information",
      "Analytics",
      "Team ID",
      "Package Name",
      "Version",
      "Build Number",
    ],
  },
];

export default function FlutterPackages() {
  const [packages, setPackages] = useState<PackageData[]>(PACKAGES_DATA);
  const [activePkgIdx, setActivePkgIdx] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [syncStatus, setSyncStatus] = useState<"local" | "live" | "error">(
    "local",
  );
  const [lastUpdated, setLastUpdated] = useState<string>("");

  const activePkg = packages[activePkgIdx];

  const fetchLiveMetrics = async () => {
    setIsSyncing(true);
    try {
      const res = await fetch("/api/pub-packages");
      if (res.ok) {
        const liveData = await res.json();
        if (Array.isArray(liveData)) {
          // Merge live stats (likes, version, pubPoints, popularity) into packages data
          const updated = packages.map((pkg) => {
            const match = liveData.find((item: any) => item.name === pkg.name);
            if (match) {
              return {
                ...pkg,
                version: match.version || pkg.version,
                likes: match.likes || pkg.likes,
                pubPoints: match.pubPoints || pkg.pubPoints,
                popularity: match.popularity || pkg.popularity,
              };
            }
            return pkg;
          });
          setPackages(updated);
          setSyncStatus("live");
          const now = new Date();
          setLastUpdated(
            now.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }),
          );
        }
      } else {
        setSyncStatus("error");
      }
    } catch (e) {
      console.error("Error fetching live package data:", e);
      setSyncStatus("error");
    } finally {
      setIsSyncing(false);
    }
  };

  useEffect(() => {
    fetchLiveMetrics();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(activePkg.installation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden"
      id="flutter-packages-container"
    >
      {/* Brand Ambient Glows: Mixed Flutter Blue and Android Green */}
      <div className="absolute -top-10 -right-10 w-52 h-52 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-850 pb-5 mb-6">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <span className="inline-flex p-1 bg-sky-500/10 text-sky-400 rounded-lg">
                <Globe className="w-5 h-5" />
              </span>
              Contribuições Open-Source Flutter
            </h2>

            {/* Real-Time Sync Indicator Badge */}
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono bg-slate-950 border border-slate-800">
              {isSyncing ? (
                <>
                  <RefreshCw className="w-3 h-3 text-sky-400 animate-spin" />
                  <span className="text-slate-400">
                    Sincronizando pub.dev...
                  </span>
                </>
              ) : syncStatus === "live" ? (
                <>
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-emerald-400 font-bold">
                    Métricas em Tempo Real
                  </span>
                  {lastUpdated && (
                    <span className="text-[9px] text-slate-500">
                      ({lastUpdated})
                    </span>
                  )}
                </>
              ) : syncStatus === "error" ? (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span className="text-amber-400">Offline (Local Cache)</span>
                </>
              ) : (
                <>
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  <span className="text-slate-400">Dados Locais</span>
                </>
              )}
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-1.5">
            Biblioteca de pacotes reais de Mauricio Alexandre publicados no
            portal oficial do Pub.dev, sincronizados dinamicamente.
          </p>
        </div>

        {/* Pub.dev Publisher Button with Flutter & Android Blend Styling */}
        <a
          href="https://pub.dev/publishers/alexandre1992.dev.br/packages"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-3 py-1.5 bg-slate-950 border border-slate-800 hover:border-sky-500/40 hover:bg-slate-900 rounded-xl text-xs font-mono text-sky-400 transition-all self-start md:self-auto hover:shadow-md hover:shadow-sky-500/5 group"
          id="btn-pub-publisher"
        >
          <Code className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-12 transition-transform" />
          alexandre1992.dev.br/packages
          <ExternalLink className="w-3 h-3 text-slate-500" />
        </a>
      </div>

      {/* Package Selector Cards (Horizontal Bento Grid Selection) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {packages.map((pkg, idx) => (
          <button
            key={pkg.name}
            onClick={() => setActivePkgIdx(idx)}
            className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden flex flex-col justify-between h-[130px] ${
              activePkgIdx === idx
                ? "bg-slate-950 border-sky-500 ring-2 ring-sky-500/10 shadow-lg shadow-sky-950/40"
                : "bg-slate-950/40 border-slate-800/80 hover:border-slate-700/60 text-slate-400 hover:text-slate-200"
            }`}
            id={`btn-select-package-${pkg.name}`}
          >
            {/* Visual Indicator of selected package (Blends Flutter Blue and Android Green) */}
            {activePkgIdx === idx && (
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-500 to-emerald-400"></div>
            )}

            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-black text-sky-400">
                  {pkg.name}
                </span>
                <span className="text-[10px] font-mono bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded text-slate-300 font-bold">
                  v{pkg.version}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 line-clamp-2 mt-1.5 leading-snug">
                {pkg.description}
              </p>
            </div>

            <div className="flex items-center gap-4 mt-2 border-t border-slate-900 pt-2 text-[10px] font-mono text-slate-500">
              <span className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
                {pkg.pubPoints} pts
              </span>
              <span className="flex items-center gap-1 hover:text-rose-400 transition-colors">
                <Heart className="w-3 h-3 text-rose-500" />
                {pkg.likes} likes
              </span>
              <span className="text-emerald-400 font-bold ml-auto">
                {pkg.popularity} popularidade
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Active Package Deep Dive (Grid) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Hand: Specifications & Installation */}
        <div className="lg:col-span-5 space-y-5">
          {/* Pub.dev Score Card */}
          <div className="bg-slate-950 border border-slate-800/80 rounded-2xl p-4.5 space-y-3.5 shadow-sm">
            <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
              Métricas Oficiais Pub.dev
            </span>

            <div className="grid grid-cols-3 gap-2.5 text-center">
              <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-850">
                <p className="text-[9px] font-mono text-slate-500 font-bold">
                  LIKES
                </p>
                <p className="text-base font-black text-slate-100 mt-0.5">
                  {activePkg.likes}
                </p>
              </div>
              <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-850">
                <p className="text-[9px] font-mono text-slate-500 font-bold">
                  PONTOS
                </p>
                <p className="text-base font-black text-sky-400 mt-0.5">
                  {activePkg.pubPoints}
                </p>
              </div>
              <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-850">
                <p className="text-[9px] font-mono text-slate-500 font-bold">
                  POPULARIDADE
                </p>
                <p className="text-base font-black text-emerald-400 mt-0.5">
                  {activePkg.popularity}
                </p>
              </div>
            </div>

            {/* Platform labels and Null safety badge */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-900">
              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[9px] font-mono font-bold">
                Null Safety
              </span>
              <span className="bg-slate-900 text-slate-400 border border-slate-800 px-2 py-0.5 rounded text-[9px] font-mono">
                Dart / Flutter
              </span>
              {activePkg.platforms.map((p) => (
                <span
                  key={p}
                  className="bg-slate-900 text-slate-400 px-1.5 py-0.5 rounded text-[9px] font-mono"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Installation box */}
          <div className="bg-slate-950 border border-slate-800/80 rounded-2xl p-4.5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                Instalação (pubspec.yaml ou flutter CLI)
              </span>
              <span className="text-[9px] font-mono text-slate-400">
                flutter cli
              </span>
            </div>

            <div className="flex items-center justify-between bg-slate-900 border border-slate-850 rounded-xl p-3 font-mono text-xs text-slate-300">
              <span className="truncate mr-2 text-sky-300 select-all">
                {activePkg.installation}
              </span>
              <button
                onClick={handleCopy}
                className="hover:text-sky-400 shrink-0 text-slate-500 transition-colors p-1 cursor-pointer"
                title="Copiar comando"
                id="btn-copy-install-command"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Verification stamp with Flutter/Android subtle blend */}
          <div className="p-4 bg-gradient-to-br from-sky-950/10 to-emerald-950/10 border border-sky-900/10 rounded-2xl space-y-2">
            <div className="flex items-center gap-1.5 text-sky-400 text-xs font-bold font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Desenvolvido por Mauricio Alexandre
            </div>
            <p className="text-[10.5px] text-slate-300 leading-relaxed font-semibold">
              Projetos open-source mantidos com rigor técnico, formatação
              conforme as melhores diretrizes de Dart Lint e adequação rígida de
              regras pubspec em conformidade com o ecossistema oficial Flutter.
            </p>
          </div>
        </div>

        {/* Right Hand: Code Examples and Detailed Features */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          {/* Features checkmark list */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-sky-400" />
              Funcionalidades Principais do {activePkg.name}
            </h4>

            <div className="grid grid-cols-1 gap-2.5 pt-1">
              {activePkg.features.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 text-[11.5px] text-slate-300 leading-snug"
                >
                  <div className="w-4 h-4 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-emerald-300" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code mock terminal */}
          <div className="bg-slate-950 border border-slate-800/80 rounded-2xl overflow-hidden shadow-md">
            <div className="bg-slate-950 px-4 py-3 border-b border-slate-850 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                <span className="text-[10px] font-mono text-sky-300">
                  example_usage.dart
                </span>
              </div>
              <span className="text-[9px] font-mono bg-slate-900 border border-slate-850 text-slate-400 px-2 py-0.5 rounded">
                DART
              </span>
            </div>

            <pre className="p-4 overflow-x-auto text-[11px] font-mono text-slate-300 max-h-[480px] overflow-y-auto whitespace-pre leading-normal select-all bg-slate-950/80">
              <code>{activePkg.exampleCode}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
