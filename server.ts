import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
export const MAURICIO_RESUME_CONTEXT = `
You are the AI Professional Assistant representing Mauricio Alexandre, a highly skilled and experienced Senior Mobile and Frontend Engineer with 13+ years of overall software experience.
Your goal is to answer questions from recruiters, managers, and engineering leads about Mauricio's background, technical skills, previous work experience, project history, and architecture philosophies.
Answer in the language the user initiated (mostly Portuguese or English), with a professional, confident, clear, and highly competent tone. Act humble but extremely knowledgeable.

KEY PROFILE INFORMATION:

- Name: Mauricio Alexandre (Full name: Mauricio Alexandre Galdino)
- Email: m.alexandre1992@gmail.com
- Main Website/Portfolio: alexandre1992.dev.br
- LinkedIn: linkedin.com/in/mauricioalexandregaldino
- Location: São Paulo, SP, Brazil
- Contact Method: email or LinkedIn is preferred

SUMMARY of QUALIFICATIONS:

- Software Engineer with more than 13 years of overall professional experience, specializing in Mobile App Development (Android natively and Flutter) since 2016, and possessing a solid background in enterprise ERP development using Delphi Intraweb from 2012.
- Deep focus on Clean Architecture, extensive unit/instrumented testing, and best engineering practices.
- Competent in Flutter for cross-platform solutions.
- Strong web frontend experience using React, TypeScript, Next.js, and custom Design Systems.
- Expert in CI/CD pipeline automation (Azure DevOps, GitHub Actions), code analysers (SonarQube), monitoring/telemetry (Datadog, Crashlytics), and Agile methodologies (GitFlow).

DETAILED EXPERIENCES:

1. Fundação Zerrenner (April 2021 - Present | 5 years)
   Role: Mobile Developer (Mobile & Frontend | Android | iOS | Flutter | React)
   Description: Sólida experiência em desenvolvimento mobile e frontend web, especializado na criação de aplicativos nativos e híbridos de alta performance.
   - Mobile Native (Android): Development of Kotlin & Java apps. Deep knowledge of Jetpack Compose, Activities, Services, ContentProviders, JobServices, and Workers. Legacy maintenance, performance optimization, Clean Architecture (Google guidelines), build system Gradle, unit testing with JUnit.
   - Mobile Híbrido (Flutter): Multiplatform apps using Dart/Flutter. Architecture using BLoC for robust state management. Reusable componentized widgets, unit tests with Mocktail.
   - Frontend Web (React): Modern web applications with React.js and TypeScript, Next.js for SSR. Implementation of custom Design Systems, state management with React Query, complex forms with schema validation (e.g., Zod), and advanced filters. Expert in Custom Hooks, server-side pagination, and REST API integration.
   - DevOps & Quality: Git version control (Azure DevOps), SonarQube static code analysis, monitoring with Datadog and Crashlytics. Configuration of CI/CD pipelines in Azure DevOps for automated builds and deployment to the Google Play Store, ensuring agile and reliable delivery.

2. Kantar IBOPE Media (June 2018 - April 2021 | 2 years 11 months)
   Role: Engenheiro de P&D (R&D Engineer)
   Description: Android developer for embedded systems running Android, Linux, and Raspberry Pi.
   - Maintenance of Android system architecture, APIs, and overall system performance.
   - Integrated hardware sensors using Bluetooth BLE on Raspberry Pi.
   - Deep work with native Android components (Application, Activity, Service, ContentProvider, JobService, Worker).
   - Lifecycle management according to Google's best practices.
   - CI/CD build automation with Azure DevOps pipelines, Gradle build system, and JUnit testing.

3. OZ Technology (July 2016 - June 2018 | 2 years)
   Role: Android Developer
   Description: Android developer writing native Java code using Android Studio. Focused on standard Android application life cycle and performance.

4. Coreware Ltda (November 2012 - March 2016 | 3 years 5 months)
   Role: Analista de Desenvolvimento (Development Analyst)
   Description: Full-stack developer using Delphi 7 (Intraweb), Oracle 10g database, JavaScript validations, data modeling in Enterprise Architect.

5. Sitel (April 2012 - November 2012 | 8 months)
   Role: Analista de Suporte (Support Analyst)
   Description: Technical support for Dell clients via chat, remote desktop, and phone.

FORMAÇÃO ACADÊMICA (EDUCATION):

- Bacharelado em Sistemas de Informação (Bachelor's in Information Systems) - Faculdade de Tecnologia de São Paulo (FATEC) (2013 - 2016)
- Técnico em Informática (IT Technical Degree) - ETEC Itaquera (2010 - 2011)

LANGUAGES:

- Portuguese (Native or bilingual proficiency)
- English (Professional working proficiency)

CERTIFICATIONS & HIGHLIGHTS:

- Jetpack Compose: utilizando Lazy Layout e estados
- React: desenvolvendo com JavaScript
- Jetpack Compose: criando um app android
- Testes de unidade e Widget com Mocks: boas práticas no Flutter

COMMON Q&A GUIDELINES:

- When asked about Clean Architecture: Mauricio represents Clean Architecture in 3 neat layers: Data (Repositories, DataSources, Network, Local DB), Domain (Use Cases, Entities, interfaces), and Presentation (UI, Jetpack Compose, ViewModels, or BLoC in Flutter).
- When asked about availability: Open to new challenging remote or hybrid opportunities in São Paulo.
- When asked if you are Mauricio himself: Respond in a way that represents Mauricio ("Sim, eu..." or "No meu papel na Fundação Zerrenner, eu..."), but maintain a polite, AI-supported assistance tone if they ask about technical bot queries ("Como inteligência artificial que apoia meu portfólio...").

IMPORTANT: Focus on Mauricio’s real tech stack and experience. Never invent fictitious experiences. For things outside his profile, politely mention that his expertise lies firmly in Android Native (Kotlin), Flutter, and React Frontend development. Keep answers concise, highly engaging, professional, and well-structured.
`;

app.post("/api/chat", async (req, res) => {
  try {
    const userAgent = req.headers["user-agent"] || "";
    if (
      !userAgent ||
      userAgent.includes("curl") ||
      userAgent.includes("PostmanRuntime")
    ) {
      res.status(403).json({ error: "Acesso negado." });
      return;
    }

    const origin = req.headers.origin;
    const allowedOrigins = [
      "https://alexandre1992.dev.br",
      "https://www.alexandre1992.dev.br",
      "http://localhost:5173",
      "http://localhost:3000",
    ];

    if (!origin || !allowedOrigins.includes(origin)) {
      res.status(403).json({ error: "Origem não autorizada." });
      return;
    }

    const { message, history } = req.body;

    if (!message) {
      res.status(400).json({ error: "Message is required." });
      return;
    }

    const currentApiKey = process.env.GEMINI_API_KEY;

    if (!currentApiKey || currentApiKey === "MY_GEMINI_API_KEY") {
      const mockResponses = [
        "Olá! Atualmente meu portfólio está configurado com mock responses porque a chave de API do Gemini ainda não foi configurada. Como Engenheiro Mobile Sênior, implemento Clean Architecture, Jetpack Compose e Flutter. Como posso te ajudar hoje?",
        "Estou à disposição para responder sobre minha experiência com desenvolvimento Android (Kotlin), Flutter e aplicações React com Design Systems!",
        "Pode entrar em contato comigo pelo email m.alexandre1992@gmail.com ou pelo meu LinkedIn (mauricioalexandregaldino).",
      ];
      const responseText =
        mockResponses[Math.floor(Math.random() * mockResponses.length)];
      res.json({ text: responseText, isMock: true });
      return;
    }

    const aiClient = new GoogleGenAI({
      apiKey: currentApiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });

    const chat = aiClient.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: MAURICIO_RESUME_CONTEXT,
        temperature: 0.7,
      },
      history: history
        ? history.map((h: any) => ({
            role: h.role === "user" ? "user" : "model",
            parts: [{ text: h.text }],
          }))
        : [],
    });

    const result = await chat.sendMessage({
      message: message,
    });

    res.json({ text: result.text || "", isMock: false });
  } catch (error: any) {
    const fallbackResponses = [
      "No momento estou operando em modo de contingência. Posso confirmar que o Mauricio é especialista em Android (Kotlin) e Flutter, mas a conexão com o motor de IA está temporariamente indisponível.",
      "Desculpe a interrupção. O sistema de IA está offline, mas você pode ver meu portfólio completo em alexandre1992.dev.br ou entrar em contato pelo LinkedIn.",
    ];
    res.status(200).json({
      text: fallbackResponses[
        Math.floor(Math.random() * fallbackResponses.length)
      ],
      isMock: true,
    });
  }
});

app.get("/api/pub-packages", async (req, res) => {
  const getPubPackageData = async (
    pkgName: string,
    defaultLikes: number,
    defaultPoints: number,
    defaultPopularity: string,
    defaultVersion: string,
  ) => {
    let version = defaultVersion;
    let likes = defaultLikes;
    let pubPoints = defaultPoints;
    let popularity = defaultPopularity;

    try {
      const infoRes = await fetch(`https://pub.dev/api/packages/${pkgName}`);
      if (infoRes.ok) {
        const infoJson = (await infoRes.json()) as any;
        if (infoJson?.latest?.version) {
          version = infoJson.latest.version;
        }
      }
    } catch (e) {}

    try {
      const metricsRes = await fetch(
        `https://pub.dev/api/packages/${pkgName}/metrics`,
      );
      if (metricsRes.ok) {
        const metricsJson = (await metricsRes.json()) as any;
        const score = metricsJson?.score || metricsJson?.scorecard;
        if (score) {
          if (typeof score.likeCount === "number") {
            likes = score.likeCount;
          } else if (typeof score.likes === "number") {
            likes = score.likes;
          }

          if (typeof score.grantedPoints === "number") {
            pubPoints = score.grantedPoints;
          }

          if (typeof score.popularityScore === "number") {
            popularity = Math.round(score.popularityScore * 100) + "%";
          }
        }
      }
    } catch (e) {}

    return { name: pkgName, version, likes, pubPoints, popularity };
  };

  try {
    const results = await Promise.all([
      getPubPackageData("flutter_gemini_nano", 48, 135, "94%", "2.0.0"),
      getPubPackageData("device_context_plus", 31, 125, "91%", "1.0.3"),
    ]);
    res.json(results);
  } catch (error: any) {
    res.status(500).json({
      error: "Failed to fetch metrics",
    });
  }
});

async function configureServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {});
}

configureServer();
