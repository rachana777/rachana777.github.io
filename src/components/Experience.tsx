const experiences = [
  {
    role: "Freelance QA Tester",
    company: "Digivante, Remote",
    period: "Nov 2025 – Present",
    points: [
      "Performed exploratory testing to uncover edge cases.",
      "Tested web and mobile applications to identify functional, usability, and customer-impacting issues.",
      "Reported software defects and documented clear steps, expected behavior, actual results and supporting evidences.",

    ],
  },
  {
    role: "System Administrator",
    company: "Vitality Solutions Inc., Toronto, ON",
    period: "Sept 2024 – Present",
    points: [
      "Manage Microsoft 365 and Exchange environments including mailbox configuration, mail flow rules, distribution groups, outlook and other office apps connectivity troubleshooting for end users. ",
      "Administer Google workspace at the admin level- user provisioning/deprovisioning, email delivery troubleshooting(SPF,DKIM, DMARC), and third party app integrations.",
      "Configure and maintain Microsoft Entra ID for identity management, MFA rollout and conditional access policies to strengthen organizational security.",
      "Deploy and manage Microsoft Intune for device enrollment, MDM/MAM policy configuration and endpoint compliance across pc and mobile devices.",
      "Administer Avanan email security platform-investigating phishing alerts,quarantine management and configuring email filtering policies.",
      "Provide technical support for SaaS and enterprise applications including Clio, iManage, Pclaw,Citrix and Accuro EMR.",
      "Using Halo PSA to manage client tickets:triage, documentation,escalation,and resolution tracking-maintaining detailed records that enable trend analysis and knowledge base distributions.",
      "Proactively identify recurring issues patterns across tickets to flag systematic problems and drive process improvements, reducing repeat incidents.",
      "Communicate technical issues and resolutions clearly to technical and non-technical users consistently receiving positive client feedback.",

    ],
  },
  {
    role: "IT Support Officer",
    company: "Loyalist College, Toronto, ON",
    period: "Sept 2022 – Sept 2023",
    points: [
      "Managed user accounts, security groups, permissions, and system access using Active Directory and Microsoft Exchange.",
      "Resolved service desk tickets, ensuring SLA compliance and documenting solutions.",
      "Collaborated with cross-functional teams to analyze recurring issues, research solutions and implement fixes.",
      "Automated workflows using Power Automate integrating with Outlook,Teams, Sharepoint and Forms for efficiency.",
      "Developed a Power Apps solution to streamline lab routine checks, improving efficiency and reducing manual tracking.",
      "Provided technical support for faculty, staff and students by troubleshooting software, application access and hardware issues.",

    ],
  },
  {
    role: "Enterprise Support Officer",
    company: "WebSurfer, Kathmandu, Nepal",
    period: "Jan 2019 – July 2020",
    points: [
      "Provided technical support to corporate clients, troubleshooting network and connectivity issues.",
      "Monitored systems using Nagios monitoring tool,generated and visualized performance reports.",
      "Collaborated with infrastructure teams to resolve escalated technical problems and improve service reliability.",

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
                <li key={j} className="text-sm text-muted-foreground font-sans font-medium leading-relaxed flex gap-2 text-justify">
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
