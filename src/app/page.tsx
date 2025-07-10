import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section id='section-1' className={styles.heroSection}>
        <h1>Welcome to Tymli</h1>
        <p>This is the first section. Scroll down to see the smooth scrolling effect!</p>
      </section>
      
      <section id="section-2" className={styles.hiddenSection}>
        <h2>Section 2</h2>
        <p>Notice how smooth the scrolling feels? This is powered by Lenis.js!</p>
      </section>
      
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
