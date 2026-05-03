import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="pt-16 pb-10 border-t border-border/50 bg-background relative">
    <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.02] to-transparent" />
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-10">
        {/* Brand */}
        <div className="space-y-3">
          <span className="text-foreground font-heading font-bold text-lg">
            Orbit <span className="text-gradient">AI</span>
          </span>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            AI voice receptionist for home services. Never miss another customer call.
          </p>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="text-foreground font-heading font-semibold text-sm uppercase tracking-wider">
            Contact Information
          </h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="font-medium text-foreground">Orbit AI</li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary/70" />
              <span>2091 Kari Dawn Ave SE, Salem, Oregon 97306</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 flex-shrink-0 text-primary/70" />
              <a
                href="mailto:ace@orbitaiautomation.com"
                className="hover:text-foreground transition-colors break-all"
              >
                ace@orbitaiautomation.com
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 flex-shrink-0 text-primary/70" />
              <a
                href="tel:9717724383"
                className="hover:text-foreground transition-colors"
              >
                971-772-4383
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="space-y-4 md:text-right">
          <h3 className="text-foreground font-heading font-semibold text-sm uppercase tracking-wider">
            Legal
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/privacy-policy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-of-service" className="hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} Orbit AI. All rights reserved.</span>
        <span>Salem, Oregon, United States</span>
      </div>
    </div>
  </footer>
);

export default Footer;
