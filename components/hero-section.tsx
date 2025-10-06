import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100"></div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Large curved shape - top left */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-60 blur-3xl"></div>
        
        {/* Medium curved shape - top right */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-40 blur-2xl"></div>
        
        {/* Bottom flowing shape */}
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-gradient-to-tr from-pink-200 to-blue-200 rounded-full opacity-50 blur-3xl"></div>
        
        {/* Right side flowing shape */}
        <div className="absolute top-1/2 -right-32 w-72 h-72 bg-gradient-to-bl from-purple-200 to-pink-200 rounded-full opacity-30 blur-2xl"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-orange-400 rounded-lg rotate-45 opacity-80 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-orange-500 rounded-lg rotate-12 opacity-70 animate-bounce"></div>
      <div className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-orange-400 rounded-lg -rotate-12 opacity-60"></div>

      

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
          Learning Just Got
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Smarter and Way More
          </span>
          <br />
          Fun
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Be the first to join the future of education where study tools meet multiplayer 
          games, AI-powered learning, and real academic wins.
        </p>
        
        <Link href="/waitlist">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Join Waitlist
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;