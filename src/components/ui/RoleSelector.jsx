import React from 'react';

const RoleSelector = ({ value, onChange, options }) => {
    return (
        <div className="grid grid-cols-3 gap-3 w-full">
            {options.map((option) => (
                <button
                    key={option.id}
                    type="button"
                    onClick={() => onChange(option.id)}
                    className={`
            relative flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-300
            ${value === option.id
                            ? 'border-blue-600 bg-blue-50/40'
                            : 'border-slate-100 bg-white hover:border-slate-200'}
          `}
                >
                    <div className={`mb-2 transition-colors duration-300 ${value === option.id ? 'text-blue-600' : 'text-slate-400'}`}>
                        {/* Clone icon to apply size if it's a lucide icon object */}
                        {React.cloneElement(option.icon, { size: 24 })}
                    </div>
                    <span className={`text-[12px] font-bold tracking-tight transition-colors duration-300 ${value === option.id ? 'text-blue-700' : 'text-slate-500'}`}>
                        {option.label}
                    </span>

                    {value === option.id && (
                        <div className="absolute top-2.5 right-2.5 flex items-center justify-center w-4 h-4 bg-blue-600 text-white rounded-full">
                            <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    )}
                </button>
            ))}
        </div>
    );
};

export default RoleSelector;
