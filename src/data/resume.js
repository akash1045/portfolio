export const data = {
  name: "Akash Chavan",
  title: "Full Stack Developer",
  subtitle: "Fintech & Investment Platforms",
  tagline: "Building enterprise-grade systems for 90M+ investor accounts",
  contact: {
    phone: "+91-8208023237",
    email: "chavanak870@gmail.com",
    location: "Satara, Maharashtra, India",
    linkedin: "linkedin.com/in/akash-chavan",
    linkedinUrl: "https://linkedin.com/in/akash-chavan",
  },
  stats: [
    { value: "90M+", label: "Investor Accounts Served" },
    { value: "3.5+", label: "Years Experience" },
    { value: "35+", label: "RESTful APIs Built" },
    { value: "99.9%", label: "API Uptime SLA" },
  ],
  skills: {
    Languages: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SQL", "Bash"],
    Frameworks: ["React.js", "Redux Toolkit", "React Hooks", "Node.js", "Express.js", "GraphQL"],
    Tools: ["Git", "Docker", "CI/CD Pipelines", "Jest", "React Testing Library", "Linux", "Postman"],
    Databases: ["MSSQL", "SQL"],
    Concepts: ["RESTful APIs", "JWT Auth", "RBAC", "Lazy Loading", "Code Splitting", "Microservices", "SRE", "Agile/Scrum", "WCAG"],
  },
  experience: [
    {
      company: "KFin Technologies Pvt Ltd",
      role: "Software Developer — Fintech & Investment Platforms",
      period: "Nov 2022 – Present",
      location: "Hyderabad, India",
      highlights: [
        "Architected scalable React.js frontends using Redux Toolkit & TypeScript, slashing app load time by 25%",
        "Spearheaded full-stack Phygital Distributor Investment Portal (React.js + Node.js), accelerating navigation speed by 20% for 10,000+ distributors",
        "Delivered 35+ RESTful APIs for Bajaj Investor Portal, boosting transaction efficiency by 15% and cutting API response time by 30%",
        "Optimised Core Web Vitals via lazy loading, code splitting, and React.memo/useMemo, achieving 30% reduction in page load time",
        "Fortified platform security with JWT authentication, RBAC, and layered middleware — zero unauthorised access incidents over 18 months",
        "Designed SRE monitoring dashboards sustaining 99.9% API uptime SLA across 10+ mission-critical production services",
        "Resolved high-severity REST API failures in Mirae Asset Mutual Fund platform within 4 hours, reducing error rate by 40%",
        "Achieved zero-downtime across 6+ quarterly releases via Git-based CI/CD pipelines and Docker",
      ],
    },
  ],
  projects: [
    {
      name: "Phygital Distributor Investment Portal",
      stack: ["React.js", "Node.js", "Redux Toolkit", "TypeScript"],
      description:
        "End-to-end portal for real-time portfolio tracking for 65,000+ distributors. Cut navigation latency by 20% through client-side route caching and API response normalisation. Secured with JWT-based session management and granular RBAC.",
      metrics: ["65K+ Distributors", "20% Faster Navigation", "Zero Breaches — 18 Months"],
    },
    {
      name: "Bajaj Investor Portal",
      stack: ["Node.js", "Express.js", "MSSQL", "React.js"],
      description:
        "Designed and deployed 35+ RESTful API endpoints handling financial transactions worth crores. Attained 15% gain in processing throughput and 25% drop in post-release defect rate.",
      metrics: ["35+ APIs", "15% Throughput Gain", "25% Fewer Defects"],
    },
    {
      name: "SRE Monitoring Dashboard",
      stack: ["Node.js", "Cron Jobs", "Windows Task Scheduler", "REST APIs"],
      description:
        "Centralised real-time dashboard tracking health metrics across Cron Jobs, Scheduler tasks, APIs, and servers for 10+ production services. Reduced MTTR by 35% via automated alerting.",
      metrics: ["10+ Services Monitored", "99.9% Uptime SLA", "35% Faster Recovery"],
    },
  ],
  awards: [
    {
      title: "Ninja Award — Q1 2023-24",
      description:
        "Diagnosed and resolved critical REST API failures in Mirae Asset Mutual Fund production within 4 hours, reducing error rates by 40%.",
    },
    {
      title: "Ninja Award — 2nd Recognition",
      description:
        "Honoured for sustained engineering excellence and zero-downtime deployments across 6+ quarterly production releases.",
    },
  ],
  education: [
    {
      degree: "B.E. in Electronics & Telecommunication",
      institution: "Padmabhushan VasantDada Patil Institute of Technology, Pune",
      year: "2015 – 2019",
    },
    {
      degree: "CDAC Full Stack Development Certification",
      institution: "Centre for Development of Advanced Computing (CDAC), Mumbai",
      year: "2022",
    },
  ],
};
