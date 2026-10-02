import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import profile from "../assets/profile.png";
import ThreeScene from "./ThreeScene";

function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        relative
        overflow-hidden
        px-6
        pt-28 md:pt-20
      "
    >
      {/* 3D Background */}
      <ThreeScene />

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[120px] top-20 left-20" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[120px] bottom-20 right-20" />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="
          max-w-6xl
          w-full
          grid
          md:grid-cols-2
          items-center
          gap-14
          relative
          z-10
        "
      >
        {/* =================================
            LEFT SIDE - PROFILE
        ================================== */}
        <div className="flex justify-center relative">

          {/* Tech Orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              absolute
              w-[360px]
              h-[360px]
              hidden
              md:block
            "
          >
            {/* React */}
            <span
              className="
                absolute
                top-0
                left-1/2
                -translate-x-1/2
                px-3
                py-1
                rounded-full
                bg-white/5
                border
                border-cyan-400/20
                text-cyan-300/80
                text-xs
                backdrop-blur-lg
              "
            >
              React
            </span>

            {/* Laravel */}
            <span
              className="
                absolute
                top-1/2
                -left-6
                -translate-y-1/2
                px-3
                py-1
                rounded-full
                bg-white/5
                border
                border-purple-400/20
                text-purple-300/80
                text-xs
                backdrop-blur-lg
              "
            >
              Laravel
            </span>

            {/* Python */}
            <span
              className="
                absolute
                top-1/2
                -right-6
                -translate-y-1/2
                px-3
                py-1
                rounded-full
                bg-white/5
                border
                border-pink-400/20
                text-pink-300/80
                text-xs
                backdrop-blur-lg
              "
            >
              Python
            </span>

            {/* AI / CV */}
            <span
              className="
                absolute
                bottom-0
                left-1/2
                -translate-x-1/2
                px-3
                py-1
                rounded-full
                bg-white/5
                border
                border-green-400/20
                text-green-300/80
                text-xs
                backdrop-blur-lg
              "
            >
              AI / CV
            </span>
          </motion.div>

          {/* Profile Image */}
          <motion.img
            src={profile}
            initial={{ scale: 0, rotate: 20 }}
            animate={{
              scale: 1,
              rotate: 0,
              y: [0, -15, 0],
            }}
            transition={{
              scale: { duration: 1 },
              rotate: { duration: 1 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
              w-72
              h-72
              object-cover
              rounded-full
              border-4
              border-cyan-400/25
              shadow-[0_0_70px_rgba(0,255,255,0.20)]
              hover:scale-105
              transition
              duration-500
              backdrop-blur-sm
              relative
              z-10
            "
          />
        </div>

        {/* =================================
            RIGHT SIDE - CONTENT
        ================================== */}
        <div>

          {/* Internship Badge */}
          <motion.div
            whileHover={{ y: -2 }}
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              mb-8
              rounded-full
              bg-green-500/5
              border
              border-green-500/25
              text-green-400
              text-sm
              font-medium
              transition
            "
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for Internships
          </motion.div>

          {/* Greeting */}
          <p className="text-cyan-400 text-xl mb-2">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Shenali
          </h1>

          {/* Professional Title */}
          <h2
            className="
              text-3xl
              md:text-5xl
              font-bold
              bg-gradient-to-r
              from-cyan-400
              via-purple-400
              to-pink-500
              bg-clip-text
              text-transparent
              mb-6
            "
          >
            <Typewriter
              words={["Frontend Developer"]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </h2>

          {/* Description */}
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed mb-8">
            I create modern, scalable and interactive web applications
            using React, Laravel, and emerging technologies.
          </p>

          {/* =================================
              TECHNOLOGY BADGES
          ================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="
              flex
              flex-wrap
              justify-center
              md:justify-start
              gap-3
              mb-8
            "
          >
            {[
              "React.js",
              "Laravel",
              "JavaScript",
              "Tailwind CSS",
              "OpenCV",
              "TensorFlow",
            ].map((tech) => (
              <motion.span
                key={tech}
                whileHover={{
                  y: -3,
                  scale: 1.03,
                }}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-white/5
                  backdrop-blur-lg
                  border
                  border-white/15
                  text-sm
                  text-cyan-300
                  transition
                "
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* =================================
              BUTTONS
          ================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="
              flex
              justify-center
              md:justify-start
              gap-5
              flex-wrap
            "
          >
            {/* View Projects */}
            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{ scale: 0.97 }}
              className="
                px-8
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-cyan-500
                via-blue-500
                to-purple-600
                flex
                items-center
                gap-3
                font-semibold
                shadow-[0_10px_35px_rgba(0,255,255,0.18)]
                transition
              "
            >
              View Projects
              <FaArrowRight />
            </motion.a>

            {/* Download CV */}
            <motion.a
              href="/resume.pdf"
              download="Shenali-Rathnayake-CV.pdf"
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{ scale: 0.97 }}
              className="
                px-8
                py-4
                rounded-2xl
                border
                border-white/15
                bg-white/5
                backdrop-blur-xl
                flex
                items-center
                gap-3
                font-semibold
                hover:bg-white/10
                transition
              "
            >
              Download CV
              <FaDownload />
            </motion.a>
          </motion.div>

          {/* =================================
              DEVELOPER STATS
          ================================== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="
              flex
              justify-center
              md:justify-start
              gap-10
              mt-10
              flex-wrap
            "
          >
            {/* Projects */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-cyan-400">
                5+
              </h3>

              <p className="text-gray-400 text-sm max-w-[150px]">
                Projects Built (Academic & Personal)
              </p>
            </div>

            {/* Technologies */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-purple-400">
                10+
              </h3>

              <p className="text-gray-400 text-sm">
                Technologies
              </p>
            </div>

            {/* Learning */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-pink-400">
                ∞
              </h3>

              <p className="text-gray-400 text-sm">
                Learning Mindset
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;