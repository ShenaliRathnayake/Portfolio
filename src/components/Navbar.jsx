import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="
        fixed
        top-5
        left-1/2
        -translate-x-1/2
        w-[90%]
        max-w-6xl
        px-6
        py-4
        rounded-2xl
        bg-white/10
        backdrop-blur-lg
        border
        border-white/20
        z-[100]
      "
    >
      <div className="flex justify-between items-center">
        {/* Logo */}

        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="
            text-xl
            md:text-2xl
            font-bold
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
            bg-clip-text
            text-transparent
            whitespace-nowrap
          "
        >
          Shenali Rathnayake
        </a>

        {/* Desktop Menu */}

        <div className="hidden md:flex gap-8 text-gray-300">
          {menu.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="
                relative
                hover:text-cyan-400
                transition-colors
                duration-300
              "
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social + Theme */}

        <div className="hidden md:flex items-center gap-4 text-xl">
          <ThemeToggle />

          <a
            href="https://github.com/ShenaliRathnayake"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Button */}

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="
            md:hidden
            text-2xl
            text-gray-200
            hover:text-cyan-400
            transition-colors
            duration-300
          "
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="
            md:hidden
            mt-5
            pt-5
            border-t
            border-white/10
            flex
            flex-col
            gap-5
            text-center
            text-gray-300
          "
        >
          {menu.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="
                hover:text-cyan-400
                transition-colors
                duration-300
              "
            >
              {item}
            </a>
          ))}

          {/* Mobile Social Links */}

          <div className="flex justify-center items-center gap-5 pt-2 text-xl">
            <ThemeToggle />

            <a
              href="https://github.com/ShenaliRathnayake"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;