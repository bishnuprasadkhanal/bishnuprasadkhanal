"use client"

import { useState } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      position: "CEO, TechStart Nepal",
      company: "TechStart Nepal",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Bishnu is an exceptional Laravel developer. He delivered our e-commerce platform ahead of schedule with outstanding quality. His expertise in PHP and Laravel is remarkable, and he's definitely one of the best developers in Nepal.",
    },
    {
      id: 2,
      name: "Priya Patel",
      position: "Founder, Digital Solutions",
      company: "Digital Solutions Pvt. Ltd",
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Working with Bishnu was a game-changer for our business. His full-stack development skills and attention to detail are impressive. The CRM system he built has significantly improved our operations.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "Project Manager, Global Tech",
      company: "Global Tech Solutions",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Bishnu Prasad Khanal is a talented software developer with deep knowledge of Laravel and modern web technologies. He consistently delivers high-quality code and excellent communication throughout the project.",
    },
    {
      id: 4,
      name: "Sarah Chen",
      position: "CTO, InnovateNow",
      company: "InnovateNow Inc",
      image: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "As a Laravel developer from Nepal, Bishnu brings both technical excellence and cultural understanding to international projects. His work on our salon automation system exceeded all expectations.",
    },
    {
      id: 5,
      name: "David Kumar",
      position: "Business Owner",
      company: "Kumar Enterprises",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Bishnu's expertise in Laravel development and e-commerce solutions helped us launch our online store successfully. His professionalism and technical skills make him a top choice for any web development project.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            What clients say about working with me as their{" "}
            <strong className="text-green-400">Laravel Developer</strong> and{" "}
            <strong className="text-blue-400">Software Developer</strong> from Nepal.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gray-700/50 relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 text-green-400/20">
              <Quote className="w-16 h-16" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-300 text-center leading-relaxed mb-8 italic">
                "{currentTestimonial.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-green-400"
                />
                <div className="text-center">
                  <h4 className="text-white font-bold text-lg">{currentTestimonial.name}</h4>
                  <p className="text-green-400 font-medium">{currentTestimonial.position}</p>
                  <p className="text-gray-400 text-sm">{currentTestimonial.company}</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700/50 hover:bg-gray-600/50 text-white p-3 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700/50 hover:bg-gray-600/50 text-white p-3 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-green-400" : "bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "10+", label: "Happy Clients" },
            { number: "2.5+", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
