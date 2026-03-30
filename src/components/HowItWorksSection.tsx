import { motion } from "framer-motion";
import { Link, BrainCircuit, PhoneCall } from "lucide-react";

const steps = [
  { icon: Link, num: "1", title: "Connect Your Business", desc: "Forward your existing business line to Orbit AI in minutes." },
  { icon: BrainCircuit, num: "2", title: "Train on Your Services", desc: "We customize the AI to know your services, pricing, and how you operate." },
  { icon: PhoneCall, num: "3", title: "Start Answering Calls", desc: "Orbit AI answers, captures leads, and helps book jobs automatically." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="relative py-20 md:py-28 bg-gradient-section overflow-hidden">
    <div className="absolute top-0 left-0 right-0 section-divider" />
    <div className="absolute bottom-0 left-0 right-0 section-divider" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-4">
          Getting Started
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
          Up and Running in 3 Steps
        </h2>
        <p className="text-muted-foreground text-base">No complicated setup. No long contracts. Just results.</p>
      </motion.div>

      <div className="relative max-w-3xl mx-auto">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-8 left-[16.67%] right-[16.67%] h-[2px] bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10" />

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-5 text-lg font-bold shadow-glow relative z-10">
                {s.num}
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
