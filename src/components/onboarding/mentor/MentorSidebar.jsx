import React from 'react';

const MentorSidebar = ({ currentStep = 1 }) => {
    const steps = [
        { number: 1, title: 'Expertise', description: 'What can you teach?' },
        { number: 2, title: 'Mentoring Goals', description: 'How do you want to help?' },
        { number: 3, title: 'Experience', description: 'Your professional background.' },
    ];

    return (
        <div className="w-80 h-screen fixed left-0 top-0 bg-white border-r border-gray-100 flex flex-col justify-between p-8 z-10 hidden lg:flex">
            <div>
                {/* Logo */}
                <div className="flex items-center gap-2 mb-12">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                        <span className="transform -rotate-12">∞</span>
                    </div>
                    <span className="text-xl font-bold text-slate-900">Bridgify</span>
                </div>

                {/* Steps */}
                <div className="space-y-8 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-3 top-2 bottom-full w-0.5 bg-gray-100 -z-10" />

                    {steps.map((step, index) => {
                        const isActive = step.number === currentStep;

                        return (
                            <div key={step.number} className={`relative pl-8 ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                                {/* Step Indicator Line/Dot */}
                                <div className={`absolute left-0 top-1.5 w-[3px] h-full ${isActive ? 'bg-blue-600' : 'bg-transparent'}`}>
                                    {/* Top Dot */}
                                    <div className={`absolute top-0 left-[-1px] w-[5px] h-[5px] rounded-full ${isActive ? 'bg-blue-600' : 'bg-gray-200'}`} />
                                </div>

                                <div className="mb-1">
                                    <span className="text-xs font-bold tracking-wider text-blue-600 uppercase">Step {step.number}</span>
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg mb-1">{step.title}</h3>
                                {isActive && (
                                    <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">
                                        {step.description}
                                    </p>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* User Profile Footer */}
            <div className="flex items-center gap-3 pt-6 border-t border-gray-50">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white shadow-sm overflow-hidden">
                    avatar
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" alt="Avatar" className="w-full h-full" />
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-900">Sarah Connor</span>
                    <span className="text-xs text-slate-500">Setting up mentor profile...</span>
                </div>
            </div>
        </div>
    );
};

export default MentorSidebar;
