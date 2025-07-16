'use client';

import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    // Set initial active section based on current scroll position
    const checkInitialSection = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Check if we're at the very top (hero section)
      if (scrollY < windowHeight * 0.5) {
        setActiveSection('hero');
        return;
      }
      
      // Find the section that's currently in view
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollY;
          const elementBottom = elementTop + rect.height;
          
          // Check if the section is in view (with some offset)
          if (scrollY + windowHeight * 0.3 >= elementTop && scrollY + windowHeight * 0.7 <= elementBottom) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    // More robust intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        let maxIntersection = 0;
        let activeId = '';
        
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxIntersection) {
            maxIntersection = entry.intersectionRatio;
            activeId = entry.target.id;
          }
        });
        
        if (activeId) {
          setActiveSection(activeId);
        }
      },
      {
        rootMargin: '-20% 0px -20% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    // Also use scroll listener as backup
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Hero section detection
      if (scrollY < windowHeight * 0.8) {
        setActiveSection('hero');
        return;
      }
      
      // Check other sections
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // If section is in the middle portion of the viewport
          if (rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    // Setup observers and listeners
    const setupObservation = () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });
      
      checkInitialSection();
      window.addEventListener('scroll', handleScroll, { passive: true });
    };

    // Small delay to ensure DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setupObservation);
    } else {
      setTimeout(setupObservation, 100);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('DOMContentLoaded', setupObservation);
    };
  }, [sectionIds]);

  return activeSection;
}
