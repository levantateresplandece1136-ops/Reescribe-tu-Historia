import React, { useState } from "react";
import { motion } from "motion/react";
import { Step4Data } from "../types";
import { Brain, Sparkles, Compass, ChevronLeft, ChevronRight, CheckCircle, Flame } from "lucide-react";

interface Step4ReestructuraProps {
  initialData: Step4Data;
  onNext: (data: Step4Data) => void;
  onBack: () => void;
  isLoading: boolean;
}

export default function Step4Reestructura({ initialData, onNext, onBack, isLoading }: Step4ReestructuraProps) {
  const [data, setData] = useState<Step4Data>(initialData);

  const handleChange = (field: keyof Step4Data, value: string | string[]) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleEvidenceChange = (index: number, val: string) => {
    const updated = [...data.evidences];
    updated[index] = val;
    handleChange("evidences", updated);
  };

  const handleNext = () => {
    onNext(data);
  };

  const isComplete =
    data.smallMission.trim() !== "" &&
    data.mavi.trim() !== "" &&
    data.habitToStart.trim() !== "" &&
    data.evidences.every((e) => e.trim() !== "");

  return (
    <div id="step-4-view" className="w-full max-w-3xl mx-auto px-4 py-6">
      {/* Title block */}
      <div className="mb-8">
        <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md uppercase">
          Paso 4 de 4: REESTRUCTURA
        </span>
        <h2 className="text-3xl font-display font-extrabold text-stone-900 mt-3">
          La arquitectura del nuevo hábito
        </h2>
        <p className="text-stone-600 font-sans mt-2 text-sm leading-relaxed">
          La reinterpretación de tu historia no se queda en la cabeza: se demuestra moviendo los pies. El cerebro necesita evidencias reales de que has decidido confiar en la gracia divina.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2 space-y-6">
          {/* Question 1 */}
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm">
            <label className="block font-display font-semibold text-stone-800 text-sm mb-2">
              1. ¿Qué pequeña misión puedes hacer hoy?
            </label>
            <textarea
              id="input-s4-smallMission"
              value={data.smallMission}
              onChange={(e) => handleChange("smallMission", e.target.value)}
              placeholder="Una acción que te mueva un paso adelante. Ej: Mandarle un mensaje de aprecio a mi hermano, o repasar 15 minutos la materia que reprobé..."
              className="w-full h-24 p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:bg-white transition-all font-sans"
            />
          </div>

          {/* Question 2 */}
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm">
            <label className="block font-display font-semibold text-stone-800 text-sm mb-2">
              2. ¿Cuál es tu MAVI? <span className="text-stone-400 font-light">(Micro-Acción de Victoria Inmediata de menos de 2 minutos que demuestre que ya no eres definido por este problema)</span>
            </label>
            <input
              id="input-s4-mavi"
              type="text"
              value={data.mavi}
              onChange={(e) => handleChange("mavi", e.target.value)}
              placeholder="Ej: Si crees que a nadie le importas, envíale un mensaje de ánimo a alguien que sufra..."
              className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:bg-white transition-all font-sans"
            />
          </div>

          {/* Question 3 */}
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm">
            <label className="block font-display font-semibold text-stone-800 text-sm mb-2">
              3. ¿Qué hábito saludable quieres comenzar?
            </label>
            <input
              id="input-s4-habitToStart"
              type="text"
              value={data.habitToStart}
              onChange={(e) => handleChange("habitToStart", e.target.value)}
              placeholder="Ej: Orar 3 minutos al despertar, o leer una página de la Biblia cada noche..."
              className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:bg-white transition-all font-sans"
            />
          </div>
        </div>

        {/* Sidebar panels */}
        <div className="space-y-4">
          {/* Neuro explanation */}
          <div className="bg-emerald-50/70 border border-emerald-100 rounded-xl p-5 text-stone-800">
            <div className="flex items-center gap-2 text-emerald-700 font-display font-semibold text-sm mb-2">
              <Brain className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>Aporte del Neurocientífico</span>
            </div>
            <p className="text-xs leading-relaxed text-stone-700 font-sans">
              <strong>El poder de lo pequeño:</strong> El Dr. B.J. Fogg (Stanford) y James Clear demostraron que los hábitos duraderos se construyen mediante <strong>micro-pasos</strong>. 
              <br /><br />
              Al realizar una acción diminuta pero intencional, recuperas tu <strong>locus de control interno</strong> y liberas <strong>dopamina</strong>, que le dice a tu cerebro: <em>"Yo no soy una víctima de mis circunstancias"</em>.
            </p>
          </div>

          {/* Biblical explanation */}
          <div className="bg-stone-900 text-stone-200 rounded-xl p-5">
            <div className="flex items-center gap-2 text-hope-300 font-display font-semibold text-sm mb-2">
              <Flame className="w-5 h-5 text-hope-400 shrink-0" />
              <span>La Fe Dinámica</span>
            </div>
            <p className="text-xs leading-relaxed text-stone-300 font-sans">
              <strong>Santiago 2:17</strong> nos dice con profunda sabiduría práctica: 
              <em>"La fe, si no tiene obras, es muerta en sí misma"</em>. 
              La fe real no se queda en sentimientos; se demuestra moviendo los pies y actuando con valentía santa. Una pequeña acción concreta demuestra que confías de verdad en Dios.
            </p>
          </div>
        </div>
      </div>

      {/* Practical step: Diario de Providencia Evidente */}
      <div className="bg-emerald-50/40 border border-emerald-200 rounded-xl p-6 mb-8 text-stone-800">
        <h3 className="font-display font-bold text-emerald-800 text-base flex items-center gap-2 mb-2">
          <span>📓</span> Ejercicio Práctico: Diario de Providencia Evidente
        </h3>
        <p className="text-xs text-stone-600 mb-4 font-sans leading-relaxed">
          Para reprogramar definitivamente el SAR de tu cerebro, debemos educarlo en notar la fidelidad diaria de Dios. 
          Escribe <strong>3 evidencias de la gracia común o específica</strong> de Dios que hayas recibido u observado hoy (un café, una conversación, respirar libremente, tener un techo).
        </p>

        <div className="space-y-3">
          {data.evidences.map((evidence, idx) => (
            <div key={idx} className="flex gap-3 items-center">
              <span className="font-mono text-xs font-bold text-emerald-600 bg-emerald-100 rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <input
                id={`input-s4-evidence-${idx}`}
                type="text"
                value={evidence}
                onChange={(e) => handleEvidenceChange(idx, e.target.value)}
                placeholder={
                  idx === 0
                    ? "Ej: Poder despertarme y respirar con salud esta mañana..."
                    : idx === 1
                    ? "Ej: La conversación de aliento que tuve con un amigo..."
                    : "Ej: Tener comida en mi mesa y la bendición de un techo..."
                }
                className="w-full p-2.5 bg-white border border-stone-200 rounded-lg text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-emerald-300 font-sans"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between items-center mt-10">
        <button
          disabled={isLoading}
          onClick={onBack}
          className="text-stone-500 hover:text-stone-800 text-sm font-sans font-medium hover:underline px-3 py-2 disabled:opacity-50"
        >
          Atrás (Paso 3)
        </button>

        <div className="flex items-center gap-3">
          {!isComplete && (
            <span className="text-[11px] text-stone-400 font-sans italic">
              Por favor completa todas las respuestas y las 3 evidencias
            </span>
          )}
          <button
            id="btn-next-step4"
            disabled={!isComplete || isLoading}
            onClick={handleNext}
            className={`inline-flex items-center gap-1.5 font-display font-medium text-sm px-7 py-3.5 rounded-lg shadow-md transition-all duration-300 ${
              isComplete && !isLoading
                ? "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-emerald-600/10"
                : "bg-stone-200 text-stone-400 cursor-not-allowed"
            }`}
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span>Reescribiendo...</span>
              </span>
            ) : (
              <>
                <span>Generar mi historia</span>
                <CheckCircle className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
