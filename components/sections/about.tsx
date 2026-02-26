"use client";

import { motion } from "framer-motion";
import { Users, Target, Award, Zap } from "lucide-react";

const stats = [
  { label: "Лет опыта", value: "5+", icon: Zap },
  { label: "Проектов", value: "100+", icon: Target },
  { label: "Специалистов", value: "25+", icon: Users },
  { label: "Наград", value: "12", icon: Award },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">О компании MonTech</h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Мы — команда инженеров и дизайнеров, объединенных страстью к созданию совершенных цифровых продуктов. Название Montatin Technologia отражает наше стремление помогать клиентам достигать новых высот.
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Мы не просто пишем код — мы погружаемся в бизнес-процессы, находим узкие места и предлагаем технологические решения, которые приносят реальную прибыль.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <stat.icon className="w-6 h-6 text-blue-400 mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-3xl overflow-hidden border border-white/10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10" />
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Team working" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
