# Customization Guide

## Quick Start Customization

### 1. Personal Information

#### Hero Section (`src/components/Hero.jsx`)
```javascript
// Update rotating job titles
const roles = ['Your Title 1', 'Your Title 2', 'Your Title 3'];

// Update intro text
const introText = "Your personal introduction here...";

// Update status badge
<div className="...">Open to Your Status</div>

// Update social links
<a href="https://github.com/yourusername">
<a href="https://linkedin.com/in/yourprofile">
<a href="mailto:your.email@example.com">
```

#### Contact Section (`src/components/Contact.jsx`)
```javascript
// Update email, phone, location
const contactInfo = {
  email: 'your.email@example.com',
  phone: '+91-XXXXXXXXXX',
  location: 'Your City, Your Country'
};
```

---

### 2. Profile Image

Replace the image file:
```
public/profile-image.jpg
```

Recommended specifications:
- Format: JPG or PNG
- Size: 400x400px to 800x800px
- File size: < 500KB
- Aspect ratio: 1:1 (square)

---

### 3. Resume PDF

Add your resume:
```
public/resume.pdf
```

Update the download link in Hero or Contact section:
```javascript
<a href="/resume.pdf" download>Download Resume</a>
```

---

## Section Customization

### Experience Section (`src/components/Experience.jsx`)

```javascript
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'Start Date - End Date',
    description: 'Brief description of your role...',
    achievements: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3',
    ],
    technologies: ['Tech1', 'Tech2', 'Tech3'],
  },
  // Add more experiences
];
```

---

### Projects Section (`src/components/Projects.jsx`)

```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'Project description...',
    image: '/project-image.jpg', // Add image to public folder
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/username/repo',
    liveUrl: 'https://project-demo.com',
    highlights: [
      'Key feature 1',
      'Key feature 2',
      'Key feature 3',
    ],
  },
  // Add more projects
];
```

**Adding Project Images:**
1. Add images to `public/projects/` folder
2. Reference as `/projects/project-name.jpg`

---

### Skills Section (`src/components/Skills.jsx`)

```javascript
const skillCategories = [
  {
    title: 'Category Name',
    skills: [
      { name: 'Skill Name', icon: IconComponent, level: 90 },
      // Add more skills
    ],
  },
];
```

**Available Icon Libraries:**
- `react-icons/si` - Simple Icons (brand logos)
- `react-icons/fa` - Font Awesome
- `react-icons/fi` - Feather Icons

**Adding New Skills:**
1. Import the icon: `import { SiReact } from 'react-icons/si'`
2. Add to skills array: `{ name: 'React', icon: SiReact, level: 85 }`

---

### Education Section (`src/components/Education.jsx`)

```javascript
const education = [
  {
    degree: 'Your Degree',
    institution: 'University Name',
    period: 'Start Year - End Year',
    grade: 'Your GPA/Percentage',
    highlights: [
      'Achievement 1',
      'Achievement 2',
    ],
  },
];
```

---

### Certifications Section (`src/components/Certifications.jsx`)

```javascript
const certifications = [
  {
    title: 'Certification Name',
    issuer: 'Issuing Organization',
    date: 'Issue Date',
    credentialUrl: 'https://credential-url.com',
    description: 'Brief description...',
  },
];
```

---

### Achievements Section (`src/components/Achievements.jsx`)

```javascript
const achievements = [
  {
    title: 'Achievement Title',
    description: 'Achievement description...',
    date: 'Date or Period',
    icon: IconComponent,
    gradient: 'from-blue-500 to-cyan-500', // Customize gradient
  },
];
```

---

## Design Customization

### Colors (`tailwind.config.js`)

```javascript
theme: {
  extend: {
    colors: {
      primary: '#0ea5e9',    // Change primary color
      secondary: '#8b5cf6',  // Change secondary color
      dark: '#0f172a',       // Change dark background
    },
  },
}
```

**Color Suggestions:**
- Blue theme: `#0ea5e9`, `#3b82f6`
- Purple theme: `#8b5cf6`, `#a855f7`
- Green theme: `#10b981`, `#14b8a6`
- Red theme: `#ef4444`, `#f59e0b`

---

### Fonts

**Using Google Fonts:**

1. Add to `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
```

2. Update `tailwind.config.js`:
```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
}
```

**Popular Font Combinations:**
- Professional: Inter + Roboto Mono
- Modern: Poppins + Space Grotesk
- Classic: Playfair Display + Source Sans Pro

---

### Animations

**Custom Animations (`tailwind.config.js`):**

```javascript
theme: {
  extend: {
    animation: {
      'custom-bounce': 'bounce 2s infinite',
      'custom-pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    keyframes: {
      bounce: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      },
    },
  },
}
```

**Framer Motion Variants:**

```javascript
const customVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  },
};
```

---

## Background Effects

### Particle Background (`src/components/ParticleBackground.jsx`)

```javascript
// Adjust particle count
const particleCount = 100; // Change number of particles

// Adjust particle speed
particle.x += particle.vx * 0.5; // Slower: 0.3, Faster: 1.0

// Adjust connection distance
if (distance < 150) { // Closer: 100, Further: 200
```

### Grid Background (`src/components/GridBackground.jsx`)

```javascript
// Change number of orbs
{/* Add more motion.div elements for more orbs */}

// Change orb colors
className="absolute w-96 h-96 bg-primary/30" // Change color

// Adjust animation speed
animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
transition={{ duration: 20 }} // Slower: 30, Faster: 10
```

---

## Navigation

### Navbar Items (`src/components/Navbar.jsx`)

```javascript
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  // Add or remove items
  { name: 'New Section', href: '#new-section' },
];
```

**Adding New Section:**
1. Create component in `src/components/NewSection.jsx`
2. Import in `src/App.jsx`
3. Add to navbar items
4. Add corresponding `id="new-section"` to component

---

## Responsive Design

### Breakpoints

Tailwind breakpoints used:
- `sm`: 640px (mobile landscape)
- `md`: 768px (tablet)
- `lg`: 1024px (laptop)
- `xl`: 1280px (desktop)

**Example:**
```javascript
<div className="text-sm md:text-base lg:text-lg xl:text-xl">
```

---

## Adding New Sections

1. **Create Component:**
```javascript
// src/components/NewSection.jsx
import { motion } from 'framer-motion';

const NewSection = () => {
  return (
    <section id="new-section" className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gradient mb-12">
          New Section
        </h2>
        {/* Your content */}
      </div>
    </section>
  );
};

export default NewSection;
```

2. **Add to App.jsx:**
```javascript
import NewSection from './components/NewSection';

// In return statement
<NewSection />
```

3. **Add to Navbar:**
```javascript
{ name: 'New Section', href: '#new-section' }
```

---

## Performance Tips

1. **Optimize Images:**
   - Use WebP format
   - Compress images (TinyPNG, ImageOptim)
   - Use appropriate dimensions

2. **Lazy Loading:**
```javascript
import { lazy, Suspense } from 'react';
const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<div>Loading...</div>}>
  <HeavyComponent />
</Suspense>
```

3. **Reduce Bundle Size:**
   - Import only needed icons: `import { FiGithub } from 'react-icons/fi'`
   - Avoid importing entire libraries

---

## Common Customizations

### Change Gradient Text
```javascript
className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
```

### Change Glass Effect
```javascript
className="bg-white/10 backdrop-blur-lg border border-white/20"
```

### Change Hover Effects
```javascript
className="hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
```

### Change Button Styles
```javascript
className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity"
```

---

## Need Help?

- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion
- React Icons: https://react-icons.github.io/react-icons
