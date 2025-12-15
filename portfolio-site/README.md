# Ayush Rauniyar - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ✨ Modern and clean design inspired by authify.tech
- 🎨 Smooth animations and transitions using Framer Motion
- 📱 Fully responsive across all devices
- 🌙 Dark theme with gradient accents
- ⚡ Fast performance with Vite
- 🎯 SEO optimized

## 🛠️ Tech Stack

- **Frontend:** React 19
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons (Simple Icons)
- **Build Tool:** Vite
- **Deployment:** Vercel (recommended)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🚀 Deployment

### Deploy to Vercel (Recommended - Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy" (Vercel auto-detects Vite config)

### Other Free Hosting Options:

**Netlify:**
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `dist` folder after running `npm run build`

**GitHub Pages:**
- Use GitHub Pages action or push dist folder to gh-pages branch

## 📝 Customization

### Update Personal Information in:
- `src/components/Hero.jsx` - Name, title, social links
- `src/components/About.jsx` - Bio and stats
- `src/components/Experience.jsx` - Work history
- `src/components/Projects.jsx` - Your projects
- `src/components/Skills.jsx` - Your skills
- `src/components/Contact.jsx` - Contact info

### Add Your Resume:
Place your resume PDF in the `public` folder as `resume.pdf`

## 📁 Project Structure

```
portfolio-site/
├── src/
│   ├── components/     # All React components
│   ├── App.jsx         # Main app
│   └── index.css       # Global styles
├── public/
│   └── resume.pdf      # Your resume
└── package.json
```

---

Built with ❤️ by Ayush Rauniyar
