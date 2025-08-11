'use client';

import { useEffect, useState } from 'react';

interface CursorLightProps {
  size?: number;
  blur?: number;
  opacity?: number;
  color?: string;
}

export default function CursorLight({ 
  size = 400, 
  blur = 100, 
  opacity = 0.15, 
  color = '#3b82f6' 
}: CursorLightProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
      }}
    >
             <div
         className="absolute rounded-full transition-all duration-150 ease-out"
         style={{
           left: position.x,
           top: position.y,
           width: size,
           height: size,
           background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
           filter: `blur(${blur}px)`,
           opacity: opacity,
           transform: 'translate(-50%, -50%)',
         }}
       />
    </div>
  );
} 