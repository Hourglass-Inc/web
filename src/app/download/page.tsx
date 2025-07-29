"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLenis } from '@/hooks/use-lenis';
import styles from './page.module.css';

export default function DownloadPage() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const lenis = useLenis();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNotifyClick = () => {
    // Navigate to home page
    router.push('/#newsletter');
    
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      if (lenis) {
        lenis.scrollTo('#newsletter', {
          duration: 2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    }, 100);
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.gridOverlay}></div>
      
      <div className={`${styles.content} ${mounted ? styles.fadeIn : ''}`}>
        <div className={styles.badge}>
          <span className={styles.badgeText}>Coming Soon</span>
          <span className={styles.badgeDot}></span>
        </div>
        
        <div className={styles.titleSection}>
          <h1 className={styles.title}>
            Download Tymli
          </h1>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>⚡</div>
            <h3>Lightning Fast</h3>
            <p>Optimized performance for seamless productivity</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔒</div>
            <h3>Secure & Private</h3>
            <p>Your data stays protected with end-to-end encryption</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎯</div>
            <h3>Smart Focus</h3>
            <p>AI-powered tools to enhance your concentration</p>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <button className={styles.notifyButton} onClick={handleNotifyClick}>
            <span className={styles.buttonText}>Get Notified</span>
            <span className={styles.buttonIcon}>→</span>
          </button>
          <div className={styles.releaseInfo}>
            <div className={styles.releaseBadge}>
              <span className={styles.releaseText}>Expected Release</span>
              <span className={styles.releaseDate}>Q3 2025</span>
            </div>
          </div>
        </div>

        <div className={styles.platforms}>
          <p className={styles.platformsText}>Available for</p>
          <div className={styles.platformIcons}>
            <span className={styles.platformIcon}>🖥️ Windows</span>
            <span className={styles.platformIcon}>🍎 macOS</span>
            <span className={styles.platformIcon}>🐧 Linux</span>
          </div>
        </div>
      </div>
    </div>
  );
}