import { motion } from "framer-motion";
import { TrendingUp, FileText, ExternalLink, Sparkles } from "lucide-react";
import { useState } from "react";
import { AchievementModal } from "@/components/AchievementModal";

const achievements = [
  {
    id: "semester1",
    icon: TrendingUp,
    title: "3rd Rank in 1st Semester",
    description: "Achieved 3rd position in first semester with strong performance in foundational computer science courses.",
    gpa: "8.7",
    date: "First Semester 2023",
    color: "text-[var(--accent-blue)]",
    bgColor: "bg-[var(--accent-blue)]/20",
  },
  {
    id: "semester2",
    icon: TrendingUp,
    title: "1st Rank in 2nd Semester",
    description: "Secured 1st position in second semester with exceptional SGPA of 9.34. A wonderful semester with outstanding academic performance.",
    gpa: "9.34",
    date: "Second Semester 2024",
    color: "text-[var(--accent-purple)]",
    bgColor: "bg-[var(--accent-purple)]/20",
  },
  {
    id: "research",
    icon: FileText,
    title: "Research Publication",
    description: "Co-authored a research paper focusing on cybersecurity and modern application development practices.",
    gpa: "Published",
    date: "2024",
    color: "text-[var(--accent-blue)]",
    bgColor: "bg-[var(--accent-blue)]/20",
  },
];

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<string | null>(null);

  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text"
        >
          Achievements
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50, rotateY: -45 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2, 
                ease: "easeOut" 
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              className="glass-panel rounded-3xl p-6 cursor-pointer relative group overflow-hidden"
              onClick={() => setSelectedAchievement(achievement.id)}
            >
              {/* Clickable indicator */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  className="w-8 h-8 bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] rounded-full flex items-center justify-center"
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                </motion.div>
              </div>

              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 border border-[var(--accent-blue)] rounded-full absolute -top-16 -right-16"
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className={`w-16 h-16 ${achievement.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                  </motion.div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[var(--accent-blue)]">{achievement.gpa}</div>
                    <div className="text-xs text-muted-foreground">GPA/Status</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold group-hover:text-[var(--accent-blue)] transition-colors duration-300 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{achievement.date}</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Sparkles className="w-4 h-4 text-[var(--accent-purple)]" />
                  </motion.div>
                </div>

                {/* Click hint */}
                <div className="mt-4 text-xs text-muted-foreground opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view detailed achievements →
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Modal */}
        {selectedAchievement && (
          <AchievementModal
            achievementId={selectedAchievement}
            onClose={() => setSelectedAchievement(null)}
          />
        )}
      </div>
    </section>
  );
}
