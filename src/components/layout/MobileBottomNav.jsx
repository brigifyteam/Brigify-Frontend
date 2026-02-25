import React from 'react';
import { Home, Users, MessageSquare, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const MobileBottomNav = () => {
    const location = useLocation();

    const navItems = [
        { name: 'HOME', icon: Home, path: '/dashboard' },
        { name: 'MENTORS', icon: Users, path: '/mentorship' },
        { name: 'MESSAGES', icon: MessageSquare, path: '/messages', hasNotification: true },
        { name: 'PROFILE', icon: User, path: '/profile' },
    ];

    return (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 h-[72px] bg-white border-t border-slate-200 flex items-center justify-around px-4 z-[70] pb-2">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path || (item.path === '/mentorship' && location.pathname.includes('mentors'));

                return (
                    <Link
                        key={item.name}
                        to={item.path}
                        className="flex flex-col items-center gap-1.5 relative px-2 py-1 min-w-[70px]"
                    >
                        <div className="relative">
                            <Icon
                                size={22}
                                className={`transition-colors ${isActive ? 'text-blue-600' : 'text-slate-400'}`}
                                strokeWidth={isActive ? 2.5 : 2}
                            />
                            {item.hasNotification && (
                                <div className="absolute -top-0.5 -right-2 w-2.5 h-2.5 bg-blue-600 rounded-full border-2 border-white shadow-sm" />
                            )}
                        </div>
                        <span className={`text-[9px] font-extrabold tracking-widest transition-colors ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                            {item.name}
                        </span>
                        {isActive && (
                            <div className="absolute -bottom-1 w-[20px] h-[3px] bg-blue-600 rounded-full" />
                        )}
                    </Link>
                );
            })}
        </div>
    );
};

export default MobileBottomNav;
