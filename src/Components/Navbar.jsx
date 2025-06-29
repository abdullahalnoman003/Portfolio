import React from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar shadow-lg bg-transparent  backdrop-blur-3xl fixed z-50 top-0">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box font-bold  z-1 mt-3 w-30 p-2 shadow"
          >
            <li>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="education" smooth={true} duration={500}>
                Education
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact{" "}
              </Link>
            </li>
          </ul>
        </div>
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="btn max-lg:pl-0 bg-transparent shadow-none border-0 text-2xl max-lg:text-xl font-bold lg:ml-4"
        >
          {" "}
          <span className="text-primary">Noman</span>
          <span>Dev</span>{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-bold text-lg menu-horizontal px-1 ">
          <li className="">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="education" smooth={true} duration={500}>
              Education
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact{" "}
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="/resume.pdf"
          download="Abdullah-Al-Noman-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary  ml-3 mr-3"
        >
          <FaDownload />
          Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
