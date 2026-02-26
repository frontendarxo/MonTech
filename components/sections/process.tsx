"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Аналитика",
    description: "Изучаем ваш бизнес, цели и целевую аудиторию для создания стратегии. Проводим глубокий аудит конкурентов и рынка."
  },
  {
    number: "02",
    title: "Проектирование",
    description: "Создаем интерактивные прототипы и детальное техническое задание. Продумываем каждый шаг пользователя."
  },
  {
    number: "03",
    title: "Разработка",
    description: "Пишем чистый, масштабируемый код на современном стеке. Регулярные демо-показы и прозрачный процесс."
  },
  {
    number: "04",
    title: "Запуск и поддержка",
    description: "Тщательное тестирование, деплой и мониториг. Мы остаемся с вами, чтобы развивать продукт дальше."
  }
];

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="process" className="py-24 bg-slate-900/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
          <p className="text-slate-400">
            Наш процесс построен на прозрачности и поэтапном достижении результата.
          </p>
        </div>

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent hidden md:block" />

          <div className="space-y-24">
            {steps.map((step, i) => (
              <ProcessStep key={i} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ step, index }: { step: typeof steps[0], index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row items-center gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Number Circle */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
        <span className="text-sm font-bold text-blue-400">{step.number}</span>
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-colors"
        >
          <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
          <p className="text-slate-400 leading-relaxed">
            {step.description}
          </p>
        </motion.div>
      </div>

      {/* Spacer for the other side */}
      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
}
