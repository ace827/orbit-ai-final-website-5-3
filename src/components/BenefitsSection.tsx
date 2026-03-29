import { motion } from "framer-motion";
import { Zap, CalendarCheck, Clock } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Answers Every Call Instantly",
    description: "No ringing out. No voicemail. Every customer gets a live response within seconds.",
  },
  {
    icon: CalendarCheck,
    title: "Books More Jobs While You're Busy",
    description: "Captures lead details, answers questions, and moves callers toward booking.",
  },
  {
    icon: Clock,
    title: "Covers After-Hours & Missed Calls",
    description: "Nights, weekends, lunch breaks — your phone is always answered professionally.",
  },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
          Why Home Service Businesses <span className="text-gradient">Choose Orbit AI</span>
        </h2>
        <p className="text-muted-foreground text-base">
          Every missed call is a missed job. Orbit AI makes sure that doesn't happen.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-7 border border-border"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <b.icon size={20} className="text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">{b.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
