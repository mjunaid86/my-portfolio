import React from 'react';
import { motion } from 'framer-motion';
import { Bot, GitPullRequest, ShieldAlert, CheckCircle2, Sparkles, Terminal, Code2, ArrowRight, BookOpen, Cpu } from 'lucide-react';
import { aiInnovationCards } from '../data/aiInnovation';

export default function AIInnovation() {
  const [botCard, skillsCard, devCard] = aiInnovationCards;

  return (
    <section id="ai-innovation" className="py-24 bg-slate-50 dark:bg-navy-900/50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Applied Engineering Innovation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            AI &amp; Engineering Innovation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium">
            &ldquo;Applying AI beyond experimentation — integrating it into real engineering workflows.&rdquo;
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Major Cards */}
        <div className="space-y-8">
          
          {/* CARD 1: Gemini Code Review Bot */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-xl dark:hover:shadow-cyan-950/20 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20 mb-2">
                  <Bot className="w-3.5 h-3.5" />
                  <span>CI/CD Workflow Integration</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  {botCard.title}
                </h3>
                <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                  {botCard.subtitle}
                </p>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  {botCard.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {botCard.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual Workflow Pipeline: Code → AI Review → Findings → Developer */}
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800/80">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 block">
                Automated Review Pipeline Execution
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {botCard.workflow.map((node, index) => (
                  <div
                    key={node.step}
                    className="relative p-4 rounded-xl bg-slate-50 dark:bg-navy-950/70 border border-slate-200/80 dark:border-slate-800/80 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                          STAGE {node.step}
                        </span>
                        {index === 0 && <Code2 className="w-4 h-4 text-slate-400" />}
                        {index === 1 && <Bot className="w-4 h-4 text-cyan-500" />}
                        {index === 2 && <ShieldAlert className="w-4 h-4 text-amber-500" />}
                        {index === 3 && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {node.label}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                        {node.desc}
                      </p>
                    </div>

                    {index < botCard.workflow.length - 1 && (
                      <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-400 dark:text-slate-600 pointer-events-none">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 2-Column Split: CARD 2 (AI Agent Skills) & CARD 3 (AI-Assisted Development) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* CARD 2: AI Agent Skills */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-xl dark:hover:shadow-cyan-950/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 mb-3">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Standardized Engineering Knowledge</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {skillsCard.title}
                </h3>
                <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                  {skillsCard.subtitle}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  {skillsCard.description}
                </p>

                {/* Examples */}
                <div className="mt-6 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Authored Agent Skills &amp; Best Practices
                  </span>
                  {skillsCard.examples.map((ex) => (
                    <div
                      key={ex.name}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200/70 dark:border-slate-800/70"
                    >
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        <Terminal className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                        <span>{ex.name}</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 pl-5 leading-relaxed">
                        {ex.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-2">
                {skillsCard.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CARD 3: AI-Assisted Product Development */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-navy-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:shadow-xl dark:hover:shadow-cyan-950/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 mb-3">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Velocity &amp; Quality Acceleration</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                  {devCard.title}
                </h3>
                <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">
                  {devCard.subtitle}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  {devCard.description}
                </p>

                {/* Pillars */}
                <div className="mt-6 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Key Practical Principles
                  </span>
                  {devCard.pillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200/70 dark:border-slate-800/70"
                    >
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{pillar.title}</span>
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 pl-5 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-2">
                {devCard.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
