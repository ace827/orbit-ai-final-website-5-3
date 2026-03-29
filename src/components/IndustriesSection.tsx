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
  <section className="py-24 md:py-32 bg-secondary/50">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
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
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground"
          >
            <ind.icon size={15} className="text-primary" />
            {ind.label}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
