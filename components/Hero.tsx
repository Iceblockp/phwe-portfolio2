"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

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
      isDeleting ? deletingSpeed : typingSpeed
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
        <div className="relative">
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
            <a
              href="#"
              className="w-14 h-14 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-100 transition bg-white"
            >
              <Image
                src="/icons/linkin.png"
                alt="LinkedIn"
                width={28}
                height={28}
              />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-100 transition bg-white"
            >
              <Image
                src="/icons/github.png"
                alt="GitHub"
                width={28}
                height={28}
              />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-100 transition bg-white"
            >
              <Image
                src="/icons/dribble.png"
                alt="Dribbble"
                width={28}
                height={28}
              />
            </a>
            <a
              href="#"
              className="w-14 h-14 rounded-full border-2 border-gray-800 flex items-center justify-center hover:bg-gray-100 transition bg-white"
            >
              <Image
                src="/icons/facebook.png"
                alt="Facebook"
                width={28}
                height={28}
              />
            </a>
          </div>
        </div>

        {/* Right side - Profile image */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full max-w-lg aspect-square">
            {/* Purple circle background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-purple-200 to-purple-300 rounded-full"></div>

            {/* Profile image */}
            <div className="relative w-full h-full">
              <Image
                src="/images/hero_girl.png"
                alt="Phwe - UI/UX Designer"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            {/* Floating decorative elements */}
            {/* Cyan square - top right */}
            <div className="absolute top-16 right-16 w-20 h-20 bg-cyan-400 rounded-2xl transform rotate-12 opacity-90"></div>

            {/* Small purple dot - top right area */}
            <div className="absolute top-20 right-4 w-3 h-3 bg-purple-400 rounded-full"></div>

            {/* Star sparkle - top left */}
            <div className="absolute top-4 right-1/3">
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
            </div>

            {/* Small purple dot - bottom left */}
            <div className="absolute bottom-1/3 left-0 w-3 h-3 bg-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
