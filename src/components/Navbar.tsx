import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Demo", href: "#demo" },
  { label: "Benefits", href: "#benefits" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-md border-b border-hero-foreground/5">
      <div className="container mx-auto flex items-center justify-between h-14 px-4 lg:px-8">
        <a href="#" className="text-hero-foreground font-heading font-bold text-lg tracking-tight">
          Orbit <span className="text-gradient">AI</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-hero-muted hover:text-hero-foreground text-sm font-medium transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
            style={{ background: "var(--gradient-cta)" }}
          >
            Try the Live Demo
          </a>
        </div>

        <button className="md:hidden text-hero-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-hero border-t border-hero-foreground/5 overflow-hidden"
          >
            <div className="flex flex-col gap-3 p-5">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-hero-muted hover:text-hero-foreground text-sm font-medium">
                  {l.label}
                </a>
              ))}
              <a
                href="#demo"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold text-primary-foreground mt-2"
                style={{ background: "var(--gradient-cta)" }}
              >
                Try the Live Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
