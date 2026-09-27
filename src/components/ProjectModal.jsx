import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, Shield, Layers, Server, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-navy-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl z-10 flex flex-col"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 px-6 py-5 bg-white/95 dark:bg-navy-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-cyan-600 dark:text-cyan-400">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-navy-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Overview / Tagline */}
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {project.longDescription || project.description}
            </p>

            {/* Architecture Diagram if available */}
            {project.architectureDiagram && (
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-navy-950/80 border border-slate-200 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 block">
                  Enterprise Flow Architecture
                </span>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-semibold">
                  <div className="flex flex-col gap-2 w-full sm:w-auto">
                    {project.architectureDiagram.sources.map(src => (
                      <div key={src} className="px-3.5 py-2 rounded-lg bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-center text-slate-700 dark:text-slate-200 shadow-sm">
                        {src}
                      </div>
                    ))}
                  </div>
                  <div className="text-slate-400 dark:text-slate-500 flex items-center justify-center rotate-90 sm:rotate-0">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <div className="px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-center shadow-md w-full sm:w-auto">
                    {project.architectureDiagram.hub}
                    <div className="text-[10px] font-normal opacity-90 mt-0.5">Synchronized Every 5 Minutes</div>
                  </div>
                  <div className="text-slate-400 dark:text-slate-500 flex items-center justify-center rotate-90 sm:rotate-0">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <div className="px-3.5 py-2.5 rounded-lg bg-white dark:bg-navy-900 border border-slate-200 dark:border-slate-800 text-center text-slate-700 dark:text-slate-200 shadow-sm w-full sm:w-auto">
                    {project.architectureDiagram.target}
                  </div>
                </div>
              </div>
            )}

            {/* Structured Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Business Problem */}
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-navy-950/50 border border-slate-200 dark:border-slate-800/80">
                <div className="text-xs font-bold tracking-wider uppercase text-rose-600 dark:text-rose-400 mb-2">
                  Business Problem
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.businessProblem}
                </p>
              </div>

              {/* Solution */}
              <div className="p-5 rounded-xl bg-slate-50 dark:bg-navy-950/50 border border-slate-200 dark:border-slate-800/80">
                <div className="text-xs font-bold tracking-wider uppercase text-emerald-600 dark:text-emerald-400 mb-2">
                  Technical Solution
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* My Role */}
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-navy-950/50 border border-slate-200 dark:border-slate-800/80">
              <div className="text-xs font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-400 mb-2">
                My Role &amp; Contribution
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                {project.myRole}
              </p>
              {project.contribution && (
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {project.contribution}
                </p>
              )}
            </div>

            {/* Business Impact */}
            <div className="p-5 rounded-xl bg-cyan-50/50 dark:bg-cyan-950/30 border border-cyan-500/30">
              <div className="text-xs font-bold tracking-wider uppercase text-cyan-700 dark:text-cyan-400 mb-2">
                Business Impact
              </div>
              <p className="text-sm text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
                {project.impact}
              </p>
            </div>

            {/* Key Deliverable Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 block">
                  Key Initiative Deliverables
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 block">
                Technology &amp; Platform Stack
              </span>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-navy-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-slate-50 dark:bg-navy-950/70 border-t border-slate-200 dark:border-slate-800 flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-navy-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-navy-700 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
