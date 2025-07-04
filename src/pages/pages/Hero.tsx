import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Code, Shield, ArrowDown, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export default function Hero() {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-24">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Main Content */}
      <div className="text-center z-10 max-w-6xl">
        {/* Profile Image with Greeting */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="relative mb-8 profile-image-container w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
          >
            <div className="profile-image w-full h-full">
              <motion.img
                src="https://shudarsan.netlify.app/profile.jpeg"
                alt="Shudarsan Regmi - Profile"
                className="w-full h-full object-cover rounded-full"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </div>
            {/* Multiple animated rings around profile */}
            <motion.div
              className="absolute -inset-2 rounded-full border border-[var(--accent-blue)]/40"
              animate={{ 
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -inset-4 rounded-full border border-[var(--accent-purple)]/30"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
          
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
            className="inline-block text-3xl mb-4"
          >
            👋
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground"
          >
            Hello, I'm
          </motion.p>
        </motion.div>

        {/* Name with Enhanced Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 gradient-text relative"
        >
          <span className="relative inline-block">
            Shudarsan Regmi
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-full"
            />
          </span>
        </motion.h1>
        
        {/* Enhanced Role Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex items-center gap-3 glass-panel px-6 py-3 rounded-full"
            >
              <Code className="w-5 h-5 text-[var(--accent-blue)]" />
              <span className="text-lg font-medium">Full-Stack Developer</span>
            </motion.div>
            <span className="text-muted-foreground hidden md:block">•</span>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              className="flex items-center gap-3 glass-panel px-6 py-3 rounded-full"
            >
              <Shield className="w-5 h-5 text-[var(--accent-purple)]" />
              <span className="text-lg font-medium">Security Enthusiast</span>
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Crafting secure, scalable web applications with a passion for clean code 
            and cutting-edge cybersecurity practices. Always learning, always building.
          </motion.p>
        </motion.div>
        
        {/* Enhanced Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex justify-center gap-6 mb-12"
        >
          {[
            { icon: Github, href: "https://github.com/ShudarsanRegmi", color: "hover:text-gray-300" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/shudarsanregmi/", color: "hover:text-blue-400" },
            { icon: Mail, href: "mailto:shudarsanregmi555@gmail.com", color: "hover:text-green-400" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
              whileHover={{ 
                scale: 1.2, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
              className={`glass-panel p-4 rounded-2xl transition-all duration-300 ${social.color} group relative`}
            >
              <social.icon className="w-6 h-6" />
              <motion.div 
                className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              >
                <Sparkles className="w-4 h-4 text-[var(--accent-blue)]" />
              </motion.div>
            </motion.a>
          ))}
        </motion.div>
        
        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative group bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] text-white px-8 py-4 rounded-2xl text-lg font-medium overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3 justify-center">
                <Code className="w-5 h-5" />
                Explore My Work
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-blue)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className="glass-panel px-8 py-4 rounded-2xl text-lg font-medium hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 transition-all duration-300 flex items-center gap-3 justify-center"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-muted-foreground hover:text-[var(--accent-blue)] transition-colors duration-300 cursor-pointer"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 right-20 w-20 h-20 glass-panel rounded-full opacity-30 hidden lg:block"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-32 left-20 w-16 h-16 glass-panel rounded-full opacity-20 hidden lg:block"
      />
    </section>
  );
}
