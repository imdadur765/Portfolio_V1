import { motion as Motion } from 'framer-motion';
import { Smartphone, Zap, Code, Shield, ExternalLink, ArrowRight } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

const FEATURES = [
  { icon: <Zap size={22} />, title: 'High Performance', desc: 'Optimized Dart code, lazy loading, and smooth 60fps animations across all devices.' },
  { icon: <Smartphone size={22} />, title: 'Cross-Platform', desc: 'Single codebase — runs natively on iOS, Android, and Web without compromise.' },
  { icon: <Code size={22} />, title: 'Clean Architecture', desc: 'BLoC / Provider state management with clean separation of concerns.' },
  { icon: <Shield size={22} />, title: 'Security First', desc: 'Encrypted local storage, secure API calls, and proper auth flows.' },
];

const APP_TOOLS = [
  { name: 'Flutter', slug: 'flutter', color: '54C5F8' },
  { name: 'Dart', slug: 'dart', color: '0175C2' },
  { name: 'Firebase', slug: 'firebase', color: 'FFCA28' },
  { name: 'Android', slug: 'android', color: '3DDC84' },
  { name: 'SQLite', slug: 'sqlite', color: '003B57' },
  { name: 'Figma', slug: 'figma', color: 'F24E1E' },
  { name: 'Git', slug: 'git', color: 'F05032' },
  { name: 'VS Code', slug: 'visualstudiocode', color: '007ACC' },
];

const MOBILE_PROJECTS = [
  {
    icon: '🎵',
    label: 'Flutter Audio App',
    title: 'Audio X',
    accent: '#6BCB77',
    desc: 'High-performance audio player for Android with custom Equalizer, playlists, and seamless background playback.',
    tags: ['Flutter', 'Audio API', 'Dart'],
    live: 'https://portfolio-gules-xi-mn2vh6cext.vercel.app/apks/audio-x-arm64-v8a.apk',
    github: 'https://github.com/imdadur765',
  },
  {
    icon: '🤖',
    label: 'AI Mobile Tool',
    title: 'Photo Logic Pro',
    accent: '#A78BFA',
    desc: 'AI-powered image enhancement tool for professional photographers built with Flutter and TensorFlow Lite.',
    tags: ['Flutter', 'TensorFlow Lite', 'Dart'],
    live: '#',
    github: '#',
  },
  {
    icon: '💪',
    label: 'Health App',
    title: 'Fitness Tracker',
    accent: '#FF6B6B',
    desc: 'Cross-platform health app with real-time Firebase sync, workout logging, and calorie tracking.',
    tags: ['Flutter', 'Firebase', 'Dart'],
    live: '#',
    github: '#',
  },
];

const AppFieldPage = () => (
  <div className="af-page">
    {/* Ambient blobs */}
    <div className="af-ambient">
      <div className="af-blob ab1" />
      <div className="af-blob ab2" />
    </div>

    <div className="af-inner">

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="af-hero">
        <Motion.div {...fadeUp(0.1)}>
          <span className="proj-eyebrow">// Domain_Apps_765</span>
        </Motion.div>
        <Motion.h1 className="af-hero-title" {...fadeUp(0.2)}>
          Mobile <span className="proj-title-accent">Alchemy</span>
        </Motion.h1>
        <Motion.p className="af-hero-sub" {...fadeUp(0.3)}>
          Cross-platform Flutter applications — pixel-perfect, performant,
          and production-ready from first build to Play Store.
        </Motion.p>
        <Motion.div {...fadeUp(0.4)}>
          <a href="https://www.fiverr.com/imdadur488/" target="_blank" rel="noreferrer" className="wf-hire-btn">
            <Zap size={16} /> Commission App <ArrowRight size={14} />
          </a>
        </Motion.div>
      </section>

      {/* ── FEATURE PILLS ─────────────────────────────────── */}
      <section className="af-features">
        {FEATURES.map((f, i) => (
          <Motion.div
            key={f.title}
            className="af-feature-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
          >
            <div className="af-feature-icon">{f.icon}</div>
            <div>
              <div className="af-feature-title">{f.title}</div>
              <div className="af-feature-desc">{f.desc}</div>
            </div>
          </Motion.div>
        ))}
      </section>

      {/* ── TOOLS USED ────────────────────────────────────── */}
      <section className="tools-section">
        <div className="wf-section-header">
          <span className="proj-eyebrow">// Mobile_Arsenal</span>
          <h2 className="wf-section-title">Tools Used</h2>
        </div>
        <div className="tools-grid">
          {APP_TOOLS.map((tool, i) => (
            <Motion.div
              key={tool.name}
              className="tool-pill"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <img
                src={`https://cdn.simpleicons.org/${tool.slug}/${tool.color}`}
                alt={tool.name}
                className="tool-logo"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span>{tool.name}</span>
            </Motion.div>
          ))}
        </div>
      </section>

      {/* ── MOBILE PROJECTS ───────────────────────────────── */}
      <section>
        <div className="wf-section-header">
          <span className="proj-eyebrow">// Case_Studies</span>
          <h2 className="wf-section-title">Mobile Projects</h2>
        </div>
        <div className="af-projects-grid">
          {MOBILE_PROJECTS.map((proj, i) => (
            <Motion.div
              key={proj.title}
              className="af-proj-card"
              style={{ '--proj-accent': proj.accent }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="af-proj-glow" />
              <div className="af-proj-top">
                <span className="af-proj-icon">{proj.icon}</span>
                <span className="af-proj-label" style={{ color: proj.accent, borderColor: `${proj.accent}44` }}>
                  {proj.label}
                </span>
              </div>
              <h3 className="af-proj-title">{proj.title}</h3>
              <p className="af-proj-desc">{proj.desc}</p>
              <div className="af-proj-tags">
                {proj.tags.map(t => (
                  <span key={t} className="proj-tag">{t}</span>
                ))}
              </div>
              <div className="af-proj-links">
                <a href={proj.github} target="_blank" rel="noreferrer" className="proj-link proj-link--ghost">Code</a>
                <a href={proj.live} target="_blank" rel="noreferrer" className="proj-link proj-link--primary">
                  Download <ExternalLink size={13} />
                </a>
              </div>
              <div className="af-proj-stripe" />
            </Motion.div>
          ))}
        </div>
      </section>

    </div>
  </div>
);

export default AppFieldPage;
