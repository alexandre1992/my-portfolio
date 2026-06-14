import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Google GenAI Client dynamically inside the handler to support secrets configured at runtime
import { MAURICIO_RESUME_CONTEXT } from "./src/utils/resumeContext";

// AI Assistant chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message) {
      res.status(400).json({ error: "Message is required." });
      return;
    }

    const currentApiKey = process.env.GEMINI_API_KEY;

    if (!currentApiKey || currentApiKey === "MY_GEMINI_API_KEY") {
      // Fallback mock responses when API key is not configured yet
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

    // Format chat history for @google/genai SDK
    // The chat history can be built using standard roles 'user' and 'model'
    const chat = aiClient.chats.create({
      model: "gemini-3.5-flash",
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
    console.error("Gemini API Error:", error);
    res.status(500).json({
      error: "Failed to communicate with Gemini AI Assistant.",
      details: error.message,
    });
  }
});

// Proxy endpoint to fetch real-time stats from pub.dev
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
      // 1. Fetch metadata
      const infoRes = await fetch(`https://pub.dev/api/packages/${pkgName}`);
      if (infoRes.ok) {
        const infoJson = (await infoRes.json()) as any;
        if (infoJson?.latest?.version) {
          version = infoJson.latest.version;
        }
      }
    } catch (e) {
      console.warn(`Error fetching metadata for ${pkgName}:`, e);
    }

    try {
      // 2. Fetch metrics
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
    } catch (e) {
      console.warn(`Error fetching metrics for ${pkgName}:`, e);
    }

    return { name: pkgName, version, likes, pubPoints, popularity };
  };

  try {
    const results = await Promise.all([
      getPubPackageData("flutter_gemini_nano", 48, 135, "94%", "2.0.0"),
      getPubPackageData("device_context_plus", 31, 125, "91%", "1.0.3"),
    ]);
    res.json(results);
  } catch (error: any) {
    console.error("Error fetching pub.dev packages metrics:", error);
    res
      .status(500)
      .json({
        error: "Failed to fetch metrics from pub.dev background services",
      });
  }
});

// Configure Vite or Serve Static Files
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

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

configureServer();
