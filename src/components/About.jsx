"use client"

import { Calendar, MapPin, Phone, Mail, GraduationCap, Award, Coffee, Heart } from "lucide-react"

const About = () => {
  const personalInfo = [
    { icon: Calendar, label: "Born", value: "February 25, 2000" },
    { icon: MapPin, label: "Location", value: "Gwarko, Lalitpur, Nepal" },
    { icon: Phone, label: "Phone", value: "+977 9868642250" },
    { icon: Mail, label: "Email", value: "khanalbishnu333@gmail.com" },
    { icon: GraduationCap, label: "Education", value: "Bachelor's in Computer Applications (BCA)" },
    { icon: Award, label: "Experience", value: "2.5+ Years in Software Development" },
  ]

  const highlights = [
    {
      number: "2.5+",
      label: "Years Experience",
      description: "Professional software development",
    },
    {
      number: "10+",
      label: "Projects Completed",
      description: "Web applications & systems",
    },
    {
      number: "24/7",
      label: "Available",
      description: "Ready for new challenges",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            About Bishnu Prasad Khanal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate <strong className="text-green-400">Laravel Developer</strong> and{" "}
            <strong className="text-blue-400">Software Developer</strong> from Nepal, dedicated to creating innovative
            web solutions and exceptional user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl overflow-hidden border-4 border-gradient-to-r from-green-400 to-blue-400 shadow-2xl">
                <img
                  src="./about.jpg"
                  alt="Bishnu Prasad Khanal - Laravel Developer Nepal"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-full shadow-lg animate-bounce">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <div
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-pink-500 to-red-500 p-4 rounded-full shadow-lg animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <Heart className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div className="prose prose-lg text-gray-300">
              <p className="text-lg leading-relaxed">
                Hello! I'm <strong className="text-green-400">Bishnu Prasad Khanal</strong>, a passionate{" "}
                <strong className="text-blue-400">Laravel Developer</strong> and{" "}
                <strong className="text-purple-400">Software Developer</strong> based in beautiful Nepal 🇳🇵.
              </p>

              <p className="text-lg leading-relaxed">
                With over <strong className="text-yellow-400">2.5 years of experience</strong> in web development, I
                specialize in creating robust, scalable, and user-friendly applications using modern technologies like{" "}
                <strong className="text-red-400">Laravel</strong>, <strong className="text-blue-400">React</strong>, and{" "}
                <strong className="text-green-400">PHP</strong>.
              </p>

              <p className="text-lg leading-relaxed">
                I'm currently working at <strong className="text-cyan-400">App Technologies Pvt. Ltd</strong> and am
                always excited to take on new challenges and collaborate on innovative projects that make a positive
                impact.
              </p>
            </div>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-green-400/50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <info.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {highlight.number}
              </div>
              <div className="text-white font-semibold mb-1">{highlight.label}</div>
              <div className="text-sm text-gray-400">{highlight.description}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-6">Ready to bring your ideas to life? Let's work together!</p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
