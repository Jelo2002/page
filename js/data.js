/**
 * Jeremy Angelo Lim - Portfolio Data Source
 * Centralized data object for easy updates and dynamic rendering.
 */

const portfolioData = {
  profile: {
    name: "Jeremy Angelo Lim",
    role: "Administrative & Operations Support Specialist",
    tagline: "Virtual Assistance • Administrative Support • Bookkeeping • IT Support • Systems & Process Management",
    location: "Philippines",
    email: "jeremyangelolim.work@gmail.com", // Customizable
    phone: "+63 9XX XXX XXXX", // Customizable
    linkedin: "https://linkedin.com/in/jeremyangelolim",
    github: "https://github.com/jeremyangelolim",
    discord: "jeremy_ops",
    availability: "Available for Remote & Full-time Roles",
    summary: "Detail-oriented and tech-savvy Administrative & Operations Support Specialist with proven experience supporting growing businesses through administrative assistance, bookkeeping, data management, IT support, and custom web-based process automation. Experienced in handling day-to-day operations, maintaining records, managing digital systems, preparing reports, coordinating tasks, and troubleshooting technical issues. Comfortable working independently, learning new software rapidly, and creating systems that make repetitive business processes more organized and efficient.",
    keyMetrics: [
      { label: "Core Domains", value: "4+", detail: "Admin, Bookkeeping, IT & Systems" },
      { label: "Process Efficiency", value: "100%", detail: "Organized & Structured Workflows" },
      { label: "Availability", value: "Remote", detail: "Global Timezone Adaptable" },
      { label: "Tech Stack", value: "Full-Spectrum", detail: "Web Tools, DB & Business Apps" }
    ]
  },

  valueProps: [
    {
      id: "organized",
      icon: "folder-check",
      title: "Meticulously Organized",
      description: "I keep information, files, database records, and operational tasks strictly structured, indexed, and easy for any team member to access in seconds."
    },
    {
      id: "tech-savvy",
      icon: "cpu",
      title: "Tech-Savvy & Adaptive",
      description: "I troubleshoot hardware/software problems quickly, configure web hosting & databases, and rapidly master unfamiliar software and platforms."
    },
    {
      id: "process-oriented",
      icon: "zap",
      title: "Process & Automation Mindset",
      description: "I identify repetitive manual bottlenecks and build custom digital workflows, spreadsheets, and web portals that make daily operations faster."
    },
    {
      id: "reliable",
      icon: "shield-check",
      title: "Reliable & Autonomous",
      description: "I work independently with high integrity, manage end-to-end responsibilities, meet tight deadlines, and consistently follow through on deliverables."
    },
    {
      id: "adaptable",
      icon: "layers",
      title: "Versatile & Cross-Functional",
      description: "Equally comfortable handling executive admin tasks, balancing bookkeeping ledgers, debugging IT issues, and developing internal business systems."
    }
  ],

  coreSkillPillars: [
    {
      id: "admin",
      name: "Administrative Support",
      icon: "clipboard-list",
      description: "End-to-end business operations, workflow coordination, schedule oversight, and high-precision documentation.",
      skills: [
        { name: "Data Entry & Data Management", level: "Expert" },
        { name: "Document & File Organization", level: "Expert" },
        { name: "Email & Communication Management", level: "Advanced" },
        { name: "Scheduling & Calendar Management", level: "Advanced" },
        { name: "Records & Information Management", level: "Expert" },
        { name: "Administrative Coordination", level: "Advanced" },
        { name: "Report Preparation & Analysis", level: "Advanced" },
        { name: "Task & Workflow Management", level: "Advanced" }
      ]
    },
    {
      id: "bookkeeping",
      name: "Business & Bookkeeping Support",
      icon: "calculator",
      description: "Accurate financial records, payroll calculation, invoice reconciliation, and leave/overtime auditing.",
      skills: [
        { name: "Bookkeeping Assistance", level: "Advanced" },
        { name: "Expense & Sales Tracking", level: "Advanced" },
        { name: "Payroll & Payslip Support", level: "Advanced" },
        { name: "Leave & Overtime Monitoring", level: "Expert" },
        { name: "Basic Accounts Management", level: "Intermediate" },
        { name: "Invoice Management & Billing", level: "Advanced" },
        { name: "Financial Data Organization", level: "Expert" }
      ]
    },
    {
      id: "it",
      name: "Technical & IT Support",
      icon: "server",
      description: "Hardware & software troubleshooting, network configuration, web hosting, domain maintenance, and user support.",
      skills: [
        { name: "Hardware & Software Troubleshooting", level: "Expert" },
        { name: "User & Account Access Support", level: "Advanced" },
        { name: "Network & Device Troubleshooting", level: "Advanced" },
        { name: "Website & cPanel Hosting Mgmt", level: "Advanced" },
        { name: "Basic Database Management", level: "Advanced" },
        { name: "Microsoft Office & Google Workspace", level: "Expert" },
        { name: "XAMPP, MySQL & phpMyAdmin", level: "Advanced" },
        { name: "HTML, CSS, JavaScript & PHP", level: "Intermediate" }
      ]
    },
    {
      id: "automation",
      name: "Systems & Automation",
      icon: "workflow",
      description: "Building custom web-based portals, automated knowledge bases, and custom tools to eliminate manual administrative overhead.",
      skills: [
        { name: "Business Process Automation", level: "Advanced" },
        { name: "Internal Management Systems", level: "Advanced" },
        { name: "HR & Leave Management Systems", level: "Advanced" },
        { name: "Training & Knowledge Base Systems", level: "Advanced" },
        { name: "Workflow Improvement & Optimization", level: "Advanced" },
        { name: "Database & Record Architecture", level: "Advanced" }
      ]
    }
  ],

  projects: [
    {
      id: "leave-management-system",
      title: "Employee Leave & Overtime Management System",
      category: "systems",
      categoryLabel: "Systems & Automation",
      highlight: "Custom Web Application",
      description: "Developed and maintained a centralized internal web portal for managing employee leave balances, automated request submissions, overtime tracking, and manager approvals with Google Sign-In authentication.",
      impact: "Eliminated manual paperwork, reduced request turnaround by 80%, and ensured 100% audit-accurate leave balances and overtime calculations for payroll integration.",
      techStack: ["PHP", "MySQL", "JavaScript", "Google OAuth / Sign-In", "Bootstrap/CSS", "phpMyAdmin"],
      features: [
        "Real-time employee leave balance calculation and deduction",
        "Overtime submission with manager approval workflows",
        "Google Sign-In integration for seamless enterprise account login",
        "Automated administrative reports exportable for payroll processing",
        "Role-based access control (Admin, Manager, Employee)"
      ],
      mockupType: "dashboard",
      demoBadges: ["Live Architecture", "Internal Tool", "Zero Data Discrepancy"]
    },
    {
      id: "hr-employee-portal",
      title: "HR & Employee Management System",
      category: "systems",
      categoryLabel: "Systems & Automation",
      highlight: "Comprehensive HR Platform",
      description: "Designed and built internal HR tooling covering complete employee lifecycle information, attendance/overtime logs, payroll-ready data structures, task tracking, and administrative workflows.",
      impact: "Centralized fragmented spreadsheets into a single unified database with structured access controls and export capabilities.",
      techStack: ["PHP", "MySQL", "HTML5/CSS3", "JavaScript", "XAMPP", "cPanel"],
      features: [
        "Centralized employee profile and digital document storage",
        "Attendance and daily time record (DTR) consolidation",
        "Task assignment and department workflow tracking",
        "Payroll calculation assistant with payslip generator",
        "Customizable department categories and role permissions"
      ],
      mockupType: "portal",
      demoBadges: ["HR Operations", "Database Driven", "Scalable Schema"]
    },
    {
      id: "sop-knowledge-base",
      title: "SOP & Searchable Knowledge Base System",
      category: "admin",
      categoryLabel: "Admin & Operations",
      highlight: "Knowledge Management Portal",
      description: "Architected and structured a centralized digital repository for company Standard Operating Procedures (SOPs), categorized client dossiers, searchable documentation, and employee training guides.",
      impact: "Reduced employee onboarding time, eliminated procedural confusion, and allowed team members to retrieve critical operating guides in under 10 seconds.",
      techStack: ["PHP / Markdown", "MySQL", "JavaScript Search", "HTML/CSS", "Google Docs / Workspace"],
      features: [
        "Instant live full-text search across all company SOPs",
        "Categorized navigation for department-specific guidelines",
        "Client profile dossiers with credential and requirement management",
        "Revision history and last-updated auditing",
        "Print-ready and exportable operating checklists"
      ],
      mockupType: "docs",
      demoBadges: ["Instant Search", "Zero Confusion", "Streamlined Onboarding"]
    },
    {
      id: "business-process-automation",
      title: "Business Process & Digital Workflow Automation",
      category: "systems",
      categoryLabel: "Systems & Automation",
      highlight: "Workflow Engineering",
      description: "Engineered automated digital workflows and interconnected spreadsheet-to-database pipelines designed to eliminate repetitive manual data entry, reduce human error, and accelerate business operations.",
      impact: "Saved 15+ hours weekly on manual administrative data consolidation while increasing record precision across multiple business units.",
      techStack: ["Google Apps Script", "Google Sheets (Advanced Formulas)", "PHP Scripts", "Zapier/Webhooks", "MySQL"],
      features: [
        "Automated data extraction and validation from forms to master databases",
        "Automated email notifications and reminder triggers for pending approvals",
        "Recurring task schedulers and automated status reporting",
        "Cross-platform syncing between Google Workspace and local databases",
        "Error-handling checks to flag inconsistent data entries immediately"
      ],
      mockupType: "workflow",
      demoBadges: ["15+ hrs/wk Saved", "Error Proofing", "Automated Triggers"]
    },
    {
      id: "website-hosting-management",
      title: "Website & Server Hosting Infrastructure Management",
      category: "it",
      categoryLabel: "IT & Infrastructure",
      highlight: "Web & Server Operations",
      description: "End-to-end administration of web domains, cPanel hosting environments, MySQL databases, SSL certificates, PHP runtime environments, and regular website backups and performance monitoring.",
      impact: "Maintained 99.9% uptime, prevented data loss via automated backup schedules, and ensured secure SSL/HTTPS deployment across all web assets.",
      techStack: ["cPanel", "DNS / Domain Registrars", "MySQL Database Admin", "SSL/TLS", "FTP/SFTP", "PHP Config"],
      features: [
        "DNS zone file configuration and custom domain routing",
        "cPanel account management, email account setups, and forwarders",
        "MySQL database creation, user privilege control, and phpMyAdmin imports",
        "SSL certificate issuance and automatic renewal monitoring",
        "Regular full-site backups and disaster recovery verification"
      ],
      mockupType: "server",
      demoBadges: ["99.9% Uptime", "cPanel & DNS", "Automated Backups"]
    },
    {
      id: "church-av-broadcast",
      title: "Live Production, Audio/Visual & Broadcast System",
      category: "it",
      categoryLabel: "IT & Infrastructure",
      highlight: "Live Event & Broadcast Ops",
      description: "Lead technical setup and live broadcast operations for church services and events, managing multi-screen presentation software, digital audio consoles, video switchers, and livestream encoding.",
      impact: "Delivered glitch-free weekly live broadcasts and multi-display presentations for audiences of hundreds with zero audio/video dropouts.",
      techStack: ["Behringer X32 Digital Console", "ATEM Mini Video Switcher", "FreeShow", "OBS Studio", "Multi-Display Matrix", "NDI / Streaming"],
      features: [
        "Multi-camera live switching with graphics overlay via ATEM Mini",
        "Digital audio routing, multi-channel EQ, and live mix monitoring on Behringer X32",
        "Multi-screen projection and lyrics synchronization using FreeShow",
        "Stable HD livestream encoding to YouTube/Facebook via OBS Studio",
        "Rapid real-time troubleshooting under live broadcast time constraints"
      ],
      mockupType: "broadcast",
      demoBadges: ["Live Broadcast", "Behringer X32", "ATEM Mini & OBS"]
    }
  ],

  experience: [
    {
      role: "Virtual Assistant / Administrative Support",
      company: "Freelance / Remote",
      location: "Philippines",
      period: "Recent / Ongoing",
      type: "Remote",
      badge: "Operations & VA",
      responsibilities: [
        "Provided proactive administrative and operational support for diverse business activities and client requirements.",
        "Organized digital files, database records, customer data, and operational business information with zero data loss.",
        "Assisted with bookkeeping-related tasks, expense tracking, invoice generation, and financial record auditing.",
        "Managed recurring tasks, executive calendars, and workflows to ensure strict adherence to deadlines.",
        "Assisted with creating and maintaining internal business systems and structured document repositories.",
        "Communicated with clients and cross-functional team members regarding tasks, requirements, and status updates.",
        "Identified repetitive manual processes and developed more efficient digital workflows and automation tools."
      ],
      tools: ["Google Workspace", "Microsoft Office", "Trello/Asana", "Slack/Discord", "Google Sheets", "Canva"]
    },
    {
      role: "Bookkeeping & Business Support",
      company: "NCP Bookkeeping",
      location: "Philippines",
      period: "Professional Experience",
      type: "Financial & Systems Support",
      badge: "Bookkeeping & HR",
      responsibilities: [
        "Assisted with day-to-day bookkeeping, invoice reconciliation, and financial administration.",
        "Maintained employee records, payroll computations, leave records, and overtime tracking logs.",
        "Structured and organized raw financial and operational data for executive summary reporting.",
        "Assisted in developing and maintaining internal systems for HR and administrative processes.",
        "Worked extensively with business software, financial spreadsheets, databases, and web-based systems.",
        "Supported the development of employee onboarding documentation and bookkeeping training materials."
      ],
      tools: ["Bookkeeping Software", "Excel / Google Sheets", "Payroll Calculators", "MySQL", "Internal HR Portals"]
    },
    {
      role: "IT / Technical Support Specialist",
      company: "NCP Virtual Solutions / IT Support",
      location: "Philippines",
      period: "Professional Experience",
      type: "IT & Systems Development",
      badge: "Tech & Web Support",
      responsibilities: [
        "Provided technical assistance for computers, operating systems, business software, networks, and internal tools.",
        "Diagnosed and troubleshot complex hardware, software, and network-related issues.",
        "Managed business websites, cPanel hosting environments, MySQL databases, and internal web portals.",
        "Assisted users with technical onboarding, system access permissions, and account configurations.",
        "Developed and maintained lightweight web-based internal business systems (PHP, MySQL, JavaScript).",
        "Helped automate manual administrative processes through custom scripts and digital tooling."
      ],
      tools: ["PHP", "MySQL", "cPanel", "phpMyAdmin", "Windows OS", "Remote Desktop", "XAMPP", "Network Tools"]
    },
    {
      role: "Church IT & Technical Operations Specialist",
      company: "Church Technical Team",
      location: "Philippines",
      period: "Technical Operations",
      type: "A/V & Live Broadcast",
      badge: "Live Operations",
      responsibilities: [
        "Supported live technical operations, multi-screen presentation systems, and multimedia delivery for church services.",
        "Managed presentation computers, multi-monitor displays, audio/visual hardware, and livestream technology.",
        "Troubleshot live audio, video, network, and software glitches on the fly under high-pressure event conditions.",
        "Operated Behringer X32 digital audio consoles, ATEM Mini video switchers, FreeShow presentation software, and OBS.",
        "Coordinated full technical setups and pre-event diagnostic checks to guarantee 100% operational readiness."
      ],
      tools: ["Behringer X32", "ATEM Mini", "FreeShow", "OBS Studio", "Audio Routing", "Multi-Display Setups"]
    }
  ],

  toolCategories: [
    {
      name: "Productivity & Collaboration",
      icon: "briefcase",
      items: ["Google Workspace", "Microsoft Office", "Google Sheets", "Microsoft Excel", "Google Docs", "Google Drive", "Slack", "Discord", "Trello"]
    },
    {
      name: "Business & Financial Systems",
      icon: "trending-up",
      items: ["Bookkeeping Systems", "Payroll Calculators", "HR Management Systems", "Time & Attendance Tracking", "Invoice Management", "Expense Logging", "CRM Systems"]
    },
    {
      name: "Technical & Web Development",
      icon: "code-2",
      items: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "XAMPP", "phpMyAdmin", "cPanel", "GitHub / Git", "Google OAuth"]
    },
    {
      name: "IT, Infrastructure & Operations",
      icon: "hard-drive",
      items: ["Windows OS", "Hardware Troubleshooting", "Network Configuration", "Remote Desktop Support", "DNS & Domain Management", "Website Maintenance", "Database Backups"]
    },
    {
      name: "Live Audio/Visual & Multimedia",
      icon: "video",
      items: ["Behringer X32 Audio Console", "ATEM Mini Video Switcher", "OBS Studio", "FreeShow Presentation", "Live Audio Mixing", "Multi-Screen Projection"]
    }
  ],

  education: {
    school: "Nemesio I. Yabut High School",
    strand: "Senior High School – General Academic Strand (GAS)",
    period: "2021 – 2023",
    location: "Philippines",
    focus: "Broad academic foundation covering administration, communication, quantitative problem solving, and analytical thinking."
  }
};
