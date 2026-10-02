import { motion } from "framer-motion";
import {
  FaReact,
  FaLaravel,
  FaPython,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMysql,
  SiOpencv,
} from "react-icons/si";

function About() {
  const learningJourney = [
    {
      number: "01",
      title: "Advanced Frontend Development",
      description:
        "Improving my ability to build scalable, responsive and high-quality web applications with modern React-based architecture.",
      focus: "React.js • Next.js • UI Architecture",
      icon: <FaReact />,
      iconColor: "text-cyan-400",
    },
    {
      number: "02",
      title: "Backend & API Development",
      description:
        "Developing stronger backend skills by working with APIs, authentication, databases and full-stack application architecture.",
      focus: "Laravel • MySQL • REST APIs",
      icon: <FaLaravel />,
      iconColor: "text-red-400",
    },
    {
      number: "03",
      title: "AI & Computer Vision",
      description:
        "Exploring intelligent applications and real-time computer vision through practical projects and experimentation.",
      focus: "Python • OpenCV • MediaPipe",
      icon: <FaPython />,
      iconColor: "text-yellow-300",
    },
    {
      number: "04",
      title: "Cloud & DevOps",
      description:
        "Expanding my understanding of deployment, containerization and modern development workflows for production applications.",
      focus: "AWS • Docker • Git",
      icon: <FaAws />,
      iconColor: "text-orange-400",
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        px-6
        py-32
        overflow-hidden
      "
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px] top-20 -left-20 pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[140px] bottom-0 right-0 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* ================= ABOUT ME ================= */}

        <h2 className="text-center text-5xl md:text-6xl font-black mb-10 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="max-w-4xl mx-auto text-center text-gray-400 text-lg leading-relaxed">
          I am a Software Engineer and Frontend Developer focused on
          creating modern, scalable and interactive digital experiences.
          I build applications using React.js, JavaScript, Laravel and
          modern UI/UX technologies. My interests include Artificial
          Intelligence, Computer Vision, Cloud Computing and emerging
          technologies.
        </p>

        {/* ================= EXPERTISE ================= */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Expertise
            number="01"
            title="Frontend Engineering"
            text="Creating immersive interfaces using React.js, Tailwind CSS, animations and modern component architecture."
          />

          <Expertise
            number="02"
            title="Backend Engineering"
            text="Developing secure APIs, authentication systems and scalable backend solutions using Laravel."
          />

          <Expertise
            number="03"
            title="AI & Innovation"
            text="Exploring Machine Learning, Computer Vision, Generative AI and intelligent applications."
          />
        </div>

        {/* ================= LEARNING JOURNEY ================= */}

        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Currently Learning & Exploring
            </h3>

            <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-lg leading-relaxed">
              I continuously expand my knowledge by building projects,
              experimenting with new technologies and improving my
              development workflow.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/40 via-purple-400/30 to-pink-400/20 -translate-x-1/2" />

            <div className="space-y-10 md:space-y-16">
              {learningJourney.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className={`relative flex ${
                    index % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 z-20 w-4 h-4 rounded-full bg-cyan-400 border-4 border-[#080b14] shadow-[0_0_15px_rgba(34,211,238,0.4)]" />

                  {/* Card */}
                  <div className="w-full md:w-[46%]">
                    <div className="group relative p-7 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300">
                      
                      {/* Number */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400">
                          {item.number}
                        </span>

                        <span
                          className={`text-2xl ${item.iconColor} opacity-80 group-hover:scale-110 transition-transform duration-300`}
                        >
                          {item.icon}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>

                      {/* Description */}
                      <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-6">
                        {item.description}
                      </p>

                      {/* Current Focus */}
                      <div className="pt-4 border-t border-white/10">
                        <span className="text-xs uppercase tracking-wider text-gray-500">
                          Current Focus
                        </span>

                        <p className="mt-2 text-sm text-gray-300">
                          {item.focus}
                        </p>
                      </div>

                      {/* Decorative Glow */}
                      <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-cyan-400/0 via-purple-400/0 to-pink-400/0 group-hover:from-cyan-400/10 group-hover:via-purple-400/10 group-hover:to-pink-400/10 pointer-events-none transition-all duration-500" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Learning Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center mt-16"
          >
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              Always learning. Always building.
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function Expertise({ number, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/30 overflow-hidden transition-all duration-300"
    >
      <span className="text-6xl font-black text-white/5 absolute right-5 top-3">
        {number}
      </span>

      <h3 className="text-2xl font-bold text-cyan-400 mb-4 relative">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed relative">
        {text}
      </p>
    </motion.div>
  );
}

export default About;