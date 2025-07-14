import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink, Trophy, Calendar, Star } from "lucide-react";
import { useEffect, useState } from "react";
import second_sem_img_1 from "@/assets/second_sem_rank1_1.jpeg";
import second_sem_img_2 from "@/assets/second_sem_rank1_2.jpeg";
import second_sem_img_3 from "@/assets/second_sem_rank1_3.jpeg";

const achievementDetails = {
  semester1: {
    title: "3rd Rank in 1st Semester",
    subtitle: "Academic Excellence Foundation",
    date: "First Semester 2023",
    rank: "3rd Position",
    description: "Achieved 3rd position in first semester with strong performance in foundational computer science courses. This achievement marked the beginning of consistent academic excellence.",
    highlights: [
      "Strong foundation in programming fundamentals",
      "Excellent performance in mathematics and logic",
      "Active participation in coding assignments",
      "Consistent study habits and time management",
      "Leadership in group projects and discussions"
    ],
    subjects: [
      { name: "Programming Fundamentals", grade: "A" },
      { name: "Mathematics I", grade: "A-" },
      { name: "Computer Organization", grade: "A" },
      { name: "Digital Logic", grade: "A-" },
      { name: "English Communication", grade: "A" }
    ],
    images: [
      second_sem_img_1,
      second_sem_img_2,
      second_sem_img_3
    ],
    gpa: "8.7",
    recognition: "Merit Certificate for Top 3 Performance",
    impact: "This achievement boosted confidence and set the foundation for future academic success. It demonstrated strong analytical skills and dedication to learning.",
    links: [
      { title: "Merit Certificate", url: "#" }
    ]
  },
  semester2: {
    title: "1st Rank in 2nd Semester",
    subtitle: "Outstanding Academic Achievement",
    date: "Second Semester 2024", 
    rank: "1st Position",
    description: "Secured 1st position in second semester with exceptional SGPA of 9.34. A wonderful semester with outstanding academic performance across all subjects.",
    highlights: [
      "Perfect attendance and active class participation",
      "Exceptional performance in advanced programming",
      "Leadership in technical projects and presentations",
      "Mentoring fellow students in difficult subjects",
      "Outstanding project submissions and practical work"
    ],
    subjects: [
      { name: "Data Structures & Algorithms", grade: "A+" },
      { name: "Object Oriented Programming", grade: "A+" },
      { name: "Database Management", grade: "A" },
      { name: "Computer Networks", grade: "A+" },
      { name: "Software Engineering", grade: "A" }
    ],
    images: [
      "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    gpa: "9.34",
    recognition: "Dean's List Recognition & Gold Medal",
    impact: "This achievement demonstrated mastery of advanced concepts and established leadership within the academic community. The high SGPA reflected deep understanding and consistent excellence.",
    links: [
      { title: "Dean's List Certificate", url: "#" },
      { title: "Academic Transcript", url: "#" }
    ]
  },
  research: {
    title: "Research Publication",
    subtitle: "Cybersecurity & Application Development",
    date: "2024",
    rank: "Co-author",
    description: "Co-authored a research paper focusing on cybersecurity and modern application development practices. The research explores security vulnerabilities in contemporary web applications.",
    highlights: [
      "In-depth analysis of web application security",
      "Novel approaches to vulnerability assessment",
      "Practical implementation of security measures",
      "Collaboration with industry experts",
      "Peer review and academic validation"
    ],
    subjects: [
      { name: "Research Area", grade: "Cybersecurity" },
      { name: "Focus", grade: "Web Applications" },
      { name: "Methodology", grade: "Empirical Analysis" },
      { name: "Impact Factor", grade: "High" }
    ],
    images: [
      "https://images.unsplash.com/photo-1532153955177-f59af40d6472?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
    ],
    gpa: "Published",
    recognition: "Academic Research Publication",
    impact: "This publication contributes to the cybersecurity community and demonstrates research capabilities beyond coursework. It establishes credibility in the field and opens doors for future research opportunities.",
    links: [
      { title: "Research Paper", url: "#" },
      { title: "Conference Proceedings", url: "#" }
    ]
  }
};

interface AchievementModalProps {
  achievementId: string;
  onClose: () => void;
}

export function AchievementModal({ achievementId, onClose }: AchievementModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const achievement = achievementDetails[achievementId as keyof typeof achievementDetails];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!achievement) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % achievement.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + achievement.images.length) % achievement.images.length);
  };

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
          initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="glass-panel rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-xl border border-border relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-background/95 backdrop-blur-xl p-6 border-b border-border rounded-t-3xl">
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-2xl flex items-center justify-center"
                >
                  <Trophy className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-bold gradient-text">{achievement.title}</h3>
                  <p className="text-lg text-muted-foreground">{achievement.subtitle}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="flex items-center space-x-2 text-[var(--accent-blue)]">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{achievement.date}</span>
                    </span>
                    <span className="flex items-center space-x-2 text-[var(--accent-purple)]">
                      <Star className="w-4 h-4" />
                      <span className="text-sm">{achievement.rank}</span>
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>
            </div>
          </div>

          <div className="p-6 space-y-8">
            {/* Image Carousel */}
            <div className="relative">
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <motion.img
                  key={currentImageIndex}
                  src={achievement.images[currentImageIndex]}
                  alt={`${achievement.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {achievement.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all duration-300"
                    >
                      <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                  </>
                )}
              </div>
              
              {achievement.images.length > 1 && (
                <div className="flex justify-center space-x-2 mt-4">
                  {achievement.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-[var(--accent-blue)]' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Overview */}
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-[var(--accent-blue)]">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4 text-[var(--accent-blue)]">Key Highlights</h4>
                  <div className="space-y-3">
                    {achievement.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3 p-3 glass-panel rounded-xl"
                      >
                        <div className="w-2 h-2 bg-[var(--accent-purple)] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4 text-[var(--accent-purple)]">Impact & Recognition</h4>
                  <div className="glass-panel p-4 rounded-xl">
                    <p className="text-muted-foreground leading-relaxed">{achievement.impact}</p>
                    <div className="mt-4 p-3 bg-gradient-to-r from-[var(--accent-blue)]/10 to-[var(--accent-purple)]/10 rounded-lg">
                      <p className="font-medium text-[var(--accent-blue)]">{achievement.recognition}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Sidebar */}
              <div className="space-y-6">
                <div className="glass-panel p-6 rounded-xl">
                  <h4 className="text-lg font-bold mb-4 text-[var(--accent-purple)]">Achievement Details</h4>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-[var(--accent-blue)] mb-1">{achievement.gpa}</div>
                      <div className="text-sm text-muted-foreground">GPA/Status</div>
                    </div>
                    
                    <div className="space-y-3">
                      {achievement.subjects.map((subject, index) => (
                        <div key={index} className="flex justify-between items-center p-2 rounded-lg bg-white/5">
                          <span className="text-sm text-muted-foreground">{subject.name}</span>
                          <span className="text-sm font-medium text-[var(--accent-blue)]">{subject.grade}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {(achievement as any).links && (
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-[var(--accent-blue)]">Related Links</h4>
                    {(achievement as any).links.map((link: any, index: number) => (
                      <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-between p-4 glass-panel rounded-xl hover:bg-white/10 transition-all duration-300 group"
                      >
                        <span className="font-medium">{link.title}</span>
                        <ExternalLink className="w-4 h-4 text-[var(--accent-blue)] group-hover:scale-110 transition-transform duration-300" />
                      </motion.a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}