import { motion as Motion } from 'framer-motion'
import SwordArrow from './SwordArrow'

const PROJECTS = [
  {
    title: 'E-Commerce Platform',
    category: 'web',
    displayCategory: 'Full-Stack Web',
    desc: 'Full stack shopping platform with React, Node.js & MongoDB. Features auth, cart, and Stripe payments.',
    tags: ['React', 'Node.js', 'MongoDB'],
    color: '#FF6B6B',
    link: '#',
    size: 'large'
  },
  {
    title: 'Real-time Chat App',
    category: 'web',
    displayCategory: 'Network / Socket',
    desc: 'WebSocket-based chat with rooms, file sharing, and JWT authentication.',
    tags: ['Socket.io', 'React'],
    color: '#FFD93D',
    link: '#',
    size: 'small'
  },
  {
    title: 'Nexa Store Platform',
    category: 'web',
    displayCategory: 'E-Commerce',
    desc: 'Scalable affiliate marketing platform with category-driven navigation.',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind'],
    color: '#4D96FF',
    link: '#',
    size: 'medium'
  },
  {
    title: 'Fitness Tracker App',
    category: 'mobile',
    displayCategory: 'Flutter App',
    desc: 'Cross-platform health app with real-time sync and calorie tracking.',
    tags: ['Flutter', 'Firebase', 'Dart'],
    color: '#6BCB77',
    link: '#',
    size: 'small'
  },
  {
    title: 'Photo Logic Pro',
    category: 'mobile',
    displayCategory: 'AI Mobile Tool',
    desc: 'AI-powered image enhancement tool for professional photographers.',
    tags: ['Flutter', 'TensorFlow Lite'],
    color: '#A78BFA',
    link: '#',
    size: 'medium'
  }
]

const Projects = ({ filter = 'all' }) => {
  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        {filter === 'all' && (
          <div className="section-header">
            <Motion.div 
              className="section-tag"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Portfolio
            </Motion.div>
            <Motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Selected <span className="gradient-text">Projects</span>.
            </Motion.h2>
          </div>
        )}

        <div className="projects-bento">
          {filteredProjects.map((project, index) => (
            <Motion.div 
              key={project.title}
              className={`project-card-wrapper ${project.size}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="glass-card project-card-bento">
                <div className="project-card-header">
                  <div className="project-category">{project.displayCategory}</div>
                  <a href={project.link} className="project-link-icon">
                    <SwordArrow size={36} rotate={-45} />
                  </a>
                </div>
                <div className="project-card-body">
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                </div>
                <div className="project-card-footer">
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-accent-bg" style={{ background: project.color }} />
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
