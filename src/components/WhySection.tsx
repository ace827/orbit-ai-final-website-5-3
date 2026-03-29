import { motion } from "framer-motion";
import { PhoneOff, BellRing, Smile, UserMinus } from "lucide-react";

const reasons = [
  { icon: PhoneOff, title: "Stop Losing Leads to Missed Calls", desc: "Every unanswered call is revenue walking out the door." },
  { icon: BellRing, title: "Respond Instantly, Even After Hours", desc: "Customers call when it's convenient for them — Orbit AI is always ready." },
  { icon: Smile, title: "Better First Impressions", desc: "A professional, immediate response builds trust from the first ring." },
  { icon: UserMinus, title: "Reduce Front Desk Overhead", desc: "Handle more call volume without hiring additional staff." },
];

const WhySection = () => (
  <section className="py-24 md:py-32 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
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
            className="rounded-xl border border-border bg-card p-6"
          >
            <r.icon size={20} className="text-primary mb-3" />
            <h3 className="font-heading text-base font-bold text-foreground mb-1">{r.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhySection;
