const Footer = () => (
  <footer className="py-8 border-t border-border bg-background">
    <div className="container mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Orbit AI. All rights reserved.
      </span>
      <div className="flex gap-6 text-muted-foreground text-sm">
        <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
        <a href="#" className="hover:text-foreground transition-colors">Terms</a>
      </div>
    </div>
  </footer>
);

export default Footer;
