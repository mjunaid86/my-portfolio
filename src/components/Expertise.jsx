import React from 'react';
import { motion } from 'framer-motion';
import { 
  Repeat, 
  Compass, 
  Layers, 
  Plane, 
  Users, 
  Cloud, 
  Building2, 
  Database, 
  Bot, 
  Cpu 
} from 'lucide-react';
import { expertiseAreas } from '../data/expertise';

const iconMap = {
  Repeat,
  Compass,
  Layers,
  Plane,
  Users,
  Cloud,
  Building2,
  Database,
  Bot,
  Cpu
};

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 bg-slate-50 dark:bg-navy-900/40 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-500/20 mb-3">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Leadership &amp; Expertise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Strategic technology stewardship combining deep aviation MRO domain knowledge with modern cloud, data, and applied AI practices.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* 10 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((item, index) => {
            const Icon = iconMap[item.icon] || Layers;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -4 }}
                className="group p-6 rounded-2xl bg-white dark:bg-navy-900/80 border border-slate-200/90 dark:border-slate-800/80 hover:border-cyan-500/60 dark:hover:border-cyan-500/40 shadow-sm hover:shadow-md dark:hover:shadow-cyan-950/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-navy-800 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4 group-hover:bg-gradient-to-tr group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center text-xs font-semibold text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>Executive Focus Area &rarr;</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
