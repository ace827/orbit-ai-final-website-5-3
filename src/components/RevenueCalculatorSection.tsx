import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  TrendingUp,
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
  const [missedCalls, setMissedCalls] = useState<string>("20");
  const [period, setPeriod] = useState<Period>("weekly");
  const [jobValue, setJobValue] = useState<string>("300");
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

  const periodWord =
    period === "daily" ? "day" : period === "weekly" ? "week" : "month";

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
          {/* LEFT: Industries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <span className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-4">
              Industries We Serve
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
              Built for Home & Auto Service Pros
            </h3>
            <p className="text-muted-foreground text-base mb-6">
              Designed specifically for businesses that depend on the phone.
            </p>

            <div className="flex flex-wrap gap-3">
              {industries.map((ind, i) => (
                <motion.div
                  key={ind.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground card-hover cursor-default"
                >
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
                    <ind.icon size={14} className="text-primary" />
                  </div>
                  {ind.label}
                </motion.div>
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
              <div className="space-y-6">
                <div>
                  <span className="block text-sm font-semibold text-foreground mb-2">
                    Time Period
                  </span>
                  <div className="inline-flex w-full rounded-lg border border-border bg-secondary p-1">
                    {periods.map((p) => {
                      const active = period === p.id;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setPeriod(p.id)}
                          className={`flex-1 h-10 rounded-md text-sm font-medium transition-all ${
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

                <div>
                  <label
                    htmlFor="missed-calls"
                    className="block text-sm font-semibold text-foreground mb-2"
                  >
                    Missed Calls (per {periodWord})
                  </label>
                  <input
                    id="missed-calls"
                    type="number"
                    min="0"
                    inputMode="numeric"
                    value={missedCalls}
                    onChange={(e) => setMissedCalls(e.target.value)}
                    placeholder="e.g. 20"
                    className="w-full h-12 rounded-lg border border-border bg-background px-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
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
                    className="w-full h-12 rounded-lg border border-border bg-background px-4 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
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
                    <div className="mt-8 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/[0.06] via-primary/[0.03] to-transparent p-6 md:p-7 relative overflow-hidden">
                      <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                        Estimated missed revenue
                      </div>
                      <motion.div
                        key={resultKey}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="font-heading text-3xl md:text-4xl font-bold text-gradient leading-tight"
                      >
                        {formatCurrency(result.low)} – {formatCurrency(result.high)}
                        <span className="text-muted-foreground text-base font-medium ml-1">
                          / month
                        </span>
                      </motion.div>
                      <p className="text-muted-foreground text-xs mt-2">
                        Based on a 20–40% conversion estimate
                      </p>

                      {result.showRoi && (
                        <div className="mt-5 pt-5 border-t border-primary/15 flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <TrendingUp size={18} className="text-primary" />
                          </div>
                          <div>
                            <div className="font-heading text-xl md:text-2xl font-bold text-foreground">
                              That's {result.lowMult}x – {result.highMult}x the monthly cost
                            </div>
                            <div className="text-foreground/70 text-sm md:text-base font-medium mt-1">
                              Compared to $600/month
                            </div>
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
