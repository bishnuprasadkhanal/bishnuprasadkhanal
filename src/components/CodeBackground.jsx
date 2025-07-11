"use client"

import { useEffect, useRef } from "react"

const CodeBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Enhanced code snippets with emojis
    const codeSnippets = [
      "🚀 function laravelDeveloper() {",
      '💡 return "Bishnu Prasad Khanal";',
      "🔥 }",
      '⚡ const skills = ["Laravel", "PHP", "React"];',
      "🎯 if (project.isComplex) {",
      "🛠️ developer.solve(problem);",
      "✅ }",
      '🌐 Route::get("/api/projects", function() {',
      "📊 return response()->json($projects);",
      "🔗 });",
      "👨‍💻 class Developer extends Person {",
      "💪 public function code() {",
      "🚀 return $this->passion * $this->skills;",
      "🎉 }",
      "📦 }",
      "⚡ npm install @bishnu/awesome-code",
      '🎯 git commit -m "Another amazing feature"',
      "🔥 composer require bishnu/laravel-magic",
      '🗄️ SELECT * FROM developers WHERE name = "Bishnu";',
      '✨ const portfolio = new Portfolio("amazing");',
      '👋 echo "Hello, I\'m Bishnu!";',
      '🇳🇵 $location = "Nepal";',
      '💻 $experience = "2.5+ years";',
      '🎨 React.createElement("AwesomeUI");',
      '🔧 MySQL.query("SELECT success FROM projects");',
    ]

    // Floating code particles with enhanced properties
    const particles = []

    // Create particles
    for (let i = 0; i < 25; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        speed: 0.3 + Math.random() * 0.7,
        opacity: 0.1 + Math.random() * 0.3,
        size: 12 + Math.random() * 6,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        // Update position
        particle.y -= particle.speed
        particle.rotation += particle.rotationSpeed

        // Reset particle when it goes off screen
        if (particle.y < -50) {
          particle.y = canvas.height + 50
          particle.x = Math.random() * canvas.width
          particle.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        }

        // Draw particle with rotation
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.translate(particle.x, particle.y)
        ctx.rotate((particle.rotation * Math.PI) / 180)
        ctx.fillStyle = "#3b82f6"
        ctx.font = `${particle.size}px 'JetBrains Mono', monospace`
        ctx.textAlign = "center"
        ctx.fillText(particle.text, 0, 0)
        ctx.restore()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-20 dark:opacity-10"
      style={{ background: "transparent" }}
    />
  )
}

export default CodeBackground
