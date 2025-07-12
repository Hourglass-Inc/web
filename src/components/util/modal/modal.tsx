"use client";
import styles from './modal.module.css';
import { motion, AnimatePresence } from 'motion/react';

export default function Modal({ 
    title, 
    children,
    isOpen,
    setIsOpen
 }: { 
        title: string, 
        children: React.ReactNode,
        isOpen: boolean,
        setIsOpen: (isOpen: boolean) => void
    }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className={styles.modal}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div 
                        className={styles.modalContent}
                        initial={{ 
                            opacity: 0, 
                            scale: 0.9,
                            y: 20
                        }}
                        animate={{ 
                            opacity: 1, 
                            scale: 1,
                            y: 0
                        }}
                        exit={{ 
                            opacity: 0, 
                            scale: 0.9,
                            y: 20
                        }}
                        transition={{ 
                            duration: 0.3,
                            ease: [0.4, 0.0, 0.2, 1]
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.topBar}>
                            <h2>{title}</h2>
                            <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
                                &times;
                            </button>
                        </div>
                        <div style={{
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                        }}>
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}