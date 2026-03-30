import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Send, AlertCircle } from "lucide-react";

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    notes: "",
  });
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
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
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
      errors[field]
        ? "border-destructive ring-2 ring-destructive/20"
        : "border-border focus:ring-primary/20 focus:border-primary/40"
    }`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-secondary/40">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-base mb-8">
            Have questions or ready to get started? Drop us a message.
          </p>

          <div className="bg-card rounded-2xl shadow-card border border-border p-8 text-left">
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Send size={20} className="text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  Message Sent
                </h3>
                <p className="text-muted-foreground text-sm">
                  Thanks, we'll be in touch shortly.
                </p>
              </div>
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

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:opacity-60"
                >
                  {status === "submitting" ? "Sending…" : "Get in Touch"}
                  {status !== "submitting" && <ArrowRight size={16} />}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
