const Footer = () => (
  <footer className="py-10 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-sans">
        © {new Date().getFullYear()} Rachana Poudel Khadka. All rights reserved.
      </p>
      <div className="flex gap-6">
        <a href="https://www.linkedin.com/in/rachanapoudel3ab1/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary font-sans transition-colors">
          LinkedIn
        </a>
        <a href="mailto:rachanapoudel777@gmail.com" className="text-sm text-muted-foreground hover:text-primary font-sans transition-colors">
          Email
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
