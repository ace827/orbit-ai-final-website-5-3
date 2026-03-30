import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mic } from "lucide-react";
import {
  DEMO_HIGHLIGHT_EVENT,
  HERO_DEMO_ID,
  HERO_SECTION_ID,
  navigateToDemo,
  type DemoHighlightDetail,
} from "@/lib/demo-navigation";

const HeroSection = () => {
  const [phone, setPhone] = useState("");
  const [tab, setTab] = useState<"call" | "talk">("call");
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    let timeoutId: number | undefined;

    const handleHighlight = (event: Event) => {
      const customEvent = event as CustomEvent<DemoHighlightDetail>;

      if (customEvent.detail?.targetId !== HERO_DEMO_ID) return;

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
    <section
      id={HERO_SECTION_ID}
      className="relative min-h-[60vh] lg:min-h-screen flex items-start lg:items-center bg-background overflow-hidden pt-20 pb-12 lg:pt-0 lg:pb-0"
    >
      <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-primary/[0.03] blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-primary/[0.02] blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 lg:-mt-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
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
              Never Miss Another <span className="text-gradient">Customer Call</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Orbit AI answers calls instantly, talks like a real receptionist, and helps you book more jobs — without hiring more staff.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8 lg:mb-0">
              <a
                href="#demo"
                onClick={(event) => {
                  event.preventDefault();
                  navigateToDemo();
                }}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hidden lg:block flex-1 max-w-md"
            id={HERO_DEMO_ID}
          >
            <div
              className={`bg-card rounded-2xl shadow-card border p-8 transition-all duration-500 ${
                highlight
                  ? "border-primary/40 ring-4 ring-primary/10 shadow-card-hover scale-[1.01]"
                  : "border-border"
              }`}
            >
              <div className="inline-flex rounded-lg bg-secondary p-1 mb-8 w-full">
                <button
                  onClick={() => setTab("call")}
                  className={`flex-1 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all ${
                    tab === "call"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Phone size={14} />
                  Get a Call
                </button>
                <button
                  onClick={() => setTab("talk")}
                  className={`flex-1 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all ${
                    tab === "talk"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Mic size={14} />
                  Talk Now
                </button>
              </div>

              {tab === "call" ? (
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
                  <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
                    Get a Demo Call
                    <ArrowRight size={16} />
                  </button>
                  <p className="text-muted-foreground text-xs mt-4 text-center">
                    Enter your phone number and we&apos;ll call you instantly.
                  </p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <Mic size={24} className="text-primary" />
                  </div>
                  <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
                    Start Live Demo
                    <ArrowRight size={16} />
                  </button>
                  <p className="text-muted-foreground text-xs mt-4">
                    Start a live conversation with the AI in your browser.
                  </p>
                </div>
              )}

              <p className="text-muted-foreground/60 text-[11px] mt-3 text-center">
                Act like you&apos;re a customer calling a home service business.
              </p>
            </div>
          </motion.div>
        </div>

        <p className="text-muted-foreground/60 text-xs text-center mt-6 lg:hidden">
          Built for home service businesses that rely on inbound calls.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
