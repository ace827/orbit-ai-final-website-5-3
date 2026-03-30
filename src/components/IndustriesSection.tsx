import { motion } from "framer-motion";
import { Wrench, Wind, Zap, Home, TreePine, Droplets, HardHat } from "lucide-react";

const industries = [
  { icon: Wrench, label: "Plumbing" },
  { icon: Wind, label: "HVAC" },
  { icon: Zap, label: "Electrical" },
  { icon: Home, label: "Roofing" },
  { icon: TreePine, label: "Landscaping" },
  { icon: Droplets, label: "Pressure Washing" },
  { icon: HardHat, label: "General Home Services" },
];

const IndustriesSection = () => (
  <section className="relative py-20 md:py-28 bg-gradient-section overflow-hidden">
    <div className="absolute top-0 left-0 right-0 section-divider" />
    <div className="absolute bottom-0 left-0 right-0 section-divider" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-10"
      >
        <span className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-4">
          Industries We Serve
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
          Built for Home Service Pros
        </h2>
        <p className="text-muted-foreground text-base">
          Designed specifically for businesses that depend on the phone.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground card-hover cursor-default"
          >
            <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
              <ind.icon size={14} className="text-primary" />
            </div>
            {ind.label}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
