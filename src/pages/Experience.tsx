import { motion } from "framer-motion";
import { Building } from "lucide-react";

export default function Experience() {
  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          Experience
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          className="glass-panel rounded-3xl p-8"
        >
          <div className="flex items-center space-x-6 mb-6">
            <motion.div
              whileHover={{ rotate: 10 }}
              className="w-20 h-20 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-2xl flex items-center justify-center"
            >
              <Building className="w-10 h-10 text-white" />
            </motion.div>
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="text-2xl font-bold"
              >
                Software Development Intern
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="text-xl text-[var(--accent-blue)]"
              >
                SpringBoard
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                className="text-[var(--secondary-text)]"
              >
                June 2023 - August 2023
              </motion.p>
            </div>
          </div>
          
          <div className="space-y-4 text-[var(--secondary-text)]">
            {[
              "Developed and maintained full-stack web applications using React and Node.js",
              "Implemented secure authentication systems and API endpoints",
              "Collaborated with cross-functional teams to deliver high-quality software solutions",
              "Conducted code reviews and contributed to improving development processes",
              "Gained hands-on experience with cloud deployment and CI/CD pipelines",
            ].map((item, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + index * 0.1, 
                  ease: "easeOut" 
                }}
              >
                • {item}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
