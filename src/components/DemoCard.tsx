import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Shield, Clock, CheckCircle2, Loader2 } from "lucide-react";

interface DemoCardProps {
  highlight?: boolean;
}

const DemoCard = ({ highlight = false }: DemoCardProps) => {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "calling" | "done">("idle");

  const handleSubmit = () => {
    if (!phone.trim() || status !== "idle") return;
    setStatus("calling");
    setTimeout(() => setStatus("done"), 2000);
  };

  return (
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

      <AnimatePresence mode="wait">
        {status === "idle" && (
          <motion.div
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="text-left"
          >
            <label className="text-sm font-medium text-foreground mb-2 block">
              Your phone number
            </label>
            <input
              type="tel"
              placeholder="(555) 123-4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition mb-4"
            />
            <button
              onClick={handleSubmit}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Get a Demo Call
              <ArrowRight size={16} />
            </button>
            <p className="text-muted-foreground text-xs mt-4 text-center">
              Enter your phone number and we&apos;ll call you instantly.
            </p>
          </motion.div>
        )}

        {status === "calling" && (
          <motion.div
            key="calling"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center py-6 gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Loader2 size={22} className="text-primary animate-spin" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-foreground mb-1">Placing your call…</p>
              <p className="text-xs text-muted-foreground">Your phone should ring any moment.</p>
            </div>
          </motion.div>
        )}

        {status === "done" && (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center py-6 gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle2 size={22} className="text-green-600" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-foreground mb-1">Call on its way!</p>
              <p className="text-xs text-muted-foreground">Pick up and talk to our AI receptionist.</p>
            </div>
            <button
              onClick={() => {
                setStatus("idle");
                setPhone("");
              }}
              className="text-xs text-primary font-medium hover:underline mt-1"
            >
              Try another number
            </button>
          </motion.div>
        )}
      </AnimatePresence>

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
  );
};

export default DemoCard;
