import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen bg-white">
            <DashboardSidebar />

            {/* Main Content Area */}
            <main className="flex-1 lg:ml-64">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-8 lg:py-12 pb-32 lg:pb-20">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
