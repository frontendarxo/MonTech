"use client";

import { motion } from "framer-motion";

const clients = [
  "FinTech Solutions", "Global Logistics", "HealthCare Plus", 
  "EduTech Pro", "Retail Flow", "Smart City AI"
];

export function TrustSection() {
  return (
    <section className="py-20 bg-slate-950/50 border-y border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-slate-500 text-sm font-medium uppercase tracking-[0.2em] mb-12">
          Нам доверяют инновационные компании
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {clients.map((client, i) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-bold tracking-tighter text-white"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
