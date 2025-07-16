'use client';

import Hero from '@/components/home/hero';
import styles from '@/app/page.module.css';
import Tracking from '@/components/features/tracking/tracking';
import Focus from '@/components/features/focus/focus';
import Distraction from '@/components/features/distraction/distraction';
import Projects from '@/components/features/projects/projects';
import Community from '@/components/community/community';
import Beams from '@/modules/Beams/Beams';
import { useHashScroll } from '@/hooks/use-hash-scroll';

export default function HomeClient() {
  // Handle hash scrolling on page load
  useHashScroll();

  return (
    <div className={styles.container}>
      <Hero />
      
      <section id="features" className={`${styles.section} ${styles.section3}`}>
        <div style={{
          width: 'calc(100% - 50px)',
          maxWidth: '1300px',
          marginBottom: '80px',
          background: "black",
          borderRadius: '8px',
          zIndex: 100,
          position: 'relative',
          
        }}>
          <Tracking />
          <div className={styles.featBlock1}>
            <Focus />
            <Distraction />
          </div>
          <Projects />
        </div>
      </section>
      
      <section id="section-4" style={{
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        position: 'relative',
        height: '100vh',
      }} className={`${styles.section} ${styles.section4}`}>
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={20}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>
        <div style={{
          zIndex: 110,
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}>
          <Community />
        </div>
      </section>
    </div>
  );
}
