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

      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] top-20 left-20" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] bottom-20 right-20" />

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
        {/* Left Side - Profile */}

        <div className="flex justify-center relative">
          {/* Tech Orbit */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="
              absolute
              w-[360px]
              h-[360px]
              hidden
              md:block
            "
          >
            <span className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              px-3
              py-1
              rounded-full
              bg-white/10
              border
              border-cyan-400/30
              text-cyan-300
              text-xs
              backdrop-blur-lg
            ">
              React
            </span>

            <span className="
              absolute
              top-1/2
              -left-6
              -translate-y-1/2
              px-3
              py-1
              rounded-full
              bg-white/10
              border
              border-purple-400/30
              text-purple-300
              text-xs
              backdrop-blur-lg
            ">
              Laravel
            </span>

            <span className="
              absolute
              top-1/2
              -right-6
              -translate-y-1/2
              px-3
              py-1
              rounded-full
              bg-white/10
              border
              border-pink-400/30
              text-pink-300
              text-xs
              backdrop-blur-lg
            ">
              Python
            </span>

            <span className="
              absolute
              bottom-0
              left-1/2
              -translate-x-1/2
              px-3
              py-1
              rounded-full
              bg-white/10
              border
              border-green-400/30
              text-green-300
              text-xs
              backdrop-blur-lg
            ">
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
              y: [0, -20, 0]
            }}
            transition={{
              scale: { duration: 1 },
              rotate: { duration: 1 },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="
              w-72
              h-72
              object-cover
              rounded-full
              border-4
              border-cyan-400/30
              shadow-[0_0_100px_rgba(0,255,255,0.35)]
              hover:scale-105
              transition
              duration-500
              backdrop-blur-sm
              relative
              z-10
            "
          />
        </div>

        {/* Right Side - Content */}

        <div>
          {/* Internship Badge */}

          <div className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            mb-8
            rounded-full
            bg-green-500/10
            border
            border-green-500/30
            text-green-400
            text-sm
            font-medium
          ">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Available for Internships
          </div>

          <p className="text-cyan-400 text-xl mb-4">
            Hello, I'm
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Shenali 
          </h1>
          </p>


          <h2 className="
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
          ">
            <Typewriter
              words={[
                "Software Engineer",
                "Frontend Developer",
                "React Developer",
                "Creative Problem Solver"
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed mb-8">
            I create modern, scalable and interactive web applications
            using React, Laravel, and emerging technologies.
          </p>

          {/* Tech Badges */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center md:justify-start gap-3 mb-8"
          >
            {[
              "React.js",
              "Laravel",
              "JavaScript",
              "Tailwind CSS",
              "OpenCV",
              "TensorFlow"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 2 + index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="
                  px-4
                  py-2
                  rounded-full
                  bg-white/10
                  backdrop-blur-lg
                  border
                  border-white/20
                  text-sm
                  text-cyan-300
                  shadow-[0_0_20px_rgba(0,255,255,0.12)]
                "
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center md:justify-start gap-5 flex-wrap"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.96 }}
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
                shadow-[0_10px_40px_rgba(0,255,255,0.25)]
                transition
              "
            >
              View Projects
              <FaArrowRight />
            </motion.a>

            <motion.a
              href="/src/assets/resume.pdf"
              download
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="
                px-8
                py-4
                rounded-2xl
                border
                border-white/20
                bg-white/10
                backdrop-blur-xl
                flex
                items-center
                gap-3
                font-semibold
                hover:bg-white/15
                shadow-[0_10px_30px_rgba(255,255,255,0.08)]
                transition
              "
            >
              Download CV
              <FaDownload />
            </motion.a>
          </motion.div>

          {/* Developer Stats */}

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
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-cyan-400">5+</h3>
              <p className="text-gray-400 text-sm">Projects Built</p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-purple-400">10+</h3>
              <p className="text-gray-400 text-sm">Technologies</p>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-3xl font-bold text-pink-400">∞</h3>
              <p className="text-gray-400 text-sm">Learning Mindset</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;