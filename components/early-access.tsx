import React from 'react';

const EarlyAccessPerks: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-purple-700 via-purple-600 to-purple-800 py-20 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-purple-600 opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400 rounded-full blur-2xl opacity-15 transform -translate-x-1/2 translate-y-1/2"></div>

      {/* Control Panel Icons */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 space-y-4">
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
          <span className="text-white text-xs font-bold">2x</span>
        </div>
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-full"></div>
        </div>
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="w-6 h-4 bg-white rounded-sm"></div>
        </div>
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white rounded-full"></div>
        </div>
        <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-white rounded-sm"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Early Access Perks
            </h2>
            
            <div className="space-y-6">
              {/* Perk 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white text-lg">
                  First access to our beta platform.
                </p>
              </div>

              {/* Perk 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white text-lg">
                  Special edition badges for waitlist members.
                </p>
              </div>

              {/* Perk 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white text-lg">
                  Get early invites to exclusive inter-university challenges.
                </p>
              </div>

              {/* Perk 4 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white text-lg">
                  Help shape features before they go public.
                </p>
              </div>

              {/* Perk 5 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white text-lg">
                  Climb the ranks before the crowd even starts.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-purple-500 hover:bg-purple-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Join the Waitlist
            </button>
          </div>

          {/* Right Content - Student Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-400 to-purple-500 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="Student celebrating with raised hands" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Decorative elements around the image */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-lg rotate-12 opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-green-400 rounded-full opacity-70"></div>
              <div className="absolute top-1/2 -right-6 w-10 h-10 bg-orange-400 rounded-lg -rotate-12 opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessPerks;
