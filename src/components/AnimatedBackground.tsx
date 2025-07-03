import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <motion.div
        className="floating-bg w-96 h-96 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 -top-48 -left-48"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="floating-bg w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 top-1/4 right-0"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="floating-bg w-64 h-64 bg-gradient-to-r from-blue-500/30 to-purple-500/30 bottom-0 left-1/4"
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
}
