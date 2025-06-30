import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        Swal.fire({
          title: "Message Sent",
          text: "Thank you! I’ll get back to you shortly.",
          icon: "success",
          background: "#121212", 
          color: "#f0e7d8", 
          iconColor: "#f97316", 
          confirmButtonColor: "#f97316", 
          customClass: {
            popup: "rounded-md shadow-lg border border-orange-600",
            title: "text-lg font-semibold",
            confirmButton: "px-4 py-2 text-sm font-medium",
          },
        });
        form.current.reset();
      })
      .catch(() => {
        Swal.fire({
          title: "Error",
          text: "Something went wrong. Please try again.",
          icon: "error",
          background: "#121212",
          color: "#f0e7d8",
          iconColor: "#ef4444", 
          confirmButtonColor: "#ef4444",
          customClass: {
            popup: "rounded-md shadow-lg border border-red-600",
            title: "text-lg font-semibold",
            confirmButton: "px-4 py-2 text-sm font-medium",
          },
        });
      });
  };

  return (
    <section id="contact" className="py-20 px-4 text-white relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl font-extrabold tracking-wider  bg-clip-text text-primary drop-shadow-lg animate-gradient-x"
            style={{ backgroundSize: "200% 100%" }}
          >
            🤝 Get In Touch
          </h2>
          <p className="text-gray-400 mt-3 text-lg italic tracking-wide">
            Let’s connect and build something amazing together!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <div className="rounded-xl p-8 border-2 border-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 shadow-[0_0_20px_rgba(147,51,234,0.7)] bg-black bg-opacity-30 backdrop-blur-md hover:shadow-[0_0_30px_rgba(147,51,234,1)] transition-shadow duration-500">
            <h3 className="text-3xl font-semibold text-white mb-6 tracking-wide">
              Contact Info
            </h3>
            <ul className="space-y-6 text-gray-300 text-lg">
              <li className="flex items-center gap-4">
                😊{" "}
                <a className="hover:text-purple-400 transition">
                  Abdullah Al Noman
                </a>
              </li>
              <li className="flex items-center gap-4">
                📧{" "}
                <a
                  href="mailto:noman22622@gmail.com"
                  className="hover:text-blue-400 transition"
                >
                  noman22622@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <FaPhone className="text-red-400" />
                <FaWhatsappSquare className="text-green-400" />{" "}
                <a
                  href="https://wa.me/+8801522102892"
                  target="_blank"
                  className="hover:text-green-400 transition"
                >
                  +8801522102892
                </a>
              </li>
              <li className="flex items-center gap-4">📍 Dhaka, Bangladesh</li>
            </ul>
            <div className="mt-8 flex gap-8 text-3xl text-gray-300">
              <a
                href="https://github.com/yourusername"
                className="hover:text-purple-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                className="hover:text-purple-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/yourhandle"
                className="hover:text-purple-400 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="relative rounded-xl p-8 border-2 border-gradient-to-r from-indigo-600 via-pink-600 to-purple-600 shadow-[0_0_20px_rgba(131,58,180,0.7)] bg-black bg-opacity-30 backdrop-blur-md hover:shadow-[0_0_30px_rgba(131,58,180,1)] transition-shadow duration-500"
          >
            <h3 className="text-3xl font-semibold text-white mb-6 tracking-wide">
              Send a Message
            </h3>
            <div className="space-y-5">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full bg-[#1e293b] text-white p-4 rounded-md placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full bg-[#1e293b] text-white p-4 rounded-md placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="w-full bg-[#1e293b] text-white p-4 rounded-md placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:outline-none transition resize-none"
                required
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px #c084fc" }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-primary text-white py-4 font-semibold rounded-md transition shadow-lg"
              >
                Send Message 🚀
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
