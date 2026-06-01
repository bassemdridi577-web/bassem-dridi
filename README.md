# Developer Portfolio

A modern, responsive, and visually stunning portfolio website for developers. Built with vanilla HTML, CSS, and JavaScript for maximum performance and easy customization.

## ✨ Features

- **Modern Design**: Sleek, professional design with gradient effects, glassmorphism, and smooth animations
- **Fully Responsive**: Works perfectly on all devices - desktop, tablet, and mobile
- **Easy Customization**: All content is centralized in `data.js` for easy updates
- **Smooth Animations**: Eye-catching scroll animations and transitions
- **Project Showcase**: Dynamic project grid with detailed information
- **Skills Section**: Highlight your technical expertise
- **Contact Section**: Multiple ways for people to reach you
- **Performance Optimized**: Fast loading with clean, efficient code

## 🚀 Quick Start

1. **Open the portfolio**: Simply open `index.html` in your web browser
2. **Customize your data**: Edit `data.js` to add your personal information
3. **Add your photo**: Replace the placeholder image with your actual photo
4. **Deploy**: Upload all files to your web hosting service

## 📝 Customization Guide

### Personal Information

Edit the `personal` object in `data.js`:

```javascript
personal: {
    name: "Your Name",
    titles: ["Full Stack Developer", "Software Engineer"],
    description: "Your tagline here",
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    profileImage: "path/to/your/photo.jpg"
}
```

### About Section

Update the `about` object:

```javascript
about: {
    paragraphs: [
        "Your first paragraph about yourself",
        "Your second paragraph",
        "Your third paragraph"
    ],
    technologies: [
        "JavaScript (ES6+)",
        "React",
        "Node.js",
        // Add more technologies
    ]
}
```

### Skills

Modify the `skills` array:

```javascript
skills: [
    {
        name: "Frontend Development",
        icon: "💻", // Use any emoji
        description: "Your skill description"
    },
    // Add more skills
]
```

### Projects

#### Adding Projects

You can add projects in two ways:

**Method 1: Edit data.js directly**

```javascript
projects: [
    {
        title: "Project Name",
        description: "Detailed project description",
        technologies: ["React", "Node.js", "MongoDB"],
        image: "path/to/project-image.jpg",
        github: "https://github.com/yourusername/project",
        demo: "https://project-demo.com"
    },
    // Add more projects
]
```

**Method 2: Use JavaScript functions (in browser console)**

```javascript
// Add a new project
addProject({
    title: "New Project",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    image: "image.jpg",
    github: "https://github.com/...",
    demo: "https://..."
});

// Update a project
updateProject("Project Name", {
    description: "Updated description",
    technologies: ["New", "Tech", "Stack"]
});

// Remove a project
removeProject("Project Name");
```

### Contact Information

Update the `contact` object:

```javascript
contact: {
    text: "Your contact message here"
}
```

## 🎨 Customizing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --color-primary: #64ffda;        /* Main accent color */
    --color-secondary: #a78bfa;      /* Secondary accent */
    --color-bg-dark: #0a0e27;        /* Background color */
    /* Modify other colors as needed */
}
```

## 📁 File Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling
├── data.js            # Your portfolio data (EDIT THIS!)
├── script.js          # JavaScript functionality
└── README.md          # This file
```

## 🖼️ Adding Your Photo

Replace the placeholder image in `data.js`:

```javascript
profileImage: "path/to/your/photo.jpg"
```

Or update it directly in the HTML:

```html
<img src="your-photo.jpg" alt="Profile" id="profileImage">
```

## 🌐 Deployment

You can deploy this portfolio to:

- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Drag and drop deployment
- **Vercel**: Fast and easy deployment
- **Any web hosting service**: Upload all files via FTP

## 💡 Tips

1. **Images**: Use high-quality images for projects (recommended: 800x500px)
2. **Icons**: The portfolio uses emojis for skill icons, but you can replace them with icon libraries like Font Awesome
3. **Performance**: Optimize images before uploading (use tools like TinyPNG)
4. **SEO**: Update the meta tags in `index.html` for better search engine visibility

## 🛠️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 641px - 968px
- Desktop: > 968px

## 🎯 Next Steps

1. Replace all placeholder content with your actual information
2. Add your real projects with screenshots
3. Upload your profile photo
4. Test on different devices
5. Deploy to your preferred hosting platform

## 📄 License

Feel free to use this template for your personal portfolio!

---

**Built with ❤️ for developers**
