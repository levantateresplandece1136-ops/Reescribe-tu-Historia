import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

// Increase payload limit for safety
app.use(express.json({ limit: "10mb" }));

// Initialize Gemini Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// API endpoint to process user answers and generate the final story rewrite
app.post("/api/rewrite", async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res.status(400).json({ error: "No data provided" });
    }

    const { step1, step2, step3, step4 } = data;

    const systemInstruction = `
Actúas como un equipo de mentores altamente capacitados para jóvenes de entre 15 y 25 años:
• Un consejero bíblico centrado en Cristo.
• Un psicólogo experto en adolescentes y jóvenes, especializado en trauma y reestructuración cognitiva.
• Un coach de propósito de vida.
• Un experto en neurociencia del aprendizaje.
• Un storyteller capaz de crear experiencias memorables y profundas.

Tu misión es recibir las respuestas detalladas del usuario a lo largo de un taller interactivo de 4 pasos ("Reconoce", "Reenfoca", "Ríndete", "Reestructura") basado en Proverbios 3:5-7, y generar una reinterpretación redentora y sanadora profunda.

Debes analizar las respuestas con extrema empatía, validando su dolor pero identificando con precisión quirúrgica:
1. Las mentiras principales que han estado creyendo o asumiendo sobre sí mismos o sobre Dios debido a las circunstancias difíciles.
2. Las fortalezas, virtudes y evidencias de la gracia protectora de Dios que ya operaron en ellos durante sus peores tormentas (resiliencia, supervivencia).
3. Las emociones dominantes detrás de su relato.
4. Las verdades descubiertas que contradicen sus mentiras iniciales.

Luego, debes redactar dos secciones principales:
- "EL SIGUIENTE CAPÍTULO DE TU HISTORIA": Una narrativa personalizada en segunda persona ('tú') de aproximadamente 200-350 palabras, en español, que tome el dolor relatado en el Paso 1 y lo transforme en una historia de redención en desarrollo. No debe ser un optimismo superficial ("todo pasa por algo"), sino un enfoque de Providencia Redentora (Génesis 50:20): el dolor es real y dolió, pero Dios está usando este suelo árido para formar en ellos un carácter inquebrantable, madurez y propósito eterno.
- "UNA ORACIÓN PASTORAL PERSONALIZADA": Una oración pastoral, sincera, compasiva, cercana y llena de esperanza de aproximadamente 100-180 palabras, que entregue su dolor a la Cruz, agradezca por sus fortalezas y pida gracia para dar los siguientes pasos (sus Micro-Acciones de Victoria).

El tono debe ser el de un mentor sabio, profundamente amoroso, cercano, no dogmático ni acusador, que habla con lenguaje fresco pero con una teología bíblica funcional muy sólida y un profundo respeto psicológico.
`;

    const prompt = `
Aquí están las respuestas recolectadas del joven a lo largo de los cuatro pasos. Analízalas con mucha atención y amor:

==================================================
PASO 1: RECONOCE (Autopsia de la Narrativa Actual - Lo que pasó, pensamientos y sentimientos)
- ¿Qué pasó? (Cuéntamelo como si fuera a tu mejor amigo):
"${step1?.whatHappened || "No especificado"}"

- ¿Qué fue lo primero que pensaste?:
"${step1?.firstThought || "No especificado"}"

- ¿Qué sentiste?:
"${step1?.feeling || "No especificado"}"

- ¿Qué historia comenzaste a creer sobre ti? (Mentira/Interpretación fatalista):
"${step1?.storyBelieved || "No especificado"}"

- Hechos objetivos vs Interpretaciones:
Hechos objetivos: "${step1?.facts || "No especificado"}"
Interpretaciones subjetivas: "${step1?.interpretations || "No especificado"}"

==================================================
PASO 2: REENFOCA (Desafío Neuro-Cognitivo, SAR y Renovación de la mente)
- ¿Tiene pruebas ese pensamiento?:
"${step2?.hasProof || "No especificado"}"

- ¿Existe otra forma de verlo?:
"${step2?.alternativeView || "No especificado"}"

- ¿Qué le dirías a un amigo en la misma situación?:
"${step2?.friendAdvice || "No especificado"}"

- ¿Qué crees que Jesús diría acerca de esta situación?:
"${step2?.jesusView || "No especificado"}"

- ¿Qué verdad bíblica contradice esa mentira?:
"${step2?.biblicalTruth || "No especificado"}"

- Anomalías en la maldición (3 cosas específicas de gracia común o libradas):
${step2?.anomalies ? step2.anomalies.map((a: string, i: number) => `${i + 1}. ${a}`).join("\n") : "Ninguna especificada"}

==================================================
PASO 3: RÍNDETE (Crecimiento Postraumático y Providencia Redentora)
- ¿Qué carga intentas llevar solo?:
"${step3?.burdenCarried || "No especificado"}"

- ¿Qué miedo necesitas entregar a Dios?:
"${step3?.miedoEntregar || "No especificado"}"

- ¿Qué parte de esta situación NO puedes controlar?:
"${step3?.uncontrollablePart || "No especificado"}"

- ¿Qué podría estar formando Dios en tu carácter?:
"${step3?.characterFormed || "No especificado"}"

- ¿Qué versión de ti quiere desarrollar Dios mediante esta experiencia?:
"${step3?.developedVersion || "No especificado"}"

- Nuevo nombre redentor del evento:
"${step3?.redemptiveName || "No especificado"}"

==================================================
PASO 4: REESTRUCTURA (La micro-acción de victoria / Hábitos y SAR)
- ¿Qué pequeña misión puedes hacer hoy?:
"${step4?.smallMission || "No especificado"}"

- ¿Cuál es tu MAVI (Micro-Acción de Victoria Inmediata, <2 min)?:
"${step4?.mavi || "No especificado"}"

- ¿Qué hábito quieres comenzar?:
"${step4?.habitToStart || "No especificado"}"

- Diario de Providencia Evidente (3 evidencias de la gracia de Dios hoy):
${step4?.evidences ? step4.evidences.map((e: string, i: number) => `${i + 1}. ${e}`).join("\n") : "Ninguna especificada"}
==================================================

Por favor, genera la respuesta estruturada en formato JSON correspondiente a las mentiras identificadas, fortalezas identificadas, emociones dominantes, verdades descubiertas, el nuevo capítulo de su historia redactado con excelencia y la oración pastoral.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            lies: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Las 2 o 3 mentiras principales que el usuario ha creído sobre sí mismo o sobre Dios en esta crisis.",
            },
            strengths: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Las fortalezas, virtudes o reflejos de la gracia de Dios que se manifestaron en el dolor (resiliencia, supervivencia, empatía).",
            },
            emotions: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Las emociones dominantes identificadas en las respuestas.",
            },
            truths: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Las verdades bíblicas y cognitivas descubiertas que desmienten las mentiras.",
            },
            newNarrative: {
              type: Type.STRING,
              description: "Una reinterpretación narrativa profunda de la historia del usuario (200-350 palabras), en español, que conecta su sufrimiento con la providencia y el amor de Dios. Usa un tono inspirador y restaurador. Formato Markdown con buen uso de negritas y párrafos.",
            },
            pastoralPrayer: {
              type: Type.STRING,
              description: "Una oración pastoral personalizada (100-180 palabras) llena de esperanza, amor y gracia, guiando al usuario a entregar su carga a Dios. Formato Markdown.",
            },
          },
          required: ["lies", "strengths", "emotions", "truths", "newNarrative", "pastoralPrayer"],
        },
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("Empty response from Gemini API");
    }

    const result = JSON.parse(text.trim());
    res.json(result);
  } catch (error: any) {
    console.error("Error processing rewrite request:", error);
    res.status(500).json({ error: error?.message || "Internal Server Error" });
  }
});

// Configure Vite or Static Files
async function startServer() {
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
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
