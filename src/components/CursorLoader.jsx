import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CursorLoader = ({ isLoading, percentage, position }) => {
    if (!isLoading) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
                position: 'fixed',
                left: position.x + 20,
                top: position.y + 20,
                zIndex: 10001,
                pointerEvents: 'none'
            }}
        >
            {/* Text-only loading indicator */}
            <div style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-body)',
                color: '#FAFAFA',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                backgroundColor: 'rgba(10, 10, 10, 0.8)',
                padding: '0.5rem 1rem',
                borderRadius: '2px',
                backdropFilter: 'blur(10px)',
                whiteSpace: 'nowrap'
            }}>
                Loading — {percentage}%
            </div>
        </motion.div>
    );
};

export default CursorLoader;
