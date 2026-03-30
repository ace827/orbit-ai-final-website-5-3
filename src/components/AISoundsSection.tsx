import { motion } from "framer-motion";
import { MessageCircle, HelpCircle, CalendarCheck } from "lucide-react";

const features = [
  { icon: MessageCircle, title: "Natural Voice Conversations", desc: "Sounds human, not robotic. Callers don't know it's AI." },
  { icon: HelpCircle, title: "Handles Common Questions", desc: "Pricing, availability, service areas — answered accurately." },
  { icon: CalendarCheck, title: "Guides Callers to Book", desc: "Moves the conversation toward scheduling or next steps." },
];

const sampleTranscript = [
  { role: "Caller", text: "Hi, I need someone to fix a leaky faucet. Do you guys do that?" },
  { role: "Orbit AI", text: "Absolutely! We handle all plumbing repairs. Can I get your name and address to schedule a technician?" },
  { role: "Caller", text: "Sure, it's Mike at 42 Oak Street." },
  { role: "Orbit AI", text: "Got it, Mike. We have availability tomorrow between 10 AM and 1 PM. Would that work for you?" },
];

const AISoundsSection = () => (
  <section className="relative py-20 md:py-28 bg-background overflow-hidden">
    <div className="absolute inset-0 bg-dot-pattern opacity-15" />
    <div className="absolute top-0 left-0 right-0 section-divider" />

    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Hear It In Action
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            It Sounds Like a Real Receptionist
          </h2>
          <p className="text-muted-foreground text-base mb-8">
            No awkward pauses. No hold music. Just a natural, professional conversation.
          </p>

          <div className="space-y-5">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4 group">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
                  <f.icon size={17} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground text-sm mb-0.5">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-2xl border border-border shadow-elevated p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
          <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-5">Sample Conversation</p>
          <div className="space-y-3">
            {sampleTranscript.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: msg.role === "Orbit AI" ? -10 : 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className={`flex ${msg.role === "Orbit AI" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "Orbit AI"
                      ? "bg-primary/5 text-foreground rounded-bl-sm border border-primary/10"
                      : "bg-secondary text-foreground rounded-br-sm"
                  }`}
                >
                  <span className={`block text-[10px] font-bold uppercase tracking-wider mb-1 ${
                    msg.role === "Orbit AI" ? "text-primary" : "text-muted-foreground"
                  }`}>
                    {msg.role}
                  </span>
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AISoundsSection;
