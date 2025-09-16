import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  const gradientId = "gradient"; // ID commun pour les defs

  const IconWithGradient = ({ Icon }: { Icon: typeof Facebook }) => (
    <svg width="28" height="28" viewBox="0 0 24 24">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <Icon stroke={`url(#${gradientId})`} fill="none" />
    </svg>
  );

  return (
    <footer className="bg-[#14092A] text-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 lg:col-span-1 text-center md:text-left">
            <h5 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent mb-4">
              Yoga
            </h5>
            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
              Take care of your health and your mind with the best Yoga classes.
            </p>

            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#1A0F3B] hover:scale-110 transition-transform duration-300">
                <IconWithGradient Icon={Facebook} />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#1A0F3B] hover:scale-110 transition-transform duration-300">
                <IconWithGradient Icon={Twitter} />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#1A0F3B] hover:scale-110 transition-transform duration-300">
                <IconWithGradient Icon={Instagram} />
              </a>
              <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#1A0F3B] hover:scale-110 transition-transform duration-300">
                <IconWithGradient Icon={Youtube} />
              </a>
            </div>
          </div>
          
          {/* Address Section */}
          <div className="text-center md:text-left">
            <h6 className="text-white font-semibold mb-4 text-base sm:text-lg">Address</h6>
            <div className="text-gray-300 leading-relaxed text-sm sm:text-base">
              12345 M/01 Sol<br />
              Avenue, Lima, Peru
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h6 className="text-white font-semibold mb-4 text-base sm:text-lg">Contact</h6>
            <div className="text-gray-300 leading-relaxed text-sm sm:text-base">
              +123 456 7890<br />
              yoga@email.com
            </div>
          </div>
          
          {/* Office Hours Section */}
          <div className="text-center md:text-left">
            <h6 className="text-white font-semibold mb-4 text-base sm:text-lg">Office</h6>
            <div className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Monday - Saturday<br />
              9AM - 10PM
            </div>
          </div>
        </div>
        
        {/* Bottom Copyright Bar - Optional */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Yoga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;