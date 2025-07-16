'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export function useHashScroll() {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check for hash in URL when component mounts
    const hash = window.location.hash;
    
    if (hash) {
      const targetId = hash.slice(1); // Remove #
      
      // Wait a bit for page to load and Lenis to be ready
      const scrollToTarget = () => {
        const targetElement = document.getElementById(targetId);
        
        if (targetElement && window.lenis) {
          window.lenis.scrollTo(targetElement, {
            duration: 1.5,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          });
        } else if (targetElement) {
          // Fallback to native scroll if Lenis isn't ready
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      };

      // Try multiple times with increasing delays to ensure everything is loaded
      setTimeout(scrollToTarget, 100);
      setTimeout(scrollToTarget, 500);
      setTimeout(scrollToTarget, 1000);
    }
  }, [searchParams]);
}
