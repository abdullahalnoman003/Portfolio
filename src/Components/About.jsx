import React from 'react';
import { FaLaptopCode, FaGamepad, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 lg:px-24  text-white"
    >
      <div className="text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-6 inline-block bg-clip-text  text-"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          👨‍💻 About Me
        </motion.h2>

        <motion.p
          className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I'm a <span className="text-purple-400 font-semibold">Web Developer</span> focused on the <span className="text-green-400 font-semibold">MERN stack</span>, with a love for crafting clean UIs and efficient backend solutions. Whether it's developing full-stack apps, managing state, or improving performance — I enjoy solving real-world problems with code.
          <br />
          Outside the editor, I'm a gamer, a tech explorer, and a coffee-powered learner 🚀.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-[#1e1e2f] rounded-2xl p-6 shadow-lg hover:scale-105 hover:shadow-purple-500/100 shadow-purple-500/40 backdrop-blur transition-all duration-300 border-2 border-gradient-to-r from-purple-600 via-pink-600 to-indigo-600
">
            <FaLaptopCode className="text-3xl text-purple-400 mb-2 mx-auto" />
            <h3 className="text-xl font-semibold mb-1 text-white">MERN Dev</h3>
            <p className="text-sm text-gray-400">MongoDB, Express, React, Node.js</p>
          </div>

          <div className="bg-[#1e1e2f] rounded-2xl p-6 shadow-lg hover:scale-105 transition-all hover:shadow-purple-500/100 shadow-purple-500/40  backdrop-blur duration-300 border-2 border-gradient-to-r from-purple-600 via-pink-600 to-indigo-600
">
            <FaGamepad className="text-3xl text-pink-400 mb-2 mx-auto" />
            <h3 className="text-xl font-semibold mb-1 text-white">Gamer</h3>
            <p className="text-sm text-gray-400">Love open-world & action games 🎮</p>
          </div>

          <div className="bg-[#1e1e2f] rounded-2xl p-6 shadow-lg hover:scale-105 transition-all hover:shadow-purple-500/100 duration-300 shadow-purple-500/40 backdrop-blur border-2 border-gradient-to-r from-purple-600 via-pink-600 to-indigo-600">
            <FaLightbulb className="text-3xl text-yellow-300 mb-2 mx-auto" />
            <h3 className="text-xl font-semibold mb-1 text-white">Problem Solver</h3>
            <p className="text-sm text-gray-400">Enjoy debugging & optimizing code</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
