# Deployment Guide

## Deploy to Vercel (Recommended)

### Method 1: Using Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy from the project directory:
```bash
vercel
```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? Press Enter (or provide a name)
   - Directory? Press Enter (use current directory)
   - Override settings? **N**

5. For production deployment:
```bash
vercel --prod
```

### Method 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

Your site will be live at: `https://your-project-name.vercel.app`

---

## Deploy to Netlify

### Method 1: Using Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy:
```bash
netlify deploy --prod
```

4. Follow the prompts:
   - Build command: `npm run build`
   - Publish directory: `dist`

### Method 2: Using Netlify Dashboard

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

---

## Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio-site",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/portfolio-site/',
  // ... rest of config
})
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` → `/root`

---

## Pre-Deployment Checklist

- [ ] Update profile image in `public/profile-image.jpg`
- [ ] Add resume PDF in `public/resume.pdf`
- [ ] Update all contact information (email, phone, LinkedIn, GitHub)
- [ ] Complete Projects section with actual project details
- [ ] Test all navigation links
- [ ] Test all external links (GitHub, LinkedIn, email)
- [ ] Test resume download button
- [ ] Test mobile responsiveness
- [ ] Run production build locally: `npm run build && npm run preview`
- [ ] Check browser console for errors
- [ ] Verify all sections display correctly

---

## Environment Variables (if needed)

If you need to add environment variables:

1. Create `.env` file (already in `.gitignore`):
```
VITE_API_KEY=your_api_key_here
```

2. Access in code:
```javascript
const apiKey = import.meta.env.VITE_API_KEY
```

3. For Vercel: Add in Dashboard → Settings → Environment Variables
4. For Netlify: Add in Dashboard → Site settings → Environment variables

---

## Custom Domain Setup

### Vercel
1. Go to your project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records as instructed

---

## Troubleshooting

**Build fails:**
- Check Node.js version (use Node 18+)
- Clear cache: `rm -rf node_modules package-lock.json && npm install`
- Check for syntax errors: `npm run build`

**Images not loading:**
- Ensure images are in `public/` folder
- Use absolute paths: `/profile-image.jpg`

**Routes not working:**
- For Vercel/Netlify: Automatic SPA routing
- For GitHub Pages: May need `HashRouter` instead of `BrowserRouter`

**CSS not applying:**
- Ensure Tailwind is configured correctly
- Check `tailwind.config.js` and `postcss.config.js`
- Clear browser cache

---

## Performance Optimization

1. **Image Optimization:**
   - Compress images before adding
   - Use WebP format when possible
   - Recommended size: Profile image < 500KB

2. **Code Splitting:**
   - Already handled by Vite automatically

3. **Analytics (Optional):**
   - Add Google Analytics
   - Add Vercel Analytics
   - Add Plausible Analytics

---

## Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch automatically deploys
- Pull requests create preview deployments
- Zero-downtime deployments

---

## Support

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Vite Docs:** https://vitejs.dev/guide/static-deploy.html
