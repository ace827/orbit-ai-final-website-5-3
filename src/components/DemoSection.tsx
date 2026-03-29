import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const DemoSection = () => {
  const [phone, setPhone] = useState("");

  return (
    <section id="demo" className="py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Try It <span className="text-gradient">Yourself</span>
          </h2>
          <p className="text-muted-foreground text-base mb-10">
            Experience how Orbit AI handles customer calls for your business.
          </p>

          <div className="bg-card rounded-2xl shadow-card border border-border p-8">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block text-left">
                  Your phone number
                </label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                />
              </div>
              <button
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
                style={{ background: "var(--gradient-cta)" }}
              >
                Get a Demo Call
                <ArrowRight size={16} />
              </button>
              <div className="space-y-1 pt-1">
                <p className="text-muted-foreground text-xs">
                  Enter your phone number and Orbit AI will call you in seconds.
                </p>
                <p className="text-muted-foreground/60 text-xs">
                  Act like you're a customer calling a home service business.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
