import React from 'react';
import { motion } from 'framer-motion';

const Employment = () => {
    const history = [
        {
            role: "Software Engineer",
            company: "March Works Pvt Ltd",
            duration: "2024 – Present",
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

    return (
        <section id="employment" style={{
            minHeight: '100vh',
            padding: '4rem 2rem',
            backgroundColor: 'var(--color-secondary)',
            color: 'var(--color-primary)'
        }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', textAlign: 'center', marginBottom: '4rem' }}>Employment History</h2>

            <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
                {/* Center Line */}
                <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'var(--color-primary)', transform: 'translateX(-50%)' }} />

                {history.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        style={{
                            display: 'flex',
                            justifyContent: index % 2 === 0 ? 'flex-end' : 'flex-start',
                            marginBottom: '4rem',
                            position: 'relative'
                        }}
                    >
                        {/* Dot on timeline */}
                        <div style={{
                            position: 'absolute',
                            left: '50%',
                            top: '20px',
                            width: '20px',
                            height: '20px',
                            background: 'var(--color-primary)',
                            borderRadius: '50%',
                            transform: 'translateX(-50%)',
                            zIndex: 2
                        }} />

                        <div style={{
                            width: '45%',
                            background: 'rgba(91, 14, 20, 0.05)',
                            padding: '2rem',
                            borderRadius: '8px',
                            border: '1px solid var(--color-primary)'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{item.role}</h3>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{item.company} | {item.duration}</h4>
                            <p><strong>Project:</strong> {item.project}</p>
                            <p className="mt-2 text-sm">{item.desc}</p>
                            <p className="mt-2 text-sm"><strong>Tech:</strong> {item.tech}</p>
                            <ul style={{ listStyle: 'disc', marginLeft: '1.5rem', marginTop: '1rem' }}>
                                {item.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(91, 14, 20)" }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        padding: '1rem 2rem',
                        fontSize: '1.2rem',
                        backgroundColor: 'var(--color-primary)',
                        color: 'var(--color-secondary)',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-body)'
                    }}
                    onClick={() => {
                        // Check if resume exists, else alert
                        const link = document.createElement('a');
                        link.href = "/resume.pdf"; // Assumed path
                        link.download = "Aditya_Lawate_Resume.pdf";
                        link.click();
                    }}
                >
                    ⬇ Download Resume
                </motion.button>
            </div>

        </section>
    );
};

export default Employment;
