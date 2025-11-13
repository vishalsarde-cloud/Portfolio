import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      category: 'Languages',
      skills: [
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'Java', level: 85, icon: '☕' },
        { name: 'JavaScript', level: 80, icon: '⚡' },
        { name: 'C/C++', level: 75, icon: '⚙️' },
      ]
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 85, icon: '⚛️' },
        { name: 'HTML/CSS', level: 90, icon: '🎨' },
        { name: 'TailwindCSS', level: 85, icon: '💨' },
        { name: 'JavaScript', level: 80, icon: '📜' },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'FastAPI', level: 85, icon: '⚡' },
        { name: 'Node.js', level: 75, icon: '🟢' },
        { name: 'Django', level: 70, icon: '🎯' },
        { name: 'REST APIs', level: 85, icon: '🔌' },
      ]
    },
    {
      category: 'Mobile & Others',
      skills: [
        { name: 'Android Dev', level: 80, icon: '🤖' },
        { name: 'Git/GitHub', level: 85, icon: '📦' },
        { name: 'AI/ML', level: 75, icon: '🧠' },
        { name: 'Cybersecurity', level: 70, icon: '🔒' },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="card"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-primary-400 font-semibold">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold text-center mb-6 text-gray-300">
            Also familiar with
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Docker', 'MongoDB', 'PostgreSQL', 'Firebase', 'AWS', 'Linux', 'Figma', 'VS Code'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="px-4 py-2 glass-effect rounded-full text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
