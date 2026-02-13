import React from 'react';

const Layout = ({ children, hideNavOnMobile = false }) => {
    return (
        <div className="min-h-screen flex flex-col bg-white relative overflow-x-hidden">
            {/* Navbar */}
            <nav className="w-full h-16 px-6 lg:px-20 flex items-center justify-between shrink-0 bg-white border-b border-slate-100 sticky top-0 z-50">
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Bridgify" className="h-8 w-8 object-contain rounded-md" />
                    <span className="text-xl font-bold tracking-tight text-blue-700">Bridgify</span>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Back to Home</a>
                    <span className="w-[1px] h-4 bg-slate-200"></span>
                    <a href="#" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Global Access</a>
                </div>
            </nav>

            <main className="flex-grow flex flex-col relative">
                {children}
            </main>

            {/* Footer */}
            <footer className="w-full py-8 px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between shrink-0 bg-white border-t border-slate-100 gap-6">
                <p className="text-xs text-slate-400 font-medium order-2 md:order-1">© 2024 Bridgify Platform. All rights reserved.</p>

                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 order-1 md:order-2">
                    <a href="#" className="md:hidden text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors">Back to Home</a>
                    <a href="#" className="md:hidden text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors">Global Access</a>
                    <a href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors font-bold uppercase tracking-wider">Help Center</a>
                    <a href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors font-bold uppercase tracking-wider">Global Status</a>
                    <a href="#" className="text-xs text-slate-400 hover:text-slate-600 transition-colors font-bold uppercase tracking-wider">Developers</a>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
