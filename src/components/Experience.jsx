import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Award, TrendingUp, BarChart, UserCheck } from 'lucide-react';
import AnimatedCharacter from './AnimatedCharacter';

const Experience = () => {
    const easeOut = [0.19, 1.0, 0.22, 1.0];

    const experiences = [
        {
            year: "2024",
            role: "Software Engineer",
            company: "ADF data science",
            period: "2024 – Present"
        },
        {
            year: "2024",
            role: "Software Engineer",
            company: "March Works Pvt Ltd",
            period: "2024"
        },
        {
            year: "2022",
            role: "Python Application Developer",
            company: "Vision Techno Services Pvt Ltd",
            period: "2022 – 2024"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: easeOut }}
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: '0 4rem',
                paddingTop: '8vh',
                backgroundColor: 'var(--color-bg-light)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <AnimatedCharacter
                Icon={Briefcase}
                imageUrl="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/co-working_825n.svg"
                imageWidth={250}
                iconSize={150}
                iconStyle={{ top: '15vh', left: '6%' }}
                imageStyle={{ bottom: '10vh', right: '4%' }}
                floatingIcons={[
                    { Icon: Award, size: 40, style: { top: '30%', left: '22%' } },
                    { Icon: TrendingUp, size: 35, style: { bottom: '20%', left: '28%' } },
                    { Icon: Briefcase, size: 30, style: { top: '12%', right: '18%' } },
                    { Icon: BarChart, size: 25, style: { bottom: '35%', right: '12%' } },
                    { Icon: UserCheck, size: 35, style: { top: '45%', right: '30%' } }
                ]}
            />
            {/* Page Title */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
                style={{
                    color: 'var(--color-text-primary)',
                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    marginBottom: '0',
                    textAlign: 'center',
                    textTransform: 'uppercase'
                }}
            >
                Experience
            </motion.h1>

            {/* Content Container */}
            <div style={{
                maxWidth: '1200px',
                width: '100%',
                marginTop: '45vh', // Pushed significantly lower to clear central navigation
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem'
            }}>
                {/* First Row: 2 Items */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '4rem',
                    width: '100%'
                }}>
                    {experiences.slice(0, 2).map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: easeOut,
                                delay: 0.5 + (index * 0.15)
                            }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '80px 1fr',
                                gap: '1.5rem',
                                paddingBottom: '1rem',
                                borderBottom: '1px solid var(--color-border)',
                                flex: '1 1 350px',
                                maxWidth: '450px'
                            }}
                        >
                            <div style={{
                                fontSize: '0.7rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'var(--color-text-secondary)',
                                paddingTop: '0.25rem'
                            }}>
                                {exp.year}
                            </div>

                            <div>
                                <h3 style={{
                                    marginBottom: '0.4rem',
                                    color: 'var(--color-text-primary)',
                                    fontSize: '1.4rem',
                                    fontWeight: '600'
                                }}>
                                    {exp.role}
                                </h3>
                                <p style={{
                                    fontSize: '1rem',
                                    marginBottom: '0.3rem',
                                    color: 'var(--color-text-secondary)'
                                }}>
                                    {exp.company}
                                </p>
                                <p style={{
                                    fontSize: '0.75rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: 'var(--color-text-secondary)',
                                    opacity: 0.7
                                }}>
                                    {exp.period}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Second Row: 1 Item (Centered) */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%'
                }}>
                    {experiences.slice(2, 3).map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: easeOut,
                                delay: 0.8
                            }}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '80px 1fr',
                                gap: '1.5rem',
                                paddingBottom: '1rem',
                                borderBottom: '1px solid var(--color-border)',
                                width: '100%',
                                maxWidth: '450px'
                            }}
                        >
                            <div style={{
                                fontSize: '0.7rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                color: 'var(--color-text-secondary)',
                                paddingTop: '0.25rem'
                            }}>
                                {exp.year}
                            </div>

                            <div>
                                <h3 style={{
                                    marginBottom: '0.4rem',
                                    color: 'var(--color-text-primary)',
                                    fontSize: '1.4rem',
                                    fontWeight: '600'
                                }}>
                                    {exp.role}
                                </h3>
                                <p style={{
                                    fontSize: '1rem',
                                    marginBottom: '0.3rem',
                                    color: 'var(--color-text-secondary)'
                                }}>
                                    {exp.company}
                                </p>
                                <p style={{
                                    fontSize: '0.75rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: 'var(--color-text-secondary)',
                                    opacity: 0.7
                                }}>
                                    {exp.period}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Experience;
