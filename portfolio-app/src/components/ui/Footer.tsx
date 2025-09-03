import { FaGithub, FaEnvelope, FaLinkedin, FaFileAlt } from "react-icons/fa";

const SIZE = "4.5vh";

export default function Footer() {
  return (
    <footer className="w-full p-4 text-center text-white">
      <div className="flex justify-center space-x-6 mb-2">
        {/* GitHub */}
        <a
          href="https://github.com/CharlieKaroubi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors"
        >
          <FaGithub size={SIZE} />
        </a>

        {/* Email */}
        <a
          href="mailto:charliekaroubi@gmail.com"
          className="text-white hover:text-gray-400 transition-colors"
        >
          <FaEnvelope size={SIZE} />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/charlie-karoubi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors"
        >
          <FaLinkedin size={SIZE} />
        </a>

        {/* Resume */}
        <a
          href="https://drive.google.com/file/d/1MmiPoqifrDYoNe0zdmGqT-MiuH9ptvOC/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors"
        >
          <FaFileAlt size={SIZE} />
        </a>
      </div>
    </footer>
  );
}