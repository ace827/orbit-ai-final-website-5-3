import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp } from "lucide-react";

type Period = "daily" | "weekly" | "monthly";

const periodMultiplier: Record<Period, number> = {
  daily: 30,
  weekly: 4,
  monthly: 1,
};

const formatCurrency = (n: number) =>
  `$${Math.round(n).toLocaleString("en-US")}`;

const RevenueCalculatorSection = () => {
  const [missedCalls, setMissedCalls] = useState<string>("20");
  const [period, setPeriod] = useState<Period>("weekly");
  const [jobValue, setJobValue] = useState<string>("300");

  const { low, high, showRoi, lowMult, highMult } = useMemo(() => {
    const calls = parseFloat(missedCalls) || 0;
    const value = parseFloat(jobValue) || 0;
    const monthlyCalls = calls * periodMultiplier[period];
    const low = monthlyCalls * 0.2 * value;
    const high = monthlyCalls * 0.4 * value;
    return {
      low,
      high,
      showRoi: low > 1500,
      lowMult: Math.round(low / 600),
      highMult: Math.round(high / 600),
    };
  }, [missedCalls, period, jobValue]);

  const periods: { id: Period; label: string }[] = [
    { id: "daily", label: "Daily" },
    { id: "weekly", label: "Weekly" },
    { id: "monthly", label: "Monthly" },
  ];

  const resultKey = `${low}-${high}`;

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card rounded-2xl border border-border shadow-elevated p-6 md:p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

            {/* Inputs */}
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="missed-calls"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Missed Calls
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
            </div>

            {/* Result */}
            <div className="mt-8 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/[0.06] via-primary/[0.03] to-transparent p-6 md:p-7 relative overflow-hidden">
              <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-2">
                Estimated missed revenue
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={resultKey}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="font-heading text-3xl md:text-4xl font-bold text-gradient leading-tight"
                >
                  {formatCurrency(low)} – {formatCurrency(high)}
                  <span className="text-muted-foreground text-base font-medium ml-1">
                    / month
                  </span>
                </motion.div>
              </AnimatePresence>
              <p className="text-muted-foreground text-xs mt-2">
                Based on a 20–40% conversion estimate
              </p>

              <AnimatePresence>
                {showRoi && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-5 pt-5 border-t border-primary/15 flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <TrendingUp size={16} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-heading text-lg font-bold text-foreground">
                          That's {lowMult}x – {highMult}x the monthly cost
                        </div>
                        <div className="text-muted-foreground text-xs mt-0.5">
                          Compared to $600/month
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RevenueCalculatorSection;
