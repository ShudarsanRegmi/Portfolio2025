import { Home, User, Code, Cpu, Award, Briefcase, Trophy, Mail, Sun, Moon } from "lucide-react";
import { useLocation } from "wouter";
import { Link } from "wouter";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

const dockItems = [
  { icon: Home, path: "/", label: "Hero" },
  { icon: User, path: "/about", label: "About" },
  { icon: Code, path: "/projects", label: "Projects" },
  { icon: Cpu, path: "/tech", label: "Tech Stack" },
  { icon: Award, path: "/certifications", label: "Certifications" },
  { icon: Briefcase, path: "/experience", label: "Experience" },
  { icon: Trophy, path: "/achievements", label: "Achievements" },
  { icon: Mail, path: "/contact", label: "Contact" },
];

export function Dock() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="glass-panel rounded-2xl px-6 py-4">
        <div className="flex items-center justify-center space-x-2">
          {dockItems.map(({ icon: Icon, path, label }) => (
            <Link key={path} href={path}>
              <motion.button
                whileHover={{ 
                  y: -15, 
                  scale: 1.3,
                  transition: { type: "spring", stiffness: 600, damping: 8 }
                }}
                whileTap={{ scale: 0.9 }}
                className={`dock-item p-3 rounded-xl transition-all duration-150 relative ${
                  location === path ? "active" : ""
                }`}
                title={label}
              >
                <Icon className="w-5 h-5" />
                {location === path && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[var(--accent-blue)] rounded-full"
                  />
                )}
              </motion.button>
            </Link>
          ))}
          
          <div className="h-6 w-px bg-white/10 mx-2"></div>
          
          <motion.button
            whileHover={{ 
              y: -15, 
              scale: 1.3,
              transition: { type: "spring", stiffness: 600, damping: 8 }
            }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="dock-item p-3 rounded-xl transition-all duration-150"
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
