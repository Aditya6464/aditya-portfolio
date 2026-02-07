import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Terminal, Database, Layout } from 'lucide-react';
import AnimatedCharacter from './AnimatedCharacter';

const Skills = () => {
    const easeOut = [0.19, 1.0, 0.22, 1.0];
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const skillCategories = [
        {
            title: "Programming",
            skills: ["Python", "Java", "C++", "JavaScript", "TypeScript"]
        },
        {
            title: "Frameworks",
            skills: ["Django", "Flask", "REST", "Express", "FastAPI"]
        },
        {
            title: "Frontend",
            skills: ["HTML", "CSS", "JavaScript", "React", "Vue", "Tailwind"]
        },
        {
            title: "Database",
            skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Redis"]
        },
        {
            title: "Tools",
            skills: ["Git", "GitHub", "Postman", "Docker", "Jenkins"]
        }
    ];

    const totalCategories = [...skillCategories, ...skillCategories];

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
                paddingTop: '25vh',
                backgroundColor: 'var(--color-bg-light)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <AnimatedCharacter
                Icon={Cpu}
                imageUrl="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/programming_2svr.svg"
                imageWidth={380}
                iconSize={150}
                iconStyle={{ top: '15vh', right: '10%' }}
                imageStyle={{ bottom: '20vh', left: '8%' }}
                floatingIcons={[
                    { Icon: Code, size: 45, style: { top: '30%', left: '20%' } },
                    { Icon: Terminal, size: 40, style: { bottom: '25%', right: '15%' } },
                    { Icon: Database, size: 35, style: { top: '15%', left: '45%' } },
                    { Icon: Layout, size: 30, style: { bottom: '40%', left: '25%' } },
                    { Icon: Code, size: 25, style: { top: '60%', right: '30%' } }
                ]}
            />
            <style>
                {`
          @keyframes cardMarquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-paused {
            animation-play-state: paused !important;
          }
          .marquee-mask {
            mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          }
        `}
            </style>

            {/* Page Title */}
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
                style={{
                    color: 'var(--color-text-primary)',
                    fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    marginBottom: '0',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    zIndex: 10
                }}
            >
                Skills
            </motion.h1>

            {/* Marquee Content Container */}
            <div
                className="marquee-mask"
                style={{
                    width: '100%',
                    marginTop: '6rem',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    position: 'relative',
                    padding: '3rem 0'
                }}
            >
                <div
                    className={`marquee-track ${hoveredIndex !== null ? 'marquee-paused' : ''}`}
                    style={{
                        display: 'inline-flex',
                        gap: '2.5rem',
                        animation: 'cardMarquee 40s linear infinite',
                        padding: '0 2rem'
                    }}
                >
                    {totalCategories.map((category, index) => {
                        const isHovered = hoveredIndex === index;
                        const isAnyHovered = hoveredIndex !== null;

                        return (
                            <motion.div
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    flexShrink: 0,
                                    width: '280px',
                                    padding: '2rem',
                                    backgroundColor: 'rgba(0, 0, 0, 0.02)',
                                    border: '1px solid rgba(0, 0, 0, 0.05)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
                                    filter: isAnyHovered && !isHovered ? 'blur(10px) grayscale(0.5)' : 'none',
                                    opacity: isAnyHovered && !isHovered ? 0.2 : 1,
                                    transform: isHovered ? 'scale(1.1) translateY(-10px) rotate(3deg)' : 'scale(1)',
                                    zIndex: isHovered ? 50 : 1,
                                    boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.1)' : 'none'
                                }}
                            >
                                <h3 style={{
                                    marginBottom: '1.2rem',
                                    color: 'var(--color-text-primary)',
                                    fontSize: '0.85rem',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.15em'
                                }}>
                                    {category.title}
                                </h3>

                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '0.6rem'
                                }}>
                                    {category.skills.map((skill, i) => (
                                        <span key={i} style={{
                                            color: 'var(--color-text-secondary)',
                                            fontSize: '0.95rem',
                                            letterSpacing: '0.03em'
                                        }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default Skills;
