'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Nav from './nav';

export default function NavContainer() {
  const pathname = usePathname();
  const [isAtTop, setIsAtTop] = useState(true);
  const isHomepage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldApplyDelay = isHomepage && isAtTop;

  return (
    <div 
      className="navContainer"
      style={{
        animationDelay: shouldApplyDelay ? '5.2s' : '0s'
      }}
    >
      <Nav />
    </div>
  );
}
