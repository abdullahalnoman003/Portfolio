import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const projects = [
  {
    title: 'Food Khazana',
    description: 'Recipe book app with likes, wishlists, and top recipes — user-friendly and dynamic UI.',
    tech: ['React', 'Firebase', 'JavaScript','NodeJS','ExpressJS'],
    github: 'https://github.com/abdullahalnoman003/Food-Khazana',
    live: 'https://food-khazana.netlify.app/',
    images: [
      'https://i.ibb.co/M5cRG4RP/image.png',
      'https://i.ibb.co/jkxBgdSN/image.png',
      'https://i.ibb.co/gbyRtt9M/image.png',
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 lg:px-24 text-base-content">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2 text-primary">🚀 My Projects</h2>
        <p className="text-lg text-gray-400">Showcasing some of my recent work</p>
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
              <h3 className="text-2xl font-semibold mb-2 text-primary">{project.title}</h3>
              <p className="text-sm text-base-content/70 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3  py-1 text-xs rounded-full bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-white font-medium shadow-md"
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
