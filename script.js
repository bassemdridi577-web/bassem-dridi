// ============================================
// FICHIER JAVASCRIPT PRINCIPAL
// ============================================

// Initialiser au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    initializePreloader();
    initializeNavigation();
    initializeTypingEffect();
    populateContent();
    initializeScrollAnimations();
    updateCurrentYear();
});

// ============================================
// PRELOADER / OPENING ANIMATION
// ============================================

function initializePreloader() {
    const preloader = document.getElementById('preloader');
    const counter = document.getElementById('preloaderCounter');

    if (!preloader || !counter) return;

    let progress = 0;
    const totalDuration = 1800;
    const intervalDelay = 20;
    const increment = 100 / (totalDuration / intervalDelay);

    const counterInterval = setInterval(() => {
        progress = Math.min(progress + increment, 100);
        counter.textContent = Math.round(progress);

        if (progress >= 100) {
            clearInterval(counterInterval);
            dismissPreloader(preloader);
        }
    }, intervalDelay);
}

function dismissPreloader(preloader) {
    // Small pause after reaching 100 before the curtain lifts
    setTimeout(() => {
        preloader.classList.add('exit');
        document.body.classList.remove('is-loading');

        // Remove preloader from DOM after transition completes
        preloader.addEventListener('transitionend', () => {
            preloader.remove();
        }, { once: true });
    }, 400);
}

// ============================================
// NAVIGATION
// ============================================

function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Effet de défilement de la barre de navigation
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Basculer le menu mobile
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        animateMenuIcon(navToggle);
    });

    // Fermer le menu mobile lors du clic sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            resetMenuIcon(navToggle);
        });
    });

    // Mise en surbrillance du lien actif
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function animateMenuIcon(toggle) {
    const spans = toggle.querySelectorAll('span');
    spans[0].style.transform = 'rotate(45deg) translateY(10px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
}

function resetMenuIcon(toggle) {
    const spans = toggle.querySelectorAll('span');
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
}

// ============================================
// EFFET DE FRAPPE
// ============================================

function initializeTypingEffect() {
    const typingText = document.getElementById('typingText');
    const titles = portfolioData.personal.titles;
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentTitle = titles[titleIndex];

        if (isDeleting) {
            typingText.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentTitle.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            typingSpeed = 500;
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

// ============================================
// REMPLIR LE CONTENU À PARTIR DES DONNÉES
// ============================================

function populateContent() {
    populatePersonalInfo();
    populateAboutSection();
    populateSkills();
    populateProjects();
    populateContact();
}

function populatePersonalInfo() {
    const { name, description, profileImage } = portfolioData.personal;

    document.getElementById('heroName').textContent = name;
    document.getElementById('heroDescription').textContent = description;

    const profileImg = document.getElementById('profileImage');
    if (profileImg) {
        profileImg.src = profileImage;
        profileImg.alt = `${name} - Photo de Profil`;
    }
}

function populateAboutSection() {
    const { paragraphs } = portfolioData.about;

    // Mettre à jour les paragraphes
    paragraphs.forEach((text, index) => {
        const element = document.getElementById(`aboutParagraph${index + 1}`);
        if (element) {
            element.textContent = text;
        }
    });
}

function populateSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;

    skillsGrid.innerHTML = portfolioData.skills.map(skill => `
        <div class="skill-card">
            <div class="skill-icon">${skill.icon}</div>
            <h3 class="skill-name">${skill.name}</h3>
            <p class="skill-description">${skill.description}</p>
        </div>
    `).join('');
}

function generateProjectHTML(project, label) {
    return `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-content">
                <p class="project-label">${label}</p>
                <h3 class="project-title">${project.title}</h3>
                <div class="project-description">
                    <p>${project.description}</p>
                </div>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.github ? `
                        <a href="${project.github}" target="_blank" class="project-link" title="Voir le Code Source">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    ` : ''}
                    ${project.demo ? `
                        <a href="${project.demo}" target="_blank" class="project-link" title="Voir la Démo en Direct">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

// ============================================
// PROJECTS RENDERING
// ============================================

function populateProjects() {
    const companyGrid = document.getElementById('companyGrid');
    const freelanceGrid = document.getElementById('freelanceGrid');
    const passionGrid = document.getElementById('passionGrid');

    if (companyGrid && portfolioData.projects.company) {
        companyGrid.innerHTML = portfolioData.projects.company.map(p => generateProjectHTML(p, "Entreprise")).join('');
    }
    
    if (freelanceGrid && portfolioData.projects.freelance) {
        freelanceGrid.innerHTML = portfolioData.projects.freelance.map(p => generateProjectHTML(p, "Freelance")).join('');
    }
    
    if (passionGrid && portfolioData.projects.passion) {
        passionGrid.innerHTML = portfolioData.projects.passion.map(p => generateProjectHTML(p, "Passion")).join('');
    }
}

function populateContact() {
    const { email, github, linkedin } = portfolioData.personal;
    const { text } = portfolioData.contact;

    const contactText = document.getElementById('contactText');
    if (contactText) {
        contactText.textContent = text;
    }

    // Mettre à jour le lien email
    const emailLink = document.getElementById('emailLink');
    if (emailLink) {
        emailLink.href = `mailto:${email}`;
        emailLink.querySelector('span').textContent = email;
    }

    // Mettre à jour le lien LinkedIn
    const linkedinLink = document.getElementById('linkedinLink');
    if (linkedinLink) {
        linkedinLink.href = linkedin;
        linkedinLink.querySelector('span').textContent = linkedin.replace('https://', '');
    }
}

// ============================================
// ANIMATIONS AU DÉFILEMENT
// ============================================

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observer toutes les sections et cartes
    const animatedElements = document.querySelectorAll(
        '.skill-card, .project-card, .contact-link, .about-content, .stack__item'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ============================================
// FONCTIONS UTILITAIRES
// ============================================

function updateCurrentYear() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ============================================
// FONCTIONS DE GESTION DES PROJETS
// ============================================
// Ces fonctions vous permettent d'ajouter/supprimer des projets dynamiquement

/**
 * Ajouter un nouveau projet au portfolio
 * @param {string} category - "company", "freelance", ou "passion"
 * @param {Object} project - Objet projet avec title, description, technologies, image, github, demo
 */
function addProject(category, project) {
    if (portfolioData.projects[category]) {
        portfolioData.projects[category].push(project);
        populateProjects();
        console.log('Projet ajouté avec succès !');
    } else {
        console.log('Catégorie invalide !');
    }
}

/**
 * Supprimer un projet par titre
 * @param {string} category - "company", "freelance", ou "passion"
 * @param {string} title - Le titre du projet à supprimer
 */
function removeProject(category, title) {
    if (portfolioData.projects[category]) {
        const index = portfolioData.projects[category].findIndex(p => p.title === title);
        if (index !== -1) {
            portfolioData.projects[category].splice(index, 1);
            populateProjects();
            console.log('Projet supprimé avec succès !');
        } else {
            console.log('Projet non trouvé dans cette catégorie !');
        }
    } else {
        console.log('Catégorie invalide !');
    }
}

/**
 * Mettre à jour un projet existant
 * @param {string} category - "company", "freelance", ou "passion"
 * @param {string} title - Le titre du projet à mettre à jour
 * @param {Object} updates - Objet contenant les champs à mettre à jour
 */
function updateProject(category, title, updates) {
    if (portfolioData.projects[category]) {
        const project = portfolioData.projects[category].find(p => p.title === title);
        if (project) {
            Object.assign(project, updates);
            populateProjects();
            console.log('Projet mis à jour avec succès !');
        } else {
            console.log('Projet non trouvé dans cette catégorie !');
        }
    } else {
        console.log('Catégorie invalide !');
    }
}

// Exemple d'utilisation (décommenter pour tester):
/*
addProject("passion", {
    title: "Nouveau Projet Incroyable",
    description: "Ceci est un nouveau projet que je viens de terminer !",
    technologies: ["React", "TypeScript", "GraphQL"],
    image: "chemin/vers/image.jpg",
    github: "https://github.com/votrenom/nouveau-projet",
    demo: "https://nouveau-projet-demo.com"
});
*/
