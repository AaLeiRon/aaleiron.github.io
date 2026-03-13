const path = window.location.pathname.split('/').pop() || 'index.html';
const pageKey = path === '' ? 'index.html' : path;

const translations = {
  common: {
    de: {
      htmlLang: 'de',
      navToggleLabel: 'Menü öffnen',
      brandLabel: 'IT Consulting',
      brandSub: 'AI • SAP • Cloud',
      nav: ['Start', 'Projekte', 'Blog', 'Über mich'],
      langLabel: 'Sprache',
      langDe: 'DE',
      langEn: 'EN',
      footerName: 'AaLeiRon IT Consulting'
    },
    en: {
      htmlLang: 'en',
      navToggleLabel: 'Open menu',
      brandLabel: 'IT Consulting',
      brandSub: 'AI • SAP • Cloud',
      nav: ['Home', 'Projects', 'Blog', 'About me'],
      langLabel: 'Language',
      langDe: 'DE',
      langEn: 'EN',
      footerName: 'AaLeiRon IT Consulting.'
    }
  },
  'index.html': {
    de: {
      title: 'IT-Beratung | AI, SAP & Cloud Architecture',
      description: 'Professionelle Landing Page für die Positionierung als selbstständiger IT-Berater mit Fokus auf SAP, Cloud, AI Architecture und Business Transformation.',
      selectors: {
        '.hero-copy .kicker': '<span class="kicker-dot"></span>Selbstständige IT-Beratung für SAP, AI und Cloud',
        '.hero-copy h1': 'Ich entwickle <span class="gradient-text">digitale Lösungen</span>, die Strategie, Architektur und Umsetzung elegant verbinden.',
        '.hero-copy > p': 'Positionierung als moderner IT-Berater mit Fokus auf SAP BTP, Cloud Architecture, AI Architecture und geschäftsrelevante Transformation. Von der technischen Konzeption bis zur stakeholdergerechten Umsetzung verbinde ich Business-Verständnis mit belastbarer Delivery.',
        '.hero-copy .cta-row .btn-primary': 'Projekte entdecken',
        '.hero-copy .cta-row .btn-secondary': 'Mehr über mich',
        '.metrics .metric:nth-child(1) span': 'produktnahe Showcase-Projekte',
        '.metrics .metric:nth-child(2) span': 'Kernkompetenzen aus Tech & Management',
        '.metrics .metric:nth-child(3) span': 'Fokus auf Business Impact & Qualität',
        '.hero-side-card .eyebrow': 'Kompetenzprofil',
        '.hero-side-card p': 'Technische Tiefe kombiniert mit Architekturdenken und strategischer Kommunikation.',
        '.hero-main-card .eyebrow': 'Positionierung am Markt',
        '.hero-main-card h3': 'Beratung mit Executive-Wirkung und Engineering-Mindset',
        '.hero-main-card p': 'Ich unterstütze Unternehmen dabei, moderne Plattformen, Agentic-Ansätze und SAP-nahe Architekturen professionell in tragfähige Lösungen zu übersetzen.',
        '.hero-main-card .list-clean li:nth-child(1)': 'Architektur für skalierbare SAP- und Cloud-Landschaften',
        '.hero-main-card .list-clean li:nth-child(2)': 'Umsetzungsstarke AI- und Automatisierungskonzepte',
        '.hero-main-card .list-clean li:nth-child(3)': 'Stakeholder-Management vom Fachbereich bis Management',
        '.hero-bottom-card .eyebrow': 'Arbeitsweise',
        '.hero-bottom-card h3': 'Klar. Verlässlich. Lösungsorientiert.',
        '.hero-bottom-card p': 'Ich arbeite strukturiert, kommuniziere verständlich und denke stets in Mehrwert, Prioritäten und nachhaltiger Architektur.',
        'section:nth-of-type(2) .section-head .eyebrow': 'Was diese Website zeigt',
        'section:nth-of-type(2) .section-head h2': 'Ein starker, einladender Auftritt für deine Beratungsmarke',
        'section:nth-of-type(2) .section-head > p': 'Die Landing Page führt gezielt in die wichtigsten Bereiche: Projekte, Blog und persönliches Profil.',
        '.grid-3 article:nth-child(1) h3': 'Projekte mit Tiefgang',
        '.grid-3 article:nth-child(1) p': 'Präsentiere technologische Innovationskraft mit klar beschriebenen Lösungen wie Agentic Framework, SAP Agentic Framework auf BTP und AgentolusLiteCoder.',
        '.grid-3 article:nth-child(1) .card-link': 'Zu den Projekten <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '.grid-3 article:nth-child(2) h3': 'Persönlicher Blog',
        '.grid-3 article:nth-child(2) p': 'Teile regelmäßig Gedanken, Architekturmuster, AI-Erfahrungen und Marktbeobachtungen. Die Seite ist so aufgebaut, dass du später unkompliziert neue Beiträge ergänzen kannst.',
        '.grid-3 article:nth-child(2) .card-link': 'Zum Blog <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '.grid-3 article:nth-child(3) h3': 'Über mich mit Persönlichkeit',
        '.grid-3 article:nth-child(3) p': 'Zeige deine Skills, Motivation, Vorlieben, Interessen und Hobbies so, dass fachliche Kompetenz und menschliche Nahbarkeit zugleich sichtbar werden.',
        '.grid-3 article:nth-child(3) .card-link': 'Über mich ansehen <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '.highlights-grid article:nth-child(1) .eyebrow': 'Beratungsansatz',
        '.highlights-grid article:nth-child(1) strong': 'Business first',
        '.highlights-grid article:nth-child(1) p': 'Technologie wird konsequent auf Nutzen, Governance, Skalierbarkeit und Entscheidungsreife ausgerichtet.',
        '.highlights-grid article:nth-child(2) .eyebrow': 'Markenwirkung',
        '.highlights-grid article:nth-child(2) strong': 'Professionell & zugänglich',
        '.highlights-grid article:nth-child(2) p': 'Der visuelle Stil kombiniert Corporate Credibility mit einer freundlichen, modernen Ansprache.',
        '.timeline .timeline-card:nth-child(1) h3': 'Architektur mit Richtung',
        '.timeline .timeline-card:nth-child(1) p': 'Von SAP-Landschaften bis AI-/Cloud-Zielbildern: Lösungen werden belastbar, verständlich und skalierbar konzipiert.',
        '.timeline .timeline-card:nth-child(2) h3': 'Umsetzung mit Pragmatismus',
        '.timeline .timeline-card:nth-child(2) p': 'Technische Entscheidungen werden an Delivery-Realität, Plattformgrenzen und Fachbereichsanforderungen gespiegelt.',
        '.timeline .timeline-card:nth-child(3) h3': 'Kommunikation mit Wirkung',
        '.timeline .timeline-card:nth-child(3) p': 'Stakeholder auf allen Ebenen werden mitgenommen – von Architekturdiskussionen bis zu Management-orientierten Entscheidungsgrundlagen.',
        '.two-col > div:first-child .section-head .eyebrow': 'Fokus im Markt',
        '.two-col > div:first-child .section-head h2': 'Positionierung für Unternehmen, die moderne IT-Beratung mit Substanz suchen',
        '.quote-card .eyebrow': 'Leitbild',
        '.quote-card h2': '„Technologie ist dann wertvoll, wenn sie komplexe Anforderungen in klare, tragfähige Lösungen übersetzt.“',
        '.quote-card p': 'Diese Website ist bewusst so gestaltet, dass sie Kompetenz, Klarheit und Verlässlichkeit ausstrahlt – genau die Eigenschaften, die Unternehmen bei einem selbstständigen IT-Berater suchen.',
        '.quote-card .cta-row .btn-primary': 'Artikel lesen',
        '.quote-card .cta-row .btn-secondary': 'Use Cases ansehen',
        '.footer-box strong': 'Digitale Präsenz für moderne IT-Beratung',
        '.footer-box > div:first-child p': 'Professionell, einladend und bereit für deinen Auftritt auf GitHub Pages.',
        '.footer-box .social-link:nth-child(1)': 'LinkedIn',
        '.footer-box .social-link:nth-child(2)': 'GitHub'
      }
    },
    en: {
      title: 'IT Consulting | AI, SAP & Cloud Architecture',
      description: 'Professional landing page to position yourself as an independent IT consultant focused on SAP, cloud, AI architecture, and business transformation.',
      selectors: {
        '.hero-copy .kicker': '<span class="kicker-dot"></span>Independent IT consulting for SAP, AI, and cloud',
        '.hero-copy h1': 'I build <span class="gradient-text">digital solutions</span> that elegantly connect strategy, architecture, and delivery.',
        '.hero-copy > p': 'A modern positioning as an IT consultant with focus on SAP BTP, cloud architecture, AI architecture, and business-relevant transformation. From technical design to stakeholder-ready execution, I combine business understanding with reliable delivery.',
        '.hero-copy .cta-row .btn-primary': 'Explore projects',
        '.hero-copy .cta-row .btn-secondary': 'Learn more about me',
        '.metrics .metric:nth-child(1) span': 'showcase projects close to real products',
        '.metrics .metric:nth-child(2) span': 'core competencies across tech and management',
        '.metrics .metric:nth-child(3) span': 'focus on business impact and quality',
        '.hero-side-card .eyebrow': 'Profile',
        '.hero-side-card p': 'Technical depth combined with architectural thinking and strategic communication.',
        '.hero-main-card .eyebrow': 'Market positioning',
        '.hero-main-card h3': 'Consulting with executive presence and an engineering mindset',
        '.hero-main-card p': 'I help companies translate modern platforms, agentic approaches, and SAP-centric architectures into professional, viable solutions.',
        '.hero-main-card .list-clean li:nth-child(1)': 'Architecture for scalable SAP and cloud landscapes',
        '.hero-main-card .list-clean li:nth-child(2)': 'Execution-ready AI and automation concepts',
        '.hero-main-card .list-clean li:nth-child(3)': 'Stakeholder management from business teams to management',
        '.hero-bottom-card .eyebrow': 'Way of working',
        '.hero-bottom-card h3': 'Clear. Reliable. Solution-oriented.',
        '.hero-bottom-card p': 'I work in a structured way, communicate clearly, and always think in terms of value, priorities, and sustainable architecture.',
        'section:nth-of-type(2) .section-head .eyebrow': 'What this website shows',
        'section:nth-of-type(2) .section-head h2': 'A strong and welcoming presence for your consulting brand',
        'section:nth-of-type(2) .section-head > p': 'The landing page guides visitors directly to the most important areas: projects, blog, and personal profile.',
        '.grid-3 article:nth-child(1) h3': 'Projects with depth',
        '.grid-3 article:nth-child(1) p': 'Present technological innovation through clearly described solutions such as Agentic Framework, SAP Agentic Framework on BTP, and AgentolusLiteCoder.',
        '.grid-3 article:nth-child(1) .card-link': 'View projects <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '.grid-3 article:nth-child(2) h3': 'Personal blog',
        '.grid-3 article:nth-child(2) p': 'Share thoughts, architecture patterns, AI experience, and market observations on a regular basis. The page is built so you can easily add new articles later.',
        '.grid-3 article:nth-child(2) .card-link': 'Go to blog <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '.grid-3 article:nth-child(3) h3': 'About me with personality',
        '.grid-3 article:nth-child(3) p': 'Show your skills, motivation, preferences, interests, and hobbies in a way that combines expertise with human approachability.',
        '.grid-3 article:nth-child(3) .card-link': 'View about me <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '.highlights-grid article:nth-child(1) .eyebrow': 'Consulting approach',
        '.highlights-grid article:nth-child(1) strong': 'Business first',
        '.highlights-grid article:nth-child(1) p': 'Technology is consistently aligned with value, governance, scalability, and decision readiness.',
        '.highlights-grid article:nth-child(2) .eyebrow': 'Brand impact',
        '.highlights-grid article:nth-child(2) strong': 'Professional & approachable',
        '.highlights-grid article:nth-child(2) p': 'The visual style combines corporate credibility with a friendly, modern tone.',
        '.two-col > div:first-child .section-head .eyebrow': 'Market focus',
        '.two-col > div:first-child .section-head h2': 'Positioning for companies looking for modern IT consulting with substance',
        '.timeline .timeline-card:nth-child(1) h3': 'Architecture with direction',
        '.timeline .timeline-card:nth-child(1) p': 'From SAP landscapes to AI and cloud target architectures: solutions are designed to be robust, understandable, and scalable.',
        '.timeline .timeline-card:nth-child(2) h3': 'Execution with pragmatism',
        '.timeline .timeline-card:nth-child(2) p': 'Technical decisions are aligned with delivery reality, platform constraints, and business requirements.',
        '.timeline .timeline-card:nth-child(3) h3': 'Communication with impact',
        '.timeline .timeline-card:nth-child(3) p': 'Stakeholders at every level are brought along—from architecture discussions to management-oriented decision support.',
        '.quote-card .eyebrow': 'Guiding principle',
        '.quote-card h2': '“Technology creates value when it translates complex requirements into clear, sustainable solutions.”',
        '.quote-card p': 'This website is intentionally designed to convey competence, clarity, and reliability—the exact qualities companies look for in an independent IT consultant.',
        '.quote-card .cta-row .btn-primary': 'Read articles',
        '.quote-card .cta-row .btn-secondary': 'View use cases',
        '.footer-box strong': 'Digital presence for modern IT consulting',
        '.footer-box > div:first-child p': 'Professional, welcoming, and ready for your GitHub Pages presence.',
        '.footer-box .social-link:nth-child(1)': 'LinkedIn',
        '.footer-box .social-link:nth-child(2)': 'GitHub'
      }
    }
  },
  'projects.html': {
    de: {
      title: 'Projekte | IT-Beratung',
      description: 'Ausgewählte Projekte und Produktideen im Umfeld von Agentic Frameworks, SAP BTP und AI-gestützten Entwicklerwerkzeugen.',
      selectors: {
        '.hero .kicker': '<span class="kicker-dot"></span>Showcase-Projekte & Innovationsportfolio',
        '.hero h1': 'Projekte, die <span class="gradient-text">moderne Architektur</span> und konkrete Lösungsorientierung sichtbar machen.',
        '.hero .two-col > div:first-child > p': 'Diese Seite präsentiert ausgewählte Themen, mit denen du am Markt technologische Tiefe, Innovationskraft und ein klares Beratungsprofil demonstrieren kannst.',
        '.filter-row .filter-btn:nth-child(1)': 'Alle',
        '.filter-row .filter-btn:nth-child(2)': 'Agentic',
        '.filter-row .filter-btn:nth-child(3)': 'SAP',
        '.filter-row .filter-btn:nth-child(4)': 'Tooling',
        '.hero .panel .eyebrow': 'Warum diese Rubrik wichtig ist',
        '.hero .panel h3': 'Sie übersetzt Fähigkeiten in greifbare Belege.',
        '.hero .panel p': 'Unternehmen wollen nicht nur Skills lesen, sondern Anwendungsfälle verstehen. Deshalb sind die Projektbeschreibungen lösungsorientiert, businessnah und technologisch präzise formuliert.',
        '.projects-grid article:nth-child(1) .eyebrow': 'Projekt 01',
        '.projects-grid article:nth-child(1) .project-status': 'Strategic Prototype',
        '.projects-grid article:nth-child(1) > p': 'Ein Framework zur Orchestrierung agentischer Workflows mit Fokus auf Wiederverwendbarkeit, Governance und klaren Integrationspunkten für Unternehmensanwendungen.',
        '.projects-grid article:nth-child(1) p:last-child': '<strong>Business Value:</strong> Beschleunigt die Entwicklung intelligenter Assistenz- und Automatisierungslösungen mit robuster technischer Struktur.',
        '.projects-grid article:nth-child(2) .eyebrow': 'Projekt 02',
        '.projects-grid article:nth-child(2) .project-status': 'Enterprise Ready Vision',
        '.projects-grid article:nth-child(2) > p': 'Ein SAP-zentrierter Agentic-Ansatz für die SAP BTP Umgebung, der Geschäftsprozesse, Datenzugriff, Erweiterbarkeit und Governance in einer cloudfähigen Architektur vereint.',
        '.projects-grid article:nth-child(2) p:last-child': '<strong>Business Value:</strong> Zeigt, wie innovative AI-Konzepte mit SAP-naher Plattformstrategie und Unternehmensanforderungen verbunden werden können.',
        '.projects-grid article:nth-child(3) .eyebrow': 'Projekt 03',
        '.projects-grid article:nth-child(3) .project-status': 'Lightweight CLI Tool',
        '.projects-grid article:nth-child(3) > p': 'Ein sehr leichtgewichtiges CLI-Tool – gedacht als minimalistische, effiziente Coding-Assistenz ähnlich dem Gedanken „very lightweight like Claude Code“, aber fokussiert auf Geschwindigkeit und schlanke Nutzung.',
        '.projects-grid article:nth-child(3) p:last-child': '<strong>Business Value:</strong> Vermittelt Produktdenken, Engineering-Effizienz und ein Gespür für praxisnahe Developer Tools.',
        '.grid-2 article:nth-child(1) .eyebrow': 'So kannst du diese Seite nutzen',
        '.grid-2 article:nth-child(1) h3': 'Ideal für Projektpitches, Vorstellungsrunden und Kundenansprache',
        '.grid-2 article:nth-child(1) p': 'Jedes Projekt ist so formuliert, dass sowohl technische Ansprechpartner als auch Entscheider den Mehrwert schnell erfassen. Du kannst später GitHub-Repositories, Screenshots, Demos oder Architekturdiagramme ergänzen.',
        '.grid-2 article:nth-child(2) .eyebrow': 'Empfohlene Ergänzungen',
        '.grid-2 article:nth-child(2) li:nth-child(1)': 'Links zu GitHub-Repositories oder Demos',
        '.grid-2 article:nth-child(2) li:nth-child(2)': 'Architektur-Skizzen oder Screenshots',
        '.grid-2 article:nth-child(2) li:nth-child(3)': 'Lessons Learned und Projektergebnisse',
        '.grid-2 article:nth-child(2) li:nth-child(4)': 'Technologie-Stack je Projekt mit Tooling-Details',
        '.footer-box strong': 'Projektportfolio',
        '.footer-box > div:first-child p': 'Zeigt Substanz, Innovation und Lösungsorientierung.'
      }
    },
    en: {
      title: 'Projects | IT Consulting',
      description: 'Selected projects and product ideas around agentic frameworks, SAP BTP, and AI-enabled developer tooling.',
      selectors: {
        '.hero .kicker': '<span class="kicker-dot"></span>Showcase projects & innovation portfolio',
        '.hero h1': 'Projects that make <span class="gradient-text">modern architecture</span> and practical solution thinking visible.',
        '.hero .two-col > div:first-child > p': 'This page presents selected topics that help demonstrate technological depth, innovation, and a clear consulting profile in the market.',
        '.filter-row .filter-btn:nth-child(1)': 'All',
        '.filter-row .filter-btn:nth-child(2)': 'Agentic',
        '.filter-row .filter-btn:nth-child(3)': 'SAP',
        '.filter-row .filter-btn:nth-child(4)': 'Tooling',
        '.hero .panel .eyebrow': 'Why this section matters',
        '.hero .panel h3': 'It turns skills into tangible proof.',
        '.hero .panel p': 'Companies do not just want to read a list of skills—they want to understand use cases. That is why the project descriptions are solution-oriented, business-relevant, and technically precise.',
        '.projects-grid article:nth-child(1) .eyebrow': 'Project 01',
        '.projects-grid article:nth-child(1) .project-status': 'Strategic Prototype',
        '.projects-grid article:nth-child(1) > p': 'A framework for orchestrating agentic workflows with a focus on reusability, governance, and clear integration points for enterprise applications.',
        '.projects-grid article:nth-child(1) p:last-child': '<strong>Business Value:</strong> Accelerates the development of intelligent assistance and automation solutions with a robust technical structure.',
        '.projects-grid article:nth-child(2) .eyebrow': 'Project 02',
        '.projects-grid article:nth-child(2) .project-status': 'Enterprise-ready vision',
        '.projects-grid article:nth-child(2) > p': 'A SAP-centric agentic approach for the SAP BTP environment that combines business processes, data access, extensibility, and governance in a cloud-capable architecture.',
        '.projects-grid article:nth-child(2) p:last-child': '<strong>Business Value:</strong> Demonstrates how innovative AI concepts can be connected with SAP-centered platform strategy and enterprise requirements.',
        '.projects-grid article:nth-child(3) .eyebrow': 'Project 03',
        '.projects-grid article:nth-child(3) .project-status': 'Lightweight CLI Tool',
        '.projects-grid article:nth-child(3) > p': 'A very lightweight CLI tool conceived as a minimal, efficient coding assistant—similar in spirit to “very lightweight like Claude Code,” but optimized for speed and lean usage.',
        '.projects-grid article:nth-child(3) p:last-child': '<strong>Business Value:</strong> Conveys product thinking, engineering efficiency, and a feel for practical developer tooling.',
        '.grid-2 article:nth-child(1) .eyebrow': 'How to use this page',
        '.grid-2 article:nth-child(1) h3': 'Ideal for project pitches, introductions, and client conversations',
        '.grid-2 article:nth-child(1) p': 'Each project is phrased so that both technical stakeholders and decision-makers can quickly understand the value. You can later add GitHub repositories, screenshots, demos, or architecture diagrams.',
        '.grid-2 article:nth-child(2) .eyebrow': 'Recommended additions',
        '.grid-2 article:nth-child(2) li:nth-child(1)': 'Links to GitHub repositories or demos',
        '.grid-2 article:nth-child(2) li:nth-child(2)': 'Architecture sketches or screenshots',
        '.grid-2 article:nth-child(2) li:nth-child(3)': 'Lessons learned and project outcomes',
        '.grid-2 article:nth-child(2) li:nth-child(4)': 'Technology stack per project including tooling details',
        '.footer-box strong': 'Project portfolio',
        '.footer-box > div:first-child p': 'Shows substance, innovation, and solution orientation.'
      }
    }
  },
  'blog.html': {
    de: {
      title: 'Blog | IT-Beratung',
      description: 'Persönlicher Blog zu SAP, Cloud, AI Architecture, strategischer IT und modernen Beratungsansätzen.',
      selectors: {
        '.hero .kicker': '<span class="kicker-dot"></span>Persönlicher Blog mit Social-Verknüpfung',
        '.hero h1': 'Gedanken, Erfahrungen und Perspektiven aus <span class="gradient-text">SAP, AI und Cloud</span>.',
        '.hero .two-col > div:first-child > p': 'Hier kannst du regelmäßig Artikel veröffentlichen, deine Sicht auf technologische Entwicklungen teilen und deine Expertise sichtbar ausbauen.',
        '.hero .social-row .social-link:nth-child(1)': 'LinkedIn Profil verknüpfen',
        '.hero .social-row .social-link:nth-child(2)': 'Instagram verknüpfen',
        '.hero .panel .eyebrow': 'Redaktioneller Nutzen',
        '.hero .panel h3': 'Content macht Kompetenz langfristig sichtbar.',
        '.hero .panel p': 'Mit Fachartikeln zu Architektur, Trends, Best Practices und Lessons Learned baust du Vertrauen auf, stärkst deine persönliche Marke und erzeugst kontinuierliche Relevanz am Markt.',
        '.blog-card:nth-child(1) .eyebrow': 'Featured Article',
        '.blog-card:nth-child(1) h3': 'Warum Agentic Architecture mehr ist als nur ein AI-Trend',
        '.blog-card:nth-child(1) .blog-meta span:nth-child(3)': '8 Min. Lesezeit',
        '.blog-card:nth-child(1) p': 'Agentische Systeme entfalten erst dann echten Nutzen, wenn sie in Architekturprinzipien, Verantwortlichkeiten und Governance eingebettet werden. Der Artikel zeigt, wie aus Hype eine belastbare Unternehmenslösung wird.',
        '.blog-card:nth-child(1) .card-link': 'Artikel lesen <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '.blog-card:nth-child(2) .eyebrow': 'Article',
        '.blog-card:nth-child(2) h3': 'SAP BTP als Enabler für moderne Erweiterungs- und AI-Szenarien',
        '.blog-card:nth-child(2) .blog-meta span:nth-child(3)': '6 Min. Lesezeit',
        '.blog-card:nth-child(2) p': 'Ein kompakter Blick darauf, wie Unternehmen SAP BTP nicht nur als Plattform, sondern als strategischen Innovationshebel für Erweiterbarkeit, Integration und AI-nahe Lösungen verstehen können.',
        '.blog-card:nth-child(2) .card-link': 'Artikel lesen <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '.blog-card:nth-child(3) .eyebrow': 'Article',
        '.blog-card:nth-child(3) h3': 'Stakeholder-Management in Tech-Projekten: unterschätzt, aber entscheidend',
        '.blog-card:nth-child(3) .blog-meta span:nth-child(3)': '5 Min. Lesezeit',
        '.blog-card:nth-child(3) p': 'Technisch gute Lösungen scheitern selten am Stack, aber häufig an fehlender Einbettung, Kommunikation und Erwartungssteuerung. Dieser Beitrag zeigt einen pragmatischen Beratungsblick auf das Thema.',
        '.blog-card:nth-child(3) .card-link': 'Artikel lesen <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '[data-empty-state]': 'Keine Artikel gefunden. Passe den Suchbegriff an oder füge neue Beiträge hinzu.',
        '#article-agentic .eyebrow': 'Beispielartikel 01',
        '#article-agentic h2': 'Warum Agentic Architecture mehr ist als nur ein AI-Trend',
        '#article-agentic .inline-meta span:nth-child(1)': 'Veröffentlicht im Blog',
        '#article-agentic .inline-meta span:nth-child(2)': 'Architektur & Strategie',
        '#article-agentic p:nth-of-type(1)': 'Viele Diskussionen über AI fokussieren sich stark auf Modelle und Prompting. Für Unternehmen ist jedoch entscheidend, wie daraus belastbare Systeme entstehen. Agentic Architecture beschreibt eine Denkweise, in der autonome oder teilautonome Einheiten mit Rollen, Zielen, Werkzeugen und Kontrollmechanismen gestaltet werden.',
        '#article-agentic p:nth-of-type(2)': 'Der Mehrwert entsteht nicht allein durch Automatisierung, sondern durch die bewusste Kombination aus Entscheidungslogik, Datenzugriff, Compliance, Observability und Prozessintegration. Genau an dieser Stelle wird Architektur zum Erfolgsfaktor.',
        '#article-btp .eyebrow': 'Beispielartikel 02',
        '#article-btp h2': 'SAP BTP als Enabler für moderne Erweiterungs- und AI-Szenarien',
        '#article-btp p': 'SAP BTP ist besonders stark, wenn Plattformstrategie, Integrationsfähigkeit und Erweiterbarkeit zusammengedacht werden. In einer modernen Architektur kann die Plattform als Brücke zwischen SAP-Core, individuellen Anwendungen und neuen AI-nahen Services dienen.',
        '#article-btp li:nth-child(1)': 'Saubere Erweiterung bestehender SAP-Lösungen',
        '#article-btp li:nth-child(2)': 'Integration von Daten, Prozessen und Services',
        '#article-btp li:nth-child(3)': 'Strukturierte Grundlage für zukünftige AI- und Automatisierungsszenarien',
        '#article-stakeholder .eyebrow': 'Beispielartikel 03',
        '#article-stakeholder h2': 'Stakeholder-Management in Tech-Projekten: unterschätzt, aber entscheidend',
        '#article-stakeholder p:nth-of-type(1)': 'Komplexe IT-Projekte sind nie rein technisch. Unterschiedliche Erwartungshaltungen, Prioritäten und Kommunikationsstile beeinflussen Entscheidungen ebenso stark wie der Techstack. Wer Stakeholder ernsthaft managt, reduziert Reibung, verbessert Timing und erhöht die Akzeptanz technischer Lösungen erheblich.',
        '#article-stakeholder p:nth-of-type(2)': 'Für selbstständige Berater ist das ein klarer Differenzierungsfaktor: Technik mit Klarheit übersetzen, Entscheidungsfähigkeit fördern und Vertrauen durch nachvollziehbare Kommunikation schaffen.',
        '.footer-box strong': 'Blog & Personal Brand',
        '.footer-box > div:first-child p': 'Ideal, um regelmäßig Expertise, Perspektiven und Persönlichkeit zu zeigen.'
      },
      attrs: {
        '[data-blog-search]': { placeholder: 'Artikel durchsuchen…', 'aria-label': 'Artikel durchsuchen' }
      }
    },
    en: {
      title: 'Blog | IT Consulting',
      description: 'Personal blog about SAP, cloud, AI architecture, strategic IT, and modern consulting approaches.',
      selectors: {
        '.hero .kicker': '<span class="kicker-dot"></span>Personal blog with social integration',
        '.hero h1': 'Thoughts, experiences, and perspectives from <span class="gradient-text">SAP, AI, and cloud</span>.',
        '.hero .two-col > div:first-child > p': 'Here you can publish articles on a regular basis, share your view on technological developments, and steadily grow your visible expertise.',
        '.hero .social-row .social-link:nth-child(1)': 'Connect LinkedIn profile',
        '.hero .social-row .social-link:nth-child(2)': 'Connect Instagram',
        '.hero .panel .eyebrow': 'Editorial value',
        '.hero .panel h3': 'Content makes expertise visible over time.',
        '.hero .panel p': 'By publishing articles on architecture, trends, best practices, and lessons learned, you build trust, strengthen your personal brand, and create ongoing relevance in the market.',
        '.blog-card:nth-child(1) .eyebrow': 'Featured Article',
        '.blog-card:nth-child(1) h3': 'Why agentic architecture is more than just an AI trend',
        '.blog-card:nth-child(1) .blog-meta span:nth-child(3)': '8 min read',
        '.blog-card:nth-child(1) p': 'Agentic systems only create real value when they are embedded in architecture principles, responsibilities, and governance. This article shows how hype becomes an enterprise-ready solution.',
        '.blog-card:nth-child(1) .card-link': 'Read article <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '.blog-card:nth-child(2) .eyebrow': 'Article',
        '.blog-card:nth-child(2) h3': 'SAP BTP as an enabler for modern extension and AI scenarios',
        '.blog-card:nth-child(2) .blog-meta span:nth-child(3)': '6 min read',
        '.blog-card:nth-child(2) p': 'A concise view on how companies can understand SAP BTP not only as a platform, but as a strategic lever for extensibility, integration, and AI-adjacent solutions.',
        '.blog-card:nth-child(2) .card-link': 'Read article <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '.blog-card:nth-child(3) .eyebrow': 'Article',
        '.blog-card:nth-child(3) h3': 'Stakeholder management in tech projects: underestimated, but essential',
        '.blog-card:nth-child(3) .blog-meta span:nth-child(3)': '5 min read',
        '.blog-card:nth-child(3) p': 'Technically sound solutions rarely fail because of the stack, but often because of missing alignment, communication, and expectation management. This article offers a pragmatic consulting perspective.',
        '.blog-card:nth-child(3) .card-link': 'Read article <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
        '[data-empty-state]': 'No articles found. Adjust the search term or add new posts.',
        '#article-agentic .eyebrow': 'Sample article 01',
        '#article-agentic h2': 'Why agentic architecture is more than just an AI trend',
        '#article-agentic .inline-meta span:nth-child(1)': 'Published on the blog',
        '#article-agentic .inline-meta span:nth-child(2)': 'Architecture & strategy',
        '#article-agentic p:nth-of-type(1)': 'Many AI discussions focus heavily on models and prompting. For companies, however, the key question is how robust systems emerge from them. Agentic architecture describes a way of thinking in which autonomous or semi-autonomous entities are designed with roles, goals, tools, and control mechanisms.',
        '#article-agentic p:nth-of-type(2)': 'Value does not arise from automation alone, but from the deliberate combination of decision logic, data access, compliance, observability, and process integration. That is exactly where architecture becomes a success factor.',
        '#article-btp .eyebrow': 'Sample article 02',
        '#article-btp h2': 'SAP BTP as an enabler for modern extension and AI scenarios',
        '#article-btp p': 'SAP BTP is especially powerful when platform strategy, integration capability, and extensibility are considered together. In a modern architecture, the platform can act as a bridge between the SAP core, custom applications, and new AI-adjacent services.',
        '#article-btp li:nth-child(1)': 'Clean extension of existing SAP solutions',
        '#article-btp li:nth-child(2)': 'Integration of data, processes, and services',
        '#article-btp li:nth-child(3)': 'Structured foundation for future AI and automation scenarios',
        '#article-stakeholder .eyebrow': 'Sample article 03',
        '#article-stakeholder h2': 'Stakeholder management in tech projects: underestimated, but essential',
        '#article-stakeholder p:nth-of-type(1)': 'Complex IT projects are never purely technical. Different expectations, priorities, and communication styles influence decisions just as strongly as the tech stack. Those who manage stakeholders seriously reduce friction, improve timing, and significantly increase acceptance of technical solutions.',
        '#article-stakeholder p:nth-of-type(2)': 'For independent consultants, this is a clear differentiator: translating technology with clarity, enabling better decisions, and building trust through understandable communication.',
        '.footer-box strong': 'Blog & Personal Brand',
        '.footer-box > div:first-child p': 'Ideal for regularly showing expertise, perspective, and personality.'
      },
      attrs: {
        '[data-blog-search]': { placeholder: 'Search articles…', 'aria-label': 'Search articles' }
      }
    }
  },
  'about.html': {
    de: {
      title: 'Über mich | IT-Beratung',
      description: 'Persönliche Vorstellung, Skills, Techstack, Motivation, Interessen und Hobbies eines selbstständigen IT-Beraters mit Fokus auf SAP, Cloud und AI.',
      selectors: {
        '.hero .kicker': '<span class="kicker-dot"></span>Persönliches Profil & Beratungsidentität',
        '.hero h1': 'Ich verbinde <span class="gradient-text">technische Exzellenz</span> mit strategischem Denken und einer klaren, vertrauensvollen Zusammenarbeit.',
        '.hero .two-col > div:first-child > p': 'Mein Fokus liegt auf SAP-nahen Plattformen, Cloud-Architekturen, AI-Konzepten und der strukturierten Begleitung komplexer IT-Vorhaben. Ich arbeite gerne an Schnittstellen zwischen Technologie, Business-Zielen und Stakeholdern mit unterschiedlichen Perspektiven.',
        '.quote-card .eyebrow': 'Persönliche Haltung',
        '.quote-card h3': 'Verlässlichkeit, Tiefgang und echtes Interesse an wirksamen Lösungen.',
        '.quote-card p': 'Ich mag Technologien, die einen klaren Nutzen stiften, sauber gedacht sind und Menschen die Arbeit erleichtern. Gleichzeitig schätze ich Klarheit in Kommunikation, nachhaltige Entscheidungen und professionelle Zusammenarbeit mit einem freundlichen Ton.',
        '.skill-grid article:nth-child(1) .eyebrow': 'Tech Stack',
        '.skill-grid article:nth-child(1) h3': 'Technische Schwerpunkte',
        '.skill-grid article:nth-child(1) li:nth-child(1)': 'SAP Cloud / SAP BTP / SAP BAS',
        '.skill-grid article:nth-child(1) li:nth-child(2)': 'ABAP / SAP-nahe Entwicklung',
        '.skill-grid article:nth-child(1) li:nth-child(3)': 'Module: Basis, SD, FiCo',
        '.skill-grid article:nth-child(1) li:nth-child(4)': 'Integration, Erweiterung und Plattformdenken',
        '.skill-grid article:nth-child(2) .eyebrow': 'Architektur',
        '.skill-grid article:nth-child(2) h3': 'Konzeptionelle Stärke',
        '.skill-grid article:nth-child(2) li:nth-child(1)': 'Enterprise Architecture',
        '.skill-grid article:nth-child(2) li:nth-child(2)': 'Cloud Architecture',
        '.skill-grid article:nth-child(2) li:nth-child(3)': 'AI Architecture',
        '.skill-grid article:nth-child(2) li:nth-child(4)': 'Skalierbare Lösungsdesigns',
        '.skill-grid article:nth-child(3) .eyebrow': 'Management Skills',
        '.skill-grid article:nth-child(3) h3': 'Business & Zusammenarbeit',
        '.skill-grid article:nth-child(3) li:nth-child(1)': 'Strategic Management',
        '.skill-grid article:nth-child(3) li:nth-child(2)': 'Stakeholder Management',
        '.skill-grid article:nth-child(3) li:nth-child(3)': 'Strukturierte Kommunikation',
        '.skill-grid article:nth-child(3) li:nth-child(4)': 'Brücke zwischen Technik und Fachseite',
        '.grid-2 article:nth-child(1) .eyebrow': 'Motivation',
        '.grid-2 article:nth-child(1) h2': 'Was mich antreibt',
        '.grid-2 article:nth-child(1) p': 'Ich möchte Lösungen entwickeln und begleiten, die nicht nur modern klingen, sondern in Unternehmen nachhaltig funktionieren. Besonders motiviert mich die Verbindung aus intelligenter Technologie, klarer Architektur und einem Beratungsansatz, der echten Mehrwert schafft.',
        '.grid-2 article:nth-child(2) .eyebrow': 'Vorlieben',
        '.grid-2 article:nth-child(2) h2': 'Wie ich gerne arbeite',
        '.grid-2 article:nth-child(2) p': 'Ich bevorzuge Umfelder, in denen Qualität, Struktur, Offenheit und zukunftsorientiertes Denken geschätzt werden. Besonders spannend finde ich Themen an der Schnittstelle von SAP, AI, Plattformstrategie und pragmatischer Produktivität.',
        'section:last-of-type .timeline-card:nth-child(1) .eyebrow': 'Interessen',
        'section:last-of-type .timeline-card:nth-child(1) h3': 'Wofür ich mich begeistere',
        'section:last-of-type .timeline-card:nth-child(1) p': 'AI-gestützte Systeme, intelligente Entwicklungswerkzeuge, moderne Cloud-Plattformen, saubere Software-Architekturen und strategische Technologieentscheidungen mit langfristiger Wirkung.',
        'section:last-of-type .timeline-card:nth-child(2) .eyebrow': 'Hobbies',
        'section:last-of-type .timeline-card:nth-child(2) h3': 'Was meine Persönlichkeit abrundet',
        'section:last-of-type .timeline-card:nth-child(2) p': 'Du kannst hier später deine echten Hobbies individuell eintragen – etwa Lesen, Fitness, Reisen, Technikprojekte, Schreiben oder andere Interessen, die deine Person nahbarer machen.',
        '.footer-box strong': 'Über mich',
        '.footer-box > div:first-child p': 'Kompetenz, Persönlichkeit und Motivation in einem professionellen Gesamtbild.'
      }
    },
    en: {
      title: 'About me | IT Consulting',
      description: 'Personal introduction, skills, tech stack, motivation, interests, and hobbies of an independent IT consultant focused on SAP, cloud, and AI.',
      selectors: {
        '.hero .kicker': '<span class="kicker-dot"></span>Personal profile & consulting identity',
        '.hero h1': 'I combine <span class="gradient-text">technical excellence</span> with strategic thinking and clear, trustworthy collaboration.',
        '.hero .two-col > div:first-child > p': 'My focus is on SAP-centric platforms, cloud architectures, AI concepts, and the structured guidance of complex IT initiatives. I enjoy working at the intersection of technology, business goals, and stakeholders with different perspectives.',
        '.quote-card .eyebrow': 'Personal mindset',
        '.quote-card h3': 'Reliability, depth, and genuine interest in solutions that work.',
        '.quote-card p': 'I like technologies that create clear value, are thoughtfully designed, and make people’s work easier. At the same time, I value clarity in communication, sustainable decisions, and professional collaboration with a friendly tone.',
        '.skill-grid article:nth-child(1) .eyebrow': 'Tech stack',
        '.skill-grid article:nth-child(1) h3': 'Technical focus areas',
        '.skill-grid article:nth-child(1) li:nth-child(1)': 'SAP Cloud / SAP BTP / SAP BAS',
        '.skill-grid article:nth-child(1) li:nth-child(2)': 'ABAP / SAP-centric development',
        '.skill-grid article:nth-child(1) li:nth-child(3)': 'Modules: Basis, SD, FiCo',
        '.skill-grid article:nth-child(1) li:nth-child(4)': 'Integration, extensibility, and platform thinking',
        '.skill-grid article:nth-child(2) .eyebrow': 'Architecture',
        '.skill-grid article:nth-child(2) h3': 'Conceptual strength',
        '.skill-grid article:nth-child(2) li:nth-child(4)': 'Scalable solution designs',
        '.skill-grid article:nth-child(3) .eyebrow': 'Management skills',
        '.skill-grid article:nth-child(3) h3': 'Business & collaboration',
        '.skill-grid article:nth-child(3) li:nth-child(3)': 'Structured communication',
        '.skill-grid article:nth-child(3) li:nth-child(4)': 'Bridge between technology and business',
        '.grid-2 article:nth-child(1) .eyebrow': 'Motivation',
        '.grid-2 article:nth-child(1) h2': 'What drives me',
        '.grid-2 article:nth-child(1) p': 'I want to build and support solutions that do not just sound modern, but work sustainably inside real organizations. What motivates me most is the combination of intelligent technology, clear architecture, and a consulting approach that creates real value.',
        '.grid-2 article:nth-child(2) .eyebrow': 'Preferences',
        '.grid-2 article:nth-child(2) h2': 'How I like to work',
        '.grid-2 article:nth-child(2) p': 'I prefer environments in which quality, structure, openness, and future-oriented thinking are appreciated. I am especially interested in topics at the intersection of SAP, AI, platform strategy, and pragmatic productivity.',
        'section:last-of-type .timeline-card:nth-child(1) .eyebrow': 'Interests',
        'section:last-of-type .timeline-card:nth-child(1) h3': 'What excites me',
        'section:last-of-type .timeline-card:nth-child(1) p': 'AI-powered systems, intelligent developer tools, modern cloud platforms, clean software architectures, and strategic technology decisions with long-term impact.',
        'section:last-of-type .timeline-card:nth-child(2) .eyebrow': 'Hobbies',
        'section:last-of-type .timeline-card:nth-child(2) h3': 'What rounds out my personality',
        'section:last-of-type .timeline-card:nth-child(2) p': 'You can later replace this with your real hobbies—reading, fitness, travel, side projects, writing, or any interests that make your profile more approachable.',
        '.footer-box strong': 'About me',
        '.footer-box > div:first-child p': 'Expertise, personality, and motivation in one professional overall picture.'
      }
    }
  }
};

function insertLanguageSwitcher() {
  const navbar = document.querySelector('.navbar');
  if (!navbar || navbar.querySelector('.lang-switch')) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'lang-switch';
  wrapper.setAttribute('role', 'group');
  wrapper.setAttribute('aria-label', 'Language switch');
  wrapper.innerHTML = `
    <span class="lang-switch-label" data-lang-label>Language</span>
    <button class="lang-btn" type="button" data-lang="de">DE</button>
    <button class="lang-btn" type="button" data-lang="en">EN</button>
  `;

  const navToggle = document.querySelector('[data-nav-toggle]');
  if (navToggle) {
    navbar.insertBefore(wrapper, navToggle);
  } else {
    navbar.appendChild(wrapper);
  }
}

function setSelectorContent(selector, value) {
  const element = document.querySelector(selector);
  if (!element || typeof value !== 'string') return;
  if (value.includes('<')) {
    element.innerHTML = value;
  } else {
    element.textContent = value;
  }
}

function setSelectorAttrs(selector, attrs) {
  const element = document.querySelector(selector);
  if (!element || !attrs) return;
  Object.entries(attrs).forEach(([attr, value]) => {
    element.setAttribute(attr, value);
  });
}

function applyLanguage(lang) {
  const common = translations.common[lang] || translations.common.de;
  const page = translations[pageKey]?.[lang] || translations[pageKey]?.de;

  document.documentElement.lang = common.htmlLang;
  const titleEl = document.querySelector('title');
  if (titleEl && page?.title) titleEl.textContent = page.title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && page?.description) metaDescription.setAttribute('content', page.description);

  setSelectorContent('.brand strong', common.brandLabel);
  setSelectorContent('.brand small', common.brandSub);

  document.querySelectorAll('.nav-links a').forEach((link, index) => {
    if (common.nav[index]) link.textContent = common.nav[index];
  });

  const navToggle = document.querySelector('[data-nav-toggle]');
  if (navToggle) navToggle.setAttribute('aria-label', common.navToggleLabel);

  const footerYearName = document.querySelector('.footer-box small');
  if (footerYearName) footerYearName.innerHTML = `© <span data-year></span> ${common.footerName}`;
  const yearEl = document.querySelector('[data-year]');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (page?.selectors) {
    Object.entries(page.selectors).forEach(([selector, value]) => setSelectorContent(selector, value));
  }

  if (page?.attrs) {
    Object.entries(page.attrs).forEach(([selector, attrs]) => setSelectorAttrs(selector, attrs));
  }

  const label = document.querySelector('[data-lang-label]');
  if (label) label.textContent = common.langLabel;

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
    btn.textContent = btn.dataset.lang === 'de' ? common.langDe : common.langEn;
  });

  localStorage.setItem('site-language', lang);
}

insertLanguageSwitcher();

const savedLanguage = localStorage.getItem('site-language');
const browserPrefersGerman = (navigator.language || '').toLowerCase().startsWith('de');
const initialLanguage = savedLanguage || (browserPrefersGerman ? 'de' : 'en');
applyLanguage(initialLanguage);

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

const navToggle = document.querySelector('[data-nav-toggle]');
const navLinks = document.querySelector('[data-nav-links]');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(navLinks.classList.contains('open')));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
revealEls.forEach((el) => revealObserver.observe(el));

const counters = document.querySelectorAll('[data-counter]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.counter || 0);
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(target * eased);
      el.textContent = `${value}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach((item) => counterObserver.observe(item));

const filterButtons = document.querySelectorAll('[data-filter]');
const filterCards = document.querySelectorAll('[data-category]');
if (filterButtons.length && filterCards.length) {
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      filterCards.forEach((card) => {
        const match = filter === 'all' || card.dataset.category.split(' ').includes(filter);
        card.style.display = match ? '' : 'none';
      });
    });
  });
}

const searchInput = document.querySelector('[data-blog-search]');
if (searchInput) {
  const articles = [...document.querySelectorAll('[data-article]')];
  const emptyState = document.querySelector('[data-empty-state]');
  const applySearch = () => {
    const q = searchInput.value.toLowerCase().trim();
    let visible = 0;
    articles.forEach((article) => {
      const haystack = article.innerText.toLowerCase();
      const match = haystack.includes(q);
      article.style.display = match ? '' : 'none';
      if (match) visible += 1;
    });
    if (emptyState) emptyState.classList.toggle('show', visible === 0);
  };
  searchInput.addEventListener('input', applySearch);
}

const yearEl = document.querySelector('[data-year]');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const canvas = document.querySelector('[data-particles]');
if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const ctx = canvas.getContext('2d');
  let particles = [];
  let w = 0;
  let h = 0;

  const resize = () => {
    const rect = canvas.parentElement.getBoundingClientRect();
    w = canvas.width = rect.width * devicePixelRatio;
    h = canvas.height = rect.height * devicePixelRatio;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    particles = Array.from({ length: Math.min(28, Math.max(16, Math.round(rect.width / 42))) }, () => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      r: Math.random() * 2.6 + 0.8,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));
  };

  const draw = () => {
    const rect = canvas.parentElement.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    particles.forEach((p, i) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > rect.width) p.vx *= -1;
      if (p.y < 0 || p.y > rect.height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(58, 122, 255, 0.18)';
      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(40, 194, 160, ${0.10 * (1 - dist / 120)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    });
    requestAnimationFrame(draw);
  };

  resize();
  draw();
  window.addEventListener('resize', resize);
}
