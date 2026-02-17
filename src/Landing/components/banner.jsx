import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative bg-[#1132d4] text-white overflow-hidden">
      {/* Optional subtle background pattern or overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.08)_0%,transparent_50%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8 lg:py-40 text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Ready to launch your career?
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto font-light leading-relaxed">
          Join thousands of ambitious learners, expert mentors, and forward-thinking companies
          <br className="hidden sm:inline" />
          building the future of work — together.
        </p>

        {/* CTA Form */}
        <div className="mt-12 max-w-2xl mx-auto">
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-96 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all text-lg backdrop-blur-sm"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-4 bg-white text-indigo-700 font-semibold text-lg rounded-xl shadow-lg hover:bg-gray-100 hover:text-indigo-800 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all transform hover:scale-105 active:scale-100"
            >
              Get Started
            </button>
          </form>

          {/* Trust signals */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm md:text-base text-blue-100/90">
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No credit card required for basic account
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Free 14-day full access trial
            </div>
          </div>
        </div>
      </div>

      {/* Optional decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
    </section>
  );
};

export default HeroBanner;