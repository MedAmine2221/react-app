import { ArrowRight } from "lucide-react";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Pose = ({isDark}: any) => {
  return (
      <section className="py-12 md:py-20 animate-on-scroll">
        {/* Add custom animation styles */}
        <style>{`
          @keyframes ping-rotate {
            0% {
              transform: scale(1) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: scale(2) rotate(180deg);
              opacity: 0;
            }
          }
          .animate-ping-rotate {
            animation: ping-rotate 3s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
          .animate-ping-slower {
            animation: ping-rotate 6s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
        `}</style>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
              <div className={`text-6xl sm:text-7xl md:text-8xl font-bold ${isDark ? 'text-white/20' : 'text-gray-900/20'} text-center sm:text-left`}>#01</div>
              <div className="relative w-full sm:w-auto">
                <img 
                  src={isDark ? "/img2-dark.png" : "/img2-light.png"}  
                  alt="Yoga Pose" 
                  className="w-3/4 sm:w-full max-w-xs mx-auto sm:mx-0"
                />
              </div>
            </div>

            <div className="space-y-6 relative">
              {/* Floating stars - hidden on mobile for better experience */}
              <div className="hidden sm:block absolute -top-2 -left-[30px] md:-left-[50px] animate-bounce delay-75">
                <div className="text-xl md:text-2xl">✨</div>
              </div>
              <div className="hidden sm:block absolute -top-8 md:-top-10 -left-[15px] md:-left-[25px] animate-bounce delay-150">
                <div className="text-xl md:text-2xl">✨</div>
              </div>
              <div className="hidden sm:block absolute -top-4 md:-top-6 -left-[0px] animate-bounce delay-300">
                <div className="text-xl md:text-2xl">✨</div>
              </div>
              
              <div className="flex flex-col lg:flex-row items-center gap-6 text-center lg:text-left">
                <p className={`text-base md:text-lg leading-relaxed max-w-md ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Get a list of specific influencers in your niche at your fingertips so you can focus on managing your status.
                </p>
                
                {/* Button with circles */}
                <div className="relative">
                  {/* Outer circles - modified with rotation */}
                  <div className="absolute -inset-3 sm:-inset-4 border-2 border-pink-500/30 rounded-full animate-ping-rotate"></div>
                  <div className="absolute -inset-4 sm:-inset-6 border-2 border-violet-500/20 rounded-full animate-ping-slower"></div>
                  
                  <button className="group relative bg-transparent border-2 border-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 px-5 py-2 sm:px-6 sm:py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:border-2 before:border-gradient-to-r before:from-pink-500 before:to-violet-500 before:-z-10 mx-auto lg:mx-0">
                    <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent font-semibold text-sm sm:text-base">Next</span>
                    <ArrowRight size={18} className="text-pink-500 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Pose;