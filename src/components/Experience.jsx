import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { experienceData } from '../data/experience';

export default function Experience() {
  const [expandedId, setExpandedId] = useState('ade-lead');

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="py-24 bg-white dark:bg-navy-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-500/20 mb-3">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A progression of technical and strategic leadership across aviation digital platforms, telecommunications scale, and enterprise systems.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline spine */}
          <div className="hidden sm:block absolute left-8 top-3 bottom-3 w-0.5 bg-slate-200 dark:bg-slate-800" />

          <div className="space-y-8">
            {experienceData.map((item, index) => {
              const isExpanded = expandedId === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative sm:pl-20"
                >
                  {/* Timeline node icon */}
                  <div className={`hidden sm:flex absolute left-4 top-5 -translate-x-1/2 w-8 h-8 rounded-full items-center justify-center border-2 z-10 transition-colors ${
                    item.current
                      ? 'bg-cyan-500 border-white dark:border-navy-950 text-white shadow-md shadow-cyan-500/30'
                      : 'bg-white dark:bg-navy-900 border-slate-300 dark:border-slate-700 text-slate-500'
                  }`}>
                    <Briefcase className="w-3.5 h-3.5" />
                  </div>

                  {/* Card Content */}
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className={`cursor-pointer rounded-2xl border transition-all duration-300 p-6 sm:p-7 ${
                      item.current
                        ? 'bg-slate-50 dark:bg-navy-900/90 border-cyan-500/50 shadow-md'
                        : 'bg-white dark:bg-navy-900/60 border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {/* Header info */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {item.role}
                          </h3>
                          {item.current && (
                            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30">
                              Current Role
                            </span>
                          )}
                        </div>
                        <h4 className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                          {item.company}
                        </h4>
                      </div>

                      <div className="flex flex-col sm:items-end text-xs text-slate-500 dark:text-slate-400 gap-1">
                        <div className="flex items-center gap-1.5 font-medium">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2 font-medium">
                      {item.summary}
                    </p>

                    {/* Collapsible / Expandable details */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                        className="mt-5 pt-5 border-t border-slate-200/80 dark:border-slate-800"
                      >
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3">
                          Key Responsibilities &amp; Impact
                        </span>
                        <ul className="space-y-2.5 mb-5">
                          {item.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{h}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/60">
                          {item.technologies.map(t => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Accordion toggle prompt */}
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500 select-none">
                      <span>{isExpanded ? "Collapse highlights" : "View highlights & technologies"}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-cyan-500' : ''}`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
