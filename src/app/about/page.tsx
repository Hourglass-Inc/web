'use client';

import { motion } from 'framer-motion';
import styles from './page.module.css';
import ScrollVelocity from '@/modules/ScrollVelocity/ScrollVelocity';

// Animation variants for section reveals
const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1
  }
};

const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -60
  },
  visible: { 
    opacity: 1, 
    x: 0
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
        <div style={{
            width: 'calc(100% - 10px)',
            maxWidth: '800px',
            height: '400px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            padding: '50px 0',
            position: 'relative',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '2rem',
            alignItems: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)',
        }} className={styles.containerTop}>
            <ScrollVelocity
                texts={['About Tymli', 'About Tymli']} 
                velocity={120} 
                className="custom-scroll-text"
            />
        </div>

      <motion.header 
        className={styles.header}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div 
          className={styles.intro}
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            We live in a time where losing focus feels normal.
          </motion.p>
          <motion.p 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Where apps, tabs, and endless notifications constantly pull us off track — and somehow, that became just "how things are."
          </motion.p>
          <motion.p 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Most tools either slap a timer on your screen, drown you in stats, or try to guilt you into working. That's not how real focus works. And honestly, we were tired of pretending it does.
          </motion.p>
          <motion.p 
            variants={fadeInUp}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            We built Tymli because we wanted something better — for ourselves, and for anyone who's done letting their time slip by unnoticed.
          </motion.p>
        </motion.div>
      </motion.header>

      <motion.hr 
        className={styles.divider}
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <main className={styles.content}>
        <motion.section 
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2 
            className={styles.sectionTitle}
            variants={fadeInLeft}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our Philosophy
          </motion.h2>
        </motion.section>
        
        <div className={styles.philosophy}>
          <ul className={styles.philosophyList}>
            <motion.li 
              className={styles.philosophyItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <h3 className={styles.philosophyTitle}>
                Time is our most valuable, non-renewable asset.
              </h3>
              <p className={styles.philosophyText}>
                We often spend it without noticing — on tasks we didn't plan, distractions we didn't intend, and habits we didn't choose. Tymli is built to bring clarity and awareness to how time is used, both for individuals and teams.
              </p>
            </motion.li>
            
            <motion.li 
              className={styles.philosophyItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <h3 className={styles.philosophyTitle}>
                Focus is intentional, not accidental.
              </h3>
              <p className={styles.philosophyText}>
                Focus doesn't happen by chance or by hack. It's the result of systems, environments, and habits working together. Tymli helps reinforce those systems — by reducing friction, minimizing distraction, and making attention a conscious choice.
              </p>
            </motion.li>
            
            <motion.li 
              className={styles.philosophyItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <h3 className={styles.philosophyTitle}>
                Accountability builds trust and performance.
              </h3>
              <p className={styles.philosophyText}>
                Whether you're a student, a professional, or part of a team, accountability strengthens discipline and builds trust — with yourself and with others. Tymli is designed to foster meaningful accountability, without surveillance or micromanagement.
              </p>
            </motion.li>
            
            <motion.li 
              className={styles.philosophyItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <h3 className={styles.philosophyTitle}>
                Tools should empower, not overwhelm.
              </h3>
              <p className={styles.philosophyText}>
                We believe software should simplify work, not complicate it. Tymli is crafted to be effective, transparent, and adaptable — for personal focus, task management, and collaborative productivity.
              </p>
            </motion.li>
          </ul>
        </div>

        <motion.hr 
          className={styles.divider}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        <motion.section 
          className={styles.section}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 
            className={styles.sectionTitle}
            variants={fadeInLeft}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Why Tymli?
          </motion.h2>
          <motion.div 
            className={styles.closing}
            variants={fadeInUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.01,
              transition: { duration: 0.3 }
            }}
          >
            <p className={styles.closingText}>
              {`Because we're done accepting a work culture where being "busy" means being distracted.`}
            </p>
            <p className={styles.closingText}>
              We believe in tools that support intentional work, whether you're managing your day, leading a project, or running a company.
            </p>
            <p className={styles.closingHighlight}>
              We're building Tymli for people — and organizations — who want to work smarter, focus better, and make their time count.
            </p>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}