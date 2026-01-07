import Image from "next/image";

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
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Tool icons in circular arrangement */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-96 h-96">
              {/* Center sparkle decoration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
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
              </div>

              {/* Icons arranged in a circle around center */}
              {/* Gemini - top */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="/icons/gemini.png"
                    alt="Gemini"
                    width={64}
                    height={64}
                  />
                </div>
              </div>

              {/* Figma - top right */}
              <div className="absolute top-12 right-12">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center">
                  <Image
                    src="/icons/figma.png"
                    alt="Figma"
                    width={48}
                    height={48}
                  />
                </div>
              </div>

              {/* Photoshop - right */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#001E36] flex items-center justify-center">
                  <Image
                    src="/icons/photoshop.png"
                    alt="Photoshop"
                    width={48}
                    height={48}
                  />
                </div>
              </div>

              {/* Notion - bottom right */}
              <div className="absolute bottom-12 right-12">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-white shadow-md flex items-center justify-center">
                  <Image
                    src="/icons/notion.png"
                    alt="Notion"
                    width={48}
                    height={48}
                  />
                </div>
              </div>

              {/* ChatGPT - bottom */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white shadow-md flex items-center justify-center">
                  <Image
                    src="/icons/chatgpt.png"
                    alt="ChatGPT"
                    width={48}
                    height={48}
                  />
                </div>
              </div>

              {/* Canva - bottom left */}
              <div className="absolute bottom-12 left-12">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="/icons/canva.png"
                    alt="Canva"
                    width={64}
                    height={64}
                  />
                </div>
              </div>

              {/* Gemini/AI icon - left */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-black flex items-center justify-center">
                  <Image
                    src="/icons/gemini.png"
                    alt="AI Tool"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Specialization cards with rotation */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              I specialized in
            </h2>
            <div className="space-y-5">
              {specializations.map((item, index) => (
                <div
                  key={item.number}
                  className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-blue-100 p-6 rounded-2xl border-2 border-gray-300 hover:shadow-lg transition overflow-hidden"
                  style={{
                    transform: `rotate(${
                      index === 0
                        ? "0.5deg"
                        : index === 1
                        ? "-0.5deg"
                        : "0.5deg"
                    })`,
                  }}
                >
                  {/* Diagonal purple accent in top-right corner */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-200 to-purple-300 opacity-50 transform rotate-45 translate-x-20 -translate-y-20 rounded-lg"></div>

                  <div className="relative flex gap-4">
                    <div className="text-2xl font-bold text-gray-400 flex-shrink-0">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
