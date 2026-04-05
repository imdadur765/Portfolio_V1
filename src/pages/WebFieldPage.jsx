import { motion as Motion } from 'framer-motion';
import { Globe, Smartphone, Server, Database, Layers, Zap, Code2, ExternalLink, ArrowRight } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const SERVICES = [
  {
    icon: <Globe size={26} />,
    eyebrow: 'Sequence_01',
    title: 'Web Architecture',
    accent: '#c62828',
    points: [
      'Full-stack React / Next.js applications',
      'RESTful & GraphQL API design',
      'PostgreSQL · MongoDB · Supabase',
      'Authentication, Payments, Dashboards',
    ],
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
  },
  {
    icon: <Smartphone size={26} />,
    eyebrow: 'Sequence_02',
    title: 'Mobile Alchemy',
    accent: '#6BCB77',
    points: [
      'Cross-platform Flutter applications',
      'Native-grade performance & animations',
      'Firebase · REST API integration',
      'Play Store / App Store deployment',
    ],
    tags: ['Flutter', 'Dart', 'Firebase', 'BLoC'],
  },
  {
    icon: <Server size={26} />,
    eyebrow: 'Sequence_03',
    title: 'Backend Systems',
    accent: '#4D96FF',
    points: [
      'Node.js · Express · NestJS servers',
      'Scalable microservice architecture',
      'Caching with Redis, WebSockets',
      'Cloud deployment on Vercel / Railway',
    ],
    tags: ['Express', 'Redis', 'WebSocket', 'Docker'],
  },
  {
    icon: <Code2 size={26} />,
    eyebrow: 'Sequence_04',
    title: 'UI / UX Craft',
    accent: '#FFD93D',
    points: [
      'Pixel-perfect responsive interfaces',
      'Framer Motion animations & micro-interactions',
      'Design-to-code from Figma',
      '3D experiences with Three.js',
    ],
    tags: ['Figma', 'Tailwind', 'Framer Motion', 'Three.js'],
  },
];

const WEB_TOOLS = [
  { name: 'React', slug: 'react', color: '61DAFB' },
  { name: 'Next.js', slug: 'nextdotjs', color: '000000' },
  { name: 'Node.js', slug: 'nodedotjs', color: '339933' },
  { name: 'Express', slug: 'express', color: '000000' },
  { name: 'PostgreSQL', slug: 'postgresql', color: '4169E1' },
  { name: 'MongoDB', slug: 'mongodb', color: '47A248' },
  { name: 'Tailwind', slug: 'tailwindcss', color: '06B6D4' },
  { name: 'Docker', slug: 'docker', color: '2496ED' },
  { name: 'Framer', slug: 'framer', color: '0055FF' },
  { name: 'Three.js', slug: 'threedotjs', color: '000000' },
  { name: 'Firebase', slug: 'firebase', color: 'FFCA28' },
  { name: 'Figma', slug: 'figma', color: 'F24E1E' },
];

const PROCESS = [
  { step: '01', title: 'Brief & Plan', desc: 'Deep-dive into your goals, scope, and timeline. No guesswork.' },
  { step: '02', title: 'Design & Architect', desc: 'system design, UI wireframes, and tech-stack decision before a single line of code.' },
  { step: '03', title: 'Build & Iterate', desc: 'Rapid delivery in milestones with live previews. You always know the progress.' },
  { step: '04', title: 'Ship & Support', desc: 'Production deployment with full documentation and post-launch support.' },
];

const WebFieldPage = () => (
  <div className="wf-page">
    {/* Ambient background */}
    <div className="wf-ambient">
      <div className="wf-blob wb1" />
      <div className="wf-blob wb2" />
    </div>

    <div className="wf-inner">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="wf-hero">
        <Motion.div {...fadeUp(0.1)}>
          <span className="proj-eyebrow">// Master_Archive_765</span>
        </Motion.div>
        <Motion.h1 className="wf-hero-title" {...fadeUp(0.2)}>
          Technical <span className="proj-title-accent">Domain</span>
        </Motion.h1>
        <Motion.p className="wf-hero-sub" {...fadeUp(0.3)}>
          A full-spectrum digital forge — from pixel-perfect frontends to
          battle-hardened backends and cross-platform mobile apps.
        </Motion.p>
        <Motion.div className="wf-hero-cta" {...fadeUp(0.4)}>
          <a href="https://www.fiverr.com/imdadur488/" target="_blank" rel="noreferrer" className="wf-hire-btn">
            <Zap size={16} /> Commission Work <ArrowRight size={14} />
          </a>
        </Motion.div>
      </section>

      {/* ── SERVICE CARDS ─────────────────────────────────── */}
      <section className="wf-services">
        {SERVICES.map((svc, i) => (
          <Motion.div
            key={svc.title}
            className="wf-service-card"
            style={{ '--svc-accent': svc.accent }}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="wf-svc-header">
              <div className="wf-svc-icon" style={{ color: svc.accent, borderColor: `${svc.accent}33`, background: `${svc.accent}10` }}>
                {svc.icon}
              </div>
              <div>
                <div className="wf-svc-eyebrow">{svc.eyebrow}</div>
                <h2 className="wf-svc-title">{svc.title}</h2>
              </div>
            </div>
            <ul className="wf-svc-points">
              {svc.points.map((pt) => (
                <li key={pt}><span className="wf-svc-bullet" style={{ color: svc.accent }}>›</span> {pt}</li>
              ))}
            </ul>
            <div className="wf-svc-tags">
              {svc.tags.map((t) => (
                <span key={t} className="wf-tag" style={{ borderColor: `${svc.accent}33`, color: svc.accent }}>
                  {t}
                </span>
              ))}
            </div>
            <div className="wf-svc-stripe" />
          </Motion.div>
        ))}
      </section>

      {/* ── TOOLS USED ────────────────────────────────────── */}
      <section className="tools-section">
        <Motion.div className="wf-section-header" {...fadeUp(0)}>
          <span className="proj-eyebrow">// Web_Arsenal</span>
          <h2 className="wf-section-title">Tools Used</h2>
        </Motion.div>
        <div className="tools-grid">
          {WEB_TOOLS.map((tool, i) => (
            <Motion.div
              key={tool.name}
              className="tool-pill"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
            >
              <img
                src={`https://cdn.simpleicons.org/${tool.slug}/white`}
                alt={tool.name}
                className="tool-logo"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span>{tool.name}</span>
            </Motion.div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────── */}
      <section className="wf-process-section">
        <Motion.div className="wf-section-header" {...fadeUp(0)}>
          <span className="proj-eyebrow">// Operational_Protocol</span>
          <h2 className="wf-section-title">How I Work</h2>
        </Motion.div>
        <div className="wf-process-grid">
          {PROCESS.map((step, i) => (
            <Motion.div
              key={step.step}
              className="wf-process-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <div className="wf-process-num">{step.step}</div>
              <h3 className="wf-process-title">{step.title}</h3>
              <p className="wf-process-desc">{step.desc}</p>
              {i < PROCESS.length - 1 && <div className="wf-process-connector" />}
            </Motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────── */}
      <Motion.section
        className="wf-cta-banner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="wf-cta-content">
          <span className="proj-eyebrow">// Ready_To_Execute</span>
          <h2 className="wf-cta-title">Let's forge something legendary.</h2>
          <p className="wf-cta-sub">Hop on Fiverr or shoot me an email — I respond within 24 hours.</p>
          <div className="wf-cta-actions">
            <a href="https://www.fiverr.com/imdadur488/" target="_blank" rel="noreferrer" className="wf-hire-btn large">
              <ExternalLink size={16} /> Open Fiverr Profile
            </a>
          </div>
        </div>
        <div className="wf-cta-glow" />
      </Motion.section>

    </div>
  </div>
);

export default WebFieldPage;
