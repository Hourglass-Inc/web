import Hero from '@/components/home/hero';
import styles from './page.module.css';
import Tracking from '@/components/features/tracking/tracking';
import Focus from '@/components/features/focus/focus';
import Distraction from '@/components/features/distraction/distraction';

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      
      <section id="featuresContent" className={`${styles.section} ${styles.section3}`}>
        <div style={{
          width: 'calc(100% - 50px)',
          maxWidth: '1300px',
          marginTop: '10px',
          background: "black",
          borderRadius: '8px',
          zIndex: 10,
        }}>
          <Tracking />
          <div className={styles.featBlock1}>
            <Focus />
            <Distraction />
          </div>
        </div>
      </section>
      
      <section id="section-4" style={{
        zIndex: 10,
      }} className={`${styles.section} ${styles.section4}`}>
        <h2>Section 4</h2>
        <p>The integration is optimized for Next.js with proper SSR support.</p>
      </section>
    </div>
  );
}
