import React, { useState } from 'react';
import {
    Bell,
    Search,
    Calendar,
    Clock,
    MoreHorizontal,
    Check,
    X,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MenteeManagement = () => {
    const [activeTab, setActiveTab] = useState('Pending Requests');

    // Mock data based on the design
    const pendingRequests = [
        {
            id: 1,
            name: 'Sarah Jenkins',
            role: 'UX Designer @ Freelance',
            level: 'Entry Level',
            location: 'London, UK',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
            note: "Hi Alex, I've been following your work on product systems. I'm currently struggling with structuring my portfolio for senior roles and would love your guidance on storytelling and case study selection.",
            time: 'Requested 2 days ago'
        },
        {
            id: 2,
            name: 'David Chen',
            role: 'Frontend Dev Student',
            level: 'Student',
            location: 'Toronto, CA',
            avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop',
            note: "Looking to transition from bootcamp to my first full-time role. I need help with mock interviews and resume review specifically for React positions.",
            time: 'Requested 5 hours ago'
        },
        {
            id: 3,
            name: 'Amira K.',
            role: 'Product Manager',
            level: 'Mid-Level',
            location: 'Remote',
            avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop',
            note: "I'm stepping into a Senior PM role and need advice on stakeholder management and strategy alignment. Your experience at Bridgify is exactly the path I want to follow.",
            time: 'Requested yesterday'
        }
    ];

    const upcomingSessions = [
        {
            id: 1,
            mentee: 'James Miller',
            initials: 'JM',
            focus: 'React Native & Mobile',
            time: 'Today, 2:00 PM',
            status: 'Confirmed',
            statusColor: 'text-emerald-700 bg-emerald-50',
            dotColor: 'bg-emerald-500',
            action: 'Join Call',
            hasAvatar: false
        },
        {
            id: 2,
            mentee: 'Elena Rodriguez',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
            focus: 'Career Switching',
            time: 'Tomorrow, 10:00 AM',
            status: 'Rescheduled',
            statusColor: 'text-amber-700 bg-amber-50',
            dotColor: 'bg-amber-500',
            action: '...',
            hasAvatar: true
        }
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] font-sans pb-20">
            {/* Top Navigation Bar */}
            <nav className="w-full h-16 bg-white border-b border-slate-200 px-6 lg:px-10 flex items-center justify-between sticky top-0 z-50">
                {/* Logo & Search */}
                <div className="flex items-center gap-8">
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/logo.png" alt="Bridgify" className="h-8 w-8 object-contain rounded-md" />
                        <span className="text-[17px] font-bold text-slate-900 tracking-tight">Bridgify</span>
                    </Link>

                    <div className="hidden md:flex relative w-64">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-slate-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search"
                            className="block w-full pl-9 pr-3 py-2 border-none rounded-xl bg-slate-50 text-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-slate-200 transition-colors"
                        />
                    </div>
                </div>

                {/* Right Nav Links & Profile */}
                <div className="flex items-center gap-6">
                    <div className="hidden lg:flex items-center gap-6">
                        <Link to="#" className="text-sm font-bold text-slate-900">Mentorship</Link>
                        <Link to="#" className="text-sm font-bold text-slate-500 hover:text-slate-900">Jobs</Link>
                        <Link to="#" className="text-sm font-bold text-slate-500 hover:text-slate-900">Community</Link>
                        <Link to="#" className="text-sm font-bold text-slate-500 hover:text-slate-900">Resources</Link>
                    </div>

                    <div className="flex items-center gap-4 border-l border-slate-200 pl-6 text-slate-500">
                        <button className="relative p-1 hover:text-slate-700 transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
                        </button>

                        <div className="flex items-center gap-2 cursor-pointer">
                            <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Alex M." className="w-full h-full object-cover" />
                            </div>
                            <span className="text-sm font-bold text-slate-900 hidden sm:block">Alex M.</span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="max-w-[1100px] mx-auto px-4 md:px-6 mt-8">
                {/* Header Information */}
                <div className="mb-8">
                    <div className="text-sm font-medium text-slate-500 mb-2">
                        Dashboard / <span className="text-slate-900 font-bold">Mentee Management</span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Mentee Management</h1>
                            <p className="text-slate-500 text-sm">Manage your mentorship requests and track active sessions.</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
                                <Calendar size={16} />
                                Calendar
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2.5 bg-[#1B3BF5] rounded-xl text-sm font-bold text-white shadow-md shadow-blue-500/20 hover:bg-[#152DC2] transition-colors">
                                <Clock size={16} />
                                Update Availability
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pending Requests</h3>
                            <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500">
                                <MessageSquare size={16} />
                            </div>
                        </div>
                        <div className="flex items-baseline gap-3">
                            <span className="text-3xl font-extrabold text-slate-900">4</span>
                            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">+2 new</span>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Mentees</h3>
                            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div>
                        </div>
                        <div className="flex items-baseline gap-3">
                            <span className="text-3xl font-extrabold text-slate-900">12</span>
                            <span className="text-sm font-medium text-slate-500">Current capacity: 15</span>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Mentored</h3>
                            <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                            </div>
                        </div>
                        <div className="flex items-baseline gap-3">
                            <span className="text-3xl font-extrabold text-slate-900">45</span>
                            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">+5 this month</span>
                        </div>
                    </div>
                </div>

                {/* Main Content Area: Tabs & List */}
                <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm mb-8">
                    {/* Tabs */}
                    <div className="flex items-center gap-6 px-6 border-b border-slate-100 pt-2">
                        {['Pending Requests', 'Active Mentees', 'History'].map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-4 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 ${activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                            >
                                {tab}
                                {tab === 'Pending Requests' && (
                                    <span className="bg-blue-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">4</span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Filters */}
                    <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                            <div className="relative w-full sm:w-[260px]">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                <input
                                    type="text"
                                    placeholder="Search by name or role..."
                                    className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400"
                                />
                            </div>

                            <div className="relative cursor-pointer">
                                <select className="appearance-none bg-white border border-slate-200 rounded-xl pl-4 pr-10 py-2.5 text-sm font-medium text-slate-700 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                                    <option>All Skills</option>
                                    <option>React</option>
                                    <option>UX/UI</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                            </div>

                            <div className="relative cursor-pointer">
                                <select className="appearance-none bg-white border border-slate-200 rounded-xl pl-4 pr-10 py-2.5 text-sm font-medium text-slate-700 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer">
                                    <option>Experience Level</option>
                                    <option>Junior</option>
                                    <option>Mid-Level</option>
                                    <option>Senior</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-500 w-full sm:w-auto justify-end">
                            Sort by: <span className="font-bold text-slate-900 flex items-center cursor-pointer">Newest First <ChevronDown size={14} className="ml-1" /></span>
                        </div>
                    </div>

                    {/* Request List */}
                    <div className="p-4 sm:p-6 space-y-4">
                        {pendingRequests.map(req => (
                            <div key={req.id} className="flex flex-col lg:flex-row gap-6 p-5 border border-slate-200 rounded-2xl hover:border-slate-300 transition-colors bg-white">
                                {/* User Info */}
                                <div className="flex gap-4 lg:w-[280px] shrink-0">
                                    <img src={req.avatar} alt={req.name} className="w-12 h-12 rounded-full object-cover shadow-sm bg-slate-100" />
                                    <div>
                                        <h3 className="text-[15px] font-bold text-slate-900">{req.name}</h3>
                                        <p className="text-[13px] text-slate-500 mb-2">{req.role}</p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[11px] font-bold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-md">{req.level}</span>
                                            <span className="text-[12px] text-slate-400 border border-slate-200 px-2 py-0.5 rounded-md">{req.location}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Request Note */}
                                <div className="flex-1 lg:border-l lg:border-slate-100 lg:pl-6">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Request Note</div>
                                    <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                                        "{req.note}"
                                    </p>
                                    <div className="flex items-center gap-2 mt-4 text-xs text-slate-400 font-medium">
                                        <Calendar size={12} />
                                        {req.time}
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-row lg:flex-col gap-2 shrink-0 lg:w-[140px] pt-2 lg:pt-0">
                                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-[#1B3BF5] hover:bg-[#152DC2] text-white py-2.5 rounded-xl text-sm font-bold shadow-sm transition-colors">
                                        <Check size={16} />
                                        Accept
                                    </button>
                                    <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 py-2.5 rounded-xl text-sm font-bold transition-colors">
                                        <X size={16} className="text-red-500" />
                                        Decline
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Footer */}
                    <div className="p-4 sm:p-6 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-sm text-slate-500 font-medium">Showing <strong className="text-slate-900">1-3</strong> of <strong className="text-slate-900">4</strong> requests</span>
                        <div className="flex gap-2">
                            <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors">
                                <ChevronLeft size={16} />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors">
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Upcoming Sessions */}
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold text-slate-900">Upcoming Sessions</h2>
                        <Link to="#" className="text-sm font-bold text-blue-600 hover:text-blue-700">View Calendar</Link>
                    </div>

                    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm overflow-x-auto">
                        <table className="w-full min-w-[800px] text-left">
                            <thead>
                                <tr className="border-b border-slate-100">
                                    <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mentee</th>
                                    <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Focus Area</th>
                                    <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Next Session</th>
                                    <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                                    <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {upcomingSessions.map(session => (
                                    <tr key={session.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="py-4 px-6">
                                            <div className="flex items-center gap-3">
                                                {session.hasAvatar ? (
                                                    <img src={session.avatar} alt={session.mentee} className="w-8 h-8 rounded-full object-cover" />
                                                ) : (
                                                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold text-xs flex items-center justify-center">
                                                        {session.initials}
                                                    </div>
                                                )}
                                                <span className="text-sm font-bold text-slate-900">{session.mentee}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="text-sm text-slate-500">{session.focus}</span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="text-sm font-medium text-slate-900">{session.time}</span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${session.statusColor}`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${session.dotColor}`}></span>
                                                {session.status}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6 text-right">
                                            {session.action === 'Join Call' ? (
                                                <button className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">Join Call</button>
                                            ) : (
                                                <button className="text-slate-400 hover:text-slate-600 transition-colors">
                                                    <MoreHorizontal size={20} />
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MenteeManagement;
