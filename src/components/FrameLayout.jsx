import React from 'react';

const FrameLayout = ({ children }) => {
    return (
        <>
            {/* Page frame border */}
            <div
                style={{
                    position: 'fixed',
                    inset: '20px',
                    border: '2px solid var(--color-text-primary)',
                    pointerEvents: 'none',
                    zIndex: 9998
                }}
            />

            {/* Content */}
            {children}
        </>
    );
};

export default FrameLayout;
