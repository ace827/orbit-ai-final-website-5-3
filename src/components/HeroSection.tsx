import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";

const HeroSection = () => (
  <section className="relative bg-hero pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
    {/* Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]" style={{ background: "var(--gradient-primary)" }} />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-hero-foreground/10 bg-hero-foreground/5 px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            <span className="text-hero-muted text-xs font-medium">AI-Powered Voice Receptionist</span>
          </div>

          <h1 className="text-hero-foreground font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
            Never Miss Another{" "}
            <span className="text-gradient">Customer Call</span>
          </h1>

          <p className="text-hero-muted text-lg md:text-xl leading-relaxed mb-8 max-w-md">
            Orbit AI answers calls instantly, talks like a real receptionist, and helps home service businesses book more jobs — without hiring more staff.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-primary-foreground shadow-primary-glow transition-all hover:scale-[1.02]"
              style={{ background: "var(--gradient-cta)" }}
            >
              Try the Live Demo
              <ArrowRight size={16} />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-lg border border-hero-foreground/15 px-6 py-3 text-sm font-semibold text-hero-foreground hover:bg-hero-foreground/5 transition-colors"
            >
              <Play size={14} />
              Book a Call
            </a>
          </div>

          <p className="text-hero-muted/60 text-xs">
            Built for home service businesses that rely on inbound calls.
          </p>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="animate-float">
            <img
              src={heroVisual}
              alt="AI receptionist interface showing an incoming call with voice waveform"
              className="w-full max-w-md rounded-2xl shadow-glow"
              width={1024}
              height={768}
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
