import React from 'react';
import PropTypes from 'prop-types';
import { MapPin, Briefcase, Banknote, Clock, CheckCircle2, Building2, Users } from 'lucide-react';

const JobDetails = ({ job }) => {
  if (!job) {
    return (
      <div className="flex items-center justify-center min-h-[400px] bg-white rounded-xl border border-dashed border-gray-300">
        <div className="text-center">
          <p className="text-gray-500 font-medium">No job data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6 lg:space-y-8">
          {/* Header Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:p-8">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="text-white text-2xl font-bold tracking-tight">
                  {job.company.charAt(0).toLowerCase()}
                </span>
              </div>

              <div className="flex-1">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                  {job.title}
                </h1>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-600 mb-4">
                  <span className="font-semibold text-gray-800">{job.company}</span>
                  <span className="text-gray-400">•</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} className="text-gray-500" />
                    {job.location} {job.remote && <span className="text-emerald-600 font-medium">(Remote)</span>}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500">{job.postedAgo}</span>
                </div>

                {job.salaryMin && job.salaryMax && (
                  <div className="text-2xl font-bold text-emerald-700 mb-5">
                    ${job.salaryMin}K – ${job.salaryMax}K<span className="text-lg font-semibold text-gray-500"> /yr</span>
                  </div>
                )}

                <div className="flex flex-wrap gap-3">
                  <span className="px-5 py-1.5 bg-blue-50 text-blue-800 rounded-full text-sm font-semibold uppercase tracking-wide shadow-sm">
                    {job.type.replace('-', ' ')}
                  </span>
                  <span className="px-5 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold uppercase tracking-wide shadow-sm">
                    {job.level}
                  </span>
                  {job.experience && (
                    <span className="px-5 py-1.5 bg-gray-50 text-gray-700 rounded-full text-sm font-semibold uppercase tracking-wide shadow-sm">
                      {job.experience}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* About the Role */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:p-8">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-5">About the Role</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base lg:text-lg">
              {job.about}
            </p>
          </div>

          {/* Key Responsibilities */}
          {job.responsibilities && job.responsibilities.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-5">Key Responsibilities</h2>
              <ul className="space-y-4">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-700 text-base lg:text-lg">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Requirements */}
          {job.requirements && job.requirements.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-5">Requirements</h2>
              <ul className="space-y-4 text-gray-700 text-base lg:text-lg list-disc pl-6 marker:text-emerald-500">
                {job.requirements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Skills & Tech Stack */}
          {job.skills && job.skills.length > 0 && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:p-8">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-5">Skills & Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2 bg-gray-50 hover:bg-gray-100 text-gray-800 rounded-full text-sm font-medium transition-all duration-200 shadow-sm hover:shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-8 lg:self-start">
          {/* Interested Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 lg:p-7">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Interested in this job?</h3>
            <p className="text-gray-600 mb-5 text-sm">
              Join {job.applicants || 0} other applicants.
            </p>

            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3.5 px-6 rounded-xl mb-4 transition-all shadow-md hover:shadow-lg">
              Apply Now →
            </button>

            <button className="w-full border-2 border-gray-200 hover:border-gray-300 text-gray-800 font-semibold py-3.5 px-6 rounded-xl transition-all">
              Save for Later
            </button>
          </div>

          {/* Job Meta */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="grid grid-cols-2 gap-5 text-sm">
              <div>
                <div className="text-gray-500 uppercase text-xs font-medium tracking-wider mb-1">Experience</div>
                <div className="font-semibold text-gray-900">{job.experience || 'N/A'}</div>
              </div>
              <div>
                <div className="text-gray-500 uppercase text-xs font-medium tracking-wider mb-1">Job Type</div>
                <div className="font-semibold text-gray-900">{job.type.replace('-', ' ')}</div>
              </div>
              <div>
                <div className="text-gray-500 uppercase text-xs font-medium tracking-wider mb-1">Level</div>
                <div className="font-semibold text-gray-900">{job.level}</div>
              </div>
              <div>
                <div className="text-gray-500 uppercase text-xs font-medium tracking-wider mb-1">Location</div>
                <div className="font-semibold text-gray-900">{job.remote ? 'Remote' : job.location}</div>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-white text-xl font-bold">{job.company.charAt(0).toLowerCase()}</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{job.company}</h4>
                <p className="text-sm text-gray-600">
                  {job.companyIndustry || 'Industry'} • {job.companySize || 'Size'}
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              {job.companyDescription || `${job.company} is a leading player in their field, focused on innovation and growth.`}
            </p>
            <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
              View Company Profile →
            </a>
          </div>

          {/* Verified Badge */}
          {job.verified && (
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 flex items-start gap-4 text-sm">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-gray-900">Verified Job</p>
                <p className="text-gray-700 mt-1">
                  Bridgify has verified this employer's identity and job details.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

JobDetails.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    remote: PropTypes.bool,
    salaryMin: PropTypes.number,
    salaryMax: PropTypes.number,
    type: PropTypes.string,
    level: PropTypes.string,
    postedAgo: PropTypes.string,
    experience: PropTypes.string,
    about: PropTypes.string,
    responsibilities: PropTypes.arrayOf(PropTypes.string),
    requirements: PropTypes.arrayOf(PropTypes.string),
    skills: PropTypes.arrayOf(PropTypes.string),
    applicants: PropTypes.number,
    companySize: PropTypes.string,
    companyDescription: PropTypes.string,
    companyIndustry: PropTypes.string,
    verified: PropTypes.bool,
  }),
};

export default JobDetails;