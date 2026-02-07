import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Employment = () => {
    const [activeTab, setActiveTab] = useState(0);
    const easeOut = [0.19, 1.0, 0.22, 1.0];

    const history = [
        {
            role: "Software Engineer",
            company: "ADF data science",
            duration: "2024 – Present",
            project: "Data Science Solutions",
            desc: "Contributing to data-driven decision-making processes and building scalable backend services for data analysis.",
            tech: "Python, Django, Flask, Pandas, NumPy, Git",
            responsibilities: ["Backend development", "Data processing API design", "System optimization", "Collaboration with data scientists"]
        },
        {
            role: "Software Engineer",
            company: "March Works Pvt Ltd",
            duration: "2024",
            project: "Marchtee",
            desc: "Commercial e-commerce application for a clothing brand handling products, carts, discounts, payments, and backstage inventory management.",
            tech: "Flask, SQLAlchemy, Jinja, HTML, CSS, JS, PostgreSQL, Git",
            responsibilities: ["Backend API development", "CRUD operations", "Frontend integration", "Bug fixing and optimization", "Inventory backstage support", "Git version control"]
        },
        {
            role: "Python Application Developer",
            company: "Vision Techno Services Pvt Ltd",
            duration: "2022 – 2024",
            project: "Electronic Medical Record (EMR)",
            desc: "Hospital management system for patient records and workflow optimization.",
            tech: "Django, ORM, MySQL, Git",
            responsibilities: ["Django backend development", "CRUD implementation", "Database management", "Frontend integration", "Performance optimization"]
        }
    ];

    const current = history[activeTab];

    return (
        <motion.section
            id="employment"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0 2rem',
                backgroundColor: 'var(--color-bg-light)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Page Title */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
                style={{
                    color: 'var(--color-text-primary)',
                    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    marginTop: '8vh',
                    marginBottom: '0',
                    textAlign: 'center',
                    textTransform: 'uppercase'
                }}
            >
                Employment
            </motion.h1>

            {/* Container for Tabs and Content - Pushed below Navigation (~40vh) */}
            <div style={{
                maxWidth: '1100px',
                width: '100%',
                marginTop: '35vh',
                display: 'flex',
                flexDirection: 'column',
                gap: '3rem',
                zIndex: 10
            }}>
                {/* Tabs Selector */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2.5rem',
                    flexWrap: 'wrap',
                    borderBottom: '1px solid var(--color-border)',
                    paddingBottom: '1rem'
                }}>
                    {history.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                fontSize: '0.8rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                color: activeTab === index ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                                transition: 'all 0.3s ease',
                                padding: '0.5rem 1rem',
                                position: 'relative',
                                fontWeight: activeTab === index ? '600' : '400'
                            }}
                        >
                            {item.company}
                            {activeTab === index && (
                                <motion.div
                                    layoutId="activeTab"
                                    style={{
                                        position: 'absolute',
                                        bottom: '-1rem',
                                        left: 0,
                                        right: 0,
                                        height: '2px',
                                        background: 'var(--color-text-primary)'
                                    }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Details Content */}
                <div style={{ minHeight: '350px' }}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5, ease: easeOut }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'minmax(200px, 300px) 1fr',
                                gap: '4rem'
                            }}
                        >
                            {/* Left: Metadata */}
                            <div>
                                <h3 style={{
                                    fontSize: '1.8rem',
                                    fontWeight: '600',
                                    color: 'var(--color-text-primary)',
                                    marginBottom: '0.5rem',
                                    lineHeight: 1.2
                                }}>
                                    {current.role}
                                </h3>
                                <p style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--color-text-secondary)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    marginBottom: '2rem'
                                }}>
                                    {current.duration}
                                </p>

                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div>
                                        <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.5rem' }}>Project</p>
                                        <p style={{ fontSize: '1rem', color: 'var(--color-text-primary)' }}>{current.project}</p>
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.5, marginBottom: '0.5rem' }}>Tech Stack</p>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{current.tech}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Responsibilities */}
                            <div>
                                <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.5, marginBottom: '1.5rem' }}>Overview & Responsibilities</p>
                                <p style={{
                                    fontSize: '1.1rem',
                                    lineHeight: 1.6,
                                    color: 'var(--color-text-secondary)',
                                    marginBottom: '2rem'
                                }}>
                                    {current.desc}
                                </p>
                                <ul style={{
                                    listStyle: 'none',
                                    padding: 0,
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '1rem'
                                }}>
                                    {current.responsibilities.map((res, i) => (
                                        <li key={i} style={{
                                            fontSize: '0.9rem',
                                            color: 'var(--color-text-secondary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.7rem'
                                        }}>
                                            <span style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: 'var(--color-text-primary)', opacity: 0.4 }} />
                                            {res}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Resume Button - Aesthetic Placement */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '10vh',
                    right: '5%'
                }}
            >
                <button
                    onClick={() => {
                        const link = document.createElement('a');
                        link.href = "/resume.pdf";
                        link.download = "Aditya_Lawate_Resume.pdf";
                        link.click();
                    }}
                    style={{
                        background: 'none',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-primary)',
                        padding: '1rem 2rem',
                        fontSize: '0.8rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        cursor: 'pointer',
                        borderRadius: '0',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'var(--color-text-primary)';
                        e.target.style.color = 'var(--color-bg-light)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = 'var(--color-text-primary)';
                    }}
                >
                    Download Resume
                </button>
            </motion.div>
        </motion.section>
    );
};

export default Employment;
