import React from "react";
import { FaLaptopCode, FaGamepad, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-5 lg:px-24  text-white">
      <div className="text-center">
        <h2 data-aos="flip-left" className="text-4xl font-extrabold mb-6 text-primary ">
          👨‍💻 About Me
        </h2>

        <p
        data-aos="zoom-in"
          className="max-w-3xl mx-auto text-lg px-4 max-md:px-3 text- text-gray-300 mb-15"
        >
          I'm a{" "}
          <span className="text-purple-400 font-semibold">Web Developer</span>{" "}
          focused on the{" "}
          <span className="text-green-400 font-semibold">MERN stack</span>, with
          a love for crafting clean UIs and efficient backend solutions. Whether
          it's developing full-stack apps, managing state, or improving
          performance — I enjoy solving real-world problems with code.
          <br />
          Outside the editor, I'm a gamer, a tech explorer, and a coffee-powered
          learner 🚀.
        </p>

        <div className="flex flex-col md:flex-row max-md:px-4 justify-center gap-8">
          <motion.div
            whileHover={{ scale: 1.03, y: -4 }}
            data-aos="zoom-in-right"
            className="bg-[#1e1e2f] rounded-2xl p-6 shadow-lg hover:shadow-purple-500/100  shadow-purple-500/40 backdrop-blur transition-all duration-300 border-2"
          >
            <FaLaptopCode className="text-3xl text-purple-400 mb-2 mx-auto" />
            <h3 className="text-xl font-semibold mb-1 text-white">MERN Dev</h3>
            <p className="text-sm text-gray-300">
              MongoDB, Express, React, Node.js
            </p>
          </motion.div>

          <motion.div
          whileHover={{ scale: 1.03, y: -4 }}
            data-aos="fade-down"
            className="bg-[#1e1e2f] rounded-2xl p-6 shadow-lg transition-all hover:shadow-purple-500/100 shadow-purple-500/40  backdrop-blur duration-300 border-2"
          >
            <FaGamepad className="text-3xl text-pink-400 mb-2 mx-auto" />
            <h3 className="text-xl font-semibold mb-1 text-white">Gamer</h3>
            <p className="text-sm text-gray-300">
              Love open-world & action games 🎮
            </p>
          </motion.div>

          <motion.div
          whileHover={{ scale: 1.04, y: -4 }}
            data-aos="zoom-in-left"
            className="bg-[#1e1e2f] rounded-2xl p-6 shadow-lg transition-all hover:shadow-purple-500/100 duration-300 shadow-purple-500/40 backdrop-blur border-2 "
          >
            <FaLightbulb className="text-3xl text-yellow-300 mb-2 mx-auto" />
            <h3 className="text-xl font-semibold mb-1 text-white">
              Problem Solver
            </h3>
            <p className="text-sm text-gray-300">
              Enjoy debugging & optimizing code
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
