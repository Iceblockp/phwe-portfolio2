export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900">Phwe Portfolio</div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-900 transition text-sm"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-gray-900 transition text-sm"
          >
            About me
          </a>
          <a
            href="#projects"
            className="text-gray-600 hover:text-gray-900 transition text-sm"
          >
            Projects
          </a>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition text-sm font-medium flex items-center gap-2">
            Contact →
          </button>
        </div>
      </div>

      {/* Bottom border - dashed line */}
      <div className="border-b border-dashed border-gray-300"></div>
    </nav>
  );
}
