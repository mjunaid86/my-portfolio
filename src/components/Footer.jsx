import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-white dark:bg-navy-950 border-t border-slate-200/80 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800/80">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                JK
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                MUHAMMAD JUNAID KHAN
              </h3>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
              Technology &amp; Digital Transformation Leader
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
              Aviation MRO &bull; Digital Products &bull; Cloud &bull; AI Innovation
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/muhammadjkhan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 transition-colors"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-lg text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-white bg-slate-100 dark:bg-navy-900 border border-slate-200 dark:border-slate-800 transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 dark:text-slate-500">
          <div>
            &copy; {currentYear} Muhammad Junaid Khan. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Enterprise Technology Portfolio</span>
            <span>Kuala Lumpur, Malaysia</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
