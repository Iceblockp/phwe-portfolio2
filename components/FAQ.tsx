"use client";
import { useState } from "react";
import Image from "next/image";

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState(0);

  const faqs = [
    {
      question: "What is your design process?",
      answer:
        "I follow a user-centered design process: research → ideation → wireframing → prototyping → testing → final design. For urgent projects, I create high-fidelity wireframes to speed up the workflow.",
    },
    {
      question: "How long does a website take to build?",
      answer:
        "Timeline varies based on complexity. A simple website takes 2-3 weeks, while complex projects can take 6-8 weeks. I'll provide a detailed timeline after understanding your requirements.",
    },
    {
      question: "Will you work on the project in your account or mine?",
      answer:
        "I can work in either setup based on your preference. For collaborative projects, I often work in the client's account for better handoff and team integration.",
    },
    {
      question: "I'm an agency, what you can do for us?",
      answer:
        "I offer white-label design services for agencies including UI/UX design, design systems, prototyping, and design consultation. I can work as an extension of your team.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left side - FAQ Header */}
          <div>
            <div className="mb-8">
              <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wide">
                FAQ
              </span>
              <h2 className="text-4xl font-bold mt-2 mb-4">
                Frequently Asked
                <br />
                <span className="text-cyan-400">Questions</span>
              </h2>
              <p className="text-gray-600 mb-6">
                If you have any other questions, you can contact me by email
              </p>
              <a
                href="mailto:phwe@phwe6812@gmail.com"
                className="text-cyan-400 hover:text-cyan-500 transition"
              >
                phwe@phwe6812@gmail.com
              </a>
            </div>

            {/* Profile section */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden">
                <Image
                  src="/images/hero_girl.png"
                  alt="Phwe"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Let&apos;s build it together.
                </h3>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-4">
              <button className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                My LinkedIn
              </button>
              <button className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                  <polyline points="14,2 14,8 20,8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10,9 9,9 8,9" />
                </svg>
                Download my resume
              </button>
            </div>
          </div>

          {/* Right side - FAQ Questions */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition"
                  onClick={() =>
                    setOpenQuestion(openQuestion === index ? -1 : index)
                  }
                >
                  <h3 className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openQuestion === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openQuestion === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Try me out, risk free!</h3>
            <p className="text-purple-100 mb-6">
              Let&apos;s build something great together
            </p>
            <button className="bg-cyan-300 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-cyan-200 transition">
              Contact →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
