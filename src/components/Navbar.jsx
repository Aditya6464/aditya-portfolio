import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = ({ onNavigate, currentSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 100);
    });

    const scrollToSection = (id) => {
        // Trigger cursor loading animation
        if (onNavigate) {
            onNavigate(id);
        }

        // Smooth scroll to section
        setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 1500); // Match cursor loading duration
    };

    const navLinks = [
        { name: 'About', id: 'summary' },
        { name: 'Experience', id: 'experience' },
        { name: 'Skills', id: 'skills' },
        { name: 'Tools', id: 'tools' },
        { name: 'Education', id: 'education' },
        { name: 'Contact', id: 'contact' },
    ];

    return (
        <motion.nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                padding: '2rem 4rem',
                background: isScrolled ? 'rgba(250, 250, 250, 0.95)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                borderBottom: isScrolled ? '1px solid var(--color-border)' : 'none',
                transition: 'all 0.3s cubic-bezier(0.19, 1.0, 0.22, 1.0)',
            }}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.19, 1.0, 0.22, 1.0], delay: 0.5 }}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                {/* Logo */}
                <motion.div
                    onClick={() => scrollToSection('home')}
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        color: 'var(--color-text-primary)',
                        letterSpacing: '0.02em'
                    }}
                    whileHover={{
                        opacity: 0.6,
                        transition: { duration: 0.2 }
                    }}
                >
                    AL
                </motion.div>

                {/* Nav links */}
                <ul style={{
                    display: 'flex',
                    gap: '3rem',
                    listStyle: 'none'
                }}>
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={link.id}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: [0.19, 1.0, 0.22, 1.0],
                                delay: 0.7 + (index * 0.08)
                            }}
                        >
                            <button
                                onClick={() => scrollToSection(link.id)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: currentSection === link.id ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.875rem',
                                    cursor: 'pointer',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    padding: '0.5rem 0',
                                    transition: 'color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.color = 'var(--color-text-primary)'}
                                onMouseLeave={(e) => {
                                    if (currentSection !== link.id) {
                                        e.target.style.color = 'var(--color-text-secondary)';
                                    }
                                }}
                            >
                                {link.name}
                            </button>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
