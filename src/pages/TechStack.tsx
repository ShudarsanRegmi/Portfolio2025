import { motion } from "framer-motion";

const primaryTech = [
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E34F26"
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "#1572B6"
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E"
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB"
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "#06B6D4"
  },
  {
    name: "Material-UI",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    color: "#007FFF"
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#339933"
  },
  {
    name: "Flask",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    color: "#000000"
  },
  {
    name: "PHP",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    color: "#777BB4"
  }
];

const programmingLanguages = [
  {
    name: "C",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    color: "#A8B9CC"
  },
  {
    name: "C++",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    color: "#00599C"
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB"
  }
];

const additionalTools = [
  {
    name: "Vite",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    color: "#646CFF"
  },
  {
    name: "React Router",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#CA4245"
  },
  {
    name: "JWT",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jwt/jwt-original.svg",
    color: "#000000"
  },
  {
    name: "NPM",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
    color: "#CB3837"
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "#000000"
  },
  {
    name: "Postman",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    color: "#FF6C37"
  },
  {
    name: "ESLint",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
    color: "#4B32C3"
  },
  {
    name: "CMake",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg",
    color: "#064F8C"
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032"
  },
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    color: "#007ACC"
  }
];

export default function TechStack() {
  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          Tech Stack
        </motion.h2>

        <div className="space-y-12">
          {/* Primary Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--accent-blue)]">
              Primary Technologies
            </h3>
            <div className="glass-panel rounded-3xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {primaryTech.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.4 + index * 0.1, 
                      ease: "easeOut" 
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="tech-badge glass-panel rounded-2xl p-4 cursor-pointer group flex flex-col items-center space-y-3 hover:shadow-lg"
                    style={{
                      boxShadow: `0 0 0 1px ${tech.color}20`,
                    }}
                  >
                    <div 
                      className="w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${tech.color}15`,
                        border: `1px solid ${tech.color}30`
                      }}
                    >
                      <img 
                        src={tech.logo} 
                        alt={tech.name}
                        className="w-8 h-8 object-contain"
                        style={{
                          filter: 'brightness(1.1) contrast(1.1)'
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-center group-hover:text-[var(--accent-blue)] transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Programming Languages */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--accent-purple)]">
              Programming Languages
            </h3>
            <div className="glass-panel rounded-3xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {programmingLanguages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.6 + index * 0.1, 
                      ease: "easeOut" 
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="tech-badge glass-panel rounded-2xl p-4 cursor-pointer group flex flex-col items-center space-y-3 hover:shadow-lg"
                    style={{
                      boxShadow: `0 0 0 1px ${lang.color}20`,
                    }}
                  >
                    <div 
                      className="w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${lang.color}15`,
                        border: `1px solid ${lang.color}30`
                      }}
                    >
                      <img 
                        src={lang.logo} 
                        alt={lang.name}
                        className="w-8 h-8 object-contain"
                        style={{
                          filter: 'brightness(1.1) contrast(1.1)'
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-center group-hover:text-[var(--accent-purple)] transition-colors duration-300">
                      {lang.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Additional Tools */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold mb-6 text-[var(--accent-purple)]">
              Additional Tools
            </h3>
            <div className="glass-panel rounded-3xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                {additionalTools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.8 + index * 0.1, 
                      ease: "easeOut" 
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="tech-badge glass-panel rounded-2xl p-4 cursor-pointer group flex flex-col items-center space-y-3 hover:shadow-lg"
                    style={{
                      boxShadow: `0 0 0 1px ${tool.color}20`,
                    }}
                  >
                    <div 
                      className="w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${tool.color}15`,
                        border: `1px solid ${tool.color}30`
                      }}
                    >
                      <img 
                        src={tool.logo} 
                        alt={tool.name}
                        className="w-8 h-8 object-contain"
                        style={{
                          filter: tool.name === 'Next.js' || tool.name === 'Flask' ? 'brightness(0) invert(1)' : 'brightness(1.1) contrast(1.1)'
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium text-center group-hover:text-[var(--accent-purple)] transition-colors duration-300">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


// Security Tools

/*
Burpsuite, netcat, Wireshark, Nmap, Metasploit, sqlmap, Nikto, John the Ripper, Ghidra, Radare2
*/

/*
AI:
ChatGPT, Copilot, Codeium, Tabnine, Replit AI, OpenAI Codex, DeepCode
Cloud Platforms: Azure, AWS, Vercel, Firebase
*/


/*
Machine Learning: sikit-learn, TensorFlow, Keras, Hugging Face
*/


// Database Technologies
/*
MongoDB, MySQL, PostgreSQL, SQLite, Firebase Realtime Database
*/

// DevOps Tools
/*
Github Actions, Docker
*/

