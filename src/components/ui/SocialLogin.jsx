import React from 'react';

const SocialLogin = () => {
    return (
        <div className="space-y-6 w-full pt-4">
            <div className="relative flex items-center">
                <div className="flex-grow border-t border-slate-100"></div>
                <span className="flex-shrink mx-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Social Connectivity</span>
                <div className="flex-grow border-t border-slate-100"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 py-3.5 px-4 bg-white border border-slate-100 rounded-xl hover:bg-blue-50/50 hover:border-blue-200 transition-all shadow-sm group active:scale-[0.98]">
                    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="G" className="w-5 h-5" />
                    <span className="text-[13px] font-bold text-slate-700 group-hover:text-blue-700 transition-colors">Google Inc.</span>
                </button>
                <button className="flex items-center justify-center gap-3 py-3.5 px-4 bg-white border border-slate-100 rounded-xl hover:bg-blue-50/50 hover:border-blue-200 transition-all shadow-sm group active:scale-[0.98]">
                    <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="L" className="w-5 h-5" />
                    <span className="text-[13px] font-bold text-slate-700 group-hover:text-blue-700 transition-colors">LinkedIn Corp.</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
