'use client';

import { useEffect, useState } from 'react';
import Lenis from 'lenis';

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export function useLenis() {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Wait for Lenis to be available on the window object
    const checkLenis = () => {
      if (window.lenis) {
        setLenis(window.lenis);
      } else {
        setTimeout(checkLenis, 100);
      }
    };

    checkLenis();
  }, []);

  return lenis;
}

export function useLenisCallback(callback: (lenis: Lenis) => void, deps: React.DependencyList) {
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      callback(lenis);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lenis, ...deps]);
}
