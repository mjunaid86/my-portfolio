import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Plane, Database, Layers, Shield, Cpu, RefreshCw } from 'lucide-react';

const categoryIcons = {
  "Aviation Digital Platform": Plane,
  "Aviation MRO / Material Management": Plane,
  "Aviation MRO": Plane,
  "Enterprise Data Integration": Database,
  "Enterprise Shared Service": RefreshCw,
  "Enterprise Platform": Shield,
  "Aviation MRO / Digital Records": Layers
};

export default function ProjectCard({ project, onSelect, index }) {
  const Icon = categoryIcons[project.category] || Layers;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.15 }}
      whileHover={{ y: -5 }}
      onClick={() => onSelect(project)}
      className="group cursor-pointer rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200/90 dark:border-slate-800/80 hover:border-cyan-500/60 dark:hover:border-cyan-500/50 shadow-sm hover:shadow-xl dark:hover:shadow-cyan-950/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
    >
      {/* Top Banner & Category */}
      <div className="p-6 sm:p-7 pb-4">
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20">
            <Icon className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
            <span>{project.category}</span>
          </span>

          <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
            0{index + 1}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
          {project.description}
        </p>

        {/* Role Highlight */}
        <div className="mt-4 p-3 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200/60 dark:border-slate-800/60 text-xs">
          <span className="font-semibold text-slate-900 dark:text-slate-200">Role: </span>
          <span className="text-slate-600 dark:text-slate-400">{project.myRole}</span>
        </div>
      </div>

      {/* Technologies & Footer CTA */}
      <div className="p-6 sm:p-7 pt-2 mt-auto">
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-navy-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-navy-800 text-slate-500 dark:text-slate-400">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/70 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {project.highlights?.[0] || "Architecture & Impact"}
          </span>
          <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform">
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
