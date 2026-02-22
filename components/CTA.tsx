"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CTA() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is your design process?",
      answer:
        "I follow a user-centered design process: research → ideation → wireframing → prototyping → testing → final design. For urgent projects, I create high-fidelity wireframes to speed up the workflow.",
    },
    {
      question: "How long does a website take to build?",
      answer:
        "For the design phase only, my estimated timeline is: Profile website – 5 days, Web application – 1 week, and Dashboard – 1 week. This includes high-fidelity UI design, and prototype, basic revisions, assuming the requirements and content are clearly defined.",
    },
    {
      question: "Will you work on the project in your account or mine?",
      answer:
        "I can work on the project using either your account or mine, depending on your preference. For better transparency and long-term ownership, I usually recommend working on your account so you have full access and control throughout the project.",
    },
    {
      question: "I'm an agency, what you can do for us?",
      answer:
        "As a UI/UX designer, I can support your agency with user research, wireframing, high-fidelity UI design, and design systems for websites, web applications, and dashboards. I provide clean, developer-ready Figma files, follow structured workflows, and collaborate smoothly as a white-label design partner to help you deliver high-quality projects to your clients efficiently.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Main CTA Card */}
        <motion.div
          className="relative bg-linear-to-br from-purple-600 via-purple-700 to-blue-600 rounded-3xl p-12 text-white overflow-hidden mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative curved lines */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" viewBox="0 0 400 200" fill="none">
              <path
                d="M0 100C100 50 200 150 400 100"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M0 120C120 70 280 170 400 120"
                stroke="currentColor"
                strokeWidth="1"
              />
            </svg>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Try me out, risk free!
              </h2>
              <p className="text-purple-100 mb-2">
                If you&apos;re not happy with the design after the first draft,
              </p>
              <p className="text-purple-100">
                I&apos;ll refund your deposit,{" "}
                <span className="font-semibold">no questions asked</span>
              </p>
            </div>
            <button className="bg-cyan-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-cyan-300 transition flex items-center gap-2">
              <a href="mailto:phwephwe8812@gmail.com">Contact →</a>
            </button>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - FAQ Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4">
              <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">
                FAQ
              </span>
            </div>
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Frequently Asked
              <br />
              <span className="text-cyan-400">Questions</span>
            </h3>
            <p className="text-gray-600 mb-6">
              If you have any other questions, you can contact me by email
            </p>
            <a
              href="mailto:phwephwe8812@gmail.com"
              className="text-cyan-400 hover:text-cyan-500 transition"
            >
              phwephwe8812@gmail.com
            </a>
          </motion.div>

          {/* Right side - FAQ Items */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
              >
                <button
                  className="w-full flex justify-between items-center text-left"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <h4 className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h4>
                  <motion.svg
                    className="w-5 h-5 text-gray-400 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? "auto" : 0,
                    opacity: openFAQ === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Profile and CTA */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
              <img
                src="/images/hero_girl.png"
                alt="Phwe"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900">
                Let&apos;s build it together.
              </h4>
              <div className="flex gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/hnin-shwe-sin-phwe-1497532ap"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition"
                >
                  My LinkedIn
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition">
                  Download my resume
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right side - Second CTA */}
          <motion.div
            className="bg-linear-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-2">Try me out, risk free!</h3>
            <p className="text-purple-100 mb-6">
              Let&apos;s build something great together
            </p>
            <button className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-cyan-300 transition">
              <a href="mailto:phwephwe8812@gmail.com">Contact →</a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
