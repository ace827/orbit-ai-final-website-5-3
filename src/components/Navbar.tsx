import { useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navigateToDemo } from "@/lib/demo-navigation";

const navLinks = [
  { label: "Demo", href: "#demo" },
  { label: "Benefits", href: "#benefits" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleDemoNavigation = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setOpen(false);
    navigateToDemo();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-14 px-4 lg:px-8">
        <a href="#" className="text-foreground font-heading font-bold text-lg tracking-tight">
          Orbit <span className="text-gradient">AI</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={l.href === "#demo" ? handleDemoNavigation : undefined}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#demo"
            onClick={handleDemoNavigation}
            className="group inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-glow"
          >
            Try the Live Demo
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 overflow-hidden"
          >
            <div className="flex flex-col gap-3 p-5">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={l.href === "#demo" ? handleDemoNavigation : () => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground text-sm font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#demo"
                onClick={handleDemoNavigation}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground mt-2"
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
