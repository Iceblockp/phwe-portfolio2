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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Skill</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Crafting intuitive, user-focused, and visually engaging digital
            experiences through research, design, and collaboration
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            {leftSkills.map((skill, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {skill.name}
                </h3>
                <div className="relative">
                  <div className="w-full h-2 bg-gray-300 rounded-full">
                    <div
                      className="h-2 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full relative"
                      style={{ width: `${skill.level}%` }}
                    >
                      {/* White circular handle */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-cyan-400 shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {rightSkills.map((skill, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {skill.name}
                </h3>
                <div className="relative">
                  <div className="w-full h-2 bg-gray-300 rounded-full">
                    <div
                      className="h-2 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full relative"
                      style={{ width: `${skill.level}%` }}
                    >
                      {/* White circular handle */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-cyan-400 shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* Purple dot - top right */}
      <div className="absolute top-32 right-20 w-4 h-4 bg-purple-500 rounded-full opacity-80"></div>

      {/* Cyan square - top right */}
      <div className="absolute top-48 right-12 w-12 h-12 bg-cyan-400 rounded-lg transform rotate-12 opacity-70"></div>

      {/* Blue circle - right middle */}
      <div className="absolute top-1/2 right-8 w-6 h-6 bg-blue-400 rounded-full opacity-80"></div>

      {/* Cyan square - bottom left */}
      <div className="absolute bottom-32 left-16 w-10 h-10 bg-cyan-400 rounded-lg transform -rotate-12 opacity-70"></div>
    </section>
  );
}
