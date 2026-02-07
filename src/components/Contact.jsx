import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, ArrowUpRight, Send, MessageSquare, PhoneCall, Heart } from 'lucide-react';
import AnimatedCharacter from './AnimatedCharacter';

const Contact = () => {
    const easeOut = [0.19, 1.0, 0.22, 1.0];
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const contactLinks = [
        {
            icon: Mail,
            label: "Email",
            value: "adityalawate64@gmail.com",
            href: "mailto:adityalawate64@gmail.com"
        },
        {
            icon: Phone,
            label: "Phone",
            value: "+91 96898 36464 / 81809 94839",
            href: "tel:+919689836464"
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            value: "adityalawate",
            href: "https://www.linkedin.com/in/adityalawate"
        },
        {
            icon: Github,
            label: "GitHub",
            value: "adityalawate",
            href: "https://github.com/adityalawate"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: easeOut }}
            style={{
                minHeight: '100vh',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: '0 4rem',
                paddingTop: '18vh',
                backgroundColor: 'var(--color-bg-light)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <AnimatedCharacter
                Icon={Send}
                imageUrl="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/mail_2_tqip.svg"
                imageWidth={280}
                iconSize={200}
                iconStyle={{ top: '15vh', left: '15%' }}
                imageStyle={{ bottom: '20vh', right: '15%' }}
                floatingIcons={[
                    { Icon: Mail, size: 45, style: { top: '35%', left: '25%' } },
                    { Icon: MessageSquare, size: 40, style: { bottom: '25%', left: '30%' } },
                    { Icon: Send, size: 35, style: { top: '15%', right: '20%' } },
                    { Icon: PhoneCall, size: 30, style: { bottom: '40%', right: '15%' } },
                    { Icon: Heart, size: 40, style: { top: '50%', right: '35%' } }
                ]}
            />
            {/* Page Title */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
                style={{
                    color: 'var(--color-text-primary)',
                    fontSize: 'clamp(3rem, 7vw, 5rem)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    marginBottom: '0',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    zIndex: 10
                }}
            >
                Contact
            </motion.h1>

            {/* Typographic Link List */}
            <div style={{
                width: '100%',
                maxWidth: '700px',
                marginTop: '13rem',
                display: 'flex',
                flexDirection: 'column'
            }}>
                {contactLinks.map((link, index) => {
                    const Icon = link.icon;
                    const isHovered = hoveredIndex === index;
                    const isAnyHovered = hoveredIndex !== null;

                    return (
                        <motion.a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.7,
                                ease: easeOut,
                                delay: 0.4 + (index * 0.1)
                            }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '0.7rem 0',
                                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                                textDecoration: 'none',
                                transition: 'all 0.4s ease',
                                opacity: isAnyHovered && !isHovered ? 0.3 : 1,
                                filter: isAnyHovered && !isHovered ? 'blur(2px)' : 'none',
                                position: 'relative'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{
                                    fontSize: '0.65rem',
                                    color: 'var(--color-text-secondary)',
                                    opacity: 0.4,
                                    fontFamily: 'monospace',
                                    width: '18px'
                                }}>
                                    0{index + 1}
                                </span>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{
                                        fontSize: '0.55rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.15em',
                                        color: 'var(--color-text-secondary)',
                                        opacity: 0.6,
                                        marginBottom: '0.1rem'
                                    }}>
                                        {link.label}
                                    </span>
                                    <span style={{
                                        fontSize: 'clamp(0.9rem, 1.8vw, 1.3rem)',
                                        fontWeight: '500',
                                        color: isHovered ? 'var(--color-text-primary)' : 'var(--color-text-secondary)',
                                        transition: 'color 0.3s ease'
                                    }}>
                                        {link.value}
                                    </span>
                                </div>
                            </div>

                            <motion.div
                                animate={{
                                    rotate: isHovered ? 45 : 0,
                                    scale: isHovered ? 1.1 : 1,
                                    x: isHovered ? -5 : 0
                                }}
                                style={{ color: 'var(--color-text-secondary)', opacity: 0.4 }}
                            >
                                <ArrowUpRight size={18} strokeWidth={1.5} />
                            </motion.div>

                            {/* Hover reveal icon - background */}
                            <AnimatePresence>
                                {isHovered && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                                        animate={{ opacity: 0.1, scale: 1, x: 20 }}
                                        exit={{ opacity: 0, scale: 0.8, x: 50 }}
                                        style={{
                                            position: 'absolute',
                                            right: '10%',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            zIndex: -1
                                        }}
                                    >
                                        <Icon size={120} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.a>
                    );
                })}
            </div>

            {/* Bottom Credit */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                style={{
                    position: 'absolute',
                    bottom: '4rem',
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.3em',
                    color: 'var(--color-text-secondary)',
                    opacity: 0.2
                }}
            >

            </motion.div>
        </motion.div>
    );
};

export default Contact;
