"use client"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { AnimatedBackground } from "@/components/AnimatedBackground"

const stages = [
  "Plan A Water Supply System",
  "Design the Water Supply System",
  "Building the Infrastructure",
  "Water Treatment",
  "Smart Water Networks",
  "Metering, Billing, and Collection",
  "Non-Revenue Water Management",
  "Performance Assessment & Operational Excellence",
]

export default function GameMap() {
  const router = useRouter()

  const handleStageClick = (stage) => {
    router.push(`/quiz-selection?stage=${encodeURIComponent(stage)}`)
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-3xl font-semibold text-white mb-8">Game Stages</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stages.map((stage, index) => (
            <motion.button
              key={index}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleStageClick(stage)}
            >
              {`Stage ${index + 1}`}
            </motion.button>
          ))}
        </div>
      </div>
    </main>
  )
}

