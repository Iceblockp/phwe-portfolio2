"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const specializations = [
    {
      number: "1",
      title: "Web Design",
      description:
        "I design clean, responsive websites that reflect brand identity and deliver seamless user experiences",
    },
    {
      number: "2",
      title: "App Design",
      description:
        "I create intuitive, engaging mobile app interfaces with a focus on seamless user experience",
    },
    {
      number: "3",
      title: "Management System Design",
      description:
        "I design efficient, data-driven management systems with clear dashboards and workflows that meet user and business needs",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Tool icons in circular arrangement */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative w-96 h-96"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {/* Center sparkle decoration */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  className="text-purple-300"
                >
                  <path
                    d="M32 4L36 28L60 32L36 36L32 60L28 36L4 32L28 28L32 4Z"
                    fill="currentColor"
                  />
                </svg>
              </motion.div>

              {/* Icons arranged in a perfect circle - all uniform */}
              {/* Icon 1 - Gemini (top - 0°) */}
              <motion.div
                className="absolute top-8 left-1/2 -translate-x-1/2"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center">
                  <Image
                    src="/icons/gemini.png"
                    alt="Gemini"
                    width={48}
                    height={48}
                  />
                </div>
              </motion.div>

              {/* Icon 2 - Figma (45° - top right) */}
              <motion.div
                className="absolute top-[15%] right-[15%]"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center">
                  <Image
                    src="/icons/figma.png"
                    alt="Figma"
                    width={48}
                    height={48}
                  />
                </div>
              </motion.div>

              {/* Icon 3 - Photoshop (90° - right) */}
              <motion.div
                className="absolute top-1/2 right-8 -translate-y-1/2"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center">
                  <Image
                    src="/icons/photoshop.png"
                    alt="Photoshop"
                    width={48}
                    height={48}
                  />
                </div>
              </motion.div>

              {/* Icon 4 - Notion (135° - bottom right) */}
              <motion.div
                className="absolute bottom-[15%] right-[15%]"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center">
                  <Image
                    src="/icons/notion.png"
                    alt="Notion"
                    width={48}
                    height={48}
                  />
                </div>
              </motion.div>

              {/* Icon 5 - ChatGPT (180° - bottom) */}
              <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center">
                  <Image
                    src="/icons/chatgpt.png"
                    alt="ChatGPT"
                    width={48}
                    height={48}
                  />
                </div>
              </motion.div>

              {/* Icon 6 - Canva (225° - bottom left) */}
              <motion.div
                className="absolute bottom-[15%] left-[15%]"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center">
                  <Image
                    src="/icons/canva.png"
                    alt="Canva"
                    width={48}
                    height={48}
                  />
                </div>
              </motion.div>

              {/* Icon 7 - NotebookLM (270° - left) */}
              <motion.div
                className="absolute top-1/2 left-8 -translate-y-1/2"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center">
                  <Image
                    src="/icons/notebooklm.png"
                    alt="NotebookLM"
                    width={48}
                    height={48}
                  />
                </div>
              </motion.div>

              {/* Icon 8 - GitHub (315° - top left) */}
              <motion.div
                className="absolute top-[15%] left-[15%]"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center">
                  <Image
                    src="/icons/github.png"
                    alt="GitHub"
                    width={48}
                    height={48}
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right side - Specialization cards with rotation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              I specialized in
            </h2>
            <div className="space-y-5">
              {specializations.map((item, index) => (
                <motion.div
                  key={item.number}
                  className="relative bg-linear-to-br from-blue-50 via-purple-50 to-blue-100 p-6 rounded-2xl border-2 border-gray-300 hover:shadow-lg transition overflow-hidden"
                  style={{
                    transform: `rotate(${
                      index === 0
                        ? "0.5deg"
                        : index === 1
                          ? "-0.5deg"
                          : "0.5deg"
                    })`,
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Diagonal purple accent in top-right corner */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-purple-200 to-purple-300 opacity-50 transform rotate-45 translate-x-20 -translate-y-20 rounded-lg"></div>

                  <div className="relative flex gap-4">
                    <div className="text-2xl font-bold text-gray-400 shrink-0">
                      {item.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
