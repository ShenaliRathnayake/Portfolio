import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

import ecommerce from "../assets/projects/ecommerce.png";
import emotion from "../assets/projects/emotion.png";
import traffic from "../assets/projects/traffic.png";
import bioinformatics from "../assets/projects/bioinformatics.png";
import iot from "../assets/projects/iot.png";
import lms from "../assets/projects/lms.png";
import banking from "../assets/projects/banking.png";
import petcare from "../assets/projects/petcare.png";

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      image: ecommerce,
      description:
        "Full-stack ecommerce platform with authentication, product management, shopping cart and modern responsive UI.",
      tech: ["React", "Laravel", "MySQL", "REST API"],
      link: "/projects/ecommerce",
      github: "#",
      liveDemo: "",
    },

    {
      title: "Emotion Detection AI",
      image: emotion,
      description:
        "Real-time facial emotion recognition system using computer vision and deep learning models.",
      tech: ["Python", "OpenCV", "TensorFlow", "AI"],
      link: "#",
      github: "#",
      liveDemo: "",
    },

    {
      title: "Traffic Sign Detection",
      image: traffic,
      description:
        "Computer vision system that detects and classifies road traffic signs using deep learning techniques.",
      tech: ["Python", "OpenCV", "Deep Learning"],
      link: "#",
      github: "#",
      liveDemo: "",
    },

    {
      title: "Bioinformatics Gene Analysis",
      image: bioinformatics,
      description:
        "Gene identification and functional analysis project using biological databases and sequence analysis.",
      tech: ["Python", "BioPython", "NCBI", "BLAST"],
      link: "#",
      github: "#",
      liveDemo: "",
    },

    {
      title: "IoT Obstacle Avoiding Car",
      image: iot,
      description:
        "Smart robotic vehicle that detects obstacles and automatically changes direction using sensors.",
      tech: ["Arduino", "Ultrasonic Sensor", "C++", "IoT"],
      link: "#",
      github: "#",
      liveDemo: "",
    },

    {
      title: "Learning Management System",
      image: lms,
      description:
        "Online learning platform for managing courses, students, instructors and digital learning resources.",
      tech: ["React", "Laravel", "MySQL", "Authentication"],
      link: "#",
      github: "#",
      liveDemo: "",
    },

    {
      title: "Banking Management System",
      image: banking,
      description:
        "Secure banking application for managing accounts, transactions and customer financial records.",
      tech: ["Java", "MySQL", "OOP", "Database"],
      link: "#",
      github: "#",
      liveDemo: "",
    },

    {
      title: "PetCare Website",
      image: petcare,
      description:
        "Modern pet care platform providing services, information and user-friendly experience for pet owners.",
      tech: ["React", "Tailwind CSS", "JavaScript", "UI/UX"],
      link: "#",
      github: "#",
      liveDemo: "",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-24 relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] top-20 left-0 pointer-events-none" />

      <div className="absolute w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[130px] bottom-20 right-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="
              text-5xl
              md:text-6xl
              font-bold
              bg-gradient-to-r
              from-cyan-400
              via-purple-400
              to-pink-500
              bg-clip-text
              text-transparent
            "
          >
            Projects
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
            A selection of academic and personal projects exploring
            full-stack development, AI, computer vision and modern web
            technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <Tilt
              key={project.title}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              glareEnable={true}
              glareMaxOpacity={0.08}
              scale={1.01}
              transitionSpeed={1500}
            >
              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="
                  h-full
                  min-h-[600px]
                  flex
                  flex-col
                  rounded-3xl
                  p-6
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  hover:border-cyan-400/30
                  shadow-[0_20px_60px_rgba(0,0,0,0.30)]
                  transition-all
                  duration-300
                  group
                "
              >
                {/* Project Image */}
                <div
                  className="
                    h-52
                    rounded-2xl
                    overflow-hidden
                    mb-6
                    flex-shrink-0
                  "
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-105
                      transition-transform
                      duration-700
                    "
                  />
                </div>

                {/* Project Content */}
                <div className="flex flex-col flex-1">

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3
                          py-1
                          rounded-full
                          bg-cyan-400/5
                          text-cyan-300
                          text-sm
                          border
                          border-cyan-400/15
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 mt-auto">

                    {/* View Code */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        px-4
                        py-2.5
                        rounded-xl
                        bg-white/5
                        border
                        border-white/15
                        hover:bg-white/10
                        hover:border-white/25
                        transition-all
                        duration-300
                        text-sm
                      "
                    >
                      <FaGithub />
                      View Code
                    </a>

                    {/* Live Demo */}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex
                          items-center
                          gap-2
                          px-4
                          py-2.5
                          rounded-xl
                          border
                          border-green-400/20
                          bg-green-400/5
                          text-green-300
                          hover:bg-green-400/10
                          transition-all
                          duration-300
                          text-sm
                        "
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    )}

                    {/* Project Details */}
                    {project.link !== "#" && (
                      <Link
                        to={project.link}
                        className="
                          flex
                          items-center
                          gap-2
                          px-4
                          py-2.5
                          rounded-xl
                          bg-gradient-to-r
                          from-cyan-500
                          to-purple-600
                          hover:scale-[1.03]
                          transition-all
                          duration-300
                          text-sm
                          font-medium
                        "
                      >
                        <FaExternalLinkAlt />
                        Details
                      </Link>
                    )}

                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;