import React from 'react';

const SwordArrow = ({ size = 20, className = '', rotate = 0 }) => {
  return (
    <img 
      src="/medieval-sword-arrow.png"
      alt="Sword Arrow"
      width={size} 
      height={size} 
      className={`sword-arrow ${className}`}
      style={{ 
        transform: `rotate(${rotate}deg)`, 
        display: 'inline-block',
        verticalAlign: 'middle',
        transition: 'all 0.3s ease',
        objectFit: 'contain'
      }}
    />
  );
};

export default SwordArrow;
