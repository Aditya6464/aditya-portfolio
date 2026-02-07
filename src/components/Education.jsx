import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Book, Library, School, Medal } from 'lucide-react';
import AnimatedCharacter from './AnimatedCharacter';

const Education = () => {
    const easeOut = [0.19, 1.0, 0.22, 1.0];

    const education = [
        {
            year: "2022",
            degree: "Bachelor of Engineering in Computer Science",
            institution: "Savitribai Phule Pune University",
            period: "2018 – 2022"
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
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: '0 4rem',
                paddingTop: '25vh',
                backgroundColor: 'var(--color-bg-light)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <AnimatedCharacter
                Icon={GraduationCap}
                imageUrl="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/studying_s3l7.svg"
                imageWidth={280}
                iconSize={180}
                iconStyle={{ top: '30vh', right: '10%' }}
                imageStyle={{ bottom: '15vh', left: '8%' }}
                floatingIcons={[
                    { Icon: Book, size: 45, style: { top: '35%', left: '25%' } },
                    { Icon: GraduationCap, size: 40, style: { bottom: '25%', left: '30%' } },
                    { Icon: School, size: 35, style: { top: '15%', right: '20%' } },
                    { Icon: Library, size: 30, style: { bottom: '40%', right: '15%' } },
                    { Icon: Medal, size: 40, style: { top: '50%', right: '35%' } }
                ]}
            />
            {/* Page Title */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
                style={{
                    color: 'var(--color-text-primary)',
                    fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    marginBottom: '0',
                    textAlign: 'center',
                    textTransform: 'uppercase'
                }}
            >
                Education
            </motion.h1>

            {/* Content */}
            <div style={{ maxWidth: '850px', width: '100%', marginTop: '8rem' }}>
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: easeOut,
                            delay: 0.4
                        }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '90px 1fr',
                            gap: '2.5rem'
                        }}
                    >
                        <div style={{
                            fontSize: '0.7rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            color: 'var(--color-text-secondary)',
                            paddingTop: '0.25rem'
                        }}>
                            {edu.year}
                        </div>

                        <div>
                            <h3 style={{
                                marginBottom: '0.4rem',
                                color: 'var(--color-text-primary)',
                                fontSize: '1.4rem',
                                fontWeight: '600'
                            }}>
                                {edu.degree}
                            </h3>
                            <p style={{
                                fontSize: '1rem',
                                marginBottom: '0.3rem',
                                color: 'var(--color-text-secondary)'
                            }}>
                                {edu.institution}
                            </p>
                            <p style={{
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'var(--color-text-secondary)',
                                opacity: 0.7
                            }}>
                                {edu.period}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Education;
