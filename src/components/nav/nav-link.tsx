"use client";
import styles from './nav.module.css';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLenis } from '@/hooks/use-lenis';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    isActive?: boolean;
}

export function NavLink({ href, children, isActive: externalIsActive }: NavLinkProps) {
    const pathname = usePathname();
    const router = useRouter();
    const lenis = useLenis();
    
    // Check if it's a hash link (starts with /#)
    const isHashLink = href.startsWith('/#');
    const pathIsActive = pathname === href;
    const isActive = externalIsActive !== undefined ? externalIsActive : pathIsActive;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isHashLink) {
            e.preventDefault();
            const targetId = href.slice(2); // Remove /#
            
            // If we're already on the home page, just scroll
            if (pathname === '/') {
                const targetElement = document.getElementById(targetId);
                if (targetElement && lenis) {
                    lenis.scrollTo(targetElement, {
                        duration: 1.5,
                        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    });
                }
            } else {
                // Navigate to home page with hash, let the useHashScroll hook handle the scrolling
                router.push(`/${href}`); // This will navigate to /#features
            }
        }
    };

    if (isHashLink) {
        return (
            <a 
                href={href} 
                className={isActive ? styles.active : ''} 
                onClick={handleClick}
            >
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={isActive ? styles.active : ''}>
            {children}
        </Link>
    );
}