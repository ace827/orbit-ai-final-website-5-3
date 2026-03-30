import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Shield, Clock, CheckCircle2, Loader2 } from "lucide-react";

interface DemoCardProps {
  highlight?: boolean;
}

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

const DemoCard = ({ highlight = false }: DemoCardProps) => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const [status, setStatus] = useState<"idle" | "calling" | "done">("idle");

  const digits = phone.replace(/\D/g, "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setPhone(formatPhone(e.target.value));
  };

  const handleSubmit = async () => {
    if (status !== "idle") return;
    if (digits.length !== 10) {
      setError(true);
      return;
    }
    setStatus("calling");
    try {
      await fetch("https://hook.us2.make.com/8kawapu3b2xentqhp2qx6vn6ej7h0si5", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: `+1${digits}` }),
      });
    } catch {
      // proceed to done state even if webhook fails
    }
    setStatus("done");
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
            <div
              className={`flex items-center rounded-lg border bg-background transition ${
                error
                  ? "border-destructive ring-2 ring-destructive/20"
                  : "border-border focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/40"
              }`}
            >
              <span className="pl-4 pr-2 text-sm font-medium text-muted-foreground select-none">
                +1
              </span>
              <input
                type="tel"
                placeholder="(555) 123-4567"
                value={phone}
                onChange={handleChange}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                className="w-full bg-transparent px-2 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-destructive text-xs mt-1.5"
              >
                Please enter a valid 10-digit phone number
              </motion.p>
            )}
            <button
              onClick={handleSubmit}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 mt-4"
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
                setError(false);
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
