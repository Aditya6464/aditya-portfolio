import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedCharacter component for rendering thematic geometric abstractions
 * with large icons and floating elements.
 */
const AnimatedCharacter = ({
    Icon,
    imageUrl,
    secondaryImageUrl, // New: support for a second character
    accentColor = "rgba(0, 0, 0, 0.05)",
    style = {}, // Main container style
    iconStyle = {}, // Independent styling for background icon island
    imageStyle = {}, // Independent styling for foreground image island
    secondaryImageStyle = {}, // Independent styling for second image island
    delay = 0,
    imageWidth = 300,
    secondaryImageWidth = 300,
    iconSize = 150,
    floatingIcons = [] // Array of { Icon, style } for thematic context
}) => {
    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 0,
            ...style
        }}>
            {/* Background Geometric Shape - Centered anchor */}
            <motion.div
                animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '600px',
                    border: `1px dashed ${accentColor}`,
                    borderRadius: '50%',
                    opacity: 0.1
                }}
            />

            {/* Icon Island - Scattered Position */}
            {Icon && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: delay + 0.2 }}
                    style={{
                        position: 'absolute',
                        zIndex: 1,
                        ...iconStyle
                    }}
                >
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [-10, 10, -10]
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <Icon size={iconSize} strokeWidth={0.5} color="var(--color-text-primary)" style={{ opacity: 0.15 }} />
                    </motion.div>
                </motion.div>
            )}

            {/* Human Illustration Island - Opposite Scattered Position */}
            {imageUrl && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: delay }}
                    style={{
                        position: 'absolute',
                        zIndex: 2,
                        ...imageStyle
                    }}
                >
                    <motion.div
                        animate={{
                            y: [-25, 25, -25],
                            rotate: [3, -3, 3]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <img
                            src={imageUrl}
                            alt="Character illustration"
                            style={{
                                width: imageWidth,
                                height: 'auto',
                                filter: 'grayscale(1)',
                                opacity: 0.7,
                            }}
                        />
                    </motion.div>
                </motion.div>
            )}

            {/* Secondary Character Island */}
            {secondaryImageUrl && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: delay + 0.3 }}
                    style={{
                        position: 'absolute',
                        zIndex: 2,
                        ...secondaryImageStyle
                    }}
                >
                    <motion.div
                        animate={{
                            y: [25, -25, 25],
                            rotate: [-3, 3, -3]
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <img
                            src={secondaryImageUrl}
                            alt="Secondary character illustration"
                            style={{
                                width: secondaryImageWidth,
                                height: 'auto',
                                filter: 'grayscale(1)',
                                opacity: 0.7,
                            }}
                        />
                    </motion.div>
                </motion.div>
            )}

            {/* Thematic Floating Elements */}
            {floatingIcons.map((item, i) => {
                const FloatingIcon = item.Icon;
                return (
                    <motion.div
                        key={`float-${i}`}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, i % 2 === 0 ? 15 : -15, 0],
                            rotate: [0, 10, 0]
                        }}
                        transition={{
                            duration: 8 + i,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 1.2
                        }}
                        style={{
                            position: 'absolute',
                            opacity: 0.08,
                            zIndex: 1,
                            ...item.style
                        }}
                    >
                        <FloatingIcon size={item.size || 40} strokeWidth={1} />
                    </motion.div>
                );
            })}

            {/* Small floating particles scattered in the void */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -40, 0],
                        x: [0, i % 2 === 0 ? 30 : -30, 0],
                        opacity: [0.05, 0.2, 0.05]
                    }}
                    transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        delay: i * 0.8
                    }}
                    style={{
                        position: 'absolute',
                        width: '2px',
                        height: '2px',
                        backgroundColor: 'var(--color-text-primary)',
                        borderRadius: '50%',
                        top: `${10 + (i * 12)}%`,
                        left: `${5 + (i * 15)}%`,
                    }}
                />
            ))}
        </div>
    );
};

export default AnimatedCharacter;
