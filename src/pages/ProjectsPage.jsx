import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Globe, Smartphone, Layers, Filter } from 'lucide-react';
import SwordArrow from '../components/SwordArrow';

const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    label: 'Full-Stack Web',
    desc: 'Full-stack shopping platform with React, Node.js & MongoDB. Features auth, cart, Stripe payments, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    accent: '#c62828',
    icon: '🛒',
    live: '#',
    github: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Nexa Store Platform',
    category: 'web',
    label: 'Affiliate Marketing',
    desc: 'Scalable affiliate marketing platform with multi-category navigation, product reviews, and price comparison tools.',
    tags: ['Next.js', 'PostgreSQL', 'Tailwind'],
    accent: '#4D96FF',
    icon: '🏪',
    live: 'https://nexa-store-imdadur765s-projects.vercel.app/',
    github: 'https://github.com/imdadur765',
    featured: true,
  },
  {
    id: 3,
    title: 'Real-time Chat App',
    category: 'web',
    label: 'Network / Socket.io',
    desc: 'WebSocket-based chat application with rooms, file sharing, typing indicators and JWT authentication.',
    tags: ['Socket.io', 'React', 'Express'],
    accent: '#FFD93D',
    icon: '💬',
    live: '#',
    github: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Nexa Photo Studio',
    category: 'web',
    label: 'AI Web Tool',
    desc: 'Professional-grade multi-tool web app with AI background removal, image cropping, and enhancement features.',
    tags: ['React', 'AI/ML', 'Canvas API'],
    accent: '#A78BFA',
    icon: '📸',
    live: '#',
    github: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Audio X',
    category: 'mobile',
    label: 'Flutter Audio App',
    desc: 'High-performance audio player application for Android. Features custom Equalizer, playlists, and seamless background playback.',
    tags: ['Flutter', 'Audio API', 'Dart'],
    accent: '#6BCB77',
    icon: '🎵',
    live: 'https://portfolio-gules-xi-mn2vh6cext.vercel.app/apks/audio-x-arm64-v8a.apk',
    github: 'https://github.com/imdadur765',
    featured: true,
  },
  {
    id: 6,
    title: 'Photo Logic Pro',
    category: 'mobile',
    label: 'AI Mobile Tool',
    desc: 'AI-powered image enhancement tool for professional photographers built with Flutter and TensorFlow Lite.',
    tags: ['Flutter', 'TensorFlow Lite', 'Dart'],
    accent: '#FF6B6B',
    icon: '🤖',
    live: '#',
    github: '#',
    featured: false,
  },
];

const FILTERS = [
  { key: 'all', label: 'All Projects', icon: <Layers size={14} /> },
  { key: 'web', label: 'Web', icon: <Globe size={14} /> },
  { key: 'mobile', label: 'Mobile', icon: <Smartphone size={14} /> },
];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="proj-page">
      {/* Background blobs */}
      <div className="proj-bg">
        <div className="proj-blob pb1" />
        <div className="proj-blob pb2" />
      </div>

      <div className="proj-inner">

        {/* ── Header ───────────────────────────── */}
        <Motion.div
          className="proj-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="proj-eyebrow">// Portfolio</span>
          <h1 className="proj-title">
            Selected <span className="proj-title-accent">Projects</span>
          </h1>
          <p className="proj-subtitle">
            A curated collection of web &amp; mobile builds — each forged with precision.
          </p>
        </Motion.div>

        {/* ── Filter Tabs ───────────────────────── */}
        <Motion.div
          className="proj-filters"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`proj-filter-btn ${activeFilter === f.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.icon}
              {f.label}
            </button>
          ))}
        </Motion.div>

        {/* ── Project Grid ─────────────────────── */}
        <div className="proj-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <Motion.article
                key={project.id}
                layout
                className={`proj-card ${project.featured ? 'proj-card--featured' : ''}`}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                style={{ '--card-accent': project.accent }}
              >
                {/* Glow accent */}
                <div className="proj-card-glow" />

                {/* Top row */}
                <div className="proj-card-top">
                  <span className="proj-card-icon">{project.icon}</span>
                  <span className="proj-card-label">{project.label}</span>
                  {project.featured && (
                    <span className="proj-card-badge">Featured</span>
                  )}
                </div>

                {/* Title + desc */}
                <h2 className="proj-card-title">{project.title}</h2>
                <p className="proj-card-desc">{project.desc}</p>

                {/* Tags */}
                <div className="proj-card-tags">
                  {project.tags.map(t => (
                    <span key={t} className="proj-tag">{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="proj-card-links">
                  <a
                    href={project.github}
                    className="proj-link proj-link--ghost"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="proj-link proj-link--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live <SwordArrow size={18} className="proj-sword" />
                  </a>
                </div>

                {/* Border accent bottom */}
                <div className="proj-card-stripe" />
              </Motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* ── count ─────────────────────────────── */}
        <Motion.p
          className="proj-count"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Showing {filtered.length} of {PROJECTS.length} projects
        </Motion.p>

      </div>
    </div>
  );
};

export default ProjectsPage;