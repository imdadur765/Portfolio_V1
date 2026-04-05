/* eslint-disable */
import React, { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

const DNAScrollBar = () => {
  const [progress, setProgress] = useState(0);
  const location = useLocation();

  const setupScroll = useCallback(() => {
    const scrollContainer = document.querySelector('.content-area');
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }

      let scrollRatio = scrollContainer.scrollTop / scrollHeight;

      // Force 100% if extremely close to bottom
      if (scrollHeight - scrollContainer.scrollTop <= 2.5) {
        scrollRatio = 1;
      }

      setProgress(Math.max(0, Math.min(1, scrollRatio)));
    };

    // Small delay to allow route-change DOM re-render
    const timer = setTimeout(() => {
      scrollContainer.scrollTop = 0;
      handleScroll();
      scrollContainer.addEventListener('scroll', handleScroll, { passive: true });
    }, 150);

    return () => {
      clearTimeout(timer);
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  useEffect(() => {
    setProgress(0);
  }, [location.pathname]);

  useEffect(() => {
    const cleanup = setupScroll();
    return cleanup;
  }, [setupScroll]);

  const numStrands = 40;
  const activeStrands = Math.ceil(progress * numStrands);

  if (location.pathname !== '/') return null;

  return (
    <div className="dna-scroll-wrapper">
      <div className="dna-sync-text">DNA</div>
      <div className="dna-track-container dna-helix">
        {Array.from({ length: numStrands }).map((_, i) => (
          <div
            key={i}
            className={`dna-strand ${i < activeStrands ? 'synced' : ''}`}
            style={{ animationDelay: `${-i * 0.15}s` }}
          >
            <div className="dna-dot left" />
            <div className="dna-link" />
            <div className="dna-dot right" />
          </div>
        ))}
      </div>
      <div className="dna-sync-percent">{Math.round(progress * 100)}%</div>
    </div>
  );
};

export default DNAScrollBar;
