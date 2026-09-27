import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ArrowUpRight, Copy, Check, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "m.junaid86@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-navy-900/40 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 sm:p-12 md:p-16 rounded-3xl bg-white dark:bg-navy-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-xl dark:shadow-cyan-950/20 text-center relative overflow-hidden"
          >
            {/* Ambient decorative glow */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-500/20 mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Executive Inquiries &amp; Collaboration</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Let&rsquo;s Build What&rsquo;s Next
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
              Interested in digital transformation, aviation technology, enterprise platforms or engineering innovation? Let&rsquo;s connect.
            </p>

            {/* Direct Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 max-w-2xl mx-auto">
              
              {/* Email */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200/70 dark:border-slate-800/70 flex flex-col items-center">
                <Mail className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mb-2" />
                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">Direct Email</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1 break-all">
                  {email}
                </span>
              </div>

              {/* LinkedIn */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200/70 dark:border-slate-800/70 flex flex-col items-center">
                <ArrowUpRight className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mb-2" />
                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">LinkedIn Network</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1">
                  /in/muhammadjkhan
                </span>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-navy-950/60 border border-slate-200/70 dark:border-slate-800/70 flex flex-col items-center">
                <MapPin className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mb-2" />
                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">Base Location</span>
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-1">
                  Kuala Lumpur, Malaysia
                </span>
              </div>

            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/muhammadjkhan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/20 active:scale-98 transition-all"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-navy-800 hover:bg-slate-200 dark:hover:bg-navy-700 border border-slate-300 dark:border-slate-700 active:scale-98 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${email}?subject=Executive%20Inquiry%20-%20Technology%20Leadership`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"
              >
                <span>Open Mail Client &rarr;</span>
              </a>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
