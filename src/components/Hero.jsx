import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Briefcase, 
  Layers, 
  Database, 
  Cloud, 
  Bot, 
  ArrowUpRight,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

const pipelineNodes = [
  {
    step: "01",
    label: "Business",
    sub: "Domain & Aviation MRO",
    icon: Briefcase,
    color: "from-blue-500 to-indigo-600"
  },
  {
    step: "02",
    label: "Digital Platform",
    sub: "Modern Architecture & APIs",
    icon: Layers,
    color: "from-cyan-500 to-blue-600"
  },
  {
    step: "03",
    label: "Data Integration",
    sub: "5-Min High-Frequency Sync",
    icon: Database,
    color: "from-emerald-500 to-teal-600"
  },
  {
    step: "04",
    label: "Cloud & Scale",
    sub: "Resilient GCP / AWS Infra",
    icon: Cloud,
    color: "from-sky-500 to-cyan-600"
  },
  {
    step: "05",
    label: "Applied AI",
    sub: "Gemini Automation & Skills",
    icon: Bot,
    color: "from-indigo-500 to-cyan-500"
  }
];

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-navy-950 dark:via-navy-900/80 dark:to-navy-950"
    >
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 dark:bg-cyan-500/8 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-600/10 dark:bg-blue-600/8 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Executive Header Badge */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-cyan-500/10 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 mb-6 backdrop-blur-sm"
          >
            <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Asia Digital Engineering (ADE) / AirAsia &bull; Senior Software Engineer – Team Lead</span>
          </motion.div>

          {/* Name & Primary Position */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]"
          >
            MUHAMMAD JUNAID KHAN
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-300 bg-clip-text text-transparent"
          >
            Technology &amp; Digital Transformation Leader
          </motion.h2>

          {/* Pillars List */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 tracking-wide flex flex-wrap justify-center items-center gap-x-2 gap-y-1"
          >
            <span>Aviation MRO</span>
            <span className="text-cyan-500 dark:text-cyan-400">&bull;</span>
            <span>Digital Products</span>
            <span className="text-cyan-500 dark:text-cyan-400">&bull;</span>
            <span>Cloud &amp; Platform Engineering</span>
            <span className="text-cyan-500 dark:text-cyan-400">&bull;</span>
            <span>AI Innovation</span>
          </motion.p>

          {/* Executive Thesis Statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-normal leading-relaxed"
          >
            &ldquo;Building scalable digital platforms that transform complex operational requirements into practical, reliable and reusable technology solutions.&rdquo;
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/20 hover:shadow-cyan-600/30 active:scale-98 transition-all"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-white dark:bg-navy-900 border border-slate-300 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 hover:bg-slate-50 dark:hover:bg-navy-850 shadow-sm active:scale-98 transition-all"
            >
              <span>Contact Me</span>
            </button>

            <a
              href="https://www.linkedin.com/in/muhammadjkhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

        {/* Visual Transformation Pipeline: Business → Digital Platform → Data → Cloud → AI */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800/80"
        >
          <div className="text-center mb-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400">
              End-to-End Enterprise Transformation Lifecycle
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-4 relative">
            {pipelineNodes.map((node, idx) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.step}
                  className="relative group p-4 rounded-xl bg-white/70 dark:bg-navy-900/60 border border-slate-200/90 dark:border-slate-800/80 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-lg dark:hover:shadow-cyan-950/30 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold text-slate-400 dark:text-slate-500">
                      {node.step}
                    </span>
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${node.color} flex items-center justify-center text-white shadow-sm`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                      {node.label}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                      {node.sub}
                    </p>
                  </div>
                  {/* Subtle directional connector for desktop */}
                  {idx < pipelineNodes.length - 1 && (
                    <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none text-slate-300 dark:text-slate-600">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => scrollTo('about')}
            aria-label="Scroll to About section"
            className="text-slate-400 hover:text-cyan-500 dark:text-slate-500 dark:hover:text-cyan-400 transition-colors animate-bounce"
          >
            <ChevronDown className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
