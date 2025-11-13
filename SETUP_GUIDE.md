# 🚀 Portfolio Setup Guide

## Welcome to Your New Portfolio!

This is a modern, professional portfolio website built specifically for **Vishal Sarde**. The portfolio features smooth animations, gradient backgrounds, and a beautiful dark theme with purple/blue accents.

---

## 📋 What's Included

### Sections
1. **Hero Section** - Eye-catching introduction with your name, tagline, and social links
2. **About Me** - Personal bio with interests and skills overview
3. **Skills** - Animated progress bars showing proficiency in various technologies
4. **Projects** - Showcase of your work including AI Resume Analyzer, Voice Reminder App, and more
5. **Hackathons** - Highlights from BUILD-A-THON 2025, Adobe Hackathon, Code4EdTech, and PVGHackHub
6. **Resume/Experience** - Education, internships, and achievements
7. **Contact** - Contact form and social media links
8. **Footer** - Copyright and quick navigation

### Features
- ✨ Smooth scroll animations using Framer Motion
- 🎨 Gradient backgrounds and glowing effects
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🌙 Dark mode with purple/blue accent colors
- ⚡ Fast performance with Vite
- 🎯 Modern UI with TailwindCSS
- 🔄 Interactive hover effects and transitions

---

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Lightning-fast build tool
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icon set

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The site will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

---

## 🎨 Customization Guide

### 1. Personal Information

#### Update Hero Section (`src/components/Hero.jsx`)
- Change social media links (GitHub, LinkedIn, Instagram, Email)
- Update location
- Modify tagline

#### Update About Section (`src/components/About.jsx`)
- Replace the emoji placeholder with your photo
- Edit bio text
- Update interests

#### Update Contact Info (`src/components/Contact.jsx`)
- Change email address
- Update phone number
- Modify social media links

### 2. Projects & Hackathons

#### Add/Edit Projects (`src/components/Projects.jsx`)
- Update project descriptions
- Add GitHub and demo links
- Change project icons and colors

#### Update Hackathon Details
- Already includes your 4 hackathon participations
- Add more achievements as needed

### 3. Skills

#### Modify Skill Levels (`src/components/Skills.jsx`)
- Adjust proficiency percentages
- Add new skills
- Change skill categories

### 4. Resume/Experience

#### Update Education (`src/components/Resume.jsx`)
- Modify degree details
- Update institution names
- Change dates and descriptions

#### Update Work Experience
- Add internship details
- Modify job descriptions
- Update company names

### 5. Colors & Theme

#### Change Color Scheme (`tailwind.config.js`)
```javascript
colors: {
  primary: { /* Blue shades */ },
  accent: { /* Purple shades */ }
}
```

#### Modify Animations (`src/index.css`)
- Adjust animation durations
- Change gradient colors
- Customize hover effects

---

## 📸 Adding Your Photo

Replace the emoji placeholder in the About section:

1. Add your photo to `public/images/profile.jpg`
2. Update `src/components/About.jsx`:

```jsx
<img 
  src="/images/profile.jpg" 
  alt="Vishal Sarde"
  className="w-full h-full object-cover rounded-3xl"
/>
```

---

## 🎯 Adding Certificates

To display your hackathon certificates:

1. Add certificate images to `public/certificates/`
2. Create a certificate gallery in Projects section
3. Use a lightbox component for viewing

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (automatic)

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

---

## 📝 Important Links to Update

Before deploying, update these placeholder links:

- [ ] GitHub profile URL
- [ ] LinkedIn profile URL
- [ ] Instagram profile URL
- [ ] Email address
- [ ] Phone number
- [ ] Project GitHub repositories
- [ ] Project demo links
- [ ] Resume download link

---

## 🎨 Design Philosophy

This portfolio follows these principles:

1. **Minimal & Clean** - Focus on content, not clutter
2. **Professional** - Suitable for job applications and networking
3. **Modern** - Uses latest web technologies and design trends
4. **Performant** - Fast loading and smooth animations
5. **Accessible** - Works on all devices and screen sizes

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process on port 3000
npx kill-port 3000
# Or change port in vite.config.js
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Animation Issues
- Check browser compatibility
- Update Framer Motion: `npm update framer-motion`

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [TailwindCSS Docs](https://tailwindcss.com)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev)

---

## 🤝 Support

If you need help customizing your portfolio:

1. Check the component files - they're well-commented
2. Refer to this guide
3. Check the README.md
4. Search for solutions online

---

## ✨ Final Checklist

Before going live:

- [ ] Update all personal information
- [ ] Add your photo
- [ ] Update social media links
- [ ] Add real project links
- [ ] Test on mobile devices
- [ ] Check all animations work
- [ ] Verify contact form
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain (optional)
- [ ] Test loading speed
- [ ] Check SEO meta tags

---

## 🎉 You're All Set!

Your portfolio is ready to impress! Remember:

> "Live to improve, not to impress ⚜"

Good luck with your career journey! 🚀

---

**Built with ❤️ for Vishal Sarde**
