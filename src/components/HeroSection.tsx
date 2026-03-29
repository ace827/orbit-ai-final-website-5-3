import { motion } from "framer-motion";
import { ArrowRight, Play, Phone, CheckCircle2, CalendarCheck } from "lucide-react";

const HeroSection = () => (
  <section className="relative bg-hero pt-28 pb-24 md:pt-40 md:pb-32 overflow-hidden">
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg"
        >
          <h1 className="text-hero-foreground font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-5">
            Never Miss Another{" "}
            <span className="text-gradient">Customer Call</span>
          </h1>

          <p className="text-hero-muted text-lg leading-relaxed mb-8 max-w-md">
            Orbit AI answers calls instantly, talks like a real receptionist, and helps home service businesses book more jobs — without hiring more staff.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#demo"
              className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              style={{ background: "var(--gradient-cta)" }}
            >
              Try the Live Demo
              <ArrowRight size={16} />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-lg border border-hero-foreground/15 px-6 py-3 text-sm font-semibold text-hero-foreground hover:bg-hero-foreground/5 transition-colors"
            >
              <Play size={14} />
              Book a Call
            </a>
          </div>

          <p className="text-hero-muted/50 text-xs">
            Built for home service businesses that rely on inbound calls.
          </p>
        </motion.div>

        {/* Visual — minimal call status card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="w-full max-w-sm rounded-2xl border border-hero-foreground/10 bg-hero-foreground/[0.04] backdrop-blur-sm p-8">
            <div className="space-y-5">
              {/* Step 1 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-hero-foreground text-sm font-semibold">Incoming Call</p>
                  <p className="text-hero-muted text-xs">Customer calls your business</p>
                </div>
              </div>

              <div className="ml-5 h-6 border-l border-hero-foreground/10" />

              {/* Step 2 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <CheckCircle2 size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-hero-foreground text-sm font-semibold">Answered Instantly</p>
                  <p className="text-hero-muted text-xs">Orbit AI picks up in under 1 second</p>
                </div>
              </div>

              <div className="ml-5 h-6 border-l border-hero-foreground/10" />

              {/* Step 3 */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <CalendarCheck size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-hero-foreground text-sm font-semibold">Job Booked</p>
                  <p className="text-hero-muted text-xs">Lead captured & appointment scheduled</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
