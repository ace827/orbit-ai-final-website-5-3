import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DemoCard from "@/components/DemoCard";
import {
  DEMO_HIGHLIGHT_EVENT,
  MOBILE_DEMO_ID,
  type DemoHighlightDetail,
} from "@/lib/demo-navigation";

const DemoSection = () => {
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

          <DemoCard highlight={highlight} />
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
