'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroProps {
  name: string;
  tagline: string;
  welcomeMessage: string;
  profileImageUrl?: string;
}

// Smooth scroll function
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 64; // h-16 = 64px
    const offsetTop = element.offsetTop - navbarHeight;
    
    window.scrollTo({
      top: Math.max(0, offsetTop),
      behavior: 'smooth'
    });
  }
};

// Animated background component
function AnimatedBackground() {
  const [currentText, setCurrentText] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "Hello World",
    "console.log('Hello')",
    "print('Hello World')",
    "System.out.println('Hello')",
    "echo 'Hello World'",
    "printf('Hello World')",
    "cout << 'Hello World'",
    "println('Hello World')",
    "alert('Hello World')",
    "document.write('Hello')"
  ];

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const deleteSpeed = 50;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && currentChar < texts[currentText].length) {
        setCurrentChar(currentChar + 1);
      } else if (!isDeleting && currentChar === texts[currentText].length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentChar > 0) {
        setCurrentChar(currentChar - 1);
      } else if (isDeleting && currentChar === 0) {
        setIsDeleting(false);
        setCurrentText((currentText + 1) % texts.length);
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [currentChar, isDeleting, currentText, texts]);

  // Function to parse and highlight code syntax
  const parseCode = (text: string, currentChar: number) => {
    const parts = [];
    let i = 0;
    
    while (i < Math.min(currentChar, text.length)) {
      // Function names
      if (text.startsWith('console.log', i) || text.startsWith('print', i) || 
          text.startsWith('println', i) || text.startsWith('alert', i) || 
          text.startsWith('document.write', i) || text.startsWith('System.out.println', i) ||
          text.startsWith('echo', i) || text.startsWith('printf', i) || 
          text.startsWith('cout', i)) {
        const funcName = text.startsWith('console.log', i) ? 'console.log' :
                        text.startsWith('System.out.println', i) ? 'System.out.println' :
                        text.startsWith('document.write', i) ? 'document.write' :
                        text.startsWith('print', i) ? 'print' :
                        text.startsWith('println', i) ? 'println' :
                        text.startsWith('alert', i) ? 'alert' :
                        text.startsWith('echo', i) ? 'echo' :
                        text.startsWith('printf', i) ? 'printf' :
                        'cout';
        
        if (i + funcName.length <= currentChar) {
          parts.push({
            text: funcName,
            color: 'rgba(86, 156, 214, 0.25)', // Blue for functions
            type: 'function'
          });
          i += funcName.length;
        } else {
          parts.push({
            text: funcName.substring(0, currentChar - i),
            color: 'rgba(86, 156, 214, 0.25)',
            type: 'function'
          });
          break;
        }
      }
      // Parentheses
      else if (text[i] === '(' || text[i] === ')') {
        parts.push({
          text: text[i],
          color: 'rgba(156, 220, 254, 0.25)', // Light blue for parentheses
          type: 'punctuation'
        });
        i++;
      }
      // Quotes and strings
      else if (text[i] === "'" || text[i] === '"') {
        const quote = text[i];
        let stringContent = '';
        i++;
        
        while (i < Math.min(currentChar, text.length) && text[i] !== quote) {
          stringContent += text[i];
          i++;
        }
        
        if (i < currentChar && text[i] === quote) {
          stringContent += quote;
          i++;
        }
        
        parts.push({
          text: quote + stringContent,
          color: 'rgba(206, 145, 120, 0.25)', // Orange for strings
          type: 'string'
        });
      }
      // Semicolons
      else if (text[i] === ';') {
        parts.push({
          text: ';',
          color: 'rgba(156, 220, 254, 0.25)', // Light blue for semicolons
          type: 'punctuation'
        });
        i++;
      }
      // Operators
      else if (text[i] === '<' || text[i] === '>' || text[i] === '=' || text[i] === '+') {
        parts.push({
          text: text[i],
          color: 'rgba(156, 220, 254, 0.25)', // Light blue for operators
          type: 'operator'
        });
        i++;
      }
      // Regular text
      else {
        parts.push({
          text: text[i],
          color: 'rgba(156, 220, 254, 0.25)', // Light blue for regular text
          type: 'text'
        });
        i++;
      }
    }
    
    return parts;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated text elements with VS Code colors - positioned to avoid content */}
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={i}
          className="absolute font-mono text-xs md:text-sm"
          style={{
            top: `${10 + (i * 15)}%`,
            left: `${5 + (i * 12)}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: '6s',
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationName: 'float',
            color: i % 4 === 0 ? 'rgba(86, 156, 214, 0.12)' : // Blue for functions
                   i % 4 === 1 ? 'rgba(206, 145, 120, 0.12)' : // Orange for strings
                   i % 4 === 2 ? 'rgba(181, 206, 168, 0.12)' : // Green for keywords
                   'rgba(156, 220, 254, 0.12)', // Light blue for variables
            opacity: 0.6,
            transform: 'translateY(0px)'
          }}
        >
          {texts[(currentText + i) % texts.length]}
        </div>
      ))}
      
      {/* Main typing animation with proper syntax highlighting - positioned away from content */}
      <div className="absolute top-1/6 right-1/6 font-mono text-sm md:text-base opacity-60">
        {parseCode(texts[currentText], currentChar).map((part, index) => (
          <span key={index} style={{ color: part.color }}>
            {part.text}
          </span>
        ))}
        <span className="animate-pulse" style={{ color: 'rgba(156, 220, 254, 0.4)' }}>|</span>
      </div>
      
      {/* Floating code snippets with VS Code colors - positioned in corners */}
      <div className="absolute top-1/5 right-1/8 font-mono text-xs animate-pulse opacity-50">
        <span style={{ color: 'rgba(86, 156, 214, 0.15)' }}>&lt;</span>
        <span style={{ color: 'rgba(156, 220, 254, 0.15)' }}>div</span>
        <span style={{ color: 'rgba(86, 156, 214, 0.15)' }}>&gt;</span>
        <span style={{ color: 'rgba(206, 145, 120, 0.15)' }}>Hello</span>
        <span style={{ color: 'rgba(86, 156, 214, 0.15)' }}>&lt;/</span>
        <span style={{ color: 'rgba(156, 220, 254, 0.15)' }}>div</span>
        <span style={{ color: 'rgba(86, 156, 214, 0.15)' }}>&gt;</span>
      </div>
      
      <div className="absolute bottom-1/4 left-1/8 font-mono text-xs animate-pulse opacity-50" style={{ animationDelay: '1s' }}>
        <span style={{ color: 'rgba(86, 156, 214, 0.15)' }}>function</span>
        <span style={{ color: 'rgba(156, 220, 254, 0.15)' }}> hello</span>
        <span style={{ color: 'rgba(156, 220, 254, 0.15)' }}>()</span>
        <span style={{ color: 'rgba(156, 220, 254, 0.15)' }}> {'{'}</span>
      </div>
      
      <div className="absolute top-3/4 right-1/6 font-mono text-xs animate-pulse opacity-50" style={{ animationDelay: '2s' }}>
        <span style={{ color: 'rgba(86, 156, 214, 0.15)' }}>return</span>
        <span style={{ color: 'rgba(206, 145, 120, 0.15)' }}> "Hello World"</span>
        <span style={{ color: 'rgba(156, 220, 254, 0.15)' }}>;</span>
      </div>
      
      {/* Additional VS Code styled snippets - positioned in safe areas */}
      <div className="absolute top-1/3 left-1/12 font-mono text-xs animate-pulse opacity-40" style={{ animationDelay: '0.3s' }}>
        <span style={{ color: 'rgba(86, 156, 214, 0.12)' }}>const</span>
        <span style={{ color: 'rgba(156, 220, 254, 0.12)' }}> message</span>
        <span style={{ color: 'rgba(156, 220, 254, 0.12)' }}> =</span>
        <span style={{ color: 'rgba(206, 145, 120, 0.12)' }}> "Hello"</span>
        <span style={{ color: 'rgba(156, 220, 254, 0.12)' }}>;</span>
      </div>
      
      <div className="absolute bottom-1/3 right-1/12 font-mono text-xs animate-pulse opacity-40" style={{ animationDelay: '1.5s' }}>
        <span style={{ color: 'rgba(86, 156, 214, 0.12)' }}>if</span>
        <span style={{ color: 'rgba(156, 220, 254, 0.12)' }}> (</span>
        <span style={{ color: 'rgba(156, 220, 254, 0.12)' }}>true</span>
        <span style={{ color: 'rgba(156, 220, 254, 0.12)' }}>)</span>
        <span style={{ color: 'rgba(156, 220, 254, 0.12)' }}> {'{'}</span>
      </div>
      
      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

export default function Hero({ 
  name, 
  tagline, 
  welcomeMessage, 
  profileImageUrl = "/profile-placeholder.svg" 
}: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Welcome Message */}
            <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">
              {welcomeMessage}
            </p>
            
            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
              {name}
            </h1>
            
            {/* Tagline */}
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-light max-w-2xl">
              {tagline}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-lg font-semibold hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                Get In Touch
              </button>
            </div>
          </div>
          
          {/* Profile Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              
              {/* Profile Image */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                <Image
                  src={profileImageUrl}
                  alt={`${name} profile picture`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, 384px"
                />
              </div>
              
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 