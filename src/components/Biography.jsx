import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MapPin, Calendar, User, Heart } from 'lucide-react';
import AnimatedCharacter from './AnimatedCharacter';

const Biography = () => {
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
                Icon={BookOpen}
                imageUrl="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/personal_information_re_vw8a.svg"
                imageWidth={350}
                iconSize={200}
                iconStyle={{ top: '15vh', left: '12%' }}
                imageStyle={{ bottom: '10vh', right: '10%' }}
                style={{ zIndex: 0 }}
                floatingIcons={[
                    { Icon: MapPin, size: 45, style: { top: '35%', left: '20%' } },
                    { Icon: Calendar, size: 35, style: { bottom: '20%', left: '15%' } },
                    { Icon: User, size: 50, style: { top: '10%', right: '20%' } },
                    { Icon: Heart, size: 40, style: { bottom: '15%', right: '35%' } }
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
                    textTransform: 'uppercase',
                    zIndex: 10
                }}
            >
                Biography
            </motion.h1>

            {/* Content section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: easeOut, delay: 0.5 }}
                style={{
                    maxWidth: '800px',
                    textAlign: 'center',
                    marginTop: '12rem',
                    zIndex: 10
                }}
            >
                <p style={{
                    fontSize: '1.2rem',
                    lineHeight: '2',
                    color: 'var(--color-text-secondary)',
                    letterSpacing: '0.01em'
                }}>
                    With 3.5 years in IT, specializing in designing, developing, and
                    implementing web applications using Python, Django, and Flask. Strong
                    SDLC knowledge and hands-on experience across backend, frontend,
                    databases, and API testing.
                </p>
            </motion.div>
        </motion.div>
    );
};

export default Biography;
