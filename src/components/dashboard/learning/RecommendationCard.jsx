import React from 'react';
import { Star, Plus } from 'lucide-react';

const RecommendationCard = ({ image, rating, title, author, duration }) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-shadow">
            {/* Image Section */}
            <div className="relative h-48 w-full">
                <img src={image} alt={title} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                    <span className="text-sm font-bold text-slate-900">{rating}</span>
                    <Star className="w-4 h-4 fill-slate-900 text-slate-900" />
                </div>
            </div>

            {/* Content Section */}
            <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-slate-900 text-lg mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors">{title}</h3>
                <p className="text-sm text-slate-500 mb-6">By {author}</p>

                <div className="mt-auto flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-600">{duration}</span>
                    <button className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                        <Plus className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecommendationCard;
