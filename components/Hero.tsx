"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Radial gradient glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "800px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(0,212,255,0.12) 0%, rgba(121,40,202,0.08) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 text-center">
        <motion.h1
          className="mx-auto max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          We craft{" "}
          <span className="gradient-text">iOS experiences.</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-xl text-lg text-muted sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Novikov Studio LLC — iOS development studio based in New York City
        </motion.p>

        <motion.a
          href="#apps"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-medium text-white transition-all hover:border-white/20 hover:bg-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          View Our Apps
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
