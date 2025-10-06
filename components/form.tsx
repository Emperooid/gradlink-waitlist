"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    category: '',
    schoolName: '',
    features: '',
    country: '',
    city: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('🎉 Welcome to the waitlist! Check your email for confirmation.');
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          category: '',
          schoolName: '',
          features: '',
          country: '',
          city: ''
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network error. Please check your connection and try again.');
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 px-4 py-8 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-repeat bg-pattern"></div>
        </div>

        {/* Floating particles animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-4 h-4 bg-white/10 rounded-full animate-bounce animation-delay-0"></div>
          <div className="absolute top-32 right-20 w-6 h-6 bg-purple-400/20 rounded-full animate-bounce animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-blue-400/20 rounded-full animate-bounce animation-delay-4000"></div>
          <div className="absolute bottom-40 right-1/3 w-5 h-5 bg-white/10 rounded-full animate-bounce animation-delay-1000"></div>
        </div>
      
        <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl z-10">
          {/* Enhanced Back Button */}
          <Link 
            href="/" 
            className="inline-flex items-center bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all duration-300 mb-8 group border border-white/20 hover:border-white/30 shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
              <span className="font-medium text-sm sm:text-base transition-all duration-300 group-hover:translate-x-1">
                Back to Home
              </span>
            </div>
            
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
          </Link>

        <form 
          onSubmit={handleSubmit}
          className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full animate-slideUp"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl sm:text-2xl">G</span>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
              Join Gradlink Waitlist
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Save your spot and be the first to experience the future of student networking
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
                <option value="">Select your category</option>
                <option value="undergraduate">Undergraduate Student</option>
                <option value="graduate">Graduate Student</option>
                <option value="alumni">Alumni</option>
                <option value="educator">Educator</option>
                <option value="professional">Professional</option>
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
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="au">Australia</option>
                  <option value="ng">Nigeria</option>
                  <option value="gh">Ghana</option>
                  <option value="za">South Africa</option>
                  <option value="other">Other</option>
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-purple-200"
          >
            Join Waitlist - It's Free!
          </button>

          {/* Footer */}
          <p className="text-center text-xs sm:text-sm text-gray-500 mt-6 leading-relaxed">
            By joining our waitlist, you agree to our{" "}
            <a href="#" className="text-purple-600 underline hover:text-purple-800 transition-colors">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-purple-600 underline hover:text-purple-800 transition-colors">
              Privacy Policy
            </a>
            .
          </p>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-gray-100">
            <div className="flex items-center text-xs sm:text-sm text-gray-500">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No Spam
            </div>
            <div className="flex items-center text-xs sm:text-sm text-gray-500">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Secure
            </div>
            <div className="flex items-center text-xs sm:text-sm text-gray-500">
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Free Forever
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default SignupForm;
