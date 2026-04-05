/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const AnimusGlitch = () => {
  const location = useLocation();
  const [isGlitching, setIsGlitching] = useState(false);
  const [phase, setPhase] = useState(0); // 0=idle, 1=flash-in, 2=blocks, 3=fade-out
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    // === PHASE 1: big flash-in ===
    setPhase(1);
    setIsGlitching(true);

    // generate 35 varied blocks — horizontal bars, wide slabs, thin scanlines
    const newBlocks = Array.from({ length: 35 }).map((_, i) => {
      const isBig = i < 6; // first 6 are large slabs
      const isThin = i > 26; // last 8 are thin scanlines
      const top = Math.random() * 100;
      const left = isBig ? 0 : Math.random() * 80;
      const width = isBig
        ? 100 + Math.random() * 400
        : isThin
        ? 60 + Math.random() * 300
        : Math.random() * 250 + 80;
      const height = isBig
        ? Math.random() * 12 + 4
        : isThin
        ? Math.random() * 2 + 0.5
        : Math.random() * 6 + 1;
      const delay = Math.random() * 0.15;
      const duration = isBig ? Math.random() * 0.15 + 0.12 : Math.random() * 0.25 + 0.08;
      const r = Math.random();
      const background =
        r > 0.7 ? '#c62828' : r > 0.4 ? '#8b0000' : r > 0.2 ? '#ff1a1a' : '#300000';
      const origin = Math.random() > 0.5 ? 'left' : 'right';
      const opacity = isThin ? 0.5 + Math.random() * 0.5 : 0.8 + Math.random() * 0.2;
      return { top, left, width, height, delay, duration, background, origin, opacity };
    });
    setBlocks(newBlocks);

    // === PHASE 2 → 3: switch to blocks, then fade ===
    const t1 = setTimeout(() => setPhase(2), 60);
    const t2 = setTimeout(() => setPhase(3), 350);
    const t3 = setTimeout(() => {
      setIsGlitching(false);
      setPhase(0);
    }, 650);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [location.pathname]);

  if (!isGlitching) return null;

  return (
    <div
      className="animus-glitch-overlay"
      style={{ opacity: phase === 3 ? 0 : 1, transition: phase === 3 ? 'opacity 0.3s ease' : 'none' }}
    >
      {/* Full-screen crimson flash — phase 1 only */}
      {phase === 1 && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(140,0,0,0.18)',
            animation: 'glitch-flash-in 0.06s ease-out forwards',
          }}
        />
      )}

      {/* Scanline sweep */}
      <div className="glitch-scanline-sweep" />

      {/* Corner HUD flickers */}
      <div className="glitch-hud-corner top-left-hud" />
      <div className="glitch-hud-corner top-right-hud" />

      {/* Main blocks */}
      {blocks.map((b, i) => (
        <div
          key={i}
          className="glitch-block"
          style={{
            top: `${b.top}%`,
            left: `${b.left}px`,
            width: `${b.width}px`,
            height: `${b.height}px`,
            background: b.background,
            transformOrigin: b.origin,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
            opacity: b.opacity,
            boxShadow: `0 0 8px ${b.background}, 0 0 20px ${b.background}44`,
          }}
        />
      ))}

      {/* Sync text overlay */}
      <div className="glitch-sync-text">ANIMUS_SYNC</div>
    </div>
  );
};

export default AnimusGlitch;
