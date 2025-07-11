"use client"

import { useState, useEffect } from "react"
import { Terminal, Cpu, HardDrive, Wifi, Battery, Zap, Code, Coffee, Heart } from "lucide-react"

const TerminalLoader = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [systemInfo, setSystemInfo] = useState([])
  const [bootLogs, setBootLogs] = useState([])
  const [currentCommand, setCurrentCommand] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [matrixRain, setMatrixRain] = useState([])

  const bootSequence = [
    {
      text: "Initializing Bishnu Prasad Khanal Portfolio System...",
      delay: 800,
      type: "info",
      progress: 5,
    },
    {
      text: "Loading Laravel Developer Module... [████████████████████] 100%",
      delay: 1000,
      type: "success",
      progress: 15,
    },
    {
      text: "Scanning PHP expertise... [████████████████████] 95%",
      delay: 700,
      type: "success",
      progress: 25,
    },
    {
      text: "Mounting React components... [████████████████████] 90%",
      delay: 600,
      type: "success",
      progress: 35,
    },
    {
      text: "Connecting to MySQL database... [████████████████████] 98%",
      delay: 800,
      type: "success",
      progress: 45,
    },
    {
      text: "Initializing payment gateways... [████████████████████] 100%",
      delay: 600,
      type: "success",
      progress: 55,
    },
    {
      text: "Loading project portfolio... [████████████████████] 100%",
      delay: 900,
      type: "success",
      progress: 70,
    },
    {
      text: "Establishing Nepal server connection... [████████████████████] 100%",
      delay: 500,
      type: "success",
      progress: 80,
    },
    {
      text: "Optimizing for freelance mode... [████████████████████] 100%",
      delay: 700,
      type: "success",
      progress: 90,
    },
    {
      text: "Starting web server on port 3000...",
      delay: 600,
      type: "info",
      progress: 95,
    },
    {
      text: "System ready! Welcome to my digital workspace. 🚀",
      delay: 1000,
      type: "success",
      progress: 100,
    },
  ]

  const systemStats = [
    { label: "CPU", value: "2.5GHz", icon: Cpu, color: "text-blue-400" },
    { label: "Memory", value: "512GB", icon: HardDrive, color: "text-green-400" },
    { label: "Network", value: "Connected", icon: Wifi, color: "text-yellow-400" },
    { label: "Power", value: "100%", icon: Battery, color: "text-green-400" },
  ]

  // Initialize matrix rain effect
  useEffect(() => {
    const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン"
    const drops = []

    for (let i = 0; i < 50; i++) {
      drops.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        char: chars[Math.floor(Math.random() * chars.length)],
        speed: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      })
    }
    setMatrixRain(drops)
  }, [])

  // Boot sequence animation
  useEffect(() => {
    if (currentStep < bootSequence.length) {
      const timer = setTimeout(() => {
        const step = bootSequence[currentStep]
        setBootLogs((prev) => [
          ...prev,
          {
            timestamp: new Date().toLocaleTimeString(),
            text: step.text,
            type: step.type,
          },
        ])
        setProgress(step.progress)
        setCurrentStep(currentStep + 1)
      }, bootSequence[currentStep]?.delay || 500)

      return () => clearTimeout(timer)
    }
  }, [currentStep])

  // Cursor blinking
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(cursorTimer)
  }, [])

  // System info animation
  useEffect(() => {
    const infoTimer = setTimeout(() => {
      setSystemInfo([
        "╭─ Bishnu Prasad Khanal Portfolio System v2.5.0",
        "├─ Laravel Developer | Full-Stack Engineer",
        "├─ Location: Gwarko, Lalitpur, Nepal 🇳🇵",
        "├─ Experience: 2.5+ years of passionate coding",
        "├─ Specialization: E-commerce, CRM, Web Apps",
        "├─ Status: Available for projects ✨",
        "╰─ Ready to build something amazing!",
      ])
    }, 1000)
    return () => clearTimeout(infoTimer)
  }, [])

  // Matrix rain animation
  useEffect(() => {
    const animateMatrix = () => {
      setMatrixRain((prev) =>
        prev.map((drop) => ({
          ...drop,
          y: drop.y + drop.speed,
          char: Math.random() > 0.98 ? "01アイウエオ"[Math.floor(Math.random() * 6)] : drop.char,
          y: drop.y > window.innerHeight ? -20 : drop.y + drop.speed,
        })),
      )
    }

    const matrixTimer = setInterval(animateMatrix, 50)
    return () => clearInterval(matrixTimer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-10">
        {matrixRain.map((drop, i) => (
          <div
            key={i}
            className="absolute text-green-400 font-mono text-sm pointer-events-none"
            style={{
              left: drop.x,
              top: drop.y,
              opacity: drop.opacity,
              transform: `translateY(${drop.y}px)`,
            }}
          >
            {drop.char}
          </div>
        ))}
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
            animation: "matrix-move 20s linear infinite",
          }}
        />
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-6xl">
          {/* Main Terminal Window */}
          <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-600/50 rounded-2xl shadow-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-600/50">
              {/* Window Controls */}
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
                  <div
                    className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse shadow-lg"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
                <div className="flex items-center space-x-3 ml-6">
                  <Terminal className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-mono text-lg font-semibold">bishnu@portfolio-system</span>
                </div>
              </div>

              {/* System Stats */}
              <div className="hidden md:flex items-center space-x-6 text-sm">
                {systemStats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <stat.icon className={`w-4 h-4 ${stat.color}`} />
                    <span className="text-gray-300">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-8 font-mono text-sm min-h-96 bg-gray-900/50">
              {/* System Information */}
              <div className="mb-8">
                {systemInfo.map((line, index) => (
                  <div
                    key={index}
                    className="text-blue-400 mb-1 opacity-0 animate-fade-in"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                      animationFillMode: "forwards",
                    }}
                  >
                    {line}
                  </div>
                ))}
              </div>

              {/* Boot Logs */}
              <div className="space-y-2 mb-8 max-h-64 overflow-y-auto">
                {bootLogs.map((log, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 opacity-0 animate-slide-up"
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <span className="text-gray-500 text-xs whitespace-nowrap">[{log.timestamp}]</span>
                    <span
                      className={`flex-1 ${
                        log.type === "success"
                          ? "text-green-400"
                          : log.type === "error"
                            ? "text-red-400"
                            : "text-blue-400"
                      }`}
                    >
                      {log.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 flex items-center space-x-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>Loading Progress:</span>
                  </span>
                  <span className="text-green-400 font-bold">{progress}%</span>
                </div>

                {/* Enhanced Progress Bar */}
                <div className="relative w-full bg-gray-800 rounded-full h-4 overflow-hidden border border-gray-600">
                  <div
                    className="h-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-out relative"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                    <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white/30 to-transparent rounded-full"></div>
                  </div>
                </div>

                <div className="text-xs text-gray-500 mt-2 flex justify-between">
                  <span>Initializing...</span>
                  <span>{progress === 100 ? "Complete!" : "In Progress..."}</span>
                </div>
              </div>

              {/* Command Prompt */}
              <div className="flex items-center space-x-2">
                <span className="text-blue-400">bishnu@portfolio:~$</span>
                <span className="text-green-400">./start-portfolio.sh</span>
                {showCursor && <span className="text-green-400 animate-pulse">|</span>}
              </div>

              {/* Status Indicators */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-green-400 font-semibold">System Status</div>
                    <div className="text-gray-400 text-xs">Online & Ready</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <Code className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-blue-400 font-semibold">Development Mode</div>
                    <div className="text-gray-400 text-xs">Laravel + React</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                  <Heart className="w-5 h-5 text-red-400 animate-pulse" />
                  <div>
                    <div className="text-red-400 font-semibold">Made with Love</div>
                    <div className="text-gray-400 text-xs">In Nepal 🇳🇵</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Status Bar */}
          <div className="mt-6 flex items-center justify-center">
            <div className="flex items-center space-x-4 bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-full px-6 py-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Preparing workspace...</span>
              </div>
              <div className="flex items-center space-x-2">
                <Coffee className="w-4 h-4 text-yellow-400" />
                <span className="text-gray-400 text-sm">Powered by coffee & passion</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes matrix-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </div>
  )
}

export default TerminalLoader
