// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { useRouter } from "next/navigation"
// import { AnimatedBackground } from "@/components/AnimatedBackground"

// const storyParts = [
//   "The city of Aqua Nagar in Tamil Nadu State is growing rapidly. More residents and businesses are popping up every day, and with this growth comes the increased demand for clean, reliable water.",
//   "The city's current water supply infrastructure is outdated, and leaks, poor management, and inefficiencies are beginning to take their toll.",
//   "The Government has tasked you to design, implement, and sustain a modern Water Supply System that can support Aqua Nagar for years to come.",
//   "As you take on the role of the WSS Engineer, you'll begin by designing a water supply system that considers the entire life cycle of the infrastructure.",
//   "You need to make key decisions on the system's design, including choosing the right materials, selecting energy-efficient treatment methods, and ensuring that water is treated and delivered in a safe, reliable, and sustainable way.",
//   "Your decisions will impact both the financial and environmental sustainability of the system.",
// ]

// export default function Story() {
//   const [currentPart, setCurrentPart] = useState(0)
//   const router = useRouter()

//   const handleNext = () => {
//     if (currentPart < storyParts.length - 1) {
//       setCurrentPart(currentPart + 1)
//     } else {
//       router.push("/challenge")
//     }
//   }

//   return (
//     <main className="min-h-screen relative overflow-hidden">
//       <AnimatedBackground />
//       <div className="relative z-10 h-screen flex flex-col items-center justify-center p-4">
//         <div className="max-w-2xl w-full">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentPart}
//               className="bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5 }}
//             >
//               <p className="text-lg text-white">{storyParts[currentPart]}</p>
//             </motion.div>
//           </AnimatePresence>
//           <motion.button
//             className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={handleNext}
//           >
//             {currentPart < storyParts.length - 1 ? "Next" : "Ready for the Challenge"}
//           </motion.button>
//         </div>
//       </div>
//     </main>
//   )
// }



"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const storyParts = [
  "The city of Aqua Nagar in Tamil Nadu State is growing rapidly. More residents and businesses are popping up every day, and with this growth comes the increased demand for clean, reliable water.",
  "The city's current water supply infrastructure is outdated, and leaks, poor management, and inefficiencies are beginning to take their toll.",
  "The Government has tasked you to design, implement, and sustain a modern Water Supply System that can support Aqua Nagar for years to come.",
  "As you take on the role of the WSS Engineer, you'll begin by designing a water supply system that considers the entire life cycle of the infrastructure.",
  "You need to make key decisions on the system's design, including choosing the right materials, selecting energy-efficient treatment methods, and ensuring that water is treated and delivered in a safe, reliable, and sustainable way.",
  "Your decisions will impact both the financial and environmental sustainability of the system.",
];

export default function Story() {
  const [currentPart, setCurrentPart] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    if (currentPart < storyParts.length - 1) {
      setCurrentPart(currentPart + 1);
    } else {
      router.push("/challenge");
    }
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPart}
              className="relative bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Character Positioned at Top Left */}
              <motion.img
                src="/characters/Explainer.png" // Replace with your character image path
                alt="Character"
                className="absolute top-0 left-10 w-24 h-24 z-20 -mt-12 -ml-12 "
                initial={{ x: -50, y: -50 }}
                animate={{ x: 0, y: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
              />

              <motion.p className="text-lg text-white mt-5">
                {storyParts[currentPart].split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.1,
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </AnimatePresence>
          <motion.button
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
          >
            {currentPart < storyParts.length - 1 ? "Next" : "Ready for the Challenge"}
          </motion.button>
        </div>
      </div>
    </main>
  );
}
