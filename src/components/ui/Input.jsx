import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const Input = ({
    label,
    error,
    icon: Icon,
    type = 'text',
    className = '',
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

    return (
        <div className={`space-y-2 w-full ${className}`}>
            <div className="flex justify-between items-center px-0.5">
                {label && (
                    <label className="text-[13px] font-bold text-slate-700 tracking-tight">
                        {label}
                    </label>
                )}
                {isPassword && props.showForgot && (
                    <button type="button" className="text-[12px] font-bold text-blue-600 hover:text-blue-700 transition-colors">
                        Forgot Password?
                    </button>
                )}
            </div>
            <div className="relative group">
                {Icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600 transition-colors pointer-events-none">
                        <Icon size={16} />
                    </div>
                )}
                <input
                    className={`
            w-full bg-slate-50 border border-slate-200/60 rounded-xl px-5 py-3.5 
            text-[14px] font-medium text-slate-900 placeholder:text-slate-300 outline-none
            focus:border-blue-500/50 focus:bg-white transition-all shadow-sm
            ${Icon ? 'pl-12' : ''}
            ${isPassword ? 'pr-12' : ''}
            ${error ? 'border-red-500 bg-red-50/30' : ''}
          `}
                    type={inputType}
                    {...props}
                />
                {isPassword && (
                    <button
                        type="button"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                        tabIndex="-1"
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                )}
            </div>
            {error && <p className="text-[12px] text-red-500 font-medium ml-1 mt-1">{error}</p>}
        </div>
    );
};

export default Input;
