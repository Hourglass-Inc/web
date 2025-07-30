import { BsTwitterX } from 'react-icons/bs';
import styles from './community.module.css';
import { FaDiscord } from 'react-icons/fa';
import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);
  const containerVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email && !isLoading) {
      setIsLoading(true);
      setError('');
      setSuccess(false);
      
      fetch('https://hourglass-auth.vercel.app/api/v1/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })
      .then(response => {
        if (response.ok) {
          console.log("Email submitted:", email);
          setEmail(''); // Clear the input after submission
          setSuccess(true);
          // Reset success state after 3 seconds
          setTimeout(() => setSuccess(false), 3000);
        } else {
          setError('Failed to subscribe. Please try again.');
        }
      })
      .catch(error => {
        console.error("Error submitting email:", error);
        setError('Network error. Please check your connection.');
      })
      .finally(() => {
        setIsLoading(false);
      });
    }
  }

  return (
    <motion.div 
      ref={ref}
      className={styles.communityContainer}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
        <motion.div className={styles.communityLinks} variants={itemVariants}>
            <motion.a 
              href="https://discord.gg/zNyxPGTqwn" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={itemVariants}
            >
                <div>
                    <FaDiscord 
                        style={{
                            fontSize: '40px',
                        }} 
                    />    
                </div>
                Discord
            </motion.a>
            <motion.a 
              href="https://x.com/tymliorg" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={itemVariants}
            >
                <div>
                    <BsTwitterX 
                        style={{
                            fontSize: '36px',
                        }} 
                    />    
                </div>
                Twitter
            </motion.a>
        </motion.div>
        <motion.div className={styles.newsletterContainer} variants={itemVariants}>
            <h2>Newsletter</h2>
            <p>Subscribe to our newsletter for the latest updates and features.</p>
            <form className={styles.newsletterForm}>
                <input 
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" 
                    placeholder="Enter your email" 
                    required 
                    className={styles.newsletterInput}
                    disabled={isLoading}
                />
                <button 
                    onClick={handleSubmit} 
                    type="submit" 
                    className={`${styles.newsletterButton} ${
                        isLoading ? styles.loading : ''
                    } ${error ? styles.error : ''} ${success ? styles.success : ''}`}
                    disabled={isLoading || !email}
                >
                    {isLoading ? 'Subscribing...' : 
                     success ? '✓ Subscribed!' : 
                     error ? 'Try Again' : 
                     'Subscribe'}
                </button>
                {error && <p className={styles.errorMessage}>{error}</p>}
                {success && <p className={styles.successMessage}>Successfully subscribed!</p>}
            </form>
        </motion.div>
    </motion.div>
  );
}
