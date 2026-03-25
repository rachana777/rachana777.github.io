const projects = [
  {
    title: "Selenium Automation Project",
    tech: "Selenium, Java",
    description: "Built automated test suites using Selenium WebDriver with Page Object Model pattern and TestNG framework for web application testing.",
    github: "https://github.com/rachana777/SeleniumPro",
  },
  {
    title: "Hotel Booking API Testing",
    tech: "Postman",
    description: "Performed comprehensive API testing on a hotel booking system, validating endpoints, request/response schemas, and error handling scenarios.",
    github: "https://github.com/rachana777/Hotel-Booking-API-Manual-Testing",
  },
  {
    title: "Manual Testing Projects",
    tech: "Excel, Test Case Design",
    description: "Designed and executed test cases, documented defects, and created traceability matrices for multiple web applications.",
    github: "https://github.com/rachana777/Ecommerce_Manual_Testing01",
  },
];

const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-6xl mx-auto space-y-10">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-sans font-medium">Work</p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Projects</h2>
        <div className="editorial-divider" />
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(({ title, tech, description, github }) => (
          <div key={title} className="group p-6 rounded-lg border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300">
            <div className="mb-4">
              <span className="text-xs font-sans px-3 py-1 rounded-full bg-accent text-accent-foreground">{tech}</span>
            </div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-sm text-muted-foreground font-sans font-light leading-relaxed mb-4">{description}</p>
            <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-sans text-primary hover:text-primary/80 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
