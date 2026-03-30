import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DemoCard from "@/components/DemoCard";
import {
  DEMO_HIGHLIGHT_EVENT,
  HERO_DEMO_ID,
  HERO_SECTION_ID,
  navigateToDemo,
  type DemoHighlightDetail,
} from "@/lib/demo-navigation";

const HeroSection = () => {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    let timeoutId: number | undefined;

    const handleHighlight = (event: Event) => {
      const customEvent = event as CustomEvent<DemoHighlightDetail>;
      if (customEvent.detail?.targetId !== HERO_DEMO_ID) return;
      if (timeoutId) window.clearTimeout(timeoutId);
      setHighlight(true);
      timeoutId = window.setTimeout(() => setHighlight(false), 1200);
    };

    window.addEventListener(DEMO_HIGHLIGHT_EVENT, handleHighlight as EventListener);
    return () => {
      window.removeEventListener(DEMO_HIGHLIGHT_EVENT, handleHighlight as EventListener);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section
      id={HERO_SECTION_ID}
      className="relative min-h-[60vh] lg:min-h-screen flex items-start lg:items-center overflow-hidden pt-20 pb-12 lg:pt-0 lg:pb-0"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-primary/[0.04] blur-[100px]" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.015] blur-[150px]" />
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 lg:-mt-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-primary text-xs font-semibold">AI-Powered Voice Receptionist</span>
            </motion.div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground mb-5">
              Never Miss Another <span className="text-gradient">Customer Call</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Orbit AI answers calls instantly, talks like a real receptionist, and helps you book more jobs — without hiring more staff.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 lg:mb-0">
              <a
                href="#demo"
                onClick={(event) => {
                  event.preventDefault();
                  navigateToDemo();
                }}
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-glow"
              >
                Try the Live Demo
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary hover:border-primary/20 transition-all"
              >
                Contact Us
              </a>
            </div>

            <p className="text-muted-foreground/60 text-xs lg:block hidden mt-6">
              Built for home service businesses that rely on inbound calls.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block flex-1 max-w-md"
            id={HERO_DEMO_ID}
          >
            <DemoCard highlight={highlight} />
          </motion.div>
        </div>

        <p className="text-muted-foreground/60 text-xs text-center mt-6 lg:hidden">
          Built for home service businesses that rely on inbound calls.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
