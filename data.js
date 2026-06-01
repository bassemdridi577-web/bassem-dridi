// ============================================
// FICHIER DE CONFIGURATION DES DONNÉES
// ============================================
// Ce fichier contient toutes les données de votre portfolio.
// Mettez simplement à jour les valeurs ci-dessous avec vos informations.

const portfolioData = {
    // Informations Personnelles
    personal: {
        name: "Bassem Dridi",
        titles: [
            "Développeur Full Stack",
            "Ingénieur Logiciel",
            "Résolveur de Problèmes",
            "Passionné de Technologie"
        ],
        description: "Créer des solutions élégantes à des problèmes complexes grâce à un code propre et une conception innovante.",
        email: "dridibassem1234@gmail.com",
        github: "https://github.com/bassem127127",
        linkedin: "https://www.linkedin.com/in/bassem-dridi-69715b222/",
        profileImage: "my photo.png"
    },

    // Section À Propos
    about: {
        paragraphs: [
            "Je suis un développeur passionné qui aime créer des applications pour le web. Mon parcours dans le développement logiciel a commencé lorsque j'ai découvert le pouvoir de transformer des idées en réalité grâce au code.",
            "Je me spécialise dans la création d'expériences numériques exceptionnelles qui sont rapides, accessibles et conviviales. Actuellement, je me concentre sur la création de solutions innovantes qui font la différence."
        ]
    },

    // Section Compétences
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


    // Section Projets
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
                description: "A website of a company called Innovatek with a chatbot.",
                technologies: ["JavaScript", "HTML", "CSS"],
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500'%3E%3Crect width='800' height='500' fill='%2364ffda'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='32' fill='%23000'%3EInnovatek%3C/text%3E%3C/svg%3E",
                github: "https://github.com/bassem127127/innovatek2",
                demo: "https://bassem127127.github.io/innovatek2/"
            }
        ]
    },

    // Section Contact
    contact: {
        text: "Je suis actuellement à la recherche de nouvelles opportunités. Que vous ayez une question ou que vous vouliez simplement dire bonjour, n'hésitez pas à me contacter !"
    }
};

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
