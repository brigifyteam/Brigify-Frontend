import React from 'react';
import { Pencil, Rocket, Sparkles, GraduationCap } from 'lucide-react';

const JourneySection = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Audience Cards */}
          <div className="space-y-6 lg:space-y-8">
            {/* Freelancers */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <Pencil className="h-8 w-8 text-teal-600 flex-shrink-0 mt-0.5" strokeWidth={2.2} />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Freelancers</h3>
                  <p className="mt-2 text-gray-700 text-[1.05rem] leading-relaxed">
                    Build a portfolio and find clients fast.
                  </p>
                </div>
              </div>
            </div>

            {/* Early Pros */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <Rocket className="h-8 w-8 text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={2.2} />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Early Pros</h3>
                  <p className="mt-2 text-gray-700 text-[1.05rem] leading-relaxed">
                    Accelerate your career with mentorship.
                  </p>
                </div>
              </div>
            </div>

            {/* Students */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start gap-6">
                <GraduationCap className="h-8 w-8 text-cyan-600 flex-shrink-0 mt-0.5" strokeWidth={2.2} />
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Students</h3>
                  <p className="mt-2 text-gray-700 text-[1.05rem] leading-relaxed">
                    Gain real-world skills outside the classroom.
                  </p>
                </div>
              </div>
            </div>

            {/* Career Switchers - Highlighted card */}
            <div className="bg-[#1132d4] rounded-2xl p-9 shadow-xl text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
              <div className="flex items-start gap-6 relative z-10">
                <Sparkles className="h-9 w-9 text-white flex-shrink-0 mt-0.5" strokeWidth={2.2} />
                <div>
                  <h3 className="text-2xl font-bold">Career Switchers</h3>
                  <p className="mt-2 text-indigo-100 text-[1.05rem] leading-relaxed">
                    Pivot to tech with a guided roadmap.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Heading + Intro + Features + Link */}
          <div className="lg:pt-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Built for every stage of your
              <br className="hidden sm:block" />
              journey
            </h2>

            <p className="mt-6 text-xl text-gray-700 leading-relaxed max-w-3xl">
              Whether you are just starting out, looking to freelance, or pivoting into a new tech role,
              Bridgify provides the ecosystem you need to succeed.
            </p>

            <div className="mt-12 space-y-10">
              <div className="flex gap-5 items-start">
                <span className="text-emerald-500 text-3xl font-black leading-none mt-1">✔</span>
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">Personalized Learning Paths</h4>
                  <p className="mt-2 text-gray-700 text-lg">
                    AI-driven recommendations based on your career goals.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <span className="text-emerald-500 text-3xl font-black leading-none mt-1">✔</span>
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">Verified Opportunities</h4>
                  <p className="mt-2 text-gray-700 text-lg">
                    Jobs and gigs vetted for quality and fair pay.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <span className="text-emerald-500 text-3xl font-black leading-none mt-1">✔</span>
                <div>
                  <h4 className="text-2xl font-semibold text-gray-900">Global Community</h4>
                  <p className="mt-2 text-gray-700 text-lg">
                    Network with peers and mentors from 50+ countries.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-14">
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[#1132d4] hover:text-indigo-800 font-medium text-xl transition-colors"
              >
                Learn more about our community
                <span aria-hidden="true" className="text-2xl">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;