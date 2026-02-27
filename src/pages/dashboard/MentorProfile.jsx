import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
    Star,
    MessageSquare,
    Calendar,
    MapPin,
    Globe,
    GraduationCap,
    CheckCircle2,
    Linkedin,
    Twitter,
    Globe2,
    Download,
    Bell,
    Search,
    ChevronLeft
} from 'lucide-react';
import MobileBottomNav from '../../components/layout/MobileBottomNav';
import { MENTORS } from '../../data/mentors';

// mentor profile details
const MentorProfile = () => {
    const { id } = useParams();
    const mentor = MENTORS.find(m => m.id === parseInt(id)) || MENTORS[0];

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans pb-16 lg:pb-10">
            <header className="bg-white border-b border-slate-200 h-16 shrink-0 z-[60] flex items-center px-4 lg:px-6 sticky top-0">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-10">
                        <Link to="/mentorship" className="flex items-center gap-2">
                            <img src="/logo.png" alt="Bridgify" className="w-8 h-8 object-contain rounded-lg" />
                            <span className="text-xl font-bold text-[#1E293B]">Bridgify</span>
                        </Link>
                        <nav className="hidden lg:flex items-center gap-8 h-16">
                            <Link to="/mentorship" className="text-[13px] font-bold text-slate-400 hover:text-slate-600 h-full flex items-center">Directory</Link>
                            <a href="#" className="text-[13px] font-bold text-slate-400 hover:text-slate-600 h-full flex items-center">Messages</a>
                            <a href="#" className="text-[13px] font-bold text-slate-400 hover:text-slate-600 h-full flex items-center transition-colors">Resources</a>
                        </nav>
                    </div>

                    <div className="flex-1 max-w-xl mx-8 relative hidden md:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                        <input
                            type="text"
                            placeholder="Search mentors by name or skill"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-sm outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 text-slate-400 hover:text-slate-600 relative rounded-full">
                            <Bell size={20} />
                            <span className="absolute top-[9px] right-[9px] w-2 h-2 bg-blue-600 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="w-8 h-8 rounded-lg overflow-hidden border border-slate-200 cursor-pointer shadow-sm">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-[1240px] mx-auto px-4 lg:px-8 py-6">
                <div className="mb-6">
                    <Link
                        to="/mentorship"
                        className="inline-flex items-center gap-2.5 text-slate-500 hover:text-blue-600 font-bold text-[13px] transition-all group"
                    >
                        <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-100 transition-all">
                            <ChevronLeft size={16} />
                        </div>
                        <span>Back to Mentor Directory</span>
                    </Link>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 items-start">

                    <div className="w-full lg:w-[300px] flex flex-col gap-4">
                        <div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm text-center">
                            <div className="relative w-20 h-20 mx-auto mb-4">
                                <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover rounded-full border-2 border-slate-50" />
                                <div className="absolute bottom-0 right-0">
                                    <CheckCircle2 size={18} className="text-blue-600 fill-white" />
                                </div>
                            </div>

                            <h1 className="text-lg font-bold text-slate-900 mb-0.5">{mentor.name}</h1>
                            <p className="text-[12px] font-medium text-blue-600 mb-2 px-4 leading-tight">{mentor.role}</p>

                            <div className="flex items-center justify-center gap-1.5 mb-6">
                                <Star size={12} className="fill-[#FF9500] text-[#FF9500]" />
                                <span className="text-[12px] font-bold text-slate-900">{mentor.rating}</span>
                                <span className="text-[12px] font-medium text-slate-400">({mentor.reviews} reviews)</span>
                            </div>

                            <div className="flex items-center justify-between mb-5">
                                <span className="text-[13px] font-medium text-slate-500">Hourly Rate</span>
                                <span className="text-lg font-bold text-slate-900">${mentor.hourlyRate}</span>
                            </div>

                            <div className="space-y-2.5 mb-5">
                                <button className="w-full bg-[#1B3BF5] hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-[14px] flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                                    <Calendar size={16} />
                                    Book Session
                                </button>
                                <button className="w-full bg-white border border-slate-200 hover:border-slate-400 text-slate-900 font-bold py-3 rounded-xl text-[14px] flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                                    <MessageSquare size={16} />
                                    Message
                                </button>
                            </div>

                            <div className="flex justify-center gap-6 text-slate-400 border-t border-slate-50 pt-5">
                                <Linkedin size={18} className="cursor-pointer hover:text-blue-600 transition-colors" />
                                <Twitter size={18} className="cursor-pointer hover:text-blue-400 transition-colors" />
                                <Globe2 size={18} className="cursor-pointer hover:text-slate-600 transition-colors" />
                            </div>

                            <div className="h-px bg-slate-50 my-6" />

                            <div className="text-left">
                                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">NEXT AVAILABILITY</h3>
                                <div className="grid grid-cols-2 gap-2">
                                    {(mentor.nextAvailability || []).map((avail, i) => (
                                        <div key={i} className={`p-2.5 rounded-xl border ${avail.active ? 'bg-green-50/50 border-green-100' : 'bg-slate-50 border-slate-100'}`}>
                                            <p className={`text-[9px] font-bold mb-0.5 ${avail.active ? 'text-green-600' : 'text-slate-500'}`}>{avail.day}</p>
                                            <p className="text-[11px] font-bold text-slate-900 leading-none">{avail.time}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-[24px] p-5 border border-slate-100 shadow-sm space-y-4">
                            <div className="flex gap-4 items-start">
                                <MapPin size={18} className="text-blue-600 shrink-0" />
                                <div>
                                    <p className="text-[13px] font-bold text-slate-900">{mentor.location}</p>
                                    <p className="text-[11px] text-slate-400 font-medium">Local Time: {mentor.localTime}</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <Globe size={18} className="text-blue-600 shrink-0" />
                                <div>
                                    <p className="text-[13px] font-bold text-slate-900">{mentor.languages}</p>
                                    <p className="text-[11px] text-slate-400 font-medium">{mentor.languageLevel}</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <GraduationCap size={18} className="text-blue-600 shrink-0" />
                                <div>
                                    <p className="text-[13px] font-bold text-slate-900">{mentor.education}</p>
                                    <p className="text-[11px] text-slate-400 font-medium">{mentor.educationDetail}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 space-y-4">
                        <div className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm">
                            <h2 className="text-lg font-bold text-slate-900 mb-5 font-sans">About Me</h2>
                            <p className="text-[14px] text-slate-500 leading-relaxed mb-8 whitespace-pre-line">
                                {mentor.aboutMe}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {(mentor.stats || []).map((stat, i) => (
                                    <div key={i} className="bg-slate-50/50 border border-slate-100 rounded-2xl p-4 hover:bg-white hover:shadow-md hover:border-blue-100 transition-all group">
                                        <p className="text-2xl font-bold text-blue-600 mb-0.5 group-hover:scale-105 transition-transform origin-left">{stat.value}</p>
                                        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tight">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm">
                            <h2 className="text-lg font-bold text-slate-900 mb-6 font-sans">Expertise & Skills</h2>
                            <div className="space-y-8">
                                {(mentor.expertiseGroups || []).map((group, i) => (group && group.skills && (
                                    <div key={i}>
                                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{group.category}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {group.skills.map((skill, j) => (
                                                <span
                                                    key={j}
                                                    className={`px-3.5 py-1.5 rounded-full text-[12px] font-bold transition-all cursor-default ${group.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-[#F0FDF4] text-green-600'}`}
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )))}
                            </div>
                        </div>

                        <div className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-bold text-slate-900">Experience</h2>
                                <button className="text-[10px] font-bold text-blue-600 hover:underline uppercase tracking-tight flex items-center gap-1.5">
                                    Download Resume
                                </button>
                            </div>

                            <div className="space-y-6">
                                {(mentor.workExperience || []).map((exp, i) => (
                                    <div key={i} className="flex gap-4 relative group">
                                        <div className="flex flex-col items-center shrink-0 pt-1.5">
                                            <div className={`w-2 h-2 rounded-full z-10 ${i === 0 ? 'bg-blue-600' : 'bg-slate-200'}`} />
                                            {i !== (mentor.workExperience || []).length - 1 && (
                                                <div className="w-px h-20 bg-slate-100 -mt-1" />
                                            )}
                                        </div>
                                        <div className="flex-1 pb-4">
                                            <div className="flex items-center justify-between mb-0.5">
                                                <h3 className="text-[14px] font-bold text-slate-900">{exp.role}</h3>
                                                <p className="text-[11px] font-bold text-slate-400">{exp.period}</p>
                                            </div>
                                            <p className="text-[12px] font-bold text-blue-600 mb-3">{exp.company} <span className="text-slate-300 mx-1">•</span> <span className="text-slate-400 font-medium">{exp.location}</span></p>
                                            <p className="text-[12px] text-slate-500 leading-relaxed font-medium line-clamp-2">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-[24px] p-8 border border-slate-100 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-bold text-slate-900">What Mentees Say</h2>
                                <button className="text-[10px] font-bold text-blue-600 hover:underline flex items-center gap-1 transition-all">
                                    View all {mentor.reviews} reviews
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {(mentor.menteeReviews || []).map((review, i) => (
                                    <div key={i} className="p-5 bg-slate-50 border border-slate-100 rounded-[20px] flex flex-col">
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-[10px]">
                                                    {review.avatar}
                                                </div>
                                                <div>
                                                    <p className="text-[12px] font-bold text-slate-900 leading-tight">{review.name}</p>
                                                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">{review.role}</p>
                                                </div>
                                            </div>
                                            <div className="flex gap-0.5">
                                                {[...Array(5)].map((_, j) => (
                                                    <Star key={j} size={10} className={`fill-[#FF9500] text-[#FF9500] ${j >= review.rating ? 'opacity-20' : ''}`} />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-[12px] text-slate-500 leading-relaxed italic font-medium">
                                            {review.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <MobileBottomNav />
        </div>
    );
};

export default MentorProfile;
