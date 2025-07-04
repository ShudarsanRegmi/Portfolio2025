import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Calendar, Award, BookOpen } from "lucide-react";
import { useEffect } from "react";

const certificationDetails = {
  redhat: {
    title: "Red Hat System Administration Training",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    certificateImage: "https://images.unsplash.com/photo-1606277719404-9d5c96e57f43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    issuer: "Red Hat",
    issueDate: "March 2024",
    validUntil: "March 2027",
    credentialId: "RH-SA-2024-03-15789",
    overview: "Comprehensive training in Red Hat Enterprise Linux system administration, covering advanced security hardening, network configuration, and enterprise-level system management.",
    areasConvered: [
      "Linux System Administration",
      "Security Hardening & SELinux",
      "Network Services Configuration",
      "Storage Management & LVM",
      "System Monitoring & Performance Tuning",
      "Shell Scripting & Automation",
      "Package Management & Updates",
      "Firewall Configuration & iptables"
    ],
    skills: {
      "Operating Systems": "RHEL 8/9, CentOS",
      "Security": "SELinux, Firewall, Access Controls",
      "Networking": "DNS, DHCP, SSH, VPN",
      "Storage": "LVM, RAID, File Systems",
    },
    verificationUrl: "https://rhtapps.redhat.com/verify",
  },
  llm: {
    title: "LLM Security Course",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    certificateImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    issuer: "Udemy",
    issueDate: "January 2024",
    validUntil: "Lifetime Access",
    credentialId: "UC-ai-sec-2024-01-4567",
    overview: "Specialized course focusing on security implications and best practices for Large Language Models and AI systems, covering prompt injection, data privacy, and secure AI deployment.",
    areasConvered: [
      "AI/ML Security Fundamentals",
      "Prompt Injection Prevention",
      "Data Privacy in AI Systems",
      "Model Security & Adversarial Attacks",
      "Secure AI Development Lifecycle",
      "Ethics in AI & Responsible AI",
      "AI Governance & Compliance",
      "Threat Modeling for AI Systems"
    ],
    skills: {
      "AI Security": "Prompt Engineering, Model Protection",
      "Privacy": "Data Anonymization, GDPR Compliance",
      "Development": "Secure Coding for AI, Testing",
      "Governance": "Risk Assessment, Policy Development",
    },
    verificationUrl: "https://www.udemy.com/certificate/verify",
  },
};

interface CertificationModalProps {
  certificationId: string;
  onClose: () => void;
}

export function CertificationModal({ certificationId, onClose }: CertificationModalProps) {
  const certification = certificationDetails[certificationId as keyof typeof certificationDetails];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!certification) return null;

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
          className="glass-panel dark:glass-panel light:glass-panel-light rounded-3xl p-8 max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl border border-border"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-4">
              <Award className="w-8 h-8 text-[var(--accent-blue)]" />
              <h3 className="text-3xl font-bold gradient-text">{certification.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/10 transition-all duration-300"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>
          </div>

          <div className="space-y-8">
            {/* Hero Image */}
            <img
              src={certification.image}
              alt={certification.title}
              className="w-full h-64 object-cover rounded-2xl"
            />
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Certificate Details */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-[var(--accent-blue)] flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Certification Overview
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    {certification.overview}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4 text-[var(--accent-blue)]">
                    Areas Covered
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {certification.areasConvered.map((area, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-3 glass-panel rounded-xl"
                      >
                        <div className="w-2 h-2 bg-[var(--accent-blue)] rounded-full"></div>
                        <span className="text-muted-foreground text-sm">{area}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Skills & Technologies */}
                <div>
                  <h4 className="text-xl font-bold mb-4 text-[var(--accent-purple)]">
                    Skills & Technologies
                  </h4>
                  <div className="space-y-3">
                    {Object.entries(certification.skills).map(([category, skills]) => (
                      <div key={category} className="glass-panel dark:glass-panel light:glass-panel-light rounded-xl p-4 bg-background/50">
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <span className="text-muted-foreground font-medium mb-1 md:mb-0">{category}</span>
                          <span className="text-foreground text-sm">{skills}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Certificate Image & Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold mb-4 text-[var(--accent-purple)]">
                    Certificate
                  </h4>
                  <img
                    src={certification.certificateImage}
                    alt="Certificate"
                    className="w-full rounded-xl shadow-lg border border-border"
                  />
                </div>

                <div className="space-y-4">
                  <div className="glass-panel rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Calendar className="w-4 h-4 text-[var(--accent-blue)]" />
                      <span className="font-medium">Issue Date</span>
                    </div>
                    <p className="text-muted-foreground">{certification.issueDate}</p>
                  </div>

                  <div className="glass-panel rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <Award className="w-4 h-4 text-[var(--accent-purple)]" />
                      <span className="font-medium">Valid Until</span>
                    </div>
                    <p className="text-muted-foreground">{certification.validUntil}</p>
                  </div>

                  <div className="glass-panel rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="font-medium">Credential ID</span>
                    </div>
                    <p className="text-muted-foreground text-sm font-mono">{certification.credentialId}</p>
                  </div>

                  <motion.a
                    href={certification.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center space-x-2 w-full p-4 rounded-xl bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] text-white font-medium hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Verify Certificate</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}