import styles from './footer.module.css';
import { FaTwitter, FaGithub, FaDiscord, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerTop}>
          <div className={styles.footerSection}>
            <div className={styles.logo}>
              <h3>Tymli</h3>
              <p>Productivity Tools - Done Right</p>
            </div>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Product</h4>
            <ul>
              <li><a href="#windows">Windows</a></li>
              <li><a href="#macos">MacOS</a></li>
              <li><a href="#android">Android</a></li>
              <li><a href="#ios">iOS</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href='mailto:jeepedia.in@gmail.com'>Mail</a></li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4>Legal</h4>
            <ul>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/tos">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            <p>&copy; {new Date().getFullYear()} Tymli. All rights reserved.</p>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://x.com/tymliorg" aria-label="Twitter" target='_blank' rel='noopener noreferrer'>
              <FaTwitter size={20} />
            </a>
            <a href="https://discord.gg/zNyxPGTqwn" aria-label="Discord" target='_blank' rel='noopener noreferrer'>
              <FaDiscord size={20} />
            </a>
            <a href="https://github.com/Tymli-Inc" aria-label="Github" target='_blank' rel='noopener noreferrer'>
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
