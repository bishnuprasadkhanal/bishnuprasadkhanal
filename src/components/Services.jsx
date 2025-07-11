"use client"

import { Code, Smartphone, Database, Zap, Globe, Shield } from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Laravel Development",
      description:
        "Custom Laravel web applications, APIs, and enterprise solutions built with best practices and modern architecture.",
      features: ["Custom Web Applications", "RESTful API Development", "Laravel Packages", "Performance Optimization"],
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Globe,
      title: "Full-Stack Development",
      description:
        "Complete web solutions from frontend to backend, ensuring seamless user experiences and robust functionality.",
      features: ["React Frontend", "Laravel Backend", "Database Design", "Third-party Integrations"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Smartphone,
      title: "E-commerce Solutions",
      description:
        "Scalable e-commerce platforms with payment gateways, inventory management, and modern shopping experiences.",
      features: ["Online Stores", "Payment Integration", "Inventory Management", "Order Processing"],
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Database,
      title: "CRM & Business Systems",
      description:
        "Custom CRM systems and business automation tools to streamline operations and improve productivity.",
      features: ["Customer Management", "Sales Tracking", "Automation Tools", "Reporting & Analytics"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "API Development",
      description:
        "Robust and scalable APIs for mobile apps, third-party integrations, and microservices architecture.",
      features: ["RESTful APIs", "GraphQL", "API Documentation", "Rate Limiting & Security"],
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description:
        "Ongoing maintenance, security updates, performance optimization, and technical support for your applications.",
      features: ["Security Updates", "Performance Monitoring", "Bug Fixes", "24/7 Support"],
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            As an expert <strong className="text-green-400">Laravel Developer</strong> and{" "}
            <strong className="text-blue-400">Software Developer</strong> from Nepal, I provide comprehensive web
            development services to help your business grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Icon */}
              <div
                className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-gray-400">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together. I'm here to help bring your ideas
              to life with cutting-edge technology and expert development skills.
            </p>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
