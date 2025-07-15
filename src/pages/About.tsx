import { motion } from "framer-motion";
import { Code, Shield, Coffee, Mountain, Star, Zap, Users, Heart, Server } from "lucide-react";
import { Dribbble, Video, Music2, Globe, BookOpen, Activity } from 'lucide-react';


export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Floating Background Elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-20 h-20 glass-panel rounded-full opacity-20 hidden lg:block"
      />
      <motion.div
        animate={{
          y: [0, 25, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-40 left-16 w-16 h-16 glass-panel rounded-full opacity-15 hidden lg:block"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/2 left-10 w-12 h-12 glass-panel rounded-full opacity-10 hidden lg:block"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute top-1/3 right-10 w-14 h-14 glass-panel rounded-full opacity-25 hidden lg:block"
      />
      
      <div className="max-w-4xl mx-auto relative z-10">
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

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="pt-8"
            >
              <h3 className="text-2xl font-semibold mb-6">Fun Facts</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    { icon: Dribbble, text: "Loves to play cricket", color: "text-lime-500" },
                    { icon: Video, text: "Pursuing content creation on YouTube", color: "text-rose-500" },
                    { icon: Music2, text: "Enjoys listening to music", color: "text-indigo-400" },
                    { icon: Globe, text: "Enjoys learning new languages", color: "text-sky-500" },
                    { icon: BookOpen, text: "Enjoys reading self-help and personal growth books", color: "text-amber-500" },

                  
                ].map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="glass-panel p-4 rounded-lg flex items-center gap-3 hover:bg-white/10 transition-all duration-300"
                  >
                    <fact.icon className={`w-6 h-6 ${fact.color}`} />
                    <span className="text-sm">{fact.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="pt-8"
            >
              <h3 className="text-2xl font-semibold mb-6">Core Skills</h3>
              <div className="space-y-4">
                {[
                  { name: "Frontend Development", level: 90, icon: Code, color: "var(--accent-blue)" },
                  { name: "Backend Development", level: 85, icon: Zap, color: "var(--accent-purple)" },
                  { name: "Cybersecurity", level: 75, icon: Shield, color: "#10b981" },
                  { name: "System Administration / Cloud Computing", level: 75, icon: Server, color: "#3b82f6" },
                  { name: "Team Collaboration", level: 80, icon: Users, color: "#f59e0b" }
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5" style={{ color: skill.color }} />
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-[var(--secondary-text)] ml-auto">{skill.level}%</span>
                    </div>
                    <div className="glass-panel rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 1.2 + index * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="pt-8"
            >
              <h3 className="text-2xl font-semibold mb-4">Timeline</h3>
              <ol className="border-l-2 border-primary pl-6">
              <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-secondary-text">Pursuing</time>
                  <h4 className="text-lg font-semibold">Joined B-Tech - CyberSecurity
                  </h4>
                  <p className="text-base font-normal text-secondary-text">Currently maintaining a CGPA of 9.01, demonstrating strong academic performance in B.Tech – Cybersecurity


</p>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-secondary-text">2023</time>
                  <h4 className="text-lg font-semibold">Graduated from Higher Secondary School</h4>
                  <p className="text-base font-normal text-secondary-text">Achieved a 3.72 GPA, reflecting solid academic performance in the Science stream + Computer Science

</p>
                </li>
                <li className="mb-10 ml-4">
                  <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-white"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-secondary-text">2021</time>
                  <h4 className="text-lg font-semibold">Graduated from Secondary School
                  </h4>
                  <p className="text-base font-normal text-secondary-text">Achieved a perfect 4.0 GPA, demonstrating strong academic performance in Grade 10

</p>
                </li>
              </ol>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
