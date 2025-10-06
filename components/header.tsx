"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 w-full z-50 
        transition-all duration-300 ease-in-out
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
        }
        px-4 sm:px-6 lg:px-8 py-3 sm:py-4
        animate-slideDown
      `}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2 group cursor-pointer">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
            <span className="text-white font-bold text-lg sm:text-xl">G</span>
          </div>
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Gradlink-Ai
          </span>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center space-x-8">
          <a 
            href="#" 
            className="relative text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#FeaturesSection" 
            className="relative text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium group"
          >
            Features
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="Footer" 
            className="relative text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium group"
          >
            Contact Us
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/* Join Waitlist Button - Desktop & Tablet */}
        <Link href="/waitlist">
          <button className="hidden sm:block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-purple-200">
            Join Waitlist
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg 
            className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`
          lg:hidden absolute top-full left-0 right-0 
          bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-lg
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 visible' 
            : 'opacity-0 -translate-y-4 invisible'
          }
        `}
      >
        <div className="px-4 py-6 space-y-4">
          <a 
            href="#" 
            className="block text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium py-2 border-b border-gray-100 last:border-b-0"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#features" 
            className="block text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium py-2 border-b border-gray-100 last:border-b-0"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#contact" 
            className="block text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium py-2 border-b border-gray-100 last:border-b-0"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </a>
          <Link href="/waitlist">
            <button className="w-full sm:hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 mt-4">
              Join Waitlist
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;