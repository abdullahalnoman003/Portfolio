import React from "react";
import { FaUniversity, FaCertificate, FaAws } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTestinglibrary,
} from "react-icons/si";

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
        {/* University */}
        <div
          data-aos="zoom-in-up"
          className="bg-base-100/20 border border-base-300 rounded-3xl p-8 shadow-lg hover:shadow-primary transition-all duration-300 backdrop-blur"
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
                | GPA: 3.8/4.0
              </p>
            </div>
          </div>

          <p className="text-md md:text-lg mb-5 leading-relaxed text-neutral-content">
            I’m pursuing a <strong>Bachelor's degree</strong> in Software
            Engineering, focusing on <strong>full-stack development</strong>,
            software design, and problem solving. Courses include Data
            Structures, Algorithms, Web Dev, AI, and Cloud Computing.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="badge bg-base-200 border border-yellow-500 text-yellow-300 gap-2">
              <SiJavascript /> JavaScript
            </span>
            <span className="badge bg-base-200 border border-sky-500 text-sky-300 gap-2">
              <SiReact /> React
            </span>
            <span className="badge bg-base-200 border border-lime-500 text-lime-300 gap-2">
              <SiNodedotjs /> Node.js
            </span>
            <span className="badge bg-base-200 border border-emerald-500 text-emerald-300 gap-2">
              <SiMongodb /> MongoDB
            </span>
          </div>
        </div>

        {/* Certifications */}
        <div
          data-aos="zoom-in-up"
          className="bg-base-100/20 border border-base-300 rounded-3xl p-8 shadow-lg hover:shadow-primary transition-all duration-300 backdrop-blur"
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
              – Programming Hero - Batch 11
            </li>
            <li>
              <span className="text-orange-400 font-semibold">
                AWS Cloud Practitioner
              </span>{" "}
              – Amazon, 2024
              
            </li>
            <li>
              <span className="text-purple-400 font-semibold">
                React Advanced Concepts
              </span>{" "}
              – Frontend Masters, 2023
              
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
