
import React from "react";
import { motion } from "framer-motion";
import { FileText, Scale, Shield, AlertCircle, CheckCircle } from "lucide-react";

export default function Terms() {
  const sections = [
    {
      icon: CheckCircle,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using NovaLink services, you agree to be bound by these Terms of Service",
        "These terms apply to all users, including clients, visitors, and other users of our services",
        "We may update these terms periodically, and continued use constitutes acceptance of changes",
        "If you do not agree with these terms, please discontinue use of our services"
      ]
    },
    {
      icon: FileText,
      title: "Services Description",
      content: [
        "NovaLink provides business consulting, strategy development, and related professional services",
        "Services are customized based on individual client needs and agreements",
        "We reserve the right to modify or discontinue services with appropriate notice",
        "Service availability may vary by location and client requirements"
      ]
    },
    {
      icon: Scale,
      title: "Client Responsibilities",
      content: [
        "Provide accurate and complete information necessary for service delivery",
        "Respond promptly to requests for information or feedback",
        "Implement recommendations in good faith and according to agreed timelines",
        "Maintain confidentiality of proprietary methodologies and intellectual property",
        "Pay fees according to agreed terms and schedules"
      ]
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content: [
        "NovaLink retains ownership of all proprietary methodologies, frameworks, and tools",
        "Clients receive license to use deliverables for their internal business purposes",
        "Client data and specific business information remain the property of the client",
        "Neither party may use the other's trademarks without explicit written permission"
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
              <Scale className="w-8 h-8 text-slate-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-slate-600">
              These terms govern your use of NovaLink services and outline our mutual 
              responsibilities and expectations.
            </p>
            <div className="text-sm text-slate-500 mt-4">
              Last updated: March 15, 2024
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
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

          {/* Additional Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16 space-y-8"
          >
            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Payment Terms
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Payment terms are specified in individual service agreements. Generally, 
                  payments are due within 30 days of invoice date unless otherwise agreed.
                </p>
                <ul className="space-y-2">
                  <li>• Late payments may incur additional fees as specified in agreements</li>
                  <li>• Services may be suspended for accounts more than 60 days overdue</li>
                  <li>• Refunds are subject to the terms outlined in specific service agreements</li>
                  <li>• All fees are quoted in US Dollars unless otherwise specified</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Limitation of Liability
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  NovaLink provides consulting services based on information provided by clients 
                  and industry best practices. Our liability is limited as follows:
                </p>
                <ul className="space-y-2">
                  <li>• Total liability limited to fees paid for specific services</li>
                  <li>• No liability for indirect, consequential, or punitive damages</li>
                  <li>• Recommendations are advisory; implementation decisions remain with client</li>
                  <li>• Results may vary based on market conditions and execution quality</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Termination
              </h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Either party may terminate services under the following conditions:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">By Client</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• 30-day written notice</li>
                      <li>• Payment for completed work</li>
                      <li>• Return of confidential materials</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">By NovaLink</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• Material breach of agreement</li>
                      <li>• Non-payment of fees</li>
                      <li>• Delivery of work completed to date</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-indigo-900 mb-2">Questions About These Terms?</h3>
                  <p className="text-indigo-800 mb-4">
                    If you have any questions about these Terms of Service or need clarification 
                    on any provisions, please contact us.
                  </p>
                  <div className="space-y-2 text-indigo-800">
                    <div><strong>Email:</strong> legal@novalink.com</div>
                    <div><strong>Phone:</strong> (346) 446-3436</div>
                    <div><strong>Address:</strong> 20723 Via Santa Caterina Dr, Houston, TX</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}