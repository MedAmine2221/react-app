import { ArrowRight } from "lucide-react";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InstagramSection = ({isDark}: any) => {
  return (
      <section className="py-20 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative min-h-[650px] flex items-center justify-center">
            <div className="text-center z-10 relative">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Follow Us On<br />Instagram
              </h2>
              <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent mb-8">
                #YOGA
              </p>
              <button className="group w-32 h-32 bg-gradient-to-r from-pink-500 to-violet-500 text-white rounded-full flex flex-col items-center justify-center text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:-translate-y-1">
                <span className="mb-1">Follow</span>
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Instagram Photos - Hidden on mobile for better responsive experience */}
            <div className="hidden lg:block absolute inset-0">
              <div className="absolute top-0 left-16 w-80 h-96 transform -rotate-3 rounded-3xl p-6">
                <img src={isDark ? "/img5-dark.png" : "/img5-light.png"}  alt="Logo" />
              </div>
              
              <div className="absolute top-0 right-16 w-80 h-96 transform rotate-3 rounded-3xl p-6">
                <img src={isDark ? "/img6-dark.png" : "/img6-light.png"}  alt="Logo" />
              </div>
              
              <div className="absolute bottom-0 left-12 w-96 h-64 transform rotate-2 rounded-3xl p-6">
                <img src={isDark ? "/img7-dark.png" : "/img7-light.png"}  alt="Logo" />
              </div>
              
              <div className="absolute bottom-0 right-12 w-96 h-64 transform -rotate-2 rounded-3xl p-6">
                <img src={isDark ? "/img8-dark.png" : "/img8-light.png"}  alt="Logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default InstagramSection;
