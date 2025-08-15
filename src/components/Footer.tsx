// src/components/Footer.tsx
import React from 'react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="https://i.postimg.cc/K83MWqw5/logo.png"
                alt="Trust Construct"
                className="h-10 w-auto mr-3"
              />
              <span className="text-xl font-bold text-gray-900">TrustConstruct</span>
            </div>
            <p className="text-gray-600 text-sm max-w-md">
              Building trust in every transaction with secure milestone-based payments.
            </p>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:support@the-trust-construct.com" 
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  support@the-trust-construct.com
                </a>
              </li>
              <li>
                <a 
                  href="mailto:thetrustconstruct@gmail.com" 
                  className="text-gray-600 hover:text-gray-900 text-sm"
                >
                  thetrustconstruct@gmail.com
                </a>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('news')}
                  className="text-gray-600 hover:text-gray-900 text-sm text-left"
                >
                  News & Updates
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleLinkClick('terms')}
                  className="text-gray-600 hover:text-gray-900 text-sm text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('privacy')}
                  className="text-gray-600 hover:text-gray-900 text-sm text-left"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-500">
            © 2025 TheTrustConstruct. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;