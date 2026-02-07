import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Hammer, Settings, Cog, Terminal } from 'lucide-react';
import AnimatedCharacter from './AnimatedCharacter';

const Tools = () => {
    const easeOut = [0.19, 1.0, 0.22, 1.0];
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const toolList = [
        { name: "VS Code", icon: "devicon-vscode-plain" },
        { name: "PyCharm", icon: "devicon-pycharm-plain" },
        { name: "IntelliJ", icon: "devicon-intellij-plain" },
        { name: "MySQL", icon: "devicon-mysql-plain" },
        { name: "Postman", icon: "devicon-postman-plain" },
        { name: "Docker", icon: "devicon-docker-plain" },
        { name: "Git", icon: "devicon-git-plain" },
        { name: "Node.js", icon: "devicon-nodejs-plain" },
        { name: "React", icon: "devicon-react-original" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain" }
    ];

    const totalTools = [...toolList, ...toolList];

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
                Icon={Wrench}
                imageUrl="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/maintenance_cn7j.svg"
                imageWidth={280}
                iconSize={150}
                iconStyle={{ top: '20vh', left: '12%' }}
                imageStyle={{ bottom: '25vh', right: '10%' }}
                floatingIcons={[
                    { Icon: Hammer, size: 45, style: { top: '35%', left: '25%' } },
                    { Icon: Wrench, size: 40, style: { bottom: '25%', left: '30%' } },
                    { Icon: Settings, size: 35, style: { top: '15%', right: '20%' } },
                    { Icon: Cog, size: 30, style: { bottom: '40%', right: '15%' } },
                    { Icon: Terminal, size: 40, style: { top: '50%', right: '35%' } }
                ]}
            />
            <style>
                {`
          @keyframes cardMarqueeTools {
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
                Tools
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
                    padding: '4rem 0'
                }}
            >
                <div
                    className={`marquee-track ${hoveredIndex !== null ? 'marquee-paused' : ''}`}
                    style={{
                        display: 'inline-flex',
                        gap: '3rem',
                        animation: 'cardMarqueeTools 30s linear infinite',
                        padding: '0 2rem'
                    }}
                >
                    {totalTools.map((tool, index) => {
                        const isHovered = hoveredIndex === index;
                        const isAnyHovered = hoveredIndex !== null;

                        return (
                            <motion.div
                                key={index}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                style={{
                                    flexShrink: 0,
                                    width: '220px',
                                    height: '220px',
                                    backgroundColor: 'white',
                                    border: '1px solid var(--color-border)',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '2rem',
                                    transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
                                    filter: isAnyHovered && !isHovered ? 'blur(10px) grayscale(1)' : 'none',
                                    opacity: isAnyHovered && !isAnyHovered ? 0.2 : 1,
                                    transform: isHovered ? 'scale(1.15) translateY(-20px) rotate(-4deg)' : 'scale(1)',
                                    zIndex: isHovered ? 50 : 1,
                                    boxShadow: isHovered ? '0 30px 60px -12px rgba(0, 0, 0, 0.15)' : 'none'
                                }}
                            >
                                <i
                                    className={tool.icon}
                                    style={{
                                        fontSize: '4rem',
                                        color: 'var(--color-text-primary)',
                                        marginBottom: '1.2rem',
                                        display: 'block'
                                    }}
                                />
                                <p style={{
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    color: 'var(--color-text-primary)',
                                    letterSpacing: '0.02em',
                                    margin: 0
                                }}>
                                    {tool.name}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

export default Tools;
