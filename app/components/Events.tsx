'use client';

import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../lib/constants';

export default function Events() {
  return (
    <section id="events" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join us for workshops, meetups, and conferences. All skill levels welcome!
          </p>
          
          <a
             href={SOCIAL_LINKS.luma}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center text-primary font-semibold hover:underline"
           >
             View Full Calendar on Lu.ma &rarr;
           </a>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl mx-auto"
        >
            <div className="relative w-full overflow-hidden rounded-xl border border-border shadow-lg bg-card" style={{ minHeight: '600px' }}>
                <iframe
                    src="https://luma.com/embed/calendar/cal-Gv5MbNhW3PvCzA6/events"
                    width="100%"
                    height="100%"
                    style={{ border: 'none', minHeight: '600px' }}
                    allowFullScreen
                    aria-hidden="false"
                    title="DFW Cloud Devs Events Calendar"
                />
            </div>
        </motion.div>
      </div>
    </section>
  );
}
