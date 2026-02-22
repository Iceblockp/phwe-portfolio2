"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const leftSkills = [
    { name: "User Research", level: 85 },
    { name: "Wireframing & Prototyping", level: 90 },
    { name: "Visual Design", level: 88 },
  ];

  const rightSkills = [
    { name: "Usability Testing", level: 92 },
    { name: "Design Systems", level: 87 },
    { name: "Collaboration & Handoff", level: 90 },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gray-100 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Skill</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Crafting intuitive, user-focused, and visually engaging digital
            experiences through research, design, and collaboration
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            {leftSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {skill.name}
                </h3>
                <div className="relative">
                  <div className="w-full h-2 bg-gray-300 rounded-full">
                    <motion.div
                      className="h-2 bg-linear-to-r from-cyan-400 to-cyan-500 rounded-full relative"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: index * 0.1 + 0.2,
                        ease: "easeOut",
                      }}
                    >
                      {/* White circular handle */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-cyan-400 shadow-sm"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {rightSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {skill.name}
                </h3>
                <div className="relative">
                  <div className="w-full h-2 bg-gray-300 rounded-full">
                    <motion.div
                      className="h-2 bg-linear-to-r from-cyan-400 to-cyan-500 rounded-full relative"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: index * 0.1 + 0.2,
                        ease: "easeOut",
                      }}
                    >
                      {/* White circular handle */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-cyan-400 shadow-sm"></div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* Purple dot - top right */}
      <motion.div
        className="absolute top-32 right-20 w-4 h-4 bg-purple-500 rounded-full opacity-80"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Cyan square - top right */}
      <motion.div
        className="absolute top-48 right-12 w-12 h-12 bg-cyan-400 rounded-lg transform rotate-12 opacity-70"
        animate={{ y: [0, 15, 0], rotate: [12, 20, 12] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Blue circle - right middle */}
      <motion.div
        className="absolute top-1/2 right-8 w-6 h-6 bg-blue-400 rounded-full opacity-80"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Cyan square - bottom left */}
      <motion.div
        className="absolute bottom-32 left-16 w-10 h-10 bg-cyan-400 rounded-lg transform -rotate-12 opacity-70"
        animate={{ y: [0, 12, 0], rotate: [-12, -20, -12] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </section>
  );
}
