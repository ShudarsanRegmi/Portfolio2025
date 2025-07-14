import { motion, AnimatePresence } from "framer-motion";
import { X, Github } from "lucide-react";
import { useEffect } from "react";
import packetSniffer1 from '@/assets/packetsniffer1.png';
import classroom1 from '@/assets/classroom1.png';
import vox1 from "@/assets/vox1_1.png";


const projectDetails = {
  sniffer: {
    title: "Network Packet Sniffer",
    image: packetSniffer1,
    overview: "A comprehensive packet sniffer tool built from scratch in C, designed to intercept and analyze network traffic at the protocol level. This project demonstrates deep understanding of network protocols and low-level programming.",
    features: [
      "Real-time packet capture using raw sockets",
      "Protocol-level filtering (TCP, UDP)",
      "Packet header analysis and decoding",
      // "Traffic statistics and visualization",
      "Command-line interface with filtering options",
    ],
    tech: {
      "Language": "C",
      "Sockets": "Raw Socket Programming",
      "Protocols": "TCP/UDP",
      "Platform": "Linux/Unix",
    },
    github: "https://github.com/ShudarsanRegmi/packetSniffer",
  },
  classroom : {
    title: "Classroom Management System",
    image: classroom1,
    overview: "A full-stack MERN application designed to simplify classroom operations through centralized communication, content sharing, attendance tracking, and role-based access control.",
    features: [
      "Class announcements and notifications",
      "Subject-wise material management",
      "Auto attendance tracking system",
      "Role-based access for students, CRs, and admins",
      "Exam scheduling and event organization",
      "PWA support for offline and mobile-friendly access"
    ],
    tech: {
      Frontend: "React.js + Material UI + Tailwind CSS",
      Backend: "Node.js + Express.js",
      Database: "MongoDB",
      Auth: "Firebase Authentication",
      Storage: "Cloudinary",
      Additional: "PWA, Docker"
    },
    github: "https://github.com/ShudarsanRegmi/ClassMgmtSys"
  },
  ecommerce: {
    title: "Fashion E-Commerce Website",
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1200&h=600&q=80",
    overview: "A fully functional fashion e-commerce platform built as part of an internship project. Features include product browsing, user authentication, shopping cart, order management, and admin-side analytics for sales and inventory.",
    features: [
      "User authentication and product browsing",
      "Shopping cart and secure checkout",
      "Admin dashboard with inventory management",
      "Order tracking and sales analytics with Matplotlib"
    ],
    tech: {
      Frontend: "HTML, CSS, JavaScript",
      Backend: "Python + Flask",
      Database: "SQLite + SQLAlchemy",
      Visualization: "Matplotlib"
    },
    github: "https://github.com/ShudarsanRegmi/InfoSys-SpringBoard-Fashion-Ecommerce-Project"
  },

  voxtalkinux: {
  title: "VoxTalkinux – Minimal Voice Transcription Utility",
  image: vox1,
  overview: "A lightweight voice transcription tool designed for Linux, built around OpenAI Whisper. It wraps Whisper into a streamlined interface with support for background execution (via systemd), clipboard integration (xclip), and quick access through a keyboard shortcut. Ideal for users seeking fast and offline transcription workflows.",
  features: [
    "Offline transcription using OpenAI Whisper",
    "Systemd service for background listening",
    "Clipboard integration with xclip",
    "Triggerable via global keyboard shortcut",
    "Adaptable to Windows with minor environment tweaks"
  ],
  tech: {
    "Language": "Python",
    "Speech-to-Text": "OpenAI Whisper",
    "OS Integration": "Systemd, Xclip, Keyboard Shortcuts",
    "Platform": "Linux (Desktop)"
  },
  github: "https://github.com/ShudarsanRegmi/voxtalkinux/"
}
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

            {project.github && (
              <div className="pt-6 border-t border-border flex justify-end">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
