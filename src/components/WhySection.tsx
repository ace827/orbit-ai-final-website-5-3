import { motion } from "framer-motion";
import { PhoneOff, BellRing, Smile, UserMinus } from "lucide-react";

const reasons = [
  { icon: PhoneOff, title: "Stop Losing Leads to Missed Calls", desc: "Every unanswered call is revenue walking out the door." },
  { icon: BellRing, title: "Respond Instantly, Even After Hours", desc: "Customers call when it's convenient for them — Orbit AI is always ready." },
  { icon: Smile, title: "Better First Impressions", desc: "A professional, immediate response builds trust from the first ring." },
  { icon: UserMinus, title: "Reduce Front Desk Overhead", desc: "Handle more call volume without hiring additional staff." },
];

const WhySection = () => (
  <section className="relative py-20 md:py-28 bg-background overflow-hidden">
    <div className="absolute inset-0 bg-dot-pattern opacity-15" />
    <div className="absolute top-0 left-0 right-0 section-divider" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-4">
          Why Orbit AI
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
          Real Results for Real Businesses
        </h2>
        <p className="text-muted-foreground text-base">Practical outcomes that impact your bottom line.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group rounded-2xl border border-border bg-card p-6 card-hover relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:shadow-glow transition-shadow duration-300">
                <r.icon size={17} className="text-primary" />
              </div>
              <h3 className="font-heading text-base font-bold text-foreground mb-1">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
