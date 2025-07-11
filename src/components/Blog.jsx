import { Calendar, Clock, ArrowRight } from "lucide-react"

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Laravel Best Practices for 2024: A Nepal Developer's Guide",
      excerpt:
        "Comprehensive guide to Laravel development best practices, performance optimization, and modern techniques used by top developers in Nepal.",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Laravel",
      tags: ["Laravel", "PHP", "Best Practices", "Nepal"],
    },
    {
      id: 2,
      title: "Building Scalable E-commerce with Laravel and React",
      excerpt:
        "Step-by-step tutorial on creating a modern e-commerce platform using Laravel backend and React frontend with payment gateway integration.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Tutorial",
      tags: ["E-commerce", "Laravel", "React", "Payment Gateway"],
    },
    {
      id: 3,
      title: "The Rise of Software Development in Nepal",
      excerpt:
        "Exploring the growing tech industry in Nepal and opportunities for Laravel developers and software engineers in the region.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Industry",
      tags: ["Nepal", "Software Development", "Tech Industry", "Career"],
    },
  ]

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Latest Blog Posts
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on <strong className="text-green-400">Laravel development</strong>,{" "}
            <strong className="text-blue-400">software engineering</strong>, and the tech industry in Nepal.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Post Image */}
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors leading-tight">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full px-2 py-1 text-xs text-blue-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <button className="flex items-center space-x-2 text-green-400 hover:text-green-300 font-medium transition-colors group">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-lg text-gray-300 mb-6">
            Want to read more articles about Laravel development and software engineering?
          </p>
          <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  )
}

export default Blog
