"use client"

import { useEffect, useState } from "react"
import { HelmetProvider } from "react-helmet-async"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"
import LoadingScreen from "./components/LoadingScreen"
import SEOHead from "./components/SEOHead"
import FloatingElements from "./components/FloatingElements"
import { ThemeProvider } from "./contexts/ThemeContext"
import "./App.css"

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000) // 4 seconds loading time

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-x-hidden">
          <SEOHead />

          {/* Custom cursor */}
          <div
            className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
            style={{
              left: mousePosition.x - 12,
              top: mousePosition.y - 12,
              background: "radial-gradient(circle, #00ff88 0%, transparent 70%)",
              borderRadius: "50%",
              transition: "all 0.1s ease-out",
            }}
          />

          <FloatingElements />
          <Navigation />

          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Services />
            <Projects />
            <Testimonials />
            <Blog />
            <Contact />
          </main>

          <Footer />
          <ScrollToTop />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
