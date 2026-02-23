import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from './DashboardSidebar';

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen bg-white">
            <DashboardSidebar />

            {/* Main Content Area */}
            <main className="flex-1 ml-64">
                <div className="max-w-6xl mx-auto px-10 py-12 pb-20">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
