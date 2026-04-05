import { motion as Motion } from 'framer-motion';
import Skills from '../components/Skills';

const SkillsPage = () => {
  return (
    <div className="field-page immersive-skills">
      {/* Background Blobs */}
      <div className="proj-bg">
        <div className="proj-blob pb1" style={{ background: '#c62828' }} />
        <div className="proj-blob pb2" style={{ background: '#ff4d2e' }} />
      </div>

      <header className="page-header container">
        <Motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="proj-eyebrow">// Expertise_Matrix</span>
          <h1 className="section-title">Technical <span className="proj-title-accent">Skills</span></h1>
          <p className="section-subtitle">A curated matrix of the technologies and frameworks used to forge high-performance digital tools.</p>
        </Motion.div>
      </header>

      <main className="container page-main-content">
        <Skills />
      </main>
    </div>
  );
};

export default SkillsPage;