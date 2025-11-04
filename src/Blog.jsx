import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const allPosts = [
    {
      id: 1,
      title: "Financial Practice Sale Advice: Increasing Value and Ensuring a Smooth Transition",
      excerpt: "Expert advice on how to increase the value of your financial practice and navigate a smooth sales transition for maximum returns.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      author: "NovaLink Experts",
      date: "September 12, 2025",
      category: "Finance",
      url: "https://www.businessblogshub.com/2025/09/financial-practice-sale-advice-increasing-value-and-ensuring-a-smooth-transition/"
    },
    {
      id: 2,
      title: "The Different Types of Recruitment Methods",
      excerpt: "Explore various recruitment methods to find, attract, and hire the best talent for your organization's specific needs.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "NovaLink Experts",
      date: "September 10, 2025",
      category: "Education",
      url: "https://www.businessblogshub.com/2025/09/the-different-types-of-recruitment-methods/"
    },
    {
      id: 3,
      title: "Why Do Businesses Fail? 10 Reasons Why",
      excerpt: "Understanding the common pitfalls that lead to business failure and how to avoid them to ensure long-term success.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "NovaLink Experts",
      date: "September 8, 2025",
      category: "Marketing",
      url: "https://www.businessblogshub.com/2025/09/why-do-businesses-fail-10-reasons-why/"
    },
    {
      id: 4,
      title: "How Cybercriminals Exploit Business Events to Steal Data",
      excerpt: "Learn about the latest cybersecurity threats targeting businesses and how to protect your organization from data breaches.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "NovaLink Experts",
      date: "July 15, 2025",
      category: "Technology",
      url: "https://www.businessblogshub.com/2025/07/how-cybercriminals-exploit-business-events-to-steal-data/"
    },
    {
      id: 5,
      title: "Legal Compliance for Small Businesses: Essential Guidelines",
      excerpt: "Navigate the complex world of business law with essential compliance guidelines every small business owner should know.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "NovaLink Legal Team",
      date: "August 20, 2025",
      category: "Law",
      url: "#"
    },
    {
      id: 6,
      title: "Unlocking Growth: What M&A Experts Can Do for Dubai Businesses",
      excerpt: "Discover how merger and acquisition experts can help businesses in Dubai achieve rapid growth and market expansion.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68afed602493198b855f4209/87bc631b4_image.png",
      author: "M&A Experts",
      date: "September 1, 2025",
      category: "Finance",
      url: "https://www.businessblogshub.com/2025/09/unlocking-growth-what-ma-experts-can-do-for-dubai-businesses/"
    },
    {
      id: 7,
      title: "How Using a CRM Can Optimize Your Content Marketing",
      excerpt: "Learn to leverage your CRM to create highly targeted and effective content marketing campaigns that resonate with your audience.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Marketing Gurus",
      date: "July 21, 2021",
      category: "Marketing",
      url: "https://www.businessblogshub.com/2021/07/how-using-a-crm-can-optimize-your-content-marketing/"
    },
    {
      id: 8,
      title: "Why Businesses Use Learning Management Software",
      excerpt: "An in-depth look at the benefits of Learning Management Systems (LMS) for employee training and development.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "EdTech Today",
      date: "November 5, 2024",
      category: "Education",
      url: "https://www.businessblogshub.com/2024/11/why-businesses-use-learning-management-software/"
    },
    {
      id: 9,
      title: "Cut Operational Costs with Smarter Access Control Solutions",
      excerpt: "Explore how modern access control systems can improve security while significantly reducing operational expenditures.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68afed602493198b855f4209/4a99fd9b3_image.png",
      author: "Security Innovators",
      date: "August 1, 2025",
      category: "Technology",
      url: "https://www.businessblogshub.com/2025/08/cut-operational-costs-with-smarter-access-control-solutions/"
    }
  ];

  const featuredPost = allPosts[0];
  
  const categories = ["All", "Finance", "Marketing", "Education", "Technology", "Law"];

  const filteredPosts = allPosts.filter(post => 
    activeCategory === "All" || post.category === activeCategory
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Business Insights & Resources
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stay ahead of the curve with expert insights, strategies, and actionable advice 
              to help your business thrive in today's competitive landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
                  <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-slate-400" />
                    <span className="text-slate-600">{featuredPost.author}</span>
                  </div>
                  <a href={featuredPost.url} target="_blank" rel="noopener noreferrer">
                    <Button className="bg-slate-900 hover:bg-slate-800">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 transition-colors ${
                  activeCategory === category
                    ? "bg-slate-900 hover:bg-slate-800 text-white"
                    : "hover:bg-slate-100 text-slate-700"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-indigo-200 transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-slate-700 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-slate-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-3 h-3 text-slate-400" />
                      <span className="text-xs text-slate-500">{post.author}</span>
                    </div>
                    <a 
                      href={post.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-indigo-600 font-semibold text-sm flex items-center hover:text-indigo-700 transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Business Insights
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get weekly insights, strategies, and tips delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-slate-400 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
