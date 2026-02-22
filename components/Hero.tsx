"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Typewriter({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseTime = 2000,
}: {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentText.length < currentWord.length) {
            setCurrentText(currentWord.slice(0, currentText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          if (currentText.length > 0) {
            setCurrentText(currentText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isDeleting,
    currentWordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  const roles = ["UI/UX designer", "Product Designer", "Creative Thinker"];

  return (
    <section className="pt-32 pb-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-700">HEY! I&apos;m </span>
            <span className="text-gray-900">Phwe,</span>
            <br />
            <span className="text-gray-900">
              <Typewriter words={roles} />
            </span>
          </h1>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-md">
            I design user-centered solutions that blend creativity with
            functionality! I worked as a junior UI/UX designer at Origin
            Business Solution from March 2025 to Present. I also completed an
            internship as a UI/UX designer at MMSIT from November 2024 to
            January 2025.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <motion.a
              href="https://www.linkedin.com/in/hnin-shwe-sin-phwe-1497532ap"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border-2 border-gray-800 flex items-center justify-center bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{
                scale: 1.15,
                rotate: 5,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/icons/linkin.png"
                alt="LinkedIn"
                width={28}
                height={28}
              />
            </motion.a>
            <motion.a
              href="#"
              className="w-14 h-14 rounded-full hover:scale-110 duration-200 border-2 border-gray-800 flex items-center justify-center bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/icons/github.png"
                alt="GitHub"
                width={28}
                height={28}
              />
            </motion.a>
            <motion.a
              href="#"
              className="w-14 h-14 rounded-full border-2 hover:scale-110 duration-200 border-gray-800 flex items-center justify-center bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/icons/dribble.png"
                alt="Dribbble"
                width={28}
                height={28}
              />
            </motion.a>
            <motion.a
              href="#"
              className="w-14 h-14 rounded-full border-2 duration-200 hover:scale-110 border-gray-800 flex items-center justify-center bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/icons/facebook.png"
                alt="Facebook"
                width={28}
                height={28}
              />
            </motion.a>
          </div>
        </motion.div>

        {/* Right side - Profile image */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ perspective: "1000px" }}
        >
          <div className="relative w-full max-w-lg aspect-square">
            {/* Purple circle background */}
            <div className="absolute inset-0 bg-linear-to-br from-purple-200 via-purple-200 to-purple-300 rounded-full"></div>

            {/* 3D Floating Geometric Shapes */}
            {/* 3D Cube - top left */}
            <motion.div
              className="absolute top-12 left-8 w-16 h-16"
              style={{ transformStyle: "preserve-3d" }}
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div
                className="w-full h-full relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Cube faces */}
                <div
                  className="absolute w-full h-full bg-linear-to-br from-cyan-400 to-cyan-500 opacity-80"
                  style={{ transform: "translateZ(32px)" }}
                ></div>
                <div
                  className="absolute w-full h-full bg-linear-to-br from-cyan-300 to-cyan-400 opacity-80"
                  style={{ transform: "rotateY(90deg) translateZ(32px)" }}
                ></div>
                <div
                  className="absolute w-full h-full bg-linear-to-br from-cyan-500 to-cyan-600 opacity-80"
                  style={{ transform: "rotateY(180deg) translateZ(32px)" }}
                ></div>
                <div
                  className="absolute w-full h-full bg-linear-to-br from-cyan-300 to-cyan-400 opacity-80"
                  style={{ transform: "rotateY(-90deg) translateZ(32px)" }}
                ></div>
                <div
                  className="absolute w-full h-full bg-linear-to-br from-cyan-400 to-cyan-500 opacity-80"
                  style={{ transform: "rotateX(90deg) translateZ(32px)" }}
                ></div>
                <div
                  className="absolute w-full h-full bg-linear-to-br from-cyan-500 to-cyan-600 opacity-80"
                  style={{ transform: "rotateX(-90deg) translateZ(32px)" }}
                ></div>
              </div>
            </motion.div>

            {/* 3D Sphere - top right */}
            <motion.div
              className="absolute top-20 right-12 w-20 h-20 rounded-full bg-linear-to-br from-purple-400 to-purple-500 opacity-70 shadow-lg"
              style={{ transformStyle: "preserve-3d" }}
              animate={{
                rotateY: [0, 360],
                y: [0, 15, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Inner sphere for depth */}
              <div className="absolute inset-2 rounded-full bg-linear-to-br from-purple-300 to-purple-400 opacity-60"></div>
            </motion.div>

            {/* 3D Pyramid - bottom right */}
            <motion.div
              className="absolute bottom-24 right-16 w-16 h-16"
              style={{ transformStyle: "preserve-3d" }}
              animate={{
                rotateX: [0, 360],
                rotateZ: [0, 360],
                y: [0, -15, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div
                className="w-full h-full relative"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Pyramid faces */}
                <div
                  className="absolute w-0 h-0 border-l-32 border-r-32 border-b-55 border-l-transparent border-r-transparent border-b-pink-400 opacity-80"
                  style={{ transform: "translateZ(0px)" }}
                ></div>
                <div
                  className="absolute w-0 h-0 border-l-32 border-r-32 border-b-55 border-l-transparent border-r-transparent border-b-pink-500 opacity-80"
                  style={{ transform: "rotateY(90deg) translateZ(0px)" }}
                ></div>
                <div
                  className="absolute w-0 h-0 border-l-32 border-r-32 border-b-55 border-l-transparent border-r-transparent border-b-pink-300 opacity-80"
                  style={{ transform: "rotateY(180deg) translateZ(0px)" }}
                ></div>
                <div
                  className="absolute w-0 h-0 border-l-32 border-r-32 border-b-55 border-l-transparent border-r-transparent border-b-pink-500 opacity-80"
                  style={{ transform: "rotateY(-90deg) translateZ(0px)" }}
                ></div>
              </div>
            </motion.div>

            {/* 3D Torus/Ring - left side */}
            <motion.div
              className="absolute bottom-32 left-4 w-24 h-24"
              style={{ transformStyle: "preserve-3d" }}
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 180],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="relative w-full h-full">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-8 border-yellow-400 opacity-70"></div>
                {/* Inner ring for depth */}
                <div className="absolute inset-3 rounded-full border-6 border-yellow-300 opacity-50"></div>
              </div>
            </motion.div>

            {/* Profile image */}
            <div className="relative w-full h-full z-10">
              <Image
                src="/images/hero_girl.png"
                alt="Phwe - UI/UX Designer"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Floating decorative elements - Enhanced with 3D */}
            {/* Cyan square - top right */}
            <motion.div
              className="absolute top-16 right-16 w-20 h-20 bg-cyan-400 rounded-2xl opacity-90 shadow-lg z-20"
              animate={{
                rotateZ: [12, 25, 12],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>

            {/* Small purple dot - top right area */}
            <motion.div
              className="absolute top-20 right-4 w-3 h-3 bg-purple-400 rounded-full z-20"
              animate={{
                scale: [1, 1.3, 1],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>

            {/* Star sparkle - top left */}
            <motion.div
              className="absolute top-4 right-1/3 z-20"
              animate={{
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="text-cyan-300"
              >
                <path
                  d="M20 2L22.5 17.5L38 20L22.5 22.5L20 38L17.5 22.5L2 20L17.5 17.5L20 2Z"
                  fill="currentColor"
                />
              </svg>
            </motion.div>

            {/* Small purple dot - bottom left */}
            <motion.div
              className="absolute bottom-1/3 left-0 w-3 h-3 bg-purple-500 rounded-full z-20"
              animate={{
                scale: [1, 1.4, 1],
                y: [0, 8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
