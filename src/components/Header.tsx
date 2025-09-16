import { Menu, Moon, Sun, X } from "lucide-react";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Header= ({isDark, navbarBg, setIsMenuOpen, toggleTheme, isMenuOpen, scrollToSection}: any) => {
  return (
     <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarBg ? (isDark ? 'bg-[#14092A] backdrop-blur-lg' : 'bg-[#f5f0ff] backdrop-blur-lg') : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                Yoga
              </h1>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className={`px-4 py-2 rounded-full transition-all duration-300 ${isDark ? 'text-white hover:text-pink-400' : 'text-gray-800 hover:text-pink-500'} hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 hover:bg-clip-text hover:text-transparent font-medium`}>
                  Home
                </button>
                <div className={`absolute top-full left-0 mt-2 w-48 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${isDark ? 'bg-indigo-900/95 border border-white/10' : 'bg-white border border-gray-100'} backdrop-blur-lg`}>
                  <div className="py-2">
                    <a href="#" className={`block px-4 py-3 text-sm ${isDark ? 'text-white hover:text-pink-400' : 'text-gray-700 hover:text-pink-500'} hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-violet-500/10 transition-colors`}>Welcome</a>
                    <a href="#" className={`block px-4 py-3 text-sm ${isDark ? 'text-white hover:text-pink-400' : 'text-gray-700 hover:text-pink-500'} hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-violet-500/10 transition-colors`}>About Us</a>
                    <a href="#" className={`block px-4 py-3 text-sm ${isDark ? 'text-white hover:text-pink-400' : 'text-gray-700 hover:text-pink-500'} hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-violet-500/10 transition-colors`}>Our Story</a>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <button className={`px-4 py-2 rounded-full transition-all duration-300 ${isDark ? 'text-white hover:text-pink-400' : 'text-gray-800 hover:text-pink-500'} hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 hover:bg-clip-text hover:text-transparent font-medium`}>
                  Health
                </button>
                <div className={`absolute top-full left-0 mt-2 w-48 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${isDark ? 'bg-indigo-900/95 border border-white/10' : 'bg-white border border-gray-100'} backdrop-blur-lg`}>
                  <div className="py-2">
                    <a href="#" className={`block px-4 py-3 text-sm ${isDark ? 'text-white hover:text-pink-400' : 'text-gray-700 hover:text-pink-500'} hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-violet-500/10 transition-colors`}>Wellness Tips</a>
                    <a href="#" className={`block px-4 py-3 text-sm ${isDark ? 'text-white hover:text-pink-400' : 'text-gray-700 hover:text-pink-500'} hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-violet-500/10 transition-colors`}>Nutrition</a>
                    <a href="#" className={`block px-4 py-3 text-sm ${isDark ? 'text-white hover:text-pink-400' : 'text-gray-700 hover:text-pink-500'} hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-violet-500/10 transition-colors`}>Mental Health</a>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className={`px-4 py-2 rounded-full transition-all duration-300 ${isDark ? 'text-white hover:text-pink-400' : 'text-gray-800 hover:text-pink-500'} hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 hover:bg-clip-text hover:text-transparent font-medium`}>
                  Routine
                </button>
                <div className={`absolute top-full left-0 mt-2 w-48 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${isDark ? 'bg-indigo-900/95 border border-white/10' : 'bg-white border border-gray-100'} backdrop-blur-lg`}>
                  <div className="py-2">
                    <a href="#" className={`block px-4 py-3 text-sm ${isDark ? 'text-white hover:text-pink-400' : 'text-gray-700 hover:text-pink-500'} hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-violet-500/10 transition-colors`}>Morning Yoga</a>
                    <a href="#" className={`block px-4 py-3 text-sm ${isDark ? 'text-white hover:text-pink-400' : 'text-gray-700 hover:text-pink-500'} hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-violet-500/10 transition-colors`}>Evening Practice</a>
                    <a href="#" className={`block px-4 py-3 text-sm ${isDark ? 'text-white hover:text-pink-400' : 'text-gray-700 hover:text-pink-500'} hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-violet-500/10 transition-colors`}>Quick Sessions</a>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className={`px-4 py-2 rounded-full transition-all duration-300 ${isDark ? 'text-white hover:text-pink-400' : 'text-gray-800 hover:text-pink-500'} hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500 hover:bg-clip-text hover:text-transparent font-medium`}>
                  Follow
                </button>
                <div className={`absolute top-full left-0 mt-2 w-48 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ${isDark ? 'bg-indigo-900/95 border border-white/10' : 'bg-white border border-gray-100'} backdrop-blur-lg`}>
                  <div className="py-2">
                    <a href="#" className={`block px-4 py-3 text-sm ${isDark ? 'text-white hover:text-pink-400' : 'text-gray-700 hover:text-pink-500'} hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-violet-500/10 transition-colors`}>Instagram</a>
                    <a href="#" className={`block px-4 py-3 text-sm ${isDark ? 'text-white hover:text-pink-400' : 'text-gray-700 hover:text-pink-500'} hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-violet-500/10 transition-colors`}>YouTube</a>
                    <a href="#" className={`block px-4 py-3 text-sm ${isDark ? 'text-white hover:text-pink-400' : 'text-gray-700 hover:text-pink-500'} hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-violet-500/10 transition-colors`}>Facebook</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Theme Toggle and Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-3 rounded-full border-2 transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'border-white/30 bg-white/20 text-white hover:border-pink-400' 
                    : 'border-gray-200 bg-gray-50 text-gray-800 hover:border-pink-500'
                }`}
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden p-3 rounded-full border-2 transition-all duration-300 ${
                  isDark 
                    ? 'border-white/30 bg-white/20 text-white' 
                    : 'border-gray-200 bg-gray-50 text-gray-800'
                }`}
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden mt-4 p-4 rounded-2xl transition-all duration-300 ${isDark ? 'bg-indigo-900/95 border border-white/10' : 'bg-white/95 border border-gray-100'} backdrop-blur-lg`}>
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('home')} className={`p-3 text-left rounded-lg transition-colors ${isDark ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-gray-100'}`}>Home</button>
                <button onClick={() => scrollToSection('health')} className={`p-3 text-left rounded-lg transition-colors ${isDark ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-gray-100'}`}>Health</button>
                <button onClick={() => scrollToSection('routine')} className={`p-3 text-left rounded-lg transition-colors ${isDark ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-gray-100'}`}>Routine</button>
                <button onClick={() => scrollToSection('follow')} className={`p-3 text-left rounded-lg transition-colors ${isDark ? 'text-white hover:bg-white/10' : 'text-gray-800 hover:bg-gray-100'}`}>Follow</button>
              </div>
            </div>
          )}
        </div>
      </nav>
  );
};

export default Header;
