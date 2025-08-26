export default function Navbar() {
    return (
    <nav className="sticky top-0 p-2 bg-black z-50">
      <ul className="flex justify-center space-x-12 text-white font-semibold text-[2vw] sm:text-[2.5vw] md:text-[1.3vw]">
        <li>
          <a href="#home" className="hover:text-blue-800 transition-colors duration-300">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-800 transition-colors duration-300">About</a>
        </li>
        <li>
          <a href="#skills" className="hover:text-blue-800 transition-colors duration-300">Skills</a>
        </li>
        <li>
          <a href="#experience" className="hover:text-blue-800 transition-colors duration-300">Experience</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-800 transition-colors duration-300">Projects</a>
        </li>
      </ul>
    </nav>
    )
}