import React from 'react';
import { Home, Users, MessageSquare, User, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const MobileBottomNav = () => {
    const location = useLocation();

    // Mapping items to be more inclusive of the Mentor Dashboard experience
    const navItems = [
        { name: 'HOME', icon: Home, path: '/mentor/dashboard' },
        { name: 'CALENDAR', icon: Calendar, path: '/calendar' },
        { name: 'MESSAGES', icon: MessageSquare, path: '/messages', hasNotification: true },
        { name: 'PROFILE', icon: '/mentor/profile/1' }, // Defaulting to profile 1 for demo
    ];

    // Replacing path 4 with a proper icon object
    const items = [
        { name: 'Home', icon: Home, path: '/mentor/dashboard' },
        { name: 'Mentors', icon: Users, path: '/mentorship' },
        { name: 'Messages', icon: MessageSquare, path: '/messages', hasNotification: true },
        { name: 'Profile', icon: User, path: '/mentor/profile/1' },
    ];

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 h-[76px] bg-white/95 backdrop-blur-xl border-t border-slate-200/60 flex items-center justify-around px-4 z-[100] shadow-[0_-8px_30px_rgba(0,0,0,0.04)] pb-[env(safe-area-inset-bottom)]">
            {items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname.startsWith(item.path);

                return (
                    <Link
                        key={item.name}
                        to={item.path}
                        className="flex flex-col items-center justify-center relative py-1 px-3 min-w-[64px] group"
                    >
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                            className="relative flex flex-col items-center gap-1.5"
                        >
                            <div className={`relative p-2 rounded-2xl transition-all duration-300 ${isActive ? 'bg-blue-600 shadow-lg shadow-blue-500/30' : 'group-hover:bg-slate-50'}`}>
                                <Icon
                                    size={22}
                                    className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-400'}`}
                                    strokeWidth={isActive ? 2.5 : 2}
                                />
                                {item.hasNotification && (
                                    <div className={`absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 ${isActive ? 'border-blue-600' : 'border-white'} shadow-sm animate-pulse`} />
                                )}
                            </div>

                            <span className={`text-[10px] font-bold tracking-tight transition-all duration-300 ${isActive ? 'text-blue-600 scale-105' : 'text-slate-400'}`}>
                                {item.name}
                            </span>
                        </motion.div>

                        {isActive && (
                            <motion.div
                                layoutId="activeIndicator"
                                className="absolute -bottom-1.5 w-1 h-1 bg-blue-600 rounded-full"
                                transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                            />
                        )}
                    </Link>
                );
            })}
        </div>
    );
};

export default MobileBottomNav;
