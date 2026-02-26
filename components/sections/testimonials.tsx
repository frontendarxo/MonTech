"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Александр Волков",
    role: "CEO, FinTech Solutions",
    content: "MonTech помогли нам запустить MVP всего за 3 месяца. Качество кода и внимание к деталям на высшем уровне.",
    avatar: "https://i.pravatar.cc/150?u=1"
  },
  {
    name: "Елена Маркова",
    role: "Product Manager, EduTech Pro",
    content: "Профессиональный подход к проектированию интерфейсов. Наше приложение получило отличные отзывы от пользователей.",
    avatar: "https://i.pravatar.cc/150?u=2"
  },
  {
    name: "Дмитрий Соколов",
    role: "Founder, Retail Flow",
    content: "Лучшая аутсорс-команда, с которой мы работали. Всегда на связи и предлагают решения, а не просто исполняют ТЗ.",
    avatar: "https://i.pravatar.cc/150?u=3"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-slate-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Что о нас говорят</h2>
          <p className="text-slate-400">
            Отзывы наших клиентов — лучшая награда за нашу работу.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 relative group hover:bg-white/[0.07] transition-all"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-blue-500/10 group-hover:text-blue-500/20 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-slate-300 mb-8 italic leading-relaxed">
                "{item.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border border-white/10" />
                <div>
                  <div className="font-bold text-white">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
