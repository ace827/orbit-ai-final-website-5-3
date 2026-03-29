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
  <section className="py-24 md:py-32 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            It Sounds Like a <span className="text-gradient">Real Receptionist</span>
          </h2>
          <p className="text-muted-foreground text-base mb-8">
            No awkward pauses. No hold music. Just a natural, professional conversation.
          </p>

          <div className="space-y-5">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <f.icon size={16} className="text-primary" />
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
          className="bg-card rounded-2xl border border-border p-6"
        >
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Sample Conversation</p>
          <div className="space-y-3">
            {sampleTranscript.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "Orbit AI" ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "Orbit AI"
                      ? "bg-primary/5 text-foreground rounded-bl-sm"
                      : "bg-secondary text-foreground rounded-br-sm"
                  }`}
                >
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                    {msg.role}
                  </span>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AISoundsSection;
