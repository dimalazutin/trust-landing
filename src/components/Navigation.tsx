import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
        {/* Logo + mobile toggle */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <img
            src="https://i.postimg.cc/GpPJZt1P/logo-TC-Avenir-Black.png"
            alt="Trust Construct Logo"
            className="h-10 sm:h-12"
          />
          <button
            className="sm:hidden ml-4 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Nav links */}
        <nav
          className={`
            ${menuOpen ? 'block' : 'hidden'} 
            sm:flex sm:items-center sm:space-x-6 
            mt-4 sm:mt-0 w-full sm:w-auto
          `}
        >
          <a
            href="#how-it-works"
            className="block text-gray-700 hover:text-gray-900 py-2 sm:py-0"
          >
            How It Works
          </a>
          <a
            href="#benefits"
            className="block text-gray-700 hover:text-gray-900 py-2 sm:py-0"
          >
            Benefits
          </a>
          <a
            href="#comparison"
            className="block text-gray-700 hover:text-gray-900 py-2 sm:py-0"
          >
            How We Compare
          </a>
          <button
            onClick={() => window.location.hash = '#news'}
            className="block text-gray-700 hover:text-gray-900 py-2 sm:py-0 text-left"
          >
            News
          </button>
        </nav>

        {/* CTAs */}
        <div className="flex space-x-3 mt-4 sm:mt-0">
          <a
            href="https://youtube.com/shorts/8etFMtBR79A"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
          >
            Watch Demo
          </a>
          <a
            href="https://platform.thetrustconstruct.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Try Trust
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navigation;