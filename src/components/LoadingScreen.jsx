"use client"

import { useState, useEffect } from "react"
import { Code, Zap, Coffee } from "lucide-react"

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    "Initializing Bishnu's Portfolio...",
    "Loading Laravel expertise...",
    "Connecting to Nepal servers...",
    "Preparing awesome projects...",
    "Almost ready!",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
    }, 800)

    return () => clearInterval(stepInterval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background dots */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="text-center space-y-8 relative z-10">
        {/* Logo */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <Code className="w-12 h-12 text-green-400 animate-spin" />
            <Zap className="w-12 h-12 text-blue-400 animate-bounce" />
            <Coffee className="w-12 h-12 text-yellow-400 animate-pulse" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Bishnu Prasad Khanal
          </h1>

          <p className="text-xl text-gray-300">Laravel Developer | Software Developer | Nepal 🇳🇵</p>
        </div>

        {/* Loading progress */}
        <div className="w-80 mx-auto space-y-4">
          <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="text-center">
            <p className="text-green-400 font-medium">{steps[currentStep]}</p>
            <p className="text-gray-400 text-sm mt-2">{progress}% Complete</p>
          </div>
        </div>

        {/* Fun facts */}
        <div className="text-sm text-gray-400 space-y-1">
          <p>🚀 Building amazing web applications since 2021</p>
          <p>☕ Powered by coffee and passion for coding</p>
          <p>🇳🇵 Proudly representing Nepal in tech</p>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen
