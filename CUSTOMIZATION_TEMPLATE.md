# 📝 Quick Customization Template

Use this template to quickly update your portfolio information. Copy the values and paste them into the respective component files.

---

## 👤 Personal Information

```javascript
// Personal Details
const personalInfo = {
  name: "Vishal Sarde",
  tagline: "Tech Enthusiast & Developer",
  motto: "Live to improve, not to impress ⚜",
  location: "Maharashtra, India",
  email: "vishal.sarde@example.com",
  phone: "+91 XXXXX XXXXX",
  
  // Social Media (Update with your actual URLs)
  github: "https://github.com/vishalsarde",
  linkedin: "https://linkedin.com/in/vishalsarde",
  instagram: "https://instagram.com/vishalsarde",
  twitter: "https://twitter.com/vishalsarde",
}
```

---

## 📖 About Me Bio

```javascript
const aboutMe = {
  greeting: "Hi, I'm Vishal! 👋",
  
  paragraph1: `I'm a passionate tech enthusiast and developer from Maharashtra, India, with a deep 
  interest in creating innovative solutions that make a difference. My journey in 
  technology is driven by curiosity and a constant desire to learn and improve.`,
  
  paragraph2: `I specialize in software development, artificial intelligence, and mobile app 
  development. I love participating in hackathons and building projects that solve 
  real-world problems.`,
}
```

---

## 🎓 Education

```javascript
const education = [
  {
    degree: "Bachelor of Engineering in Computer Science",
    institution: "Jaywantrao Sawant College of Engineering",
    location: "Hadapsar, Pune, Maharashtra",
    period: "2022 - 2026",
    description: "Pursuing B.E. in Computer Engineering with focus on AI, Software Development, and Mobile Applications",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Pimpri Chinchwad College of Engineering",
    location: "Nigdi, Pimpri-Chinchwad, Pune",
    period: "2020 - 2022",
    description: "Completed HSC with strong foundation in Mathematics and Science",
  }
]
```

---

## 💼 Work Experience

```javascript
const experience = [
  {
    role: "Cybersecurity Intern",
    company: "Tech Security Solutions",
    period: "Summer 2024",
    location: "Remote",
    description: [
      "Developed security monitoring dashboard for threat detection",
      "Conducted vulnerability assessments and penetration testing",
      "Implemented security protocols and best practices",
      "Collaborated with team on security incident response"
    ],
  },
  {
    role: "Software Development Intern",
    company: "Innovation Labs",
    period: "Winter 2023",
    location: "Pune, Maharashtra",
    description: [
      "Built web applications using React and FastAPI",
      "Worked on AI-powered resume analysis system",
      "Participated in agile development processes",
      "Contributed to code reviews and documentation"
    ],
  }
]
```

---

## 🚀 Projects

```javascript
const projects = [
  {
    title: "AI-Powered Resume Analyzer",
    description: "An intelligent system that analyzes resumes using NLP and machine learning to provide insights and recommendations for job seekers.",
    tags: ["Python", "FastAPI", "NLP", "Machine Learning"],
    github: "https://github.com/yourusername/resume-analyzer",
    demo: "https://resume-analyzer-demo.com",
  },
  {
    title: "Voice Reminder App",
    description: "A smart Android application that allows users to set voice-based reminders with natural language processing capabilities.",
    tags: ["Android", "Java", "Voice Recognition", "Firebase"],
    github: "https://github.com/yourusername/voice-reminder",
    demo: "https://play.google.com/store/apps/...",
  },
  {
    title: "Cyber Security Dashboard",
    description: "A comprehensive security monitoring dashboard developed during cybersecurity internship, featuring threat detection and analysis.",
    tags: ["Python", "React", "Security", "APIs"],
    github: "https://github.com/yourusername/security-dashboard",
    demo: "https://security-dashboard-demo.com",
  }
]
```

---

## 🏆 Hackathons & Achievements

```javascript
const hackathons = [
  {
    name: "BUILD-A-THON 2025",
    organizer: "LFDT India Student Society PCCOE Chapter",
    achievement: "Active Participation",
    theme: "Where Agents Shape Tomorrow",
    date: "2025",
  },
  {
    name: "Adobe India Hackathon",
    organizer: "Adobe & Unstop",
    achievement: "Team DocuMinds - Round 1",
    theme: "MCQ Assessment + Coding",
    date: "2025",
  },
  {
    name: "Code4EdTech Hack-A-Thon",
    organizer: "Innomatics Research Labs",
    achievement: "24 Hours Challenge",
    theme: "Educational Technology",
    date: "Sept 2025",
  },
  {
    name: "PVGHackHub 2025",
    organizer: "Pune Vidyarthi Griha's College",
    achievement: "National Level Participation",
    theme: "24-Hour Hackathon",
    date: "2025",
  }
]
```

---

## 💻 Skills

```javascript
const skills = {
  Languages: [
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "C/C++", level: 75 },
  ],
  
  Frontend: [
    { name: "React", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "TailwindCSS", level: 85 },
    { name: "JavaScript", level: 80 },
  ],
  
  Backend: [
    { name: "FastAPI", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Django", level: 70 },
    { name: "REST APIs", level: 85 },
  ],
  
  "Mobile & Others": [
    { name: "Android Dev", level: 80 },
    { name: "Git/GitHub", level: 85 },
    { name: "AI/ML", level: 75 },
    { name: "Cybersecurity", level: 70 },
  ]
}

const additionalSkills = [
  "Docker", "MongoDB", "PostgreSQL", "Firebase", 
  "AWS", "Linux", "Figma", "VS Code"
]
```

---

## 🎨 Color Customization

Want to change the color scheme? Update these in `tailwind.config.js`:

```javascript
// Current: Blue & Purple
// Try these combinations:

// Option 1: Green & Teal
primary: { 500: '#10b981', 400: '#34d399' }
accent: { 500: '#14b8a6', 400: '#2dd4bf' }

// Option 2: Orange & Red
primary: { 500: '#f97316', 400: '#fb923c' }
accent: { 500: '#ef4444', 400: '#f87171' }

// Option 3: Pink & Purple
primary: { 500: '#ec4899', 400: '#f472b6' }
accent: { 500: '#a855f7', 400: '#c084fc' }

// Option 4: Cyan & Blue
primary: { 500: '#06b6d4', 400: '#22d3ee' }
accent: { 500: '#3b82f6', 400: '#60a5fa' }
```

---

## 📧 Contact Form Setup

To make the contact form functional, you can use:

### Option 1: EmailJS (Free)
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Install: `npm install @emailjs/browser`
3. Update Contact.jsx with your EmailJS credentials

### Option 2: Formspree (Free)
1. Sign up at [formspree.io](https://formspree.io/)
2. Update form action in Contact.jsx

### Option 3: Netlify Forms (Free with Netlify)
1. Add `netlify` attribute to form
2. Deploy to Netlify

---

## 🖼️ Adding Your Photo

1. **Prepare your photo:**
   - Square format (1:1 ratio)
   - At least 500x500px
   - Good lighting
   - Professional look

2. **Add to project:**
   ```
   public/
   └── images/
       └── profile.jpg
   ```

3. **Update About.jsx:**
   ```jsx
   <img 
     src="/images/profile.jpg" 
     alt="Vishal Sarde"
     className="w-full h-full object-cover rounded-3xl"
   />
   ```

---

## 📜 Resume Download

1. **Add your resume PDF:**
   ```
   public/
   └── resume/
       └── Vishal_Sarde_Resume.pdf
   ```

2. **Update Resume.jsx:**
   ```jsx
   <a
     href="/resume/Vishal_Sarde_Resume.pdf"
     download="Vishal_Sarde_Resume.pdf"
     className="btn-primary flex items-center gap-2"
   >
     <Download size={20} />
     Download Resume
   </a>
   ```

---

## 🔍 SEO Optimization

Update `index.html`:

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- Primary Meta Tags -->
  <title>Vishal Sarde | Full Stack Developer & Tech Enthusiast</title>
  <meta name="title" content="Vishal Sarde | Full Stack Developer & Tech Enthusiast" />
  <meta name="description" content="Portfolio of Vishal Sarde - A passionate developer from Maharashtra, India specializing in AI, Web Development, and Mobile Apps." />
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://yourwebsite.com/" />
  <meta property="og:title" content="Vishal Sarde | Full Stack Developer" />
  <meta property="og:description" content="Portfolio of Vishal Sarde - Tech Enthusiast & Developer" />
  <meta property="og:image" content="https://yourwebsite.com/preview.jpg" />
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://yourwebsite.com/" />
  <meta property="twitter:title" content="Vishal Sarde | Full Stack Developer" />
  <meta property="twitter:description" content="Portfolio of Vishal Sarde - Tech Enthusiast & Developer" />
  <meta property="twitter:image" content="https://yourwebsite.com/preview.jpg" />
</head>
```

---

## ✅ Pre-Launch Checklist

- [ ] Updated all personal information
- [ ] Added profile photo
- [ ] Updated all social media links
- [ ] Added real project links and descriptions
- [ ] Updated education details
- [ ] Added work experience
- [ ] Configured contact form
- [ ] Added resume PDF
- [ ] Updated SEO meta tags
- [ ] Tested on mobile devices
- [ ] Tested all links
- [ ] Checked spelling and grammar
- [ ] Optimized images
- [ ] Tested contact form
- [ ] Added Google Analytics (optional)
- [ ] Set up custom domain (optional)

---

## 🎯 Quick File Reference

| What to Update | File Location |
|----------------|---------------|
| Hero section & social links | `src/components/Hero.jsx` |
| About me bio | `src/components/About.jsx` |
| Skills & proficiency | `src/components/Skills.jsx` |
| Projects & hackathons | `src/components/Projects.jsx` |
| Education & experience | `src/components/Resume.jsx` |
| Contact info & form | `src/components/Contact.jsx` |
| Colors & theme | `tailwind.config.js` |
| SEO & meta tags | `index.html` |

---

**Happy Customizing! 🎨**
