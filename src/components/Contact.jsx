"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Facebook, MessageCircle } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "khanalbishnu333@gmail.com",
      link: "mailto:khanalbishnu333@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+977 9868642250",
      link: "tel:+9779868642250",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Gwarko, Lalitpur, Nepal",
      link: "https://maps.google.com/?q=Gwarko,Lalitpur,Nepal",
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/KhanalBishnu",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/bishnu-prasad-khanal",
      color: "hover:text-blue-400",
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com/bishnuprd.khanal",
      color: "hover:text-blue-500",
    },
    {
      icon: MessageCircle,
      name: "WhatsApp",
      url: "https://wa.me/9779868642250",
      color: "hover:text-green-400",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Get in touch with me, your trusted{" "}
            <strong className="text-green-400">Laravel Developer</strong> and{" "}
            <strong className="text-blue-400">Software Developer</strong> from Nepal.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                  placeholder="Project subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Send className="mr-2 w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 text-gray-300 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-8 border border-green-400/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-xl font-bold text-white">Available for Work</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm currently available for freelance projects and full-time opportunities. Let's discuss how I can help
                bring your ideas to life with my Laravel and software development expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
