import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp, ArrowRight } from "lucide-react";

type Period = "daily" | "weekly" | "monthly";

const periodMultiplier: Record<Period, number> = {
  daily: 30,
  weekly: 4,
  monthly: 1,
};

const formatCurrency = (n: number) =>
  `$${Math.round(n).toLocaleString("en-US")}`;

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

  const canCalculate =
    parseFloat(missedCalls) > 0 && parseFloat(jobValue) > 0;
  const resultKey = result ? `${result.low}-${result.high}` : "none";

  return (
    <section
      id="calculator"
      className="relative py-24 md:py-32 bg-gradient-section overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />

      {/* Soft ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            <Calculator size={14} />
            Revenue Calculator
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            See How Much Revenue You're Missing
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Estimate how much missed calls could be costing your business each month.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid lg:grid-cols-5 rounded-3xl border border-border bg-card shadow-elevated overflow-hidden">
            {/* LEFT: Inputs */}
            <div className="lg:col-span-2 p-8 md:p-10 lg:border-r border-border">
              <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-8">
                Your Numbers
              </div>

              <div className="space-y-7">
                <div>
                  <label
                    htmlFor="missed-calls"
                    className="block text-sm font-medium text-foreground/80 mb-2.5"
                  >
                    Missed calls
                  </label>
                  <input
                    id="missed-calls"
                    type="number"
                    min="0"
                    inputMode="numeric"
                    value={missedCalls}
                    onChange={(e) => setMissedCalls(e.target.value)}
                    placeholder="20"
                    className="w-full h-12 rounded-lg border border-border bg-background px-4 text-lg font-medium text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                  />
                  <div className="inline-flex w-full mt-3 rounded-lg border border-border bg-secondary/60 p-1">
                    {periods.map((p) => {
                      const active = period === p.id;
                      return (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setPeriod(p.id)}
                          className={`flex-1 h-9 rounded-md text-xs font-medium transition-all ${
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
                    className="block text-sm font-medium text-foreground/80 mb-2.5"
                  >
                    Average job value
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-lg font-medium">
                      $
                    </span>
                    <input
                      id="job-value"
                      type="number"
                      min="0"
                      inputMode="numeric"
                      value={jobValue}
                      onChange={(e) => setJobValue(e.target.value)}
                      placeholder="300"
                      className="w-full h-12 rounded-lg border border-border bg-background pl-9 pr-4 text-lg font-medium text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCalculate}
                  disabled={!canCalculate}
                  className="group w-full h-12 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-card disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                >
                  Calculate
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>
              </div>
            </div>

            {/* RIGHT: Result */}
            <div className="lg:col-span-3 relative bg-gradient-to-br from-primary/[0.04] via-transparent to-primary/[0.06] p-8 md:p-12 flex items-center min-h-[420px]">
              <div className="absolute inset-0 bg-dot-pattern opacity-[0.15] pointer-events-none" />

              <AnimatePresence mode="wait">
                {!result ? (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="relative z-10 w-full text-center"
                  >
                    <div className="inline-flex w-14 h-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5">
                      <TrendingUp size={24} />
                    </div>
                    <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-2">
                      Your missed revenue, instantly
                    </h3>
                    <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                      Enter your numbers and we'll show you what you're leaving on the table every month.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key={resultKey}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="relative z-10 w-full"
                  >
                    <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-5">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Estimated Missed Revenue
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-5 mb-5">
                      <div className="rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm p-4 sm:p-5">
                        <div className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground mb-1.5">
                          Low estimate
                        </div>
                        <div className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-none tracking-tight tabular-nums whitespace-nowrap">
                          {formatCurrency(result.low)}
                        </div>
                      </div>
                      <div className="rounded-xl border border-primary/30 bg-primary/[0.06] p-4 sm:p-5">
                        <div className="text-[11px] font-semibold tracking-widest uppercase text-primary/80 mb-1.5">
                          High estimate
                        </div>
                        <div className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-none tracking-tight tabular-nums whitespace-nowrap">
                          {formatCurrency(result.high)}
                        </div>
                      </div>
                    </div>

                    <div className="text-muted-foreground text-sm font-medium">
                      Per month · based on a 20–40% conversion estimate
                    </div>

                    {result.showRoi && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-border/60 flex flex-wrap items-baseline gap-x-3 gap-y-1"
                      >
                        <div className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight tabular-nums whitespace-nowrap">
                          {result.lowMult}x–{result.highMult}x ROI
                        </div>
                        <div className="text-muted-foreground text-sm font-medium">
                          vs. $600/month with Orbit AI
                        </div>
                      </motion.div>
                    )}
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
