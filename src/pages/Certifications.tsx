import { motion } from "framer-motion";
import { ShieldCheck, Brain, ExternalLink } from "lucide-react";
import { useState } from "react";
import { CertificationModal } from "@/components/CertificationModal";

const certifications = [
  {
    id: "redhat",
    icon: ShieldCheck,
    title: "Red Hat System Administration Training",
    description: "Advanced Linux system administration and security hardening",
    issuer: "Red Hat",
    date: "March 2024",
    color: "text-[var(--accent-blue)]",
    bgColor: "bg-[var(--accent-blue)]/20",
  },
  {
    id: "llm",
    icon: Brain,
    title: "Udemy: LLM Security Course",
    description: "Security implications and best practices for AI/ML systems",
    issuer: "Udemy",
    date: "January 2024",
    color: "text-[var(--accent-purple)]",
    bgColor: "bg-[var(--accent-purple)]/20",
  },
];

export default function Certifications() {
  const [selectedCertification, setSelectedCertification] = useState<string | null>(null);

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          Certifications
        </motion.h2>
        
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.3, 
                ease: "easeOut" 
              }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="glass-panel rounded-3xl p-8 cursor-pointer relative group"
              onClick={() => setSelectedCertification(cert.id)}
            >
              {/* Clickable indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 bg-[var(--accent-blue)] rounded-full flex items-center justify-center"
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                </motion.div>
              </div>

              <div className="flex items-center space-x-6">
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`w-16 h-16 ${cert.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <cert.icon className={`w-8 h-8 ${cert.color}`} />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold group-hover:text-[var(--accent-blue)] transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">{cert.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="font-medium">{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>

              {/* Click hint */}
              <div className="mt-4 text-xs text-muted-foreground opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                Click to view certificate details and verification →
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedCertification && (
        <CertificationModal
          certificationId={selectedCertification}
          onClose={() => setSelectedCertification(null)}
        />
      )}
    </section>
  );
}
