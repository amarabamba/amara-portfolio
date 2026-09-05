import type { NavId } from '@/content/site'
import type { WorkSlug } from '@/content/work'
import type { EngineeringSlug } from '@/content/engineering'
import type { ExperienceId } from '@/content/experience'

export const languages = ['en', 'fr'] as const

export type Language = (typeof languages)[number]

export type Dictionary = {
  meta: {
    title: string
    description: string
  }
  ui: {
    nav: Record<NavId, string>
    header: {
      resume: string
      openMenu: string
      closeMenu: string
      primaryNav: string
      mobileNav: string
    }
    footer: {
      nav: string
      role: string
      builtBy: string
      socials: string
      backToTop: string
    }
    languageSwitcher: {
      label: string
      en: string
      fr: string
    }
    experience: {
      present: string
      projects: string
    }
  }
  content: {
    hero: {
      eyebrow: string
      titleA: string
      titleAccent: string
      description: string
      meta: string
      ctaWork: string
      ctaContact: string
      stats: Array<{ value: string; label: string }>
      markLabel: string
    }
    work: {
      eyebrow: string
      title: string
      lead: string
      contextLabel: string
      metricsLabel: string
      focusLabel: string
      projects: Record<
        WorkSlug,
        {
          type: string
          role: string
          company: string
          period: string
          description: string
          metrics: Array<{ value: string; label: string }>
          focus: string[]
        }
      >
    }
    engineering: {
      eyebrow: string
      title: string
      lead: string
      pillars: Record<EngineeringSlug, { name: string; description: string }>
      stackTitle: string
    }
    experience: {
      eyebrow: string
      title: string
      lead: string
      timeline: Record<
        ExperienceId,
        { role: string; company: string; period: string; summary: string; highlights: string[] }
      >
    }
    about: {
      eyebrow: string
      title: string
      paragraphs: string[]
      educationTitle: string
      certificationsTitle: string
      interestsTitle: string
      education: Array<{ title: string; school: string; year: string }>
      certifications: Array<{ name: string; issuer: string; year: string; detail: string }>
      interests: string[]
    }
    contact: {
      eyebrow: string
      title: string
      lead: string
      emailLabel: string
      emailCaption: string
      locationLabel: string
      locationCaption: string
      linkedinLabel: string
      linkedinCaption: string
      githubLabel: string
      githubCaption: string
      cvLabel: string
      cvCaption: string
    }
  }
}

const en: Dictionary = {
  meta: {
    title: 'Amara Bamba — Software Engineer',
    description:
      'Full Stack Software Engineer with more than 9 years of experience building web applications, enterprise software and solutions for complex business processes.',
  },
  ui: {
    nav: {
      work: 'Work',
      engineering: 'Engineering',
      experience: 'Experience',
      about: 'About',
      contact: 'Contact',
    },
    header: {
      resume: 'Resume',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      primaryNav: 'Primary navigation',
      mobileNav: 'Mobile navigation',
    },
    footer: {
      nav: 'Footer',
      role: 'Software Engineer',
      builtBy: 'Designed & built by',
      socials: 'Social profiles',
      backToTop: 'Back to top',
    },
    languageSwitcher: {
      label: 'Site language',
      en: 'English',
      fr: 'French',
    },
    experience: {
      present: 'Present',
      projects: 'Projects',
    },
  },
  content: {
    hero: {
      eyebrow: 'Software Engineer',
      titleA: 'I build dependable software for ',
      titleAccent: 'complex enterprise & public-sector systems.',
      description:
        'Full-stack Software Engineer with 9+ years turning complex processes into simple, maintainable systems — citizen services, administrative workflows, scheduling and SaaS platforms.',
      meta: 'Abidjan, Côte d’Ivoire · Enterprise · Public sector · SaaS',
      ctaWork: 'Selected work',
      ctaContact: 'Get in touch',
      stats: [
        { value: '9+', label: 'years of experience' },
        { value: '3,000+', label: 'daily users on GSTAR' },
        { value: '300,000+', label: 'cases handled per year' },
        { value: '30%', label: 'fewer production errors' },
      ],
      markLabel: 'Amara Bamba monogram',
    },
    work: {
      eyebrow: 'Selected Work',
      title: 'Real systems, complex constraints',
      lead: 'A closer look at the platforms behind the numbers — built around demanding business rules, integrations and real-world operating conditions.',
      contextLabel: 'Context',
      metricsLabel: 'Key metrics',
      focusLabel: 'Focus',
      projects: {
        gstar: {
          type: 'Administrative process management platform',
          role: 'Full-Stack Developer',
          company: 'ProActive.Swiss — Growing Consulting',
          period: '2023 · Present',
          description:
            'Platform running the administrative processes of Swiss public administrations. I designed dynamic web interfaces and processing workflows that automate administrative procedures — cutting paper handling and raising municipal productivity — and integrated backend services, document engines and third-party synchronizations for case management, official document generation and data exchange.',
          metrics: [
            { value: '3,000+', label: 'daily users' },
            { value: '300,000+', label: 'cases per year' },
          ],
          focus: [
            'Automated administrative workflows',
            'Official document generation',
            'Third-party & ERP integrations',
          ],
        },
        dafexpert: {
          type: 'SaaS for business, finance, HR & accounting',
          role: 'Lead Software Engineer',
          company: 'AKILTECHNOLOGIES',
          period: '2019 · 2023',
          description:
            'Frontend transformation of the AKILCAB suite into Dafexpert, re-architected on a microservices-based frontend while leading a team of five junior developers — with a 30% drop in production errors.',
          metrics: [
            { value: '30%', label: 'fewer production errors' },
            { value: '5', label: 'junior developers led' },
          ],
          focus: [
            'Frontend transformation',
            'Microservices architecture',
            'Team leadership & mentoring',
          ],
        },
        ecollect: {
          type: 'Automatic bank reconciliation platform',
          role: 'Lead Software Engineer',
          company: 'AKILTECHNOLOGIES',
          period: '2019 · 2023',
          description:
            'Web solution that automatically retrieves banking operations to perform bank reconciliation — with reconciliation features implemented precisely enough to guarantee exact synchronization of financial data.',
          metrics: [],
          focus: ['Automatic bank-feed retrieval', 'Exact financial data sync'],
        },
      },
    },
    engineering: {
      eyebrow: 'Engineering',
      title: 'How I engineer systems',
      lead: 'From Java to JavaScript, from workflow engines to SaaS platforms — pragmatic engineering focused on simple, maintainable solutions that fit real business needs.',
      pillars: {
        enterprise: {
          name: 'Enterprise & public-sector systems',
          description:
            'Software built around demanding business rules, administrative workflows and citizen services — with an emphasis on robustness, compliance and maintainability.',
        },
        fullstack: {
          name: 'Full-stack JavaScript/TypeScript',
          description:
            'End-to-end product work across modern web frontends and backend services, keeping interfaces simple and the architecture pragmatic.',
        },
        architecture: {
          name: 'SaaS architecture & integrations',
          description:
            'APIs, microservices, document engines and data synchronization — connecting platforms together and keeping the data exact.',
        },
        delivery: {
          name: 'Reliability, delivery & leadership',
          description:
            'Debugging, performance, CI/CD and mentoring. Shipping reliable software — and growing the people around me.',
        },
      },
      stackTitle: 'The stack in practice',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'From Abidjan to Swiss public administrations',
      lead: 'Nine years of engineering across enterprise SaaS in Côte d’Ivoire and the administrative platforms of Swiss public authorities.',
      timeline: {
        proactive: {
          role: 'Full-Stack Developer',
          company: 'ProActive.Swiss · via Growing Consulting',
          period: 'Feb 2023 · Present',
          summary:
            'Developing and maintaining the platform that manages administrative processes for Swiss public administrations.',
          highlights: [
            'Built dynamic web interfaces and processing workflows that automate administrative procedures — cutting paper processing and raising municipal productivity.',
            'Integrated backend services, document engines and third-party synchronizations for case management, official document generation and data exchange.',
            'Accompanied version upgrades and production deployments; fixed anomalies and optimized performance across the platform.',
          ],
        },
        akil: {
          role: 'Lead Software Engineer',
          company: 'AKILTECHNOLOGIES',
          period: 'Oct 2019 · Feb 2023',
          summary:
            'Leading engineering on a suite of SaaS products for businesses and accountants — including the transformation of AKILCAB into Dafexpert.',
          highlights: [
            'Led five junior developers through the frontend transformation of AKILCAB into Dafexpert — a microservices-based frontend that cut production errors by 30%.',
            'Designed the microservices backend architecture of DIGITEXPERT for scalability and maintainability, collaborating with designers on the professional UX.',
            'Optimized AKILCAB services — cutting response times by 20% through code and architectural improvements.',
          ],
        },
        eu: {
          role: 'Web Developer',
          company: 'European Union — Côte d’Ivoire',
          period: 'Short-term mission · 5 months',
          summary:
            'Mission supporting the European Union’s internal task-management application.',
          highlights: [
            'Trained users on the internal task-management application and provided technical support.',
            'Collaborated with cross-functional teams to identify needs and develop adapted software solutions.',
          ],
        },
        pigier: {
          role: 'Multimedia Assistant',
          company: 'PIGIER CI',
          period: 'Mar 2018 · Jul 2018',
          summary:
            'Early hands-on role in multimedia assistance while starting the engineering path.',
          highlights: [],
        },
      },
    },
    about: {
      eyebrow: 'About',
      title: 'Simple solutions to complex problems',
      paragraphs: [
        'I’m Amara, a full-stack Software Engineer from Abidjan with more than nine years of experience building software that organizations rely on every day. My path runs from enterprise SaaS in Côte d’Ivoire to the Swiss public sector — always around the same question: how do we make complex processes feel simple and reliable?',
        'I believe craft is a means, not an end. A system succeeds when it stays simple to maintain, safe to run and adapted to the people using it. Along the way I’ve debugged critical components, stabilized an internal framework, and mentored junior developers — because good engineering also means making the people around you better.',
      ],
      educationTitle: 'Education',
      certificationsTitle: 'Certifications',
      interestsTitle: 'Interests',
      education: [
        {
          title: 'Professional Master in Computer Engineering & Networks',
          school: 'PIGIER CI',
          year: '2022',
        },
        {
          title: 'Professional Bachelor in Networks & Software Engineering',
          school: 'PIGIER CI',
          year: '2018',
        },
        { title: 'BTS in Computer Science', school: 'PIGIER CI', year: '2017' },
      ],
      certifications: [
        { name: 'Appway Platform', issuer: 'Appway', year: '2023', detail: 'Platform certification' },
        { name: 'Full Stack Open', issuer: 'Full Stack Open', year: '', detail: 'JavaScript · CI/CD · Mobile' },
        { name: 'MOS Excel 2010', issuer: 'Microsoft', year: '2016', detail: 'Score 1000/1000' },
      ],
      interests: ['Problem solving', 'Travel', 'Open-source projects'],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Have a complex system worth simplifying?',
      lead: 'I’m based in Abidjan and work with teams building software for enterprises and public institutions.',
      emailLabel: 'Email',
      emailCaption: 'The fastest way to reach me',
      locationLabel: 'Location',
      locationCaption: 'Abidjan, Côte d’Ivoire',
      linkedinLabel: 'LinkedIn',
      linkedinCaption: 'Professional profile & experience',
      githubLabel: 'GitHub',
      githubCaption: 'Code, experiments & open source',
      cvLabel: 'Resume',
      cvCaption: 'Download the full CV (PDF)',
    },
  },
}

const fr: Dictionary = {
  meta: {
    title: 'Amara Bamba — Ingénieur Logiciel',
    description:
      "Ingénieur logiciel full stack avec plus de 9 ans d'expérience dans le développement d'applications web, de logiciels d'entreprise et de solutions pour des processus métier complexes.",
  },
  ui: {
    nav: {
      work: 'Réalisations',
      engineering: 'Ingénierie',
      experience: 'Parcours',
      about: 'À propos',
      contact: 'Contact',
    },
    header: {
      resume: 'CV',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
      primaryNav: 'Navigation principale',
      mobileNav: 'Navigation mobile',
    },
    footer: {
      nav: 'Pied de page',
      role: 'Ingénieur Logiciel',
      builtBy: 'Conçu et développé par',
      socials: 'Profils sociaux',
      backToTop: 'Retour en haut',
    },
    languageSwitcher: {
      label: 'Langue du site',
      en: 'Anglais',
      fr: 'Français',
    },
    experience: {
      present: 'Aujourd’hui',
      projects: 'Projets',
    },
  },
  content: {
    hero: {
      eyebrow: 'Ingénieur Logiciel',
      titleA: 'Je conçois des logiciels fiables pour ',
      titleAccent: 'les systèmes complexes d’entreprise et du secteur public.',
      description:
        'Ingénieur logiciel full stack, plus de 9 ans d’expérience à transformer des processus complexes en systèmes simples et maintenables — services aux usagers, processus administratifs, planification et plateformes SaaS.',
      meta: 'Abidjan, Côte d’Ivoire · Entreprise · Secteur public · SaaS',
      ctaWork: 'Réalisations',
      ctaContact: 'Me contacter',
      stats: [
        { value: '9+', label: 'années d’expérience' },
        { value: '3 000+', label: 'utilisateurs quotidiens de GSTAR' },
        { value: '300 000+', label: 'dossiers traités par an' },
        { value: '30 %', label: 'd’erreurs de production en moins' },
      ],
      markLabel: 'Monogramme Amara Bamba',
    },
    work: {
      eyebrow: 'Réalisations sélectionnées',
      title: 'Des systèmes réels, des contraintes complexes',
      lead: 'Un regard sur les plateformes derrière les chiffres — construites autour de règles métier exigeantes, d’intégrations et de conditions d’exploitation réelles.',
      contextLabel: 'Contexte',
      metricsLabel: 'Chiffres clés',
      focusLabel: 'Focus',
      projects: {
        gstar: {
          type: 'Plateforme de gestion de processus administratifs',
          role: 'Développeur Full-Stack',
          company: 'ProActive.Swiss — Growing Consulting',
          period: '2023 · Aujourd’hui',
          description:
            'La plateforme qui fait tourner les processus administratifs des administrations publiques suisses. J’ai conçu des interfaces web dynamiques et des workflows de traitement qui automatisent les procédures administratives — moins de papier, plus de productivité pour les communes — et intégré services backend, moteurs de documents et synchronisations tierces pour la gestion des dossiers, la génération de documents officiels et l’échange de données.',
          metrics: [
            { value: '3 000+', label: 'utilisateurs quotidiens' },
            { value: '300 000+', label: 'dossiers par an' },
          ],
          focus: [
            'Processus administratifs automatisés',
            'Génération de documents officiels',
            'Intégrations tierces et ERP',
          ],
        },
        dafexpert: {
          type: 'SaaS commercial, financier, RH et comptable',
          role: 'Lead Software Engineer',
          company: 'AKILTECHNOLOGIES',
          period: '2019 · 2023',
          description:
            'Transformation du frontend de la suite AKILCAB en Dafexpert, réarchitecturée sur un frontend en microservices tout en encadrant une équipe de cinq développeurs juniors — avec une réduction de 30 % des erreurs de production.',
          metrics: [
            { value: '30 %', label: 'd’erreurs de production en moins' },
            { value: '5', label: 'développeurs juniors encadrés' },
          ],
          focus: [
            'Transformation du frontend',
            'Architecture en microservices',
            'Leadership et mentorat',
          ],
        },
        ecollect: {
          type: 'Plateforme de rapprochement bancaire',
          role: 'Lead Software Engineer',
          company: 'AKILTECHNOLOGIES',
          period: '2019 · 2023',
          description:
            'Solution web qui récupère automatiquement les opérations bancaires pour réaliser le rapprochement bancaire — avec des fonctionnalités de rapprochement implémentées avec précision, garantissant la synchronisation exacte des données financières.',
          metrics: [],
          focus: ['Récupération automatique des flux bancaires', 'Synchronisation financière exacte'],
        },
      },
    },
    engineering: {
      eyebrow: 'Ingénierie',
      title: 'Comment j’ingénierie les systèmes',
      lead: 'De Java à JavaScript, des moteurs de workflow aux plateformes SaaS — une ingénierie pragmatique centrée sur des solutions simples, maintenables et adaptées aux besoins réels du métier.',
      pillars: {
        enterprise: {
          name: 'Systèmes d’entreprise et du secteur public',
          description:
            'Des logiciels construits autour de règles métier exigeantes, de processus administratifs et de services aux usagers — avec un accent sur la robustesse, la conformité et la maintenabilité.',
        },
        fullstack: {
          name: 'Full-stack JavaScript/TypeScript',
          description:
            'Du travail produit de bout en bout entre frontends web modernes et services backend, avec des interfaces simples et une architecture pragmatique.',
        },
        architecture: {
          name: 'Architecture SaaS et intégrations',
          description:
            'APIs, microservices, moteurs de documents et synchronisation de données — connecter les plateformes entre elles et garder des données exactes.',
        },
        delivery: {
          name: 'Fiabilité, livraison et leadership',
          description:
            'Débogage, performance, CI/CD et mentorat. Livrer des logiciels fiables — et faire grandir les personnes autour de moi.',
        },
      },
      stackTitle: 'La stack en pratique',
    },
    experience: {
      eyebrow: 'Parcours',
      title: 'D’Abidjan aux administrations publiques suisses',
      lead: 'Neuf ans d’ingénierie entre les SaaS d’entreprise en Côte d’Ivoire et les plateformes administratives du secteur public suisse.',
      timeline: {
        proactive: {
          role: 'Développeur Full-Stack',
          company: 'ProActive.Swiss · via Growing Consulting',
          period: 'Févr. 2023 · Aujourd’hui',
          summary:
            'Développement et maintenance de la plateforme qui gère les processus administratifs des administrations publiques suisses.',
          highlights: [
            'Conçu des interfaces web dynamiques et des workflows de traitement qui automatisent les procédures administratives — moins de papier, plus de productivité pour les communes.',
            'Intégré des services backend, des moteurs de documents et des synchronisations tierces pour la gestion des dossiers, la génération de documents officiels et l’échange de données.',
            'Accompagné les montées de version et les déploiements ; corrigé des anomalies et optimisé les performances de la plateforme.',
          ],
        },
        akil: {
          role: 'Lead Software Engineer',
          company: 'AKILTECHNOLOGIES',
          period: 'Oct. 2019 · Févr. 2023',
          summary:
            'Lead sur une suite de produits SaaS pour les entreprises et les experts-comptables — dont la transformation d’AKILCAB en Dafexpert.',
          highlights: [
            'Encadré cinq développeurs juniors dans la transformation du frontend d’AKILCAB en Dafexpert — un frontend microservices qui a réduit les erreurs de production de 30 %.',
            'Conçu l’architecture backend en microservices de DIGITEXPERT pour l’évolutivité et la maintenabilité, en collaboration avec les designers sur l’UX professionnelle.',
            'Optimisé les services d’AKILCAB — une réduction de 20 % des temps de réponse grâce à des optimisations de code et d’architecture.',
          ],
        },
        eu: {
          role: 'Développeur Web',
          company: 'Union Européenne — Côte d’Ivoire',
          period: 'Mission courte · 5 mois',
          summary:
            'Mission d’accompagnement de l’application interne de gestion des tâches de l’Union européenne.',
          highlights: [
            'Formé les utilisateurs sur l’application interne de gestion des tâches et assuré l’assistance technique.',
            'Collaboré avec les équipes interfonctionnelles pour identifier les besoins et développer des solutions logicielles adaptées.',
          ],
        },
        pigier: {
          role: 'Assistant Multimédia',
          company: 'PIGIER CI',
          period: 'Mars 2018 · Juil. 2018',
          summary:
            'Premier rôle concret dans l’assistance multimédia, au début du parcours d’ingénierie.',
          highlights: [],
        },
      },
    },
    about: {
      eyebrow: 'À propos',
      title: 'Des solutions simples aux problèmes complexes',
      paragraphs: [
        'Je suis Amara, ingénieur logiciel full stack basé à Abidjan, avec plus de neuf ans d’expérience à concevoir des logiciels que les organisations utilisent réellement chaque jour. Mon parcours va des SaaS d’entreprise en Côte d’Ivoire au secteur public suisse — toujours autour d’une même question : comment rendre simples et fiables des processus complexes ?',
        'Je considère la technique comme un moyen, pas une fin. Un système réussit quand il reste simple à maintenir, sûr à exploiter et adapté aux personnes qui l’utilisent. J’ai débogué des composants critiques, stabilisé un framework interne et encadré des développeurs juniors — car le bon génie logiciel, c’est aussi faire progresser les personnes autour de soi.',
      ],
      educationTitle: 'Formation',
      certificationsTitle: 'Certifications',
      interestsTitle: 'Centres d’intérêt',
      education: [
        {
          title: 'Master Professionnel en Génie Informatique et Réseaux',
          school: 'PIGIER CI',
          year: '2022',
        },
        {
          title: 'Licence Professionnelle en Réseaux et Génie Logiciel',
          school: 'PIGIER CI',
          year: '2018',
        },
        { title: 'BTS Informatique', school: 'PIGIER CI', year: '2017' },
      ],
      certifications: [
        { name: 'Appway Platform', issuer: 'Appway', year: '2023', detail: 'Certification plateforme' },
        { name: 'Full Stack Open', issuer: 'Full Stack Open', year: '', detail: 'JavaScript · CI/CD · Mobile' },
        { name: 'MOS Excel 2010', issuer: 'Microsoft', year: '2016', detail: 'Score 1000/1000' },
      ],
      interests: ['Résolution de problèmes', 'Voyages', 'Projets open source'],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Un système complexe qui mérite d’être simplifié ?',
      lead: 'Je suis basé à Abidjan et je travaille avec des équipes qui construisent des logiciels pour les entreprises et les institutions publiques.',
      emailLabel: 'Email',
      emailCaption: 'Le plus rapide pour me joindre',
      locationLabel: 'Localisation',
      locationCaption: 'Abidjan, Côte d’Ivoire',
      linkedinLabel: 'LinkedIn',
      linkedinCaption: 'Profil professionnel et expérience',
      githubLabel: 'GitHub',
      githubCaption: 'Code, expérimentations et open source',
      cvLabel: 'CV',
      cvCaption: 'Télécharger le CV complet (PDF)',
    },
  },
}

export const dictionaries: Record<Language, Dictionary> = {
  en,
  fr,
}