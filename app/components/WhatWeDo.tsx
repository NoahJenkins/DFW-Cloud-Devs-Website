'use client';

import { motion } from 'framer-motion';
import { TECH_STACK } from '../lib/constants';
import { FaCode } from 'react-icons/fa6';

const EVENTS = [
  { title: 'Monthly Meetups', description: 'Regular gatherings for networking and learning.' },
  { title: 'Hands-On Workshops', description: 'Practical skills development sessions.' },
  { title: 'Community Support', description: 'Mentorship, code reviews, and career guidance.' },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What We Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We serve the entire software development ecosystem with events, workshops, and community support.
          </p>
        </div>

        {/* Event Types */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {EVENTS.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-muted-foreground">{event.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Technologies We Cover</h3>
          <p className="text-muted-foreground">All-inclusive approach to the modern tech stack</p>
        </div>

        {/* Tech Stack */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TECH_STACK.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-xl border border-border shadow-sm text-center"
            >
              <div className="inline-block p-3 bg-blue-50 dark:bg-slate-800 rounded-lg mb-4">
                <FaCode className="text-primary text-xl" />
              </div>
              <h4 className="text-lg font-bold mb-4">{category.category}</h4>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
