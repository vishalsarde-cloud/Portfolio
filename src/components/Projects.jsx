import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, Github, Award, Code2, Smartphone, Shield } from 'lucide-react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: 'AI-Powered Resume Analyzer',
      description: 'An intelligent system that analyzes resumes using NLP and machine learning to provide insights and recommendations for job seekers.',
      icon: Code2,
      tags: ['Python', 'FastAPI', 'NLP', 'Machine Learning'],
      github: '#',
      demo: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Voice Reminder App',
      description: 'A smart Android application that allows users to set voice-based reminders with natural language processing capabilities.',
      icon: Smartphone,
      tags: ['Android', 'Java', 'Voice Recognition', 'Firebase'],
      github: '#',
      demo: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cyber Security Dashboard',
      description: 'A comprehensive security monitoring dashboard developed during cybersecurity internship, featuring threat detection and analysis.',
      icon: Shield,
      tags: ['Python', 'React', 'Security', 'APIs'],
      github: '#',
      demo: '#',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  const hackathons = [
    {
      name: 'BUILD-A-THON 2025',
      organizer: 'LFDT India Student Society PCCOE Chapter',
      achievement: 'Active Participation',
      theme: 'Where Agents Shape Tomorrow',
      date: '2025',
      icon: '🏗️'
    },
    {
      name: 'Adobe India Hackathon',
      organizer: 'Adobe & Unstop',
      achievement: 'Team DocuMinds - Round 1',
      theme: 'MCQ Assessment + Coding',
      date: '2025',
      icon: '🎨'
    },
    {
      name: 'Code4EdTech Hack-A-Thon',
      organizer: 'Innomatics Research Labs',
      achievement: '24 Hours Challenge',
      theme: 'Educational Technology',
      date: 'Sept 2025',
      icon: '💡'
    },
    {
      name: 'PVGHackHub 2025',
      organizer: 'Pune Vidyarthi Griha\'s College',
      achievement: 'National Level Participation',
      theme: '24-Hour Hackathon',
      date: '2025',
      icon: '🚀'
    }
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">
            Things I've built and contributed to
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="card group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <project.icon size={32} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                  <span className="text-sm">Code</span>
                </a>
                <a
                  href={project.demo}
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={18} />
                  <span className="text-sm">Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hackathons Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Award className="text-accent-400" size={36} />
              <span className="gradient-text">Hackathons & Competitions</span>
            </h3>
            <p className="text-gray-400">
              Participated in various hackathons and coding challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {hackathons.map((hackathon, index) => (
              <motion.div
                key={hackathon.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="card group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {hackathon.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {hackathon.name}
                    </h4>
                    <p className="text-gray-400 text-sm mb-2">
                      {hackathon.organizer}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="px-3 py-1 bg-accent-500/20 text-accent-300 rounded-full text-xs font-medium">
                        {hackathon.achievement}
                      </span>
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-medium">
                        {hackathon.date}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm italic">
                      {hackathon.theme}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Note about certificates */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-sm">
            💼 Certificates available upon request
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
