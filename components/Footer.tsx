"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className=" text-white py-8 px-6">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Left side - Made with love */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="text-gray-400 text-sm">Made with</span>
          <span className="text-red-500 text-lg">❤️</span>
          <span className="text-gray-400 text-sm">by Phwe</span>
        </div>

        {/* Right side - Email */}
        <div>
          <a
            href="mailto:phwephwe8812@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition text-sm"
          >
            phwephwe8812@gmail.com
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
