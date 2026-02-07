import React from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete, loadingText = "Portfolio", progress = 0 }) => {
    const easeInOut = [0.42, 0, 0.58, 1];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: easeInOut }}
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: '#0A0A0A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                overflow: 'hidden',
                pointerEvents: 'none'
            }}
        >
            {/* Grain overlay */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
                    opacity: 0.04,
                    pointerEvents: 'none'
                }}
            />

            {/* Loading percentage indicator - top left */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                    position: 'absolute',
                    top: '3rem',
                    left: '3rem',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-body)',
                    color: '#FAFAFA',
                    letterSpacing: '0.1em',
                    textTransform: 'none'
                }}
            >
                Loading — {progress}%
            </motion.div>

            {/* Large background word */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{ duration: 0.8, ease: easeInOut }}
                style={{
                    position: 'absolute',
                    fontSize: 'clamp(6rem, 18vw, 14rem)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: '700',
                    color: '#FAFAFA',
                    userSelect: 'none',
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase'
                }}
            >
                {loadingText}
            </motion.div>
        </motion.div>
    );
};

export default Loader;
