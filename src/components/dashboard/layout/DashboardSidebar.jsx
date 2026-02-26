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
        { name: 'Learn', icon: GraduationCap, path: '/dashboard/learn' },
        { name: 'Connect', icon: Users, path: '/dashboard/connect' },
        { name: 'Jobs', icon: Briefcase, path: '/dashboard/jobs' },
    ];

    return (
        <aside className="hidden lg:flex w-64 h-screen fixed left-0 top-0 bg-white border-r border-gray-100 flex-col justify-between py-6 z-10">
            <div>
                {/* Logo */}
                <div className="flex items-center gap-2 px-6 mb-8">
                    <img src="/logo.png" alt="Bridgify" className="h-8 w-8 object-contain rounded-md" />
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
                <div className="flex items-center gap-3 px-4 py-3 border border-gray-100 rounded-2xl mx-1 bg-gray-50/50 shadow-sm mt-8">
                    <div className="w-10 h-10 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center overflow-hidden">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col min-w-0">
                        <span className="text-sm font-bold text-slate-900 truncate">Alex Morgan</span>
                        <span className="text-xs text-slate-500 truncate">Student Account</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default DashboardSidebar;
