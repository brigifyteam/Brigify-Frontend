import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  Filter,
  ArrowUpDown,
  Clock,
  Star,
  Code,
  BrainCircuit,
  Check,
  ChevronRight
} from 'lucide-react';

// --- Mock Data matching the screenshot ---
const CATEGORIES = [
  { id: 'all', label: 'All Categories' },
  { id: 'web-dev', label: 'Web Dev' },
  { id: 'ai', label: 'Artificial Intelligence' },
  { id: 'ui-ux', label: 'UI/UX Design' },
  { id: 'data-science', label: 'Data Science' },
  { id: 'cloud', label: 'Cloud Computing' },
];

const COURSES = [
  // Web Development
  {
    id: 1,
    categoryId: 'web-dev',
    title: 'Frontend Mastery: React & Next.js',
    description: 'Master the latest frontend technologies and build production-ready applications with modern frameworks.',
    level: 'ADVANCED',
    duration: 24,
    rating: 4.9,
    reviews: 1200,
    reviewsText: '1.2k',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop',
    imageOverlay: 'bg-teal-700/60',
    isPrimaryBtn: true,
  },
  {
    id: 2,
    categoryId: 'web-dev',
    title: 'Scalable Node.js Backend',
    description: 'Build robust and scalable APIs using Node.js, Express, and modern database architectures.',
    level: 'INTERMEDIATE',
    duration: 18,
    rating: 4.7,
    reviews: 850,
    reviewsText: '850',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop',
    imageOverlay: 'bg-emerald-600/50',
    isPrimaryBtn: false,
  },
  {
    id: 3,
    categoryId: 'web-dev',
    title: 'Full-stack Essentials',
    description: 'The complete foundation for modern web apps. From HTML/CSS to basic cloud deployment.',
    level: 'BEGINNER',
    duration: 32,
    rating: 4.8,
    reviews: 2400,
    reviewsText: '2.4k',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop',
    imageOverlay: 'bg-orange-100/40',
    isPrimaryBtn: false,
  },
  // Artificial Intelligence
  {
    id: 4,
    categoryId: 'ai',
    title: 'AI Foundations & Prompt Engineering',
    description: 'Learn the core concepts of artificial intelligence and how to effectively communicate with LLMs.',
    level: 'ALL LEVELS',
    duration: 12,
    rating: 4.8,
    reviews: 3100,
    reviewsText: '3.1k',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    imageOverlay: 'bg-gray-200/50',
    isPrimaryBtn: false,
  },
  {
    id: 5,
    categoryId: 'ai',
    title: 'Machine Learning Models with Python',
    description: 'Deep dive into training, testing, and deploying machine learning models using Scikit-Learn.',
    level: 'INTERMEDIATE',
    duration: 45,
    rating: 4.6,
    reviews: 920,
    reviewsText: '920',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop',
    imageOverlay: 'bg-teal-900/60',
    isPrimaryBtn: false,
  },
  {
    id: 6,
    categoryId: 'ai',
    title: 'Advanced Neural Networks & Deep Learning',
    description: 'Architect complex neural networks using PyTorch and TensorFlow for computer vision and NLP.',
    level: 'EXPERT',
    duration: 60,
    rating: 4.9,
    reviews: 450,
    reviewsText: '450',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop',
    imageOverlay: 'bg-slate-800/60',
    isPrimaryBtn: false,
  },
];

const CATEGORY_META = {
  'web-dev': { title: 'Web Development', icon: Code, iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
  'ai': { title: 'Artificial Intelligence', icon: BrainCircuit, iconBg: 'bg-purple-100', iconColor: 'text-purple-600' },
  // Add meta for others if needed
};

export default function LearningPaths() {
  const [activeTab, setActiveTab] = useState('all');

  // Filter & Sort State
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  const [selectedLevels, setSelectedLevels] = useState([]); // Empty means all levels
  const [sortBy, setSortBy] = useState('popular'); // popular, rating, duration

  const filterRef = useRef(null);
  const sortRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (filterRef.current && !filterRef.current.contains(event.target)) setIsFilterOpen(false);
      if (sortRef.current && !sortRef.current.contains(event.target)) setIsSortOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- Filter & Sort Handlers ---


  // --- Derived Data using useMemo ---
  const processedCourses = useMemo(() => {
    let filtered = COURSES;

    // 1. Filter by Level
    if (selectedLevels.length > 0) {
      filtered = filtered.filter(course => selectedLevels.includes(course.level));
    }

    // 2. Sort Logic
    filtered = [...filtered].sort((a, b) => {
      if (sortBy === 'popular') return b.reviews - a.reviews;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'duration') return a.duration - b.duration; // Shortest first
      return 0;
    });

    // 3. Group by Category
    const grouped = filtered.reduce((acc, course) => {
      if (!acc[course.categoryId]) acc[course.categoryId] = [];
      acc[course.categoryId].push(course);
      return acc;
    }, {});

    return grouped;
  }, [selectedLevels, sortBy]);

  // Determine which categories to display
  const categoriesToShow = activeTab === 'all'
    ? Object.keys(processedCourses)
    : [activeTab].filter(cat => processedCourses[cat]);

  return (
    <div className="min-h-screen bg-[#f8f9fc] py-30 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* --- Header Section --- */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
            Level Up Your Career
          </h1>
          <p className="text-lg text-gray-600">
            Discover personalized learning paths tailored for your professional growth.
          </p>
        </div>

        {/* --- Controls Bar: Tabs + Filter/Sort --- */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-gray-200 mb-10 pb-4 lg:pb-0 gap-4">

          {/* Tabs */}
          <div className="flex overflow-x-auto hide-scrollbar -mb-px w-full lg:w-auto">
            <div className="flex space-x-6 lg:space-x-8 px-1">
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${activeTab === category.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Filter & Sort Buttons */}
          <div className="flex items-center gap-3 lg:pb-4 self-start lg:self-auto">

            {/* Filter Dropdown */}
            <div className="relative" ref={filterRef}>
              <button
                onClick={() => { setIsFilterOpen(!isFilterOpen); setIsSortOpen(false); }}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
              >
                <Filter className="w-4 h-4 text-gray-500" />
                Filter
                {selectedLevels.length > 0 && (
                  <span className="ml-1 bg-blue-100 text-blue-700 py-0.5 px-2 rounded-full text-xs">
                    {selectedLevels.length}
                  </span>
                )}
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-lg z-20 py-2">
                  <div className="px-4 py-2 border-b border-gray-100 mb-2">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Level</h4>
                  </div>
                  {['BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT', 'ALL LEVELS'].map(level => (
                    <label key={level} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 cursor-pointer group">
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedLevels.includes(level) ? 'bg-blue-600 border-blue-600' : 'border-gray-300 bg-white group-hover:border-blue-400'
                        }`}>
                        {selectedLevels.includes(level) && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                      </div>
                      <span className="text-sm text-gray-700 font-medium capitalize">{level.toLowerCase()}</span>
                    </label>
                  ))}
                  {selectedLevels.length > 0 && (
                    <div className="px-4 pt-2 pb-1 mt-2 border-t border-gray-100">
                      <button onClick={() => setSelectedLevels([])} className="text-sm text-blue-600 font-medium hover:text-blue-800 w-full text-left">
                        Clear filters
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="relative" ref={sortRef}>
              <button
                onClick={() => { setIsSortOpen(!isSortOpen); setIsFilterOpen(false); }}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-100"
              >
                <ArrowUpDown className="w-4 h-4 text-gray-500" />
                Sort
              </button>

              {isSortOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg z-20 py-2">
                  <div className="px-4 py-2 border-b border-gray-100 mb-2">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Sort by</h4>
                  </div>
                  {[
                    { id: 'popular', label: 'Most Popular' },
                    { id: 'rating', label: 'Highest Rated' },
                    { id: 'duration', label: 'Shortest Duration' },
                  ].map(option => (
                    <button
                      key={option.id}
                      onClick={() => { setSortBy(option.id); setIsSortOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${sortBy === option.id ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* --- Content Sections --- */}
        {categoriesToShow.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 border-dashed">
            <p className="text-gray-500 text-lg">No courses match your current filters.</p>
            <button onClick={() => setSelectedLevels([])} className="mt-4 text-blue-600 font-medium hover:underline">
              Clear filters
            </button>
          </div>
        ) : (
          categoriesToShow.map((categoryId) => {
            const meta = CATEGORY_META[categoryId];
            if (!meta) return null;
            const CategoryIcon = meta.icon;

            return (
              <div key={categoryId} className="mb-12">

                {/* Section Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${meta.iconBg}`}>
                      <CategoryIcon className={`w-5 h-5 ${meta.iconColor}`} />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">{meta.title}</h2>
                  </div>
                  <button className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                    View all
                  </button>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {processedCourses[categoryId].map((course) => (
                    <div
                      key={course.id}
                      className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group"
                    >
                      {/* Image Banner Area */}
                      <div className="relative h-44 overflow-hidden bg-gray-100">
                        {/* Level Badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="bg-white/95 backdrop-blur-sm text-gray-800 text-[10px] font-bold uppercase tracking-wider py-1 px-2.5 rounded shadow-sm">
                            {course.level}
                          </span>
                        </div>

                        {/* Background Image & Overlay */}
                        <div className={`absolute inset-0 ${course.imageOverlay} z-0 mix-blend-multiply group-hover:opacity-80 transition-opacity`} />
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Content Area */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
                          {course.description}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center gap-4 text-xs font-semibold text-gray-500 mb-5">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-gray-400" />
                            {course.duration} Hours
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                            <span className="text-gray-700">{course.rating}</span>
                            <span className="font-normal text-gray-400">({course.reviewsText})</span>
                          </div>
                        </div>

                        {/* Action Button */}
                        <button
                          className={`w-full py-2.5 px-4 rounded-xl text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 ${course.isPrimaryBtn
                              ? 'bg-[#1132d4] text-white hover:bg-blue-800 focus:ring-[#1132d4] shadow-sm'
                              : 'bg-indigo-50 text-[#1132d4] hover:bg-indigo-100 focus:ring-indigo-200'
                            }`}
                        >
                          Enroll Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })
        )}
      </div>
    </div>
  );
}