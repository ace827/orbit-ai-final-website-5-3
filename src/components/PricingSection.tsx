import { motion } from "framer-motion";
import { Check, ArrowRight, Phone, Clock, Shield, Zap } from "lucide-react";
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

const stats = [
  { icon: Phone, value: "10,000+", label: "Calls handled monthly" },
  { icon: Clock, value: "24/7", label: "Always available" },
  { icon: Shield, value: "99.9%", label: "Uptime guaranteed" },
  { icon: Zap, value: "<1s", label: "Average response time" },
];

const PricingSection = () => (
  <section id="pricing" className="py-20 md:py-28 bg-secondary/40">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
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
          <div className="bg-card rounded-2xl border border-border shadow-card p-8">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 mb-5">
              <span className="text-primary text-xs font-semibold">Most Popular</span>
            </div>

            <h3 className="font-heading text-lg font-bold text-foreground mb-6">Orbit AI Receptionist</h3>

            <div className="flex items-end gap-1 mb-1">
              <span className="text-4xl font-heading font-bold text-foreground">$600</span>
              <span className="text-muted-foreground text-sm mb-1">/month</span>
            </div>
            <p className="text-muted-foreground text-xs mb-8">+ $1,800 one-time setup & customization</p>

            <div className="border-t border-border pt-6 mb-6">
              <ul className="space-y-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <Check size={16} className="text-primary shrink-0 mt-0.5" />
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
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Try the Demo
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right side — stats + value props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="bg-card rounded-xl border border-border p-5 text-center shadow-card"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-primary" />
                </div>
                <p className="font-heading text-2xl font-bold text-foreground">{value}</p>
                <p className="text-muted-foreground text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>

          {/* Money-back guarantee */}
          <div className="bg-card rounded-xl border border-border p-6 shadow-card">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Shield size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-foreground mb-1">
                  30-Day Money-Back Guarantee
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Try Orbit AI risk-free. If you're not completely satisfied within the first 30 days, we'll refund your setup fee — no questions asked.
                </p>
              </div>
            </div>
          </div>

          {/* ROI callout */}
          <div className="bg-primary/5 rounded-xl border border-primary/20 p-6">
            <h4 className="font-heading text-sm font-bold text-foreground mb-2">
              The average home service business loses $15,000/year in missed calls.
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Orbit AI pays for itself by capturing leads you'd otherwise lose — nights, weekends, and busy hours included.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PricingSection;
