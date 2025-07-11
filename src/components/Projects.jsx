"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Full-featured e-commerce platform built with Laravel and React, featuring payment integration, inventory management, and admin dashboard.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "React", "MySQL", "Stripe", "PayPal"],
      category: "ecommerce",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 2,
      title: "CRM Management System",
      description:
        "Comprehensive CRM system for managing customers, sales, and business operations with advanced reporting and analytics.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "Vue.js", "MySQL", "Chart.js"],
      category: "crm",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Salon Automation System",
      description:
        "Complete salon management system with appointment booking, staff management, inventory tracking, and customer management.",
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "React", "MySQL", "Calendar API"],
      category: "automation",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Real Estate Portal",
      description:
        "Property listing and management portal with advanced search, virtual tours, and agent management features.",
      image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "React", "MySQL", "Google Maps"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Learning Management System",
      description:
        "Educational platform with course management, student tracking, assignments, and interactive learning modules.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "React", "MySQL", "Video API"],
      category: "education",
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
    },
    {
      id: 6,
      title: "Restaurant Management",
      description:
        "Complete restaurant management system with online ordering, table reservations, and kitchen management.",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Laravel", "React", "MySQL", "Payment Gateway"],
      category: "restaurant",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ]

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "crm", label: "CRM Systems" },
    { id: "automation", label: "Automation" },
    { id: "web", label: "Web Apps" },
    { id: "education", label: "Education" },
    { id: "restaurant", label: "Restaurant" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcase of my work as a <strong className="text-green-400">Laravel Developer</strong> and{" "}
            <strong className="text-blue-400">Software Developer</strong> from Nepal. Each project demonstrates my
            expertise in modern web development.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg"
                  : "bg-gray-800/50 text-gray-300 hover:text-white hover:bg-gray-700/50 border border-gray-600"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}

                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 text-white p-3 rounded-full transition-colors"
                    aria-label="View source code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full px-3 py-1 text-sm text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-6">Interested in working together on your next project?</p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  )
}

export default Projects
