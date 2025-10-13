"use client";

import React from "react";
import Image from "next/image";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 max-w-4xl leading-tight">
            Everything students need to learn smarter, grow faster, and stay
            career-ready.
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-6"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Smart GPA Tracker */}
          <div className="flex flex-col h-full group">
            <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl flex-1 flex flex-col transition-all duration-300 ease-out hover:scale-[1.02] border border-gray-100">
              <div className="relative w-full h-56 md:h-64 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <Image 
                    src="/cgpa-tracker.png" 
                    alt="Smart GPA Tracker" 
                    width={300} 
                    height={300} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-5 md:p-6 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 transition-colors duration-300 group-hover:text-blue-600">
                  Smart GPA Tracker
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Let AI do the hard work. Track progress, spot weak areas, and forecast your next semester performance all in one dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* AI Career Roadmap */}
          <div className="flex flex-col h-full group">
            <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl flex-1 flex flex-col transition-all duration-300 ease-out hover:scale-[1.02] border border-gray-100">
              <div className="relative w-full h-56 md:h-64 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <Image 
                    src="/aicareer-tracker.png" 
                    alt="AI Career Roadmap" 
                    width={300} 
                    height={300} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-5 md:p-6 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 transition-colors duration-300 group-hover:text-blue-600">
                  AI Career Roadmap
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Go from "I don't know what's next" to "I have a plan." Get personalized recommendations for jobs, certifications, and mentors.
                </p>
              </div>
            </div>
          </div>

          {/* Mentorship & Community */}
          <div className="flex flex-col h-full group">
            <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl flex-1 flex flex-col transition-all duration-300 ease-out hover:scale-[1.02] border border-gray-100">
              <div className="relative w-full h-56 md:h-64 overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <Image 
                    src="/mentor.png" 
                    alt="Mentorship & Community" 
                    width={300} 
                    height={300} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-5 md:p-6 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 transition-colors duration-300 group-hover:text-blue-600">
                  Mentorship & Community
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Join a verified network of mentors, students, and young professionals. Get feedback, find project partners, and grow together.
                </p>
              </div>
            </div>
          </div>

          {/* Verified Opportunities */}
          <div className="flex flex-col h-full group">
            <div className="bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl flex-1 flex flex-col transition-all duration-300 ease-out hover:scale-[1.02] border border-gray-100">
              <div className="relative w-full h-56 md:h-64 overflow-hidden bg-gradient-to-br from-green-50 to-teal-50">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <Image 
                    src="/opportunities.png" 
                    alt="Verified Opportunities" 
                    width={300} 
                    height={300} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-5 md:p-6 flex-1 flex flex-col">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 transition-colors duration-300 group-hover:text-blue-600">
                  Verified Opportunities
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Find internships, jobs, or programs without the stress. Connect with verified employers and graduate programs that fit your skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;