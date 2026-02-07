import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Sparkles, Smile, Compass } from 'lucide-react';
import AnimatedCharacter from '../components/AnimatedCharacter';

const AboutPage = () => {
    const easeOut = [0.19, 1.0, 0.22, 1.0];

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
                paddingTop: '20vh',
                backgroundColor: 'var(--color-bg-light)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <AnimatedCharacter
                Icon={User}
                imageUrl="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/startman1_h7l9.svg"
                imageWidth={380}
                iconSize={180}
                iconStyle={{ top: '25vh', right: '10%' }}
                imageStyle={{ bottom: '10vh', left: '5%' }}
                secondaryImageStyle={{ top: '20vh', right: '8%' }}
                floatingIcons={[
                    { Icon: User, style: { top: '15%', right: '25%' }, size: 45 },
                    { Icon: Heart, style: { bottom: '25%', left: '35%' }, size: 35 },
                    { Icon: Sparkles, style: { top: '35%', right: '15%' }, size: 40 },
                    { Icon: Smile, style: { bottom: '15%', right: '35%' }, size: 38 },
                    { Icon: Compass, style: { top: '45%', left: '15%' }, size: 42 }
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
                About
            </motion.h1>

            {/* Content section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: easeOut, delay: 0.5 }}
                style={{
                    maxWidth: '750px',
                    textAlign: 'center',
                    marginTop: '12rem'
                }}
            >
                <p style={{
                    fontSize: '1.05rem',
                    lineHeight: '1.9',
                    color: 'var(--color-text-secondary)',
                    letterSpacing: '0.01em'
                }}>
                    A seasoned Python Developer with 3.5 years of experience in building
                    scalable web applications using Django and Flask. Strong expertise in
                    backend development, APIs, databases, and seamless frontend integration.
                </p>
            </motion.div>
        </motion.div>
    );
};

export default AboutPage;
