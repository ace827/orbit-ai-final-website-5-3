import { motion } from "framer-motion";
import { Check, ArrowRight, Clock, Zap, Users, PhoneCall, Headphones, Star } from "lucide-react";
import { navigateToDemo } from "@/lib/demo-navigation";

const includes = [
  "Custom AI receptionist trained on your business",
  "Unlimited inbound call handling",
  "Lead capture & appointment booking",
  "After-hours coverage included",
  "Dedicated setup & onboarding support",
  "Real-time call analytics dashboard",
  "Seamless CRM integrations",
];

const highlights = [
  { icon: Clock, text: "24/7 availability" },
  { icon: Zap, text: "Instant response to calls" },
  { icon: Users, text: "Custom setup for your business" },
  { icon: PhoneCall, text: "Real-time lead capture" },
  { icon: Headphones, text: "Works during busy hours and after hours" },
];

const extras = [
  "Handles multiple calls at once",
  "Never misses a lead",
  "Consistent customer experience",
  "No need for additional staff",
];

const PricingSection = () => (
  <section id="pricing" className="relative py-20 md:py-28 bg-gradient-section overflow-hidden">
    <div className="absolute top-0 left-0 right-0 section-divider" />
    <div className="absolute bottom-0 left-0 right-0 section-divider" />
    <div className="absolute inset-0 bg-dot-pattern opacity-10" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <span className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-4">
          Pricing
        </span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-muted-foreground text-base">One plan. Everything included. No surprises.</p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="bg-card rounded-2xl border border-border shadow-elevated p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-primary text-xs font-semibold">Most Popular</span>
            </div>

            <h3 className="font-heading text-lg font-bold text-foreground mb-6">Orbit AI Receptionist</h3>

            <div className="flex items-end gap-1 mb-1">
              <span className="text-5xl font-heading font-bold text-gradient">$600</span>
              <span className="text-muted-foreground text-sm mb-1.5">/month</span>
            </div>
            <p className="text-muted-foreground text-xs mb-8">+ $1,800 one-time setup & customization</p>

            <div className="border-t border-border pt-6 mb-6">
              <ul className="space-y-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <a
                href="#demo"
                onClick={(event) => {
                  event.preventDefault();
                  navigateToDemo();
                }}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-glow"
              >
                Try the Demo
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3.5 text-sm font-semibold text-foreground hover:bg-secondary hover:border-primary/20 transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          <div className="bg-card rounded-2xl border border-border p-7 shadow-card relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent" />
            <div className="relative z-10">
              <h4 className="font-heading text-sm font-bold text-foreground mb-5">What You Get</h4>
              <ul className="space-y-4">
                {highlights.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3.5 text-sm text-foreground group">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:shadow-glow transition-shadow duration-300">
                      <Icon size={16} className="text-primary" />
                    </div>
                    <span className="font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-card rounded-2xl border border-border p-7 shadow-card relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent" />
            <div className="relative z-10">
              <h4 className="font-heading text-sm font-bold text-foreground mb-5">Why Businesses Choose Orbit</h4>
              <ul className="space-y-3.5">
                {extras.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                    <Star size={14} className="text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PricingSection;
