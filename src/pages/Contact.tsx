import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Youtube } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    alert("");
  };


  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="glass-panel rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  value: "shudarsanregmi555@gmail.com",
                  href: "mailto:shudarsanregmi555@gmail.com",
                  color: "text-[var(--accent-blue)]",
                  bgColor: "bg-[var(--accent-blue)]/20",
                },
                {
                  icon: Github,
                  title: "GitHub",
                  value: "@ShudarsanRegmi",
                  href: "https://github.com/ShudarsanRegmi",
                  color: "text-[var(--accent-purple)]",
                  bgColor: "bg-[var(--accent-purple)]/20",
                },
                {
                  icon: Linkedin,
                  title: "LinkedIn",
                  value: "@shudarsanregmi",
                  href: "https://www.linkedin.com/in/shudarsanregmi/",
                  color: "text-[var(--accent-blue)]",
                  bgColor: "bg-[var(--accent-blue)]/20",
                },
                {
                  icon: Youtube,
                  title: "Youtube",
                  value: "@binaryeverest",
                  href: "https://www.youtube.com/@binaryeverest",
                  color: "text-[var(--accent-blue)]",
                  bgColor: "bg-[var(--accent-blue)]/20",
                },
              ].map((contact, index) => (
                <motion.a
                  key={contact.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.4 + index * 0.1, 
                    ease: "easeOut" 
                  }}
                  whileHover={{ scale: 1.02 }}
                  href={contact.href}
                  className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 block"
                >
                  <div className={`w-12 h-12 ${contact.bgColor} rounded-xl flex items-center justify-center`}>
                    <contact.icon className={`w-6 h-6 ${contact.color}`} />
                  </div>
                  <div>
                    <p className="font-medium">{contact.title}</p>
                    <p className="text-[var(--secondary-text)]">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="glass-panel rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 rounded-2xl glass-panel border-0 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] text-[var(--primary-text)] placeholder-[var(--secondary-text)] bg-transparent"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-4 rounded-2xl glass-panel border-0 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] text-[var(--primary-text)] placeholder-[var(--secondary-text)] bg-transparent"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 rounded-2xl glass-panel border-0 focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] text-[var(--primary-text)] placeholder-[var(--secondary-text)] resize-none bg-transparent"
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full p-4 rounded-2xl bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] text-white font-medium hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
