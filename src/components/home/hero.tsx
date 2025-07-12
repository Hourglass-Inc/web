'use client';
import styles from './hero.module.css';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll } from "motion/react"
import Image from 'next/image';
import { Video } from './video';
import CtaButtons from './cta-buttons/cta-buttons';
export default function Hero() {
    const [y, setY] = useState(0);
    const [initialY, setInitialY] = useState<number | null>(null);
    const [isInitialized, setIsInitialized] = useState(false);
    
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"]
    });

    // Also check scroll position on mount as backup
    useEffect(() => {
        // Use the scrollYProgress value directly instead of document scroll
        const currentProgress = scrollYProgress.get();
        const calculatedY = currentProgress * 100;
        
        console.log('Mount scroll check - scrollYProgress:', currentProgress, 'calculatedY:', calculatedY);
        
        setInitialY(calculatedY);
        setIsInitialized(true);
    }, [scrollYProgress]);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const newY = latest * 100;
            setY(newY);
            
            // Capture initial y value on first update if not already set
            if (initialY === null) {
                setInitialY(newY);
                setIsInitialized(true);
                console.log('Initial Y captured from scroll:', newY);
            }
        });

        return () => unsubscribe();
    }, [scrollYProgress, initialY]);

    // Determine if we should show video or image based on initial scroll position
    const shouldShowVideo = isInitialized ? (initialY !== null ? initialY <= 33.34 : true) : false;
    
    console.log('shouldShowVideo:', shouldShowVideo, 'initialY:', initialY, 'isInitialized:', isInitialized);

    function getPercentage() {
        return y < 66.66 ? y / 100 : 1 - (y - 66.66) / 33.34;
    }

    return (
        <motion.div>
            <div ref={heroRef} className={styles.heroSection}>
                <section
                style={{
                    borderBottomLeftRadius: y > 33.34 ? 75 : 0,
                    borderBottomRightRadius: y > 33.34 ? 75 : 0,
                }} 
                className={styles.heroBg}>
                </section>
                <section
                style={{
                    borderBottomLeftRadius: y > 33.34 ? 40 : 0,
                    borderBottomRightRadius: y > 33.34 ? 40  : 0,
                }} 
                id='hero' className={styles.hero}>
                    <div className={styles.imageContainer}>
                        {!isInitialized ? (
                            // Show nothing while determining initial state
                            <div style={{ width: '100%', height: '100%', backgroundColor: '#000' }} />
                        ) : shouldShowVideo ? (
                            <Video 
                                y={y}
                                src="https://ovzgadca8zgb0qko.public.blob.vercel-storage.com/bghome.webm"
                            />
                        ) : (
                            <Image 
                                src="/bg.png"
                                alt="Hero Background"
                                fill
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    display: 'block',
                                }}
                            />
                        )}
                    </div>
                    <div className={styles.textContainer}>
                        <CtaButtons y={y} />
                        <h1 style={{
                            marginBottom: "-30px",
                        }}>
                            <p style={{
                                animationDelay: y >= 33.34 ? "0s" : '4.9s',
                            }}>
                                Producitvity Tools
                            </p>
                        </h1>
                        <h1 style={{
                            fontWeight: '300',
                        }}>
                            <p style={{
                                animationDelay: y >= 33.34 ? ".2s" : '5.1s',
                            }}>
                                Done Right
                            </p>
                        </h1>
                    </div>
                </section>

                <section id="features" style={{
                    position: y < 66.66 ? 'fixed' : 'absolute',
                    top: y < 66.66 ? '0' : '100vh',
                }} className={styles.titleSection}>
                    <h2>
                        <motion.span
                            style={{ display: 'block', overflow: 'hidden' }}
                        >
                            <motion.span
                                style={{ display: 'block' }}
                                initial={{ y: '100%' }}
                                animate={{ y: y > 55 ? '0%' : '100%' }}
                                transition={{ 
                                    duration: 0.8, 
                                    ease: [0.6, -0.05, 0.01, 0.99]
                                }}
                            >
                                BUT WHY
                            </motion.span>
                        </motion.span>
                        <motion.span
                            style={{ display: 'block', overflow: 'hidden' }}
                        >
                            <motion.span
                                style={{ display: 'block' }}
                                initial={{ y: '100%' }}
                                animate={{ y: y > 50 ? '0%' : '100%' }}
                                transition={{ 
                                    duration: 0.8, 
                                    ease: [0.6, -0.05, 0.01, 0.99]
                                }}
                            >
                                TYMLI?
                            </motion.span>
                        </motion.span>
                    </h2>
                </section>
            </div>
        </motion.div>
    );
}