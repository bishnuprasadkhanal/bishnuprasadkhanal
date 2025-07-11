import { Calendar, MapPin, ExternalLink } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Laravel Developer",
      company: "App Technologies Pvt. Ltd",
      location: "Nepal",
      period: "2021 - Present",
      type: "Full-time",
      description: [
        "Developed and maintained 20+ Laravel web applications and e-commerce platforms",
        "Built custom CRM systems and salon automation software using PHP and MySQL",
        "Integrated payment gateways (Stripe, PayPal, Razorpay) for multiple clients",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Optimized application performance and implemented security best practices",
      ],
      technologies: ["Laravel", "PHP", "MySQL", "React", "JavaScript", "Payment Gateways"],
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Nepal",
      period: "2020 - 2021",
      type: "Freelance",
      description: [
        "Created custom websites and web applications for local businesses",
        "Developed e-commerce solutions for small and medium enterprises",
        "Provided technical consultation and maintenance services",
        "Built responsive and mobile-friendly web interfaces",
      ],
      technologies: ["PHP", "HTML", "CSS", "JavaScript", "WordPress", "MySQL"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey as a <strong className="text-green-400">Laravel Developer</strong> and{" "}
            <strong className="text-blue-400">Software Developer</strong> in Nepal's growing tech industry.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-blue-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-8">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center border-4 border-gray-800 shadow-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center space-x-4 text-gray-300">
                        <span className="text-lg font-semibold text-green-400">{exp.company}</span>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-full px-4 py-2 text-sm text-green-400 font-medium">
                        {exp.period}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">{exp.type}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-gray-300">
                        <span className="text-green-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
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
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-300 mb-6">Want to know more about my professional journey?</p>
          <a
            href="/resume-bishnu-prasad-khanal.pdf"
            download
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ExternalLink className="mr-2 w-5 h-5" />
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Experience
