import React from "react";
import { motion } from "motion/react";
import { GeminiRewriteResult, FullUserData } from "../types";
import { Heart, BookOpen, Sparkles, RefreshCw, CheckSquare, Award, AlertTriangle, ShieldCheck, Flame } from "lucide-react";

interface StorySummaryProps {
  result: GeminiRewriteResult;
  userData: FullUserData;
  onReset: () => void;
}

export default function StorySummary({ result, userData, onReset }: StorySummaryProps) {
  return (
    <div id="story-summary-view" className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Celebration Header */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-mono font-bold text-hope-600 bg-hope-100 px-3 py-1 rounded-full uppercase">
            Viaje Completado con Éxito 🎉
          </span>
          <h1 className="text-3xl md:text-4xl font-display font-extrabold text-stone-900 tracking-tight mt-3">
            ¡Has reescrito tu historia!
          </h1>
          <p className="text-stone-600 text-sm md:text-base max-w-xl mx-auto mt-2 font-sans font-light">
            Enhorabuena. Has tomado tus circunstancias difíciles y, guiado por tus mentores y la verdad de Dios, has destronado el fatalismo de tu mente.
          </p>
        </motion.div>
      </div>

      {/* Bento Grid: Analysis from Mentors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Left column: Mind & Emotions */}
        <div className="space-y-6">
          {/* Emotions & Lies Card */}
          <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm">
            <h3 className="font-display font-bold text-stone-900 text-lg flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-rose-500" />
              <span>Radiografía del Corazón</span>
            </h3>
            <p className="text-xs text-stone-500 mb-4 font-sans leading-relaxed">
              La Dra. Valeria (Psicóloga) y Mateo (Consejero) identificaron lo que realmente estaba bloqueando tu paz:
            </p>

            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono font-semibold uppercase text-stone-400 block mb-1.5">
                  Emociones Dominantes
                </span>
                <div className="flex flex-wrap gap-2">
                  {result.emotions.map((emotion, i) => (
                    <span
                      key={i}
                      className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-lg font-sans border border-stone-200/50"
                    >
                      {emotion}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-mono font-semibold uppercase text-rose-500 block mb-1.5">
                  Mentiras Principales Desarmadas
                </span>
                <ul className="space-y-2">
                  {result.lies.map((lie, i) => (
                    <li key={i} className="text-xs text-stone-700 flex items-start gap-2 leading-relaxed">
                      <span className="text-rose-500 text-sm font-bold mt-0.5">•</span>
                      <span>{lie}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Strengths & Truths Card */}
          <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 border border-stone-800 shadow-xl relative overflow-hidden">
            <div className="absolute -right-12 -bottom-12 opacity-5 text-hope-400">
              <Award className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <h3 className="font-display font-bold text-hope-300 text-lg flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-hope-400" />
                <span>Tus Fortalezas y Verdades</span>
              </h3>
              <p className="text-xs text-stone-400 mb-4 font-sans leading-relaxed">
                Sofía (Coach) y Mateo celebran el cuidado divino y la fortaleza que ya operó en ti:
              </p>

              <div className="space-y-4">
                <div>
                  <span className="text-[11px] font-mono font-semibold uppercase text-hope-400 block mb-1.5">
                    Fortalezas en la Tormenta
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {result.strengths.map((str, i) => (
                      <span
                        key={i}
                        className="text-xs bg-stone-800 text-stone-200 px-2.5 py-1 rounded-lg font-sans border border-stone-700"
                      >
                        🌟 {str}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-mono font-semibold uppercase text-emerald-400 block mb-1.5">
                    Verdades Descubiertas
                  </span>
                  <ul className="space-y-2">
                    {result.truths.map((truth, i) => (
                      <li key={i} className="text-xs text-stone-300 flex items-start gap-2 leading-relaxed">
                        <span className="text-emerald-400 text-sm font-bold mt-0.5">✓</span>
                        <span>{truth}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column: Action Plan & Micro-steps */}
        <div className="space-y-6">
          {/* Action plan from Step 4 */}
          <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-6">
            <h3 className="font-display font-bold text-emerald-900 text-lg flex items-center gap-2 mb-4">
              <CheckSquare className="w-5 h-5 text-emerald-600" />
              <span>Tu Plan de Acción Inmediato</span>
            </h3>
            <p className="text-xs text-emerald-800 mb-4 font-sans leading-relaxed">
              Dr. Lucas (Neurocientífico) te recuerda que estas micro-acciones son las que cambian el cableado físico de tu cerebro:
            </p>

            <div className="space-y-4">
              <div className="bg-white p-3.5 rounded-xl border border-emerald-100 shadow-xs">
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-600 block mb-1">
                  Tu Pequeña Misión de Hoy
                </span>
                <p className="text-xs text-stone-700 font-sans leading-relaxed italic">
                  "{userData.step4.smallMission}"
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-emerald-100 shadow-xs">
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-600 block mb-1">
                  Tu MAVI (Micro-Acción de Victoria Inmediata &lt; 2 min)
                </span>
                <p className="text-xs text-stone-700 font-sans leading-relaxed italic">
                  "{userData.step4.mavi}"
                </p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-emerald-100 shadow-xs">
                <span className="text-[10px] font-mono font-bold uppercase text-emerald-600 block mb-1">
                  El Hábito que Iniciará Hoy
                </span>
                <p className="text-xs text-stone-700 font-sans leading-relaxed italic">
                  "{userData.step4.habitToStart}"
                </p>
              </div>
            </div>
          </div>

          {/* New Event name reminder */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-indigo-900 font-display font-semibold text-sm mb-2">
              <Flame className="w-5 h-5 text-indigo-500 shrink-0" />
              <span>Nuevo Nombre del Evento</span>
            </div>
            <p className="text-xs text-stone-600 mb-2 font-sans">
              Decidiste quitarle el título fatalista a tu crisis. Ahora la llamas oficialmente:
            </p>
            <div className="bg-white border border-indigo-200/50 p-3 rounded-lg text-center">
              <span className="font-display font-bold text-stone-800 text-sm italic">
                "{userData.step3.redemptiveName}"
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Rewrite Section: EL SIGUIENTE CAPÍTULO DE TU HISTORIA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-3xl p-8 border border-stone-200 shadow-md mb-10 overflow-hidden relative"
      >
        <div className="absolute right-0 top-0 translate-x-20 -translate-y-20 opacity-5 text-hope-600">
          <BookOpen className="w-80 h-80" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-hope-600" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-hope-600">
              Santi el Storyteller presenta:
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-display font-black text-stone-900 mb-6 border-b border-stone-100 pb-4">
            EL SIGUIENTE CAPÍTULO DE TU HISTORIA
          </h2>

          <div className="text-stone-700 text-sm md:text-base leading-relaxed space-y-4 font-sans font-normal max-w-none prose prose-stone">
            {result.newNarrative.split("\n\n").map((para, idx) => {
              // Convert basic bold markup if present
              const cleanPara = para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              return (
                <p
                  key={idx}
                  className="leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: cleanPara }}
                />
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Pastoral Prayer Block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-hope-100/50 border border-hope-200 rounded-3xl p-8 shadow-sm relative overflow-hidden mb-12"
      >
        <div className="absolute left-0 top-0 translate-x-12 -translate-y-12 opacity-5">
          <Heart className="w-64 h-64 text-hope-600" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-hope-600" />
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-hope-700">
              Mateo tu Consejero Bíblico presenta:
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-display font-extrabold text-hope-950 mb-4">
            UNA ORACIÓN PASTORAL PERSONALIZADA
          </h3>

          <div className="text-hope-900 text-sm md:text-base leading-relaxed space-y-3 font-sans italic">
            {result.pastoralPrayer.split("\n\n").map((para, idx) => {
              const cleanPara = para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
              return (
                <p
                  key={idx}
                  dangerouslySetInnerHTML={{ __html: cleanPara }}
                />
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-hope-200/50 flex justify-between items-center text-xs text-hope-700 font-mono">
            <span>"El Señor es mi pastor..."</span>
            <span>Amén ✨</span>
          </div>
        </div>
      </motion.div>

      {/* Restart Journey Button */}
      <div className="text-center">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-800 font-sans font-medium text-sm border border-stone-300 rounded-xl px-5 py-2.5 bg-white shadow-xs transition-colors duration-200"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Comenzar con otra circunstancia</span>
        </button>
      </div>
    </div>
  );
}
