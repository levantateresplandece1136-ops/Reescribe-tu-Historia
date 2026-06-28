import React, { useState } from "react";
import { motion } from "motion/react";
import { Step1Data } from "../types";
import { PenTool, Brain, Heart, ChevronRight, HelpCircle, ShieldCheck } from "lucide-react";

interface Step1ReconoceProps {
  initialData: Step1Data;
  onNext: (data: Step1Data) => void;
  onBack: () => void;
}

export default function Step1Reconoce({ initialData, onNext, onBack }: Step1ReconoceProps) {
  const [data, setData] = useState<Step1Data>(initialData);
  const [showHelper, setShowHelper] = useState<boolean>(false);

  const handleChange = (field: keyof Step1Data, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    onNext(data);
  };

  const isComplete =
    data.whatHappened.trim() !== "" &&
    data.firstThought.trim() !== "" &&
    data.feeling.trim() !== "" &&
    data.storyBelieved.trim() !== "" &&
    data.facts.trim() !== "" &&
    data.interpretations.trim() !== "";

  return (
    <div id="step-1-view" className="w-full max-w-3xl mx-auto px-4 py-6">
      {/* Title block */}
      <div className="mb-8">
        <span className="text-xs font-mono font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md uppercase">
          Paso 1 de 4: RECONOCE
        </span>
        <h2 className="text-3xl font-display font-extrabold text-stone-900 mt-3">
          Descubrir qué pasó realmente
        </h2>
        <p className="text-stone-600 font-sans mt-2 text-sm leading-relaxed">
          El primer paso para sanar y reescribir una historia es la honestidad radical. No podemos redimir lo que nos negamos a reconocer.
        </p>
      </div>

      {/* Neuroscience Sidebar/Alert */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2 space-y-6">
          {/* Question 1 */}
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm">
            <label className="block font-display font-semibold text-stone-800 text-sm mb-2">
              1. ¿Qué pasó? <span className="text-stone-400 font-light">(Cuéntamelo como si estuvieras hablando con tu mejor amigo)</span>
            </label>
            <textarea
              id="input-s1-whatHappened"
              value={data.whatHappened}
              onChange={(e) => handleChange("whatHappened", e.target.value)}
              placeholder="Ayer me fue mal en el examen, o tuve una fuerte discusión con mis padres... desahógate aquí."
              className="w-full h-32 p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:bg-white transition-all font-sans"
            />
          </div>

          {/* Question 2 */}
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm">
            <label className="block font-display font-semibold text-stone-800 text-sm mb-2">
              2. ¿Qué fue lo primero que pensaste?
            </label>
            <input
              id="input-s1-firstThought"
              type="text"
              value={data.firstThought}
              onChange={(e) => handleChange("firstThought", e.target.value)}
              placeholder="Ej: 'No sirvo para esto' o 'Siempre cometo el mismo error'."
              className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:bg-white transition-all font-sans"
            />
          </div>

          {/* Question 3 */}
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm">
            <label className="block font-display font-semibold text-stone-800 text-sm mb-2">
              3. ¿Qué sentiste? <span className="text-stone-400 font-light">(Escribe las emociones físicas o del corazón)</span>
            </label>
            <input
              id="input-s1-feeling"
              type="text"
              value={data.feeling}
              onChange={(e) => handleChange("feeling", e.target.value)}
              placeholder="Frustración, rabia, un nudo en el estómago, tristeza profunda..."
              className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:bg-white transition-all font-sans"
            />
          </div>

          {/* Question 4 */}
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm">
            <label className="block font-display font-semibold text-stone-800 text-sm mb-2">
              4. ¿Qué historia comenzaste a creer sobre ti? <span className="text-stone-400 font-light">(La mentira/conclusión)</span>
            </label>
            <textarea
              id="input-s1-storyBelieved"
              value={data.storyBelieved}
              onChange={(e) => handleChange("storyBelieved", e.target.value)}
              placeholder="Que estoy destinado al fracaso, que Dios está enojado conmigo, o que no le importo a nadie."
              className="w-full h-24 p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:bg-white transition-all font-sans"
            />
          </div>
        </div>

        {/* Sidebar panels */}
        <div className="space-y-4">
          {/* Neuro explanation */}
          <div className="bg-rose-50/70 border border-rose-100 rounded-xl p-5 text-stone-800">
            <div className="flex items-center gap-2 text-rose-700 font-display font-semibold text-sm mb-2">
              <Brain className="w-5 h-5 text-rose-500 shrink-0" />
              <span>Aporte del Neurocientífico</span>
            </div>
            <p className="text-xs leading-relaxed text-stone-700 font-sans">
              <strong>Escribir desahoga tu cerebro.</strong> Cuando experimentas algo doloroso, el miedo se fragmenta en tu amígdala cerebral. 
              Al obligarte a poner lo que sientes en <strong>palabras escritas</strong>, activas tu <strong>corteza prefrontal</strong>. 
              Esto regula las emociones, reduce los niveles de cortisol (estrés) y disminuye de inmediato la ansiedad rumiante.
            </p>
          </div>

          {/* Biblical explanation */}
          <div className="bg-stone-900 text-stone-200 rounded-xl p-5">
            <div className="flex items-center gap-2 text-hope-300 font-display font-semibold text-sm mb-2">
              <Heart className="w-5 h-5 text-hope-400 shrink-0" />
              <span>Consejo Bíblico</span>
            </div>
            <p className="text-xs leading-relaxed text-stone-300 font-sans">
              <strong>Los Salmos de Lamentación</strong> (como el Salmo 13 o 42) son el ejemplo perfecto. 
              David no maquilla su dolor; se presenta ante Dios con cruda honestidad: 
              <em>¿Hasta cuándo me olvidarás, Señor?</em>. 
              Dios prefiere tu verdad dolorosa antes que una mentira piadosa. 
              El desahogo sincero es el umbral de la restauración.
            </p>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex gap-3">
            <ShieldCheck className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
            <p className="text-[11px] text-indigo-900 leading-relaxed font-sans">
              <strong>Espacio Privado:</strong> Tus respuestas son temporales y se usan únicamente para generar tu historia al final. No se guardan de forma pública.
            </p>
          </div>
        </div>
      </div>

      {/* Practical step: Double column dynamic */}
      <div className="bg-stone-50 border border-stone-200 rounded-xl p-6 mb-8">
        <h3 className="font-display font-bold text-stone-800 text-base flex items-center gap-2 mb-2">
          <span>🧠</span> Ejercicio Práctico: Separar Hechos de Significados
        </h3>
        <p className="text-xs text-stone-500 mb-4 font-sans leading-relaxed">
          Nuestra mente suele fusionar lo que de verdad pasó (hechos brutos) con el drama fatalista que inventamos (interpretaciones). 
          Divide tu situación para quitarle poder al drama.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm">
            <span className="text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded uppercase">
              Columna A: Hechos Brutos
            </span>
            <p className="text-[11px] text-stone-500 mt-2 mb-3 leading-relaxed font-sans">
              Describe lo sucedido como lo grabaría una cámara de seguridad. Sin adjetivos dramáticos.
            </p>
            <textarea
              id="input-s1-facts"
              value={data.facts}
              onChange={(e) => handleChange("facts", e.target.value)}
              placeholder="Ej: 'No pasé la materia con la calificación requerida' o 'Mi hermano y yo no nos hablamos desde el martes'."
              className="w-full h-24 p-2.5 bg-stone-50 border border-stone-200 rounded text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-rose-300 focus:bg-white font-sans"
            />
          </div>

          <div className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm">
            <span className="text-xs font-mono font-semibold text-rose-500 bg-rose-50 px-2 py-0.5 rounded uppercase">
              Columna B: Drama del Corazón
            </span>
            <p className="text-[11px] text-stone-500 mt-2 mb-3 leading-relaxed font-sans">
              Escribe la interpretación fatalista o mentira dramática que tu mente fabricó de inmediato.
            </p>
            <textarea
              id="input-s1-interpretations"
              value={data.interpretations}
              onChange={(e) => handleChange("interpretations", e.target.value)}
              placeholder="Ej: 'Esto prueba que soy inútil, que mi esfuerzo no vale nada y que Dios quiere verme sufrir'."
              className="w-full h-24 p-2.5 bg-stone-50 border border-stone-200 rounded text-xs text-stone-800 focus:outline-none focus:ring-1 focus:ring-rose-300 focus:bg-white font-sans"
            />
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between items-center mt-10">
        <button
          onClick={onBack}
          className="text-stone-500 hover:text-stone-800 text-sm font-sans font-medium hover:underline px-3 py-2"
        >
          Atrás (Introducción)
        </button>

        <div className="flex items-center gap-3">
          {!isComplete && (
            <span className="text-[11px] text-stone-400 font-sans italic">
              Por favor completa todas las preguntas para avanzar
            </span>
          )}
          <button
            id="btn-next-step1"
            disabled={!isComplete}
            onClick={handleNext}
            className={`inline-flex items-center gap-1.5 font-display font-medium text-sm px-6 py-3 rounded-lg shadow-md transition-all duration-300 ${
              isComplete
                ? "bg-rose-600 text-white hover:bg-rose-700 hover:shadow-rose-600/10"
                : "bg-stone-200 text-stone-400 cursor-not-allowed"
            }`}
          >
            <span>Siguiente Paso</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
