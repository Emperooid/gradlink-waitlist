"use client";

import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 max-w-4xl">
          Everything students need to study smarter, learn faster, and stay ahead
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Smart Study Tool */}
          <div className="flex flex-col h-full group animate-fadeInUp animation-delay-100">
            <div className="bg-white rounded-2xl p-6 shadow-sm flex-1 flex flex-col transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:scale-105 group-hover:-translate-y-2">
              <div className="bg-purple-500 rounded-xl p-8 mb-4 h-64 flex items-center justify-center transition-all duration-300 group-hover:bg-purple-600 group-hover:scale-105 overflow-hidden">
                <div className="bg-white rounded-lg p-4 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-sm font-medium text-gray-600">AI</div>
                      <div className="text-xs text-purple-600">Summaries</div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm font-medium">23</span>
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">Quantum Physics</div>
                  <div className="text-xs text-gray-500">Engineering • Chemistry</div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="text-xs text-gray-500">Source: Walkway AI</div>
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 transition-all duration-300 group-hover:translate-y-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-purple-600">Smart Study Tool</h3>
              <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                Let AI help you summarize long PDFs, answer questions, and guide your learning based on what you're studying.
              </p>
            </div>
          </div>

          {/* Personalized Experience */}
          <div className="flex flex-col h-full group animate-fadeInUp animation-delay-200">
            <div className="bg-white rounded-2xl p-6 shadow-sm flex-1 flex flex-col transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:scale-105 group-hover:-translate-y-2">
              <div className="bg-orange-400 rounded-xl p-8 h-64 flex items-center justify-center transition-all duration-300 group-hover:bg-orange-500 group-hover:scale-105 overflow-hidden">
                <div className="bg-white rounded-lg p-4 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <img 
                      src="/api/placeholder/200/120" 
                      alt="Student studying" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personalized Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                From your department to your school type, we tailor your entire dashboard to match your academic journey and interests.
              </p>
            </div>
          </div>

          {/* Game-Driven Learning */}
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-2xl p-6 shadow-sm flex-1 flex flex-col">
              <div className="bg-green-500 rounded-xl p-8 h-64 flex items-center justify-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-gray-900">Leaderboard</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                        <span className="text-sm font-medium">You</span>
                      </div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                        <span className="text-sm">Christie Joshua</span>
                      </div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                        <span className="text-sm">Victory Precious</span>
                      </div>
                      <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Game-Driven Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Challenge friends in fast-paced quizzes, memory games, and Truth Battles. Earn points, rise on the leaderboard, and actually enjoy studying.
              </p>
            </div>
          </div>

          {/* Global Competitions */}
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-2xl p-6 shadow-sm flex-1 flex flex-col">
              <div className="bg-blue-500 rounded-xl p-8 h-64 flex items-center justify-center">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-blue-600">You Won 🏆</span>
                    </div>
                  </div>
                  <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">Maths_pal Competition</div>
                  <div className="text-xs text-gray-500">Quiz • 1,092 participants</div>
                  <div className="mt-2">
                    <button className="text-xs text-blue-600 font-medium">Join Now</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Competitions</h3>
              <p className="text-gray-600 leading-relaxed">
                Compete by school, department, or even country. Win badges, dominate leaderboards, and become the top scorer in your community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;