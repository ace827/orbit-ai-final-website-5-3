import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { navigateToDemo } from "@/lib/demo-navigation";

const FinalCTASection = () => (
  <section className="relative py-20 md:py-28 overflow-hidden">
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5" />
    <div className="absolute inset-0 bg-dot-pattern opacity-10" />
    <div className="absolute top-0 left-0 right-0 section-divider" />

    <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto"
      >
        <span className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-4">
          Get Started
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ready to Stop Missing Calls?
        </h2>
        <p className="text-muted-foreground text-base mb-8">
          Try the live demo or book a quick call to see if Orbit AI is a fit for your business.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
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
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTASection;
