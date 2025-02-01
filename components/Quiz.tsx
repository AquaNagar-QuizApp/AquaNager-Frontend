"use client";

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface QuizProps {
  quizSet: string
  onComplete: (score: number) => void
}

interface Question {
  type: "text" | "image"
  question: string
  options: string[]
  correctAnswer: string
  imageUrl?: string
}

const mockQuestions: Question[] = [
  {
    type: "text",
    question: "What is the main source of freshwater on Earth?",
    options: ["Oceans", "Rivers", "Groundwater", "Glaciers"],
    correctAnswer: "Groundwater",
  },
  {
    type: "image",
    question: "Which of these is a water conservation method?",
    imageUrl: "/placeholder.svg?height=200&width=300",
    options: ["Drip irrigation", "Flood irrigation", "Sprinkler system", "Manual watering"],
    correctAnswer: "Drip irrigation",
  },
  // Add more mock questions here
]

export function Quiz({ quizSet, onComplete }: QuizProps) {
  const [currentSection, setCurrentSection] = useState<number>(0)
  const [currentQuestion, setCurrentQuestion] = useState<number>(0)
  const [score, setScore] = useState<number>(0)
  const [timeLeft, setTimeLeft] = useState<number>(60)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          handleNextQuestion()
          return 60
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === mockQuestions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1)
    }
    handleNextQuestion()
  }

  const handleNextQuestion = () => {
    if (currentQuestion < 9) {
      setCurrentQuestion((prev) => prev + 1)
      setTimeLeft(60)
    } else if (currentSection < 6) {
      setCurrentSection((prev) => prev + 1)
      setCurrentQuestion(0)
      setTimeLeft(60)
    } else {
      onComplete(score)
    }
  }

  const currentQuestionData = mockQuestions[currentQuestion]

  const questionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
  }

  return (
    <Card className="p-6 space-y-4">
      <motion.div
        className="flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold">
          Section {currentSection + 1} - Question {currentQuestion + 1}
        </h3>
        <span className="text-lg font-medium">Time left: {timeLeft}s</span>
      </motion.div>
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5 }}>
        <Progress value={(timeLeft / 60) * 100} className="w-full" />
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          variants={questionVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="space-y-4"
        >
          {currentQuestionData.type === "image" && (
            <motion.img
              src={currentQuestionData.imageUrl || "/placeholder.svg"}
              alt="Question Image"
              className="w-full h-48 object-cover rounded-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          )}
          <p className="text-lg">{currentQuestionData.question}</p>
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {currentQuestionData.options.map((option) => (
              <motion.div
                key={option}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Button
                  onClick={() => handleAnswer(option)}
                  className="w-full h-full py-4 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {option}
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </Card>
  )
}

