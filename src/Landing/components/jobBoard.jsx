import React, { useState, useMemo, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Banknote, 
  Bookmark, 
  ChevronLeft, 
  ChevronRight, 
  X,
  Cpu,
  Share2,
  Cloud,
  LineChart,
  Check,
  ShieldAlert
} from 'lucide-react';

// --- Base Dummy Data ---
const BASE_JOBS = [
  {
    title: "Senior Frontend Engineer", company: "TechFlow Inc.", location: "San Francisco, CA", type: "Full-time", salary: "$140k - $180k",
    badge: { text: "NEW", color: "text-emerald-700 bg-emerald-100" },
    icon: <Cpu className="w-6 h-6 text-blue-600" />, iconBg: "bg-blue-50",
    skills: ["React / Frontend", "UI/UX Design"], experience: "Senior (5-8 yrs)",
  },
  {
    title: "Product Design Intern", company: "Prisma Labs", location: "Remote", type: "Internship", salary: "$25/hr",
    badge: { text: "REMOTE", color: "text-indigo-700 bg-indigo-100" },
    icon: <Share2 className="w-6 h-6 text-gray-700" />, iconBg: "bg-gray-100",
    skills: ["UI/UX Design"], experience: "Entry (0-2 yrs)",
  },
  {
    title: "DevOps Specialist", company: "CloudScale Systems", location: "New York, NY", type: "Full-time", salary: "$160k - $210k",
    badge: null,
    icon: <Cloud className="w-6 h-6 text-indigo-500" />, iconBg: "bg-indigo-50",
    skills: ["DevOps / AWS", "Python / Backend"], experience: "Mid (2-5 yrs)",
  },
  {
    title: "Junior Python Developer", company: "DataInsight Ltd.", location: "Berlin, DE", type: "Full-time", salary: "€55k - €70k",
    badge: null,
    icon: <LineChart className="w-6 h-6 text-amber-500" />, iconBg: "bg-amber-50",
    skills: ["Python / Backend"], experience: "Entry (0-2 yrs)",
  },
  {
    title: "Lead Cloud Architect", company: "Nebula Networks", location: "Austin, TX (Remote)", type: "Full-time", salary: "$190k - $240k",
    badge: { text: "HOT", color: "text-orange-700 bg-orange-100" },
    icon: <Cloud className="w-6 h-6 text-orange-500" />, iconBg: "bg-orange-50",
    skills: ["DevOps / AWS"], experience: "Lead / Principal",
  }
];

// Generate 24 jobs so we have enough data to demonstrate pagination
const JOB_LISTINGS = Array.from({ length: 24 }, (_, i) => ({
  ...BASE_JOBS[i % BASE_JOBS.length],
  id: i + 1,
  // Removed the (Role X) text appended to the titles
  title: BASE_JOBS[i % BASE_JOBS.length].title,
}));

const SKILLS_OPTIONS = ["React / Frontend", "Python / Backend", "UI/UX Design", "DevOps / AWS"];
const EXPERIENCE_OPTIONS = ["Entry (0-2 yrs)", "Mid (2-5 yrs)", "Senior (5-8 yrs)", "Lead / Principal"];
const ITEMS_PER_PAGE = 5;

export default function JobBoard() {
  // --- State Management ---
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedExp, setSelectedExp] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [isRemote, setIsRemote] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // Reset to page 1 whenever any filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedSkills, selectedExp, locationQuery, isRemote]);

  // --- Handlers ---
  const toggleSkill = (skill) => {
    setSelectedSkills(prev => prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]);
  };

  const clearFilters = () => {
    setSearchQuery(""); setSelectedSkills([]); setSelectedExp(""); setLocationQuery(""); setIsRemote(false);
  };

  // --- Filtering Logic ---
  const filteredJobs = useMemo(() => {
    return JOB_LISTINGS.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            job.company.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSkills = selectedSkills.length === 0 || selectedSkills.some(skill => job.skills.includes(skill));
      const matchesExp = !selectedExp || job.experience === selectedExp;
      const matchesLocation = job.location.toLowerCase().includes(locationQuery.toLowerCase());
      const matchesRemote = !isRemote || job.location.toLowerCase().includes('remote') || job.badge?.text === 'REMOTE';

      return matchesSearch && matchesSkills && matchesExp && matchesLocation && matchesRemote;
    });
  }, [searchQuery, selectedSkills, selectedExp, locationQuery, isRemote]);

  // --- Pagination Logic ---
  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
  const paginatedJobs = filteredJobs.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Smart Pagination Array Generator (Handles ellipses like 1, 2, ..., 12)
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] py-30 px-4 sm:px-6 flex justify-center font-sans text-gray-900">
      <div className="max-w-[1200px] w-full flex flex-col md:flex-row gap-8">
        
        {/* === SIDEBAR (FILTERS) === */}
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Filters</h2>
            <button 
              onClick={clearFilters}
              className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              Clear all
            </button>
          </div>

          {/* Skills Filter */}
          <div className="mb-8">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Skills</h3>
            <div className="space-y-3">
              {SKILLS_OPTIONS.map((skill) => {
                const isChecked = selectedSkills.includes(skill);
                return (
                  <label key={skill} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="hidden" checked={isChecked} onChange={() => toggleSkill(skill)} />
                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                      isChecked ? 'bg-blue-600 border-blue-600' : 'border-gray-300 bg-white group-hover:border-blue-400'
                    }`}>
                      {isChecked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                    </div>
                    <span className={`text-sm font-medium ${isChecked ? 'text-gray-900' : 'text-gray-600'}`}>{skill}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Experience Level Filter */}
          <div className="mb-8">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Experience Level</h3>
            <div className="space-y-3">
              {EXPERIENCE_OPTIONS.map((exp) => {
                const isChecked = selectedExp === exp;
                return (
                  <label key={exp} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" className="hidden" checked={isChecked}
                      onChange={() => setSelectedExp(isChecked ? "" : exp)} 
                      onClick={() => isChecked && setSelectedExp("")} 
                    />
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                      isChecked ? 'border-blue-600 bg-white ring-1 ring-blue-600 ring-offset-1' : 'border-gray-300 bg-white group-hover:border-blue-400'
                    }`}>
                      {isChecked && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                    </div>
                    <span className={`text-sm font-medium ${isChecked ? 'text-gray-900' : 'text-gray-600'}`}>{exp}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Location Filter */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Location</h3>
            <div className="relative mb-3">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" value={locationQuery} onChange={(e) => setLocationQuery(e.target.value)} placeholder="City or Country" 
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 shadow-sm transition-all"
              />
            </div>
            <button 
              onClick={() => setIsRemote(!isRemote)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
                isRemote ? 'bg-indigo-100 text-indigo-700 border border-indigo-200 hover:bg-indigo-200' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              Remote Only
              {isRemote && <X className="w-3 h-3" />}
            </button>
          </div>
        </aside>

        {/* === MAIN CONTENT (JOB LISTINGS) === */}
        <main className="flex-1">
          
          {/* Header & Search */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search job titles, keywords, or companies..." 
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
              />
            </div>
            <div className="text-sm text-gray-500 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm whitespace-nowrap">
              Showing <span className="font-bold text-blue-600">{filteredJobs.length}</span> job{filteredJobs.length !== 1 && 's'}
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {paginatedJobs.length > 0 ? (
              paginatedJobs.map((job) => (
                <div key={job.id} className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col sm:flex-row gap-5 items-start sm:items-center group">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${job.iconBg} transition-transform duration-300 group-hover:scale-105`}>
                    {job.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{job.title}</h3>
                      {job.badge && (
                        <span className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md ${job.badge.color}`}>{job.badge.text}</span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500 font-medium mb-3">{job.company}</div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">
                      <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md border border-gray-100"><MapPin className="w-4 h-4 text-gray-400" />{job.location}</div>
                      <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md border border-gray-100"><Briefcase className="w-4 h-4 text-gray-400" />{job.type}</div>
                      <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md border border-gray-100"><Banknote className="w-4 h-4 text-gray-400" />{job.salary}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto mt-4 sm:mt-0">
                    <button className="p-2.5 text-gray-400 border border-gray-200 rounded-lg hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all"><Bookmark className="w-5 h-5" /></button>
                    <button className="flex-1 sm:flex-none px-6 py-2.5 bg-blue-50 text-blue-700 font-semibold text-sm rounded-lg hover:bg-blue-600 hover:text-white transition-all shadow-sm">View Details</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white border border-gray-200 border-dashed rounded-xl p-12 flex flex-col items-center justify-center text-center shadow-sm">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4"><ShieldAlert className="w-8 h-8 text-gray-400" /></div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-500 max-w-sm mb-6">We couldn't find any job opportunities matching your criteria. Try adjusting your filters.</p>
                <button onClick={clearFilters} className="px-6 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 transition-colors">Clear all filters</button>
              </div>
            )}
          </div>

          {/* Dynamic Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-8 flex items-center justify-center gap-2">
              
              {/* Previous Button */}
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Page Numbers */}
              {getPageNumbers().map((page, index) => (
                page === '...' ? (
                  <span key={`ellipsis-${index}`} className="w-9 h-9 flex items-center justify-center text-gray-400">
                    ...
                  </span>
                ) : (
                  <button 
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-9 h-9 flex items-center justify-center rounded-lg font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      currentPage === page 
                        ? 'bg-blue-600 text-white shadow-sm focus:ring-offset-1' 
                        : 'border border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                )
              ))}

              {/* Next Button */}
              <button 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              
            </div>
          )}
          
        </main>
      </div>
    </div>
  );
}