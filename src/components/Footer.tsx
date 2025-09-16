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
    <footer className="bg-[#14092A] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h5 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent mb-4">
              Yoga
            </h5>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Take care of your health and your mind with the best Yoga classes.
            </p>

            <div className="flex space-x-4">
              <a className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1A0F3B] hover:scale-110 transition-transform duration-300">
                <IconWithGradient Icon={Facebook} />
              </a>
              <a className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1A0F3B] hover:scale-110 transition-transform duration-300">
                <IconWithGradient Icon={Twitter} />
              </a>
              <a className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1A0F3B] hover:scale-110 transition-transform duration-300">
                <IconWithGradient Icon={Instagram} />
              </a>
              <a className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1A0F3B] hover:scale-110 transition-transform duration-300">
                <IconWithGradient Icon={Youtube} />
              </a>
            </div>
          </div>
                   <div>
              <h6 className="text-white font-semibold mb-4 text-lg">Address</h6>
              <div className="text-gray-300 leading-relaxed">
                12345 M/01 Sol<br />
                Avenue, Lima, Peru
              </div>
            </div>
            
            <div>
              <h6 className="text-white font-semibold mb-4 text-lg">Contact</h6>
              <div className="text-gray-300 leading-relaxed">
                +123 456 7890<br />
                yoga@email.com
              </div>
            </div>
            
            <div>
              <h6 className="text-white font-semibold mb-4 text-lg">Office</h6>
              <div className="text-gray-300 leading-relaxed">
                Monday - Saturday<br />
                9AM - 10PM
              </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
