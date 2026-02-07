import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import FrameLayout from './components/FrameLayout';
import CursorLoader from './components/CursorLoader';
import PersistentNavigation from './components/PersistentNavigation';

// Page imports
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [cursorLoading, setCursorLoading] = useState(false);
    const [cursorPercentage, setCursorPercentage] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [currentPage, setCurrentPage] = useState('home');
    const [loadingText, setLoadingText] = useState('Portfolio');

    // Track mouse position
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Disable scrolling
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    // Initial load effect
    useEffect(() => {
        if (isInitialLoad) {
            const duration = 2800;
            const steps = 100;
            const interval = duration / steps;

            let current = 0;
            const timer = setInterval(() => {
                current += 1;
                setLoadingProgress(current);

                if (current >= 100) {
                    clearInterval(timer);
                    setTimeout(() => {
                        setIsInitialLoad(false);
                        setLoadingProgress(0);
                    }, 400);
                }
            }, interval);

            return () => clearInterval(timer);
        }
    }, [isInitialLoad]);

    // Handle navigation with loading-as-transition
    const handleNavigate = (pageId, pageName) => {
        if (pageId === currentPage || isTransitioning) return;

        setLoadingText(pageName.toUpperCase());
        setIsTransitioning(true);
        setCursorLoading(true);
        setCursorPercentage(0);
        setLoadingProgress(0);

        // Loading drives the transition
        const duration = 2500;
        const steps = 100;
        const interval = duration / steps;

        let current = 0;
        const timer = setInterval(() => {
            current += 1;
            setLoadingProgress(current);
            setCursorPercentage(current);

            // Switch page at 85% loading
            if (current === 85) {
                setCurrentPage(pageId);
            }

            if (current >= 100) {
                clearInterval(timer);
                setTimeout(() => {
                    setIsTransitioning(false);
                    setCursorLoading(false);
                    setLoadingProgress(0);
                }, 400);
            }
        }, interval);
    };

    // Page components mapping
    const pages = {
        home: HomePage,
        about: AboutPage,
        experience: Experience,
        skills: Skills,
        tools: Tools,
        education: Education,
        contact: Contact
    };

    const CurrentPageComponent = pages[currentPage] || HomePage;

    return (
        <>
            <FrameLayout>
                {/* Page content - always rendered */}
                <div style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
                }}>
                    <AnimatePresence mode="wait">
                        <CurrentPageComponent key={currentPage} />
                    </AnimatePresence>

                    {/* Persistent navigation - positioned below title at 35vh */}
                    <div style={{
                        position: 'fixed',
                        top: '35vh',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '100%',
                        zIndex: 100
                    }}>
                        <PersistentNavigation
                            onNavigate={handleNavigate}
                            currentPage={currentPage}
                        />
                    </div>
                </div>

                {/* Loading overlay - appears during initial load and transitions */}
                {(isInitialLoad || isTransitioning) && (
                    <Loader
                        loadingText={loadingText}
                        progress={loadingProgress}
                    />
                )}

                {/* Cursor loader */}
                <AnimatePresence>
                    {cursorLoading && (
                        <CursorLoader
                            isLoading={cursorLoading}
                            percentage={cursorPercentage}
                            position={mousePosition}
                        />
                    )}
                </AnimatePresence>

                {/* Footer */}
                <footer style={{
                    position: 'fixed',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '0.7rem',
                    color: 'var(--color-text-secondary)',
                    letterSpacing: '0.05em',
                    textAlign: 'center',
                    zIndex: 10,
                    opacity: 0.5
                }}>
                    © 2026 Aditya Lawate
                </footer>
            </FrameLayout>
        </>
    );
}

export default App;
