// components/Contact.js
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        Swal.fire("Message Sent!", "I will get back to you soon!", "success");
        form.current.reset();
      })
      .catch(() => {
        Swal.fire("Error!", "Something went wrong. Please try again.", "error");
      });
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary bg-clip-text animate-pulse">
            🤝 Get In Touch
          </h2>
          <p className="text-accent mt-2">
            Feel free to reach out! I'd love to collaborate.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <div className="bg-[#0f172a] rounded-xl p-8 shadow-xl border border-[#334155]">
            <h3 className="text-2xl font-semibold mb-6 text-indigo-400">Contact Information</h3>
            <ul className="space-y-6 text-gray-300">
              <li className="flex items-center gap-4">
                📧
                <a href="mailto:youremail@example.com" className="hover:text-indigo-400">
                  youremail@example.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                📞
                <a href="tel:+1234567890" className="hover:text-indigo-400">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-4">
                📍<span>Dhaka, Bangladesh</span>
              </li>
            </ul>
            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-indigo-400"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-indigo-400"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-indigo-400"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-[#0f172a] rounded-xl p-8 shadow-xl border border-[#334155]"
          >
            <h3 className="text-2xl font-semibold mb-6 text-indigo-400">Send a Message</h3>
            <div className="space-y-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-[#1e293b] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 mt-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold transition duration-300"
              >
                Send Message 🚀
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
