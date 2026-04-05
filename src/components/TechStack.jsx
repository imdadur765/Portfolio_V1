import { motion as Motion } from 'framer-motion'
import { Terminal, Database, Smartphone, Globe, Layers, Cpu, Cloud, Shield } from 'lucide-react'

const TechStack = () => {
  const technologies = [
    { name: 'React.js', icon: <Globe size={24} color="#61DAFB" /> },
    { name: 'Flutter', icon: <Smartphone size={24} color="#02569B" /> },
    { name: 'Node.js', icon: <Cpu size={24} color="#339933" /> },
    { name: 'MongoDB', icon: <Database size={24} color="#47A248" /> },
    { name: 'Next.js', icon: <Layers size={24} color="#FFFFFF" /> },
    { name: 'PostgreSQL', icon: <Terminal size={24} color="#336791" /> },
    { name: 'Firebase', icon: <Cloud size={24} color="#FFCA28" /> },
    { name: 'TypeScript', icon: <Shield size={24} color="#3178C6" /> },
  ]

  // Double the list for infinite scroll
  const marqueeItems = [...technologies, ...technologies, ...technologies]

  return (
    <section id="tech" className="section tech-section">
      <div className="container">
        <Motion.div 
          className="section-label"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          Tech Stack
        </Motion.div>
        <Motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          My Technical <span className="gradient-text">Toolkit</span>.
        </Motion.h2>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {marqueeItems.map((tech, index) => (
              <div key={index} className="tech-chip">
                <span className="tech-chip-icon">{tech.icon}</span>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack
