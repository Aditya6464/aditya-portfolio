import React from 'react';
import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';
import AnimatedCharacter from '../components/AnimatedCharacter';

const HomePage = () => {
    const easeOut = [0.19, 1.0, 0.22, 1.0];

    return (
        <>
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
                    paddingTop: '15vh',
                    backgroundColor: 'var(--color-bg-light)',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <AnimatedCharacter
                    Icon={Terminal}
                    imageUrl="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/chilling_8tii.svg"
                    imageWidth={450}
                    iconSize={200}
                    iconStyle={{ top: '15vh', left: '10%' }}
                    imageStyle={{ bottom: '5vh', right: '5%' }}
                />
                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
                    style={{
                        color: 'var(--color-text-primary)',
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                        marginBottom: '0.5rem',
                        textAlign: 'center'
                    }}
                >
                    Aditya Lawate
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: easeOut, delay: 0.4 }}
                    style={{
                        fontSize: '0.9rem',
                        color: 'var(--color-text-secondary)',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        marginTop: '15rem'
                    }}
                >
                    Software Developer
                </motion.p>
            </motion.div>
        </>
    );
};

export default HomePage;
