import Link from 'next/link';
import styles from './cta-buttons.module.css';
import { FaDiscord } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export default function CtaButtons({
    y
}: {
    y?: number;
}) {
    return (
        <div style={{
            animationDelay: y && y >= 33.34 ? ".3s" : '7.7s',
        }} className={styles.ctaButtons}>
            <Link href={"https://discord.gg/zNyxPGTqwn"}  target={"_blank"} className={styles.primaryButton}>
                <FaDiscord style={{
                    fontSize: '20px',
                }} />
                Discord
            </Link>
            <Link href={"https://x.com/Tymliorg"}  target={"_blank"}  className={styles.secondaryButton}>
                <BsTwitterX />
            </Link>
            <Link href={"/#section-4"} className={styles.secondaryButton}>
                <MdEmail style={{
                    fontSize: '20px',
                }} />
                Newsletter
            </Link>
        </div>
    );
}