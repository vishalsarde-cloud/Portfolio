# ⚡ Quick Start Guide

## 🎉 Your Portfolio is LIVE!

**URL:** http://localhost:3000

---

## 🚀 First Time Setup (5 Minutes)

### Step 1: View Your Portfolio
Open your browser and go to: **http://localhost:3000**

### Step 2: Update These 3 Things First

#### 1. Social Media Links (`src/components/Hero.jsx`)
Find line ~8 and update:
```javascript
const socialLinks = [
  { icon: Github, href: 'https://github.com/YOUR_USERNAME', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/YOUR_USERNAME', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/YOUR_USERNAME', label: 'Instagram' },
  { icon: Mail, href: 'mailto:YOUR_EMAIL@example.com', label: 'Email' },
]
```

#### 2. Contact Information (`src/components/Contact.jsx`)
Find line ~22 and update:
```javascript
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 YOUR_NUMBER',
    href: 'tel:+91YOUR_NUMBER'
  },
]
```

#### 3. Project Links (`src/components/Projects.jsx`)
Find line ~12 and update GitHub/demo URLs:
```javascript
const projects = [
  {
    title: 'AI-Powered Resume Analyzer',
    // ... other fields
    github: 'https://github.com/YOUR_USERNAME/resume-analyzer',
    demo: 'https://your-demo-link.com',
  },
  // ... repeat for other projects
]
```

---

## 📝 Essential Updates (10 Minutes)

### 1. Add Your Photo
- Place your photo in: `public/images/profile.jpg`
- Edit `src/components/About.jsx` (around line 70)
- Replace the emoji div with:
```jsx
<img 
  src="/images/profile.jpg" 
  alt="Vishal Sarde"
  className="w-full h-full object-cover rounded-3xl"
/>
```

### 2. Add Your Resume
- Place PDF in: `public/resume/Vishal_Sarde_Resume.pdf`
- Edit `src/components/Resume.jsx` (around line 110)
- Update the download link:
```jsx
<a
  href="/resume/Vishal_Sarde_Resume.pdf"
  download="Vishal_Sarde_Resume.pdf"
  className="btn-primary flex items-center gap-2"
>
```

### 3. Update About Me Bio
Edit `src/components/About.jsx` (around line 90):
```jsx
<p className="text-gray-300 text-lg leading-relaxed">
  YOUR CUSTOM BIO HERE - Talk about your journey, interests, and what drives you.
</p>
```

---

## 🎨 Optional Customization (15 Minutes)

### Change Colors
Edit `tailwind.config.js` (line 10):
```javascript
colors: {
  primary: { 500: '#YOUR_COLOR' },
  accent: { 500: '#YOUR_COLOR' }
}
```

### Update Skills & Levels
Edit `src/components/Skills.jsx` (line 8):
```javascript
{ name: 'Python', level: 90 }, // Change level 0-100
```

### Modify Projects
Edit `src/components/Projects.jsx` (line 12):
- Update descriptions
- Change tags
- Add new projects

---

## 🛠️ Development Commands

```bash
# Start dev server (if not running)
npm run dev

# Stop server
Ctrl + C

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📱 Test Your Portfolio

### Desktop
1. Open http://localhost:3000
2. Click all navigation links
3. Test contact form
4. Check all animations

### Mobile
1. Open browser DevTools (F12)
2. Toggle device toolbar
3. Test on different screen sizes
4. Check mobile menu

---

## 🚀 Deploy in 5 Minutes

### Option 1: Vercel (Easiest)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repo
5. Click "Deploy"
6. Done! ✅

### Option 2: Netlify
1. Run: `npm run build`
2. Go to [netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist` folder
4. Done! ✅

---

## ✅ Pre-Deployment Checklist

Before deploying, make sure:

- [ ] Updated all social media links
- [ ] Changed email and phone number
- [ ] Updated project GitHub/demo links
- [ ] Added profile photo
- [ ] Added resume PDF
- [ ] Tested on mobile
- [ ] Checked all navigation links
- [ ] Tested contact form
- [ ] Verified all text content
- [ ] Checked for typos

---

## 🎯 File Quick Reference

| What to Change | File to Edit |
|----------------|--------------|
| Social links | `src/components/Hero.jsx` |
| Contact info | `src/components/Contact.jsx` |
| About me bio | `src/components/About.jsx` |
| Skills | `src/components/Skills.jsx` |
| Projects | `src/components/Projects.jsx` |
| Education | `src/components/Resume.jsx` |
| Colors | `tailwind.config.js` |

---

## 💡 Pro Tips

1. **Save Often:** Changes auto-reload in browser
2. **Check Console:** F12 → Console for errors
3. **Mobile First:** Always test mobile view
4. **Keep Backups:** Commit to Git regularly
5. **Ask for Feedback:** Show to friends/mentors

---

## 🆘 Common Issues

### Port Already in Use
```bash
npx kill-port 3000
npm run dev
```

### Changes Not Showing
- Hard refresh: `Ctrl + Shift + R`
- Clear cache
- Restart dev server

### Build Errors
```bash
npm install
npm run dev
```

---

## 📚 Need More Help?

Check these files:
1. `PROJECT_SUMMARY.md` - Complete overview
2. `SETUP_GUIDE.md` - Detailed instructions
3. `CUSTOMIZATION_TEMPLATE.md` - Content templates
4. `CERTIFICATES_INFO.md` - Certificate details

---

## 🎉 You're All Set!

Your portfolio is ready to impress! 

**Current Status:**
- ✅ Built and running
- ✅ All sections complete
- ✅ Fully responsive
- ✅ Smooth animations
- ⏳ Ready for your personal touch

**Next:** Update your info and deploy! 🚀

---

**Happy Building! 💻✨**
