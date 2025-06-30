import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaDownload,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
const Hero = () => {
  return (
    <div className="hero min-h-screen px-4 md:px-20">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <img
          data-aos="zoom-in-up"
          src="images/photo.png"
          className="max-w-xs rounded-full shadow-2xl border-4 border-primary shadow-purple-500/100  "
          alt="Profile"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Hi!👋 I'm Abdullah Al Noman{" "}
          </h1>
          <h1 className="text-2xl md:text-3xl font-semibold mt-2">
            I am a{" "}
            <span className="text-primary">
              <Typewriter
                words={[
                  "Web Developer",
                  "React Developer",
                  "MERN Stack Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="py-6 max-w-lg text-clip">
            Passionate about crafting modern, responsive web applications with
            React, Node.js, and MongoDB. Currently exploring DevOps and building
            beautiful UIs with Tailwind and DaisyUI.
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center mt-6">
            <a
              href="/resume.pdf"
              download="Abdullah-Al-Noman-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaDownload /> Download Resume
            </a>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="btn btn-outline btn-secondary cursor-pointer"
            >
              Contact Me
            </Link>
          </div>
          <div className="flex gap-6 text-2xl mt-6 justify-center lg:justify-start">
            <a
              href="https://github.com/abdullahalnoman003"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-primary duration-200" />
            </a>
            <a
              href="https://linkedin.com/in/abdullahalnoman003"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-primary duration-200" />
            </a>
            <a
              href="https://facebook.com/fb.abdullahalnoman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-primary duration-200" />
            </a>
            <a
              href="https://x.com/Noman_1003"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="hover:text-primary duration-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
