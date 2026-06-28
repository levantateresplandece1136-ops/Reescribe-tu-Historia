import React, { useState } from "react";
import { motion } from "motion/react";
import { Step2Data } from "../types";
import { Brain, Sparkles, AlertCircle, ChevronLeft, ChevronRight, HelpCircle, Flame } from "lucide-react";

interface Step2ReenfocaProps {
  initialData: Step2Data;
  onNext: (data: Step2Data) => void;
  onBack: () => void;
}

export default function Step2Reenfoca({ initialData, onNext, onBack }: Step2ReenfocaProps) {
  const [data, setData] = useState<Step2Data>(initialData);

  const handleChange = (field: keyof Step2Data, value: string | string[]) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAnomalyChange = (index: number, val: string) => {
    const updated = [...data.anomalies];
    updated[index] = val;
    handleChange("anomalies", updated);
  };

  const handleNext = () => {
    onNext(data);
  };

  const isComplete =
    data.hasProof.trim() !== "" &&
    data.alternativeView.trim() !== "" &&
    data.friendAdvice.trim() !== "" &&
    data.jesusView.trim() !== "" &&
    data.biblicalTruth.trim() !== "" &&
    data.anomalies.every((a) => a.trim() !== "");

  return (
    <div id="step-2-view" className="w-full max-w-3xl mx-auto px-4 py-6">
      {/* Title block */}
      <div className="mb-8">
        <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md uppercase">
          Paso 2 de 4: REENFOCA
        </span>
        <h2 className="text-3xl font-display font-extrabold text-stone-900 mt-3">
          Romper el monopolio del fatalismo
        </h2>
        <p className="text-stone-600 font-sans mt-2 text-sm leading-relaxed">
          Nuestra mente miente cuando está herida. Vamos a desafiar con ternura esos pensamientos automáticos que actúan como cadenas invisibles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2 space-y-6">
          {/* Question 1 */}
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm">
            <label className="block font-display font-semibold text-stone-800 text-sm mb-2">
              1. ¿Ese pensamiento fatalista de la Columna B tiene pruebas irrefutables e indudables?
            </label>
            <textarea
              id="input-s2-hasProof"
              value={data.hasProof}
              onChange={(e) => handleChange("hasProof", e.target.value)}
              placeholder="¿Es 100% real que 'siempre te irá mal' o que 'Dios te odia'? Piensa críticamente."
              className="w-full h-24 p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:bg-white transition-all font-sans"
            />
          </div>

          {/* Question 2 */}
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm">
            <label className="block font-display font-semibold text-stone-800 text-sm mb-2">
              2. ¿Existe otra forma más justa, amorosa y realista de ver esta situación?
            </label>
            <textarea
              id="input-s2-alternativeView"
              value={data.alternativeView}
              onChange={(e) => handleChange("alternativeView", e.target.value)}
              placeholder="Ej: 'Cometí un error, pero puedo aprender de ello' o 'Esto no durará para siempre'."
              className="w-full h-24 p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:bg-white transition-all font-sans"
            />
          </div>

          {/* Question 3 */}
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm">
            <label className="block font-display font-semibold text-stone-800 text-sm mb-2">
              3. ¿Qué le dirías a tu mejor amigo si estuviera sufriendo por esto mismo?
            </label>
            <textarea
              id="input-s2-friendAdvice"
              value={data.friendAdvice}
              onChange={(e) => handleChange("friendAdvice", e.target.value)}
              placeholder="Escríbelo con el mismo amor y misericordia con el que aconsejarías a otro."
              className="w-full h-24 p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:bg-white transition-all font-sans"
            />
          </div>

          {/* Question 4 */}
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm">
            <label className="block font-display font-semibold text-stone-800 text-sm mb-2">
              4. ¿Qué crees que Jesús diría al oído sobre ti y sobre esta situación?
            </label>
            <input
              id="input-s2-jesusView"
              type="text"
              value={data.jesusView}
              onChange={(e) => handleChange("jesusView", e.target.value)}
              placeholder="Ej: 'No estás solo, mi gracia te sostiene', 'Tu valor no lo define una mala racha'."
              className="w-full p-3 bg-stone-50 border border-stone-200 rounded-lg text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:bg-white transition-all font-sans"
            />
          </div>

          {/* Question 5 */}
          <div className="bg-white rounded-xl p-5 border border-stone-200 shadow-sm">
            <label className="block font-display font-semibold text-stone-800 text-sm mb-1">
              5. Escoge tu Ancla Bíblica
            </label>
            <p className="text-xs text-stone-500 mb-4 font-sans leading-relaxed">
              En lugar de inventar una respuesta, te presentamos 3 verdades inmutables aplicadas a tu situación. <strong>Escoge la que haga más sentido para ti hoy</strong> para desarmar la mentira que estás creyendo.
            </p>
            
            <div className="space-y-3">
              {[
                {
                  key: "gracia",
                  title: "La Verdad de la Gracia Incondicional",
                  verse: "Romanos 8:38-39",
                  text: "Ninguna circunstancia, caída, ni opinión ajena puede separarme del amor inquebrantable de Dios. Su gracia me define, no mis errores.",
                  emoji: "💖",
                  color: "border-rose-100 hover:border-rose-300 bg-rose-50/20",
                  selectedColor: "border-rose-500 ring-2 ring-rose-200 bg-rose-50/50"
                },
                {
                  key: "providencia",
                  title: "La Verdad de la Providencia Soberana",
                  verse: "Génesis 50:20 / Romanos 8:28",
                  text: "Aunque las personas o situaciones actúen en mi contra, Dios tiene el poder de redirigir todo ese sufrimiento para mi bien absoluto, formándome un carácter inquebrantable.",
                  emoji: "🛡️",
                  color: "border-amber-100 hover:border-amber-300 bg-amber-50/20",
                  selectedColor: "border-amber-500 ring-2 ring-amber-200 bg-amber-50/50"
                },
                {
                  key: "identidad",
                  title: "La Verdad de la Identidad Eterna",
                  verse: "Efesios 2:10 / Salmo 139:14",
                  text: "Soy una obra maestra diseñada con un propósito eterno. Mi valor está sellado en la cruz de Cristo, y las tormentas temporales no definen mi futuro.",
                  emoji: "👑",
                  color: "border-emerald-100 hover:border-emerald-300 bg-emerald-50/20",
                  selectedColor: "border-emerald-500 ring-2 ring-emerald-200 bg-emerald-50/50"
                }
              ].map((opt) => {
                const optionString = `[${opt.title} - ${opt.verse}] ${opt.text}`;
                const isSelected = data.biblicalTruth === optionString;

                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => handleChange("biblicalTruth", optionString)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex gap-3 cursor-pointer ${
                      isSelected ? opt.selectedColor : opt.color
                    }`}
                  >
                    <span className="text-2xl shrink-0 self-start">{opt.emoji}</span>
                    <div className="flex-grow">
                      <div className="flex justify-between items-baseline flex-wrap gap-1">
                        <h4 className="font-display font-bold text-stone-900 text-xs">
                          {opt.title}
                        </h4>
                        <span className="text-[10px] font-mono text-hope-600 font-bold bg-white px-2 py-0.5 rounded border border-stone-200">
                          {opt.verse}
                        </span>
                      </div>
                      <p className="text-stone-600 text-xs mt-1.5 leading-relaxed font-sans">
                        {opt.text}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sidebar panels */}
        <div className="space-y-4">
          {/* Neuro explanation */}
          <div className="bg-amber-50/70 border border-amber-100 rounded-xl p-5 text-stone-800">
            <div className="flex items-center gap-2 text-amber-700 font-display font-semibold text-sm mb-2">
              <Brain className="w-5 h-5 text-amber-500 shrink-0" />
              <span>Aporte del Neurocientífico</span>
            </div>
            <p className="text-xs leading-relaxed text-stone-700 font-sans">
              <strong>El filtro de tu cerebro (SAR):</strong> Tu Sistema de Activación Reticular actúa como un guardián de atención. Si te repites "siempre me va mal", tu cerebro buscará solo las desgracias para ahorrar energía (Sesgo de Confirmación). 
              <br /><br />
              Para debilitar ese hábito mental negativo y fomentar la <strong>neuroplasticidad</strong>, debemos buscar activamente fallas en la maldición.
            </p>
          </div>

          {/* Biblical explanation */}
          <div className="bg-stone-900 text-stone-200 rounded-xl p-5">
            <div className="flex items-center gap-2 text-hope-300 font-display font-semibold text-sm mb-2">
              <Sparkles className="w-5 h-5 text-hope-400 shrink-0" />
              <span>Consejo Bíblico</span>
            </div>
            <p className="text-xs leading-relaxed text-stone-300 font-sans">
              <strong>Metanoia (Renovación mental):</strong> Romanos 12:2 nos exhorta: 
              <em>"Transformaos por medio de la renovación de vuestra mente"</em>. 
              En el griego original, transformación es <em>metamorfosis</em> y mente es <em>nous</em>. 
              Es un llamado activo del Espíritu a deconstruir las mentiras culturales y emocionales y alinearnos con el carácter inmutable de Cristo.
            </p>
          </div>

          {/* Coach Advice */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 text-stone-800">
            <div className="flex items-center gap-2 text-emerald-700 font-display font-semibold text-sm mb-2">
              <Flame className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>El Coach de Propósito</span>
            </div>
            <p className="text-xs leading-relaxed text-stone-700 font-sans">
              <strong>Optimismo Aprendido:</strong> El psicólogo Martin Seligman descubrió que la indefensión se aprende, pero el optimismo también. Desafiar el fatalismo desarma tu pasividad y te devuelve las llaves del crecimiento.
            </p>
          </div>
        </div>
      </div>

      {/* Practical step: Anomalies */}
      <div className="bg-amber-50/40 border border-amber-200 rounded-xl p-6 mb-8 text-stone-800">
        <h3 className="font-display font-bold text-amber-800 text-base flex items-center gap-2 mb-2">
          <span>🔍</span> Ejercicio Práctico: Buscar Anomalías en la "Maldición"
        </h3>
        <p className="text-xs text-stone-600 mb-4 font-sans leading-relaxed">
          ¿Es absolutamente cierto que <em>siempre</em> te va mal? Tu mente ha ignorado las bendiciones diarias. 
          Haz una lista de <strong>3 cosas específicas</strong> que salieron bien o peligros de los cuales fuiste guardado o librado en el último año. Esto reprogramará el SAR de tu cerebro.
        </p>

        <div className="space-y-3">
          {data.anomalies.map((anomaly, idx) => (
            <div key={idx} className="flex gap-3 items-center">
              <span className="font-mono text-xs font-bold text-amber-600 bg-amber-100 rounded-full w-6 h-6 flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <input
                id={`input-s2-anomaly-${idx}`}
                type="text"
                value={anomaly}
                onChange={(e) => handleAnomalyChange(idx, e.target.value)}
                placeholder={
                  idx === 0
                    ? "Ej: Mi familia me apoyó cuando estuve enfermo..."
                    : idx === 1
                    ? "Ej: Logré terminar mi curso a pesar de no tener internet..."
                    : "Ej: Un amigo me escuchó en el momento exacto que lo necesitaba..."
                }
                className="w-full p-2.5 bg-white border border-stone-200 rounded-lg text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-amber-300 font-sans"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between items-center mt-10">
        <button
          onClick={onBack}
          className="text-stone-500 hover:text-stone-800 text-sm font-sans font-medium hover:underline px-3 py-2"
        >
          Atrás (Paso 1)
        </button>

        <div className="flex items-center gap-3">
          {!isComplete && (
            <span className="text-[11px] text-stone-400 font-sans italic">
              Por favor completa todas las respuestas y las 3 anomalías
            </span>
          )}
          <button
            id="btn-next-step2"
            disabled={!isComplete}
            onClick={handleNext}
            className={`inline-flex items-center gap-1.5 font-display font-medium text-sm px-6 py-3 rounded-lg shadow-md transition-all duration-300 ${
              isComplete
                ? "bg-amber-600 text-white hover:bg-amber-700 hover:shadow-amber-600/10"
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
