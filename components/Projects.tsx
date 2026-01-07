import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Design for Diet Plan",
      tags: ["UI Design", "Web Design"],
      description:
        "A fresh and user-friendly interface designed to make healthy eating simple, enjoyable, and visually motivating.",
      features: ["Personalized Service Details", "Contact Details"],
      bgColor: "bg-gradient-to-br from-cyan-100 to-blue-200",
      image: "/images/diet-plan.png",
      buttonText: "View Details",
    },
    {
      title: "Management for Too To Movie",
      tags: ["User Flow", "Dashboard Design"],
      description:
        "Designing the Too To Movie app management system to handle movie series. Pre-pages and track view counts efficiently.",
      features: ["View statistics Management"],
      bgColor: "bg-gradient-to-br from-purple-200 to-purple-300",
      image: "/images/too-to.png",
      buttonText: "View Detail",
      reverse: true,
    },
    {
      title: "Design for Kio Taxi",
      tags: ["UI Design", "UX Design", "Investment Design"],
      description:
        "I design user spots, driver apps, and admin mechanisms for Kio Price Taxi Group, creating intuitive interfaces that meet both customer and business requirements.",
      features: ["Taxi management", "Driver App", "Passenger App"],
      bgColor: "bg-gradient-to-br from-cyan-100 to-blue-200",
      image: "/images/kio-taxi.png",
      buttonText: "View Details",
    },
    {
      title: "Management System for Lady Grace Diamond Land",
      tags: ["User Flow", "Dashboard Design"],
      description:
        "Designed an E-Commerce management system for Lady Grace Diamond, and sales tracking with comprehensive analytics and automated order reporting.",
      features: ["E-commerce", "Membership Management", "Sales Chart"],
      bgColor: "bg-gradient-to-br from-purple-200 to-purple-300",
      image: "/images/diamond-land.png",
      buttonText: "View Details",
      reverse: true,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">
          Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${project.bgColor} rounded-3xl p-8 md:p-12 shadow-lg`}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content side */}
                <div
                  className={project.reverse ? "order-2 md:order-1" : "order-1"}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                    {project.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-white/70 rounded-full text-sm font-medium text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-2 mb-8">
                    {project.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition font-medium">
                    {project.buttonText} →
                  </button>
                </div>

                {/* Image side */}
                <div
                  className={project.reverse ? "order-1 md:order-2" : "order-2"}
                >
                  <div className="relative">
                    <div className="bg-white rounded-2xl p-4 shadow-xl">
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Decorative sparkle */}
                    {index === 2 && (
                      <div className="absolute -top-4 -right-4">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          className="text-yellow-300"
                        >
                          <path
                            d="M16 2L18.5 13.5L30 16L18.5 18.5L16 30L13.5 18.5L2 16L13.5 13.5L16 2Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
