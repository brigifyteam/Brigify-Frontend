import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const OptionCard = ({ icon: Icon, title, description, selected, onClick }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            onClick={onClick}
            className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 h-full flex flex-col justify-between ${selected
                    ? 'border-blue-600 bg-blue-50/50 shadow-md'
                    : 'border-gray-200 hover:border-blue-200 bg-white'
                }`}
        >
            {selected && (
                <div className="absolute top-4 right-4 text-blue-600">
                    <CheckCircle size={24} fill="currentColor" className="text-white" />
                </div>
            )}

            <div className="mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${selected ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                    <Icon size={20} />
                </div>
            </div>

            <div>
                <h3 className={`font-semibold text-lg mb-1 ${selected ? 'text-blue-900' : 'text-gray-900'}`}>{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
};

export default OptionCard;
