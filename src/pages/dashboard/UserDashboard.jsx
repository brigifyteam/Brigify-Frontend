import React from 'react';
import { BookOpen, Calendar, Send, PlayCircle, Briefcase, Download, Users, Lightbulb, ChevronRight } from 'lucide-react';

const UserDashboard = () => {
    return (
        <div className="font-outfit">
            {/* Welcome Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold text-[#1E293B] mb-2 tracking-tight">Good Morning, Alex</h1>
                <p className="text-slate-500 font-medium">Here's what's happening with your growth today.</p>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold text-slate-500 mb-1">Courses in Progress</p>
                        <p className="text-3xl font-bold text-slate-900">3</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                        <BookOpen size={24} />
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold text-slate-500 mb-1">Upcoming Sessions</p>
                        <p className="text-3xl font-bold text-slate-900">1</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <Calendar size={24} />
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-sm font-semibold text-slate-500 mb-1">Active Applications</p>
                        <p className="text-3xl font-bold text-slate-900">5</p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                        <Send size={24} />
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               
                <div className="lg:col-span-2 space-y-8">
                    {/* My Learning */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <BookOpen className="text-blue-600" size={20} />
                                <h2 className="text-lg font-bold text-slate-900">My Learning</h2>
                            </div>
                            <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">View all</button>
                        </div>
                        <div className="space-y-6">
                            {/* Course 1 */}
                            <div className="flex items-center gap-4 relative">
                                <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm bg-slate-100 flex-shrink-0">
                                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=200&auto=format&fit=crop" alt="React" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-bold text-slate-900 truncate">Full Stack Development Bootcamp</h3>
                                    <p className="text-xs text-slate-500 mb-2 truncate">Module 6: React Context API</p>
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">Progress</span>
                                        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden max-w-[120px]">
                                            <div className="h-full bg-blue-600 w-[65%] rounded-full"></div>
                                        </div>
                                        <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">65%</span>
                                    </div>
                                </div>
                                <button className="text-slate-400 hover:text-blue-600 transition-colors ml-2">
                                    <PlayCircle size={24} />
                                </button>
                                <div className="absolute -bottom-3 left-0 right-0 h-[1px] bg-gray-50"></div>
                            </div>

                            {/* Course 2 */}
                            <div className="flex items-center gap-4 pt-2">
                                <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm bg-emerald-100 flex-shrink-0 flex items-center justify-center relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 opacity-80"></div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-bold text-slate-900 truncate">UX/UI Design Principles</h3>
                                    <p className="text-xs text-slate-500 mb-2 truncate">Module 3: Wireframing</p>
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">Progress</span>
                                        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden max-w-[120px]">
                                            <div className="h-full bg-emerald-500 w-[32%] rounded-full"></div>
                                        </div>
                                        <span className="text-xs font-semibold text-slate-500 whitespace-nowrap">32%</span>
                                    </div>
                                </div>
                                <button className="text-slate-400 hover:text-blue-600 transition-colors ml-2">
                                    <PlayCircle size={24} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Applications */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 overflow-hidden">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <Briefcase className="text-blue-600" size={20} />
                                <h2 className="text-lg font-bold text-slate-900">Applications</h2>
                            </div>
                            <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">Manage</button>
                        </div>

                        <div className="overflow-x-auto -mx-6 px-6">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-gray-100">
                                        <th className="pb-3 text-xs font-bold text-slate-400 uppercase tracking-wider w-[40%]">Role</th>
                                        <th className="pb-3 text-xs font-bold text-slate-400 uppercase tracking-wider w-[30%]">Company</th>
                                        <th className="pb-3 text-xs font-bold text-slate-400 uppercase tracking-wider w-[20%] text-center">Status</th>
                                        <th className="pb-3 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-gray-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                                        <td className="py-4">
                                            <p className="text-sm font-bold text-slate-900">Junior Product Designer</p>
                                        </td>
                                        <td className="py-4 text-sm font-medium text-slate-500">
                                            TechFlow Inc.
                                        </td>
                                        <td className="py-4 text-center">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-600">
                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                                                Interviewing
                                            </span>
                                        </td>
                                        <td className="py-4 text-right">
                                            <span className="text-xs font-semibold text-slate-400 opacity-80 whitespace-nowrap block">Oct</span>
                                            <span className="text-xs font-semibold text-slate-400 whitespace-nowrap block">24</span>
                                        </td>
                                    </tr>
                                    <tr className="border-b border-gray-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                                        <td className="py-4">
                                            <p className="text-sm font-bold text-slate-900">Frontend Developer Intern</p>
                                        </td>
                                        <td className="py-4 text-sm font-medium text-slate-500">
                                            <p className="whitespace-nowrap">Global</p>
                                            <p className="whitespace-nowrap">Systems</p>
                                        </td>
                                        <td className="py-4 text-center">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-500">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                                                Applied
                                            </span>
                                        </td>
                                        <td className="py-4 text-right">
                                            <span className="text-xs font-semibold text-slate-400 opacity-80 whitespace-nowrap block">Oct</span>
                                            <span className="text-xs font-semibold text-slate-400 whitespace-nowrap block">22</span>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-50/50 transition-colors">
                                        <td className="py-4">
                                            <p className="text-sm font-bold text-slate-900">UX Researcher</p>
                                        </td>
                                        <td className="py-4 text-sm font-medium text-slate-500">
                                            <p className="whitespace-nowrap">Creative</p>
                                            <p className="whitespace-nowrap">Solutions</p>
                                        </td>
                                        <td className="py-4 text-center">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-500">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                                                Applied
                                            </span>
                                        </td>
                                        <td className="py-4 text-right">
                                            <span className="text-xs font-semibold text-slate-400 opacity-80 whitespace-nowrap block">Oct</span>
                                            <span className="text-xs font-semibold text-slate-400 whitespace-nowrap block">20</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                
                <div className="space-y-8">
                    {/* Upcoming Session */}
                    <div className="bg-[#1C3EE3] rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-12 translate-x-12 blur-2xl pointer-events-none"></div>
                        <div className="flex items-center justify-between mb-6 relative z-10">
                            <h2 className="text-lg font-bold">Upcoming Session</h2>
                            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center backdrop-blur-sm">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 10L21 6V18L15 14V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <rect x="3" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="Sarah Jenkins" className="w-12 h-12 rounded-full border-2 border-white/20 object-cover" />
                            <div>
                                <h3 className="font-bold text-white text-sm">Sarah Jenkins</h3>
                                <p className="text-white/70 text-xs font-medium">Senior Product Manager</p>
                            </div>
                        </div>

                        <div className="bg-white/10 rounded-xl p-3 flex items-center gap-3 mb-6 backdrop-blur-sm relative z-10">
                            <Calendar size={16} className="text-white/80" />
                            <p className="text-sm font-semibold text-white/90">Today, 4:00 PM - 4:30 PM</p>
                        </div>

                        <button className="w-full bg-white text-[#1C3EE3] font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors shadow-sm relative z-10">
                            Join Meeting
                            <ChevronRight size={18} />
                        </button>
                    </div>

                    {/* Recommended for You */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                        <h2 className="text-base font-bold text-slate-900 mb-4">Recommended for You</h2>

                        <div className="space-y-4">
                            {/* Recommendation 1 */}
                            <div className="bg-slate-50/50 border border-gray-100 rounded-xl p-4 flex gap-4 hover:shadow-sm transition-shadow cursor-pointer">
                                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-blue-600 border border-gray-50">
                                    <Briefcase size={20} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-0.5">NEW JOB</p>
                                    <h3 className="text-sm font-bold text-slate-900 leading-tight mb-1 truncate">React Native Developer</h3>
                                    <p className="text-xs font-medium text-slate-500 truncate">Remote • $60k - $80k</p>
                                </div>
                            </div>

                            {/* Recommendation 2 */}
                            <div className="bg-slate-50/50 border border-gray-100 rounded-xl p-4 flex gap-4 hover:shadow-sm transition-shadow cursor-pointer">
                                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-emerald-500 border border-gray-50">
                                    <Lightbulb size={20} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider mb-0.5">SUGGESTION</p>
                                    <h3 className="text-sm font-bold text-slate-900 leading-tight mb-1 truncate">Update your Resume</h3>
                                    <p className="text-xs font-medium text-slate-500 leading-snug">It's been 3 months since your last update.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
