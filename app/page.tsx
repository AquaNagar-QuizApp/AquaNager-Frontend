"use client";
import Link from "next/link"
import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import AudioPlayer from "@/components/AudioPlayer";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <AudioPlayer/>
      <div className="relative z-10 h-screen flex flex-col items-center justify-center">
        <motion.h1
          className=" title text-6xl text-white mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
         Aqua Nagar- The Urban Water Challenge
        </motion.h1>
        <Link href="/about">
          <motion.button
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Journey
          </motion.button>
        </Link>
      </div>
    </main>
  )
}

