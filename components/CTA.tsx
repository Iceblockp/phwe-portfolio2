export default function CTA() {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Main CTA Card */}
        <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 rounded-3xl p-12 text-white overflow-hidden mb-20">
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
              Contact →
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - FAQ Header */}
          <div>
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
              href="mailto:phwe@phwe8812@gmail.com"
              className="text-cyan-400 hover:text-cyan-500 transition"
            >
              phwe@phwe8812@gmail.com
            </a>
          </div>

          {/* Right side - FAQ Items */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-gray-900">
                  What is your design process?
                </h4>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg
                    className="w-5 h-5"
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
              </div>
              <div className="mt-4 text-gray-600 text-sm">
                I follow a user-centered design process: research → ideation →
                wireframing → prototyping → testing → final design. For urgent
                projects, I create high-fidelity wireframes to speed up the
                workflow.
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-gray-900">
                  How long does a website take to build?
                </h4>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-gray-900">
                  Will you work on the project in your account or mine?
                </h4>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-gray-900">
                  I&apos;m an agency, what you can do for us?
                </h4>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Profile and CTA */}
          <div className="flex items-center gap-4">
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
                <button className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition">
                  My LinkedIn
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </button>
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
          </div>

          {/* Right side - Second CTA */}
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Try me out, risk free!</h3>
            <p className="text-purple-100 mb-6">
              Let&apos;s build something great together
            </p>
            <button className="bg-cyan-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-cyan-300 transition">
              Contact →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
