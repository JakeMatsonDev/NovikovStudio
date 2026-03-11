"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "iOS App Development",
    description: "Native iOS apps built with SwiftUI and UIKit, optimized for performance and Apple's latest APIs.",
  },
  {
    title: "AI / ML Integration",
    description: "On-device machine learning, voice synthesis, and intelligent features powered by CoreML and cloud AI.",
  },
  {
    title: "Backend & Cloud",
    description: "Scalable backends with Convex, CloudKit, and modern serverless architectures.",
  },
  {
    title: "App Store Optimization",
    description: "Data-driven ASO strategies to maximize visibility, downloads, and conversion rates.",
  },
  {
    title: "UI/UX Design",
    description: "Human-centered design following Apple's HIG, delivering intuitive and beautiful interfaces.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Services
          </h2>
          <p className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            What We Do
          </p>
        </motion.div>

        <div className="mt-16 space-y-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="glass-card rounded-2xl p-6 sm:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <h3 className="text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
