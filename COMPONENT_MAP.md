# 🗺️ Component Map & Code Navigation

Quick reference to find and edit specific parts of your portfolio.

---

## 📍 Visual Layout Map

```
┌─────────────────────────────────────────┐
│           NAVBAR (Sticky)               │  → Navbar.jsx
├─────────────────────────────────────────┤
│                                         │
│            HERO SECTION                 │  → Hero.jsx
│     Name, Tagline, Social Links         │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│           ABOUT ME SECTION              │  → About.jsx
│      Photo, Bio, Interests              │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│           SKILLS SECTION                │  → Skills.jsx
│      Progress Bars, Tech Stack          │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│          PROJECTS SECTION               │  → Projects.jsx
│    Featured Projects + Hackathons       │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│      RESUME/EXPERIENCE SECTION          │  → Resume.jsx
│    Education, Work, Achievements        │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│          CONTACT SECTION                │  → Contact.jsx
│      Form, Contact Info, Socials        │
│                                         │
├─────────────────────────────────────────┤
│              FOOTER                     │  → Footer.jsx
└─────────────────────────────────────────┘
```

---

## 🎯 What to Edit Where

### 🏠 Hero Section (`src/components/Hero.jsx`)

**Lines 8-13:** Social Media Links
```javascript
const socialLinks = [
  { icon: Github, href: 'YOUR_GITHUB_URL', label: 'GitHub' },
  { icon: Linkedin, href: 'YOUR_LINKEDIN_URL', label: 'LinkedIn' },
  // ...
]
```

**Line 46:** Your Name
```javascript
<span className="gradient-text">Vishal Sarde</span>
```

**Line 52:** Title/Role
```javascript
Tech Enthusiast & Developer
```

**Line 60:** Motto
```javascript
Live to improve, not to impress ⚜
```

**Line 68:** Location
```javascript
📍 Maharashtra, India
```

---

### 👤 About Section (`src/components/About.jsx`)

**Lines 12-35:** Interest Cards
```javascript
const interests = [
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Building robust and scalable applications'
  },
  // ... add or modify interests
]
```

**Lines 70-85:** Profile Image Area
```javascript
// Replace emoji with your photo
<img src="/images/profile.jpg" alt="Vishal Sarde" />
```

**Lines 90-100:** Bio Paragraphs
```javascript
<p className="text-gray-300 text-lg leading-relaxed">
  YOUR BIO TEXT HERE
</p>
```

---

### 💻 Skills Section (`src/components/Skills.jsx`)

**Lines 8-50:** Skill Categories & Levels
```javascript
const skillCategories = [
  {
    category: 'Languages',
    skills: [
      { name: 'Python', level: 90, icon: '🐍' },
      // ... modify levels or add skills
    ]
  },
  // ... other categories
]
```

**Lines 150-155:** Additional Skills Tags
```javascript
{['Docker', 'MongoDB', 'PostgreSQL', ...].map((tech) => (
  // Add or remove technologies
))}
```

---

### 🚀 Projects Section (`src/components/Projects.jsx`)

**Lines 8-40:** Featured Projects
```javascript
const projects = [
  {
    title: 'AI-Powered Resume Analyzer',
    description: 'YOUR DESCRIPTION',
    tags: ['Python', 'FastAPI', 'NLP', 'ML'],
    github: 'YOUR_GITHUB_URL',
    demo: 'YOUR_DEMO_URL',
    color: 'from-blue-500 to-cyan-500'
  },
  // ... add more projects
]
```

**Lines 42-80:** Hackathon Achievements
```javascript
const hackathons = [
  {
    name: 'BUILD-A-THON 2025',
    organizer: 'LFDT India Student Society',
    achievement: 'Active Participation',
    theme: 'Where Agents Shape Tomorrow',
    date: '2025',
    icon: '🏗️'
  },
  // ... already includes your 4 hackathons
]
```

---

### 📄 Resume Section (`src/components/Resume.jsx`)

**Lines 8-30:** Education
```javascript
const education = [
  {
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'Jaywantrao Sawant College of Engineering',
    location: 'Hadapsar, Pune, Maharashtra',
    period: '2022 - 2026',
    description: 'YOUR DESCRIPTION',
    icon: '🎓'
  },
  // ... add more education
]
```

**Lines 32-70:** Work Experience
```javascript
const experience = [
  {
    role: 'Cybersecurity Intern',
    company: 'Tech Security Solutions',
    period: 'Summer 2024',
    location: 'Remote',
    description: [
      'Point 1',
      'Point 2',
      // ... add more points
    ],
    icon: '🔒'
  },
  // ... add more experience
]
```

**Lines 72-100:** Achievements
```javascript
const achievements = [
  {
    title: 'BUILD-A-THON 2025 Participant',
    description: 'Active participation in blockchain-based hackathon',
    year: '2025',
    icon: '🏆'
  },
  // ... modify or add achievements
]
```

**Line 110:** Resume Download Link
```javascript
<a href="/resume/YOUR_RESUME.pdf" download>
```

---

### 📧 Contact Section (`src/components/Contact.jsx`)

**Lines 22-40:** Contact Information
```javascript
const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'YOUR_EMAIL@example.com',
    href: 'mailto:YOUR_EMAIL@example.com'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 YOUR_NUMBER',
    href: 'tel:+91YOUR_NUMBER'
  },
  // ...
]
```

**Lines 42-65:** Social Links
```javascript
const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    href: 'https://github.com/YOUR_USERNAME',
    color: 'hover:text-gray-400'
  },
  // ... update all social links
]
```

**Lines 70-140:** Contact Form
```javascript
// Form is functional, just needs backend integration
// See SETUP_GUIDE.md for EmailJS/Formspree setup
```

---

### 🎨 Styling & Theme

**`tailwind.config.js`**

**Lines 10-30:** Color Palette
```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Main blue
    400: '#38bdf8',  // Light blue
    // ... other shades
  },
  accent: {
    500: '#a855f7',  // Main purple
    400: '#c084fc',  // Light purple
    // ... other shades
  }
}
```

**Lines 35-50:** Custom Animations
```javascript
animation: {
  'gradient': 'gradient 8s linear infinite',
  'float': 'float 6s ease-in-out infinite',
  'glow': 'glow 2s ease-in-out infinite alternate',
}
```

**`src/index.css`**

**Lines 15-25:** Custom CSS Classes
```css
.gradient-text { /* Gradient text effect */ }
.glass-effect { /* Glassmorphism */ }
.btn-primary { /* Primary button style */ }
.card { /* Card component style */ }
```

---

## 🔍 Quick Search Guide

### To Change...

| Element | Search For | File |
|---------|-----------|------|
| Your name | `Vishal Sarde` | Hero.jsx, About.jsx, Footer.jsx |
| Email | `vishal.sarde@example.com` | Hero.jsx, Contact.jsx |
| Phone | `+91 XXXXX` | Contact.jsx |
| GitHub link | `github.com/vishalsarde` | Hero.jsx, Contact.jsx |
| LinkedIn | `linkedin.com/in/vishalsarde` | Hero.jsx, Contact.jsx |
| Motto | `Live to improve` | Hero.jsx, Footer.jsx |
| Location | `Maharashtra, India` | Hero.jsx, Contact.jsx |
| Skills | `const skillCategories` | Skills.jsx |
| Projects | `const projects` | Projects.jsx |
| Education | `const education` | Resume.jsx |
| Experience | `const experience` | Resume.jsx |
| Colors | `primary:` or `accent:` | tailwind.config.js |

---

## 📦 Component Dependencies

### Navbar.jsx
- **Imports:** `framer-motion`, `lucide-react`
- **Uses:** Scroll detection, mobile menu state
- **Connects to:** All sections via anchor links

### Hero.jsx
- **Imports:** `framer-motion`, `lucide-react`
- **Features:** Animated background, social links
- **Animations:** Fade in, scale, floating

### About.jsx
- **Imports:** `framer-motion`, `lucide-react`
- **Features:** Interest cards, profile image area
- **Animations:** Scroll-triggered fade in

### Skills.jsx
- **Imports:** `framer-motion`
- **Features:** Progress bars, skill categories
- **Animations:** Bar fill animation, stagger children

### Projects.jsx
- **Imports:** `framer-motion`, `lucide-react`
- **Features:** Project cards, hackathon list
- **Animations:** Card hover, scale effects

### Resume.jsx
- **Imports:** `framer-motion`, `lucide-react`
- **Features:** Timeline layout, download button
- **Animations:** Slide in from sides

### Contact.jsx
- **Imports:** `framer-motion`, `lucide-react`
- **Features:** Form handling, validation
- **State:** Form data, submission status

### Footer.jsx
- **Imports:** `framer-motion`, `lucide-react`
- **Features:** Scroll to top, quick links
- **Animations:** Fade in on view

---

## 🎨 Animation Patterns

### Fade In on Scroll
```javascript
initial={{ opacity: 0, y: 50 }}
animate={isInView ? { opacity: 1, y: 0 } : {}}
transition={{ duration: 0.6 }}
```

### Hover Scale
```javascript
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Stagger Children
```javascript
variants={containerVariants}
initial="hidden"
animate="visible"
```

### Progress Bar Fill
```javascript
initial={{ width: 0 }}
animate={{ width: `${level}%` }}
transition={{ duration: 1, ease: "easeOut" }}
```

---

## 🛠️ Common Modifications

### Add a New Section
1. Create `src/components/NewSection.jsx`
2. Import in `src/App.jsx`
3. Add to component tree
4. Update navbar links

### Change Animation Speed
```javascript
transition={{ duration: 0.6 }} // Change 0.6 to desired seconds
```

### Modify Hover Effects
```javascript
whileHover={{ scale: 1.1 }} // Change 1.1 to desired scale
```

### Update Colors Globally
Edit `tailwind.config.js` → colors section

### Add New Icon
1. Import from `lucide-react`
2. Use as component: `<IconName size={24} />`

---

## 📝 Code Style Guide

### Naming Conventions
- **Components:** PascalCase (`Hero.jsx`)
- **Variables:** camelCase (`socialLinks`)
- **Constants:** camelCase (`contactInfo`)
- **CSS Classes:** kebab-case (`glass-effect`)

### File Structure
```javascript
// 1. Imports
import React from 'react'
import { motion } from 'framer-motion'

// 2. Component
const ComponentName = () => {
  // 3. State & Refs
  const ref = useRef(null)
  
  // 4. Data
  const data = [...]
  
  // 5. JSX
  return (...)
}

// 6. Export
export default ComponentName
```

---

## 🎯 Performance Tips

1. **Images:** Use WebP format, compress before adding
2. **Animations:** Use `transform` and `opacity` for smooth 60fps
3. **Lazy Load:** Add lazy loading for images below fold
4. **Code Split:** Already optimized with Vite
5. **Build:** Run `npm run build` for production optimization

---

## ✅ Quick Checklist

Before editing:
- [ ] Know which section to modify
- [ ] Found the correct file
- [ ] Located the specific lines
- [ ] Made a backup (Git commit)
- [ ] Dev server is running

After editing:
- [ ] Saved the file
- [ ] Checked browser for changes
- [ ] Tested on mobile view
- [ ] No console errors
- [ ] Animations work smoothly

---

**Happy Coding! 🚀**
