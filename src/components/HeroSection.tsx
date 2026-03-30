import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const HeroSection = () => {
  const [phone, setPhone] = useState("");

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-background overflow-hidden">
      <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-primary/[0.02] blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-muted-foreground text-xs font-medium">AI-Powered Voice Receptionist</span>
            </div>

            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground mb-5">
              Never Miss Another{" "}
              <span className="text-gradient">Customer Call</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Orbit AI answers calls instantly, talks like a real receptionist, and helps you book more jobs — without hiring more staff.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 lg:mb-0">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Try the Live Demo
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                Contact Us
              </a>
            </div>

            <p className="text-muted-foreground/60 text-xs lg:block hidden mt-6">
              Built for home service businesses that rely on inbound calls.
            </p>
          </motion.div>

          {/* Right — Demo card (desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hidden lg:block flex-1 max-w-md"
            id="demo"
          >
            <div className="bg-card rounded-2xl shadow-card border border-border p-8">
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone size={14} className="text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">Try It Yourself</span>
              </div>

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
              <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
                Get a Demo Call
                <ArrowRight size={16} />
              </button>
              <p className="text-muted-foreground text-xs mt-4 text-center">
                Enter your phone number and we'll call you instantly.
              </p>
              <p className="text-muted-foreground/60 text-[11px] mt-2 text-center">
                Act like you're a customer calling a home service business.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mobile-only tagline */}
        <p className="text-muted-foreground/60 text-xs text-center mt-6 lg:hidden">
          Built for home service businesses that rely on inbound calls.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
