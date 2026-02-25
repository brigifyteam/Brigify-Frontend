import React, { useState, useRef, useEffect } from 'react';
import {
    Search,
    Star,
    MessageSquare,
    ChevronLeft,
    ChevronRight,
    Bell,
    Check,
    LayoutDashboard,
    Users,
    Briefcase,
    BarChart2,
    Settings,
    LogOut,
    Plus,
    X,
    SlidersHorizontal,
    LayoutGrid,
    Code,
    Palette,
    TrendingUp,
    ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MobileBottomNav from '../../components/layout/MobileBottomNav';

// --- Reusable Custom Select Component (State-of-the-art UI) ---
const CustomSelect = ({ options, value, onChange, label }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={containerRef}>
            {label && <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{label}</h3>}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full flex items-center justify-between bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-[13px] font-bold text-slate-700 hover:bg-white hover:shadow-sm transition-all focus:ring-4 focus:ring-blue-500/5 ${isOpen ? 'ring-2 ring-blue-500/20 border-blue-400 bg-white' : ''}`}
            >
                <span>{value}</span>
                <ChevronDown size={14} className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute z-[100] mt-2 w-full bg-white border border-slate-100 shadow-2xl rounded-2xl overflow-hidden py-1"
                    >
                        {options.map((option) => (
                            <button
                                key={option}
                                onClick={() => {
                                    onChange(option);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-4 py-3 text-[13px] font-bold transition-colors flex items-center justify-between ${option === value ? 'text-blue-600 bg-blue-50/50' : 'text-slate-600 hover:bg-slate-50'}`}
                            >
                                {option}
                                {option === value && <Check size={14} className="text-blue-600" />}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Mock Data
const MENTORS = [
    { id: 1, name: 'Sarah Chen', role: 'Senior PM at Google', rating: 4.9, image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop', skills: ['PRODUCT STRATEGY', 'B2B SAAS'], description: 'Helping aspiring product managers break into tech and master the art of data-driven decision making.', status: 'online' },
    { id: 2, name: 'Marcus Rodriguez', role: 'Staff Engineer at Stripe', rating: 5.0, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop', skills: ['BACKEND ARCHITECTURE', 'FINTECH'], description: '12+ years experience in building scalable payment systems. Expert in distributed systems.', status: 'online' },
    { id: 3, name: 'Elena Petrova', role: 'Design Lead at Airbnb', rating: 4.8, image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1974&auto=format&fit=crop', skills: ['PRODUCT DESIGN', 'USER RESEARCH'], description: 'Focusing on human-centered design principles and building products that users truly love and value.', status: 'online' },
    { id: 4, name: 'David Wilson', role: 'VP of Growth at Revolut', rating: 4.9, image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop', skills: ['GROWTH HACKING', 'E-COMMERCE'], description: 'Expert in scaling startups from seed to Series C. Master of performance marketing.', status: 'online' },
    { id: 5, name: 'Aisha Khan', role: 'ML Research Lead at DeepMind', rating: 5.0, image: 'https://images.unsplash.com/photo-1531123897727-8f129e16fd3c?q=80&w=1972&auto=format&fit=crop', skills: ['DEEP LEARNING', 'AI ETHICS'], description: 'Pioneering transformer architectures and exploring the intersections of AI and ethics.', status: 'online' },
    { id: 6, name: 'Jordan Smith', role: 'Data Science Director at Netflix', rating: 4.7, image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop', skills: ['BIG DATA', 'ANALYTICS'], description: 'Expert in recommendation engines and behavioral analytics. Mentor for high-growth data teams.', status: 'online' }
];

const CATEGORIES = [
    { name: 'All', icon: LayoutGrid },
    { name: 'Engineering', icon: Code },
    { name: 'Design', icon: Palette },
    { name: 'Marketing', icon: TrendingUp },
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
    const [showMobileFilters, setShowMobileFilters] = useState(false);
    const [activeCategory, setActiveCategory] = useState('All');
    const [experienceLevel, setExperienceLevel] = useState('Senior (8+ years)');
    const [sortBy, setSortBy] = useState('Recommended');

    const notifications = [
        { id: 1, title: 'New Message', body: 'Sarah Chen sent you a message', time: '2m ago', unread: true },
        { id: 2, title: 'Mentor Approved', body: 'Your profile has been approved', time: '1h ago', unread: false },
        { id: 3, title: 'Session Reminder', body: 'Upcoming session with Alex in 30m', time: '5h ago', unread: true },
    ];

    const FilterSidebarContent = ({ isMobile = false }) => (
        <div className={`space-y-8 ${isMobile ? 'p-6' : ''}`}>
            {!isMobile && (
                <div>
                    <h1 className="text-xl font-bold text-slate-900 leading-tight">Mentor Directory</h1>
                    <p className="text-[12px] text-slate-500 mt-1.5 font-medium">Found 1,240 professional mentors</p>
                </div>
            )}

            <div className="space-y-8">
                <div>
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Expertise</h3>
                    <div className="space-y-3">
                        {EXPERTISE_FILTERS.map(f => (
                            <label key={f.name} className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-4.5 h-4.5 rounded border transition-all flex items-center justify-center ${f.checked ? 'bg-blue-600 border-blue-600' : 'bg-white border-slate-200 group-hover:border-blue-300'}`}>
                                    <Check size={12} className="text-white" />
                                </div>
                                <span className={`text-[13px] ${f.checked ? 'text-slate-900 font-bold' : 'text-slate-500 font-medium group-hover:text-slate-700'}`}>{f.name}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Industry</h3>
                    <div className="space-y-3">
                        {INDUSTRY_FILTERS.map(f => (
                            <label key={f.name} className="flex items-center gap-3 cursor-pointer group">
                                <div className={`w-4.5 h-4.5 rounded border transition-all flex items-center justify-center ${f.checked ? 'bg-blue-600 border-blue-600' : 'bg-white border-slate-200 group-hover:border-blue-300'}`}>
                                    <Check size={12} className="text-white" />
                                </div>
                                <span className={`text-[13px] ${f.checked ? 'text-slate-900 font-bold' : 'text-slate-500 font-medium group-hover:text-slate-700'}`}>{f.name}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Custom Select for Experience Level */}
                <CustomSelect
                    label="Experience Level"
                    value={experienceLevel}
                    onChange={setExperienceLevel}
                    options={['Senior (8+ years)', 'Mid-level (3-7 years)', 'Junior (0-2 years)']}
                />

                <div className="bg-[#F1F5F9] rounded-2xl p-4.5 border border-slate-100">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[13px] font-bold text-slate-700">Accepting Mentees</span>
                        <button onClick={() => setIsAcceptingMentees(!isAcceptingMentees)} className={`w-10 h-5.5 rounded-full relative transition-colors ${isAcceptingMentees ? 'bg-blue-600' : 'bg-slate-300'}`}>
                            <div className={`absolute top-0.5 w-4.5 h-4.5 bg-white rounded-full transition-all shadow-sm ${isAcceptingMentees ? 'left-[18px]' : 'left-[2px]'}`} />
                        </button>
                    </div>
                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-tight">Only show available mentors</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="h-screen bg-[#F8FAFC] flex flex-col overflow-hidden font-sans">
            <style>
                {`
                    .custom-scrollbar::-webkit-scrollbar { width: 5px; }
                    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                    .custom-scrollbar::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 10px; }
                    .no-scrollbar::-webkit-scrollbar { display: none; }
                    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                `}
            </style>

            {/* Header */}
            <header className="bg-white border-b border-slate-200 h-16 shrink-0 z-[60] flex items-center px-4 lg:px-6">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2">
                            <img src="/logo.png" alt="Bridgify" className="w-8 h-8 object-contain rounded-lg" />
                            <span className="text-xl font-bold text-[#1E293B]">Bridgify</span>
                        </div>
                        <nav className="hidden lg:flex items-center gap-8 h-16">
                            <a href="#" className="text-[13px] font-bold text-blue-600 border-b-2 border-blue-600 h-full flex items-center px-1">Directory</a>
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
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Notification with Premium Banner */}
                        <div className="relative">
                            <button onClick={() => setShowNotifications(!showNotifications)} className={`p-2 transition-colors relative rounded-full ${showNotifications ? 'bg-blue-50 text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}>
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
                                                    <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm"><Bell size={16} className="text-white" /></div>
                                                </div>
                                            </div>
                                            <div className="max-h-80 overflow-y-auto custom-scrollbar">
                                                {notifications.map(notif => (
                                                    <div key={notif.id} className={`p-4 hover:bg-slate-50 transition-colors cursor-pointer border-b border-slate-50 last:border-0 flex gap-3 ${notif.unread ? 'bg-blue-50/10' : ''}`}>
                                                        <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${notif.unread ? 'bg-blue-600' : 'transparent'}`} />
                                                        <div className="space-y-0.5">
                                                            <p className="text-[13px] font-bold text-slate-900">{notif.title}</p>
                                                            <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">{notif.body}</p>
                                                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mt-1">{notif.time}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
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

            <div className="flex flex-1 overflow-hidden relative">
                {/* Desktop Sidebar */}
                <aside className="hidden lg:block w-[280px] shrink-0 bg-white border-r border-slate-200 overflow-y-auto px-6 py-8 custom-scrollbar">
                    <FilterSidebarContent />
                </aside>

                {/* Main View Area */}
                <main className="flex-1 overflow-y-auto bg-[#F8FAFC] custom-scrollbar pb-32 lg:pb-8 relative">
                    {/* Mobile Search & Filter Area */}
                    <div className="lg:hidden p-4 space-y-4 bg-white border-b border-slate-100">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" size={18} />
                            <input
                                type="text"
                                placeholder="Search mentors by name or skill"
                                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 text-[15px] text-slate-600 outline-none shadow-sm"
                            />
                        </div>

                        {/* Scrollable Categories */}
                        <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
                            {CATEGORIES.map(cat => {
                                const Icon = cat.icon;
                                return (
                                    <button
                                        key={cat.name}
                                        onClick={() => setActiveCategory(cat.name)}
                                        className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[14px] font-bold whitespace-nowrap transition-all shadow-sm ${activeCategory === cat.name ? 'bg-blue-600 text-white' : 'bg-white border border-slate-100 text-slate-500'}`}
                                    >
                                        <Icon size={16} />
                                        {cat.name}
                                    </button>
                                );
                            })}
                        </div>

                        {/* Showing X mentors & Advanced Filters */}
                        <div className="flex items-center justify-between pt-2">
                            <span className="text-[14px] font-bold text-slate-400">Showing 124 mentors</span>
                            <button
                                onClick={() => setShowMobileFilters(true)}
                                className="flex items-center gap-2 text-blue-600 font-bold text-[14px]"
                            >
                                <SlidersHorizontal size={16} />
                                Advanced Filters
                            </button>
                        </div>
                    </div>

                    <div className="max-w-[1200px] mx-auto p-4 lg:p-8">
                        {/* Desktop Toolbar */}
                        <div className="hidden lg:flex items-center justify-between mb-8">
                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-4">
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pt-0.5">Popular:</span>
                                    <div className="flex gap-2">
                                        {['Strategy', 'Python', 'SaaS Scaling'].map(t => (
                                            <button key={t} className="text-[11px] font-bold bg-white border border-slate-200 text-slate-500 px-4 py-1.5 rounded-xl hover:border-slate-900 shadow-sm transition-all">{t}</button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest pt-0.5">Sort by:</span>
                                <div className="w-[180px]">
                                    <CustomSelect
                                        value={sortBy}
                                        onChange={setSortBy}
                                        options={['Recommended', 'Newest', 'Rating']}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {MENTORS.map((m) => (
                                <motion.div
                                    key={m.id}
                                    whileHover={{ y: -4 }}
                                    className="bg-white rounded-[24px] p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col relative group"
                                >
                                    <div className="absolute top-6 right-6 flex items-center gap-1 bg-[#FFF9E5] text-[#FF9500] px-2.5 py-1 rounded-lg text-[12px] font-extrabold shadow-sm">
                                        <Star size={12} className="fill-[#FF9500]" />
                                        <span>{m.rating.toFixed(1)}</span>
                                    </div>

                                    <div className="mb-4">
                                        <div className="w-16 h-16 rounded-2xl overflow-hidden mb-4 border border-slate-100 shadow-sm group-hover:scale-105 transition-transform duration-300">
                                            <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                                        </div>
                                        <h3 className="text-[17px] font-bold text-slate-900 leading-tight">{m.name}</h3>
                                        <p className="text-[13px] font-medium text-slate-400 mt-1">{m.role}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {m.skills.map(s => (
                                            <span key={s} className="text-[10px] font-bold bg-[#EFF6FF] text-[#1D4ED8] px-3 py-1.5 rounded-lg border border-blue-50 uppercase tracking-tighter shadow-sm">{s}</span>
                                        ))}
                                    </div>

                                    <p className="text-[13px] text-slate-500 leading-relaxed line-clamp-2 h-10 mb-8">
                                        {m.description}
                                    </p>

                                    <div className="flex gap-2.5 mt-auto">
                                        <button className="flex-1 bg-[#1B3BF5] hover:bg-[#1429B8] text-white font-bold py-3.5 rounded-2xl text-[14px] shadow-lg shadow-blue-600/10 transition-all active:scale-[0.98]">
                                            View Profile
                                        </button>
                                        <button className="w-[52px] h-[52px] shrink-0 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-600 transition-all hover:border-blue-100 hover:bg-blue-50 shadow-sm">
                                            <MessageSquare size={20} />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Load More */}
                        <div className="lg:hidden mt-8 flex justify-center">
                            <button className="w-full bg-white border-2 border-slate-200 text-slate-900 font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-sm active:scale-95">
                                <Plus size={20} />
                                <span>Load more mentors</span>
                            </button>
                        </div>

                        {/* Desktop Pagination */}
                        <div className="hidden lg:flex items-center justify-center gap-2 mt-12">
                            <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-white hover:border-slate-900 transition-all">
                                <ChevronLeft size={18} />
                            </button>
                            <button className="w-10 h-10 rounded-xl bg-blue-600 text-white font-extrabold text-[13px] shadow-lg shadow-blue-500/20">1</button>
                            <button className="w-10 h-10 rounded-xl border border-slate-200 text-slate-500 font-bold text-[13px] hover:bg-white hover:border-slate-900 transition-all">2</button>
                            <button className="w-10 h-10 rounded-xl border border-slate-200 text-slate-500 font-bold text-[13px] hover:bg-white hover:border-slate-900 transition-all">3</button>
                            <span className="w-10 h-10 flex items-center justify-center text-slate-300 font-bold">...</span>
                            <button className="w-10 h-10 rounded-xl border border-slate-200 text-slate-500 font-bold text-[13px] hover:bg-white hover:border-slate-900 transition-all">42</button>
                            <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-white hover:border-slate-900 transition-all">
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </main>
            </div>

            {/* Fixed Footer - Matches Image 2 */}
            <footer className="hidden lg:flex shrink-0 bg-white border-t border-slate-200 h-16 items-center px-10 z-50">
                <div className="flex items-center justify-between w-full mx-auto max-w-[1400px]">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Bridgify" className="w-6 h-6 object-contain grayscale opacity-40 rounded-md" />
                        <span className="text-[13px] font-bold text-slate-300 tracking-tight">© 2024 Bridgify Inc.</span>
                    </div>
                    <div className="flex items-center gap-12">
                        {['Privacy Policy', 'Terms of Service', 'Help Center'].map(l => (
                            <a key={l} href="#" className="text-[13px] font-bold text-slate-400 hover:text-blue-600 transition-colors">{l}</a>
                        ))}
                    </div>
                </div>
            </footer>

            {/* Mobile Filter Sheet */}
            <AnimatePresence>
                {showMobileFilters && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowMobileFilters(false)}
                            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100]"
                        />
                        <motion.div
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            exit={{ y: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed bottom-0 left-0 right-0 h-[85vh] bg-white rounded-t-[32px] z-[110] shadow-2xl flex flex-col"
                        >
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between shrink-0">
                                <h2 className="text-lg font-bold text-slate-900">Advanced Filters</h2>
                                <button onClick={() => setShowMobileFilters(false)} className="p-2 bg-slate-50 rounded-full text-slate-400">
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="flex-1 overflow-y-auto custom-scrollbar">
                                <FilterSidebarContent isMobile />
                            </div>
                            <div className="p-6 border-t border-slate-100 bg-white sticky bottom-0">
                                <button onClick={() => setShowMobileFilters(false)} className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-500/20 active:scale-95 transition-all">
                                    Apply Filters
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <MobileBottomNav />
        </div>
    );
};

export default MentorDirectory;
