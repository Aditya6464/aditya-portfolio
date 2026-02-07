import React from 'react';
import { motion } from 'framer-motion';

const BackgroundText = ({ section }) => {
    const sectionWords = {
        home: 'Portfolio',
        summary: 'About',
        experience: 'Work',
        skills: 'Skills',
        tools: 'Tools',
        biography: 'Story',
        education: 'Education',
        contact: 'Contact'
    };

    const easeInOut = [0.42, 0, 0.58, 1];

    return (
        <motion.div
            key={section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.05, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: easeInOut }}
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: 'clamp(8rem, 20vw, 16rem)',
                fontFamily: 'var(--font-display)',
                fontWeight: '700',
                color: 'var(--color-text-primary)',
                pointerEvents: 'none',
                userSelect: 'none',
                zIndex: 1,
                letterSpacing: '-0.02em',
                whiteSpace: 'nowrap'
            }}
        >
            {sectionWords[section] || 'Portfolio'}
        </motion.div>
    );
};

export default BackgroundText;
