import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Briefcase, Banknote, Bookmark, Cpu, Cloud, LineChart, Share2 } from 'lucide-react';

const JobCard = ({ job }) => {
    // Map job-specific icons and colors based on title/category
    const getIcon = () => {
        if (job.title.includes("Frontend") || job.title.includes("UX") || job.title.includes("Designer")) {
            return { icon: <Cpu className="w-6 h-6 text-blue-600" />, bg: "bg-blue-50" };
        }
        if (job.title.includes("Backend") || job.title.includes("Python") || job.title.includes("Node")) {
            return { icon: <LineChart className="w-6 h-6 text-amber-500" />, bg: "bg-amber-50" };
        }
        if (job.title.includes("DevOps") || job.title.includes("Cloud") || job.title.includes("Architect")) {
            return { icon: <Cloud className="w-6 h-6 text-indigo-500" />, bg: "bg-indigo-50" };
        }
        return { icon: <Share2 className="w-6 h-6 text-gray-700" />, bg: "bg-gray-100" };
    };

    const { icon, bg: iconBg } = getIcon();

    // Salary formatting
    const salaryText = job.salaryMin && job.salaryMax
        ? `$${job.salaryMin}k - $${job.salaryMax}k`
        : "Competitive";

    // Badge logic
    const badge = job.remote
        ? { text: "REMOTE", color: "text-indigo-700 bg-indigo-100" }
        : job.postedAgo.includes("day") || job.postedAgo.includes("hour") || job.postedAgo.includes("Yesterday")
            ? { text: "NEW", color: "text-emerald-700 bg-emerald-100" }
            : null;

    // Experience formatting fix
    const experienceDisplay = job.experience || (job.level.toLowerCase().includes("senior") ? "Senior (5+ yrs)" : "Mid / Senior");

    return (
        <div className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col sm:flex-row gap-5 items-start sm:items-center group">
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg} transition-transform duration-300 group-hover:scale-105`}>
                {icon}
            </div>

            <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                        {job.title}
                    </h3>
                    {badge && (
                        <span className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md ${badge.color}`}>
                            {badge.text}
                        </span>
                    )}
                </div>
                <div className="text-sm text-gray-500 font-medium mb-3">{job.company}</div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-medium">
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        {job.location}
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                        <Briefcase className="w-4 h-4 text-gray-400" />
                        {job.type.replace('-', ' ')}
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                        <Banknote className="w-4 h-4 text-gray-400" />
                        {salaryText}
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                        <Briefcase className="w-4 h-4 text-gray-400" />
                        {experienceDisplay}
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto mt-4 sm:mt-0">
                <button className="p-2.5 text-gray-400 border border-gray-200 rounded-lg hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all">
                    <Bookmark className="w-5 h-5" />
                </button>
                <Link
                    to={`/jobs/${job.id}`}
                    className="flex-1 sm:flex-none px-6 py-2.5 bg-blue-50 text-blue-700 font-semibold text-sm rounded-lg hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default JobCard;
