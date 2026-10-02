import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaLaravel,
  FaPython,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiOpencv,
} from "react-icons/si";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      description: "Building modern and responsive user interfaces.",
      skills: [
        {
          name: "React.js",
          icon: <FaReact />,
          color: "text-cyan-400",
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
          color: "text-white",
        },
        {
          name: "JavaScript",
          icon: <FaJs />,
          color: "text-yellow-400",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          color: "text-cyan-300",
        },
      ],
    },

    {
      title: "Backend",
      description: "Developing APIs, server-side applications and databases.",
      skills: [
        {
          name: "Laravel",
          icon: <FaLaravel />,
          color: "text-red-400",
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
          color: "text-blue-400",
        },
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          color: "text-green-400",
        },
      ],
    },

    {
      title: "AI & Tools",
      description: "Exploring intelligent applications and development tools.",
      skills: [
        {
          name: "Python",
          icon: <FaPython />,
          color: "text-yellow-300",
        },
        {
          name: "OpenCV",
          icon: <SiOpencv />,
          color: "text-green-400",
        },
        {
          name: "Git",
          icon: <FaGitAlt />,
          color: "text-orange-400",
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24 relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] top-20 left-0 pointer-events-none" />

      <div className="absolute w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] bottom-20 right-0 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
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
            Skills
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to design, build and develop
            modern software applications.
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: groupIndex * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="
                p-7
                rounded-3xl
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                hover:border-cyan-400/30
                transition-all
                duration-300
              "
            >
              {/* Group Header */}
              <div className="mb-7">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {group.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {group.description}
                </p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{
                      y: -3,
                      scale: 1.03,
                    }}
                    className="
                      flex
                      items-center
                      gap-2.5
                      px-4
                      py-3
                      rounded-xl
                      bg-white/5
                      border
                      border-white/10
                      hover:bg-white/10
                      hover:border-white/20
                      transition-all
                      duration-300
                    "
                  >
                    <span className={`text-xl ${skill.color}`}>
                      {skill.icon}
                    </span>

                    <span className="text-sm font-medium text-gray-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;