import React, { useState } from 'react';
import {
    LayoutDashboard,
    Users,
    Calendar,
    MessageSquare,
    BookOpen,
    Settings,
    Briefcase,
    Search,
    Bell,
    Plus,
    Clock,
    Star,
    ArrowUpRight,
    ChevronRight,
    X,
    ExternalLink,
    ChevronLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    BarChart, 
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from 'recharts';
import MobileBottomNav from '../../components/layout/MobileBottomNav';

// --- Components ---

const NotificationDropdown = ({ isOpen, onClose, notifications }) => (
    <AnimatePresence>
        {isOpen && (
            <div className="z-[75]">
                <div className="fixed inset-0" onClick={onClose} />
                <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-3 w-80 bg-white border border-slate-200 shadow-2xl rounded-2xl overflow-hidden"
                >
                    <div className="relative overflow-hidden bg-gradient-to-br from-[#1B3BF5] to-blue-50 p-5">
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                        <div className="relative z-10 flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-slate-900 text-sm">Notifications</h3>
                                <p className="text-[10px] text-[#1B3BF5] font-medium mt-0.5">You have {notifications.filter(n => n.unread).length} unread updates</p>
                            </div>
                            <div className="p-2 bg-white/50 rounded-lg backdrop-blur-sm shadow-sm"><Bell size={16} className="text-[#1B3BF5]" /></div>
                        </div>
                    </div>
                    <div className="max-h-80 overflow-y-auto custom-scrollbar">
                        {notifications.map(notif => (
                            <div key={notif.id} className={`p-4 hover:bg-slate-50 transition-colors cursor-pointer border-b border-slate-100 last:border-0 flex gap-3 ${notif.unread ? 'bg-blue-50/5' : ''}`}>
                                <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${notif.unread ? 'bg-[#1B3BF5]' : 'bg-transparent'}`} />
                                <div className="space-y-0.5">
                                    <p className="text-[13px] font-bold text-slate-900">{notif.title}</p>
                                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">{notif.body}</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mt-1">{notif.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        )}
    </AnimatePresence>
);

const NewSessionModal = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        menteeName: '',
        topic: '',
        date: '',
        time: '',
        platform: 'Zoom'
    });

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="bg-white w-full max-w-md rounded-[32px] overflow-hidden shadow-2xl relative z-10"
            >
                <div className="p-8">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Schedule Session</h2>
                            <p className="text-sm text-slate-400 font-medium tracking-tight">Add a new session to your calendar.</p>
                        </div>
                        <button onClick={onClose} className="p-2 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all text-slate-400"><X size={20} /></button>
                    </div>

                    <div className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Mentee Name</label>
                            <input
                                type="text"
                                placeholder="Ex: Jason Derulo"
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-[14px] font-medium outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all"
                                value={formData.menteeName}
                                onChange={(e) => setFormData({ ...formData, menteeName: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Session Topic</label>
                            <input
                                type="text"
                                placeholder="Ex: Career Strategy"
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-[14px] font-medium outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all"
                                value={formData.topic}
                                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Date</label>
                                <input
                                    type="date"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-[14px] font-medium outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all"
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Time</label>
                                <input
                                    type="time"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 px-4 text-[14px] font-medium outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all"
                                    value={formData.time}
                                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 flex gap-3">
                        <button
                            onClick={onClose}
                            className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 rounded-2xl text-[14px] transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={() => onSubmit(formData)}
                            className="flex-[2] bg-[#1B3BF5] hover:bg-[#1429B8] text-white font-bold py-4 rounded-2xl text-[14px] shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98]"
                        >
                            Schedule Session
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const SidebarItem = ({ icon: Icon, label, isActive, isCollapsed, to, badge }) => (
    <Link
        to={to || '#'}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${isActive
            ? 'bg-[#1B3BF5]/5 text-[#1B3BF5] font-bold shadow-sm'
            : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50 font-medium'
            } ${isCollapsed ? 'justify-center px-0' : ''}`}
    >
        <div className="relative">
            <Icon size={isCollapsed ? 26 : 22} className={`${isActive ? 'text-[#1B3BF5]' : 'text-slate-400'} transition-all`} />
            {badge && (
                <span className={`absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#1B3BF5] text-[10px] font-bold text-white ${isCollapsed ? 'ring-2 ring-white' : ''}`}>
                    {badge}
                </span>
            )}
        </div>
        {!isCollapsed && <span className="text-[14px] whitespace-nowrap">{label}</span>}
    </Link>
);

const StatCard = ({ title, value, change, icon: Icon, iconBg, iconColor }) => (
    <div className="bg-white p-4 md:p-5 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between h-full min-w-0 relative overflow-hidden">
        {/* Watermark Icon - Large, semi-hidden, subtly visible */}
        <div className={`absolute -right-6 -bottom-6 opacity-[0.05] group-hover:opacity-[0.1] transition-all duration-700 pointer-events-none ${iconColor}`}>
            <Icon size={120} strokeWidth={1.5} />
        </div>

        <div className="flex items-center justify-between mb-4 relative z-10">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest truncate max-w-[80px] md:max-w-none">{title}</span>
            <div className={`p-2 rounded-xl md:p-2.5 ${iconBg} ${iconColor} transition-transform group-hover:scale-110 shadow-sm shrink-0`}>
                <Icon size={16} className="md:w-[18px] md:h-[18px]" />
            </div>
        </div>
        <div className="relative z-10">
            <div className="text-xl md:text-2xl font-extrabold text-slate-900 mb-1">{value}</div>
            <div className="flex items-center gap-1">
                <span className={`text-[10px] font-bold ${change.startsWith('+') ? 'text-emerald-500' : 'text-blue-500'}`}>
                    {change}
                </span>
                <span className="text-[10px] font-medium text-slate-400 truncate hidden md:inline">
                    {title === 'Total Mentees' ? 'this month' : title === 'Hours Mentored' ? 'this week' : 'from last session'}
                </span>
            </div>
        </div>
    </div>
);

const NextUpCard = ({ session }) => (
    <div className="bg-white rounded-[24px] p-5 md:p-6 border border-slate-100 shadow-sm relative overflow-hidden group">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">Next Up</h2>
            <div className="bg-blue-50 text-[#1B3BF5] text-[11px] font-bold px-3 py-1.5 rounded-full border border-blue-100 shadow-sm">
                Starts in 15m
            </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
                <div className="relative shrink-0">
                    <img
                        src={session?.image || "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"}
                        alt="Mentee"
                        className="w-14 h-14 rounded-2xl object-cover border-2 border-slate-50 shadow-sm"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-4 border-white rounded-full"></div>
                </div>
                <div className="min-w-0">
                    <h3 className="text-[16px] font-bold text-slate-900 mb-0.5 truncate">{session?.topic || "Career Strategy Session"}</h3>
                    <p className="text-[13px] font-medium text-slate-400 truncate tracking-tight">
                        with <span className="text-slate-900 font-bold">{session?.menteeName || "Jason Derulo"}</span> <span className="text-slate-300 mx-1.5">•</span> UI/UX Design Path
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-3">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100 tracking-tight">
                            <Calendar size={12} className="text-[#1B3BF5]" />
                            {session?.date ? `${session.date}, ${session.time}` : "Today, 2:00 PM"}
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100 tracking-tight">
                            <ExternalLink size={12} className="text-[#1B3BF5]" />
                            {session?.platform || "Zoom"}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <button className="flex-1 md:flex-none px-6 py-3 rounded-xl border border-slate-200 text-[13px] font-bold text-slate-700 hover:bg-slate-50 transition-all active:scale-[0.98]">
                    Reschedule
                </button>
                <button className="flex-1 md:flex-none bg-[#1B3BF5] hover:bg-[#1429B8] text-white px-8 py-3 rounded-xl text-[13px] font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98]">
                    <Clock size={16} />
                    Join
                </button>
            </div>
        </div>
    </div>
);

const PendingRequestCard = () => (
    <div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm group">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight">Pending Requests</h2>
            <button className="text-[12px] font-bold text-[#1B3BF5] hover:underline">View all</button>
        </div>

        <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-[#F8FAFC]/50 border border-slate-50 space-y-4">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3 min-w-0">
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
                            alt="Sarah Miller"
                            className="w-10 h-10 rounded-xl object-cover shrink-0"
                        />
                        <div className="min-w-0">
                            <h4 className="text-[14px] font-bold text-slate-900 truncate">Sarah Miller</h4>
                            <p className="text-[11px] font-medium text-slate-400 mt-0.5 truncate whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px] md:max-w-none">Frontend Developer <span className="hidden md:inline mx-1">• Seeking mentorship in React</span></p>
                        </div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 tracking-tight shrink-0">2h ago</span>
                </div>

                <p className="text-[12px] text-slate-500 leading-relaxed italic border-l-2 border-slate-200 pl-4 py-1 tracking-tight">
                    "Hi Sarah, I've been following your work on Bridgify and would love to get your advice on transitioning from Junior to Mid-level..."
                </p>

                <div className="flex items-center gap-3 pt-2">
                    <button className="flex-1 md:flex-none bg-[#1B3BF5] hover:bg-[#1429B8] text-white px-5 py-2 rounded-lg text-[12px] font-bold transition-all active:scale-[0.98]">
                        Approve
                    </button>
                    <button className="flex-1 md:flex-none bg-white border border-slate-200 text-slate-700 px-5 py-2 rounded-lg text-[12px] font-bold hover:bg-slate-50 transition-all active:scale-[0.98]">
                        Decline
                    </button>
                </div>
            </div>
        </div>
    </div>
);

const ImpactChart = () => {
    const data = [
        { name: 'W1', value: 45 },
        { name: 'W2', value: 35 },
        { name: 'W3', value: 65 },
        { name: 'W4', value: 95 },
        { name: 'W5', value: 75 },
        { name: 'Current', value: 100 },
    ];

    return (
        <div className="bg-white rounded-[24px] p-5 md:p-6 border border-slate-100 shadow-sm lg:col-span-2 overflow-hidden flex flex-col h-[380px]">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-bold text-slate-900 tracking-tight">Mentorship Impact</h2>
                <div className="relative">
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-[11px] font-bold text-slate-500 hover:bg-slate-100 transition-all">
                        Last 30 days
                        <ArrowUpRight size={12} />
                    </button>
                </div>
            </div>

            <div className="flex-1 w-full min-h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 0, right: 0, left: -25, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" opacity={0.3} />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fontWeight: 700, fill: '#94A3B8' }}
                            dy={10}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 10, fontWeight: 700, fill: '#94A3B8' }}
                        />
                        <Tooltip
                            cursor={{ fill: '#F1F5F9', radius: 10 }}
                            contentStyle={{
                                borderRadius: '16px',
                                border: 'none',
                                boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                                padding: '12px'
                            }}
                            itemStyle={{ fontSize: '12px', fontWeight: 800, color: '#1B3BF5' }}
                        />
                        <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={32}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.name === 'Current' ? '#1B3BF5' : '#E2E8F0'} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

const CalendarWidget = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate);

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    // Get first day of month and adjust to start on Monday (0=Mo, 6=Su)
    const firstDayOfMonth = (new Date(year, month, 1).getDay() + 6) % 7;

    const prevMonthDays = new Date(year, month, 0).getDate();
    const prevMonthOverflow = Array.from({ length: firstDayOfMonth }, (_, i) => prevMonthDays - firstDayOfMonth + i + 1);

    const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const totalSlots = 42;
    const nextMonthOverflow = Array.from({ length: totalSlots - (prevMonthOverflow.length + currentMonthDays.length) }, (_, i) => i + 1);

    const handlePrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
    const handleNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

    const isToday = (d) => {
        const today = new Date();
        return today.getDate() === d && today.getMonth() === month && today.getFullYear() === year;
    };

    // Dots on specific days for UI fidelity
    const sessionDays = [2, 8, 15, 22];

    return (
        <div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm relative overflow-hidden group">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-slate-900">{monthName} {year}</h3>
                <div className="flex gap-1">
                    <button onClick={handlePrevMonth} className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 transition-all active:scale-95"><ChevronLeft size={16} /></button>
                    <button onClick={handleNextMonth} className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 transition-all active:scale-95"><ChevronRight size={16} /></button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-y-4 mb-6 relative z-10">
                {daysOfWeek.map(d => (
                    <div key={d} className="text-center text-[10px] font-bold text-slate-300 uppercase tracking-widest">{d}</div>
                ))}

                {prevMonthOverflow.map(d => (
                    <div key={`prev-${d}`} className="text-center text-[11px] font-medium text-slate-200">{d}</div>
                ))}

                {currentMonthDays.map(d => {
                    const highlight = isToday(d);
                    const hasSession = sessionDays.includes(d);

                    if (highlight) {
                        return (
                            <div key={`curr-${d}`} className="flex items-center justify-center">
                                <div className="w-6 h-6 bg-[#1B3BF5] text-white flex items-center justify-center rounded-lg text-[11px] font-bold shadow-lg shadow-blue-500/20">{d}</div>
                            </div>
                        );
                    }

                    return (
                        <div key={`curr-${d}`} className={`text-center text-[11px] font-bold relative transition-colors cursor-pointer hover:text-[#1B3BF5] ${hasSession ? 'text-[#1B3BF5]' : 'text-slate-900 font-medium'}`}>
                            {d}
                            {hasSession && <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#1B3BF5] rounded-full"></div>}
                        </div>
                    );
                })}

                {nextMonthOverflow.map(d => (
                    <div key={`next-${d}`} className="text-center text-[11px] font-medium text-slate-200">{d}</div>
                ))}
            </div>

            <div className="space-y-4 border-t border-slate-50 pt-5 relative z-10">
                <div className="flex gap-3 group/item cursor-pointer">
                    <div className="w-1 mt-1.5 h-8 bg-blue-500 rounded-full shrink-0 group-hover/item:bg-[#1B3BF5] transition-colors"></div>
                    <div>
                        <p className="text-[12px] font-bold text-slate-900 leading-tight">Portfolio Review</p>
                        <p className="text-[10px] font-medium text-slate-400 mt-1 uppercase tracking-tight">2:00 PM - 3:00 PM</p>
                    </div>
                </div>
                <div className="flex gap-3 group/item cursor-pointer">
                    <div className="w-1 mt-1.5 h-8 bg-emerald-500 rounded-full shrink-0 group-hover/item:bg-emerald-600 transition-colors"></div>
                    <div>
                        <p className="text-[12px] font-bold text-slate-900 leading-tight">Intro Call with Mark</p>
                        <p className="text-[10px] font-medium text-slate-400 mt-1 uppercase tracking-tight">4:30 PM - 5:00 PM</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MessagesWidget = () => {
    const messages = [
        { id: 1, name: 'Emily Rose', message: 'Thanks for the resources!', time: '5m', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop', online: true },
        { id: 2, name: 'David Kim', message: 'Can we reschedule?', time: '1h', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop', online: false },
        { id: 3, name: 'John Doe', message: 'Sent an attachment.', time: '1d', initials: 'JD', online: false },
    ];

    return (
        <div className="bg-white rounded-[24px] p-6 border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-bold text-slate-900 tracking-tight">Messages</h3>
                <Link to="/mentor/messages" className="p-1.5 hover:bg-slate-50 rounded-lg text-[#1B3BF5] transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:inline">View All</span>
                    <MessageSquare size={16} />
                </Link>
            </div>

            <div className="space-y-4">
                {messages.map(msg => (
                    <div key={msg.id} className="flex items-center justify-between group cursor-pointer">
                        <div className="flex items-center gap-3 min-w-0">
                            <div className="relative shrink-0">
                                {msg.avatar ? (
                                    <img src={msg.avatar} alt={msg.name} className="w-9 h-9 rounded-xl object-cover" />
                                ) : (
                                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#1B3BF5] flex items-center justify-center text-[11px] font-bold">{msg.initials}</div>
                                )}
                                {msg.online && <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>}
                            </div>
                            <div className="min-w-0">
                                <h4 className="text-[13px] font-bold text-slate-900 truncate">{msg.name}</h4>
                                <p className="text-[11px] text-slate-400 truncate w-32 font-medium tracking-tight">{msg.message}</p>
                            </div>
                        </div>
                        <span className="text-[10px] font-bold text-slate-300 uppercase shrink-0">{msg.time}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Page Component ---

const MentorDashboard = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const [showNotifications, setShowNotifications] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [sessions, setSessions] = useState([
        { menteeName: 'Jason Derulo', topic: 'Career Strategy Session', date: 'Today', time: '2:00 PM', platform: 'Zoom' }
    ]);

    const notifications = [
        { id: 1, title: 'New Message', body: 'Sarah Chen sent you a message', time: '2m ago', unread: true },
        { id: 2, title: 'Session Approved', body: 'Your session with Jason is confirmed', time: '1h ago', unread: false },
        { id: 3, title: 'New Review', body: 'Alex left a 5-star review', time: '5h ago', unread: true },
    ];

    const handleNewSession = (newSession) => {
        setSessions([newSession, ...sessions]);
        setIsModalOpen(false);
    };

    return (
        <div className="h-screen bg-[#F8FAFC] flex overflow-hidden font-outfit">
            <style>
                {`
                    .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                    .custom-scrollbar::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 10px; }
                    .no-scrollbar::-webkit-scrollbar { display: none; }
                    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                `}
            </style>

            <AnimatePresence>{isModalOpen && <NewSessionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleNewSession} />}</AnimatePresence>

            {/* Sidebar */}
            <motion.aside
                initial={false}
                animate={{ width: isSidebarCollapsed ? 80 : 230 }}
                transition={{ type: 'spring', damping: 22, stiffness: 180 }}
                className="hidden lg:flex shrink-0 bg-white border-r border-slate-200 flex-col py-8 px-4 relative z-[73]"
            >
                {/* Collapse Button */}
                <button
                    onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                    className="absolute -right-3 top-24 w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors z-[80]"
                >
                    <ChevronLeft size={14} className={`text-slate-400 transition-transform duration-300 ${isSidebarCollapsed ? 'rotate-180' : ''}`} />
                </button>

                {/* Brand */}
                <div className={`flex items-center gap-2.5 mb-10 ${isSidebarCollapsed ? 'justify-center' : 'pl-2'}`}>
                    <img src="/logo.png" alt="Bridgify" className={`object-contain rounded-xl transition-all duration-300 shadow-sm ${isSidebarCollapsed ? 'w-8 h-8' : 'w-10 h-10'}`} />
                    {!isSidebarCollapsed && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <span className="text-xl font-bold text-[#1E293B] block leading-none">Bridgify</span>
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1 block">Mentor Portal</span>
                        </motion.div>
                    )}
                </div>

                {/* Nav */}
                <nav className="flex-1 space-y-1.5 overflow-y-auto no-scrollbar">
                    <SidebarItem icon={LayoutDashboard} label="Home" isActive={true} isCollapsed={isSidebarCollapsed} to="/mentor/dashboard" />
                    <SidebarItem icon={Users} label="Mentorships" isActive={false} isCollapsed={isSidebarCollapsed} to="/mentorship" />
                    <SidebarItem icon={MessageSquare} label="Messages" isActive={false} isCollapsed={isSidebarCollapsed} to="/mentor/messages" badge="2" />
                    <SidebarItem icon={Briefcase} label="Jobs" isActive={false} isCollapsed={isSidebarCollapsed} to="/jobs" />
                    <SidebarItem icon={Calendar} label="Schedule" isActive={false} isCollapsed={isSidebarCollapsed} to="/calendar" />
                </nav>

                {/* Profile/Settings */}
                <div className="mt-auto pt-6 border-t border-slate-50">
                    <SidebarItem icon={Settings} label="Settings" isActive={false} isCollapsed={isSidebarCollapsed} to="/settings" />
                    <div className={`flex items-center gap-3 mt-4 ${isSidebarCollapsed ? 'justify-center' : 'px-2'}`}>
                        <img
                            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=200&auto=format&fit=crop"
                            alt="Sarah Jenkins"
                            className={`rounded-xl object-cover shadow-sm transition-all duration-300 ${isSidebarCollapsed ? 'w-8 h-8' : 'w-10 h-10'}`}
                        />
                        {!isSidebarCollapsed && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-w-0">
                                <h4 className="text-[14px] font-bold text-slate-900 truncate">Sarah Jenkins</h4>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">Senior Mentor</p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </motion.aside>

            {/* Content Area */}
            <main className="flex-1 overflow-y-auto custom-scrollbar relative flex flex-col">
                {/* Header */}
                <header className="h-20 shrink-0 bg-white/60 backdrop-blur-xl border-b border-slate-100 flex items-center justify-between px-6 md:px-8 sticky top-0 z-[60]">
                    <div className="flex-1">
                        <h1 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
                    </div>

                    <div className="flex items-center gap-4 md:gap-6 flex-1 justify-end">
                        <div className="relative w-full max-w-sm hidden lg:block">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                            <input type="text" placeholder="Search mentees or resources..." className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-11 pr-4 text-[13px] font-medium outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all" />
                        </div>
                        <div className="flex items-center gap-2 md:gap-3">
                            <div className="relative">
                                <button onClick={() => setShowNotifications(!showNotifications)} className={`p-2.5 rounded-xl transition-all relative ${showNotifications ? 'bg-blue-50 text-[#1B3BF5]' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'}`}><Bell size={20} /><span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full shadow-sm"></span></button>
                                <NotificationDropdown isOpen={showNotifications} onClose={() => setShowNotifications(false)} notifications={notifications} />
                            </div>
                            <button onClick={() => setIsModalOpen(true)} className="bg-[#1B3BF5] hover:bg-[#1429B8] text-white px-5 py-3 rounded-xl text-[13px] font-bold flex items-center gap-2 shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98] whitespace-nowrap"><Plus size={18} className="shrink-0" /><span className="hidden md:inline">New Session</span></button>
                        </div>
                    </div>
                </header>

                <div className="flex-1 px-4 md:px-8 py-4 pb-24 md:pb-8 space-y-4 max-w-[1400px] mx-auto w-full">
                    {/* Welcome */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}><h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">Good morning, Sarah.</h2><p className="text-[13px] md:text-sm font-medium text-slate-500 mt-0.5 tracking-tight">Here's what's happening today.</p></motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
                        <StatCard title="Total Mentees" value="12" change="+2" icon={Users} iconBg="bg-blue-50" iconColor="text-[#1B3BF5]" />
                        <StatCard title="Hours Mentored" value="45h" change="+5h" icon={Clock} iconBg="bg-purple-50" iconColor="text-purple-600" />
                        <StatCard title="Avg Rating" value="4.9" change="+0.1" icon={Star} iconBg="bg-[#FFF9E5]" iconColor="text-[#FF9500]" />
                        <StatCard title="Upcoming" value={sessions.length} change={`Next in 15m`} icon={Calendar} iconBg="bg-emerald-50" iconColor="text-emerald-600" />
                    </div>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 min-h-0">
                        <div className="lg:col-span-2 space-y-5 md:space-y-6 min-h-0 shadow-none"><NextUpCard session={sessions[0]} /><PendingRequestCard /><ImpactChart /></div>
                        <div className="space-y-5 md:space-y-6 pb-12"><CalendarWidget /><MessagesWidget />
                            <div className="bg-gradient-to-br from-[#1B3BF5] to-blue-600 rounded-[28px] p-8 text-white relative overflow-hidden shadow-2xl shadow-blue-600/20"><div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-white/10 rounded-full blur-3xl"></div><div className="relative z-10"><h4 className="text-[14px] font-bold mb-2 tracking-tight">Need help?</h4><p className="text-[12px] opacity-80 font-medium leading-relaxed mb-6 tracking-tight">Explore curated resources for mentors to enhance your skills.</p><button className="bg-white text-[#1B3BF5] px-6 py-2.5 rounded-xl text-[12px] font-extrabold shadow-sm hover:translate-x-1 transition-transform tracking-tight">Open Resources</button></div></div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="hidden md:flex shrink-0 bg-white border-t border-slate-200 h-16 items-center px-6 md:px-10 z-[55]">
                    <div className="flex items-center justify-between w-full mx-auto max-w-[1400px]">
                        <div className="flex items-center gap-3"><img src="/logo.png" alt="Bridgify" className="w-5 h-5 object-contain grayscale opacity-30 rounded-md shrink-0" /><span className="text-[11px] md:text-[13px] font-bold text-slate-300 tracking-tight">© 2024 Bridgify Inc.</span></div>
                        <div className="flex items-center gap-4 md:gap-12">{['Docs', 'Privacy', 'Help'].map(l => (<a key={l} href="#" className="text-[11px] md:text-[13px] font-bold text-slate-400 hover:text-[#1B3BF5] transition-colors whitespace-nowrap">{l}</a>))}</div>
                    </div>
                </footer>
            </main>

            {/* Mobile Navigation */}
            <MobileBottomNav />
        </div>
    );
};

export default MentorDashboard;
