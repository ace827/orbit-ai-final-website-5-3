import { motion } from "framer-motion";
import { Link, BrainCircuit, PhoneCall } from "lucide-react";

const steps = [
  { icon: Link, num: "01", title: "Connect Your Business", desc: "Forward your existing business line to Orbit AI in minutes." },
  { icon: BrainCircuit, num: "02", title: "Train on Your Services", desc: "We customize the AI to know your services, pricing, and how you operate." },
  { icon: PhoneCall, num: "03", title: "Start Answering Calls", desc: "Orbit AI answers, captures leads, and helps book jobs automatically." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Up and Running in <span className="text-gradient">3 Steps</span>
        </h2>
        <p className="text-muted-foreground text-lg">No complicated setup. No long contracts. Just results.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
              <s.icon size={26} />
            </div>
            <span className="text-xs font-bold text-primary tracking-widest uppercase mb-2 block">Step {s.num}</span>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
