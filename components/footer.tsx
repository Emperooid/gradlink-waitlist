import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-300 rounded-full opacity-15 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main footer content */}
        <div className="flex flex-col gap-12 py-12 md:flex-row md:items-start md:justify-between md:py-16">
          {/* Brand section */}
          <div className="flex flex-col gap-4 md:max-w-sm">
            <Link href="/" className="group">
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-300">
                GradLink AI
              </span>
            </Link>
            <p className="text-base text-gray-600 leading-relaxed">
              Your AI-powered academic and career companion
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
          </div>

          {/* Navigation links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm text-gray-900 uppercase tracking-wider mb-2">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3 md:gap-3">
              <Link 
                href="/#about" 
                className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block transform"
              >
                About
              </Link>
              <Link 
                href="/#features" 
                className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block transform"
              >
                Features
              </Link>
              <Link 
                href="/#contact" 
                className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block transform"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Legal links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm text-gray-900 uppercase tracking-wider mb-2">
              Legal
            </h3>
            <div className="flex flex-col gap-3">
              <Link 
                href="/privacy" 
                className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block transform"
              >
                Privacy
              </Link>
              <Link 
                href="/terms" 
                className="text-base text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block transform"
              >
                Terms
              </Link>
            </div>
          </div>

          {/* Social media section */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-sm text-gray-900 uppercase tracking-wider mb-2">
              Connect With Us
            </h3>
            <div className="flex gap-3">
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-200 py-6">
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-center text-sm text-gray-600">
              © {new Date().getFullYear()} GradLink AI. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-blue-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}