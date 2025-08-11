'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events for navbar background and active section
  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled or not at the very top
      setIsScrolled(window.scrollY > 0);

      // Determine active section based on scroll position
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 80; // Offset for better detection (navbar height + buffer)

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Initial check for scroll position on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling to sections
  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Get the exact navbar height for perfect alignment
      const navbarHeight = 64; // h-16 = 64px
      const offsetTop = element.offsetTop - navbarHeight;
      
      // Scroll to the exact position where section starts
      window.scrollTo({
        top: Math.max(0, offsetTop), // Ensure we don't scroll to negative values
        behavior: 'smooth'
      });
    }
    
    setIsMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.navbar-container')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav 
      className={`navbar-container fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-white/60 dark:bg-slate-900/60 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link 
            href="#home" 
            className="text-xl font-bold text-slate-900 dark:text-white hover:text-slate-700 dark:hover:text-slate-300 transition-colors cursor-pointer"
            onClick={(e) => handleNavClick('#home', e)}
          >
            Madhur Parwal 
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-slate-900 dark:text-white'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
                onClick={(e) => handleNavClick(item.href, e)}
              >
                {item.label}
                {/* Active indicator */}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900 dark:bg-white transform scale-x-100 transition-transform duration-200" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'max-h-64 opacity-100'
              : 'max-h-0 opacity-0 pointer-events-none'
          } overflow-hidden`}
        >
          <div className="py-4 space-y-2 border-t border-slate-200 dark:border-slate-700">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
                onClick={(e) => handleNavClick(item.href, e)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 