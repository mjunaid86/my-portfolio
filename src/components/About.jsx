import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Plane, Activity, RefreshCw } from 'lucide-react';

const stats = [
  {
    icon: Clock,
    value: "12+ Years",
    label: "Technology Experience",
    detail: "Leading enterprise engineering & platform modernizations"
  },
  {
    icon: Plane,
    value: "4+",
    label: "Aviation Digital Platforms",
    detail: "Aerotrade, MDC, RMC & Elevade records ecosystem"
  },
  {
    icon: Activity,
    value: "3M+",
    label: "Daily Transactions Supported",
    detail: "High-volume distributed microservices & telecom payment gateways"
  },
  {
    icon: RefreshCw,
    value: "5 min",
    label: "Data Refresh / Synchronization",
    detail: "High-frequency enterprise Pickslip & inventory synchronization"
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-navy-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-500/20 mb-3">
            Profile &amp; Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              Technology and Digital Transformation Leader with <span className="font-semibold text-slate-900 dark:text-white">12+ years of experience</span> delivering enterprise digital platforms across aviation MRO, telecommunications and ERP systems.
            </p>
            <p>
              Currently leading digital product and platform initiatives across <span className="font-semibold text-slate-900 dark:text-white">AirAsia / Asia Digital Engineering (ADE)</span>, with experience spanning aviation parts management, MRO workflows, cloud platforms, microservices, data integration and engineering leadership.
            </p>
            <p>
              Experienced in applying AI to software engineering and digital product development, including <span className="font-semibold text-cyan-600 dark:text-cyan-400">AI-powered code review</span>, <span className="font-semibold text-cyan-600 dark:text-cyan-400">reusable AI Agent Skills</span>, <span className="font-semibold text-cyan-600 dark:text-cyan-400">AI-assisted development</span> and engineering automation.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-900/60 border-l-4 border-cyan-500 text-slate-800 dark:text-slate-200 italic font-medium">
              &ldquo;I enjoy working at the intersection of business, technology and innovation — understanding the problem, shaping the solution, building the platform and helping teams deliver.&rdquo;
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-navy-900 dark:to-navy-850 border border-slate-200 dark:border-slate-800 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Core Leadership Focus
              </h3>
              <ul className="space-y-3.5 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shrink-0" />
                  <span><strong>Business-First Alignment:</strong> Directing technical decisions to resolve tangible operational friction and drive commercial velocity.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shrink-0" />
                  <span><strong>Platform Scalability:</strong> Transforming legacy monoliths into resilient, loosely-coupled microservices and data pipelines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shrink-0" />
                  <span><strong>Applied AI Innovation:</strong> Pragmatically embedding generative AI guardrails and standardized skills into everyday CI/CD lifecycles.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 shrink-0" />
                  <span><strong>Engineering Culture:</strong> Empowering self-sufficient cross-functional teams with clear architectural standards and modern tooling.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Key Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-slate-50 dark:bg-navy-900/60 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg dark:hover:shadow-cyan-950/20"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 dark:bg-cyan-950/60 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {item.value}
                </div>
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                  {item.detail}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
