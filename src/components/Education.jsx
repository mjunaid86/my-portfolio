import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { degrees, certifications } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-navy-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-500/20 mb-3">
            Academic Background &amp; Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education &amp; Certifications
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Advanced academic foundations complemented by continuous professional architecture and agile training.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Column 1: Degrees */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Higher Education
              </h3>
            </div>

            <div className="space-y-6">
              {degrees.map((deg, index) => (
                <motion.div
                  key={deg.degree}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/90 dark:border-slate-800/80 shadow-sm"
                >
                  <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                    Postgraduate / Degree Program
                  </span>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                    {deg.degree}
                  </h4>
                  <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                    {deg.institution}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {deg.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {deg.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                    {deg.focus}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Certifications & Training */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Certifications &amp; Executive Training
              </h3>
            </div>

            <div className="space-y-3.5">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  className="p-4 sm:p-5 rounded-xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200/90 dark:border-slate-800/80 shadow-sm flex items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <span
                      className={`px-2.5 py-1 rounded-md text-[11px] font-semibold border ${
                        cert.status === 'Completed'
                          ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-500/30'
                          : 'bg-slate-100 dark:bg-navy-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
