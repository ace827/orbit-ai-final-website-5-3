import { motion } from "framer-motion";
import { Zap, CalendarCheck, Clock } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Answers Every Call Instantly",
    description: "No ringing out. No voicemail. Every customer gets a live response within seconds.",
    accent: "from-primary/10 to-primary/5",
  },
  {
    icon: CalendarCheck,
    title: "Books More Jobs While You're Busy",
    description: "Captures lead details, answers questions, and moves callers toward booking.",
    accent: "from-primary/10 to-primary/5",
  },
  {
    icon: Clock,
    title: "Covers After-Hours & Missed Calls",
    description: "Nights, weekends, lunch breaks — your phone is always answered professionally.",
    accent: "from-primary/10 to-primary/5",
  },
];

const BenefitsSection = () => (
  <section id="benefits" className="relative py-20 md:py-28 bg-background overflow-hidden">
    <div className="absolute inset-0 bg-dot-pattern opacity-20" />
    <div className="absolute top-0 left-0 right-0 section-divider" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-4"
        >
          Key Benefits
        </motion.span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
          Why Home Service Businesses Choose Orbit AI
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
            className="group rounded-2xl border border-border bg-card p-7 text-center card-hover relative overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${b.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:shadow-glow transition-shadow duration-300">
                <b.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
