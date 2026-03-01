import React from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

const testimonials = [
  {
    name: "Aisha Ibrahim",
    role: "Frontend Developer",
    company: "Freelance",
    location: "Lagos",
    quote: "Bridgify turned my banking background into real tech income. After the skill assessment, I focused on React and landed a remote contract paying ₦180k/month within 10 weeks. The marketplace actually delivers matches!",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
    skills: ["React.js", "Tailwind", "Freelance"],
    achievement: "First gig: ₦180k/mo"
  },
  {
    name: "David Okeke",
    role: "Full-Stack Engineer",
    company: "Fintech Startup",
    location: "Abuja",
    quote: "Fresh graduate with only basic HTML/CSS — employers ignored me. Bridgify gave structure, real projects, and verified certs. Built a strong portfolio, got 12+ invites, and accepted a full-time role.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
    skills: ["Node.js", "API", "Portfolio"],
    achievement: "Hired in 11 weeks"
  },
  {
    name: "Fatima Yusuf",
    role: "Product Designer",
    company: "Remote Client",
    location: "Kano",
    quote: "Balancing NYSC and learning was tough. Bridgify's flexible pace + mentorship worked perfectly. Earned certification, matched to a dollar-paying UI gig, now making $800+/month part-time.",
    photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
    skills: ["Figma", "UI/UX", "USD Income"],
    achievement: "Int'l Client in 82 days"
  },
  {
    name: "Emeka Nwosu",
    role: "Frontend Developer",
    company: "Tech Company",
    location: "Port Harcourt",
    quote: "Self-taught but no credentials. Bridgify projects + certification changed that. Landed an internship that converted to full-time at ₦280k/month. My LinkedIn badge now attracts recruiters weekly.",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
    rating: 5,
    skills: ["Vue.js", "Git", "Career Growth"],
    achievement: "Intern to Full-time"
  }
];

function TestimonialsSlider() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden relative">
      
      {/* 
        Define CSS Animation inline to avoid external dependency issues.
        This creates the smooth infinite scrolling effect.
      */}
      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 2)); } /* Move by 50% since list is doubled */
        }
        .animate-scroll {
          animation: infinite-scroll 40s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-indigo-600 font-bold tracking-wider uppercase text-xs sm:text-sm mb-3 block">
            Real Stories, Real Results
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Success Stories from Graduates
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            See how Nigerians are bridging the gap from learning to earning with Bridgify.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden group">
          
          {/* Gradient Masks (Fade to white on edges) */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling Track */}
          <div className="flex gap-6 animate-scroll py-4 pl-4">
            
            {/* Render array twice to create seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                // Fixed width (w-[350px] or w-[400px]) prevents squashed text
                className="w-[340px] md:w-[400px] flex-shrink-0 flex flex-col bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-indigo-100 transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative Background Quote Icon */}
                <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-50 -rotate-12 pointer-events-none" />

                <div className="p-7 flex-grow flex flex-col relative z-10">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote - limited to 4 lines to prevent overflow */}
                  <blockquote className="text-base text-gray-700 leading-relaxed mb-6 line-clamp-4 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author Profile */}
                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-indigo-50"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-gray-500 font-medium">
                        {testimonial.role}
                      </p>
                      <p className="text-[10px] text-gray-400 mt-0.5">
                        {testimonial.company} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-7 py-4 bg-gray-50/80 border-t border-gray-100 flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {testimonial.skills.slice(0, 2).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-white border border-gray-200 text-gray-600 text-[10px] rounded font-semibold uppercase tracking-wide"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-100/50">
                    <CheckCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <p className="text-[10px] font-bold whitespace-nowrap">
                      {testimonial.achievement}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 md:mt-20">
          <p className="text-gray-600 mb-6 text-lg">
            Your success story starts here — join hundreds already earning.
          </p>
          <a
            href="#get-started"
            className="inline-flex px-8 py-4 bg-[#1132d4] text-white font-semibold rounded-xl hover:bg-[#0d25a0] transition-transform hover:-translate-y-1 shadow-md hover:shadow-lg"
          >
            Start Your Journey Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSlider;