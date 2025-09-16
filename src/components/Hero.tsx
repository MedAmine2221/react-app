import { ArrowRight } from "lucide-react";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Hero = ({isDark}: any) => {

  return (
      <section id="home" className="pt-16 md:pt-20 min-h-screen flex items-center animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div className="space-y-4 md:space-y-6">
                <h1 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Choose Your<br />
                  Best{' '}
                  <span className="relative inline-block transform -rotate-3 bg-gradient-to-r from-pink-500 to-violet-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-2xl text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                    Yoga
                  </span>
                  <br />
                  Teacher
                </h1>
                <p className={`text-lg sm:text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'} px-4 sm:px-0`}>
                  Calm your mind and body with the best yoga teachers available, relax your day and stay positive.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 sm:gap-8 justify-center lg:justify-start">
                <div className="text-center lg:text-left">
                  <h2 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>300+</h2>
                  <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Yoga Class</p>
                </div>
                <div className="text-center lg:text-left">
                  <h2 className={`text-3xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>40+</h2>
                  <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Participants</p>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start">
                <button className="group bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 sm:gap-3">
                  Get Started Free
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="relative order-first lg:order-last mt-8 lg:mt-0">
              <div className={`flex justify-center lg:justify-end ${isDark ? 'text-white' : 'text-gray-700'}`}>
                <img 
                  src={isDark ? "/img1-dark.png" : "/img1-light.png"}  
                  alt="Yoga Teacher" 
                  className="w-4/5 sm:w-3/5 md:w-4/5 lg:w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;