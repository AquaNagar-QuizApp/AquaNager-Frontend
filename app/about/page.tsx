
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function About() {
  const [greeted, setGreeted] = useState(false);

  const text =
    "Test your knowledge about water management through our interactive quiz. Choose from 4 sets of questions, each with 7 sections and 10 questions per section. You'll have 1 minute to answer each question. Upon completion, you'll receive a certificate based on your score.";

  const textArray = text.split(""); // Split text into an array of characters

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 h-screen flex flex-col items-center justify-center">
        {!greeted && (
          <motion.div
            className="absolute flex flex-col items-center justify-center text-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/characters/Explainer.png" // Replace with your character image path
              alt="Character"
              className="w-32 h-32"
            />
            <motion.p
              className="text-lg font-bold text-white mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I am Bob! I will help you through this game.
            </motion.p>
            <motion.button
              className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setGreeted(true)}
            >
              Say Hi 👋
            </motion.button>
          </motion.div>
        )}

        {greeted && (
          <motion.div
            className="relative max-w-2xl text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Character positioned at the top-left */}
            <motion.img
              src="/characters/Explainer.png" // Replace with your character image path
              alt="Character"
              className="absolute top-0 left-0 w-32 h-32 z-20" // Top-left position
              initial={{ x: -50, y: -50 }}
              animate={{ x: 0, y: 0 }}
              transition={{ type: "spring", stiffness: 50 }}
            />
            <h2 className="text-3xl font-semibold text-white mb-4">
                About the Game
              </h2>
            <motion.div
              className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 relative z-10 mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              
              <motion.p className="text-lg text-blue-100 mb-8 text-justify">
                {textArray.map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: index * 0.05, // Control speed by adjusting delay between characters
                      duration: 0.1,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>
              <Link href="/story">
                <motion.button
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Continue to Story 🚀
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </main>
  );
}
