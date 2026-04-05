/* eslint-disable */
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, LayoutGroup } from 'framer-motion';

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { path: '/web', icon: '/web.png', label: 'Web' },
    { path: '/apps', icon: '/phone-person.png', label: 'Apps' },
    { path: '/', icon: '/assassins-creed-logo.png', label: 'Home', center: true },
    { path: '/projects', icon: '/project.png', label: 'Work' },
    { path: '/contact', icon: '/contact.png', label: 'Mail' },
  ];

  return (
    <nav className="nav-island-wrapper">
      <div className="nav-island-container">
        <LayoutGroup>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `nav-item ${item.center ? 'nav-center-fab' : ''} ${isActive ? 'active' : ''}`
                }
              >
                {isActive && !item.center && (
                  <motion.div 
                    layoutId="sliding-blob"
                    className="nav-active-blob"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <motion.div 
                  className="nav-icon-wrapper"
                  animate={{ 
                    y: isActive ? (item.center ? -5 : -4) : 0,
                    scale: isActive ? 1.15 : 1
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 12 }}
                >
                  {typeof item.icon === 'string' ? (
                    <img 
                      src={item.icon} 
                      alt={item.label} 
                      className={`nav-icon-img ${item.center ? 'nav-center-icon' : ''}`} 
                    />
                  ) : (
                    item.icon
                  )}
                  {isActive && !item.center && (
                    <motion.div layoutId="nav-dot" className="nav-dot-indicator" />
                  )}
                </motion.div>
                
                {!item.center && (
                  <span className="nav-label">{item.label}</span>
                )}
              </NavLink>
            );
          })}
        </LayoutGroup>
      </div>
    </nav>
  );
};

export default BottomNav;