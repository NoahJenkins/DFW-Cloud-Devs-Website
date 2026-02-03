'use client';

import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-blue-50/50 to-blue-100/50 dark:from-background dark:via-blue-950/20 dark:to-slate-900/50 -z-10" />
      
      {/* Decorative Circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10 animate-pulse delay-700" />

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Where DFW's <br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:to-blue-400">
              Cloud Developers
            </span>{' '}
            <br />
            Connect & Grow
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto"
        >
          Join 1+ developers building the future of cloud computing in Texas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#events"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-blue-700 transition-transform hover:scale-105 shadow-lg shadow-blue-500/20"
          >
            View Upcoming Events
          </a>
          <a
            href={SOCIAL_LINKS.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white dark:bg-slate-800 text-primary dark:text-white border border-primary/20 dark:border-slate-700 rounded-lg font-semibold text-lg hover:bg-blue-50 dark:hover:bg-slate-700 transition-transform hover:scale-105"
          >
            Join Our Discord
          </a>
        </motion.div>
      </div>
    </section>
  );
}
