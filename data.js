// ============================================
// FICHIER DE CONFIGURATION DES DONNÉES (MULTILINGUE)
// ============================================
// Ce fichier contient toutes les données de votre portfolio dans les deux langues.

const portfolioData = {
    fr: {
        personal: {
            name: "Bassem Dridi",
            titles: [
                "Développeur Full Stack",
                "Diplômé en Business Intelligence",
                "Résolveur de Problèmes",
                "Passionné de Technologie"
            ],
            description: "Créer des solutions élégantes à des problèmes complexes grâce à un code propre et une conception innovante.",
            email: "dridibassem1234@gmail.com",
            github: "https://github.com/bassem127127",
            linkedin: "https://www.linkedin.com/in/bassem-dridi-69715b222/",
            profileImage: "my photo.png"
        },
        about: {
            paragraphs: [
                "Je suis un développeur passionné qui aime créer des applications web. Mon parcours dans le développement logiciel a commencé lorsque j'ai découvert le pouvoir de transformer des idées en réalité grâce au code.",
                "Je me spécialise dans la création d'expériences numériques exceptionnelles qui sont rapides, accessibles et conviviales. Actuellement, je me concentre sur la création de solutions innovantes qui font la différence."
            ]
        },
        skills: [
            {
                name: "Développement Frontend",
                icon: "💻",
                description: "Création d'interfaces utilisateur réactives et interactives avec des frameworks modernes et les meilleures pratiques."
            },
            {
                name: "Développement Backend",
                icon: "⚙️",
                description: "Création d'applications côté serveur robustes, d'API RESTful et d'architectures de bases de données."
            },
            {
                name: "Design UI/UX",
                icon: "🎨",
                description: "Conception d'expériences utilisateur belles et intuitives avec une attention particulière aux détails et à l'accessibilité."
            },
            {
                name: "Gestion de Bases de Données",
                icon: "🗄️",
                description: "Conception et optimisation de schémas de bases de données pour la performance et l'évolutivité."
            },
            {
                name: "Intégration IA",
                icon: "🤖",
                description: "Intégration d'intelligence artificielle pour accélérer le développement et automatiser les tâches complexes."
            },
            {
                name: "Résolution de Problèmes",
                icon: "🧩",
                description: "Analyse de problèmes complexes et mise en œuvre de solutions efficaces et évolutives."
            }
        ],
        projects: {
            company: [
                {
                    title: "Tunisie Transformateur (TTF)",
                    description: "Projet professionnel développé pour Tunisie Transformateur. Une application globale de gestion.",
                    technologies: ["JavaScript", "HTML", "CSS"],
                    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Crect width='800' height='500' fill='%23667eea'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='32' fill='white'%3ETunisie Transformateur%3C/text%3E%3C/svg%3E",
                    github: "https://github.com/bassemdridi577-web/global-managment-App-TTF",
                    demo: "https://bassemdridi577-web.github.io/global-managment-App-TTF/"
                }
            ],
            freelance: [
                {
                    title: "Smartovate Insights",
                    description: "Plateforme d'aide à la décision stratégique permettant la visualisation interactive de KPIs, de leads et d'analyse des performances de produits.",
                    technologies: ["Next.js", "React", "Tailwind CSS", "Recharts"],
                    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%237c3aed;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%234f46e5;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='500' fill='url(%23grad1)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='36' font-weight='bold' fill='white'%3ESmartovate Insights%3C/text%3E%3C/svg%3E",
                    github: "https://github.com/bassemdridi577-web/smartovate",
                    demo: "https://bassemdridi577-web.github.io/smartovate/"
                }
            ],
            passion: [
                {
                    title: "Innovatek Website",
                    description: "Un site web pour une entreprise nommée Innovatek intégrant un chatbot interactif.",
                    technologies: ["JavaScript", "HTML", "CSS"],
                    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Crect width='800' height='500' fill='%2364ffda'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='32' fill='%23000'%3EInnovatek%3C/text%3E%3C/svg%3E",
                    github: "https://github.com/bassem127127/innovatek2",
                    demo: "https://bassem127127.github.io/innovatek2/"
                }
            ]
        },
        contact: {
            text: "Je suis actuellement à la recherche de nouvelles opportunités. Que vous ayez une question ou que vous vouliez simplement dire bonjour, n'hésitez pas à me contacter !"
        }
    },
    en: {
        personal: {
            name: "Bassem Dridi",
            titles: [
                "Full Stack Developer",
                "Business Intelligence Graduate",
                "Problem Solver",
                "Tech Enthusiast"
            ],
            description: "Creating elegant solutions to complex problems through clean code and innovative design.",
            email: "dridibassem1234@gmail.com",
            github: "https://github.com/bassem127127",
            linkedin: "https://www.linkedin.com/in/bassem-dridi-69715b222/",
            profileImage: "my photo.png"
        },
        about: {
            paragraphs: [
                "I am a passionate developer who loves creating web applications. My journey in software development began when I discovered the power of transforming ideas into reality through code.",
                "I specialize in building exceptional digital experiences that are fast, accessible, and user-friendly. Currently, I am focused on building innovative solutions that make a difference."
            ]
        },
        skills: [
            {
                name: "Frontend Development",
                icon: "💻",
                description: "Building responsive and interactive user interfaces with modern frameworks and best practices."
            },
            {
                name: "Backend Development",
                icon: "⚙️",
                description: "Building robust server-side applications, RESTful APIs, and database architectures."
            },
            {
                name: "UI/UX Design",
                icon: "🎨",
                description: "Designing beautiful and intuitive user experiences with strong attention to details and accessibility."
            },
            {
                name: "Database Management",
                icon: "🗄️",
                description: "Designing and optimizing database schemas for maximum performance and scalability."
            },
            {
                name: "AI Integration",
                icon: "🤖",
                description: "Integrating Artificial Intelligence to accelerate development and automate complex tasks."
            },
            {
                name: "Problem Solving",
                icon: "🧩",
                description: "Analyzing complex problems and implementing highly efficient, scalable solutions."
            }
        ],
        projects: {
            company: [
                {
                    title: "Tunisie Transformateur (TTF)",
                    description: "Professional project developed for Tunisie Transformateur. A comprehensive global management application.",
                    technologies: ["JavaScript", "HTML", "CSS"],
                    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Crect width='800' height='500' fill='%23667eea'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='32' fill='white'%3ETunisie Transformateur%3C/text%3E%3C/svg%3E",
                    github: "https://github.com/bassemdridi577-web/global-managment-App-TTF",
                    demo: "https://bassemdridi577-web.github.io/global-managment-App-TTF/"
                }
            ],
            freelance: [
                {
                    title: "Smartovate Insights",
                    description: "Strategic decision support platform enabling interactive visualization of KPIs, leads, and product performance analysis.",
                    technologies: ["Next.js", "React", "Tailwind CSS", "Recharts"],
                    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%237c3aed;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%234f46e5;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='500' fill='url(%23grad1)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='36' font-weight='bold' fill='white'%3ESmartovate Insights%3C/text%3E%3C/svg%3E",
                    github: "https://github.com/bassemdridi577-web/smartovate",
                    demo: "https://bassemdridi577-web.github.io/smartovate/"
                }
            ],
            passion: [
                {
                    title: "Innovatek Website",
                    description: "A website of a company called Innovatek integrating an interactive chatbot.",
                    technologies: ["JavaScript", "HTML", "CSS"],
                    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Crect width='800' height='500' fill='%2364ffda'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='32' fill='%23000'%3EInnovatek%3C/text%3E%3C/svg%3E",
                    github: "https://github.com/bassem127127/innovatek2",
                    demo: "https://bassem127127.github.io/innovatek2/"
                }
            ]
        },
        contact: {
            text: "I am currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to contact me!"
        }
    },
    translations: {
        fr: {
            navHome: "Accueil",
            navAbout: "À Propos",
            navSkills: "Compétences",
            navProjects: "Projets",
            navContact: "Contact",
            heroGreeting: "Bonjour, je suis",
            heroCtaProjects: "Voir Mes Projets",
            heroCtaContact: "Me Contacter",
            heroScroll: "Défiler vers le bas",
            aboutTitle: "01. À Propos de Moi",
            aboutAcademicLabel: "Diplôme Académique",
            aboutAcademicTitle: "Licence en Informatique de Gestion",
            aboutAcademicSpecialty: "Business Intelligence (BI)",
            aboutAcademicDesc: "Ma formation académique allie les technologies de l'information (IT) et la gestion d'entreprise. Elle me dote d'une vision transversale me permettant de concevoir des architectures applicatives robustes, d'optimiser les flux de données complexes, et de concevoir des systèmes décisionnels performants alignés sur les besoins métiers.",
            aboutBiTitle: "Expertise Décisionnelle & BI",
            skillsTitle: "02. Compétences & Expertise",
            techStackSubtitle: "Mon Arsenal",
            techStackTitle: "Technologies de Pointe",
            projectsTitle: "03. Projets en Vedette",
            projectsDisclaimer: "<strong>Note importante :</strong> Tous les projets présentés ci-dessous sont des versions de <strong>démonstration</strong>. Certaines fonctionnalités avancées ou intégrations d'infrastructure peuvent être absentes ou limitées par rapport aux applications réelles déployées en production.",
            projectsCatCompany: "Projets d'Entreprise",
            projectsCatFreelance: "Projets Freelance",
            projectsCatPassion: "Projets Passion & Explorations",
            contactTitle: "04. Contacter Nous",
            footerText: "Bassem Dridi. Créé avec passion et café."
        },
        en: {
            navHome: "Home",
            navAbout: "About",
            navSkills: "Skills",
            navProjects: "Projects",
            navContact: "Contact",
            heroGreeting: "Hello, I am",
            heroCtaProjects: "View My Work",
            heroCtaContact: "Get In Touch",
            heroScroll: "Scroll down",
            aboutTitle: "01. About Me",
            aboutAcademicLabel: "Academic Degree",
            aboutAcademicTitle: "Bachelor in Management Information Systems",
            aboutAcademicSpecialty: "Business Intelligence (BI)",
            aboutAcademicDesc: "My academic background bridges information technology (IT) and business management. It equips me with a cross-functional vision to design robust application architectures, optimize complex data flows, and build high-performance decision support systems aligned with business needs.",
            aboutBiTitle: "Decision Support & BI Expertise",
            skillsTitle: "02. Skills & Expertise",
            techStackSubtitle: "My Arsenal",
            techStackTitle: "Cutting-Edge Tech Stack",
            projectsTitle: "03. Featured Projects",
            projectsDisclaimer: "<strong>Important note:</strong> All projects presented below are <strong>demonstration</strong> versions. Some advanced features or infrastructure integrations may be absent or limited compared to actual production-deployed applications.",
            projectsCatCompany: "Enterprise Projects",
            projectsCatFreelance: "Freelance Projects",
            projectsCatPassion: "Passion Projects & Explorations",
            contactTitle: "04. Contact Us",
            footerText: "Bassem Dridi. Created with passion and coffee."
        }
    }
};

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
