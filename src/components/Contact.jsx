import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="px-6 py-24 relative overflow-hidden">
      {/* Background Glow */}

      <div className="
        absolute
        top-20
        left-10
        w-72
        h-72
        bg-cyan-500/10
        rounded-full
        blur-[100px]
      " />

      <div className="
        absolute
        bottom-10
        right-10
        w-72
        h-72
        bg-purple-500/10
        rounded-full
        blur-[100px]
      " />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            Let's Connect
          </p>

          <h2 className="
            text-5xl
            md:text-6xl
            font-bold
            bg-gradient-to-r
            from-cyan-400
            via-purple-400
            to-pink-500
            bg-clip-text
            text-transparent
            mb-6
          ">
            Contact Me
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            I'm currently open to internships, freelance opportunities,
            and exciting software engineering collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="
              rounded-3xl
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              p-8
              shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            "
          >
            <h3 className="text-2xl font-bold mb-6">
              Get in Touch
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="
                  p-3
                  rounded-xl
                  bg-cyan-500/10
                  border
                  border-cyan-400/20
                  text-cyan-400
                ">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:your-email@example.com"
                    className="hover:text-cyan-400 transition"
                  >
                    shenurathnayake@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="
                  p-3
                  rounded-xl
                  bg-purple-500/10
                  border
                  border-purple-400/20
                  text-purple-400
                ">
                  <FaLinkedin />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-400 transition"
                  >
                    linkedin.com/in/Shenali Rathnayake
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="
                  p-3
                  rounded-xl
                  bg-pink-500/10
                  border
                  border-pink-400/20
                  text-pink-400
                ">
                  <FaGithub />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">GitHub</p>
                  <a
                    href="https://github.com/ShenaliRathnayake"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-cyan-400 transition"
                  >
                    github.com/ShenaliRathnayake
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="
                  p-3
                  rounded-xl
                  bg-green-500/10
                  border
                  border-green-400/20
                  text-green-400
                ">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p>Kandy, Sri Lanka</p>
                </div>
              </div>
            </div>

            {/* Availability Card */}

            <div className="
              mt-8
              p-5
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500/10
              to-purple-500/10
              border
              border-cyan-400/20
            ">
              <div className="flex items-center gap-3 mb-2">
                <span className="
                  w-3
                  h-3
                  rounded-full
                  bg-green-400
                  animate-pulse
                "></span>

                <h4 className="font-semibold">
                  Available for Opportunities
                </h4>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed">
                Open to internships, junior frontend roles, freelance projects,
                and collaborative software development opportunities.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="
              rounded-3xl
              bg-white/10
              backdrop-blur-xl
              border
              border-white/20
              p-8
              shadow-[0_20px_60px_rgba(0,0,0,0.35)]
              space-y-5
            "
          >
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  bg-black/20
                  border
                  border-white/10
                  focus:border-cyan-400/40
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-400/20
                  transition
                "
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  bg-black/20
                  border
                  border-white/10
                  focus:border-cyan-400/40
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-400/20
                  transition
                "
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Tell me about your project or opportunity..."
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  bg-black/20
                  border
                  border-white/10
                  focus:border-cyan-400/40
                  focus:outline-none
                  focus:ring-2
                  focus:ring-cyan-400/20
                  transition
                  resize-none
                "
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="
                w-full
                py-4
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                via-blue-500
                to-purple-600
                font-semibold
                shadow-[0_10px_40px_rgba(0,255,255,0.25)]
                hover:shadow-[0_15px_50px_rgba(139,92,246,0.3)]
                transition-all
                duration-300
              "
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
