import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FullUserData, GeminiRewriteResult } from "./types";
import MentorsIntro from "./components/MentorsIntro";
import Step1Reconoce from "./components/Step1Reconoce";
import Step2Reenfoca from "./components/Step2Reenfoca";
import Step3Rindete from "./components/Step3Rindete";
import Step4Reestructura from "./components/Step4Reestructura";
import StorySummary from "./components/StorySummary";
import { BookOpen, Shield, HelpCircle, Heart, User, Sparkles, MessageCircle } from "lucide-react";

const initialUserData: FullUserData = {
  step1: {
    whatHappened: "",
    firstThought: "",
    feeling: "",
    storyBelieved: "",
    facts: "",
    interpretations: "",
  },
  step2: {
    hasProof: "",
    alternativeView: "",
    friendAdvice: "",
    jesusView: "",
    biblicalTruth: "",
    anomalies: ["", "", ""],
  },
  step3: {
    burdenCarried: "",
    miedoEntregar: "",
    uncontrollablePart: "",
    characterFormed: "",
    developedVersion: "",
    redemptiveName: "",
  },
  step4: {
    smallMission: "",
    mavi: "",
    habitToStart: "",
    evidences: ["", "", ""],
  },
};

export default function App() {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [userData, setUserData] = useState<FullUserData>(initialUserData);
  const [rewriteResult, setRewriteResult] = useState<GeminiRewriteResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);

  const startJourney = () => {
    setCurrentStep(1);
  };

  const handleStep1Complete = (data: typeof userData.step1) => {
    setUserData((prev) => ({ ...prev, step1: data }));
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStep2Complete = (data: typeof userData.step2) => {
    setUserData((prev) => ({ ...prev, step2: data }));
    setCurrentStep(3);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStep3Complete = (data: typeof userData.step3) => {
    setUserData((prev) => ({ ...prev, step3: data }));
    setCurrentStep(4);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStep4Complete = async (data: typeof userData.step4) => {
    const finalUserData = { ...userData, step4: data };
    setUserData(finalUserData);
    setIsLoading(true);
    setApiError(null);

    try {
      const response = await fetch("/api/rewrite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalUserData),
      });

      if (!response.ok) {
        throw new Error("Ocurrió un error al conectar con el servidor de mentoría.");
      }

      const result: GeminiRewriteResult = await response.json();
      setRewriteResult(result);
      setCurrentStep(5);
    } catch (err: any) {
      console.error(err);
      setApiError(err.message || "Hubo un error al procesar tu historia. Inténtalo de nuevo.");
    } finally {
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleReset = () => {
    setUserData(initialUserData);
    setRewriteResult(null);
    setApiError(null);
    setCurrentStep(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Dynamic values based on step
  const getProgressPercentage = () => {
    if (currentStep === 0) return 0;
    if (currentStep === 5) return 100;
    return currentStep * 20; // 20%, 40%, 60%, 80%
  };

  const getStepQuote = () => {
    switch (currentStep) {
      case 1:
        return "«La verdad os hará libres.» — Juan 8:32";
      case 2:
        return "«No os conforméis a este siglo, sino transformaos...» — Romanos 12:2";
      case 3:
        return "«Echa sobre Jehová tu carga, y él te sustentará.» — Salmo 55:22";
      case 4:
        return "«La fe sin obras está muerta.» — Santiago 2:17";
      default:
        return "";
    }
  };

  const renderActiveMentorBubble = () => {
    if (currentStep === 0 || currentStep === 5) return null;
    
    let mentorName = "";
    let mentorRole = "";
    let mentorAdvice = "";
    let mentorAvatar = "";

    if (currentStep === 1) {
      mentorName = "Dra. Valeria";
      mentorRole = "Psicóloga";
      mentorAdvice = "Hola, estoy aquí contigo. Escribir ayuda a calmar la amígdala cerebral y regula las emociones. Desahógate con total confianza.";
      mentorAvatar = "🧠";
    } else if (currentStep === 2) {
      mentorName = "Santi & Dr. Lucas";
      mentorRole = "Storyteller & Neurocientífico";
      mentorAdvice = "¡Buen trabajo desahogándote! Ahora entrenemos el SAR del cerebro buscando excepciones. Desafiemos la mentira.";
      mentorAvatar = "🔍";
    } else if (currentStep === 3) {
      mentorName = "Mateo";
      mentorRole = "Consejero Bíblico";
      mentorAdvice = "No estás solo con esa carga. Miremos la cruz de Cristo: el mayor ejemplo de dolor transformado en propósito redentor.";
      mentorAvatar = "✝️";
    } else if (currentStep === 4) {
      mentorName = "Sofía";
      mentorRole = "Coach de Propósito";
      mentorAdvice = "La fe se activa con micro-pasos. Definamos una Micro-Acción de Victoria que demuestre que decides avanzar.";
      mentorAvatar = "⚡";
    }

    return (
      <div className="bg-white border border-stone-200/80 rounded-2xl p-4 shadow-sm flex items-start gap-3.5 mb-8 max-w-2xl mx-auto">
        <span className="text-2xl p-2 bg-stone-100 rounded-xl shrink-0">{mentorAvatar}</span>
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-display font-bold text-stone-900 text-xs">{mentorName}</span>
            <span className="text-[9px] font-mono uppercase bg-hope-100 text-hope-800 px-1.5 py-0.5 rounded font-semibold">
              {mentorRole}
            </span>
          </div>
          <p className="text-xs text-stone-600 mt-1 font-sans leading-relaxed">
            "{mentorAdvice}"
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF8F6] text-[#2C2522] flex flex-col antialiased smooth-scroll pb-16">
      {/* Header Bar */}
      <header className="sticky top-0 z-50 bg-[#FAF8F6]/95 backdrop-blur-md border-b border-stone-200/60 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={handleReset}>
            <span className="text-xl">📖</span>
            <span className="font-display font-extrabold text-stone-900 text-sm tracking-wider uppercase">
              Reescribe tu historia
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-stone-400 uppercase tracking-widest hidden sm:inline-block">
              Basado en Proverbios 3:5-7
            </span>
            <a
              href="#mentors-intro-view"
              onClick={() => setCurrentStep(0)}
              className="text-xs font-mono text-stone-500 hover:text-stone-800 border border-stone-300 rounded-lg px-2.5 py-1 bg-white shadow-3xs"
            >
              Mentoría
            </a>
          </div>
        </div>
      </header>

      {/* Progressive Progress Bar */}
      {currentStep > 0 && (
        <div className="w-full bg-stone-200 h-1.5 sticky top-[53px] z-50">
          <div
            className="bg-hope-500 h-full transition-all duration-500 ease-out"
            style={{ width: `${getProgressPercentage()}%` }}
          />
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-grow py-6 md:py-10">
        {/* Step quote display between sections */}
        {currentStep > 0 && currentStep < 5 && (
          <div className="text-center mb-6">
            <span className="text-[11px] font-mono italic text-hope-600/90 font-medium">
              {getStepQuote()}
            </span>
          </div>
        )}

        {/* Mentor bubble helper */}
        {renderActiveMentorBubble()}

        {/* API Error Notification */}
        {apiError && (
          <div className="max-w-3xl mx-auto px-4 mb-6">
            <div className="bg-rose-50 border border-rose-200 text-rose-800 p-4 rounded-xl text-xs flex gap-3 items-center">
              <span>⚠️</span>
              <div className="flex-grow">
                <strong>Error al generar el diagnóstico:</strong> {apiError}
              </div>
              <button
                onClick={() => setApiError(null)}
                className="text-rose-500 hover:text-rose-800 font-bold px-2 py-1"
              >
                Cerrar
              </button>
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {currentStep === 0 && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <MentorsIntro onStart={startJourney} />
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Step1Reconoce
                initialData={userData.step1}
                onNext={handleStep1Complete}
                onBack={() => setCurrentStep(0)}
              />
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Step2Reenfoca
                initialData={userData.step2}
                onNext={handleStep2Complete}
                onBack={() => setCurrentStep(1)}
              />
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Step3Rindete
                initialData={userData.step3}
                onNext={handleStep3Complete}
                onBack={() => setCurrentStep(2)}
              />
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Step4Reestructura
                initialData={userData.step4}
                onNext={handleStep4Complete}
                onBack={() => setCurrentStep(3)}
                isLoading={isLoading}
              />
            </motion.div>
          )}

          {currentStep === 5 && rewriteResult && (
            <motion.div
              key="summary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <StorySummary
                result={rewriteResult}
                userData={userData}
                onReset={handleReset}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-stone-200/60 py-6 px-6 text-center text-xs text-stone-400 font-mono">
        <p>© 2026 "Reescribe tu Historia". Todos los derechos reservados.</p>
        <p className="mt-1 text-[10px] text-stone-300">
          Una fusión de Psicología Cognitiva, Neurociencia y Consejería Bíblica Centrada en Cristo.
        </p>
      </footer>
    </div>
  );
}
