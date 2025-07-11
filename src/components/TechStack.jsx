"use client"

import { useState, useEffect } from "react"
import { Database, Globe, Server, Zap, GitBranch } from "lucide-react"

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("backend")
  const [animatedStats, setAnimatedStats] = useState({})

  const techCategories = {
    backend: {
      title: "Backend Development",
      icon: Server,
      color: "from-red-500 to-orange-500",
      technologies: [
        { name: "Laravel", level: 95, experience: "3+ years", projects: 20, color: "bg-red-500" },
        { name: "PHP", level: 90, experience: "3+ years", projects: 25, color: "bg-indigo-500" },
        { name: "Node.js", level: 75, experience: "2+ years", projects: 10, color: "bg-green-500" },
        { name: "Python", level: 70, experience: "1+ year", projects: 5, color: "bg-yellow-500" },
      ],
    },
    frontend: {
      title: "Frontend Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "React", level: 85, experience: "2+ years", projects: 15, color: "bg-blue-500" },
        { name: "JavaScript", level: 88, experience: "3+ years", projects: 30, color: "bg-yellow-500" },
        { name: "Vue.js", level: 75, experience: "1+ year", projects: 8, color: "bg-green-500" },
        { name: "Tailwind CSS", level: 90, experience: "2+ years", projects: 20, color: "bg-teal-500" },
      ],
    },
    database: {
      title: "Database & Storage",
      icon: Database,
      color: "from-green-500 to-teal-500",
      technologies: [
        { name: "MySQL", level: 90, experience: "3+ years", projects: 25, color: "bg-blue-600" },
        { name: "PostgreSQL", level: 75, experience: "1+ year", projects: 8, color: "bg-blue-700" },
        { name: "MongoDB", level: 70, experience: "1+ year", projects: 6, color: "bg-green-600" },
        { name: "Redis", level: 65, experience: "1+ year", projects: 10, color: "bg-red-600" },
      ],
    },
    tools: {
      title: "Tools & DevOps",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      technologies: [
        { name: "Git", level: 90, experience: "3+ years", projects: 50, color: "bg-orange-600" },
        { name: "Docker", level: 75, experience: "1+ year", projects: 12, color: "bg-blue-600" },
        { name: "AWS", level: 70, experience: "1+ year", projects: 8, color: "bg-yellow-600" },
        { name: "Linux", level: 80, experience: "2+ years", projects: 15, color: "bg-gray-600" },
      ],
    },
  }

  // Animate progress bars
  useEffect(() => {
    const timer = setTimeout(() => {
      const stats = {}
      Object.keys(techCategories).forEach((category) => {
        stats[category] = {}
        techCategories[category].technologies.forEach((tech) => {
          stats[category][tech.name] = tech.level
        })
      })
      setAnimatedStats(stats)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const CodeVisualization = () => {
    const [codeLines, setCodeLines] = useState([])

    useEffect(() => {
      const lines = [
        "<?php namespace App\\Http\\Controllers;",
        "use Illuminate\\Http\\Request;",
        "class ApiController extends Controller {",
        "  public function index() {",
        "    return response()->json([",
        "      'message' => 'Hello from Nepal! 🇳🇵',",
        "      'developer' => 'Bishnu Prasad Khanal',",
        "      'skills' => ['Laravel', 'React', 'MySQL']",
        "    ]);",
        "  }",
        "}",
      ]

      lines.forEach((line, index) => {
        setTimeout(() => {
          setCodeLines((prev) => [...prev, { text: line, id: index }])
        }, index * 200)
      })
    }, [])

    return (
      <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
        <div className="flex items-center space-x-2 mb-3">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-400 text-xs">ApiController.php</span>
        </div>
        <div className="space-y-1">
          {codeLines.map((line, index) => (
            <div
              key={line.id}
              className="opacity-0 animate-fade-in text-gray-300"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "forwards",
              }}
            >
              <span className="text-gray-500 mr-3">{String(index + 1).padStart(2, "0")}</span>
              <span
                className={
                  line.text.includes("<?php") || line.text.includes("namespace")
                    ? "text-purple-400"
                    : line.text.includes("class") || line.text.includes("public")
                      ? "text-blue-400"
                      : line.text.includes("'") || line.text.includes('"')
                        ? "text-green-400"
                        : "text-gray-300"
                }
              >
                {line.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderIcon = (category) => {
    const IconComponent = techCategories[category].icon
    return <IconComponent className="w-6 h-6 text-white" />
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced technology stack and development tools I use to build scalable, modern applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Category Selector */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 sticky top-8">
              <h3 className="text-xl font-bold text-white mb-6">Tech Categories</h3>
              <div className="space-y-3">
                {Object.entries(techCategories).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(key)}
                    className={`w-full flex items-center space-x-3 p-4 rounded-lg transition-all duration-300 ${
                      activeCategory === key
                        ? "bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 text-green-400"
                        : "bg-gray-700/30 hover:bg-gray-700/50 text-gray-300 hover:text-white"
                    }`}
                  >
                    {renderIcon(key)}
                    <span className="font-medium">{category.title}</span>
                  </button>
                ))}
              </div>

              {/* Code Visualization */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Live Code</h4>
                <CodeVisualization />
              </div>
            </div>
          </div>

          {/* Technology Details */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${techCategories[activeCategory].color}`}>
                  {renderIcon(activeCategory)}
                </div>
                <h3 className="text-2xl font-bold text-white">{techCategories[activeCategory].title}</h3>
              </div>

              <div className="grid gap-6">
                {techCategories[activeCategory].technologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="bg-gray-700/30 rounded-lg p-6 hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <h4 className="text-lg font-semibold text-white">{tech.name}</h4>
                        <span className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-full px-3 py-1 text-sm text-green-400">
                          {tech.experience}
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold text-lg">
                          {animatedStats[activeCategory]?.[tech.name] || 0}%
                        </div>
                        <div className="text-gray-400 text-sm">{tech.projects} projects</div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-600 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-3 rounded-full ${tech.color} transition-all duration-1000 ease-out relative`}
                        style={{ width: `${animatedStats[activeCategory]?.[tech.name] || 0}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg border border-green-400/20">
                <div className="flex items-center space-x-2 mb-3">
                  <GitBranch className="w-5 h-5 text-green-400" />
                  <h4 className="text-lg font-semibold text-white">Development Workflow</h4>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  I follow modern development practices including Test-Driven Development (TDD), continuous
                  integration/deployment (CI/CD), code reviews, and agile methodologies. Every project is version
                  controlled with Git and deployed using automated pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </section>
  )
}

export default TechStack
