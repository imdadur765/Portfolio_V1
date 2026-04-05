import { motion as Motion } from 'framer-motion'

const SKILLS = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', category: 'Frontend' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#68A063', category: 'Backend' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6', category: 'Language' },
  { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: '#02569B', category: 'Mobile' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#FFFFFF', category: 'Frontend' },
  { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4', category: 'Frontend' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', color: '#F05032', category: 'Tools' },
  { name: 'REST APIs', icon: 'https://cdn-icons-png.flaticon.com/512/1149/1149159.png', color: '#FF6B6B', category: 'Backend' },
  { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: '#FFCA28', category: 'Backend' },
]

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header section-center">
          <Motion.div 
            className="section-tag"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Expertise
          </Motion.div>
          <Motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            My Tech <span className="gradient-text">Stack</span>.
          </Motion.h2>
          <Motion.p 
            className="text-muted" 
            style={{ margin: '0 auto' }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I specialize in high-performance digital tools, focusing on clean architecture and scalable components.
          </Motion.p>
        </div>

        <div className="skills-grid">
          {SKILLS.map((skill, index) => (
            <Motion.div 
              key={skill.name}
              className="glass-card skill-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              style={{ '--skill-color': skill.color }}
            >
              <div className="skill-icon-wrapper" style={{ color: skill.color }}>
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  width="32"
                  height="32"
                  style={{ 
                    filter: skill.name === 'Next.js' ? 'invert(1)' : 'none',
                    width: '32px',
                    height: '32px'
                  }}
                />
              </div>
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <span>{skill.category}</span>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills