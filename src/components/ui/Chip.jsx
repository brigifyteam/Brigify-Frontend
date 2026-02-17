import React from 'react';
import { motion } from 'framer-motion';

const Chip = ({ label, selected, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
        selected
          ? 'bg-blue-600 text-white border-blue-600 shadow-md'
          : 'bg-gray-100 text-gray-700 border-transparent hover:bg-gray-200'
      }`}
    >
      {label}
    </motion.button>
  );
};

export default Chip;
