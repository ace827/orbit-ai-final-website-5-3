import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 bg-background overflow-hidden">
    {/* Subtle decorative elements */}
    <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-primary/[0.03] blur-3xl" />
    <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-primary/[0.02] blur-3xl" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-muted-foreground text-xs font-medium">AI-Powered Voice Receptionist</span>
        </div>

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-foreground mb-6">
          Never Miss Another{" "}
          <span className="text-gradient">Customer Call</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto">
          Orbit AI answers calls instantly, talks like a real receptionist, and helps you book more jobs — without hiring more staff.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Try the Live Demo
            <ArrowRight size={16} />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
          >
            Book a Call
          </a>
        </div>

        <p className="text-muted-foreground/60 text-xs">
          Built for home service businesses that rely on inbound calls.
        </p>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
