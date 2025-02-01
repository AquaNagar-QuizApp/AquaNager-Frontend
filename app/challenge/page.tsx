"use client";

import Link from "next/link"
import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/AnimatedBackground"

export default function Challenge() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 h-screen flex flex-col items-center justify-center">
        <motion.div
          className="max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-semibold text-white mb-4">Ready for the Challenge?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Are you prepared to take on the role of WSS Engineer and tackle the water management challenges of Aqua
            Nagar?
          </p>
          <Link href="/login">
            <motion.button
              className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start the Challenge
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}

