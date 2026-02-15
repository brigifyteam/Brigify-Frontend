import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      "Bridgifiy didn't just teach me how to code; it connected me with a mentor who helped me land a remote job in London within 3 months. It's a game changer.",
    author: 'Sarah Jenkins',
    role: 'Frontend Developer',
    company: '@FinTech',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
    rating: 5,
  },
  {
    id: 2,
    quote:
      "The personalized learning paths and 1:1 mentorship sessions were exactly what I needed to transition from marketing to product management. Got hired in 4 months!",
    author: 'Michael Thompson',
    role: 'Product Manager',
    company: 'ScaleWave',
    imageUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
    rating: 5,
  },
  {
    id: 3,
    quote:
      "As someone with zero tech background, I was scared to start freelancing. Bridgifiy gave me structure, confidence, real projects, and now I have steady clients.",
    author: 'Aisha Rahman',
    role: 'UI/UX Designer & Freelancer',
    company: 'Self-employed',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=986&q=80',
    rating: 5,
  },
  {
    id: 4,
    quote:
      "The community hub is gold. I met collaborators from Nigeria, UK, and Canada — we built a portfolio project together that got me noticed by recruiters.",
    author: 'David Adeyemi',
    role: 'Full-Stack Developer',
    company: 'TechNova Remote',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
    rating: 5,
  },
  {
    id: 5,
    quote:
      "The freelance tools alone saved me hours every month — clean contracts, invoicing, and client matching. My income grew 3× after six months on the platform.",
    author: 'Fatima Yusuf',
    role: 'Digital Marketer & Freelancer',
    company: 'Independent',
    imageUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=986&q=80',
    rating: 5,
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            What Our Members Are Saying
          </h2>
          <p className="mt-5 text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from people who transformed their careers with Bridgifiy
          </p>
        </div>

        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100/80 overflow-hidden">
            <div className="p-8 md:p-14 lg:p-16">
              {/* Stars */}
              <div className="flex justify-center mb-8">
                {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                  <Star key={i} className="h-7 w-7 text-yellow-400 fill-yellow-400 mx-0.5" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-center">
                <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 leading-relaxed">
                  “{testimonial.quote}”
                </p>
              </blockquote>

              {/* Author info */}
              <div className="mt-12 flex flex-col items-center">
                <div className="relative mb-6">
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.author}
                    className="h-20 w-20 rounded-full object-cover ring-4 ring-white shadow-xl"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1.5 border-2 border-white">
                    <span className="block h-3 w-3" />
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-xl font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="mt-1 text-gray-600 text-lg">
                    {testimonial.role} • {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-[-4rem] top-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg hover:bg-gray-50 transition z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-8 w-8 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-[-4rem] top-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg hover:bg-gray-50 transition z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-8 w-8 text-gray-700" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-10 space-x-3">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-blue-600 w-10' : 'bg-gray-300 hover:bg-gray-400 w-3'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}