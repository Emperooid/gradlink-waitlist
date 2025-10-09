import React from "react";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Gradient - Blue themed */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>

      {/* Background Decorative Elements - Blue palette */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Large curved shape - top left */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-40 blur-3xl"></div>

        {/* Medium curved shape - top right */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full opacity-30 blur-3xl"></div>

        {/* Bottom flowing shape */}
        <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200 to-blue-300 rounded-full opacity-35 blur-3xl"></div>

        {/* Right side flowing shape */}
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-gradient-to-bl from-blue-300 to-blue-200 rounded-full opacity-25 blur-3xl"></div>
      </div>

      {/* Floating Elements - Blue themed */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-blue-500 rounded-2xl rotate-45 opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-blue-600 rounded-2xl rotate-12 opacity-15 animate-bounce"></div>
      <div className="absolute bottom-1/3 right-1/3 w-14 h-14 bg-blue-400 rounded-2xl -rotate-12 opacity-10"></div>
      <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-blue-500 rounded-xl rotate-45 opacity-15"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto pt-20 md:pt-24">
        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
          Your Journey from Campus to
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent">
            Career Starts Here
          </span>
        </h1>

        {/* Added subtle subheading */}
        <div className="inline-block mb-8">
          <p className="text-2xl md:text-3xl font-semibold text-blue-600">
            Fun
          </p>
        </div>

        {/* Main description */}
        <p className="text-base md:text-lg text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed font-normal">
          Be the first to join the future of African education where verified
          learning, mentorship, and AI-powered career guidance meet. GradLink AI
          helps students move from "What's next?" to "I'm ready." Build your
          verified academic profile, get matched with mentors, and access real
          opportunities all in one place.
        </p>

        {/* Call to action text */}
        <div className="mb-10">
          <p className="text-lg md:text-xl text-blue-600 font-medium">
            Join the Waitlist to Unlock Early Access to GradLink AI
          </p>
        </div>

        {/* CTA Button */}
        <Link href="/waitlist">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-5 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl ring-2 ring-blue-500 ring-offset-2 hover:ring-offset-4">
            Join Waitlist
          </button>
        </Link>

        {/* Optional trust indicator */}
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Verified Learning</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>AI-Powered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Real Opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;