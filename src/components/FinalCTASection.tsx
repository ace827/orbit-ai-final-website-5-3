import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const FinalCTASection = () => (
  <section className="py-20 md:py-28 bg-dark-section relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-15 blur-[120px]" style={{ background: "var(--gradient-primary)" }} />

    <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-hero-foreground mb-4">
          Ready to Stop <span className="text-gradient">Missing Calls?</span>
        </h2>
        <p className="text-hero-muted text-lg mb-8">
          Try the live demo or book a quick call to see if Orbit AI is a fit for your business.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-lg px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-primary-glow transition-all hover:scale-[1.02]"
            style={{ background: "var(--gradient-cta)" }}
          >
            Try the Live Demo
            <ArrowRight size={16} />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg border border-hero-foreground/15 px-7 py-3.5 text-sm font-semibold text-hero-foreground hover:bg-hero-foreground/5 transition-colors"
          >
            <Play size={14} />
            Book a Call
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
