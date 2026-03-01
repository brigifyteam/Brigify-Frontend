import React from 'react';
import { motion } from 'framer-motion';
import { smooth } from '../../animations';

const HeroBanner = () => {
  return (
    <motion.section 
      className="relative bg-white text-gray-900 overflow-hidden" 
      initial={{ opacity: 0, y: 6 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={smooth}
    >
      {/* Background & Decorative Elements (Moved behind content using z-0) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle light background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(17,50,212,0.03)_0%,transparent_50%)]" />
        
        <motion.div 
          className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" 
          animate={{ y: [0, -8, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} 
        />
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" 
          animate={{ x: [0, 8, 0] }} 
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} 
        />
      </div>

      {/* Main Content (Added relative and z-10 to bring it ABOVE the background blur) */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-8 lg:py-40 text-center">
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Ready to <span className="text-[#1132d4]">launch your career?</span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
          Join thousands of learners, mentors, and companies building the future of work together.
        </p>

        {/* CTA Form */}
        <div className="mt-12 max-w-2xl mx-auto">
          <form className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-96 px-6 py-4 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1132d4] focus:border-transparent transition-colors text-lg shadow-sm"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-4 bg-[#1132d4] text-white font-semibold text-lg rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1132d4] focus:ring-offset-2 transition-colors"
            >
              Get Started
            </button>
          </form>
        </div>

      </div>
    </motion.section>
  );
};

export default HeroBanner;