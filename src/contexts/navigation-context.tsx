'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface NavigationContextType {
  hasNavigatedFromInternalPage: boolean;
  resetNavigation: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [hasNavigatedFromInternalPage, setHasNavigatedFromInternalPage] = useState(false);
  const [previousPath, setPreviousPath] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // If we have a previous path and we're now on the home page,
    // and the previous path was an internal page, mark as internal navigation
    if (previousPath !== null && pathname === '/' && previousPath !== '/') {
      setHasNavigatedFromInternalPage(true);
    }
    
    // Update the previous path for next navigation
    setPreviousPath(pathname);
  }, [pathname, previousPath]);

  // Function to reset navigation state (can be used if needed)
  const resetNavigation = () => {
    setHasNavigatedFromInternalPage(false);
  };

  return (
    <NavigationContext.Provider value={{ 
      hasNavigatedFromInternalPage, 
      resetNavigation 
    }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
