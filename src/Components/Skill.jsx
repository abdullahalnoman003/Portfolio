import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-400" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-400" },
      { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
      { name: "React", icon: <FaReact />, color: "text-cyan-400" },
      { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-400" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400" },
      { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-emerald-400" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt />, color: "text-red-400" },
      { name: "GitHub", icon: <FaGithub />, color: "text-white" },
    ],
  },
];

const Skill = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-24 text-white">
      <motion.h2
        className="text-4xl font-extrabold text-center mb-16 text-primary"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🚀 My Tech Stack
      </motion.h2>

      <div className="flex flex-col gap-20">
        {skills.map((group, i) => (
          <div key={i}>
            <motion.h3
              className="text-2xl font-bold text-center text-gray-300 mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {group.category}
            </motion.h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
              {group.items.map((skill, j) => (
                <motion.div
                  key={j}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: j * 0.05 }}
                  className="w-32 h-32  bg-white/5 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-pink-500/40 flex flex-col items-center justify-center text-center p-4 transition-all duration-300 border border-white/10"
                >
                  <div className={`text-4xl mb-2 ${skill.color}`}>{skill.icon}</div>
                  <p className="text-sm font-medium text-gray-200">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
