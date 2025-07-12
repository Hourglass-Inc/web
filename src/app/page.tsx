import Hero from '@/components/home/hero';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      
      <section id="section-3" className={`${styles.section} ${styles.section3}`}>
        <h2>Section 3</h2>
        <p>Lenis provides buttery smooth scrolling with customizable easing curves.</p>
      </section>
      
      <section id="section-4" className={`${styles.section} ${styles.section4}`}>
        <h2>Section 4</h2>
        <p>The integration is optimized for Next.js with proper SSR support.</p>
      </section>
    </div>
  );
}
