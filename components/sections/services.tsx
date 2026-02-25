"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Database, Layout, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Веб-приложения",
    description: "Высоконагруженные системы на React и Next.js с фокусом на производительность.",
    icon: Layout,
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  },
  {
    title: "Мобильная разработка",
    description: "Нативные и кроссплатформенные приложения для iOS и Android.",
    icon: Smartphone,
    color: "text-purple-400",
    bg: "bg-purple-400/10"
  },
  {
    title: "SaaS Решения",
    description: "Проектирование и запуск облачных сервисов с подписочной моделью.",
    icon: Database,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10"
  },
  {
    title: "Backend & API",
    description: "Надежная серверная архитектура и интеграция сторонних сервисов.",
    icon: Code2,
    color: "text-orange-400",
    bg: "bg-orange-400/10"
  },
  {
    title: "Безопасность",
    description: "Аудит безопасности и внедрение современных протоколов защиты данных.",
    icon: ShieldCheck,
    color: "text-red-400",
    bg: "bg-red-400/10"
  },
  {
    title: "Оптимизация",
    description: "Ускорение существующих систем и миграция на современные стеки.",
    icon: Zap,
    color: "text-yellow-400",
    bg: "bg-yellow-400/10"
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Чем мы можем быть полезны</h2>
          <p className="text-slate-400">
            Мы предлагаем полный цикл разработки: от идеи и дизайна до запуска и технической поддержки.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group"
            >
              <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform", service.bg)}>
                <service.icon className={cn("w-6 h-6", service.color)} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
