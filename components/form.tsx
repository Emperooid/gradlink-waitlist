"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    category: "",
    schoolName: "",
    level: "",
    features: "",
    country: "",
    city: "",
    whyJoining: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Track successful signup (Google Analytics)
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'signup', {
            event_category: 'engagement',
            event_label: 'waitlist_signup',
            value: 1
          });
        }

        setUserEmail(formData.email);
        setIsSubmitted(true);
        setFormData({
          fullName: "",
          email: "",
          category: "",
          schoolName: "",
          level: "",
          features: "",
          country: "",
          city: "",
          whyJoining: "",
        });
      } else if (response.status === 409) {
        alert("You're already on our waitlist! Check your email for the welcome message and WhatsApp community link.");
      } else {
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Success Screen Component
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 px-4 py-8 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Glowing background accents */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 left-1/4 w-80 h-80 bg-blue-400 rounded-full mix-blend-overlay blur-3xl animate-pulse"></div>
          <div className="absolute bottom-16 right-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-overlay blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative w-full max-w-lg lg:max-w-xl z-10">
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 lg:p-12 w-full border border-gray-100 text-center">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
                <svg
                  className="w-10 h-10 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>

            {/* Success Message */}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-4">
              🎉 You're In!
            </h1>
            
            <p className="text-gray-700 text-lg font-semibold mb-2">
              Welcome to GradLink AI!
            </p>
            
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              You're officially part of the first wave of students joining Africa's campus-to-career platform.
            </p>

            {/* Email Check Box */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-6 mb-6">
              <div className="flex items-start justify-center mb-3">
                <svg
                  className="w-6 h-6 text-purple-600 mr-2 mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="text-left">
                  <h3 className="font-bold text-purple-900 text-lg">Check Your Email!</h3>
                  <p className="text-purple-700 text-sm mt-1">
                    We've sent a welcome email to:
                  </p>
                  <p className="text-purple-900 font-semibold text-sm mt-1 break-all">
                    {userEmail}
                  </p>
                </div>
              </div>
              
              <div className="bg-white/80 rounded-lg p-4 mt-4">
                <p className="text-sm text-gray-700 font-medium mb-2">📧 Email from:</p>
                <p className="text-purple-600 font-bold text-base">info@gradlink.app</p>
                <p className="text-xs text-gray-500 mt-3">
                  (Check your spam folder if you don't see it in your inbox)
                </p>
              </div>
            </div>

            {/* What's Next */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
              <h3 className="font-bold text-gray-900 text-lg mb-3 flex items-center">
                <span className="text-2xl mr-2">📋</span>
                What's Next?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">Open the email and click the WhatsApp community link</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">Join the exclusive community of early users</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">Get access to mentorship and beta features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1 flex-shrink-0">✓</span>
                  <span className="text-gray-700 text-sm">Earn your Founding Member badge 🎖️</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => window.location.href = 'mailto:'}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Open Email App 📧
              </button>
              
              <Link
                href="/"
                className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 text-center"
              >
                Back to Home
              </Link>
            </div>

            {/* Footer Note */}
            <p className="text-xs text-gray-500 mt-6">
              Didn't receive the email? Contact us at{" "}
              <a href="mailto:info@gradlink.app" className="text-purple-600 underline">
                info@gradlink.app
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Original Form (unchanged)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 px-4 py-8 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Glowing background accents */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-1/4 w-80 h-80 bg-blue-400 rounded-full mix-blend-overlay blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-overlay blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative w-full max-w-lg lg:max-w-xl z-10">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-lg transition-all duration-300 mb-8 border border-white/20 hover:border-white/30 backdrop-blur-sm"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 lg:p-12 w-full border border-gray-100"
        >
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex justify-center mb-6">
              <Image
                src="/gradlink-logo.png"
                alt="GradLink AI Logo"
                width={110}
                height={110}
                className="w-28 sm:w-32 h-auto object-contain"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Join GradLink Waitlist
            </h1>
            <p className="text-gray-600 text-sm sm:text-base mt-2">
              Save your spot and be the first to experience the future of
              student networking
            </p>
          </div>
          
          {/* Form Fields */}
          <div className="space-y-4 sm:space-y-5">
            <div className="group">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400 bg-white/50 backdrop-blur-sm group-hover:bg-white/70"
                required
              />
            </div>

            <div className="group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400 bg-white/50 backdrop-blur-sm group-hover:bg-white/70"
                required
              />
            </div>

            <div className="group">
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                aria-label="Select your category"
                className="w-full px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-700 bg-white/50 backdrop-blur-sm group-hover:bg-white/70"
                required
              >
                <option value="">Select an interest Area</option>
                <option value="undergraduate">Career Mentorship</option>
                <option value="graduate">Internship</option>
                <option value="alumni">AI Tools</option>
                <option value="educator">Community</option>
              </select>
            </div>

            <div className="group">
              <input
                type="text"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleInputChange}
                placeholder="Enter your school/university name"
                className="w-full px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400 bg-white/50 backdrop-blur-sm group-hover:bg-white/70"
                required
              />
            </div>

            <div className="group">
              <select
                name="level"
                value={formData.level}
                onChange={handleInputChange}
                aria-label="Select your academic level"
                className="w-full px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-700 bg-white/50 backdrop-blur-sm group-hover:bg-white/70"
                required
              >
                <option value="">Select your level</option>
                <option value="100level">100 Level</option>
                <option value="200level">200 Level</option>
                <option value="300level">300 Level</option>
                <option value="400level">400 Level</option>
                <option value="500level">500 Level</option>
                <option value="600level">600 Level</option>
                <option value="700level">700 Level</option>
                <option value="800level">800 Level</option>
                <option value="graduate">Graduate</option>
              </select>
            </div>

            <div className="group">
              <select
                name="features"
                value={formData.features}
                onChange={handleInputChange}
                aria-label="Select what interests you most"
                className="w-full px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-700 bg-white/50 backdrop-blur-sm group-hover:bg-white/70"
                required
              >
                <option value="">What interests you most?</option>
                <option value="networking">Student Networking</option>
                <option value="mentorship">Mentorship Programs</option>
                <option value="career">Career Opportunities</option>
                <option value="collaboration">Project Collaboration</option>
                <option value="events">Campus Events</option>
                <option value="resources">Academic Resources</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group">
                <select
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  aria-label="Select your country"
                  className="w-full px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-700 bg-white/50 backdrop-blur-sm group-hover:bg-white/70"
                  required
                >
                  <option value="">Select country</option>
                  <option value="ng">Nigeria</option>
                  <option value="gh">Ghana</option>
                  <option value="ke">Kenya</option>
                  <option value="za">South Africa</option>
                  <option value="eg">Egypt</option>
                </select>
              </div>

              <div className="group">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Enter your city"
                  className="w-full px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400 bg-white/50 backdrop-blur-sm group-hover:bg-white/70"
                  required
                />
              </div>
            </div>
          </div>

          {/* Optional Why Joining Field */}
          <div className="group mt-6">
            <input
              type="text"
              name="whyJoining"
              value={formData.whyJoining}
              onChange={handleInputChange}
              placeholder="Why are you joining GradLink AI? (Optional)"
              className="w-full px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400 bg-white/50 backdrop-blur-sm group-hover:bg-white/70"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full mt-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-purple-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? "Joining Waitlist..." : "Join Waitlist - It's Free!"}
          </button>

          {/* Footer */}
          <p className="text-center text-xs sm:text-sm text-gray-500 mt-6 leading-relaxed">
            By joining our waitlist, you agree to our{" "}
            <a
              href="#"
              className="text-purple-600 underline hover:text-purple-800 transition-colors"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#"
              className="text-purple-600 underline hover:text-purple-800 transition-colors"
            >
              Privacy Policy
            </a>
            .
          </p>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center text-xs sm:text-sm text-gray-500">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              No Spam
            </div>
            <div className="flex items-center text-xs sm:text-sm text-gray-500">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              Secure
            </div>
            <div className="flex items-center text-xs sm:text-sm text-gray-500">
              <svg
                className="w-4 h-4 mr-2 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Free Forever
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;