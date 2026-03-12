import React, { useState } from 'react';
import {
    Search,
    Edit,
    MoreVertical,
    Phone,
    Video,
    Paperclip,
    Smile,
    Send,
    FileText,
    Download,
    ChevronRight,
    LayoutDashboard,
    Users,
    MessageSquare,
    Calendar,
    Briefcase,
    Settings,
    ChevronLeft,
    Plus,
    Clock,
    User,
    History
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import MobileBottomNav from '../../components/layout/MobileBottomNav';

// --- Components ---

const SidebarItem = ({ icon: Icon, label, isActive, isCollapsed, to, badge }) => (
    <Link
        to={to}
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

const UserChatListItem = ({ user, isActive, onClick }) => (
    <div 
        onClick={onClick}
        className={`flex items-center gap-3 p-3.5 rounded-2xl cursor-pointer transition-all duration-200 border-l-4 ${
            isActive ? 'bg-blue-50/40 border-[#1B3BF5]' : 'border-transparent hover:bg-slate-50'
        }`}
    >
        <div className="relative shrink-0">
            <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-2xl object-cover" />
            {user.online && <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></div>}
        </div>
        <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between mb-0.5">
                <h4 className="text-[14px] font-bold text-slate-900 truncate">{user.name}</h4>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{user.time}</span>
            </div>
            <div className="flex items-center justify-between">
                <p className={`text-[12px] truncate ${isActive ? 'text-slate-600 font-medium' : 'text-slate-400 font-medium'}`}>
                    {user.lastMessage}
                </p>
                {user.unreadCount > 0 && (
                    <div className="w-2 h-2 rounded-full bg-[#1B3BF5] ml-2"></div>
                )}
            </div>
        </div>
    </div>
);

const MessageBubble = ({ message, isMe }) => (
    <div className={`flex flex-col ${isMe ? 'items-end' : 'items-start'} mb-6`}>
        <div className="flex items-end gap-3 max-w-[80%]">
            {!isMe && (
                <img src={message.avatar} alt="User" className="w-8 h-8 rounded-xl object-cover shrink-0 mb-1" />
            )}
            <div className={`space-y-1 ${isMe ? 'items-end' : 'items-start'}`}>
                <div 
                    className={`px-5 py-3.5 rounded-[22px] text-[13px] leading-relaxed relative ${
                        isMe 
                            ? 'bg-[#1B3BF5] text-white rounded-br-none shadow-lg shadow-blue-500/20 font-medium' 
                            : 'bg-[#F1F5F9] text-slate-700 rounded-bl-none font-medium'
                    }`}
                >
                    {message.text}
                </div>
                {message.file && (
                    <div className="bg-white border border-slate-100 p-3 rounded-[20px] flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer w-fit min-w-[200px]">
                        <div className="w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center shrink-0">
                            <FileText size={20} />
                        </div>
                        <div className="min-w-0 overflow-hidden pr-2">
                            <p className="text-[12px] font-bold text-slate-900 truncate">{message.file.name}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{message.file.size}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
        <span className="text-[10px] font-bold text-slate-400 mt-2 ml-11 uppercase tracking-tight">{message.time}</span>
    </div>
);

// --- Page Main Component ---

const Messages = () => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [activeChat, setActiveChat] = useState(1);
    const [messageInput, setMessageInput] = useState('');

    const users = [
        { 
            id: 1, 
            name: 'Emily Rose', 
            role: 'Aspiring UX Designer',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop', 
            lastMessage: 'Thanks for the resources!', 
            time: '10:30 AM', 
            online: true, 
            unreadCount: 0,
            goal: 'Transition from Graphic Design to Product Management',
            nextSession: { day: 'Tomorrow', time: '2:00 PM - 3:00 PM' }
        },
        { 
            id: 2, 
            name: 'David Kim', 
            role: 'Frontend Dev Student',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop', 
            lastMessage: 'Can we reschedule our session?', 
            time: 'Yesterday', 
            online: false, 
            unreadCount: 1,
            goal: 'Master React.js and Framer Motion for UI/UX',
            nextSession: { day: 'Friday', time: '10:00 AM - 11:30 AM' }
        },
        { 
            id: 3, 
            name: 'John Doe', 
            role: 'Junior Product Manager',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John', 
            lastMessage: 'Sent an attachment.', 
            time: 'Tue', 
            online: false, 
            unreadCount: 0,
            goal: 'Improve Stakeholder Management skills',
            nextSession: { day: 'Monday', time: '4:00 PM - 5:00 PM' }
        },
    ];

    const activeUser = users.find(u => u.id === activeChat) || users[0];

    const messages = [
        { id: 1, text: "Hi! I just finished the updated case study for the Fintech project we discussed. Can you take a look?", time: "10:15 AM", isMe: false, avatar: activeUser.avatar },
        { id: 2, text: `Hey ${activeUser.name.split(' ')[0]}! Absolutely. The layout improvements you mentioned last time sounded promising. Have you considered adding the specific metrics we talked about?`, time: "10:22 AM", isMe: true },
        { id: 3, text: "That's a great point. I'll add the conversion rates to the hero section. I'm attaching the draft below.", time: "10:30 AM", isMe: false, avatar: activeUser.avatar },
        { id: 4, text: "Fintech_CaseStudy_v2.pdf", file: { name: 'Fintech_CaseStudy_v2.pdf', size: '2.4 MB' }, time: "10:30 AM", isMe: false, avatar: activeUser.avatar },
    ];

    return (
        <div className="h-screen bg-[#F8FAFC] flex overflow-hidden font-outfit">
            {/* Sidebar */}
            <motion.aside
                initial={false}
                animate={{ width: isSidebarCollapsed ? 80 : 230 }}
                transition={{ type: 'spring', damping: 22, stiffness: 180 }}
                className="hidden lg:flex shrink-0 bg-white border-r border-slate-200 flex-col py-8 px-4 relative z-[73]"
            >
                <button
                    onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                    className="absolute -right-3 top-24 w-6 h-6 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors z-[80]"
                >
                    <ChevronLeft size={14} className={`text-slate-400 transition-transform duration-300 ${isSidebarCollapsed ? 'rotate-180' : ''}`} />
                </button>

                <div className={`flex items-center gap-2.5 mb-10 ${isSidebarCollapsed ? 'justify-center' : 'pl-2'}`}>
                    <img src="/logo.png" alt="Bridgify" className={`object-contain rounded-xl transition-all duration-300 shadow-sm ${isSidebarCollapsed ? 'w-8 h-8' : 'w-10 h-10'}`} />
                    {!isSidebarCollapsed && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <span className="text-xl font-bold text-[#1E293B] block leading-none">Bridgify</span>
                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1 block">Mentor Portal</span>
                        </motion.div>
                    )}
                </div>

                <nav className="flex-1 space-y-1.5 overflow-y-auto no-scrollbar">
                    <SidebarItem icon={LayoutDashboard} label="Home" isActive={false} isCollapsed={isSidebarCollapsed} to="/mentor/dashboard" />
                    <SidebarItem icon={Users} label="Mentorships" isActive={false} isCollapsed={isSidebarCollapsed} to="/mentorship" />
                    <SidebarItem icon={MessageSquare} label="Messages" isActive={true} isCollapsed={isSidebarCollapsed} to="/mentor/messages" badge="2" />
                    <SidebarItem icon={Briefcase} label="Jobs" isActive={false} isCollapsed={isSidebarCollapsed} to="/jobs" />
                    <SidebarItem icon={Calendar} label="Schedule" isActive={false} isCollapsed={isSidebarCollapsed} to="/calendar" />
                </nav>

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

            {/* Main Content Area: Messaging Layout */}
            <div className="flex-1 flex overflow-hidden">
                {/* Conversations List Panel */}
                <div className="w-[300px] md:w-[350px] shrink-0 bg-white border-r border-slate-100 flex flex-col">
                    <div className="p-6 pb-2">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Messages</h2>
                            <button className="p-2 bg-blue-50 text-[#1B3BF5] rounded-xl hover:bg-blue-100 transition-all active:scale-95 shadow-sm">
                                <Edit size={18} />
                            </button>
                        </div>
                        
                        <div className="relative mb-6">
                            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                            <input 
                                type="text" 
                                placeholder="Search mentees..." 
                                className="w-full bg-slate-50 border border-slate-200 rounded-[18px] py-3 pl-11 pr-4 text-[13px] font-medium outline-none focus:bg-white focus:ring-4 focus:ring-blue-500/5 transition-all shadow-inner"
                            />
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                            {['All', 'Unread', 'Archived'].map((tab) => (
                                <button
                                    key={tab}
                                    className={`px-4 py-1.5 rounded-full text-[11px] font-bold tracking-tight transition-all ${
                                        tab === 'All' ? 'bg-[#1B3BF5] text-white shadow-lg shadow-blue-500/20' : 'text-slate-500 hover:bg-slate-100'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto no-scrollbar pt-2">
                        {users.map(user => (
                            <UserChatListItem 
                                key={user.id} 
                                user={user} 
                                isActive={activeChat === user.id}
                                onClick={() => setActiveChat(user.id)}
                            />
                        ))}
                    </div>
                </div>

                {/* Active Chat Window */}
                <div className="flex-1 flex flex-col bg-white">
                    {/* Chat Header */}
                    <header className="h-[80px] shrink-0 border-b border-slate-100 px-8 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-xl z-20">
                        <div className="flex items-center gap-4">
                            <motion.div 
                                key={activeUser.id}
                                initial={{ scale: 0.9, opacity: 0 }} 
                                animate={{ scale: 1, opacity: 1 }}
                                className="relative"
                            >
                                <img src={activeUser.avatar} alt="User" className="w-11 h-11 rounded-2xl object-cover shadow-sm" />
                                {activeUser.online && <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full shadow-sm"></div>}
                            </motion.div>
                            <div>
                                <h3 className="text-[15px] font-extrabold text-slate-900 tracking-tight">{activeUser.name}</h3>
                                <div className="flex items-center gap-1.5">
                                    <div className={`w-1.5 h-1.5 rounded-full ${activeUser.online ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
                                    <span className={`text-[11px] font-bold uppercase tracking-tight ${activeUser.online ? 'text-emerald-500' : 'text-slate-400'}`}>
                                        {activeUser.online ? 'Online' : 'Offline'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button className="p-3 text-slate-400 hover:text-[#1B3BF5] hover:bg-blue-50 rounded-2xl transition-all active:scale-95"><Phone size={20} /></button>
                            <button className="p-3 text-slate-400 hover:text-[#1B3BF5] hover:bg-blue-50 rounded-2xl transition-all active:scale-95"><Video size={20} /></button>
                            <div className="w-px h-6 bg-slate-100 mx-2"></div>
                            <button className="p-3 text-slate-400 hover:text-slate-600 rounded-2xl transition-all"><MoreVertical size={20} /></button>
                        </div>
                    </header>

                    {/* Messages Body */}
                    <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-[#FAFBFF]/30">
                        <div className="flex justify-center mb-8">
                            <span className="px-4 py-1 bg-white border border-slate-100 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-widest shadow-sm">Today, August 24</span>
                        </div>
                        
                        {messages.map(msg => (
                            <MessageBubble key={msg.id} message={msg} isMe={msg.isMe} />
                        ))}
                    </div>

                    {/* Chat Input */}
                    <footer className="p-6 bg-white border-t border-slate-100 pb-24 md:pb-6">
                        <div className="bg-slate-50 border border-slate-200 rounded-[28px] p-2 pr-3 flex items-center gap-1 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-500/5 transition-all">
                            <button className="p-3 text-slate-400 hover:text-[#1B3BF5] transition-all relative">
                                <Paperclip size={20} />
                            </button>
                            <button className="p-3 text-slate-400 hover:text-[#1B3BF5] transition-all"><Smile size={20} /></button>
                            <input 
                                type="text" 
                                placeholder="Type your message..." 
                                className="flex-1 bg-transparent border-none outline-none text-[14px] font-medium px-2 py-3 placeholder:text-slate-400"
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                            />
                            <button className="bg-[#1B3BF5] hover:bg-[#152DC2] text-white p-3 rounded-2xl flex items-center justify-center gap-2 px-6 shadow-lg shadow-blue-500/20 transition-all active:scale-95 group">
                                <span className="text-[13px] font-bold">Send</span>
                                <Send size={16} className="group-hover:translate-x-0.5 transition-transform" />
                            </button>
                        </div>
                    </footer>
                </div>

                {/* Right Profile Details Panel */}
                <div className="w-[320px] xl:w-[350px] shrink-0 bg-white border-l border-slate-100 hidden lg:flex flex-col overflow-y-auto no-scrollbar">
                    <AnimatePresence mode="wait">
                        <motion.div 
                            key={activeUser.id}
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="p-8 pb-5 flex flex-col items-center"
                        >
                            <div className="relative mb-3">
                                <img 
                                    src={activeUser.avatar} 
                                    alt={activeUser.name} 
                                    className="w-16 h-16 rounded-[20px] object-cover ring-[3px] ring-blue-50 shadow-sm transition-transform hover:scale-105"
                                />
                                <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 border-[2px] border-white rounded-full ${activeUser.online ? 'bg-emerald-500' : 'bg-slate-300'}`}></div>
                            </div>
                            <h3 className="text-[16px] font-extrabold text-slate-900 tracking-tight text-center leading-none">{activeUser.name}</h3>
                            <p className="text-[10px] font-bold text-[#1B3BF5] uppercase tracking-wider mt-1.5 mb-4">{activeUser.role}</p>
                            
                            <div className="grid grid-cols-2 gap-3 w-full">
                                <button className="flex items-center justify-center gap-1.5 py-2 px-3 bg-white border border-slate-200 rounded-xl text-[11px] font-bold text-slate-700 hover:bg-slate-50 transition-all active:scale-95">
                                    <User size={14} /> Profile
                                </button>
                                <button className="flex items-center justify-center gap-1.5 py-2 px-3 bg-white border border-slate-200 rounded-xl text-[11px] font-bold text-slate-700 hover:bg-slate-50 transition-all active:scale-95">
                                    <History size={14} /> History
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="px-8 space-y-6 pb-8">
                        {/* Goal Section */}
                        <motion.div
                            key={`goal-${activeUser.id}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Mentorship Goal</h4>
                            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-4 shadow-sm">
                                <p className="text-[13px] font-bold text-[#1B3BF5] leading-relaxed">
                                    {activeUser.goal}
                                </p>
                            </div>
                        </motion.div>

                        {/* Next Session Section */}
                        <motion.div
                            key={`session-${activeUser.id}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Next Session</h4>
                            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl p-3 hover:shadow-md transition-all cursor-pointer group">
                                <div className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-[#1B3BF5] group-hover:bg-[#1B3BF5] group-hover:text-white transition-all">
                                    <Calendar size={18} />
                                </div>
                                <div>
                                    <p className="text-[13px] font-bold text-slate-900 leading-tight">{activeUser.nextSession.day}</p>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mt-0.5">{activeUser.nextSession.time}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Shared Files Section */}
                        <div className="pb-2">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Shared Files</h4>
                                <button className="text-[10px] font-bold text-[#1B3BF5] hover:underline">View All</button>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { name: 'Portfolio_Review.pdf', date: 'Yesterday', icon: FileText, color: 'text-red-500', bg: 'bg-red-50' },
                                    { name: 'Career_Plan_Draft.docx', date: 'Aug 20', icon: FileText, color: 'text-blue-500', bg: 'bg-blue-50' },
                                ].map((file, i) => (
                                    <div key={i} className="flex items-center justify-between group cursor-pointer">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-8 h-8 ${file.bg} ${file.color} rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                                                <file.icon size={14} />
                                            </div>
                                            <div>
                                                <p className="text-[12px] font-bold text-slate-900 group-hover:text-[#1B3BF5] transition-colors leading-tight">{file.name}</p>
                                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight mt-0.5">{file.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Panel Footer */}
                        <div className="pt-6 border-t border-slate-50 opacity-60 hover:opacity-100 transition-opacity">
                            <div className="flex items-center gap-2 mb-2">
                                <img src="/logo.png" alt="Bridgify" className="w-4 h-4 object-contain grayscale" />
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">© 2024 Bridgify Inc.</span>
                            </div>
                            <div className="flex flex-wrap gap-x-4 gap-y-1">
                                {['Docs', 'Privacy', 'Help'].map(l => (
                                    <a key={l} href="#" className="text-[10px] font-bold text-slate-400 hover:text-[#1B3BF5] transition-colors uppercase tracking-tight">{l}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <MobileBottomNav />

            {/* Custom Styles */}
            <style>
                {`
                    .custom-scrollbar::-webkit-scrollbar { width: 4px; }
                    .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
                    .custom-scrollbar::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 10px; }
                    .no-scrollbar::-webkit-scrollbar { display: none; }
                    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                `}
            </style>
        </div>
    );
};

export default Messages;
