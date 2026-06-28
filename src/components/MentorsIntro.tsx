import React from "react";
import { motion } from "motion/react";
import { Heart, Brain, BookOpen, MapPin, Compass, Sparkles, Quote, ArrowRight } from "lucide-react";

interface MentorsIntroProps {
  onStart: () => void;
}

export default function MentorsIntro({ onStart }: MentorsIntroProps) {
  const mentors = [
    {
      name: "Mateo",
      role: "Consejero Bíblico",
      desc: "Valido tu dolor a la luz de las Escrituras, recordándote que tu historia tiene un Redentor.",
      icon: <Heart className="w-5 h-5 text-rose-500" />,
      bg: "bg-rose-50/50 border-rose-100",
    },
    {
      name: "Dra. Valeria",
      role: "Psicóloga de Jóvenes",
      desc: "Te ayudo a procesar tus emociones y a desenredar los nudos de tus pensamientos con empatía y ciencia.",
      icon: <Brain className="w-5 h-5 text-indigo-500" />,
      bg: "bg-indigo-50/50 border-indigo-100",
    },
    {
      name: "Sofía",
      role: "Coach de Propósito",
      desc: "Identifico tus fortalezas y te impulso a caminar con un rumbo claro hacia tu destino y madurez.",
      icon: <Compass className="w-5 h-5 text-amber-500" />,
      bg: "bg-amber-50/50 border-amber-100",
    },
    {
      name: "Dr. Lucas",
      role: "Neurocientífico",
      desc: "Te explico cómo tu maravilloso cerebro se adapta, sana y crea nuevas conexiones cuando tomas acción.",
      icon: <Sparkles className="w-5 h-5 text-emerald-500" />,
      bg: "bg-emerald-50/50 border-emerald-100",
    },
    {
      name: "Tomi",
      role: "Diseñador UX",
      desc: "He creado este espacio seguro, interactivo y hermoso para que te sientas escuchado y libre.",
      icon: <MapPin className="w-5 h-5 text-sky-500" />,
      bg: "bg-sky-50/50 border-sky-100",
    },
    {
      name: "Santi",
      role: "Storyteller",
      desc: "Te acompaño a tejer tus vivencias en una narrativa de victoria, porque tu vida no es una racha, es un libro.",
      icon: <BookOpen className="w-5 h-5 text-purple-500" />,
      bg: "bg-purple-50/50 border-purple-100",
    },
  ];

  return (
    <div id="mentors-intro-view" className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono tracking-wider text-hope-600 bg-hope-100 px-3 py-1 rounded-full uppercase font-semibold">
            Taller Vivencial Interactivo
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-stone-900 tracking-tight mt-4">
            REESCRIBE TU HISTORIA
          </h1>
          <p className="text-stone-600 text-lg md:text-xl max-w-2xl mx-auto mt-4 leading-relaxed font-sans font-light">
            Tu dolor no es el final de tu libro. Es el escenario de tu mayor redención. Un espacio interactivo creado por expertos para reinterpretar tus peores tormentas.
          </p>
        </motion.div>
      </div>

      {/* Scriptural Base Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="bg-stone-900 text-stone-100 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden mb-12 border border-stone-800"
      >
        <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 opacity-10">
          <BookOpen className="w-72 h-72" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Quote className="w-6 h-6 text-hope-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-hope-300 font-semibold">
              El Fundamento de tu Viaje
            </span>
          </div>
          <blockquote className="text-lg md:text-xl font-display italic leading-relaxed text-stone-200">
            "Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia. Reconócelo en todos tus caminos, y él enderezará tus veredas."
          </blockquote>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xs font-mono text-hope-400">— Proverbios 3:5-6</span>
            <span className="text-[10px] uppercase font-semibold text-stone-400 tracking-widest px-2 py-0.5 border border-stone-800 rounded bg-stone-950">
              KJV / Reina Valera
            </span>
          </div>
        </div>
      </motion.div>

      {/* Meet your Mentors Section */}
      <div className="mb-12">
        <h2 className="text-xl md:text-2xl font-display font-semibold text-stone-800 mb-6 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
          <span>👥</span> Tu Equipo de Mentores Acompañantes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mentors.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`p-5 rounded-xl border flex gap-4 ${m.bg} transition-all duration-300 hover:shadow-md hover:scale-[1.01]`}
            >
              <div className="p-2 bg-white rounded-lg shadow-sm self-start">
                {m.icon}
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <h3 className="font-display font-semibold text-stone-900 text-base">{m.name}</h3>
                  <span className="text-[10px] font-mono uppercase text-stone-500 tracking-wider bg-stone-100 px-1.5 py-0.5 rounded">
                    {m.role}
                  </span>
                </div>
                <p className="text-stone-600 text-sm mt-1.5 leading-relaxed font-sans font-normal">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Target and Vibe Assurance */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="bg-hope-50 border border-hope-100 rounded-xl p-5 mb-12 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
      >
        <span className="text-3xl">☕</span>
        <div>
          <h4 className="font-display font-semibold text-hope-900 text-sm">¿Cómo se siente esta experiencia?</h4>
          <p className="text-hope-800 text-xs mt-1 leading-relaxed">
            Se siente como sentarse con un café y conversar con personas sabias que te valoran profundamente. 
            <strong> No es una terapia clínica ni una clase de escuela</strong>. Es un viaje ligero, interactivo y sincero de 4 pasos hacia la paz mental y la confianza plena en Cristo.
          </p>
        </div>
      </motion.div>

      {/* Call to Action */}
      <div className="text-center">
        <motion.button
          id="btn-start-journey"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart}
          className="inline-flex items-center gap-2 bg-hope-600 text-white font-display font-medium text-lg px-8 py-4 rounded-xl shadow-lg shadow-hope-600/20 hover:bg-hope-700 transition-colors duration-300"
        >
          <span>Comenzar mi historia</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
        <p className="text-stone-400 text-xs mt-3 font-mono">
          Edad recomendada: 15 a 25 años • Totalmente interactivo
        </p>
      </div>
    </div>
  );
}
