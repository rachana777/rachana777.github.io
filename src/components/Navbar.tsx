import { useState } from "react";

const navItems = ["About", "Skills", "Experience", "Projects", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-serif text-xl font-semibold text-foreground tracking-tight">
          R<span className="text-primary">.</span>
        </button>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item)} className="text-sm font-sans text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase">
              {item}
            </button>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <><path d="M3 6h18" /><path d="M3 12h18" /><path d="M3 18h18" /></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollTo(item)} className="block text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide">
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
