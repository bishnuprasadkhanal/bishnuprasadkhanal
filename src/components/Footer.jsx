"use client"

import { Heart, Coffee } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    "Laravel Development",
    "Full-Stack Development",
    "E-commerce Solutions",
    "CRM Systems",
    "API Development",
    "Maintenance & Support",
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Bishnu Prasad Khanal
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Expert <strong className="text-green-400">Laravel Developer</strong> and{" "}
              <strong className="text-blue-400">Software Developer</strong> from Nepal. Passionate about creating
              innovative web solutions and helping businesses grow through technology.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-yellow-400" />
              <span>in Nepal</span>
              <span className="text-yellow-400">🇳🇵</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Bishnu Prasad Khanal. All rights reserved.
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>Laravel Developer Nepal</span>
              <span>•</span>
              <span>Software Developer</span>
              <span>•</span>
              <span>Full-Stack Developer</span>
            </div>
          </div>

          <div className="text-center mt-4">
            <p className="text-xs text-gray-500">
              Keywords: Bishnu, Bishnu Prasad, Bishnu Prasad Khanal, Laravel Developer Nepal, Software Developer Nepal,
              Nepal Developer, PHP Developer, React Developer, Full-Stack Developer, Web Developer Nepal
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
