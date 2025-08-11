'use client';

import { useEffect } from 'react';

export default function ScrollbarHandler() {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    const html = document.documentElement;
    
    function showScrollbar() {
      html.classList.add('scrolling');
    }
    
    function hideScrollbar() {
      html.classList.remove('scrolling');
    }
    
    function handleScroll() {
      showScrollbar();
      
      // Clear existing timeout
      clearTimeout(scrollTimeout);
      
      // Hide scrollbar after scrolling stops
      scrollTimeout = setTimeout(hideScrollbar, 1000);
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Show scrollbar on wheel events
    window.addEventListener('wheel', showScrollbar, { passive: true });
    
    // Show scrollbar on touch events (mobile)
    window.addEventListener('touchstart', showScrollbar, { passive: true });
    window.addEventListener('touchmove', showScrollbar, { passive: true });
    
    // Cleanup function
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', showScrollbar);
      window.removeEventListener('touchstart', showScrollbar);
      window.removeEventListener('touchmove', showScrollbar);
    };
  }, []);

  return null; // This component doesn't render anything
} 