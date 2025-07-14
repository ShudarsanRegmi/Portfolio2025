import { motion } from "framer-motion";
import { useState } from "react";
import { ProjectModal } from "@/components/ProjectModal";
import packetSniffer1 from "@/assets/packetsniffer1.png";
import classroom2 from "@/assets/classroom2.png";

const projects = [
  {
    id: "sniffer",
    title: "Network Packet Sniffer",
    description: "Packet sniffer written in C with detailed protocol-level filtering and network analysis capabilities.",
    image: packetSniffer1,
    tags: ["C", "Raw Sockets", "Network Protocols"],
    color: "text-[var(--accent-blue)]",
  },
  {
    id: "classroom",
    title: "Classroom Management System",
    description: "MERN Stack Project for Classroom Management. Rich in features including subject-specific resource management, class real-time updates, and notices.",
    image: classroom2,
    tags: ["React", "Node.js", "MongoDB", "Express", "Cloudinary"],
    color: "text-[var(--accent-purple)]",
  },
  {
    id: "ecommerce",
    title: "Fashion E-Commerce Website",
    description: "Complete e-commerce platform with user and admin functionality, featuring inventory management, order tracking, and sales analytics.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Python", "Flask", "SQLite", "JavaScript"],
    color: "text-[var(--accent-blue)]",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="project-card glass-panel rounded-3xl p-8 cursor-pointer relative group"
              onClick={() => setSelectedProject(project.id)}
            >

              
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-2xl mb-6 group-hover:brightness-110 transition-all duration-300"
              />
              <h3 className={`text-2xl font-bold mb-4 ${project.color} group-hover:text-[var(--accent-blue)] transition-colors duration-300`}>
                {project.title}
              </h3>
              <p className="text-[var(--secondary-text)] mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tech-badge glass-panel rounded-full px-3 py-1 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="text-xs text-[var(--secondary-text)] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                Click to view details →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <ProjectModal
          projectId={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
