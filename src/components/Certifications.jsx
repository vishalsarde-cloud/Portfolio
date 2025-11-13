import React, { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, X, ExternalLink } from 'lucide-react'

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCert, setSelectedCert] = useState(null)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedCert])

  const certificates = [
    {
      title: 'Cyber Security Internship',
      organization: '1stop (Alcheringa IIT Guwahati)',
      date: 'Mar - Apr 2025',
      image: '/images/certificates/1stop-cybersecurity.jpg',
      description: 'Participated in comprehensive Cyber Security program and successfully completed with hands-on experience',
      skills: ['Cyber Security', 'Threat Detection', 'Security Best Practices'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Industrial Cyber Security Program',
      organization: 'Threat Prism (1stop)',
      date: 'Mar - Apr 2025',
      image: '/images/certificates/1stop-cybersecurity-project.jpg',
      description: 'Completed Industrial Program on Cyber Security with Information Gathering Tool project',
      skills: ['Industrial Security', 'Information Gathering', 'Security Tools'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Web Development Internship',
      organization: 'CodSoft',
      date: 'Jul - Aug 2025',
      image: '/images/certificates/codsoft.jpg',
      description: '4 weeks virtual internship with wonderful remarks for showcased skills and contributions',
      skills: ['Web Development', 'React', 'Modern Web Technologies'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'BUILD-A-THON 2025',
      organization: 'LFDT India PCCOE Chapter',
      date: '2025',
      image: '/images/certificates/buildathon-2025.jpg',
      description: 'Active participation in blockchain-based hackathon with outstanding innovation and teamwork',
      skills: ['Blockchain', 'Innovation', 'Problem Solving'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Adobe India Hackathon',
      organization: 'Adobe & Unstop',
      date: '2025',
      image: '/images/certificates/adobe-india-hackathon.jpg',
      description: 'Team DocuMinds - Successfully participated in Round 1 MCQ Assessment + Coding',
      skills: ['Coding', 'Team Collaboration', 'Problem Solving'],
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Code4EdTech Hack-A-Thon',
      organization: 'Innomatics Research Labs',
      date: 'Sept 2025',
      image: '/images/certificates/code4edtech-innomatics.jpg',
      description: '24 hours challenge with active participation and enthusiasm in Educational Technology',
      skills: ['EdTech', '24-Hour Challenge', 'Innovation'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'PVGHackHub 2025',
      organization: 'PVG College & S.S. Dhamankar Institute',
      date: '2025',
      image: '/images/certificates/pvghackhub.jpg',
      description: 'National Level 24-Hour Hackathon participation',
      skills: ['National Level', 'Hackathon', 'Development'],
      color: 'from-cyan-500 to-blue-500'
    }
  ]

  return (
    <section id="certifications" className="py-20 relative overflow-hidden" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">
            Professional certifications and hackathon achievements
          </p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card group cursor-pointer overflow-hidden"
              onClick={() => setSelectedCert(cert)}
              whileHover={{ y: -10 }}
            >
              {/* Certificate Image */}
              <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${cert.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="absolute top-4 right-4">
                  <Award className="text-white drop-shadow-lg" size={28} />
                </div>
              </div>

              {/* Certificate Info */}
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-primary-400 font-semibold text-sm mb-2">
                  {cert.organization}
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  {cert.date}
                </p>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-white/5 rounded-full text-xs text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Details Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <ExternalLink size={20} />
                  <span>View Certificate</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Modal/Lightbox */}
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full glass-effect rounded-2xl overflow-hidden my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
              >
                <X size={24} className="text-white" />
              </button>

              {/* Certificate Image */}
              <div className="relative">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title}
                  className="w-full h-auto"
                />
              </div>

              {/* Certificate Details */}
              <div className="p-8">
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${selectedCert.color} rounded-full mb-4`}>
                  <Award className="inline-block mr-2" size={20} />
                  <span className="font-semibold">{selectedCert.date}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-2">
                  {selectedCert.title}
                </h3>
                <p className="text-primary-400 font-semibold text-lg mb-4">
                  {selectedCert.organization}
                </p>
                <p className="text-gray-300 text-lg mb-6">
                  {selectedCert.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {selectedCert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="card text-center">
            <div className="text-4xl font-bold gradient-text mb-2">7+</div>
            <div className="text-gray-400">Certifications</div>
          </div>
          <div className="card text-center">
            <div className="text-4xl font-bold gradient-text mb-2">4</div>
            <div className="text-gray-400">Hackathons</div>
          </div>
          <div className="card text-center">
            <div className="text-4xl font-bold gradient-text mb-2">3</div>
            <div className="text-gray-400">Internships</div>
          </div>
          <div className="card text-center">
            <div className="text-4xl font-bold gradient-text mb-2">2025</div>
            <div className="text-gray-400">Active Year</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
