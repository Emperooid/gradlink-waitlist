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
                  {/* <option value="professional">Professional</option> */}
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
                    <option value="dz">Algeria</option>
                    <option value="ao">Angola</option>
                    <option value="bj">Benin</option>
                    <option value="bw">Botswana</option>
                    <option value="bf">Burkina Faso</option>
                    <option value="bi">Burundi</option>
                    <option value="cv">Cabo Verde (Cape Verde)</option>
                    <option value="cm">Cameroon</option>
                    <option value="cf">Central African Republic</option>
                    <option value="td">Chad</option>
                    <option value="km">Comoros</option>
                    <option value="cd">
                      Congo, Democratic Republic of the
                    </option>
                    <option value="cg">Congo, Republic of the</option>
                    <option value="ci">Côte d'Ivoire (Ivory Coast)</option>
                    <option value="dj">Djibouti</option>
                    <option value="eg">Egypt</option>
                    <option value="gq">Equatorial Guinea</option>
                    <option value="er">Eritrea</option>
                    <option value="sz">Eswatini (Swaziland)</option>
                    <option value="et">Ethiopia</option>
                    <option value="ga">Gabon</option>
                    <option value="gm">Gambia, The</option>
                    <option value="gh">Ghana</option>
                    <option value="gn">Guinea</option>
                    <option value="gw">Guinea-Bissau</option>
                    <option value="ke">Kenya</option>
                    <option value="ls">Lesotho</option>
                    <option value="lr">Liberia</option>
                    <option value="ly">Libya</option>
                    <option value="mg">Madagascar</option>
                    <option value="mw">Malawi</option>
                    <option value="ml">Mali</option>
                    <option value="mr">Mauritania</option>
                    <option value="mu">Mauritius</option>
                    <option value="ma">Morocco</option>
                    <option value="mz">Mozambique</option>
                    <option value="na">Namibia</option>
                    <option value="ne">Niger</option>
                    <option value="ng">Nigeria</option>
                    <option value="rw">Rwanda</option>
                    <option value="st">São Tomé and Príncipe</option>
                    <option value="sn">Senegal</option>
                    <option value="sc">Seychelles</option>
                    <option value="sl">Sierra Leone</option>
                    <option value="so">Somalia</option>
                    <option value="za">South Africa</option>
                    <option value="ss">South Sudan</option>
                    <option value="sd">Sudan</option>
                    <option value="tz">Tanzania</option>
                    <option value="tg">Togo</option>
                    <option value="tn">Tunisia</option>
                    <option value="ug">Uganda</option>
                    <option value="zm">Zambia</option>
                    <option value="zw">Zimbabwe</option>
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
                placeholder="Why are you joining GradLink AI? (Optional - helps with personalization)"
                className="w-full px-4 py-3 sm:py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400 bg-white/50 backdrop-blur-sm group-hover:bg-white/70"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full mt-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-purple-200"
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