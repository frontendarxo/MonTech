"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Аналитика",
    description: "Изучаем ваш бизнес, цели и целевую аудиторию для создания стратегии."
  },
  {
    number: "02",
    title: "Проектирование",
    description: "Создаем прототипы и детальное техническое задание проекта."
  },
  {
    number: "03",
    title: "Разработка",
    description: "Пишем чистый, масштабируемый код с регулярными отчетами о прогрессе."
  },
  {
    number: "04",
    title: "Запуск",
    description: "Тестируем, разворачиваем и помогаем с первым запуском продукта."
  }
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
          <p className="text-slate-400">
            Прозрачный процесс разработки, ориентированный на результат и соблюдение сроков.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="text-6xl font-black text-white/5 absolute -top-8 -left-4 select-none">
                {step.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-1 bg-blue-600 rounded-full" />
                  {step.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-4 -right-6 w-12 h-[2px] bg-gradient-to-r from-blue-600/50 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
