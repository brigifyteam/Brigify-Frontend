import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { smooth } from '../../animations';

const Hero = () => {
  return (
    <motion.section className="relative w-full bg-gradient-to-br from-gray-50 via-white to-blue-50/20 py-24 md:py-32 overflow-hidden" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={smooth}>
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,rgba(59,130,246,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8 lg:space-y-10 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#1132d4] text-white text-sm font-semibold rounded-full shadow-md shadow-indigo-500/20">
              <Sparkles className="h-4 w-4" />
              <span>NEW PLATFORM LAUNCH</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Bridging the gap between{" "}
              <motion.span className="text-[#1132d4]" initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...smooth, delay: 0.06 }}>learning</motion.span> and{" "}
              <motion.span className="text-[#1132d4]" initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ ...smooth, delay: 0.12 }}>earning</motion.span>.
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-700 leading-relaxed max-w-xl">
              Master high-demand skills, receive personalized 1:1 mentorship from industry experts,
              build a professional portfolio, and land meaningful opportunities — all in one unified platform.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 pt-6">
              <button className="group px-8 py-4 bg-[#1132d4] text-white font-semibold text-lg rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2">
                Get Started — Free Trial
              </button>

              <button className="px-8 py-4 border-2 border-gray-300 text-gray-800 font-semibold text-lg rounded-xl hover:bg-[#1132d4] hover:text-white hover:border-gray-400 transition-all duration-300">
                Explore Skills
              </button>
            </div>

            {/* Trust line */}
            <p className="text-base text-gray-500 pt-4">
              No credit card required • Trusted by 10,000+ learners worldwide
            </p>
          </div>

          {/* Right: Hero Image – just a bit taller */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-500/15 border border-gray-200/50 order-1 lg:order-2">
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/5 pointer-events-none z-10" />

            {/* Slightly taller container */}
            <div className="relative w-full pt-[110%] lg:pt-[100%]"> {/* Mobile: taller, Desktop: slightly taller */}
              <img
                src="/heroImage.jpg"
                alt="Professionals collaborating and learning in modern tech environment"
                className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
              />
            </div>

            {/* Trust badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium text-gray-800 shadow-lg border border-white/40 z-20">
              4.9/5 from 2,000+ reviews
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;