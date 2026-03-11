"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "6", label: "Apps on the App Store" },
  { value: "SwiftUI", label: "First approach" },
  { value: "NYC", label: "Based in New York" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            About
          </h2>
          <p className="mt-6 text-2xl leading-relaxed text-white/90 sm:text-3xl">
            We&apos;re a New York City-based iOS studio building polished, user-first
            applications. From concept to App Store, we focus on crafting
            experiences that feel native, fast, and delightful.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-6">
              <div className="text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="mt-2 text-sm text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
