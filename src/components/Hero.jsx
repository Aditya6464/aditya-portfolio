import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = ({ onNavigate }) => {
    const [hoveredSection, setHoveredSection] = useState(null);
    const easeOut = [0.19, 1.0, 0.22, 1.0];

    const navItems = [
        { number: '01', name: 'About', id: 'summary' },
        { number: '02', name: 'Experience', id: 'experience' },
        { number: '03', name: 'Skills', id: 'skills' },
        { number: '04', name: 'Tools', id: 'tools' },
        { number: '05', name: 'Education', id: 'education' },
        { number: '06', name: 'Contact', id: 'contact' },
    ];

    const handleClick = (id) => {
        if (onNavigate) {
            onNavigate(id);
        }
    };

    return (
        <section id="home" style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '6rem 4rem',
            backgroundColor: 'var(--color-bg-light)',
            position: 'relative'
        }}>

            {/* Hover background text preview */}
            <AnimatePresence>
                {hoveredSection && (
                    <motion.div
                        key={hoveredSection}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.08 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        style={{
                            position: 'absolute',
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
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {hoveredSection.toUpperCase()}
                    </motion.div>
                )}
            </AnimatePresence>

            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                width: '100%',
                textAlign: 'center',
                position: 'relative',
                zIndex: 2
            }}>
                {/* Name - Large, expressive typography */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: easeOut, delay: 0.3 }}
                    style={{
                        color: 'var(--color-text-primary)',
                        marginBottom: '4rem',
                        fontSize: 'clamp(4rem, 12vw, 8rem)',
                        letterSpacing: '-0.03em',
                        lineHeight: 0.95
                    }}
                >
                    Aditya Lawate
                </motion.h1>

                {/* Mid-page editorial navigation */}
                <motion.nav
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.9, ease: easeOut, delay: 0.9 }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '3rem',
                        marginTop: '3rem',
                        flexWrap: 'wrap'
                    }}
                >
                    {navItems.map((item, i) => (
                        <React.Fragment key={item.id}>
                            <motion.button
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 + (i * 0.08) }}
                                onClick={() => handleClick(item.id)}
                                onMouseEnter={() => setHoveredSection(item.name)}
                                onMouseLeave={() => setHoveredSection(null)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '0.75rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.15em',
                                    color: 'var(--color-text-secondary)',
                                    fontFamily: 'var(--font-body)',
                                    padding: '0.5rem 0',
                                    transition: 'all 0.3s ease',
                                    fontWeight: hoveredSection === item.name ? '600' : '400'
                                }}
                                onMouseOver={(e) => {
                                    if (hoveredSection === item.name) {
                                        e.target.style.color = 'var(--color-text-primary)';
                                    }
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.color = 'var(--color-text-secondary)';
                                }}
                            >
                                <span style={{ opacity: 0.5, marginRight: '0.5rem' }}>
                                    {item.number}
                                </span>
                                {item.name}
                            </motion.button>

                            {/* Separator dot */}
                            {i < navItems.length - 1 && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 1.2 + (i * 0.08) }}
                                    style={{
                                        color: 'var(--color-text-secondary)',
                                        opacity: 0.3,
                                        fontSize: '0.5rem'
                                    }}
                                >
                                    ·
                                </motion.span>
                            )}
                        </React.Fragment>
                    ))}
                </motion.nav>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
                style={{
                    position: 'absolute',
                    bottom: '4rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: 'var(--color-text-secondary)'
                }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    style={{
                        width: '1px',
                        height: '40px',
                        backgroundColor: 'var(--color-text-secondary)'
                    }}
                />
                <span>Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
