import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="glass-panel rounded-3xl p-8 md:p-12"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-8 gradient-text"
          >
            About Me
          </motion.h2>
          
          <div className="space-y-6 text-lg text-[var(--secondary-text)]">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              I'm a full stack web developer with a passion for creating dynamic and responsive web applications. I enjoy working with both frontend and backend technologies, including React, Node.js, and MongoDB. In addition to web development, I'm deeply interested in cybersecurity and strive to implement secure coding practices in my projects. My goal is to build robust and secure applications that deliver a great user experience.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
