"use client"

import { useState, useEffect } from "react"
import { Terminal, Database, Globe, Server, Zap, Play, RotateCcw } from "lucide-react"

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(null)
  const [isRunning, setIsRunning] = useState(false)
  const [progress, setProgress] = useState({})
  const [terminalOutput, setTerminalOutput] = useState([])
  const [currentCommand, setCurrentCommand] = useState("")
  const [typingIndex, setTypingIndex] = useState(0)

  const skillCategories = [
    {
      id: "backend",
      title: "Backend Development",
      icon: Server,
      color: "from-red-500 to-orange-500",
      terminalColor: "text-red-400",
      skills: [
        {
          name: "Laravel",
          level: 95,
          command: "php artisan --version",
          output: "Laravel Framework \n✅ Expert Level - 3+ years. Used filament, livewire, spatie packages",
          description: "Advanced Laravel development with custom packages",
        },
        {
          name: "PHP",
          level: 90,
          command: "php -v",
          output: "PHP \n✅ Professional Level - 3+ years",
          description: "Modern PHP with OOP, design patterns, and best practices",
        },
      ],
    },
    {
      id: "frontend",
      title: "Frontend Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      terminalColor: "text-blue-400",
      skills: [
        {
          name: "React",
          level: 85,
          command: "npx create-react-app --version",
          output: "\n✅ Advanced Level - 2+ years",
          description: "Modern React with hooks, context, and state management",
        },
        {
          name: "JavaScript",
          level: 88,
          command: "node -e \"console.log('ES2023 Ready!')\"",
          output: "ES2023 Ready!\n✅ Expert Level - 3+ years",
          description: "Vanilla JS, ES6+, async/await, and modern features",
        },
        {
          name: "Tailwind CSS",
          level: 90,
          command: "npx tailwindcss --help",
          output: "tailwindcss v3.3.0\n✅ Expert Level - 2+ years",
          description: "Utility-first CSS framework for rapid UI development",
        },
      ],
    },
    {
      id: "database",
      title: "Database & Storage",
      icon: Database,
      color: "from-green-500 to-teal-500",
      terminalColor: "text-green-400",
      skills: [
        {
          name: "MySQL",
          level: 90,
          command: "mysql --version",
          output: "mysql Ver 8.0.33\n✅ Expert Level - 3+ years",
          description: "Advanced queries, optimization, and database design",
        },
        {
          name: "Redis",
          level: 65,
          command: "redis-server --version",
          output: "Redis server v7.0.11\n✅ Intermediate Level - 1+ year",
          description: "In-memory caching and session storage",
        },
      ],
    },
    {
      id: "tools",
      title: "DevOps & Tools",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      terminalColor: "text-purple-400",
      skills: [
        {
          name: "Git",
          level: 90,
          command: "git --version",
          output: "git version 2.41.0\n✅ Expert Level - 3+ years",
          description: "Version control, branching strategies, and collaboration",
        },
        {
          name: "Linux",
          level: 70,
          command: "uname -a",
          output: "Linux dev-server 5.15.0 Ubuntu\n✅ Advanced Level - 2+ years",
          description: "Server administration and command-line proficiency",
        },
      ],
    },
  ]

  // Auto-run skill demonstrations
  useEffect(() => {
    if (isRunning && activeSkill) {
      const category = skillCategories.find((cat) => cat.id === activeSkill.categoryId)
      const skill = category?.skills.find((s) => s.name === activeSkill.name)

      if (skill) {
        const command = skill.command
        setCurrentCommand("")
        setTypingIndex(0)

        // Simulate typing
        const typeCommand = () => {
          if (typingIndex < command.length) {
            setCurrentCommand(command.slice(0, typingIndex + 1))
            setTypingIndex((prev) => prev + 1)
            setTimeout(typeCommand, 50)
          } else {
            // Execute command after typing
            setTimeout(() => {
              setTerminalOutput((prev) => [
                ...prev,
                {
                  command: command,
                  output: skill.output,
                  timestamp: new Date().toLocaleTimeString(),
                  category: activeSkill.categoryId,
                },
              ])
              setCurrentCommand("")
              setIsRunning(false)
            }, 500)
          }
        }

        setTimeout(typeCommand, 300)
      }
    }
  }, [isRunning, activeSkill, typingIndex])

  // Animate progress bars
  useEffect(() => {
    const timer = setTimeout(() => {
      const newProgress = {}
      skillCategories.forEach((category) => {
        newProgress[category.id] = {}
        category.skills.forEach((skill) => {
          newProgress[category.id][skill.name] = skill.level
        })
      })
      setProgress(newProgress)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const runSkillDemo = (categoryId, skill) => {
    if (isRunning) return

    setActiveSkill({ categoryId, name: skill.name })
    setIsRunning(true)
    setTypingIndex(0)
  }

  const clearTerminal = () => {
    setTerminalOutput([])
    setCurrentCommand("")
    setIsRunning(false)
    setActiveSkill(null)
  }

  const SkillCard = ({ category, skill }) => {
    const isActive = activeSkill?.name === skill.name && activeSkill?.categoryId === category.id
    const skillProgress = progress[category.id]?.[skill.name] || 0

    return (
      <div
        className={`group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 cursor-pointer transform hover:scale-105 ${
          isActive ? "border-green-400/50 bg-green-500/10" : "border-gray-700/50 hover:border-gray-600/50"
        }`}
        onClick={() => runSkillDemo(category.id, skill)}
      >
        {/* Skill Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
              <category.icon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
              <p className="text-sm text-gray-400">{skill.description}</p>
            </div>
          </div>
          <div className="text-right">
            <div className={`text-2xl font-bold ${category.terminalColor}`}>{skillProgress}%</div>
            <button
              className={`mt-1 p-1 rounded ${isActive ? "text-green-400" : "text-gray-400 hover:text-white"}`}
              disabled={isRunning}
            >
              <Play className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Bar with Code Style */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400 font-mono">Proficiency Level</span>
            <span className={`font-mono ${category.terminalColor}`}>{skillProgress}/100</span>
          </div>
          <div className="relative w-full bg-gray-700 rounded-full h-3 overflow-hidden">
            <div
              className={`h-3 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out relative`}
              style={{ width: `${skillProgress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
              {/* Code-like pattern overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 2px,
                  rgba(255,255,255,0.1) 2px,
                  rgba(255,255,255,0.1) 4px
                )`,
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Command Preview */}
        <div className="mt-4 p-3 bg-gray-900/50 rounded-lg border border-gray-700/30">
          <div className="flex items-center space-x-2 mb-2">
            <Terminal className="w-4 h-4 text-green-400" />
            <span className="text-xs text-gray-400 font-mono">Command:</span>
          </div>
          <code className={`text-sm ${category.terminalColor} font-mono`}>{skill.command}</code>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      </div>
    )
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
            animation: "matrix-move 20s linear infinite",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interactive skill demonstrations with real commands and terminal outputs. Click any skill to see it in
            action!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Skills Grid */}
          <div className="lg:col-span-2 space-y-8">
            {skillCategories.map((category) => (
              <div key={category.id} className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="grid gap-4">
                  {category.skills.map((skill) => (
                    <SkillCard key={skill.name} category={category} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Output */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-gray-900/95 backdrop-blur-xl border border-gray-600/50 rounded-xl shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-600/50">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <Terminal className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-mono text-sm">skill-demo@bishnu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={clearTerminal}
                    className="p-1 text-gray-400 hover:text-white transition-colors"
                    title="Clear Terminal"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-4 font-mono text-sm min-h-96 max-h-96 overflow-auto bg-gray-900/50">
                <div className="text-blue-400 mb-4">
                  Welcome to Bishnu's Skill Terminal! 🚀<br />
                  Click any skill above to run a demonstration.
                </div>

                {/* Terminal Output */}
                <div className="space-y-3">
                  {terminalOutput.map((entry, index) => {
                    const category = skillCategories.find((cat) => cat.id === entry.category)
                    return (
                      <div key={index} className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <span className="text-blue-400">$</span>
                          <span className={category?.terminalColor || "text-green-400"}>{entry.command}</span>
                          <span className="text-gray-500 text-xs">[{entry.timestamp}]</span>
                        </div>
                        <div className="text-gray-300 whitespace-pre-line pl-4 text-xs">{entry.output}</div>
                      </div>
                    )
                  })}

                  {/* Current typing command */}
                  {isRunning && currentCommand && (
                    <div className="flex items-center space-x-2">
                      <span className="text-blue-400">$</span>
                      <span className="text-green-400">{currentCommand}</span>
                      <span className="animate-pulse text-green-400">|</span>
                    </div>
                  )}

                  {/* Prompt */}
                  {!isRunning && (
                    <div className="flex items-center space-x-2 mt-4">
                      <span className="text-blue-400">$</span>
                      <span className="text-gray-500">Ready for skill demonstration...</span>
                      <span className="animate-pulse text-green-400">|</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
                <div className="text-2xl font-bold text-green-400">5+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50">
                <div className="text-2xl font-bold text-blue-400">3</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes matrix-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }
      `}</style>
    </section>
  )
}

export default Skills
