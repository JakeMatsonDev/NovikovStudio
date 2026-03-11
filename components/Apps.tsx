"use client";

import { motion } from "framer-motion";
import { apps } from "@/lib/apps";

export default function Apps() {
  return (
    <section id="apps" className="relative py-32 px-6 dot-grid">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Apps
          </h2>
          <p className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Our Portfolio
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app, i) => (
            <motion.a
              key={app.name}
              href={app.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group rounded-2xl p-6 transition-all hover:border-white/15 hover:bg-white/[0.07]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* App icon placeholder */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-start/20 to-accent-end/20 text-2xl">
                <span className="gradient-text font-bold">
                  {app.name.charAt(0)}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {app.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent-start/80">
                {app.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {app.subtitle}
              </p>

              <div className="mt-5 flex items-center gap-1 text-sm text-muted transition-colors group-hover:text-white">
                View on App Store
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
