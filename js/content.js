const SITE_CONTENT = {
  de: {
    nav: { projects: "Projekte", blog: "Blog", about: "Über mich", contact: "Kontakt" },
    home: {
      eyebrow: "Freelance IT Consultant",
      title: "Skalierbare Cloud-, Plattform- und AI-Systeme.",
      subtitle: "Ich unterstütze Unternehmen bei moderner Softwarearchitektur, Cloud-Lösungen und der sinnvollen Integration von KI.",
      primaryCta: "Projekte ansehen",
      secondaryCta: "Projekt starten",
      skillsEyebrow: "Expertise",
      skillsTitle: "Worauf ich mich fokussiere",
      projectsEyebrow: "Ausgewählte Arbeiten",
      projectsTitle: "Projekte mit echtem geschäftlichem Mehrwert",
      ctaEyebrow: "Zusammenarbeit",
      ctaTitle: "Sie brauchen Unterstützung bei Cloud, KI oder moderner Softwarearchitektur?",
      ctaButton: "Kontakt aufnehmen"
    },
    about: {
      eyebrow: "Über mich",
      title: "Technologie, Klarheit und echte Ergebnisse.",
      intro: "Ich begleite Unternehmen bei Cloud-Architektur, KI-Initiativen und skalierbarer Softwareentwicklung.",
      storyTitle: "Mein Profil",
      storyText: "Ich bin IT-Berater mit Fokus auf ERP-Architektur, Plattformen und praktische technische Lösungen. Mein Ziel ist es, komplexe Themen verständlich zu machen und Projekte nachhaltig erfolgreich umzusetzen.",
      motivationTitle: "Meine Motivation",
      motivationText: "Mich motiviert die Verbindung aus Technologie, Strategie und echter Wirkung. Gute Systeme sollen nicht nur modern sein, sondern Teams im Alltag wirklich helfen.",
      skillsTitle: "Kernkompetenzen",
      interestsTitle: "Interessen und Hobbys"
    },
    projects: {
      eyebrow: "Projekte",
      title: "Ausgewählte Projekte und Case Studies",
      intro: "Typische Beratungsfelder: Cloud-Migration, KI-Integration, Plattform-Engineering und moderne Softwarearchitektur."
    },
    blog: {
      eyebrow: "Blog",
      title: "Gedanken zu Cloud, KI und Softwarearchitektur",
      intro: "Meine Artikel, technische Einblicke und Erfahrungen aus vergangenen Projekten."
    },
    contact: {
      eyebrow: "Kontakt",
      title: "Lassen Sie uns über Ihr Projekt sprechen",
      intro: "Ersetzen Sie die Formspree-URL in dieser Datei durch Ihren eigenen Endpoint, damit Nachrichten bei Ihnen ankommen.",
      detailsTitle: "Direkter Kontakt",
      detailsText: "Sie können mich per E-Mail oder über LinkedIn erreichen. Ich freue mich auf spannende Projekte, Architekturfragen und technische Herausforderungen.",
      formName: "Name",
      formEmail: "E-Mail",
      formMessage: "Nachricht",
      formButton: "Nachricht senden"
    }
  },
  en: {
    nav: { projects: "Projects", blog: "Blog", about: "About", contact: "Contact" },
    home: {
      eyebrow: "Freelance IT Consultant",
      title: "Scalable cloud, platform and AI systems.",
      subtitle: "I help companies with modern ERP architecture, cloud solutions and practical AI integration.",
      primaryCta: "View projects",
      secondaryCta: "Start a project",
      skillsEyebrow: "Expertise",
      skillsTitle: "What I focus on",
      projectsEyebrow: "Selected work",
      projectsTitle: "Projects that create real business value",
      ctaEyebrow: "Work together",
      ctaTitle: "Need support with cloud, AI or modern ERP architecture?",
      ctaButton: "Get in touch"
    },
    about: {
      eyebrow: "About",
      title: "Technology, clarity and real results.",
      intro: "I support companies with cloud architecture, AI initiatives and scalable software delivery.",
      storyTitle: "My profile",
      storyText: "I am an IT consultant focused on ERP architecture, platforms and practical technical solutions. My goal is to make complex topics understandable and deliver lasting project value.",
      motivationTitle: "What drives me",
      motivationText: "I am motivated by the combination of technology, strategy and real-world impact. Good systems should not only be modern. They should genuinely help teams work better.",
      skillsTitle: "Core skills",
      interestsTitle: "Interests and hobbies"
    },
    projects: {
      eyebrow: "Projects",
      title: "Selected projects and case studies",
      intro: "Typical consulting areas: cloud migration, AI integration, platform engineering and modern software architecture."
    },
    blog: {
      eyebrow: "Blog",
      title: "Thoughts on cloud, AI and software architecture",
      intro: "My published articles, technical insights and lessons learned from recent projects."
    },
    contact: {
      eyebrow: "Contact",
      title: "Let’s discuss your project",
      intro: "Replace the Formspree URL in this file with your own endpoint to receive messages.",
      detailsTitle: "Direct contact",
      detailsText: "You can reach me by email or through LinkedIn. I am always happy to discuss interesting projects, architecture topics and technical challenges.",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formButton: "Send message"
    }
  }
};

const HOME_SKILLS = {
  de: [
    { title: "Cloud Architecture", text: "Architektur für moderne, skalierbare Cloud-Plattformen." },
    { title: "AI Integration", text: "Praktische Einbindung von KI in Produkte, Prozesse und Workflows." },
    { title: "Backend Systems", text: "Robuste Services, APIs und saubere technische Strukturen." },
    { title: "DevOps & Delivery", text: "Bessere Abläufe für Deployment, Betrieb und Zusammenarbeit." }
  ],
  en: [
    { title: "Cloud Architecture", text: "Architecture for modern, scalable cloud platforms." },
    { title: "AI Integration", text: "Practical AI integration into products, processes and workflows." },
    { title: "Backend Systems", text: "Robust services, APIs and clean technical structures." },
    { title: "DevOps & Delivery", text: "Better deployment, operations and collaboration workflows." }
  ]
};

const HOME_PROJECTS = {
  de: [
    { title: "AI Automation Platform", text: "LLM-gestützte Automatisierung von Geschäftsprozessen und Wissensarbeit." },
    { title: "Cloud Migration", text: "Migration einer bestehenden Plattform in eine moderne Cloud-Architektur." },
    { title: "SAP Architektur", text: "Ich helfe bei der Transformation von onPrem-Systemen in eine moderne Cloud- oder Hybrid-Architektur." },
    { title: "Platform Engineering", text: "Verbesserung von Developer Experience, Deployment und Skalierbarkeit." }
  ],
  en: [
    { title: "AI Automation Platform", text: "LLM-powered automation for business processes and knowledge work." },
    { title: "Cloud Migration", text: "Migration of an existing platform into a modern cloud architecture." },
    { title: "SAP Architecture", text: "I help with the transformation of onPrem systems into a modern cloud or hybrid architecture." },
    { title: "Platform Engineering", text: "Improved developer experience, deployment and scalability." }
  ]
};

const ABOUT_SKILLS = {
  de: [
    { title: "SAP Architektur", text: "Ich helfe bei der Transformation von onPrem-Systemen in eine moderne Cloud- oder Hybrid-Architektur." },
    { title: "Cloud & Plattformen", text: "Moderne Infrastrukturen für stabile und flexible Systeme." },
    { title: "KI und Automatisierung", text: "Pragmatische KI-Anwendungen mit echtem Nutzen." },
    { title: "Beratung & Kommunikation", text: "Klare Kommunikation zwischen Technik, Produkt und Business." }
  ],
  en: [
    { title: "SAP Architecture", text: "I help with the transformation of onPrem systems into a modern cloud or hybrid architecture." },
    { title: "Cloud & Platforms", text: "Modern infrastructure for stable and flexible systems." },
    { title: "AI and Automation", text: "Pragmatic AI applications with real business value." },
    { title: "Consulting & Communication", text: "Clear communication between engineering, product and business." }
  ]
};

const ABOUT_INTERESTS = {
  de: [
    { title: "Technologie", text: "Neue Werkzeuge, Architekturen und technische Trends." },
    { title: "Open Source", text: "Lernen, ausprobieren und Wissen teilen." },
    { title: "Fitness & Fokus", text: "Ausgleich, Energie und klare Gedanken." },
    { title: "Lesen & Strategie", text: "Technik, Business und langfristiges Denken." }
  ],
  en: [
    { title: "Technology", text: "New tools, architectures and technical trends." },
    { title: "Open Source", text: "Learning, experimenting and sharing knowledge." },
    { title: "Fitness & Focus", text: "Balance, energy and a clear mind." },
    { title: "Reading & Strategy", text: "Technology, business and long-term thinking." }
  ]
};

const PROJECTS_LIST = {
  de: [
    { title: "AI Automation Platform", text: "Entwicklung einer Plattform zur Automatisierung interner Wissens- und Support-Prozesse mit LLMs." },
    { title: "Cloud Platform Redesign", text: "Neustrukturierung einer bestehenden Plattform für bessere Stabilität, Wartbarkeit und Skalierung." },
    { title: "API & Backend Modernization", text: "Modernisierung von Backend-Services und APIs für bessere Integrationen und schnellere Entwicklung." }
  ],
  en: [
    { title: "AI Automation Platform", text: "Built a platform to automate internal knowledge and support processes with LLMs." },
    { title: "Cloud Platform Redesign", text: "Restructured an existing platform for better stability, maintainability and scalability." },
    { title: "API & Backend Modernization", text: "Modernized backend services and APIs for better integrations and faster delivery." }
  ]
};

const BLOG_POSTS = {
  de: [
    { title: "AI in Software Engineering", text: "Wie KI die tägliche Arbeit in Entwicklungsteams verändert.", href: "blog/ai-in-software-engineering.html", meta: "27. März 2026" },
    { title: "Mein Buch: Agentolus - Building an Agentic Framework from scratch", text: "Kurze Geschichte über mein neuestes Buch.", href: "blog/Agentolus.html", meta: "27. März 2026" },
    { title: "SAP BTP & Agentic Frameworks", text: "Agentic AI frameworks—systems that enable AI models to autonomously plan and execute tasks", href: "blog/SAP-agentic-frameworks.html", meta: "29. März 2026" }
  ],
  en: [
    { title: "AI in Software Engineering", text: "How AI is changing everyday work in engineering teams.", href: "blog/ai-in-software-engineering.html", meta: "March 20, 2026" },
    { title: "My Book: Agentolus - Building an Agentic Framework from scratch", text: "Short story about my latest book.", href: "blog/Agentolus.html", meta:  "March 27, 2026" },
    { title: "SAP BTP & Agentic Frameworks", text: "Agentic AI frameworks—systems that enable AI models to autonomously plan and execute tasks", href: "blog/SAP-agentic-frameworks.html", meta: "29. März 2026" }
  ]
};
