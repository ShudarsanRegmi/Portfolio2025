import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";

const projectDetails = {
  sniffer: {
    title: "Network Packet Sniffer",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    overview: "A comprehensive packet analysis tool built from scratch in C, designed to intercept and analyze network traffic at the protocol level. This project demonstrates deep understanding of network protocols and low-level programming.",
    features: [
      "Real-time packet capture using raw sockets",
      "Protocol-level filtering (TCP, UDP, ICMP)",
      "Packet header analysis and decoding",
      "Traffic statistics and visualization",
      "Command-line interface with filtering options",
    ],
    tech: {
      "Language": "C",
      "Sockets": "Raw Socket Programming",
      "Protocols": "TCP/UDP",
      "Platform": "Linux/Unix",
    },
  },
  classroom: {
    title: "Classroom Management System",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    overview: "A full-stack MERN application designed to streamline classroom management with real-time communication, file sharing, and comprehensive dashboards for both teachers and students.",
    features: [
      "Real-time messaging and notifications",
      "File upload and sharing system",
      "Subject-specific dashboards",
      "Assignment submission and grading",
      "Attendance tracking system",
      "Role-based access control",
    ],
    tech: {
      "Frontend": "React + Tailwind CSS",
      "Backend": "Node.js + Express",
      "Database": "MongoDB",
    },
  },
  ecommerce: {
    title: "Fashion E-Commerce Website",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=600",
    overview: "A comprehensive e-commerce platform featuring both user and admin functionality, with complete product catalog management, order processing, and analytics visualization.",
    features: [
      "Product catalog with filtering by category, size, and price",
      "Shopping cart with add, update, and remove functionality",
      "Secure checkout and order management system",
      "Admin inventory management (add, edit, delete products)",
      "Order tracking and management for admins",
      "Sales analytics with Matplotlib visualization",
      "User authentication and profile management",
      "Customer reviews and ratings system",
    ],
    tech: {
      "Backend": "Python + Flask",
      "Frontend": "HTML/CSS + JavaScript",
      "Database": "SQLite3 + SQLAlchemy",
      "Analytics": "Matplotlib",
      "Migration": "Flask-Migrate",
    },
  },

};

interface ProjectModalProps {
  projectId: string;
  onClose: () => void;
}

export function ProjectModal({ projectId, onClose }: ProjectModalProps) {
  const project = projectDetails[projectId as keyof typeof projectDetails];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 50 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="glass-panel dark:glass-panel light:glass-panel-light rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl border border-border"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-3xl font-bold gradient-text">{project.title}</h3>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 transition-all duration-300"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          <div className="space-y-6">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-2xl"
            />
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-bold mb-4 text-[var(--accent-blue)]">
                  Project Overview
                </h4>
                <p className="text-muted-foreground mb-6">
                  {project.overview}
                </p>
                
                <h4 className="text-xl font-bold mb-4 text-[var(--accent-blue)]">
                  Key Features
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  {project.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 text-[var(--accent-purple)]">
                  Technical Details
                </h4>
                <div className="space-y-3">
                  {Object.entries(project.tech).map(([key, value]) => (
                    <div key={key} className="glass-panel dark:glass-panel light:glass-panel-light rounded-xl p-3 bg-background/50">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">{key}</span>
                        <span className="font-medium text-foreground">{value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
