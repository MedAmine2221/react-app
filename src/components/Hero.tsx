import { ArrowRight } from "lucide-react";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Hero = ({isDark}: any) => {

  return (
      <section id="home" className="pt-20 min-h-screen flex items-center animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className={`text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Choose Your<br />
                  Best{' '}
                  <span className="relative inline-block transform -rotate-3 bg-gradient-to-r from-pink-500 to-violet-500 text-white px-4 py-2 rounded-2xl">
                    Yoga
                  </span>
                  <br />
                  Teacher
                </h1>
                <p className={`text-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Calm your mind and body with the best yoga teachers available, relax your day and stay positive.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>300+</h2>
                  <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Yoga Class</p>
                </div>
                <div>
                  <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>40+</h2>
                  <p className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Participants</p>
                </div>
              </div>

              <button className="group bg-gradient-to-r from-pink-500 to-violet-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                Get Started Free
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative">
                  <div className={`text-6xl ${isDark ? 'text-white' : 'text-gray-700'}`}>
                    <img src={isDark ? "/img1-dark.png" : "/img1-light.png"}  alt="Logo" />
                  </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
