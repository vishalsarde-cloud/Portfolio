import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, Briefcase, Award, Download, Calendar, MapPin, Shield, Lock, Code } from 'lucide-react'

const Resume = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Jaywantrao Sawant College of Engineering',
      location: 'Hadapsar, Pune, Maharashtra',
      period: '2024 - 2027',
      description: 'Pursuing B.E. in Information Technology with focus on AI, Cloud Computing, Software Development, and Mobile Applications',
      icon: '🎓',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      degree: 'Diploma in Information Technology',
      institution: "SVERI's College of Engineering",
      location: 'Pandharpur, Solapur, Maharastra',
      period: '2021 - 2024',
      description: 'Completed Diploma in Information Technology with strong foundation in Technical Skills',
      icon: '📚',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const experience = [
    {
      role: 'Cyber Security Intern',
      company: '1stop (Alcheringa IIT Guwahati)',
      period: 'Mar 2025 - Apr 2025',
      location: 'Remote',
      description: [
        'Participated in comprehensive Cyber Security program',
        'Successfully completed the program with hands-on experience',
        'Learned security best practices and threat detection',
        'Worked on real-world security challenges and scenarios'
      ],
      icon: Lock,
      certificate: '/images/certificates/1stop-cybersecurity.jpg'
    },
    {
      role: 'Cyber Security Intern - Industrial Program',
      company: 'Threat Prism (1stop)',
      period: 'Mar 2025 - Apr 2025',
      location: 'Remote',
      description: [
        'Completed Industrial Program on Cyber Security',
        'Developed Information Gathering Tool as project',
        'Worked under guidance of mentor and company representative',
        'Successfully completed all project requirements'
      ],
      icon: Shield,
      certificate: '/images/certificates/1stop-cybersecurity-project.jpg'
    },
    {
      role: 'Web Development Intern',
      company: 'CodSoft',
      period: 'Jul 2025 - Aug 2025',
      location: 'Virtual',
      description: [
        'Completed 4 weeks virtual internship program in Web Development',
        'Showcased valuable skills and contributions to projects',
        'Received wonderful remarks for work quality',
        'Gained hands-on experience in modern web technologies'
      ],
      icon: Code,
      certificate: '/images/certificates/codsoft.jpg'
    }
  ]

  const achievements = [
    {
      title: 'BUILD-A-THON 2025',
      description: 'Active participation in blockchain-based hackathon',
      year: '2025',
      icon: '🏆'
    },
    {
      title: 'Adobe India Hackathon',
      description: 'Qualified Round 1 with Team DocuMinds',
      year: '2025',
      icon: '🎨'
    },
    {
      title: 'Code4EdTech Challenge',
      description: 'Completed 24-hour hackathon challenge',
      year: '2025',
      icon: '⚡'
    },
    {
      title: 'PVGHackHub 2025',
      description: 'National level 24-hour hackathon',
      year: '2025',
      icon: '🚀'
    },
    {
      title: 'Cyber Security Certified',
      description: '1stop & Threat Prism Programs',
      year: '2025',
      icon: '🔐'
    },
    {
      title: 'Web Development Certified',
      description: 'CodSoft Virtual Internship',
      year: '2025',
      icon: '🌐'
    }
  ]

  return (
    <section id="resume" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Resume & <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">
            My educational background and professional journey
          </p>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <motion.a
            href="/pdfs/Vishal_Sarde_Resume.pdf"
            download="Vishal_Sarde_Resume.pdf"
            className="btn-primary flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Education Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-primary-400" size={32} />
            <h3 className="text-3xl font-bold">Education</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="card relative pl-16"
              >
                <div className="absolute left-6 top-6 w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <span className="text-2xl">{edu.icon}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                <p className="text-primary-400 font-semibold mb-2">{edu.institution}</p>
                <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {edu.location}
                  </span>
                </div>
                <p className="text-gray-400 text-sm">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-accent-400" size={32} />
            <h3 className="text-3xl font-bold">Experience</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="card relative pt-14"
              >
                <div className="absolute left-1/2 -translate-x-1/2 -top-5 w-12 h-12 rounded-full bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center shadow-lg shadow-accent-500/50">
                  <exp.icon size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1 text-center">{exp.role}</h4>
                <p className="text-accent-400 font-semibold mb-2 text-center text-sm">{exp.company}</p>
                <div className="flex flex-col gap-1 text-xs text-gray-400 mb-3 text-center">
                  <span className="flex items-center justify-center gap-1">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                  <span className="flex items-center justify-center gap-1">
                    <MapPin size={12} />
                    {exp.location}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-400 text-xs flex items-start gap-2">
                      <span className="text-primary-400 mt-0.5">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Award className="text-yellow-400" size={32} />
            <h3 className="text-3xl font-bold">Achievements & Certifications</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                className="card text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <h4 className="font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-400 text-sm mb-2">{achievement.description}</p>
                <span className="inline-block px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-medium">
                  {achievement.year}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Resume
