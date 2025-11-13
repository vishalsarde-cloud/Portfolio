import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Brain, Smartphone, Sparkles } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const interests = [
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Building robust and scalable applications'
    },
    {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Exploring ML and AI-powered solutions'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Creating intuitive mobile experiences'
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Always learning and experimenting'
    }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Visual Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Profile Image */}
              <div className="absolute inset-0 glass-effect rounded-3xl overflow-hidden">
                <img 
                  src="/images/profile/vishal.jpg" 
                  alt="Vishal Sarde - Tech Enthusiast & Developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400/1e1b4b/a855f7?text=VS'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-accent-500/30 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-500/30 rounded-full blur-2xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.8, 0.5, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              Hi, I'm Vishal! 👋
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate tech enthusiast and developer from Maharashtra, India, with a deep 
              interest in creating innovative solutions that make a difference. My journey in 
              technology is driven by curiosity and a constant desire to learn and improve.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in software development, artificial intelligence, and mobile app 
              development. I love participating in hackathons and building projects that solve 
              real-world problems. My motto is simple: <span className="gradient-text font-semibold">
              "Live to improve, not to impress"</span>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="card p-4"
                >
                  <interest.icon className="text-primary-400 mb-2" size={28} />
                  <h4 className="font-semibold text-white mb-1">{interest.title}</h4>
                  <p className="text-gray-400 text-sm">{interest.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
