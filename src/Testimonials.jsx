import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Siddhart Sundar",
      role: "IC2 Software Engineer, Oracle Cloud",
      company: "Oracle Cloud",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68afed602493198b855f4209/fac4063cb_image.png",
      content: "My experience with NovaLink has been excellent—the platform is user-friendly and provides everything from career roadmaps and resume tools to interview prep and industry insights. With practical tips, progress tracking, and responsive support, it makes it easy to stay focused, build confidence, and take the next step in your career.",
      rating: 5,
      result: "300% Revenue Increase"
    },
    {
      name: "David Martinez",
      role: "Founder, EcoSolutions",
      company: "EcoSolutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "The team at NovaLink didn't just provide consulting—they became true partners in our growth. Their insights into market positioning helped us expand to 3 new markets.",
      rating: 5,
      result: "3 New Market Expansions"
    },
    {
      name: "Sarah Thompson",
      role: "Director of Operations, RetailMax",
      company: "RetailMax",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "Outstanding results! They helped us optimize our supply chain and reduce costs by 40% while improving customer satisfaction. Professional, knowledgeable, and results-driven.",
      rating: 5,
      result: "40% Cost Reduction"
    },
    {
      name: "Michael Chen",
      role: "VP Marketing, FinanceFlow",
      company: "FinanceFlow",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "NovaLink's marketing strategy completely transformed our lead generation. We went from 50 leads per month to over 500, with much higher conversion rates.",
      rating: 5,
      result: "1000% Lead Increase"
    },
    {
      name: "Lisa Rodriguez",
      role: "Owner, Creative Studio",
      company: "Creative Studio",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "Working with NovaLink was the best decision for our creative agency. They helped us scale from 5 to 25 employees while maintaining our culture and quality.",
      rating: 5,
      result: "5x Team Growth"
    },
    {
      name: "Robert Johnson",
      role: "CEO, MedTech Solutions",
      company: "MedTech Solutions",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "The digital transformation strategy they developed for us was phenomenal. We've seen improvements in efficiency, customer satisfaction, and profitability across all departments.",
      rating: 5,
      result: "Digital Transformation"
    }
  ];

  const stats = [
    { number: "50", label: "Happy Clients" },
    { number: "98%", label: "Success Rate" },
    { number: "250%", label: "Average Growth" },
    { number: "24/7", label: "Support Available" }
  ];

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
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-indigo-400 text-indigo-400" />
                ))}
              </div>
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what business leaders are saying 
              about their experience working with NovaLink.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-indigo-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Quote className="w-4 h-4 text-indigo-600" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-indigo-400 text-indigo-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Result Badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
                  {testimonial.result}
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <div className="font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-indigo-600 font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real results from real businesses. See how we've helped companies 
              achieve breakthrough growth and operational excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  TechStart Inc. Case Study
                </h3>
                <p className="text-slate-600 mb-6">
                  A struggling startup transformed into an industry leader through 
                  strategic planning and operational improvements.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">300%</div>
                    <div className="text-sm text-slate-600">Revenue Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">6</div>
                    <div className="text-sm text-slate-600">Months Timeline</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">50+</div>
                    <div className="text-sm text-slate-600">New Employees</div>
                  </div>
                </div>
                <blockquote className="text-slate-600 italic border-l-4 border-indigo-400 pl-4">
                  "NovaLink didn't just help us grow—they helped us build a 
                  sustainable, scalable business model that continues to drive success."
                </blockquote>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Success story"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
