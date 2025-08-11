'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-up' | 'scale-in';
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class with delay
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
            
            // Unobserve after animation to ensure it only triggers once
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay, threshold, rootMargin]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    switch (animation) {
      case 'fade-up':
        return `${baseClasses} opacity-0 translate-y-8 animate-in:opacity-100 animate-in:translate-y-0`;
      case 'fade-in':
        return `${baseClasses} opacity-0 animate-in:opacity-100`;
      case 'slide-up':
        return `${baseClasses} opacity-0 translate-y-12 animate-in:opacity-100 animate-in:translate-y-0`;
      case 'scale-in':
        return `${baseClasses} opacity-0 scale-95 animate-in:opacity-100 animate-in:scale-100`;
      default:
        return `${baseClasses} opacity-0 translate-y-8 animate-in:opacity-100 animate-in:translate-y-0`;
    }
  };

  return (
    <div 
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
} 