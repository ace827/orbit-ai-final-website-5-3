import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const includes = [
  "Custom AI receptionist trained on your business",
  "Unlimited inbound call handling",
  "Lead capture & appointment booking",
  "After-hours coverage included",
  "Dedicated setup & onboarding support",
];

const PricingSection = () => (
  <section id="pricing" className="py-20 md:py-28 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Simple, <span className="text-gradient">Transparent Pricing</span>
        </h2>
        <p className="text-muted-foreground text-lg">One plan. Everything included. No surprises.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="max-w-md mx-auto"
      >
        <div className="bg-card rounded-2xl border border-border shadow-card-hover overflow-hidden">
          {/* Header */}
          <div className="p-8 text-center" style={{ background: "var(--gradient-dark-section)" }}>
            <h3 className="font-heading text-xl font-bold text-hero-foreground mb-1">Orbit AI Receptionist</h3>
            <p className="text-hero-muted text-sm">Everything you need to stop missing calls</p>
          </div>

          <div className="p-8">
            {/* Pricing */}
            <div className="flex items-end gap-1 justify-center mb-1">
              <span className="text-4xl font-heading font-bold text-foreground">$600</span>
              <span className="text-muted-foreground text-sm mb-1">/month</span>
            </div>
            <p className="text-center text-muted-foreground text-xs mb-6">+ $1,800 one-time setup & customization</p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <Check size={16} className="text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="space-y-3">
              <a
                href="#demo"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground shadow-primary-glow transition-all hover:scale-[1.01]"
                style={{ background: "var(--gradient-cta)" }}
              >
                Try the Demo
                <ArrowRight size={16} />
              </a>
              <a
                href="#pricing"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
