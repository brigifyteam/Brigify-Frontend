import React from 'react';

const StatCard = ({ title, value, icon: Icon, iconBg: IconBg, iconColor: IconColor }) => {
    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col shadow-sm">
            <div className={`w-10 h-10 ${IconBg} rounded-full flex items-center justify-center mb-4`}>
                <Icon className={`w-5 h-5 ${IconColor}`} />
            </div>
            <div className="text-sm text-slate-500 font-medium mb-1">{title}</div>
            <div className="text-3xl font-bold text-slate-900">{value}</div>
        </div>
    );
};

export default StatCard;
