import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen bg-[#F8FAFC]">
            <DashboardSidebar />

            {/* Main Content Area */}
            <main className="flex-1 lg:ml-64 flex flex-col">
                {/* Top Navigation Bar */}
                <header className="h-16 border-b border-gray-200 bg-white sticky top-0 z-20 px-6 lg:px-10 flex items-center justify-between">
                    <div className="flex-1 max-w-md relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-100 rounded-lg leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-colors"
                            placeholder="Search courses, mentors..."
                        />
                    </div>
                    <div className="flex items-center ml-4">
                        <button className="p-2 text-slate-500 hover:text-slate-700 relative rounded-full hover:bg-slate-50 transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                            <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
                        </button>
                    </div>
                </header>

                <div className="flex-1 px-6 lg:px-10 py-8 pb-20">
                    <div className="max-w-[1200px] mx-auto">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
