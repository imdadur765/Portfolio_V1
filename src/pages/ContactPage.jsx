import { useState, useMemo } from 'react';
import { motion as Motion } from 'framer-motion';
import { Send, Mail, Globe, MapPin, Terminal } from 'lucide-react';
import SwordArrow from '../components/SwordArrow';

// Custom Social Icons
const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
const FiverrIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 512 512" fill="currentColor"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H464c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zM122.9 204.6c2.8-19.1 14.5-30.8 33.6-33.6v33.6h-33.6zm0 50.4h33.6V336h-33.6v-81zm102.7-50.4c2.8-19.1 14.5-30.8 33.6-33.6v33.6h-33.6zm0 50.4h33.6V336h-33.6v-81zm118.4-50.4c19.1 2.8 30.8 14.5 33.6 33.6H344v-33.6zm0 50.4V255h33.6v81h-33.6z"/></svg>
);

const ContactPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitted: false, loading: false, error: '' });
  const [focusedField, setFocusedField] = useState(null);

  const submitEmail = 'imdadadurrahman488@gmail.com';

  const mailtoHref = useMemo(() => {
    const subject = `Portfolio Inquiry - ${formState.name || 'Visitor'}`;
    const body = `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
    return `mailto:${submitEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [formState, submitEmail]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus({ submitted: false, loading: false, error: 'Authorization Denied: Missing data.' });
      return;
    }

    setStatus({ submitted: false, loading: true, error: '' });

    const payload = {
      name: formState.name,
      email: formState.email,
      message: formState.message,
      _subject: `New Mission Request from ${formState.name}`,
    };

    fetch(`https://formsubmit.co/ajax/${submitEmail}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async (res) => {
        if (!res.ok) throw new Error('Transmission Failed');
      })
      .then(() => {
        setStatus({ submitted: true, loading: false, error: '' });
        setTimeout(() => {
          setStatus({ submitted: false, loading: false, error: '' });
          setFormState({ name: '', email: '', message: '' });
        }, 4000);
      })
      .catch(() => {
        setStatus({
          submitted: false,
          loading: false,
          error: 'Connection unstable. Booting local mail client...',
        });
        setTimeout(() => { window.location.href = mailtoHref; }, 1500);
      });
  };

  return (
    <div className="contact-page">
      {/* ── Background Elements ── */}
      <div className="contact-bg">
        <div className="c-blob top-right" />
        <div className="c-blob bot-left" />
        <div className="scan-line-overlay" />
      </div>

      <div className="contact-inner">
        {/* ── Header ── */}
        <Motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="contact-eyebrow">// Comms_Link</span>
          <h1 className="contact-title">
            Establish <span className="contact-title-accent">Connection</span>
          </h1>
          <p className="contact-subtitle">
            Secure channel open. Send details for web architecture or flutter engineering ops.
          </p>
        </Motion.div>

        <div className="contact-layout">
          {/* ── Left Side: Identity & Comms ── */}
          <Motion.div 
            className="contact-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="neo-info-card">
              <div className="neo-info-card-glow" />
              <h3>Direct Intel</h3>
              
              <ul className="info-list">
                <li>
                  <div className="info-icon"><Mail size={16} /></div>
                  <div className="info-text">
                    <span className="info-label">Encrypted Drop</span>
                    <a href={`mailto:${submitEmail}`}>{submitEmail}</a>
                  </div>
                </li>
                <li>
                  <div className="info-icon"><MapPin size={16} /></div>
                  <div className="info-text">
                    <span className="info-label">Base Location</span>
                    <span>INDIA ASSAM HOJAI 782440</span>
                  </div>
                </li>
                <li>
                  <div className="info-icon"><Terminal size={16} /></div>
                  <div className="info-text">
                    <span className="info-label">Status</span>
                    <span className="status-val glow-txt">Accepting Missions</span>
                  </div>
                </li>
              </ul>

              <div className="social-grid">
                <a href="https://github.com/imdadur765" target="_blank" rel="noopener noreferrer" className="soc-chip soc-github">
                  <GithubIcon size={18} /> <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/imdadur" target="_blank" rel="noopener noreferrer" className="soc-chip soc-linked">
                  <LinkedinIcon size={18} /> <span>LinkedIn</span>
                </a>
                <a href="https://www.fiverr.com/imdadur488/" target="_blank" rel="noopener noreferrer" className="soc-chip soc-fiverr">
                  <FiverrIcon size={18} /> <span>Fiverr</span>
                </a>
              </div>
            </div>
          </Motion.div>

          {/* ── Right Side: Transmission Form ── */}
          <Motion.div 
            className="contact-right"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="neo-form-card">
              <form onSubmit={handleSubmit} className="neo-contact-form">
                
                <div className={`form-control ${focusedField === 'name' || formState.name ? 'active' : ''}`}>
                  <label htmlFor="name">Target Alias (Name)</label>
                  <input
                    id="name"
                    type="text"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                  <div className="input-border" />
                </div>

                <div className={`form-control ${focusedField === 'email' || formState.email ? 'active' : ''}`}>
                  <label htmlFor="email">Comms ID (Email)</label>
                  <input
                    id="email"
                    type="email"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                  <div className="input-border" />
                </div>

                <div className={`form-control ${focusedField === 'message' || formState.message ? 'active' : ''}`}>
                  <label htmlFor="message">Mission Parameters (Message)</label>
                  <textarea
                    id="message"
                    rows="4"
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                  <div className="input-border" />
                </div>

                {status.error && (
                  <div className="form-alert error">
                    {status.error}
                  </div>
                )}
                {status.submitted && (
                  <div className="form-alert success">
                    Transmission successful. Awaiting sync.
                  </div>
                )}

                <button 
                  type="submit" 
                  className={`neo-submit-btn ${status.submitted ? 'btn-success' : ''}`}
                  disabled={status.loading || status.submitted}
                >
                  <span className="btn-bg-glow" />
                  <span className="btn-content">
                    {status.loading ? 'Encrypting...' : status.submitted ? 'Sent' : 'Initiate Transmission'}
                  </span>
                  {!status.loading && !status.submitted && <Send size={16} className="btn-icon" />}
                  {status.submitted && <SwordArrow size={24} className="btn-icon" />}
                </button>
              </form>
            </div>
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;