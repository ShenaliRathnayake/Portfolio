import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ecommerce from "../assets/projects/ecommerce.png";

function FeaturedProject() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            grid
            lg:grid-cols-2
            gap-10
            items-center
            rounded-[2rem]
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            overflow-hidden
            shadow-[0_20px_80px_rgba(0,0,0,0.4)]
          "
        >
          {/* Image */}

          <div className="relative group h-full">
            <img
              src={ecommerce}
              alt="E-Commerce Platform"
              className="
                w-full
                h-full
                object-cover
                min-h-[320px]
                group-hover:scale-105
                transition
                duration-700
              "
            />

            <div className="
              absolute
              inset-0
              bg-gradient-to-tr
              from-cyan-500/20
              via-transparent
              to-purple-500/20
            " />
          </div>

          {/* Content */}

          <div className="p-8 lg:p-12">
            <div className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-cyan-400/10
              border
              border-cyan-400/20
              text-cyan-300
              text-sm
              mb-6
            ">
              ✨ Featured Project
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              E-Commerce Platform
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              A modern full-stack ecommerce platform built with React and Laravel.
              It includes authentication, product management, shopping cart functionality,
              responsive UI, and secure API integration.
            </p>

            {/* Tech Stack */}

            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "React.js",
                "Laravel",
                "MySQL",
                "REST API",
                "Tailwind CSS"
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-white/10
                    border
                    border-white/20
                    text-cyan-300
                    text-sm
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/ShenaliRathnayake"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-2xl
                  bg-white/10
                  border
                  border-white/20
                  hover:bg-cyan-500/20
                  transition
                "
              >
                <FaGithub />
                View Code
              </a>

              <a
                href="#projects"
                className="
                  flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-cyan-500
                  to-purple-600
                  hover:scale-105
                  transition
                "
              >
                <FaExternalLinkAlt />
                Explore Projects
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedProject;