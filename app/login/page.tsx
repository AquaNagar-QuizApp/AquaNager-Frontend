"use client"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/AnimatedBackground"
import { Login } from "@/components/Login"

export default function LoginPage() {
  const router = useRouter()

  const handleLogin = (userData) => {
    // Here you would typically handle the login process, perhaps storing the user data in a global state or context
    console.log("User logged in:", userData)
    router.push("/game-map")
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 h-screen flex flex-col items-center justify-center">
        <motion.div
          className="max-w-md w-full bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Login</h2>
          <Login onLogin={handleLogin} />
        </motion.div>
      </div>
    </main>
  )
}

