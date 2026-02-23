import React from 'react';
import { FileCode2, Megaphone, LineChart } from 'lucide-react';

const CourseProgressCard = ({ iconName, level, title, description, progress, iconColor, iconBg }) => {

    
    const renderIcon = () => {
        switch (iconName) {
            case 'code': return <FileCode2 className={`w-5 h-5 ${iconColor}`} />;
            case 'marketing': return <Megaphone className={`w-5 h-5 ${iconColor}`} />;
            case 'data': return <LineChart className={`w-5 h-5 ${iconColor}`} />;
            default: return <FileCode2 className={`w-5 h-5 ${iconColor}`} />;
        }
    };

    
    const getLevelColor = () => {
        switch (level.toLowerCase()) {
            case 'beginner': return 'text-purple-600 bg-purple-50';
            case 'intermediate': return 'text-blue-600 bg-blue-50';
            case 'advanced': return 'text-emerald-600 bg-emerald-50';
            default: return 'text-gray-600 bg-gray-50';
        }
    };

    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-100 flex flex-col shadow-sm">
            <div className="flex justify-between items-start mb-4">
                <div className={`w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center`}>
                    {renderIcon()}
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getLevelColor()}`}>
                    {level}
                </span>
            </div>

            <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
            <p className="text-sm text-slate-500 mb-6 line-clamp-2 min-h-[40px]">{description}</p>

            <div className="mt-auto">
                <div className="flex justify-between text-xs font-semibold mb-2">
                    <span className="text-slate-700">Progress</span>
                    <span className="text-slate-900">{progress}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-1.5 mb-6">
                    <div
                        className={`h-1.5 rounded-full ${progress === 100 ? 'bg-emerald-500' : 'bg-blue-600'}`}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <button className="w-full py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors">
                    Continue Learning
                </button>
            </div>
        </div>
    );
};

export default CourseProgressCard;
