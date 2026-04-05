import { motion as Motion } from 'framer-motion'
import { Code, Smartphone, Layout, Cpu, Database, Zap } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Layout className="purple" />,
      title: 'Frontend Development',
      description: 'Building premium, high-performance web applications with React, Next.js, and modern CSS for a world-class user experience.',
      tags: ['React', 'Next.js', 'Tailwind', 'Framer Motion'],
      color: 'purple'
    },
    {
      icon: <Smartphone className="cyan" />,
      title: 'Flutter Mobile Apps',
      description: 'Native-grade cross-platform mobile apps for iOS and Android with smooth animations and complex state management.',
      tags: ['Flutter', 'Dart', 'Firebase', 'State Management'],
      color: 'cyan'
    },
    {
      icon: <Cpu className="pink" />,
      title: 'Full-Stack Solutions',
      description: 'End-to-end development with secure backend architectures, RESTful APIs, and real-time database integrations.',
      tags: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
      color: 'pink'
    },
    {
      icon: <Zap className="green" />,
      title: 'UI/UX Design',
      description: 'Creating visually stunning, user-centric designs that convert. Focused on aesthetics, performance, and accessibility.',
      tags: ['Figma', 'UI Design', 'UX Research', 'Prototyping'],
      color: 'green'
    }
  ]

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <Motion.div 
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Capabilities
          </Motion.div>
          <Motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            How I can help you scale your <span className="gradient-text">business</span>.
          </Motion.h2>
          <Motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Specializing in high-performance digital products that combine aesthetic excellence with technical robustness.
          </Motion.p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <Motion.div 
              key={index}
              className="glass-card service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`service-icon ${service.color}`}>
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tags">
                {service.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
