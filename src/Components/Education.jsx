import React from "react";
import { FaUniversity, FaCertificate } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 lg:px-24 text-neutral-content"
    >
      <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight">
        <span className="text-primary">Education & Certifications</span>
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {/* University Card */}
        <motion.div
          whileHover={{ scale: 1.03, y: -5 }}
          data-aos="zoom-in-up"
          className="bg-base-100/20 rounded-2xl p-6 shadow-lg shadow-purple-700/40 border-2 border-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:shadow-purple-500/100  backdrop-blur-lg transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="text-primary text-4xl">
              <FaUniversity />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary">
                B.Sc. in Software Engineering
              </h3>
              <p className="text-sm text-neutral-content opacity-70">
                Daffodil International University <br />
                <span className="text-accent font-medium">
                  2023 - Present
                </span>{" "}
                | GPA: 3.9/4.0
              </p>
            </div>
          </div>

          <p className="text-md md:text-lg mb-5 leading-relaxed text-neutral-content">
            I’m pursuing a <strong>Bachelor's degree</strong> in Software
            Engineering, focusing on <strong>full-stack development</strong>,
            software design, and problem solving. Courses include Data
            Structures, Algorithms, Web Dev, AI, and Cloud Computing.
          </p>
        </motion.div>

        {/* Certifications Card */}
        <motion.div
          whileHover={{ scale: 1.03, y: -5 }}
          data-aos="zoom-in-up"
          className="bg-base-100/20 rounded-2xl p-6 shadow-lg border-2 border-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 hover:shadow-purple-500/100 shadow-purple-700/40 backdrop-blur-lg transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="text-primary text-3xl">
              <FaCertificate />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary">
                Certifications
              </h3>
              <p className="text-sm text-neutral-content opacity-70">
                Verified credentials from platforms.
              </p>
            </div>
          </div>

          <ul className="list-disc pl-5 space-y-5 text-lg text-neutral-content">
            <li>
              <span className="text-sky-400 font-semibold">
                Full Stack Web Development
              </span>{" "}
              – Programming Hero - 2025
            </li>
            <li>
              <span className="text-orange-400 font-semibold">
                AI Prompt Engineering - 
              </span>{" "}
              – AICerts, 2025
            </li>
            <li>
              <span className="text-purple-400 font-semibold">
                Introduction To Git
              </span>{" "}
              – Microsoft, 2024
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
