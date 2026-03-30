import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Shield, Clock } from "lucide-react";
import {
  DEMO_HIGHLIGHT_EVENT,
  MOBILE_DEMO_ID,
  type DemoHighlightDetail,
} from "@/lib/demo-navigation";

const DemoSection = () => {
  const [phone, setPhone] = useState("");
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    let timeoutId: number | undefined;

    const handleHighlight = (event: Event) => {
      const customEvent = event as CustomEvent<DemoHighlightDetail>;

      if (customEvent.detail?.targetId !== MOBILE_DEMO_ID) return;

      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }

      setHighlight(true);
      timeoutId = window.setTimeout(() => setHighlight(false), 1200);
    };

    window.addEventListener(DEMO_HIGHLIGHT_EVENT, handleHighlight as EventListener);

    return () => {
      window.removeEventListener(DEMO_HIGHLIGHT_EVENT, handleHighlight as EventListener);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <section id={MOBILE_DEMO_ID} className="py-20 md:py-28 bg-secondary/40 lg:hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs font-semibold">Live Demo</span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Try It Yourself
          </h2>
          <p className="text-muted-foreground text-base mb-8">
            Experience how Orbit AI handles customer calls.
          </p>

          <div
            className={`bg-card rounded-2xl shadow-card border p-8 transition-all duration-500 ${
              highlight
                ? "border-primary/40 ring-4 ring-primary/10 shadow-card-hover scale-[1.01]"
                : "border-border"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone size={18} className="text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">Try Orbit AI Live</h3>
                <p className="text-xs text-muted-foreground">Get a demo call in seconds</p>
              </div>
            </div>

            <div className="text-left">
              <label className="text-sm font-medium text-foreground mb-2 block">
                Your phone number
              </label>
              <input
                type="tel"
                placeholder="(555) 123-4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition mb-4"
              />
              <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
                Get a Demo Call
                <ArrowRight size={16} />
              </button>
              <p className="text-muted-foreground text-xs mt-4 text-center">
                Enter your phone number and we&apos;ll call you instantly.
              </p>
            </div>

            <div className="border-t border-border mt-6 pt-5 flex items-center justify-between text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Shield size={12} className="text-primary/70" />
                No spam, ever
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={12} className="text-primary/70" />
                Takes 30 seconds
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
