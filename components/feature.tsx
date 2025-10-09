"use client";

import React from "react";

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 max-w-4xl leading-tight">
            Everything students need to learn smarter, grow faster, and stay
            career-ready.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mt-6"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Smart Study Tool */}
          <div className="flex flex-col h-full group">
            <div className="bg-white rounded-3xl p-6 shadow-md flex-1 flex flex-col transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:scale-[1.02] border border-gray-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 mb-6 h-64 flex items-center justify-center transition-all duration-300 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:scale-105 overflow-hidden relative">
                {/* Decorative circles */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-white opacity-10 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white opacity-10 rounded-full"></div>
                
                <div className="bg-white rounded-xl p-5 shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110 relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-sm font-semibold text-gray-700">
                        AI
                      </div>
                      <div className="text-xs text-blue-600 font-medium">Summaries</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm font-semibold text-gray-700">23</span>
                      <svg
                        className="w-4 h-4 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-gray-900">
                    Quantum Physics
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Engineering • Chemistry
                  </div>
                  <div className="mt-3 flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="text-xs text-gray-500 font-medium">
                      Source: Walkway AI
                    </div>
                    <svg
                      className="w-4 h-4 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-blue-600">
                  Smart GPA Tracker
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm transition-colors duration-300 group-hover:text-gray-700">
                  Let AI do the hard work. GradLink's Smart GPA Tracker doesn't
                  just calculate grades it helps you understand why your results
                  look the way they do and how to improve. Track progress, spot
                  weak areas, and forecast your next semester performance all in
                  one dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Personalized Experience */}
          <div className="flex flex-col h-full group">
            <div className="bg-white rounded-3xl p-6 shadow-md flex-1 flex flex-col transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:scale-[1.02] border border-gray-100">
              <div className="bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl p-8 h-64 flex items-center justify-center transition-all duration-300 group-hover:from-blue-500 group-hover:to-blue-600 group-hover:scale-105 overflow-hidden relative">
                <div className="absolute top-4 right-4 w-20 h-20 bg-white opacity-10 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white opacity-10 rounded-full"></div>
                
                <div className="bg-white rounded-xl p-5 shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110 relative z-10">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center p-3">
                    <div className="w-full h-full flex flex-col justify-center space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <div className="h-2 bg-blue-400 rounded w-20"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <div className="h-2 bg-blue-300 rounded w-16"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                        <div className="h-2 bg-blue-200 rounded w-14"></div>
                      </div>
                      <div className="text-blue-600 font-bold text-[10px] mt-2">AI Roadmap</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-blue-600">
                  AI Career Roadmap
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm transition-colors duration-300 group-hover:text-gray-700">
                  Go from "I don't know what's next" to "I have a plan." GradLink
                  AI connects your academic data, skills, and interests to
                  real-world career paths. Get personalized recommendations for
                  jobs, certifications, and mentors that match your goals.
                </p>
              </div>
            </div>
          </div>

          {/* Game-Driven Learning */}
          <div className="flex flex-col h-full group">
            <div className="bg-white rounded-3xl p-6 shadow-md flex-1 flex flex-col transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:scale-[1.02] border border-gray-100">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 h-64 flex items-center justify-center transition-all duration-300 group-hover:from-blue-700 group-hover:to-blue-800 group-hover:scale-105 overflow-hidden relative">
                <div className="absolute top-4 right-4 w-20 h-20 bg-white opacity-10 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white opacity-10 rounded-full"></div>
                
                <div className="bg-white rounded-xl p-5 shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                        <svg
                          className="w-3.5 h-3.5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <span className="font-bold text-gray-900 text-sm">
                        Leaderboard
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md">
                          1
                        </div>
                        <span className="text-sm font-semibold text-gray-900">You</span>
                      </div>
                      <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between p-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">
                          2
                        </div>
                        <span className="text-sm text-gray-700">Christie Joshua</span>
                      </div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between p-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-blue-300 rounded-full flex items-center justify-center text-xs font-bold text-white">
                          3
                        </div>
                        <span className="text-sm text-gray-700">Victory Precious</span>
                      </div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-blue-600">
                  Mentorship & Community
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm transition-colors duration-300 group-hover:text-gray-700">
                  You're not doing this alone. Join a verified network of mentors,
                  students, and young professionals who guide, support, and share
                  opportunities. Get feedback, find project partners, and grow
                  together.
                </p>
              </div>
            </div>
          </div>

          {/* Global Competitions */}
          <div className="flex flex-col h-full group">
            <div className="bg-white rounded-3xl p-6 shadow-md flex-1 flex flex-col transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:scale-[1.02] border border-gray-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 h-64 flex items-center justify-center transition-all duration-300 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:scale-105 overflow-hidden relative">
                <div className="absolute top-4 right-4 w-20 h-20 bg-white opacity-10 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-white opacity-10 rounded-full"></div>
                
                <div className="bg-white rounded-xl p-5 shadow-xl transition-all duration-300 group-hover:shadow-2xl group-hover:scale-110 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                        <svg
                          className="w-3.5 h-3.5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <span className="font-bold text-blue-600 text-sm">
                        You Won 🏆
                      </span>
                    </div>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg mb-3 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl shadow-lg flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm font-bold text-gray-900">
                    Maths_pal Competition
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Quiz • 1,092 participants
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <button className="text-xs text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                      Join Now →
                    </button>
                  </div>
                </div>
              </div>
              <div className="transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-blue-600">
                  Verified Opportunities
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm transition-colors duration-300 group-hover:text-gray-700">
                  Find your first internship, job, or program without the
                  stress. GradLink AI connects you with verified employers, remote
                  roles, and graduate programs that fit your skills. Every listing
                  is checked, so you only see what's real and relevant.
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