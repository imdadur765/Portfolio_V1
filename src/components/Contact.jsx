import { useMemo, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { Send, Mail, Globe } from 'lucide-react'
import SwordArrow from './SwordArrow'

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ submitted: false, loading: false, error: '' })

  const submitEmail = 'hello@imdadur.com'

  const mailtoHref = useMemo(() => {
    const subject = `Portfolio inquiry from ${formState.name || 'a visitor'}`
    const body = `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    return `mailto:${submitEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }, [formState, submitEmail])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus({ submitted: false, loading: false, error: 'Please fill all fields.' })
      return
    }

    setStatus({ submitted: false, loading: true, error: '' })

    const payload = {
      name: formState.name,
      email: formState.email,
      message: formState.message,
      _subject: `Portfolio inquiry — ${formState.name}`,
      _replyto: formState.email,
    }

    fetch(`https://formsubmit.co/ajax/${submitEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`)
        // Some responses may not contain JSON; keep it resilient.
        try {
          await res.json()
        } catch {
          // ignore
        }
      })
      .then(() => {
        setStatus({ submitted: true, loading: false, error: '' })
        setTimeout(() => {
          setStatus({ submitted: false, loading: false, error: '' })
          setFormState({ name: '', email: '', message: '' })
        }, 3000)
      })
      .catch(() => {
        // Fallback: still allow the user to contact you even if AJAX fails.
        setStatus({
          submitted: false,
          loading: false,
          error: 'Could not send automatically. Opening your email app…',
        })
        window.location.href = mailtoHref
      })
  }

  const socialLinks = [
    {
      icon: <span className="social-initials">GH</span>,
      label: 'Github',
      href: 'https://github.com/imdadur',
      color: 'var(--text-primary)',
    },
    { icon: <Globe size={20} />, label: 'Fiverr', href: 'https://fiverr.com/imdadur_rahman', color: 'var(--yellow)' },
    {
      icon: <span className="social-initials">in</span>,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/imdadur',
      color: 'var(--blue)',
    },
  ]

  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-container">
        <div className="contact-grid">
          <Motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-tag">Contact</div>
            <h2 className="section-title">Let's <span className="gradient-text">Work</span> Together.</h2>
            <p className="text-muted">
              Have a high-impact project in mind? Let's build something extraordinary. I'm currently available for freelance work and professional collaborations.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon"><Mail size={18} /></div>
                <div>
                  <div className="method-label">Email Anytime</div>
                  <a href="mailto:hello@imdadur.com" className="method-value">hello@imdadur.com</a>
                </div>
              </div>
            </div>

            <div className="social-links-grid">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass-card social-card"
                  style={{ '--social-color': link.color }}
                >
                  {link.icon}
                  <span>{link.label}</span>
                  <SwordArrow size={24} rotate={-45} className="link-arrow" />
                </a>
              ))}
            </div>
          </Motion.div>

          <Motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card contact-form-card">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Enter your name" 
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="john@example.com" 
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Project Details</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    name="message"
                    placeholder="Tell me about your project or inquiry..." 
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`btn btn-primary contact-submit ${status.submitted ? 'success' : ''}`}
                  disabled={status.loading}
                >
                  <span>
                    {status.loading ? 'Sending…' : status.submitted ? 'Message Sent!' : 'Send Message'}
                  </span>
                  <Send size={18} />
                </button>

                {status.error ? (
                  <Motion.p
                    className="contact-form-error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {status.error}
                  </Motion.p>
                ) : null}
              </form>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
