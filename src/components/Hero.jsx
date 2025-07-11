"use client"

import { useState, useEffect } from "react"
import { ArrowDown, Mail, Github, Linkedin, Download, Code, Zap, Star, MapPin } from "lucide-react"

const Hero = () => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    "Laravel Developer 🚀",
    "Software Developer 💻",
    "Full-Stack Developer 🌟",
    "PHP Expert 🔥",
    "React Developer ⚛️",
    "Nepal Developer 🇳🇵",
    "Problem Solver 🧩",
    "Code Craftsman 🛠️",
  ]

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150
    const text = texts[currentIndex]

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < text.length) {
        setCurrentText(text.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(text.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === text.length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setCurrentIndex((currentIndex + 1) % texts.length)
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, currentIndex, texts])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Greeting */}
            <div className="space-y-2">
              <div className="inline-flex items-center bg-gradient-to-r from-green-400/20 to-blue-400/20 backdrop-blur-sm border border-green-400/30 rounded-full px-4 py-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
                <span className="text-green-400">Available for freelance work</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-green-400 bg-clip-text text-transparent leading-tight">
                Hi, I'm <span className="text-green-400">Bishnu</span>
              </h1>
            </div>

            {/* Dynamic typing text */}
            <div className="h-16 flex items-center justify-center lg:justify-start">
              <h2 className="text-2xl md:text-4xl font-semibold text-blue-300">
                {currentText}
                <span className="animate-pulse text-green-400">|</span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Expert <strong className="text-green-400">Laravel Developer</strong> and{" "}
                <strong className="text-blue-400">Software Developer</strong> from{" "}
                <strong className="text-yellow-400">Nepal 🇳🇵</strong> with 2.5+ years of experience building scalable
                web applications, e-commerce platforms, and modern software solutions.
              </p>

              <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span>Lalitpur, Nepal</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>2.5+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Code className="w-4 h-4 text-blue-400" />
                  <span>50+ Projects</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Mail className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                Hire Me Now
              </button>
              <button
                onClick={scrollToProjects}
                className="group border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Zap className="mr-2 w-5 h-5 group-hover:animate-pulse" />
                View Projects
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/KhanalBishnu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/bishnu-prasad-khanal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="/resume-bishnu-prasad-khanal.pdf"
                download
                className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110"
                aria-label="Download Resume"
              >
                <Download className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right side - Image/Visual */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-2 border-green-400/30 animate-spin"></div>
              <div
                className="absolute inset-4 rounded-full border-2 border-blue-400/30 animate-spin"
                style={{ animationDirection: "reverse" }}
              ></div>
              <div className="absolute inset-8 rounded-full border-2 border-purple-400/30 animate-spin"></div>

              {/* Profile image */}
              <div className="absolute inset-12 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src="./about.jpg"
                  alt="Bishnu Prasad Khanal - Laravel Developer Nepal"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating tech icons */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-full animate-bounce">
                <span className="text-white font-bold text-sm">Laravel</span>
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-full animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="text-white font-bold text-sm">React</span>
              </div>
              <div
                className="absolute top-1/2 -left-8 bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-white font-bold text-sm">PHP</span>
              </div>
              <div
                className="absolute top-1/2 -right-8 bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-full animate-bounce"
                style={{ animationDelay: "1.5s" }}
              >
                <span className="text-white font-bold text-sm">MySQL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="p-2 rounded-full border border-white/30 hover:border-green-400 transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
