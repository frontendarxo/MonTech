"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Rocket, Code2, Globe } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section id="home" ref={containerRef} className="relative h-[120vh] flex items-start justify-center overflow-hidden pt-32">
      {/* Sticky Mountain Background */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/50 to-slate-950 z-10" />
        
        {/* Mountain Silhouette SVG */}
        <svg 
          viewBox="0 0 1440 800" 
          className="absolute bottom-0 w-full h-full object-cover opacity-40"
          preserveAspectRatio="xMidYMax slice"
        >
          <path 
            d="M0,800 L0,600 L150,450 L300,550 L500,300 L750,500 L1000,200 L1250,450 L1440,350 L1440,800 Z" 
            fill="url(#mountainGradient)"
          />
          <defs>
            <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>
          </defs>
        </svg>

        {/* Animated Stars/Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                opacity: Math.random() 
              }}
              animate={{ 
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1]
              }}
              transition={{ 
                duration: 2 + Math.random() * 3, 
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div 
        style={{ opacity }}
        className="container mx-auto px-6 relative z-20 text-center sticky top-32"
      >
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium text-blue-200">MonTech — Ваш технологический партнер</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40"
          >
            Покоряйте вершины <br /> бизнеса с нами
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            Мы — Montatin Technologia. Создаем масштабируемые веб-сервисы, мобильные приложения и SaaS-решения, которые помогают вашему бизнесу расти быстрее.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-blue-600/20 active:scale-95"
            >
              Обсудить проект
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold transition-all backdrop-blur-sm active:scale-95"
            >
              Наши работы
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
