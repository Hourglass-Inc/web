"use client";
import { MdApps } from 'react-icons/md';
import styles from './tracking.module.css';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function TimeSelector() {
    const selectedPeriod = 'today'; // Static selection - Today is always selected

    return (
        <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between' }}>
            {(['today', '7days', '30days', '1year'] as const).map((period) => (
                <button
                    key={period}
                    style={{
                        padding: '8px 14px',
                        borderRadius: '6px',
                        border: 'none',
                        backgroundColor: selectedPeriod === period ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                        color: selectedPeriod === period ? '#fff' : 'rgba(255, 255, 255, 0.7)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        fontSize: '10px',
                        fontWeight: '500'
                    }}
                >
                    {period === 'today' ? 'Today' : 
                     period === '7days' ? '7 Days' : 
                     period === '30days' ? '30 Days' : 'Year'}
                </button>
            ))}
        </div>
    );
}

export default function Tracking() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const applications = [
        {
        name: "Teardown",
        category: "entertainment",
        time: "1h 49m",
        },
        {
        name: "Google Chrome",
        category: "browsers",
        time: "51m",
        },
        {
        name: "Visual Studio Code",
        category: "code",
        time: "44m",
        },
        {
        name: "Zen",
        category: "browsers",
        time: "43m",
        },
        {
        name: "Adobe Substance 3D Stager",
        category: "miscellaneous",
        time: "17m",
        },
    ]

    // Animation variants
    const imageVariants = {
        hidden: { opacity: 0, scale: 1.1 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
                duration: 0.8, 
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
            } 
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.4, // Start after image begins
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.5, 
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
            } 
        }
    };

    const textVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { 
                delay: 0.6, // Start after container
                duration: 0.7, 
                ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
            } 
        }
    };

    return (
        <div className={styles.trackingContainer} ref={ref}>
            {/* Animated Background Image - First to animate */}
            <motion.div
                variants={imageVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                style={{ position: 'absolute', inset: 0 }}
            >
                <Image
                    alt="Tracking Background"
                    fill
                    style={{
                        display: 'block',
                        zIndex: -1,
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    quality={100}
                    priority
                    src="/trackingbg.png"
                />
            </motion.div>

            {/* Animated App Container */}
            <motion.div 
                className={styles.appContainer}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <motion.div 
                    variants={itemVariants}
                    style={{
                        marginBottom: '20px',
                        width: '100%',
                        padding: 10,
                        backgroundColor: "rgb(7, 7, 7, .39)",
                        borderRadius: 8,
                        border: "1px solid rgba(255, 255, 255, 0.1)"
                    }}
                >
                    <TimeSelector />
                </motion.div>
                <motion.div 
                    className={styles.container}
                    variants={itemVariants}
                >
                    {/* Header */}
                    <motion.div 
                        className={styles.header}
                        variants={itemVariants}
                    >
                        <MdApps className={styles.headerIcon} />
                        <span className={styles.headerText}>Applications</span>
                    </motion.div>

                    {/* Applications List */}
                    <motion.div 
                        className={styles.applicationsList}
                        variants={containerVariants}
                    >
                        {applications.map((app, index) => (
                        <motion.div 
                            key={index} 
                            className={styles.applicationItem}
                            variants={itemVariants}
                        >
                            <div className={styles.applicationInfo}>
                            <span className={styles.applicationName}>{app.name}</span>
                            <span className={styles.applicationCategory}>{app.category}</span>
                            </div>
                            <span className={styles.applicationTime}>{app.time}</span>
                        </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Animated Text Section */}
            <motion.div 
                className={styles.text}
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <h2>
                    Screen Time &<br />App Tracking
                </h2>
                <p>
                    Automatically track how much time you spend on each app and website with intelligent insights
                </p>
            </motion.div>
        </div>
    )
}