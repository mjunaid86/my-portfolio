import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Plane, Filter } from 'lucide-react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Initiatives' },
    { id: 'aviation', label: 'Aviation MRO Platforms' },
    { id: 'integration', label: 'Enterprise Data & Sync' },
    { id: 'platform', label: 'Core Shared Services' }
  ];

  const filteredProjects = projectsData.filter((proj) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'aviation') {
      return proj.category.includes('Aviation') || proj.category.includes('MRO');
    }
    if (activeFilter === 'integration') {
      return proj.category.includes('Data Integration') || proj.id === 'centralized-material-service';
    }
    if (activeFilter === 'platform') {
      return proj.category.includes('Shared Service') || proj.category.includes('Platform');
    }
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-white dark:bg-navy-950 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-500/20 mb-3">
            Portfolio of Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Selected Digital Products &amp; Transformation Initiatives
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Enterprise platforms delivering mission-critical reliability across airline fleet operations, material supply chains, and data synchronization.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === f.id
                  ? 'bg-slate-900 text-white dark:bg-cyan-500 dark:text-navy-950 shadow-sm'
                  : 'bg-slate-100 text-slate-600 dark:bg-navy-900 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-navy-800'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelectedProject}
            />
          ))}
        </div>

        {/* Modal Viewer */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
