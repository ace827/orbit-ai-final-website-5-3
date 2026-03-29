const Footer = () => (
  <footer className="bg-hero py-8 border-t border-hero-foreground/5">
    <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="text-hero-muted text-sm">
        © {new Date().getFullYear()} Orbit AI. All rights reserved.
      </span>
      <div className="flex gap-6 text-hero-muted text-sm">
        <a href="#" className="hover:text-hero-foreground transition-colors">Privacy</a>
        <a href="#" className="hover:text-hero-foreground transition-colors">Terms</a>
      </div>
    </div>
  </footer>
);

export default Footer;
