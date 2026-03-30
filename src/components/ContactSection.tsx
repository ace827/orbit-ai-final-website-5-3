import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send, AlertCircle, Zap, Settings, Headphones, Home } from "lucide-react";

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

const supportPoints = [
  { icon: Zap, title: "Fast setup", sub: "Get up and running quickly" },
  { icon: Settings, title: "Fully customized to your business", sub: "Tailored to how you operate" },
  { icon: Headphones, title: "Ongoing support available", sub: "We're here when you need us" },
  { icon: Home, title: "Built for home service businesses", sub: "Designed for your industry" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", notes: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: "" }));
    if (name === "phone") {
      setForm((prev) => ({ ...prev, phone: formatPhone(value) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.company.trim()) errs.company = "Company is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = "Please enter a valid email";
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length !== 10) errs.phone = "Please enter a valid 10-digit phone number";
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setStatus("submitting");
    try {
      const digits = form.phone.replace(/\D/g, "");
      await fetch("https://hook.us2.make.com/0rgnefngxpwjccybmgvhwuteegmcswke", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          company: form.company.trim(),
          email: form.email.trim(),
          phone: `+1${digits}`,
          notes: form.notes.trim(),
        }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: string) =>
    `w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition ${
      errors[field] ? "border-destructive ring-2 ring-destructive/20" : "border-border focus:ring-primary/20 focus:border-primary/40"
    }`;

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-gradient-section overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-block text-primary text-xs font-semibold tracking-widest uppercase mb-4">
            Contact
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Get in Touch</h2>
          <p className="text-muted-foreground text-base">Have questions or ready to get started? We'd love to hear from you.</p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            {supportPoints.map(({ icon: Icon, title, sub }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="group bg-card rounded-2xl border border-border p-5 shadow-card card-hover flex items-start gap-4 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 relative z-10 group-hover:shadow-glow transition-shadow duration-300">
                  <Icon size={18} className="text-primary" />
                </div>
                <div className="relative z-10">
                  <h4 className="font-heading text-sm font-bold text-foreground">{title}</h4>
                  <p className="text-muted-foreground text-xs mt-1">{sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl shadow-elevated border border-border p-8 text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <Send size={22} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">Message Sent</h3>
                  <p className="text-muted-foreground text-sm">Thanks, we'll be in touch shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                    <input type="text" name="name" maxLength={100} placeholder="John Smith" value={form.name} onChange={handleChange} className={inputClass("name")} />
                    {errors.name && <p className="text-destructive text-xs mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Company *</label>
                    <input type="text" name="company" maxLength={100} placeholder="Your Business Name" value={form.company} onChange={handleChange} className={inputClass("company")} />
                    {errors.company && <p className="text-destructive text-xs mt-1.5">{errors.company}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                    <input type="email" name="email" maxLength={255} placeholder="john@company.com" value={form.email} onChange={handleChange} className={inputClass("email")} />
                    {errors.email && <p className="text-destructive text-xs mt-1.5">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone *</label>
                    <div className={`flex items-center rounded-lg border bg-background transition ${errors.phone ? "border-destructive ring-2 ring-destructive/20" : "border-border focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary/40"}`}>
                      <span className="pl-4 pr-2 text-sm font-medium text-muted-foreground select-none">+1</span>
                      <input type="tel" name="phone" placeholder="(555) 123-4567" value={form.phone} onChange={handleChange} className="w-full bg-transparent px-2 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none" />
                    </div>
                    {errors.phone && <p className="text-destructive text-xs mt-1.5">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Notes</label>
                    <textarea name="notes" maxLength={1000} rows={3} placeholder="Tell us about your business or questions..." value={form.notes} onChange={handleChange} className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition resize-none" />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-destructive text-sm">
                      <AlertCircle size={14} />
                      Something went wrong, please try again.
                    </div>
                  )}

                  <button type="submit" disabled={status === "submitting"} className="group w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-glow disabled:opacity-60">
                    {status === "submitting" ? "Sending…" : "Get in Touch"}
                    {status !== "submitting" && <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
