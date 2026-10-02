import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative px-6 py-12 border-t border-white/10 overflow-hidden">
      {/* Background glow */}

      <div className="
        absolute
        inset-0
        bg-gradient-to-r
        from-cyan-500/5
        via-transparent
        to-purple-500/5
      " />

      <div className="relative max-w-6xl mx-auto text-center">
        <h3 className="
          text-2xl
          font-bold
          bg-gradient-to-r
          from-cyan-400
          to-purple-500
          bg-clip-text
          text-transparent
          mb-4
        ">
          Shenali Rathnayake
        </h3>

        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Software Engineer & Frontend Developer passionate about creating
          modern, scalable, and interactive web experiences.
        </p>

        {/* Social Links */}

        <div className="flex justify-center gap-6 text-2xl mb-8">
          <a
            href="https://github.com/ShenaliRathnayake"
            target="_blank"
            rel="noreferrer"
            className="
              p-3
              rounded-full
              bg-white/10
              border
              border-white/20
              hover:bg-cyan-500/20
              hover:scale-110
              transition
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="
              p-3
              rounded-full
              bg-white/10
              border
              border-white/20
              hover:bg-cyan-500/20
              hover:scale-110
              transition
            "
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:your-email@example.com"
            className="
              p-3
              rounded-full
              bg-white/10
              border
              border-white/20
              hover:bg-cyan-500/20
              hover:scale-110
              transition
            "
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="
          pt-6
          border-t
          border-white/10
          text-gray-500
          text-sm
        ">
          © {new Date().getFullYear()} Shenali Rathnayake. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;