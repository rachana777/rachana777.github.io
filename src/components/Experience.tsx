const experiences = [
  {
    role: "Freelance QA Tester",
    company: "Digivante, Remote",
    period: "Nov 2025 – Present",
    points: [
      "Tested web and mobile applications from an end user perspective in crowdtesting projects.",
      "Reported defects with clear steps, screenshots, and expected vs actual results.",
      "Performed exploratory testing to identify usability and functional issues.",
    ],
  },
  {
    role: "System Administrator / IT Support",
    company: "Vitality Solutions Inc., Toronto, ON",
    period: "Sept 2024 – Present",
    points: [
      "Managed Microsoft 365 services(ExchangeOnline, Sharepoint, Entra ID, Intune) including users, groups, device compliance, conditional access and Apple MDM.",
      "Troubleshoot and support third-party applications including iManage, Clio, PCLaw,and Citrix Accuro EMR.",
      "Assist in testing system changes, updates, patches, and deployments, validating functionality before and after implementation.",
      "Analyze and troubleshoot client-reported issues, identify root causes, and implement effective fixes, coordinating with teams for escalations when required.",
      "Track, prioritize and resolve incidents using Syncro PSA while maintaining SLA compliance.",
      "Document issues, troubleshooting steps, and resolutions in Hudu to support future knowledge sharing.",
    ],
  },
  {
    role: "IT Support Officer",
    company: "Loyalist College, Toronto, ON",
    period: "Sept 2022 – Sept 2023",
    points: [
      "Managed user accounts, security groups, permissions, and system access using Active Directory and Microsoft Exchange.",
      "Administered and supported college-owned Moodle LMS and organized lab environments for faculty and students.",
      "Developed a Power Apps solution to streamline lab routine checks, improving efficiency and reducing manual tracking.",
      "Automated workflows using Power Automate integrating with Outlook,Teams, Sharepoint and Forms for efficiency.",
      "Resolved service desk tickets, ensuring SLA compliance and documenting solutions.",
      "Collaborated with cross-functional teams to analyze recurring issues, research solutions and implement fixes.",
    ],
  },
  {
    role: "Enterprise Support Officer",
    company: "WebSurfer, Kathmandu, Nepal",
    period: "Jan 2019 – July 2020",
    points: [
      "Provided technical support to corporate clients, troubleshooting network and connectivity issues.",
      "Collaborated with senior infrastructure teams to configure and troubleshoot routers, switches and wifi access points.",
      "Demonstrated strong problem-solving and research skills to identify and resolve technical issues.",
      "Monitored systems using Nagios monitoring tool,generated and visualized performance reports.",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="section-padding bg-card">
    <div className="max-w-4xl mx-auto space-y-10">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-sans font-medium">Career</p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Experience</h2>
        <div className="editorial-divider" />
      </div>
      <div className="space-y-0">
        {experiences.map(({ role, company, period, points }, i) => (
          <div key={i} className="relative pl-8 pb-10 border-l-2 border-border last:pb-0 last:border-l-0">
            <div className="absolute left-[-7px] top-1 w-3 h-3 rounded-full bg-primary" />
            <p className="text-xs uppercase tracking-widest text-primary font-sans font-medium mb-1">{period}</p>
            <h3 className="font-serif text-xl font-semibold text-foreground">{role}</h3>
            <p className="text-base text-muted-foreground font-sans mb-4">{company}</p>
            <ul className="space-y-2">
              {points.map((point, j) => (
                <li key={j} className="text-sm text-muted-foreground font-sans font-medium leading-relaxed flex gap-2">
                  <span className="text-primary mt-1 shrink-0">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
