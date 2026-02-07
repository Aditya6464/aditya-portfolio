import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Award, TrendingUp, BarChart, UserCheck } from 'lucide-react';
import AnimatedCharacter from './AnimatedCharacter';

const Experience = () => {
    const easeOut = [0.19, 1.0, 0.22, 1.0];

    const experiences = [
        {
            year: "2024",
            role: "Software Engineer",
            company: "March Works Pvt Ltd",
            period: "2024 – Present"
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
                Icon={Briefcase}
                imageUrl="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/co-working_825n.svg"
                imageWidth={280}
                iconSize={180}
                iconStyle={{ top: '20vh', left: '8%' }}
                imageStyle={{ bottom: '15vh', right: '5%' }}
                floatingIcons={[
                    { Icon: Award, size: 45, style: { top: '35%', left: '25%' } },
                    { Icon: TrendingUp, size: 40, style: { bottom: '25%', left: '30%' } },
                    { Icon: Briefcase, size: 35, style: { top: '15%', right: '20%' } },
                    { Icon: BarChart, size: 30, style: { bottom: '40%', right: '15%' } },
                    { Icon: UserCheck, size: 40, style: { top: '50%', right: '35%' } }
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
                Experience
            </motion.h1>

            {/* Content */}
            <div style={{ maxWidth: '850px', width: '100%', marginTop: '8rem' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2rem'
                }}>
                    {experiences.map((exp, index) => (
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
                                gridTemplateColumns: '90px 1fr',
                                gap: '2.5rem',
                                paddingBottom: '2rem',
                                borderBottom: index < experiences.length - 1 ? '1px solid var(--color-border)' : 'none'
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
