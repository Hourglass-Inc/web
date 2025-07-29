"use client";
import styles from './focus.module.css';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const MotionImage = motion(Image);

export default function Focus() {
    const containerRef = useRef(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const blurredVideoRef = useRef<HTMLVideoElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.3 });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isInView && videoRef.current && blurredVideoRef.current) {
            videoRef.current.play();
            blurredVideoRef.current.play();
        }
    }, [isInView]);

    return (
        <div ref={containerRef} className={styles.focusContainer}>
            {/* Animate the background image into view */}
            <MotionImage
                src="/focus.webp"
                alt="Focus Background"
                fill
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                }}
                initial={{ y: isMobile ? 30 : 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: isMobile ? 30 : 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            />
            <motion.div 
                className={styles.textContainer}
                initial={{ y: isMobile ? 30 : 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: isMobile ? 30 : 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
                <motion.h2
                    initial={{ y: isMobile ? 20 : 30, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: isMobile ? 20 : 30, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                >
                    Focus Mode
                </motion.h2>
                <motion.p
                    initial={{ y: isMobile ? 15 : 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: isMobile ? 15 : 20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                >
                    Stay in the zone with our distraction-free focus mode
                </motion.p>
            </motion.div>
        </div>
    );
}