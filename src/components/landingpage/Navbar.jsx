import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Assuming lucide-react is installed
import { motion } from 'framer-motion';
import { smooth } from '../../animations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header className="w-full bg-white border-b border-gray-200 shadow-sm fixed top-0 z-50" initial={{ y: -8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={smooth}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Bridgify" 
            className="h-9 w-9 object-contain rounded-md" 
          />
          <span className="text-2xl font-bold tracking-tight text-[#1132d4]">
            Bridgify
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <Link to="/explore-skills" className="hover:text-[#1132d4] transition-colors">
            Explore Skills
          </Link>
          <Link to="/how-it-works" className="hover:text-[#1132d4] transition-colors">
            How It Works
          </Link>
          <Link to="/mentors" className="hover:text-[#1132d4] transition-colors">
            Mentors
          </Link>
          <Link to="/jobs" className="hover:text-[#1132d4] transition-colors">
            Jobs
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            to="/auth"
            className="text-gray-700 font-medium hover:text-[#1132d4] transition-colors"
          >
            Log in
          </Link>
          <Link
            to="/auth"
            className="bg-[#1132d4] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#0d25a0] transition-colors shadow-sm"
          >
            Join Bridgify
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div className="md:hidden bg-white border-b border-gray-200 shadow-lg" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={smooth}>
          <div className="px-6 py-5 flex flex-col gap-6">
            <Link
              to="/explore-skills"
              className="text-gray-800 font-medium hover:text-[#1132d4] transition-colors"
              onClick={closeMenu}
            >
              Explore Skills
            </Link>
            <Link
              to="/how-it-works"
              className="text-gray-800 font-medium hover:text-[#1132d4] transition-colors"
              onClick={closeMenu}
            >
              How It Works
            </Link>
            <Link
              to="/mentors"
              className="text-gray-800 font-medium hover:text-[#1132d4] transition-colors"
              onClick={closeMenu}
            >
              Mentors
            </Link>
            <Link
              to="/jobs"
              className="text-gray-800 font-medium hover:text-[#1132d4] transition-colors"
              onClick={closeMenu}
            >
              Jobs
            </Link>

            {/* Mobile Auth Buttons */}
            <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
              <Link
                to="/auth"
                className="text-center text-gray-700 font-medium hover:text-[#1132d4] transition-colors py-2"
                onClick={closeMenu}
              >
                Log in
              </Link>
              <Link
                to="/auth"
                className="text-center bg-[#1132d4] text-white font-medium py-3 rounded-lg hover:bg-[#0d25a0] transition-colors"
                onClick={closeMenu}
              >
                Join Bridgify
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;