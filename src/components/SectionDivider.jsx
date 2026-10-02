import { motion } from "framer-motion";

function SectionDivider() {
  return (
    <div className="flex justify-center py-8">
      <motion.div
        animate={{
          scaleX: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          h-px
          w-40
          bg-gradient-to-r
          from-transparent
          via-cyan-400
          to-transparent
        "
      />
    </div>
  );
}

export default SectionDivider;