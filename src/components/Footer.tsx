import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-10 border-t border-border/50 bg-background relative">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.02] to-transparent" />
    <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
      <div className="flex items-center gap-2">
        <span className="text-foreground font-heading font-bold text-sm">
          Orbit <span className="text-gradient">AI</span>
        </span>
        <span className="text-muted-foreground/40">·</span>
        <span className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
      <div className="flex gap-6 text-muted-foreground text-sm">
        <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
        <Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
