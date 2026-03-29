import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Headphones, ArrowRight } from "lucide-react";

const DemoSection = () => {
  const [tab, setTab] = useState<"call" | "listen">("call");
  const [phone, setPhone] = useState("");

  return (
    <section id="demo" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Try It <span className="text-gradient">Yourself</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience how Orbit AI handles customer calls for your business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-card rounded-2xl shadow-card p-8 border border-border">
            {/* Tabs */}
            <div className="flex bg-secondary rounded-xl p-1 mb-8">
              <button
                onClick={() => setTab("call")}
                className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                  tab === "call"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Phone size={16} /> Get a Demo Call
              </button>
              <button
                onClick={() => setTab("listen")}
                className={`flex-1 flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-all ${
                  tab === "listen"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Headphones size={16} /> Listen to Sample
              </button>
            </div>

            {tab === "call" ? (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Your phone number</label>
                  <input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-border bg-secondary px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
                  />
                </div>
                <button
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-primary-foreground shadow-primary-glow transition-all hover:scale-[1.01]"
                  style={{ background: "var(--gradient-cta)" }}
                >
                  Get a Demo Call
                  <ArrowRight size={16} />
                </button>
                <p className="text-muted-foreground text-xs text-center">
                  Enter your number and Orbit AI will call you in seconds.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="rounded-xl bg-secondary p-6 flex flex-col items-center gap-4">
                  {/* Waveform placeholder */}
                  <div className="flex items-center gap-1 h-12">
                    {Array.from({ length: 32 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-1 rounded-full bg-primary/40"
                        style={{
                          height: `${12 + Math.sin(i * 0.5) * 20 + Math.random() * 10}px`,
                          animationDelay: `${i * 0.05}s`,
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">Sample AI receptionist call</p>
                  <button className="inline-flex items-center gap-2 rounded-lg bg-primary/10 text-primary px-4 py-2 text-sm font-medium hover:bg-primary/20 transition">
                    <Headphones size={14} /> Play Sample Call
                  </button>
                </div>
                <p className="text-muted-foreground text-xs text-center">
                  This simulates how the AI receptionist would answer customer calls for your business.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
