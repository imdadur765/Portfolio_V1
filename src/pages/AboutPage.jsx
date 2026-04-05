import { motion as Motion } from 'framer-motion';
import { Globe, Mail, MapPin, Award, Target, Rocket, ExternalLink, Code2, Layers, Cpu } from 'lucide-react';

// Github icon — removed from lucide-react v1.x, using inline SVG
const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
);

const SKILLS = [
  { group: 'Frontend', color: '#c62828', items: [
    { name: 'React', slug: 'react' },
    { name: 'Next.js', slug: 'nextdotjs' },
    { name: 'Tailwind', slug: 'tailwindcss' },
    { name: 'Framer', slug: 'framer' },
    { name: 'Three.js', slug: 'threedotjs' }
  ]},
  { group: 'Backend', color: '#4D96FF', items: [
    { name: 'Node.js', slug: 'nodedotjs' },
    { name: 'Express', slug: 'express' },
    { name: 'PostgreSQL', slug: 'postgresql' },
    { name: 'MongoDB', slug: 'mongodb' },
    { name: 'Redis', slug: 'redis' }
  ]},
  { group: 'Mobile', color: '#6BCB77', items: [
    { name: 'Flutter', slug: 'flutter' },
    { name: 'Dart', slug: 'dart' },
    { name: 'Firebase', slug: 'firebase' },
    { name: 'Kotlin', slug: 'kotlin' },
    { name: 'Swift', slug: 'swift' }
  ]},
  { group: 'Tooling', color: '#FFD93D', items: [
    { name: 'Git', slug: 'git' },
    { name: 'Docker', slug: 'docker' },
    { name: 'Vite', slug: 'vite' },
    { name: 'Figma', slug: 'figma' },
    { name: 'Vercel', slug: 'vercel' }
  ]},
];

const STATS = [
  { icon: <Rocket size={20} />, value: '50+', label: 'Projects Shipped' },
  { icon: <Award size={20} />, value: '3+', label: 'Years Active' },
  { icon: <Target size={20} />, value: '100%', label: 'Client Satisfaction' },
  { icon: <Cpu size={20} />, value: '10+', label: 'Tech Mastered' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const AboutPage = () => (
  <div className="about-page">
    {/* Ambient blobs */}
    <div className="about-ambient">
      <div className="about-blob ab1" />
      <div className="about-blob ab2" />
      <div className="about-blob ab3" />
    </div>

    <div className="about-inner">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="about-hero">
        <Motion.div {...fadeUp(0.1)}>
          <span className="proj-eyebrow">// Identity_Pulse_765</span>
        </Motion.div>

        <Motion.h1 className="about-hero-name" {...fadeUp(0.2)}>
          IMDADUR <span className="about-name-accent">RAHMAN</span>
        </Motion.h1>

        <Motion.p className="about-hero-role" {...fadeUp(0.3)}>
          Full-Stack Architect &nbsp;·&nbsp; Flutter Alchemist &nbsp;·&nbsp; Creative Technologist
        </Motion.p>

        <Motion.div className="about-hero-links" {...fadeUp(0.4)}>
          <a href="https://github.com/imdadur765" target="_blank" rel="noreferrer" className="about-link-pill">
            <GithubIcon size={16} /> GitHub
          </a>
          <a href="https://www.fiverr.com/imdadur488/" target="_blank" rel="noreferrer" className="about-link-pill primary">
            <Globe size={16} /> Hire on Fiverr
          </a>
          <a href="mailto:imdadadurrahman488@gmail.com" className="about-link-pill">
            <Mail size={16} /> Email
          </a>
        </Motion.div>

        <Motion.div className="about-meta-row" {...fadeUp(0.45)}>
          <span className="about-meta-tag"><MapPin size={13} /> Hojai, Assam, India</span>
          <span className="about-meta-dot" />
          <span className="about-meta-tag">Open to Remote Work</span>
          <span className="about-meta-dot" />
          <span className="about-meta-tag status-online"><span className="pulse-dot" /> Available Now</span>
        </Motion.div>
      </section>

      {/* ── STATS ─────────────────────────────────────────── */}
      <section className="about-stats-row">
        {STATS.map((s, i) => (
          <Motion.div
            key={s.label}
            className="about-stat-card"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-stat-icon">{s.icon}</div>
            <div className="about-stat-val">{s.value}</div>
            <div className="about-stat-label">{s.label}</div>
          </Motion.div>
        ))}
      </section>

      {/* ── TWO-COL GRID ──────────────────────────────────── */}
      <section className="about-grid">

        {/* — Story card */}
        <Motion.div className="about-card about-story" {...fadeUp(0.2)}>
          <div className="about-card-eyebrow">My_Synchronization</div>
          <h2 className="about-card-title">The Story</h2>
          <p>
            From building complex affiliate platforms like <strong>Nexa Store</strong> to crafting audio
            experiences like <strong>Audio X</strong>, my mission is simple — deliver software that is not
            just functional, but legendary.
          </p>
          <p>
            I specialize in the bridge between robust backend architecture and pixel-perfect frontend
            fluidity. Whether it's driving a clean codebase or shipping a finished product, I believe in
            <em> "Nothing is True, Everything is Permitted"</em> when it comes to creative problem-solving.
          </p>
          <p>
            Based in <strong>Hojai, Assam, India</strong> — working with clients worldwide on Fiverr and
            beyond, turning ideas into production-grade digital experiences.
          </p>
        </Motion.div>

        {/* — Skills matrix */}
        <Motion.div className="about-card about-skills-card" {...fadeUp(0.3)}>
          <div className="about-card-eyebrow">Tech_Arsenal</div>
          <h2 className="about-card-title">Skills Matrix</h2>
          <div className="skills-matrix">
            {SKILLS.map((group) => (
              <div key={group.group} className="skills-group">
                <div className="skills-group-label" style={{ color: group.color }}>
                  {group.group}
                </div>
                <div className="skills-tags">
                  {group.items.map((skill) => (
                    <span key={skill.name} className="skill-tag" style={{ borderColor: `${group.color}44`, background: `${group.color}0d`, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <img src={`https://cdn.simpleicons.org/${skill.slug}/white`} alt={skill.name} style={{ width: '14px', height: '14px', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; }} />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Motion.div>

        {/* — Philosophy card */}
        <Motion.div className="about-card about-philosophy" {...fadeUp(0.35)}>
          <div className="about-card-eyebrow">Core_Directive</div>
          <h2 className="about-card-title">Philosophy</h2>
          <div className="philosophy-list">
            {[
              { icon: <Layers size={16} />, title: 'Architecture First', desc: 'Clean, scalable code that survives the test of time.' },
              { icon: <Code2 size={16} />, title: 'Craft Over Speed', desc: 'Every pixel and every function deserves intention.' },
              { icon: <Target size={16} />, title: 'Ship & Iterate', desc: 'Launch fast, learn fast, refine obsessively.' },
            ].map((p) => (
              <div key={p.title} className="philosophy-item">
                <div className="philosophy-icon">{p.icon}</div>
                <div>
                  <div className="philosophy-title">{p.title}</div>
                  <div className="philosophy-desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Motion.div>

        {/* — Contact quick card */}
        <Motion.div className="about-card about-contact-cta" {...fadeUp(0.4)}>
          <div className="about-card-eyebrow">Initiate_Contact</div>
          <h2 className="about-card-title">Let's Build</h2>
          <p className="about-cta-sub">
            Ready to forge your next digital legend? Let's collaborate.
          </p>
          <div className="about-cta-actions">
            <a href="https://www.fiverr.com/imdadur488/" target="_blank" rel="noreferrer" className="about-cta-btn primary">
              Hire on Fiverr <ExternalLink size={14} />
            </a>
            <a href="mailto:imdadadurrahman488@gmail.com" className="about-cta-btn ghost">
              Send Email <Mail size={14} />
            </a>
          </div>
        </Motion.div>

      </section>
    </div>
  </div>
);

export default AboutPage;