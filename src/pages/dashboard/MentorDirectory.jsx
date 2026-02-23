import React, { useState } from 'react';
import {
    Search,
    Star,
    MessageSquare,
    ChevronLeft,
    ChevronRight,
    Bell,
    Check,
    Link as LinkIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileBottomNav from '../../components/layout/MobileBottomNav';

// Mock Data with Real Images from Unsplash
const MENTORS = [
    { id: 1, name: 'Sarah Chen', role: 'Senior PM at Google', rating: 4.9, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop', skills: ['PRODUCT STRATEGY', 'B2B SAAS'], description: 'Helping aspiring product managers break into tech and master the art of data-driven decision making.', status: 'online' },
    { id: 2, name: 'Marcus Rodriguez', role: 'Staff Engineer at Stripe', rating: 5.0, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop', skills: ['BACKEND ARCHITECTURE', 'FINTECH'], description: '12+ years experience in building scalable payment systems. Expert in distributed systems.', status: 'online' },
    { id: 3, name: 'Elena Petrova', role: 'Design Lead at Airbnb', rating: 4.8, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1974&auto=format&fit=crop', skills: ['PRODUCT DESIGN', 'USER RESEARCH'], description: 'Focusing on human-centered design principles and building products that users truly love and value.', status: 'online' },
    { id: 4, name: 'David Wilson', role: 'VP of Growth at Revolut', rating: 4.9, image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop', skills: ['GROWTH HACKING', 'E-COMMERCE'], description: 'Expert in scaling startups from seed to Series C. Master of performance marketing.', status: 'online' },
    { id: 5, name: 'Aisha Khan', role: 'ML Research Lead at DeepMind', rating: 5.0, image: 'https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?q=80&w=1972&auto=format&fit=crop', skills: ['DEEP LEARNING', 'AI ETHICS'], description: 'Pioneering transformer architectures and exploring the intersections of AI and ethics.', status: 'online' },
    { id: 6, name: 'Jordan Smith', role: 'Data Science Director at Netflix', rating: 4.7, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop', skills: ['BIG DATA', 'ANALYTICS'], description: 'Expert in recommendation engines and behavioral analytics. Mentor for high-growth data teams.', status: 'online' }
];

const EXPERTISE_FILTERS = [
    { name: 'Product Management', checked: true },
    { name: 'Software Engineering', checked: false },
    { name: 'Marketing', checked: false },
    { name: 'UX Design', checked: false },
    { name: 'Data Science', checked: false }
];

const INDUSTRY_FILTERS = [
    { name: 'Fintech', checked: false },
    { name: 'Healthcare', checked: false },
    { name: 'Edtech', checked: false },
    { name: 'E-commerce', checked: false },
    { name: 'AI/ML', checked: true }
];

const MentorDirectory = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isAcceptingMentees, setIsAcceptingMentees] = useState(true);
    const [showNotifications, setShowNotifications] = useState(false);

    const notifications = [
        { id: 1, title: 'New Message', body: 'Sarah Chen sent you a message', time: '2m ago', unread: true },
        { id: 2, title: 'Mentor Approved', body: 'Your profile has been approved', time: '1h ago', unread: false },
        { id: 3, title: 'Session Reminder', body: 'Upcoming session with Alex in 30m', time: '5h ago', unread: true },
    ];

    return (
        <div className="h-screen bg-[#F8FAFC] flex flex-col overflow-hidden font-sans">
            {/* Custom Scrollbar Styles */}
            <style>
                {`
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 5px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: transparent;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: #E2E8F0;
                        border-radius: 10px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: #CBD5E1;
                    }
                `}
            </style>

            {/* Main Header - Fixed */}
            <header className="bg-white border-b border-slate-200 h-16 shrink-0 z-[60] flex items-center px-6">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2 cursor-pointer group">
                            <img src="/logo.png" alt="Bridgify" className="w-8 h-8 object-contain rounded-lg transition-transform group-hover:scale-105" />
                            <span className="text-xl font-bold text-[#1E293B]">Bridgify</span>
                        </div>
                        <nav className="hidden lg:flex items-center gap-8 h-16">
                            <a href="#" className="text-[13px] font-bold text-blue-600 border-b-2 border-blue-600 h-full flex items-center px-1">Directory</a>
                            <a href="#" className="text-[13px] font-bold text-slate-400 hover:text-slate-600 h-full flex items-center transition-colors">Messages</a>
                            <a href="#" className="text-[13px] font-bold text-slate-400 hover:text-slate-600 h-full flex items-center transition-colors">Resources</a>
                        </nav>
                    </div>

                    <div className="flex-1 max-w-xl mx-8 relative hidden md:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                        <input
                            type="text"
                            placeholder="Search mentors, companies, or skills..."
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg py-1.5 pl-9 pr-4 text-xs focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all outline-none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <button
                                onClick={() => setShowNotifications(!showNotifications)}
                                className={`p-2 transition-colors relative rounded-full ${showNotifications ? 'bg-blue-50 text-blue-600' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}
                            >
                                <Bell size={20} />
                                <span className="absolute top-[9px] right-[9px] w-2 h-2 bg-blue-600 rounded-full border-2 border-white"></span>
                            </button>

                            <AnimatePresence>
                                {showNotifications && (
                                    <>
                                        <div className="fixed inset-0 z-[-1]" onClick={() => setShowNotifications(false)} />
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            className="absolute right-0 mt-3 w-80 bg-white border border-slate-200 shadow-2xl rounded-2xl overflow-hidden z-[70]"
                                        >
                                            <div className="relative overflow-hidden bg-gradient-to-br from-[#1B3BF5] to-blue-500 p-5">
                                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                                                <div className="relative z-10 flex items-center justify-between">
                                                    <div>
                                                        <h3 className="font-bold text-white text-sm">Notifications</h3>
                                                        <p className="text-[10px] text-blue-100 font-medium mt-0.5">You have {notifications.filter(n => n.unread).length} unread updates</p>
                                                    </div>
                                                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                                        <Bell size={16} className="text-white" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="max-h-80 overflow-y-auto custom-scrollbar">
                                                {notifications.map(notif => (
                                                    <div key={notif.id} className={`p-4 hover:bg-slate-50 transition-colors cursor-pointer border-b border-slate-50 last:border-0 flex gap-3 ${notif.unread ? 'bg-blue-50/10' : ''}`}>
                                                        <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${notif.unread ? 'bg-blue-600' : 'transparent'}`} />
                                                        <div className="space-y-0.5 pointer-events-none">
                                                            <p className="text-[13px] font-bold text-slate-900">{notif.title}</p>
                                                            <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">{notif.body}</p>
                                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mt-1">{notif.time}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            <button className="w-full p-3 bg-slate-50 hover:bg-slate-100 text-center text-[11px] font-bold text-blue-600 transition-colors">
                                                Mark all as read
                                            </button>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="w-8 h-8 rounded-lg overflow-hidden border border-slate-200 cursor-pointer shadow-sm">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop" alt="User" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </header>

            <div className="flex flex-1 overflow-hidden">
                {/* Fixed Sidebar - Compact Solid */}
                <aside className="hidden lg:block w-60 shrink-0 bg-white border-r border-slate-200 overflow-y-auto px-6 py-6 custom-scrollbar">
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-lg font-bold text-slate-900 leading-tight">Mentor Directory</h1>
                            <p className="text-[11px] text-slate-400 mt-0.5 font-medium">Found 1,240 professional mentors</p>
                        </div>

                        {/* Expertise */}
                        <div>
                            <h3 className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-3">Expertise</h3>
                            <div className="space-y-2">
                                {EXPERTISE_FILTERS.map(f => (
                                    <label key={f.name} className="flex items-center gap-2.5 cursor-pointer group">
                                        <div className={`w-4 h-4 rounded border transition-all flex items-center justify-center ${f.checked ? 'bg-blue-600 border-blue-600' : 'bg-white border-slate-200'}`}>
                                            <Check size={10} className="text-white" />
                                        </div>
                                        <span className={`text-[13px] ${f.checked ? 'text-slate-900 font-bold' : 'text-slate-500 font-medium group-hover:text-slate-700 transition-colors'}`}>{f.name}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Industry */}
                        <div>
                            <h3 className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-3">Industry</h3>
                            <div className="space-y-2">
                                {INDUSTRY_FILTERS.map(f => (
                                    <label key={f.name} className="flex items-center gap-2.5 cursor-pointer group">
                                        <div className={`w-4 h-4 rounded border transition-all flex items-center justify-center ${f.checked ? 'bg-blue-600 border-blue-600' : 'bg-white border-slate-200'}`}>
                                            <Check size={10} className="text-white" />
                                        </div>
                                        <span className={`text-[13px] ${f.checked ? 'text-slate-900 font-bold' : 'text-slate-500 font-medium group-hover:text-slate-700 transition-colors'}`}>{f.name}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Experience */}
                        <div>
                            <h3 className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-3">Experience Level</h3>
                            <div className="relative">
                                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-[12px] font-bold text-slate-700 outline-none appearance-none cursor-pointer">
                                    <option>Senior (8+ years)</option>
                                    <option>Mid-level (3-7 years)</option>
                                </select>
                                <ChevronRight size={12} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 rotate-90" />
                            </div>
                        </div>

                        {/* Toggle */}
                        <div className="bg-blue-50/50 rounded-xl p-3.5 border border-blue-100">
                            <div className="flex items-center justify-between mb-1.5">
                                <span className="text-[12px] font-bold text-blue-900">Accepting Mentees</span>
                                <button onClick={() => setIsAcceptingMentees(!isAcceptingMentees)} className={`w-8 h-4.5 rounded-full relative transition-colors ${isAcceptingMentees ? 'bg-blue-600' : 'bg-slate-300'}`}>
                                    <div className={`absolute top-0.5 w-3.5 h-3.5 bg-white rounded-full transition-all ${isAcceptingMentees ? 'left-[16px]' : 'left-[2px]'}`} />
                                </button>
                            </div>
                            <p className="text-[10px] font-bold text-blue-600/60 uppercase tracking-tighter">Only show available</p>
                        </div>
                    </div>
                </aside>

                {/* Main Content Area - Solid Grid Tighter Spacing */}
                <main className="flex-1 overflow-y-auto bg-[#F8FAFC] custom-scrollbar pb-24">
                    <div className="p-6 lg:p-8 max-w-[1200px] mx-auto">
                        {/* Status Bar */}
                        <div className="flex items-center justify-between mb-6 shrink-0">
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest pt-0.5">Popular:</span>
                                <div className="flex gap-1.5">
                                    {['Strategy', 'Python', 'SaaS Scaling'].map(t => (
                                        <button key={t} className="text-[10px] font-bold bg-white border border-slate-100 text-slate-400 px-3 py-1 rounded-lg hover:border-slate-900 hover:text-slate-900 transition-all">{t}</button>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest pt-0.5">Sort by:</span>
                                <div className="relative">
                                    <select className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-[11px] font-bold text-slate-700 outline-none appearance-none pr-8 cursor-pointer">
                                        <option>Recommended</option>
                                        <option>Newest</option>
                                    </select>
                                    <ChevronRight size={10} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 rotate-90" />
                                </div>
                            </div>
                        </div>

                        {/* Solid Grid - Reduced Gap */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                            {MENTORS.map((m) => (
                                <motion.div
                                    key={m.id}
                                    whileHover={{ y: -2 }}
                                    className="bg-white rounded-2xl p-4 lg:p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col relative group"
                                >
                                    {/* Rating Badge - Precise Replication */}
                                    <div className="absolute top-5 right-5 flex items-center gap-1 bg-[#FFF9E5] text-[#FF9500] px-2 py-1 rounded-lg text-[11px] font-extrabold shadow-sm">
                                        <Star size={10} className="fill-[#FF9500]" />
                                        <span>{m.rating.toFixed(1)}</span>
                                    </div>

                                    {/* Mentor Info */}
                                    <div className="mb-3">
                                        <div className="w-16 h-16 rounded-xl overflow-hidden mb-3.5 border border-slate-100 shadow-sm group-hover:scale-105 transition-transform duration-300">
                                            <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                                        </div>
                                        <h3 className="text-base font-bold text-[#0F172A] leading-tight mt-1">{m.name}</h3>
                                        <p className="text-[12px] font-medium text-slate-400 mt-0.5">{m.role}</p>
                                    </div>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-3.5">
                                        {m.skills.map(s => (
                                            <span key={s} className="text-[9px] font-bold bg-[#EFF6FF] text-[#1D4ED8] px-2.5 py-1.5 rounded-lg border border-blue-50 uppercase tracking-tighter">{s}</span>
                                        ))}
                                    </div>

                                    {/* Description */}
                                    <p className="text-[12px] text-slate-500 leading-relaxed line-clamp-2 h-9 mb-6">
                                        {m.description}
                                    </p>

                                    {/* Full Width Solid Blue Button */}
                                    <button className="w-full bg-[#1B3BF5] hover:bg-[#1429B8] text-white font-bold py-3.5 rounded-xl text-[13px] shadow-lg shadow-blue-600/10 active:scale-[0.98] transition-all">
                                        View Profile
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        {/* Tighter Pagination */}
                        <div className="flex items-center justify-center mt-12 gap-1.5">
                            <button className="w-8 h-8 rounded-lg border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-100"><ChevronLeft size={14} /></button>
                            <button className="w-8 h-8 rounded-lg bg-blue-600 text-white font-bold text-xs shadow-md">1</button>
                            <button className="w-8 h-8 rounded-lg border border-slate-100 text-slate-500 font-bold text-xs hover:bg-slate-100">2</button>
                            <button className="w-8 h-8 rounded-lg border border-slate-100 text-slate-500 font-bold text-xs hover:bg-slate-100">3</button>
                            <span className="w-8 h-8 flex items-center justify-center text-slate-200">...</span>
                            <button className="w-8 h-8 rounded-lg border border-slate-100 text-slate-500 font-bold text-xs hover:bg-slate-100">42</button>
                            <button className="w-8 h-8 rounded-lg border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-100"><ChevronRight size={14} /></button>
                        </div>
                    </div>
                </main>
            </div>

            {/* Bottom Header - Fixed Layout Solid Blue Logos */}
            <footer className="hidden lg:flex shrink-0 bg-white border-t border-slate-200 h-16 items-center px-10 z-50">
                <div className="flex items-center justify-between w-full mx-auto">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="Bridgify" className="w-5 h-5 object-contain grayscale opacity-40 rounded-md" />
                        <span className="text-[12px] font-bold text-slate-300">© 2024 Bridgify Inc.</span>
                    </div>
                    <div className="flex items-center gap-10">
                        {['Privacy Policy', 'Terms of Service', 'Help Center'].map(l => (
                            <a key={l} href="#" className="text-[12px] font-bold text-slate-400 hover:text-blue-600 transition-colors">{l}</a>
                        ))}
                    </div>
                </div>
            </footer>

            {/* Mobile Bottom Navigation - Reusable Component */}
            <MobileBottomNav />
        </div>
    );
};

export default MentorDirectory;
