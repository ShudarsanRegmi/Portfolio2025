import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';
import { Building, X } from "lucide-react";
import infosyscert from "@/assets/infosyscert.png";
import classroom2 from "@/assets/classroom2.png";



export default function Experience() {
  const [showModal, setShowModal] = useState(false);

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
                InfoSys SpringBoard
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
                className="text-[var(--secondary-text)]"
              >
                November 2024 - January 2025
              </motion.p>
            </div>
          </div>
          
          <div className="space-y-4 text-[var(--secondary-text)]">
              {[
                "Completed a 2-month virtual internship as a Python Development Intern at Infosys Springboard",
                "Led a cross-functional team as Product Owner and Team Leader, managing sprint planning and task assignments",
                "Developed backend features including user authentication and order management using Flask and SQLite",
                "Coordinated code integration across sub-teams, resolving merge conflicts and aligning modules",
                "Built a role-based fashion e-commerce platform with dashboards for customers, admins, and delivery partners",
                "Utilized technologies including Flask, SQLite, HTML, CSS, JavaScript, and Bootstrap",
                "Ensured timely collaboration and delivery through effective team leadership and communication"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + index * 0.1, 
                    ease: "easeOut" 
                  }}
                  className="flex items-start space-x-3"
                >
                  <span className="text-[var(--accent-blue)] font-bold text-lg mt-1 flex-shrink-0">•</span>
                  <span className="leading-relaxed">{item}</span>
                </motion.div>
            ))}
          </div>
          <button
            className="mt-12 p-4 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300"
            onClick={() => setShowModal(true)}
          >
            View Certificate
          </button>

          {showModal && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                onClick={() => setShowModal(false)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 50 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="glass-panel rounded-3xl p-8 max-w-2xl w-full bg-background/95 backdrop-blur-xl border border-border"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold gradient-text">Certificate</h3>
                    <button
                      onClick={() => setShowModal(false)}
                      className="p-2 rounded-xl hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 transition-all duration-300"
                    >
                      <X className="w-6 h-6 text-foreground" />
                    </button>
                  </div>
                  <img
                    src={infosyscert}
                    alt="Infosys springboard certificate"
                    className="w-full h-auto rounded-xl"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </section>
  );
}
