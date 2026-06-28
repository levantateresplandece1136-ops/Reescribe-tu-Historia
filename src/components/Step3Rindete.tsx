import React, { useState } from "react";
import { motion } from "motion/react";
import { Step3Data } from "../types";
import { BookOpen, HelpCircle, Heart, ChevronRight, Sparkles, Activity, Cross } from "lucide-react";

interface Step3RindeteProps {
  initialData: Step3Data;
  onNext: (data: Step3Data) => void;
  onBack: () => void;
}

export default function Step3Rindete({ initialData, onNext, onBack }: Step3RindeteProps) {
  const [data, setData] = useState<Step3Data>(initialData);

  const handleChange = (field: keyof Step3Data, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    onNext(data);
  };

  const isComplete =
    data.burdenCarried.trim() !== "" &&
    data.miedoEntregar.trim() !== "" &&
    data.uncontrollablePart.trim() !== "" &&
    data.characterFormed.trim() !== "" &&
    data.developedVersion.trim() !== "" &&
    data.redemptiveName.trim() !== "";

  return (
    <div id="step-3-view" className="w-full max-w-3xl mx-auto px-4 py-6">
      {/* Title block */}
      <div className="mb-8">
        <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md uppercase">
          Paso 3 de 4: RÍNDETE
        </span>
        <h2 className="text-3xl font-display font-extrabold text-stone-900 mt-3">
          Sellar la entrega y redefinir el propósito
        </h2>
        <p className="text-stone-600 font-sans mt-2 text-sm leading-relaxed">
          Rendirse no es cobardía. En el diccionario de Dios, rendirse es un acto de valentía extrema donde dejamos de pelear con nuestras limitadas fuerzas humanas y permitimos que la gracia soberana tome el timón.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2 space-y-6">
          {/* Question 1 */}
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm">
            <label className="block font-display font-semibold text-stone-800 text-sm mb-2">
              1. ¿Qué carga estás intentando llevar tú solo?
            </label>
            <textarea
              id="input-s3-burdenCarried"
              value={data.burdenCarried}
              onChange={(e) => handleChange("burdenCarried", e.target.value)}
              placeholder="Escribe esa preocupación, culpa o dolor que sientes que te aplasta la espalda..."
              className="w-full h-24 p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-white transition-all font-sans"
            />
          </div>

          {/* Question 2 */}
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm">
            <label className="block font-display font-semibold text-stone-800 text-sm mb-2">
              2. ¿Qué miedo necesitas entregar a Dios hoy mismo?
            </label>
            <input
              id="input-s3-miedoEntregar"
              type="text"
              value={data.miedoEntregar}
              onChange={(e) => handleChange("miedoEntregar", e.target.value)}
              placeholder="El miedo a quedarme solo, al fracaso, al qué dirán, a no ser suficiente..."
              className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-white transition-all font-sans"
            />
          </div>

          {/* Question 3 */}
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm">
            <label className="block font-display font-semibold text-stone-800 text-sm mb-2">
              3. ¿Qué parte de esta situación difícil está completamente fuera de tu control?
            </label>
            <textarea
              id="input-s3-uncontrollablePart"
              value={data.uncontrollablePart}
              onChange={(e) => handleChange("uncontrollablePart", e.target.value)}
              placeholder="Ej: Lo que otros deciden hacer, el pasado que no puedo borrar, el resultado final..."
              className="w-full h-24 p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-white transition-all font-sans"
            />
          </div>

          {/* Question 4 */}
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm">
            <label className="block font-display font-semibold text-stone-800 text-sm mb-2">
              4. ¿Qué podría estar formando Dios en tu carácter a través de este proceso doloroso?
            </label>
            <input
              id="input-s3-characterFormed"
              type="text"
              value={data.characterFormed}
              onChange={(e) => handleChange("characterFormed", e.target.value)}
              placeholder="Ej: Paciencia inquebrantable, empatía por otros que sufren, fe real..."
              className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-white transition-all font-sans"
            />
          </div>

          {/* Question 5 */}
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm">
            <label className="block font-display font-semibold text-stone-800 text-sm mb-2">
              5. ¿Qué versión de ti quiere desarrollar Dios mediante esta experiencia?
            </label>
            <textarea
              id="input-s3-developedVersion"
              value={data.developedVersion}
              onChange={(e) => handleChange("developedVersion", e.target.value)}
              placeholder="Una versión más madura, menos dependiente de la aprobación humana, arraigada en Su roca firme..."
              className="w-full h-24 p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:bg-white transition-all font-sans"
            />
          </div>
        </div>

        {/* Sidebar panels */}
        <div className="space-y-4">
          {/* Neuro explanation */}
          <div className="bg-indigo-50/70 border border-indigo-100 rounded-xl p-5 text-stone-800">
            <div className="flex items-center gap-2 text-indigo-700 font-display font-semibold text-sm mb-2">
              <Activity className="w-5 h-5 text-indigo-500 shrink-0" />
              <span>Crecimiento Postraumático</span>
            </div>
            <p className="text-xs leading-relaxed text-stone-700 font-sans">
              <strong>El dolor no tiene la última palabra.</strong> Los doctores Tedeschi y Calhoun demostraron que las personas que viven crisis severas, cuando desarrollan una nueva filosofía de significado, reportan relaciones más profundas, mayor resiliencia interna y una fe inquebrantable. El dolor es el gimnasio donde se forja tu carácter más valioso.
            </p>
          </div>

          {/* Biblical explanation */}
          <div className="bg-stone-900 text-stone-200 rounded-xl p-5">
            <div className="flex items-center gap-2 text-hope-300 font-display font-semibold text-sm mb-2">
              <BookOpen className="w-5 h-5 text-hope-400 shrink-0" />
              <span>Providencia Redentora</span>
            </div>
            <p className="text-xs leading-relaxed text-stone-300 font-sans">
              <strong>De la traición al trono:</strong> José fue vendido por sus propios hermanos y encarcelado injustamente. Años después, les dijo en <strong>Génesis 50:20</strong>: 
              <em>"Vosotros pensasteis mal contra mí, mas Dios lo encaminó a bien"</em>. 
              El "bien" bíblico no es comodidad material, sino ser formados a la preciosa imagen de Cristo. Dios no desperdiciará tu dolor; lo usará para Su gloria.
            </p>
          </div>

          {/* Cross Connection */}
          <div className="bg-rose-50 border border-rose-100 rounded-xl p-5 text-stone-800">
            <div className="flex items-center gap-2 text-rose-700 font-display font-semibold text-sm mb-2">
              <Heart className="w-5 h-5 text-rose-500 shrink-0" />
              <span>La Cruz como Reinterprete</span>
            </div>
            <p className="text-xs leading-relaxed text-stone-700 font-sans">
              La muerte de Jesús en la cruz parecía la peor derrota y fracaso de la historia. Sin embargo, Dios la redefinió en la mayor victoria y el regalo de gracia más grande para la humanidad. Si Dios pudo redimir la cruz, puede redimir tu presente difícil.
            </p>
          </div>
        </div>
      </div>

      {/* Practical Step: Rename the Event */}
      <div className="bg-indigo-50/40 border border-indigo-200 rounded-xl p-6 mb-8 text-stone-800">
        <h3 className="font-display font-bold text-indigo-800 text-base flex items-center gap-2 mb-2">
          <span>🏷️</span> Ejercicio Práctico: Renombrar el Evento Doloroso
        </h3>
        <p className="text-xs text-stone-600 mb-4 font-sans leading-relaxed">
          No caigas en el optimismo superficial ("no pasa nada"). Pasa de la mentalidad de karma/mala suerte a la Providencia Redentora. 
          Dale un <strong>nombre nuevo e inspirador</strong> a esta temporada que exprese redención.
        </p>

        <div className="bg-white p-4 rounded-lg border border-indigo-100 shadow-sm">
          <label className="block font-display font-semibold text-indigo-900 text-xs mb-2">
            ¿Cómo renombras hoy esta difícil circunstancia desde la fe?
          </label>
          <input
            id="input-s3-redemptiveName"
            type="text"
            value={data.redemptiveName}
            onChange={(e) => handleChange("redemptiveName", e.target.value)}
            placeholder="Ej: 'El suelo árido donde Dios plantó mi paciencia' o 'La ruptura que me enseñó a depender de Cristo'."
            className="w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-indigo-300 font-sans"
          />
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between items-center mt-10">
        <button
          onClick={onBack}
          className="text-stone-500 hover:text-stone-800 text-sm font-sans font-medium hover:underline px-3 py-2"
        >
          Atrás (Paso 2)
        </button>

        <div className="flex items-center gap-3">
          {!isComplete && (
            <span className="text-[11px] text-stone-400 font-sans italic">
              Por favor completa todas las respuestas para avanzar
            </span>
          )}
          <button
            id="btn-next-step3"
            disabled={!isComplete}
            onClick={handleNext}
            className={`inline-flex items-center gap-1.5 font-display font-medium text-sm px-6 py-3 rounded-lg shadow-md transition-all duration-300 ${
              isComplete
                ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-indigo-600/10"
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
