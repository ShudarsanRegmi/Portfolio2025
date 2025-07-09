import { Switch, Route, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Dock } from "@/components/Dock";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { PageTransition } from "@/components/PageTransition";
import Hero from "@/pages/Hero";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import TechStack from "@/pages/TechStack";
import Certifications from "@/pages/Certifications";
import Experience from "@/pages/Experience";
import Achievements from "@/pages/Achievements";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Routes() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Dock />
      <Switch>
        <Route path="/" component={() => <PageTransition><Hero /></PageTransition>} />
        <Route path="/about" component={() => <PageTransition><About /></PageTransition>} />
        <Route path="/projects" component={() => <PageTransition><Projects /></PageTransition>} />
        <Route path="/tech" component={() => <PageTransition><TechStack /></PageTransition>} />
        <Route path="/certifications" component={() => <PageTransition><Certifications /></PageTransition>} />
        <Route path="/experience" component={() => <PageTransition><Experience /></PageTransition>} />
        <Route path="/achievements" component={() => <PageTransition><Achievements /></PageTransition>} />
        <Route path="/contact" component={() => <PageTransition><Contact /></PageTransition>} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        {/* Wrap with Hash-based routing logic */}
        <WouterRouter hook={useHashLocation}>
          <Routes />
        </WouterRouter>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
