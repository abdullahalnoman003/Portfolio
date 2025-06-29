import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <nav className="flex flex-wrap justify-center gap-6 mb-4 text-sm font-medium tracking-wide">
          <Link
            to="about"
            smooth
            duration={500}
            className="hover:text-white transition cursor-pointer"
          >
            About Me
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            className="hover:text-white transition cursor-pointer"
          >
            Contact
          </Link>
          <Link
            to="projects"
            smooth
            duration={500}
            className="hover:text-white transition cursor-pointer"
          >
            Projects
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/resume.pdf"
            download="Abdullah-Al-Noman-Resume.pdf"
            className="hover:text-white transition"
          >
            Resume
          </a>
        </nav>

        <div className="flex justify-center gap-6 mb-4 text-xl">
          <a
            href="https://github.com/abdullahalnoman003"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/abdullahalnoman003"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:noman22622@gmail.com"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Abdullah Al Noman. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
