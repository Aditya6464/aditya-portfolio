import React from 'react';
import { motion } from 'framer-motion';

const Biography = () => {
    const easeOut = [0.19, 1.0, 0.22, 1.0];

    return (
        <section id="biography" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '6rem 4rem',
            backgroundColor: 'var(--color-bg-dark)',
            color: 'var(--color-bg-light)'
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
                        color: 'var(--color-bg-light)'
                    }}
                >
                    Biography
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: easeOut, delay: 0.4 }}
                    viewport={{ once: false, amount: 0.4 }}
                    style={{
                        fontSize: '1.25rem',
                        lineHeight: '2',
                        color: 'rgba(250, 250, 250, 0.7)',
                        letterSpacing: '0.01em'
                    }}
                >
                    With 2.5 years in IT, specializing in designing, developing, and
                    implementing web applications using Python, Django, and Flask. Strong
                    SDLC knowledge and hands-on experience across backend, frontend,
                    databases, and API testing.
                </motion.p>
            </motion.div>
        </section>
    );
};

export default Biography;
