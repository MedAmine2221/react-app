import { ArrowRight } from "lucide-react";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AnytimeSection = ({isDark}: any) => {
  return (
          <section className="py-20 animate-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 lg:order-1">
              <h2 className={`text-4xl lg:text-5xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Anytime, Any<br />Place, Any<br />Workout
              </h2>
              <p className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Take your routine at any time of your day, with the new videos and with the teachers who will guide you.
              </p>
              <button className="group bg-gradient-to-r from-pink-500 to-violet-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3">
                Get Started Free
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative lg:order-2">
              <img src={isDark ? "/img4-dark.png" : "/img4-light.png"}  alt="Logo" />
            </div>
          </div>
        </div>
      </section>
  );
};

export default AnytimeSection;
