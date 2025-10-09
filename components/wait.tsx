import Link from 'next/link';

const Wait = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-25 via-white to-blue-50 px-4 py-16 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-50 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-100 rounded-full opacity-15 blur-3xl"></div>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 max-w-6xl w-full flex flex-col md:flex-row justify-between gap-12 md:gap-16 relative z-10 border border-blue-50">
        {/* Left Column - CTA */}
        <div className="flex flex-col gap-8 md:max-w-md">
          {/* Decorative accent */}
          <div className="w-16 h-1 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full"></div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            You Can't Afford to Miss This Moment
          </h1>
          
          <Link href="/waitlist">
            <button className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 text-white px-8 py-4 rounded-full text-base font-semibold shadow-lg hover:shadow-xl flex items-center gap-3 w-fit group ring-2 ring-blue-200 ring-offset-2 hover:ring-offset-4 transform hover:scale-105">
              Join the Waitlist 
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </Link>

          {/* Trust indicators */}
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-white shadow-md"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-200 to-blue-300 border-2 border-white shadow-md"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-300 to-blue-400 border-2 border-white shadow-md"></div>
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-blue-400">500+</span> students waiting
            </div>
          </div>
        </div>

        {/* Right Column - Description */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="relative">
            {/* Quote decoration */}
            <div className="absolute -top-4 -left-4 text-6xl text-blue-100 font-serif">"</div>
            
            <div className="text-gray-700 text-lg md:text-xl leading-relaxed space-y-4 relative z-10 pl-8">
              <p className="font-medium">
                The future of learning in Africa is here — and you get to be part of the first generation building it.
              </p>
              <p>
                Where AI meets opportunity, and every student's effort actually counts.
              </p>
              <p>
                From mentorship to verified jobs, GradLink AI is redefining what it means to be career-ready.
              </p>
            </div>

            {/* Bottom accent */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex-1 h-px bg-gradient-to-r from-blue-100 to-transparent"></div>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-150 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wait;