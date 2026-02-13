import React from 'react';

const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20 active:scale-[0.98]",
    secondary: "bg-white border border-slate-100 text-slate-700 hover:bg-slate-50 hover:border-slate-200 shadow-sm active:scale-[0.98]",
    ghost: "bg-transparent text-slate-500 hover:bg-blue-50 hover:text-blue-600",
    outline: "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50",
    tab: "bg-transparent text-slate-400 py-3 px-6 rounded-xl hover:text-slate-600",
    tabActive: "bg-white text-blue-700 shadow-md py-3 px-6 rounded-xl border border-slate-100/50 font-bold"
};

const sizes = {
    sm: "px-4 py-2 text-[13px]",
    md: "px-6 py-2.5 text-[14px]",
    lg: "px-8 py-3.5 text-[15px]",
    full: "w-full"
};

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    leftIcon,
    rightIcon,
    ...props
}) => {
    return (
        <button
            className={`
                inline-flex items-center justify-center font-bold transition-all duration-200 cursor-pointer rounded-xl
                ${variants[variant]}
                ${sizes[size]}
                ${fullWidth ? 'w-full' : ''}
                ${className}
            `}
            {...props}
        >
            {leftIcon && <span className="mr-2.5">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="ml-2.5">{rightIcon}</span>}
        </button>
    );
};

export default Button;
