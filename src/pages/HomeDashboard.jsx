import { motion as Motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Smartphone, Sparkles, Zap } from 'lucide-react';
import SwordArrow from '../components/SwordArrow';
import { useRef, useEffect, useState, Suspense } from 'react';
import { useGLTF, OrbitControls, Environment, Float, SpotLight } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import ScrollHint from '../components/ScrollHint';
import * as THREE from 'three';

// Reset Logic Positions
const defaultCameraPos = new THREE.Vector3(0, 0, 5);
const defaultTargetPos = new THREE.Vector3(0, 0, 0);

// Preload assets for instant start
useGLTF.preload('/my-model.glb');

const InteractiveControls = () => {
  const controlsRef = useRef();
  const [isInteracting, setIsInteracting] = useState(false);

  useFrame((state) => {
    if (!isInteracting && controlsRef.current) {
      state.camera.position.lerp(defaultCameraPos, 0.08);
      controlsRef.current.target.lerp(defaultTargetPos, 0.08);
      controlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={true}
      enablePan={true}
      onStart={() => setIsInteracting(true)}
      onEnd={() => setIsInteracting(false)}
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
      minAzimuthAngle={-Math.PI / 2}
      maxAzimuthAngle={Math.PI / 2}
    />
  );
};

const My3DModel = () => {
  const { scene } = useGLTF('/my-model.glb');
  const modelRef = useRef();
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.5;
    }
  });
  return <primitive ref={modelRef} object={scene} scale={3} position={[0, 0, 0]} />;
};

const NeoDashboard = () => {
  const fields = [
    { id: 'expertise', icon: <Zap size={22} />, label: 'Master Expertise', desc: 'Web Systems • Mobile Apps • Full-Stack Architecture', path: '/web' },
    { id: 'about', icon: <Sparkles size={22} />, label: 'About The Assassin', desc: 'Imdadur Rahman • Story • Arsenal • Statistics', path: '/about' },
  ];

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (e) => {
    const x = (e.clientX / (windowSize.width || 1)) * 2 - 1;
    const y = (e.clientY / (windowSize.height || 1)) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const layer1X = useTransform(smoothX, [-1, 1], [-40, 40]);
  const layer1Y = useTransform(smoothY, [-1, 1], [-30, 30]);
  const layer2X = useTransform(smoothX, [-1, 1], [30, -30]);
  const layer2Y = useTransform(smoothY, [-1, 1], [25, -25]);
  const maskX = useTransform(smoothX, [-1, 1], [15, -15]);
  const maskY = useTransform(smoothY, [-1, 1], [10, -10]);

  // Transformed values for HUD
  const hudX = useTransform(mouseX, (v) => `X: ${Math.round(v * 100)}`);
  const hudY = useTransform(mouseY, (v) => `Y: ${Math.round(v * 100)}`);

  // Mouse Glow Position
  const glowX = useTransform(mouseX, (v) => `${(v + 1) * 50}%`);
  const glowY = useTransform(mouseY, (v) => `${(v + 1) * 50}%`);

  const firstName = 'IMDADUR'.split('');
  const lastName = 'RAHMAN'.split('');

  return (
    <div className="neo-dashboard" onMouseMove={handleMouseMove}>
      <Motion.div className="mouse-glow" style={{ left: glowX, top: glowY }} />
      
      <div className="liquid-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="glass-overlay" />
      </div>

      <section className="neo-hero">
        <div className="animus-overlay" />

        {/* Dynamic Side Data Log */}
        <div className="side-data-log">
          <div className="log-entry" style={{ animationDelay: '0s' }}>
            <span className="log-tag">{">>>"}</span>
            <span className="log-msg">Syncing profile_765...</span>
          </div>
          <div className="log-entry" style={{ animationDelay: '1s' }}>
            <span className="log-tag">{">>>"}</span>
            <span className="log-msg">Status: Master_Dev</span>
          </div>
          <div className="log-entry" style={{ animationDelay: '2s' }}>
            <span className="log-tag">{">>>"}</span>
            <span className="log-msg">Objective: Forge_Future</span>
          </div>
          <div className="log-entry" style={{ animationDelay: '3.5s' }}>
            <span className="log-tag">{">>>"}</span>
            <span className="log-msg">Nothing is true.</span>
          </div>
        </div>

        <Motion.div className="shape-layer shape-1" style={{ x: layer1X, y: layer1Y }} />
        <Motion.div className="shape-layer shape-2" style={{ x: layer2X, y: layer2Y }} />

        <Motion.div className="mask-wrapper" style={{ x: maskX, y: maskY }}>
          <div className="mask-container">
            {/* Character-Centric HUD */}
            <div className="character-hud">
              <div className="hud-corner top-l">
                 <div className="hud-corner-flicker" />
                <span className="hud-tag">System_Sync</span>
                <span className="hud-val">Status: 100%</span>
                <span className="hud-val">Auth: Imdad_R</span>
              </div>

              <div className="hud-corner top-r">
                <span className="hud-tag">Visual_Sensor</span>
                <span className="hud-val">OS: Kali-V2</span>
                <span className="hud-val">Lat: 12ms</span>
              </div>

              <div className="hud-corner bot-l">
                <span className="hud-tag">Tracking</span>
                {/* Use Motion.span with content bound to motion value if possible, or just static placeholders if not supported in this version */}
                <span className="hud-val">ACTIVE_SCAN</span>
                <span className="hud-val">SYNC_LOCK</span>
              </div>

              <div className="hud-corner bot-r">
                <span className="hud-tag">Objective</span>
                <span className="hud-val">Forge_Legend</span>
                <span className="hud-val">Mode: Assassin</span>
              </div>
            </div>

            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: true }}>
              <ambientLight intensity={0.6} />
              <pointLight position={[5, 5, 5]} intensity={1} color="#c62828" />
              <pointLight position={[-5, 5, -5]} intensity={0.5} color="#ffffff" />
              <directionalLight position={[0, 10, 0]} intensity={0.8} />
              <SpotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} color="#ffffff" />
              <Suspense fallback={<LoadingPlaceholder />}>
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0}>
                  <My3DModel />
                </Float>
              </Suspense>
              <InteractiveControls />
            </Canvas>
          </div>
        </Motion.div>

        <div className="neo-text-content">
          <Motion.div className="neo-badge liquid-glass" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <img src="/assassins-creed-logo.png" alt="" className="quote-logo" />
            <span className="assassin-quote">Nothing is true • Everything is Permitted</span>
          </Motion.div>
          
          <div className="neo-main-title">
            <h1 className="neo-name">
              <div className="neo-first">
                {firstName.map((char, index) => (
                  <Motion.span 
                    key={index} 
                    className="jump-char"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.3 + index * 0.05,
                      type: 'spring',
                      stiffness: 300,
                      damping: 15
                    }}
                    whileHover={{ y: -15, color: '#c62828', transition: { duration: 0.2 } }}
                  >
                    {char}
                  </Motion.span>
                ))}
              </div>
              <div className="neo-last">
                {lastName.map((char, index) => (
                  <Motion.span 
                    key={index} 
                    className="jump-char"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 0.6 + index * 0.05,
                      type: 'spring',
                      stiffness: 300,
                      damping: 15
                    }}
                    whileHover={{ y: -15, color: '#ffffff', transition: { duration: 0.2 } }}
                  >
                    {char}
                  </Motion.span>
                ))}
              </div>
            </h1>
          </div>

          <div className="neo-role-container">
            <Motion.div 
              className="system-status-bar"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <span className="status-tag">Status: Online</span>
              <span className="status-sep">|</span>
              <span>Full‑Stack Architect</span>
              <span className="status-sep">|</span>
              <span>Flutter Alchemist</span>
              <span className="status-sep">|</span>
              <span className="status-tag">OS: Kali-V2</span>
            </Motion.div>

            <Motion.div 
              className="neo-cta" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 1.1 }}
            >
              <a href="#fields" className="neo-scroll-btn liquid-glass">
                Init_Sequence <SwordArrow size={28} />
              </a>
            </Motion.div>
          </div>
        </div>
        <ScrollHint />
      </section>

      {/* ─── ANIMUS HUD OVERLAY ────────────────────────── */}
      <div className="hud-overlay">
        <div className="hud-noise" />
        <div className="hud-scanline" />
        
        {/* Mouse Tracking Reticle */}
        <Motion.div 
          className="hud-reticle"
          style={{ 
            x: useTransform(mouseX, [-1, 1], [0, windowSize.width - 40]), 
            y: useTransform(mouseY, [-1, 1], [0, windowSize.height - 40]),
            opacity: useTransform(mouseX, [-1, 1], [0.1, 0.4])
          }}
        >
          <div className="reticle-corner top-left" />
          <div className="reticle-corner top-right" />
          <div className="reticle-corner bottom-left" />
          <div className="reticle-corner bottom-right" />
        </Motion.div>
      </div>

      <section id="fields" className="neo-cards-section">
        <div className="cards-container">
          {fields.map((field, idx) => (
            <TiltCard key={field.id} delay={idx * 0.1}>
              <Link to={field.path} className="neo-card liquid-glass-card">
                <div className="card-shine" />
                <div className="card-icon">{field.icon}</div>
                <h3>{field.label}</h3>
                <p>{field.desc}</p>
                <div className="card-footer">
                  <span className="assassin-font accent-text">Enter</span>
                  <SwordArrow size={32} className="card-arrow" />
                </div>
              </Link>
            </TiltCard>
          ))}
        </div>
        <Motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="hire-wrapper">
          <a href="https://www.fiverr.com/imdadur488/" target="_blank" rel="noopener noreferrer" className="neo-hire-btn glow-effect">
            <Sparkles size={12} /> Forge Your Legend on Fiverr <Sparkles size={12} />
          </a>
        </Motion.div>

        {/* ─── HOME FOOTER ──────────────────────────────── */}
        <Motion.div
          className="neo-home-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <span>Made with</span>
          <span className="footer-heart">❤️</span>
          <span>by</span>
          <span className="footer-name">Imdad</span>
        </Motion.div>
      </section>

    </div>
  );
};

const TiltCard = ({ children, delay }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { damping: 20, stiffness: 100 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { damping: 20, stiffness: 100 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <Motion.div 
      ref={cardRef} 
      onMouseMove={handleMouseMove} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => { setIsHovered(false); x.set(0); y.set(0); }} 
      onViewportEnter={() => setIsInView(true)}
      initial={{ opacity: 0, scale: 0.9, y: 30 }} 
      whileInView={{ opacity: 1, scale: 1, y: 0 }} 
      viewport={{ once: true, margin: "-10% 0%" }}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.19, 1, 0.22, 1] 
      }} 
      style={{ 
        perspective: 1000, 
        rotateX: isHovered ? rotateX : 0, 
        rotateY: isHovered ? rotateY : 0, 
        transformStyle: "preserve-3d",
        willChange: "transform"
      }}
    >
      <div className={`card-reveal-line ${isInView ? 'reveal-anim' : ''}`} style={{ transitionDelay: `${delay}s` }} />
      <div className={`neo-card-content-wrapper ${isInView ? 'neo-card-revealed' : ''}`} style={{ transitionDelay: `${delay}s` }}>
        {children}
      </div>
    </Motion.div>
  );
};

const LoadingPlaceholder = () => (
  <mesh position={[0, 0, 0]}>
    <sphereGeometry args={[0.5, 32, 32]} />
    <meshStandardMaterial color="#c62828" emissive="#c62828" emissiveIntensity={2} wireframe />
  </mesh>
);


export default NeoDashboard;