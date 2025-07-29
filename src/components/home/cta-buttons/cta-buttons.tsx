import Link from 'next/link';
import styles from './cta-buttons.module.css';
import { FaDiscord } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { useLenis } from '../../../hooks/use-lenis';

export default function CtaButtons({
    y,
    internalNav
}: {
    y: number;
    internalNav: boolean;
}) {
    // Use Lenis hook to get the scrolling instance
    const lenis = useLenis();

    return (
        <div style={{
            animationDelay: internalNav ? "0s" : y >= 33.34 ? ".3s" : '7.7s',
        }} className={styles.ctaButtons}>
            <button
                type="button"
                onClick={() => lenis?.scrollTo('#newsletter')}
                className={styles.primaryButton}
            >
                <MdEmail style={{
                    fontSize: '20px',
                }} />
                Newsletter
            </button>
            <Link href={"https://discord.gg/zNyxPGTqwn"}  target={"_blank"} className={styles.secondaryButton}>
                <FaDiscord style={{
                    fontSize: '20px',
                }} />
            </Link>
            <Link href={"https://x.com/Tymliorg"}  target={"_blank"}  className={styles.secondaryButton}>
                <BsTwitterX />
            </Link>

        </div>
    );
}