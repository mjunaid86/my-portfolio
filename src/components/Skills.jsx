import React from 'react';
import { motion } from 'framer-motion';
import { 
  Network, 
  Server, 
  Layout, 
  Database, 
  Cloud, 
  GitBranch, 
  Cpu, 
  Bot, 
  ArrowDown, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';
import { skillCategories, architectureStack } from '../data/skills';

const iconMap = {
  Network,
  Server,
  Layout,
  Database,
  Cloud,
  GitBranch,
  Cpu,
  Bot
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-navy-900/40 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-500/20 mb-3">
            Technical Depth &amp; Systems Design
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technology &amp; Architecture
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A cohesive engineering stack structured across clean architectural layers, emphasizing loose coupling, high availability, and maintainability.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Part 1: Subtle Architecture Stack Visualization */}
        <div className="mb-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Enterprise Architectural Tier Breakdown
            </span>
          </div>

          <div className="space-y-3">
            {architectureStack.map((tier, idx) => (
              <React.Fragment key={tier.layer}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-navy-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:border-cyan-500/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="max-w-md">
                    <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                      {tier.layer}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                      {tier.focus}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {tier.description}
                    </p>
                  </div>

                  <div className="md:text-right shrink-0">
                    <span className="inline-block px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-navy-800 text-slate-800 dark:text-cyan-300 border border-slate-200 dark:border-slate-700 max-w-xs text-left md:text-right">
                      {tier.tech}
                    </span>
                  </div>
                </motion.div>

                {idx < architectureStack.length - 1 && (
                  <div className="flex justify-center text-slate-300 dark:text-slate-700 py-0.5">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Part 2: Categorized Technology Matrix (No Logo Walls) */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Categorized Technology Matrix
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Organized by functional engineering domain rather than unsorted badges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((group, index) => {
              const Icon = iconMap[group.icon] || Layers;
              return (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 4) * 0.1 }}
                  className="p-6 rounded-2xl bg-white dark:bg-navy-900/70 border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/50 shadow-sm transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {group.category}
                    </h4>
                  </div>

                  <ul className="space-y-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-xs font-medium text-slate-600 dark:text-slate-300 flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
