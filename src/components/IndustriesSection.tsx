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
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Built for <span className="text-gradient">Home Service Pros</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Designed specifically for businesses that depend on the phone.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="inline-flex items-center gap-2.5 rounded-full bg-card border border-border px-5 py-3 shadow-card text-sm font-medium text-foreground"
          >
            <ind.icon size={16} className="text-primary" />
            {ind.label}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
