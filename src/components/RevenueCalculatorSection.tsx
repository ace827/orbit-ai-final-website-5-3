import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  Wrench,
  Wind,
  Zap,
  Home,
  TreePine,
  Droplets,
  HardHat,
  Car,
  SprayCan,
  Sticker,
  SunDim,
} from "lucide-react";

type Period = "daily" | "weekly" | "monthly";

const periodMultiplier: Record<Period, number> = {
  daily: 30,
  weekly: 4,
  monthly: 1,
};

const formatCurrency = (n: number) =>
  `$${Math.round(n).toLocaleString("en-US")}`;

const industries = [
  { icon: Wrench, label: "Plumbing" },
  { icon: Wind, label: "HVAC" },
  { icon: Zap, label: "Electrical" },
  { icon: Home, label: "Roofing" },
  { icon: TreePine, label: "Landscaping" },
  { icon: Droplets, label: "Pressure Washing" },
  { icon: HardHat, label: "General Home Services" },
  { icon: Car, label: "Auto Repair Shops" },
  { icon: SprayCan, label: "Auto Body Shops" },
  { icon: Sticker, label: "Car Wraps" },
  { icon: SunDim, label: "Window Tint" },
];

const RevenueCalculatorSection = () => {
  const [missedCalls, setMissedCalls] = useState<string>("");
  const [period, setPeriod] = useState<Period>("weekly");
  const [jobValue, setJobValue] = useState<string>("");
  const [result, setResult] = useState<{
    low: number;
    high: number;
    showRoi: boolean;
    lowMult: number;
    highMult: number;
  } | null>(null);

  const handleCalculate = () => {
    const calls = parseFloat(missedCalls) || 0;
    const value = parseFloat(jobValue) || 0;
    const monthlyCalls = calls * periodMultiplier[period];
    const low = monthlyCalls * 0.2 * value;
    const high = monthlyCalls * 0.4 * value;
    setResult({
      low,
      high,
      showRoi: low > 1500,
      lowMult: Math.round(low / 600),
      highMult: Math.round(high / 600),
    });
  };

  const periods: { id: Period; label: string }[] = [
    { id: "daily", label: "Daily" },
    { id: "weekly", label: "Weekly" },
    { id: "monthly", label: "Monthly" },
  ];

  const resultKey = result ? `${result.low}-${result.high}` : "none";

  return (
    <section
      id="calculator"
      className="relative py-20 md:py-28 bg-gradient-section overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-2 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            <Calculator size={14} />
            Revenue Calculator
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            See How Much Revenue You're Missing
          </h2>
          <p className="text-muted-foreground text-base">
            Estimate how much missed calls could be costing your business each month
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* LEFT: Industries — supporting context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24 opacity-90"
          >
            <span className="inline-block text-muted-foreground text-xs font-semibold tracking-widest uppercase mb-3">
              Industries We Serve
            </span>
            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground/90 mb-2">
              Built for Home & Auto Service Pros
            </h3>
            <p className="text-muted-foreground text-sm mb-5">
              Designed specifically for businesses that depend on the phone.
            </p>

            <div className="flex flex-wrap gap-1.5">
              {industries.map((ind, i) => (
                <motion.span
                  key={ind.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/60 px-3 py-1.5 text-xs font-medium text-foreground/80 hover:text-foreground hover:border-border transition-colors cursor-default"
                >
                  <ind.icon size={12} className="text-primary/80" />
                  {ind.label}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="bg-card rounded-2xl border border-border shadow-elevated p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

              {/* Inputs */}
              <div className="space-y-5">
                {/* Missed Calls + Period toggle in one row */}
                <div>
                  <label
                    htmlFor="missed-calls"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Missed Calls
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="missed-calls"
                      type="number"
                      min="0"
                      inputMode="numeric"
                      value={missedCalls}
                      onChange={(e) => setMissedCalls(e.target.value)}
                      placeholder="e.g. 20"
                      className="flex-1 min-w-0 h-11 rounded-lg border border-border bg-background px-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                    <div className="inline-flex shrink-0 rounded-lg border border-border bg-secondary p-0.5">
                      {periods.map((p) => {
                        const active = period === p.id;
                        return (
                          <button
                            key={p.id}
                            type="button"
                            onClick={() => setPeriod(p.id)}
                            className={`px-3 h-[40px] rounded-md text-xs font-medium transition-all ${
                              active
                                ? "bg-card text-foreground shadow-card"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {p.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="job-value"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Average Job Value ($)
                  </label>
                  <input
                    id="job-value"
                    type="number"
                    min="0"
                    inputMode="numeric"
                    value={jobValue}
                    onChange={(e) => setJobValue(e.target.value)}
                    placeholder="e.g. 300"
                    className="w-full h-11 rounded-lg border border-border bg-background px-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleCalculate}
                  className="w-full h-12 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-colors shadow-card"
                >
                  Calculate
                </button>
              </div>

              {/* Result */}
              <AnimatePresence>
                {result && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -6, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-8 rounded-xl bg-secondary/60 border-l-4 border-primary p-7 md:p-8">
                      <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                        Estimated missed revenue
                      </div>
                      <motion.div
                        key={resultKey}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="font-heading text-4xl md:text-5xl font-bold text-primary leading-tight"
                      >
                        {formatCurrency(result.low)} – {formatCurrency(result.high)}
                        <span className="text-muted-foreground text-base font-medium ml-2">
                          /month
                        </span>
                      </motion.div>
                      <p className="text-muted-foreground text-xs mt-3">
                        Based on a 20–40% conversion estimate
                      </p>

                      {result.showRoi && (
                        <div className="mt-6 pt-6 border-t border-border/60">
                          <div className="font-heading text-xl md:text-2xl font-bold text-foreground">
                            {result.lowMult}x – {result.highMult}x your monthly investment
                          </div>
                          <div className="text-foreground/70 text-sm md:text-base font-medium mt-1.5">
                            Compared to $600/month
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RevenueCalculatorSection;
