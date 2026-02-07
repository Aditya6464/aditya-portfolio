import React from 'react';
import { motion } from 'framer-motion';

const Summary = () => {
    const easeOut = [0.19, 1.0, 0.22, 1.0];

    return (
        <section id="summary" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6rem 4rem',
            backgroundColor: 'var(--color-bg-light)'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easeOut }}
                viewport={{ once: false, amount: 0.4 }}
                style={{
                    maxWidth: '800px',
                    textAlign: 'center'
                }}
            >
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: easeOut, delay: 0.2 }}
                    viewport={{ once: false, amount: 0.4 }}
                    style={{
                        marginBottom: '3rem',
                        color: 'var(--color-text-primary)'
                    }}
                >
                    About
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: easeOut, delay: 0.4 }}
                    viewport={{ once: false, amount: 0.4 }}
                    style={{
                        fontSize: '1.25rem',
                        lineHeight: '2',
                        color: 'var(--color-text-secondary)',
                        letterSpacing: '0.01em'
                    }}
                >
                    A seasoned Python Developer with 2.5 years of experience in building
                    scalable web applications using Django and Flask. Strong expertise in
                    backend development, APIs, databases, and seamless frontend integration.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default Summary;
