const skillGroups = [
  {
    title: "Testing & QA",
    items: ["Manual Testing", "Functional & Regression Testing", "Exploratory Testing", "Defect Reporting"],
  },
  {
    title: "API & Automation",
    items: ["Postman", "Selenium WebDriver (POM)", "TestNG", "Java"],
  },
  {
    title: "Microsoft & Cloud",
    items: ["Microsoft 365", "Intune MDM", "Azure Virtual Desktop", "Active Directory"],
  },
  {
    title: "Tools",
    items: ["GitHub", "Jenkins", "JIRA", "Syncro", "Hudu"],
  },
  {
    title: "Third Party Apps",
    items: ["Clio", "PCLaw", "iManage", "Citrix Accuro EMR"],
  },
  {
    title: "Soft Skills",
    items: ["Collaboration", "Research", "Problem-Solving", "Documentation"],
  },
];

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-6xl mx-auto space-y-10">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-sans font-medium">Expertise</p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Skills</h2>
        <div className="editorial-divider" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map(({ title, items }) => (
          <div key={title} className="p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors">
            <h3 className="font-serif text-lg font-semibold text-foreground mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span key={item} className="text-xs font-sans px-3 py-1.5 rounded-full bg-accent text-accent-foreground">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
