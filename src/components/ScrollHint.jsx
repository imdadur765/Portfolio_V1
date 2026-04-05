import { motion as Motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const ScrollHint = () => {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);
  
  // Fade out as the user scrolls down (base motion)
  const scrollOpacity = useTransform(scrollY, [0, 50], [1, 0]);

  useEffect(() => {
    // Auto-hide after 4 seconds
    const timer = setTimeout(() => setIsVisible(false), 4000);
    
    // Hide immediately on any scroll
    const handleScroll = () => {
      if (window.scrollY > 20) setIsVisible(false);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <Motion.div 
          className="scroll-hint-wrapper"
          style={{ opacity: scrollOpacity }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.4 } }}
          transition={{ duration: 0.8 }}
        >
          <div className="scroll-hint-content">
            <Motion.svg 
              width="40" 
              height="40" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="scroll-hand-svg"
              animate={{ y: [0, -15, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
              <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
              <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
              <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
            </Motion.svg>
            <span className="scroll-text">Scroll to Sync</span>
          </div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollHint;
