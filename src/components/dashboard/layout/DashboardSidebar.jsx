import React from 'react';
import {
    LayoutDashboard,
    GraduationCap,
    Users,
    Briefcase,
    BarChart2,
    Settings
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const DashboardSidebar = () => {
    const location = useLocation();

    const navItems = [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
        { name: 'My Learning', icon: GraduationCap, path: '/dashboard/learning' },
        { name: 'Mentorship', icon: Users, path: '/dashboard/mentorship' },
        { name: 'Opportunities', icon: Briefcase, path: '/dashboard/opportunities' },
        { name: 'Analytics', icon: BarChart2, path: '/dashboard/analytics' },
    ];

    return (
        <aside className="w-64 h-screen fixed left-0 top-0 bg-white border-r border-gray-100 flex flex-col justify-between py-6 z-10">
            <div>
                {/* Logo */}
                <div className="flex items-center gap-2 px-6 mb-8">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    
                        <div className="w-4 h-4 border-2 border-white rounded-sm relative">
                            <div className="absolute w-4 h-4 border-2 border-white top-1 left-1 rounded-sm mix-blend-overlay"></div>
                        </div>
                    </div>
                    <div>
                        <span className="text-xl font-bold text-slate-900 leading-none block">Bridgify</span>
                        <span className="text-[10px] text-slate-500 font-medium tracking-wide">Career Platform</span>
                    </div>
                </div>

                {/* Navigation Menu */}
                <nav className="space-y-1 px-3">
                    {navItems.map((item) => {
                        const isActive = location.pathname.includes(item.path);
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive
                                        ? 'bg-blue-50 text-blue-600 font-semibold'
                                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900 font-medium'
                                    }`}
                            >
                                <Icon size={20} className={isActive ? 'text-blue-600' : 'text-slate-400'} />
                                <span>{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>
            </div>

            <div className="px-3">
                {/* Settings Link */}
                <Link
                    to="/dashboard/settings"
                    className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-slate-900 font-medium mb-4 rounded-xl hover:bg-slate-50 transition-colors"
                >
                    <Settings size={20} className="text-slate-400" />
                    <span>Settings</span>
                </Link>

                {/* User Profile Footer */}
                <div className="flex items-center gap-3 px-4 py-3 border border-gray-100 rounded-2xl mx-1 bg-white shadow-sm">
                    <div className="w-9 h-9 rounded-full bg-orange-100 flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span className="text-sm font-bold text-slate-900 truncate">Alex Morgan</span>
                        <span className="text-xs text-slate-500 truncate">Pro Member</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default DashboardSidebar;
