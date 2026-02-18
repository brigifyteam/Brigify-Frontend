import React from 'react';
import { Twitter, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & Description */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Bridgify"
                className="h-9 w-9 object-contain rounded-md"
              />
              <span className="text-2xl font-bold tracking-tight text-[#1132d4]">
                Bridgify
              </span>
            </div>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Bridging the gap between education and employment for the next generation.
            </p>

            <div className="mt-8 flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Website"
              >
                <Globe className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-6">Platform</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">Browse Skills</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Find a Mentor</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Jobs Board</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-6">Company</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-6">Legal</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & social */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-6">
            <div>
              © {new Date().getFullYear()} Bridgify Inc. All rights reserved.
            </div>

            <div className="flex items-center gap-8">
              <a href="#" className="hover:text-gray-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-300 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;