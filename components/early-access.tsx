import React from "react";
import Link from "next/link";

const EarlyAccessPerks: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 py-20 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-blue-600 opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-400 rounded-full blur-2xl opacity-15 transform -translate-x-1/2 translate-y-1/2"></div>

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
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-white text-lg">
                  First Access to Beta Tools Get hands-on with GradLink AI's Smart
                  GPA Tracker, Career Roadmap, and Mentorship features before
                  anyone else.
                </p>
              </div>

              {/* Perk 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-white text-lg">
                  Exclusive Founding Member Badge Show off your "Early Adopter"
                  status on your GradLink profile — it'll stay forever.
                </p>
              </div>

              {/* Perk 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-white text-lg">
                  Priority Mentorship & Community Access Join our private WhatsApp
                  group for early users, connect directly with mentors, and shape
                  upcoming features.
                </p>
              </div>

              {/* Perk 4 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-white text-lg">
                  Access to Challenges & Scholarships Compete in GradLink
                  AI-sponsored university challenges and unlock funding or
                  internship opportunities.
                </p>
              </div>

              {/* Perk 5 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-white text-lg">
                  Shape the Future of GradLink Your feedback directly guides our
                  roadmap — from new features to partnerships.
                </p>
              </div>

              {/* Perk 6 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mt-1">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-white text-lg">
                  Earn Reward Points Before Launch Collect bonus "SkillCoins" for
                  referrals, surveys, and beta feedback that count toward
                  GradLink benefits.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Link href="/waitlist">
                <button className="bg-purple-500 hover:bg-purple-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Join the Waitlist
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content - Student Image */}
          <div className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="bg-gray-50 rounded-2xl p-6 shadow-inner">
                <div className="aspect-video rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src="/group-young-afro-american-female-student-dressed-black-graduation-gown-campus-as-background.jpg"
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
