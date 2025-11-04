import React from "react";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, FileText, UserCheck } from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: [
        "Personal information you provide (name, email, phone number, company details)",
        "Technical information (IP address, browser type, device information)",
        "Usage data (how you interact with our website and services)",
        "Communication records (emails, calls, meeting notes)",
        "Payment information (processed securely through third-party providers)"
      ]
    },
    {
      icon: UserCheck,
      title: "How We Use Your Information",
      content: [
        "Provide and improve our consulting services",
        "Communicate with you about projects and services",
        "Send relevant business insights and updates (with your consent)",
        "Analyze website usage to enhance user experience",
        "Comply with legal obligations and protect our rights"
      ]
    },
    {
      icon: Shield,
      title: "Information Protection",
      content: [
        "Industry-standard encryption for data transmission",
        "Secure servers with regular security audits",
        "Limited access to personal information on a need-to-know basis",
        "Regular staff training on data protection practices",
        "Secure disposal of information when no longer needed"
      ]
    },
    {
      icon: Lock,
      title: "Your Rights and Choices",
      content: [
        "Access and review your personal information",
        "Correct inaccurate or incomplete data",
        "Request deletion of your personal information",
        "Opt-out of marketing communications",
        "Data portability and restriction of processing"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-slate-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-600">
              Your privacy is important to us. This policy explains how we collect, use, 
              and protect your personal information.
            </p>
            <div className="text-sm text-slate-500 mt-4">
              Last updated: March 15, 2024
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-8"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16 space-y-8"
          >
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Third-Party Services
              </h2>
              <p className="text-slate-600 mb-4">
                We may use third-party services to help us provide better service to you. 
                These services may collect information sent by your browser as part of a web page request.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>• Google Analytics (website analytics)</li>
                <li>• Payment processors (secure payment handling)</li>
                <li>• Email service providers (communication)</li>
                <li>• Customer support tools (service delivery)</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Cookies and Tracking
              </h2>
              <p className="text-slate-600 mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience 
                and analyze website traffic. You can manage your cookie preferences through your browser settings.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Essential</h3>
                  <p className="text-sm text-slate-600">Required for website functionality</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Analytics</h3>
                  <p className="text-sm text-slate-600">Help us improve our services</p>
                </div>
                <div className="text-center p-4 bg-slate-50 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-2">Marketing</h3>
                  <p className="text-sm text-slate-600">Personalized content and ads</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Contact Us About Privacy
              </h2>
              <p className="text-slate-600 mb-6">
                If you have any questions about this Privacy Policy or our data practices, 
                please don't hesitate to contact us.
              </p>
              <div className="space-y-4">
                <div>
                  <strong className="text-slate-900">Email:</strong>
                  <span className="text-slate-600 ml-2">privacy@novalink.com</span>
                </div>
                <div>
                  <strong className="text-slate-900">Phone:</strong>
                  <span className="text-slate-600 ml-2">(346) 446-3436</span>
                </div>
                <div>
                  <strong className="text-slate-900">Address:</strong>
                  <span className="text-slate-600 ml-2">20723 Via Santa Caterina Dr, Houston, TX</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
