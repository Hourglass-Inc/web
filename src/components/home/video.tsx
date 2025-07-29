import { useLenis, useLenisCallback } from "@/hooks/use-lenis";
import { useEffect, useRef, useState } from "react";

export function Video({
    src,
    onEnded,
    isInternallyNavigated,
    y
}: {
    src: string;
    onEnded?: () => void;
    isInternallyNavigated?: boolean;
    y?: number;
}) {
  const lenis = useLenis();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoEnded, setVideoEnded] = useState(false);
  if (isInternallyNavigated) {
    // If the user navigated from another internal page, we don't want to disable scrolling
    return null;
  }
  // Disable scrolling when component mounts
  useEffect(() => {
    const checkViewportAndUpdateScroll = () => {
      const isLargeViewport = window.innerWidth > 880;
      
      if (!videoEnded) {
        if (isLargeViewport && lenis) {
          lenis.stop();
        } else if (!isLargeViewport && lenis) {
          lenis.start();
        }
      }
    };

    // Initial check
    checkViewportAndUpdateScroll();
    
    // Prevent wheel and touch scrolling only on large viewports
    const preventScroll = (e: Event) => {
      if (window.innerWidth > 880 && !videoEnded) {
        e.preventDefault();
      }
    };
    
    // Add resize listener
    const handleResize = () => {
      checkViewportAndUpdateScroll();
    };
    
    document.addEventListener('wheel', preventScroll, { passive: false });
    document.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('resize', handleResize);
    
    return () => {
      document.removeEventListener('wheel', preventScroll);
      document.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [lenis, videoEnded]);

  const handleVideoEnded = () => {
    console.log('Video has finished playing');
    setVideoEnded(true);
    
    // Re-enable scrolling when video ends
    if (lenis) {
      lenis.start();
    }
    
    onEnded?.();
  };

  return (
    <video 
        ref={videoRef}
        preload="metadata" 
        autoPlay 
        muted 
        playsInline
        onEnded={handleVideoEnded}
        style={
            {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            }
        }>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}