"use client";

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function QuizSelection({ onSelect }) {
  const quizSets = ["Set 1", "Set 2", "Set 3", "Set 4"]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div className="space-y-4" initial="hidden" animate="visible" variants={containerVariants}>
      <motion.h2 className="text-2xl font-semibold text-center text-blue-700" variants={itemVariants}>
        Choose a Quiz Set
      </motion.h2>
      <motion.div className="grid grid-cols-2 gap-4" variants={containerVariants}>
        {quizSets.map((set) => (
          <motion.div key={set} variants={itemVariants}>
            <Button
              onClick={() => onSelect(set)}
              className="w-full h-full py-8 text-lg font-semibold"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              {set}
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

