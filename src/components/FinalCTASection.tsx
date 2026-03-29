import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const FinalCTASection = () => (
  <section className="py-24 md:py-32 bg-hero">
    <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-hero-foreground mb-4">
          Ready to Stop <span className="text-gradient">Missing Calls?</span>
        </h2>
        <p className="text-hero-muted text-base mb-8">
          Try the live demo or book a quick call to see if Orbit AI is a fit for your business.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-lg px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            style={{ background: "var(--gradient-cta)" }}
          >
            Try the Live Demo
            <ArrowRight size={16} />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg border border-hero-foreground/15 px-7 py-3 text-sm font-semibold text-hero-foreground hover:bg-hero-foreground/5 transition-colors"
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
