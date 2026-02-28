import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

import JobCard from './JobCard';

// Import real job data
import { jobs } from '../../data/jobs';

const SKILLS_OPTIONS = [
  "React",
  "Python",
  "UI/UX Design",
  "DevOps",
  "Figma",
  "Machine Learning",
  "Cybersecurity",
  "Cloud Architecture"
];

const EXPERIENCE_OPTIONS = [
  "Entry",
  "Mid",
  "Senior",
  "Lead"
];

const ITEMS_PER_PAGE = 6;

export default function JobBoard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedExp, setSelectedExp] = useState("");
  const [locationQuery, setLocationQuery] = useState("");
  const [isRemote, setIsRemote] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedSkills, selectedExp, locationQuery, isRemote]);

  const toggleSkill = (skill) => {
    setSelectedSkills(prev =>
      prev.includes(skill) ? prev.filter(s => s !== skill) : [...prev, skill]
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedSkills([]);
    setSelectedExp("");
    setLocationQuery("");
    setIsRemote(false);
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSkills =
        selectedSkills.length === 0 ||
        selectedSkills.some(skill =>
          job.skills.some(s => s.toLowerCase().includes(skill.toLowerCase()))
        );

      const matchesExp =
        !selectedExp ||
        job.level.toLowerCase().includes(selectedExp.toLowerCase()) ||
        (job.experience && job.experience.toLowerCase().includes(selectedExp.toLowerCase()));

      const matchesLocation = job.location.toLowerCase().includes(locationQuery.toLowerCase());

      const matchesRemote = !isRemote || job.remote || job.location.toLowerCase().includes("remote");

      return matchesSearch && matchesSkills && matchesExp && matchesLocation && matchesRemote;
    });
  }, [searchQuery, selectedSkills, selectedExp, locationQuery, isRemote]);

  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
  const paginatedJobs = filteredJobs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = page => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] py-30 px-4 sm:px-6 flex justify-center font-sans text-gray-900">
      <div className="max-w-[1200px] w-full flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
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

          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Skills</h3>
            <div className="space-y-3">
              {SKILLS_OPTIONS.map(skill => {
                const isChecked = selectedSkills.includes(skill);
                return (
                  <label key={skill} className="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" className="hidden" checked={isChecked} onChange={() => toggleSkill(skill)} />
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${isChecked
                          ? "bg-blue-600 border-blue-600"
                          : "border-gray-300 bg-white group-hover:border-blue-400"
                        }`}
                    >
                      {isChecked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                    </div>
                    <span className={`text-sm font-medium ${isChecked ? "text-gray-900" : "text-gray-600"}`}>{skill}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Experience Level</h3>
            <div className="space-y-3">
              {EXPERIENCE_OPTIONS.map(exp => {
                const isChecked = selectedExp === exp;
                return (
                  <label key={exp} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      className="hidden"
                      checked={isChecked}
                      onChange={() => setSelectedExp(isChecked ? "" : exp)}
                    />
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${isChecked
                          ? "border-blue-600 bg-white ring-1 ring-blue-600 ring-offset-1"
                          : "border-gray-300 bg-white group-hover:border-blue-400"
                        }`}
                    >
                      {isChecked && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                    </div>
                    <span className={`text-sm font-medium ${isChecked ? "text-gray-900" : "text-gray-600"}`}>{exp}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Location</h3>
            <div className="relative mb-3">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                value={locationQuery}
                onChange={e => setLocationQuery(e.target.value)}
                placeholder="City or Country"
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 shadow-sm transition-all"
              />
            </div>
            <button
              onClick={() => setIsRemote(!isRemote)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${isRemote
                  ? "bg-indigo-100 text-indigo-700 border border-indigo-200 hover:bg-indigo-200"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
            >
              Remote Only
              {isRemote && <X className="w-3 h-3" />}
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1">
          {/* Search & count */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search job titles, keywords, or companies..."
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all"
              />
            </div>
            <div className="text-sm text-gray-500 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm whitespace-nowrap">
              Showing <span className="font-bold text-blue-600">{filteredJobs.length}</span> job
              {filteredJobs.length !== 1 && "s"}
            </div>
          </div>

          {/* Job cards */}
          <div className="space-y-4">
            {paginatedJobs.length > 0 ? (
              paginatedJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))
            ) : (
              <div className="bg-white border border-gray-200 border-dashed rounded-xl p-12 flex flex-col items-center justify-center text-center shadow-sm">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <ShieldAlert className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-500 max-w-sm mb-6">
                  We couldn't find any job opportunities matching your criteria. Try adjusting your filters.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2.5 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2 flex-wrap">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {getPageNumbers().map((page, index) =>
                page === "..." ? (
                  <span key={`ellipsis-${index}`} className="w-9 h-9 flex items-center justify-center text-gray-400">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-9 h-9 flex items-center justify-center rounded-lg font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${currentPage === page
                        ? "bg-blue-600 text-white shadow-sm focus:ring-offset-1"
                        : "border border-gray-200 bg-white text-gray-600 hover:bg-gray-50"
                      }`}
                  >
                    {page}
                  </button>
                )
              )}

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