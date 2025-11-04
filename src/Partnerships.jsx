import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  Handshake,
  Target,
  TrendingUp,
  Users,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";

export default function Partnerships() {
  const partnershipBenefits = [
    {
      icon: TrendingUp,
      title: "Mutual Growth",
      description: "We believe in partnerships that benefit all parties involved"
    },
    {
      icon: Target,
      title: "Shared Vision",
      description: "Aligning goals and strategies for maximum impact"
    },
    {
      icon: Users,
      title: "Combined Expertise",
      description: "Leveraging each partner's unique strengths and capabilities"
    }
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
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Handshake className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Strategic Partnerships
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building meaningful partnerships that drive innovation, growth, and success
              for all involved. Together, we achieve more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Our Partnership Approach
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We seek partnerships that create value, foster innovation, and contribute
              to the success of all stakeholders involved.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Partnership */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Featured Partnership
            </h2>
            <p className="text-xl text-slate-600">
              Highlighting our strategic alliance with innovative companies
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="grid lg:grid-cols-2 items-center">
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Strategic Partner
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-slate-900 mb-4">
                  Forge QB
                </h3>

                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  We're proud to partner with Forge QB, an innovative startup
                  revolutionizing academic competitions and educational engagement.
                  Together, we're supporting educational excellence and fostering
                  competitive learning environments.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">Advanced Learning Tools</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">Competitive Quiz Platforms</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-slate-700">Educational Engagement</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://forge-qb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Visit Forge QB
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                  <Link to={createPageUrl('Contact')}>
                    <Button variant="outline" className="border-slate-300">
                      Learn About Partnership
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative h-full">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68afed602493198b855f4209/ae350c9a2_image.png"
                  alt="Forge QB Logo"
                  className="w-full h-full object-cover lg:rounded-r-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're always looking for innovative companies and organizations
              to collaborate with. Let's explore how we can work together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Technology Partnerships",
                description: "Collaborate on cutting-edge solutions and digital innovations",
                icon: "💻"
              },
              {
                title: "Educational Alliances",
                description: "Support learning initiatives and academic excellence",
                icon: "🎓"
              },
              {
                title: "Strategic Consulting",
                description: "Joint ventures in business strategy and growth planning",
                icon: "📈"
              }
            ].map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:border-indigo-200 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{opportunity.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {opportunity.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {opportunity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Let's discuss how a strategic partnership can benefit both our organizations
              and create value for our customers.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-indigo-500 hover:bg-indigo-600 text-white px-8">
                Start Partnership Conversation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
