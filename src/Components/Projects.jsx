import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Typewriter } from "react-simple-typewriter";

const projects = [
  {
    title: "Book Vault",
    description:
      "A full-stack digital bookshelf web app where users can track their reading, write reviews, upvote books, and manage their personal library securely.",
    tech: ["React", "Firebase", "JavaScript", "NodeJS", "ExpressJS", "MongoDB"],
    github: "https://github.com/abdullahalnoman003/Book-Vault",
    live: "https://book-vault-abdullahalnoman003.netlify.app/",
    images: [
      "https://i.ibb.co/tPzNGG6m/Screenshot-2025-06-29-231428.png",
      "https://i.ibb.co/cKg0WF5M/Screenshot-2025-06-29-231452.png",
      "https://i.ibb.co/Kxxc38vB/Screenshot-2025-06-29-231526.png",
      "https://i.ibb.co/zhCwv0mp/Screenshot-2025-06-29-231540.png",
    ],
  },
  {
    title: "Food Khazana",
    description:
      "Recipe book app with likes, wishlists, and top recipes — user-friendly and dynamic UI.",
    tech: ["React", "Firebase", "JavaScript", "NodeJS", "ExpressJS"],
    github: "https://github.com/abdullahalnoman003/Food-Khazana",
    live: "https://food-khazana.netlify.app/",
    images: [
      "https://i.ibb.co/Kx3G25HB/Screenshot-2025-06-30-150958.png",
      "https://i.ibb.co/BHSpWH1x/Screenshot-2025-06-30-151022.png",
      "https://i.ibb.co/8nYCVF3r/Screenshot-2025-06-30-150952.png"
    ],
  },
  {
    title: "Event Vista",
    description:
      "Event Vista is a dynamic and user-friendly Frontend Focused event exploration platform where users can discover, view, and interact with various local events",
    tech: ["React", "DaisyUI", "JavaScript", "Tailwind"],
    github: "https://github.com/abdullahalnoman003/Event-Vista",
    live: "https://event-vista.netlify.app/",
    images: [
      "https://i.ibb.co/vCqWH8Jt/Screenshot-2025-06-30-145147.png",
      "https://i.ibb.co/nqGPPWqT/Screenshot-2025-06-30-145206.png",
    ],
  },
  {
    title: "Law BD",
    description:
      "Lawyer Appointment Booking Web App! This React-based application allows users to explore lawyer profiles and book appointments",
    tech: ["React", "Firebase", "JavaScript"],
    github: "https://github.com/abdullahalnoman003/Lawyer-Booking-Application",
    live: "https://law-bd-abdullahalnoman.netlify.app/",
    images: [
      "https://i.ibb.co/fdJWD1mh/Screenshot-2025-06-30-150420.png",
      "https://i.ibb.co/4hVvXdz/Screenshot-2025-06-30-150438.png",
      "https://i.ibb.co/1GXmPDc2/Screenshot-2025-06-30-150447.png",
      "https://i.ibb.co/jk4QL3TC/Screenshot-2025-06-30-150507.png",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 lg:px-24 text-base-content">
      <div className="text-center mb-12">
        <h2 
        data-aos="fade-out"
        className="text-4xl font-bold mb-2 text-primary">🚀 My Projects</h2>
        <p className="text-lg text-gray-400">
          
          <Typewriter
                          words={[
                            "Showcasing some of my recent work"
                          ]}
                          cursor
                          cursorStyle="_"
                          typeSpeed={70}
                        />
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 ">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            data-aos="zoom-in-up"
            className="border-2 border-gradient-to-r from-purple-600 via-pink-600 to-indigo-600  rounded-2xl  overflow-hidden shadow-lg   bg-base-200 hover:shadow-purple-500/100 shadow-purple-500/40 transform transition"
          >
            <Carousel
              showThumbs={false}
              infiniteLoop
              autoPlay
              interval={3000}
              showStatus={false}
              className="rounded-t-2xl"
            >
              {project.images.map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="object-cover h-fit w-fit"
                  />
                </div>
              ))}
            </Carousel>

            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-primary">
                {project.title}
              </h3>
              <p className="text-sm text-base-content/70 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3  py-1 text-xs rounded-full bg-gradient-to-br from-purple-900 via-orange-500 to-red-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] text-white font-medium shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-base-content hover:text-primary transition-all "
                >
                  <FaGithub />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-base-content hover:text-primary transition-all"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
