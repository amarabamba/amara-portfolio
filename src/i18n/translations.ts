import type { WorkSlug } from '@/content/work'
import type { CapabilitySlug } from '@/content/capabilities'

export const languages = ['en', 'fr'] as const

export type Language = (typeof languages)[number]

export type Dictionary = {
  meta: {
    title: string
    description: string
  }
  ui: {
    nav: {
      work: string
      capabilities: string
      contact: string
    }
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
    }
    work: {
      keyFigures: string
      focus: string
      stack: string
    }
    hero: {
      capabilities: string
    }
    languageSwitcher: {
      label: string
      en: string
      fr: string
    }
  }
  content: {
    hero: {
      eyebrow: string
      title: string
      description: string
      capabilities: string[]
    }
    work: {
      eyebrow: string
      title: string
      lead: string
      projects: Record<
        WorkSlug,
        {
          type: string
          description: string
          facts: string[]
          focus: string[]
        }
      >
    }
    capabilities: {
      eyebrow: string
      title: string
      items: Record<CapabilitySlug, { name: string; description: string }>
    }
    contact: {
      eyebrow: string
      title: string
      emailLabel: string
      locationLabel: string
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
      capabilities: 'Capabilities',
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
    },
    work: {
      keyFigures: 'Key figures',
      focus: 'Focus',
      stack: 'Stack',
    },
    hero: {
      capabilities: 'Capabilities',
    },
    languageSwitcher: {
      label: 'Site language',
      en: 'English',
      fr: 'French',
    },
  },
  content: {
    hero: {
      eyebrow: 'Software Engineer',
      title:
        'Software Engineer building reliable software for complex business processes.',
      description:
        'I build reliable software for complex business processes, with a focus on enterprise applications, public-sector systems, citizen management and scheduling.',
      capabilities: [
        'Enterprise software',
        'Public-sector systems',
        'Citizen management',
        'Appointment & scheduling',
        'Complex workflows',
      ],
    },
    work: {
      eyebrow: 'Selected work',
      title: 'Selected work',
      lead: 'Selected systems built around complex business processes, integrations and real-world constraints.',
      projects: {
        gstar: {
          type: 'Administrative process management platform',
          description:
            'Platform for managing administrative processes in Swiss public administrations.',
          facts: ['3,000+ daily users', '300,000+ cases per year'],
          focus: [
            'Administrative workflows',
            'Document generation',
            'Third-party integrations',
          ],
        },
        dafexpert: {
          type: 'Commercial, financial, HR and accounting SaaS',
          description:
            'Frontend transformation of AKILCAB into Dafexpert, built on a microservices frontend architecture while leading a team of five junior developers.',
          facts: ['30% fewer production errors'],
          focus: ['Frontend microservices architecture', 'Team leadership'],
        },
        ecollect: {
          type: 'Bank reconciliation platform',
          description:
            'Web platform that automatically retrieves banking operations for bank reconciliation, relying on bank scraping where no API is available.',
          facts: [
            'Bank scraping without API',
            'Automatic financial data synchronization',
          ],
          focus: ['Bank reconciliation'],
        },
      },
    },
    capabilities: {
      eyebrow: 'Capabilities',
      title: 'What I work on',
      items: {
        'complex-systems': {
          name: 'Complex business systems',
          description:
            'Applications built around demanding business rules, workflows and administrative processes.',
        },
        fullstack: {
          name: 'Full stack development',
          description:
            'End-to-end development across modern web frontends, backend services and integrations.',
        },
        architecture: {
          name: 'Architecture & integration',
          description:
            'APIs, microservices, third-party systems, document engines and data synchronization.',
        },
        engineering: {
          name: 'Engineering & delivery',
          description:
            'Code quality, debugging, performance, CI/CD and technical guidance.',
        },
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: "Let's talk about software engineering and complex systems.",
      emailLabel: 'Email',
      locationLabel: 'Location',
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
      capabilities: 'Compétences',
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
    },
    work: {
      keyFigures: 'Chiffres clés',
      focus: 'Focus',
      stack: 'Stack',
    },
    hero: {
      capabilities: 'Compétences',
    },
    languageSwitcher: {
      label: 'Langue du site',
      en: 'Anglais',
      fr: 'Français',
    },
  },
  content: {
    hero: {
      eyebrow: 'Ingénieur Logiciel',
      title:
        'Ingénieur logiciel qui conçoit des logiciels fiables pour des processus métier complexes.',
      description:
        'Je conçois des logiciels fiables pour des processus métier complexes, avec une attention particulière pour les applications d’entreprise, les systèmes du secteur public, la gestion des usagers et la planification de rendez-vous.',
      capabilities: [
        'Logiciels d’entreprise',
        'Systèmes du secteur public',
        'Gestion des usagers',
        'Rendez-vous et planification',
        'Processus métier complexes',
      ],
    },
    work: {
      eyebrow: 'Réalisations sélectionnées',
      title: 'Réalisations sélectionnées',
      lead: 'Sélection de systèmes conçus autour de processus métier complexes, d’intégrations et de contraintes réelles.',
      projects: {
        gstar: {
          type: 'Plateforme de gestion de processus administratifs',
          description:
            'Plateforme de gestion des processus administratifs des administrations publiques suisses.',
          facts: ['3 000+ utilisateurs quotidiens', '300 000+ dossiers par an'],
          focus: [
            'Processus administratifs',
            'Génération de documents',
            'Intégrations tierces',
          ],
        },
        dafexpert: {
          type: 'SaaS commercial, financier, RH et comptable',
          description:
            "Transformation frontend d'AKILCAB en Dafexpert, construite sur une architecture frontend en microservices, tout en encadrant une équipe de cinq développeurs juniors.",
          facts: ["30 % d'erreurs de production en moins"],
          focus: [
            'Architecture frontend en microservices',
            "Encadrement d'équipe",
          ],
        },
        ecollect: {
          type: 'Plateforme de rapprochement bancaire',
          description:
            'Plateforme web qui récupère automatiquement les opérations bancaires pour rapprocher les comptes, en s’appuyant sur du scraping bancaire lorsqu’aucune API n’est disponible.',
          facts: [
            'Scraping bancaire sans API',
            'Synchronisation automatique des données financières',
          ],
          focus: ['Rapprochement bancaire'],
        },
      },
    },
    capabilities: {
      eyebrow: 'Compétences',
      title: 'Sur quoi je travaille',
      items: {
        'complex-systems': {
          name: 'Systèmes métier complexes',
          description:
            'Des applications construites autour de règles métier exigeantes, de processus et de procédures administratives.',
        },
        fullstack: {
          name: 'Développement full stack',
          description:
            'Développement de bout en bout : frontends web modernes, services backend et intégrations.',
        },
        architecture: {
          name: 'Architecture et intégration',
          description:
            'APIs, microservices, systèmes tiers, moteurs de documents et synchronisation de données.',
        },
        engineering: {
          name: 'Ingénierie et livraison',
          description:
            'Qualité de code, débogage, performance, CI/CD et conseil technique.',
        },
      },
    },
    contact: {
      eyebrow: 'Contact',
      title: "Parlons d'ingénierie logicielle et de systèmes complexes.",
      emailLabel: 'Email',
      locationLabel: 'Localisation',
    },
  },
}

export const dictionaries: Record<Language, Dictionary> = {
  en,
  fr,
}