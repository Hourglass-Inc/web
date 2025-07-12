"use client";
import styles from './nav.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={isActive ? styles.active : ''}>
            {children}
        </Link>
    );
}