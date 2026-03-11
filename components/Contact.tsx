"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 dot-grid">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Contact
          </h2>
          <p className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s Build Something
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
              Email
            </h3>
            <a
              href="mailto:contact@novikov-studio.com"
              className="mt-3 block text-lg text-white transition-colors hover:text-accent-start"
            >
              contact@novikov-studio.com
            </a>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
              Office
            </h3>
            <p className="mt-3 text-lg text-white">
              212 5th Ave, 3b
              <br />
              <span className="text-muted">New York, NY 10010</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
