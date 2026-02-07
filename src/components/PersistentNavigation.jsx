import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PersistentNavigation = ({ onNavigate, currentPage }) => {
    const [hoveredSection, setHoveredSection] = useState(null);

    const navItems = [
        { number: '00', name: 'Home', id: 'home' },
        { number: '01', name: 'About', id: 'about' },
        { number: '02', name: 'Biography', id: 'biography' },
        { number: '03', name: 'Experience', id: 'experience' },
        { number: '04', name: 'Skills', id: 'skills' },
        { number: '05', name: 'Tools', id: 'tools' },
        { number: '06', name: 'Education', id: 'education' },
        { number: '07', name: 'Contact', id: 'contact' },
    ];

    return (
        <>
            {/* Hover background text preview */}
            <AnimatePresence>
                {hoveredSection && (
                    <motion.div
                        key={hoveredSection}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.05 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            fontSize: 'clamp(6rem, 15vw, 12rem)',
                            fontFamily: 'var(--font-display)',
                            fontWeight: '700',
                            color: 'var(--color-text-primary)',
                            pointerEvents: 'none',
                            userSelect: 'none',
                            letterSpacing: '-0.02em',
                            whiteSpace: 'nowrap',
                            zIndex: 1,
                            textTransform: 'uppercase'
                        }}
                    >
                        {hoveredSection}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Navigation */}
            <nav style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '2rem',
                flexWrap: 'wrap',
                padding: '3rem 0 2rem 0',
                position: 'relative',
                zIndex: 10
            }}>
                {navItems.map((item, i) => (
                    <React.Fragment key={item.id}>
                        <button
                            onClick={() => onNavigate(item.id, item.name)}
                            onMouseEnter={() => setHoveredSection(item.name)}
                            onMouseLeave={() => setHoveredSection(null)}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '0.7rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                color: currentPage === item.id ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                                fontFamily: 'var(--font-body)',
                                padding: '0.5rem 0',
                                transition: 'all 0.3s ease',
                                fontWeight: hoveredSection === item.name || currentPage === item.id ? '600' : '400'
                            }}
                            onMouseOver={(e) => {
                                if (hoveredSection === item.name) {
                                    e.target.style.color = 'var(--color-text-primary)';
                                }
                            }}
                            onMouseOut={(e) => {
                                if (currentPage !== item.id) {
                                    e.target.style.color = 'var(--color-text-secondary)';
                                }
                            }}
                        >
                            <span style={{ opacity: 0.4, marginRight: '0.4rem', fontSize: '0.65rem' }}>
                                {item.number}
                            </span>
                            {item.name}
                        </button>

                        {i < navItems.length - 1 && (
                            <span style={{
                                color: 'var(--color-text-secondary)',
                                opacity: 0.3,
                                fontSize: '0.5rem'
                            }}>
                                ·
                            </span>
                        )}
                    </React.Fragment>
                ))}
            </nav>
        </>
    );
};

export default PersistentNavigation;
