import { motion as Motion } from 'framer-motion'
import { Star, User } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechNexus',
      text: 'Imdadur delivered a world-class mobile app that exceeded our expectations. His attention to detail and technical prowess are unmatched on Fiverr.',
      initials: 'SJ'
    },
    {
      name: 'David Chen',
      role: 'Founder, CloudScale',
      text: 'The 3D showroom he built for our brand was a game-changer. Our conversion rate increased by 40% after launch. Highly recommended!',
      initials: 'DC'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Product Manager, Innovate',
      text: 'Fast, professional, and extremely talented. Imdadur handles complex full-stack requirements with ease and delivers premium results.',
      initials: 'ER'
    }
  ]

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-header">
          <Motion.div 
            className="section-label"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Social Proof
          </Motion.div>
          <Motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            What My Clients <span className="gradient-text">Say</span>.
          </Motion.h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Motion.div 
              key={index}
              className="glass-card testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#fbbf24" stroke="none" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{testimonial.initials}</div>
                <div>
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-role">{testimonial.role}</div>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
