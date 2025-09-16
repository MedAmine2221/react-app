import { ArrowRight } from "lucide-react";
import React from "react";

interface AnytimeSectionProps {
  isDark: boolean;
}

const AnytimeSection = ({ isDark }: AnytimeSectionProps) => {
  return (
    <section className={`py-12 md:py-16 lg:py-20 animate-on-scroll`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Contenu texte */}
          <div className="space-y-4 md:space-y-6 lg:space-y-6 order-2 lg:order-1">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Anytime, Any<br className="hidden xs:inline" />Place, Any<br className="hidden xs:inline" />Workout
            </h2>
            <p className={`text-base md:text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Take your routine at any time of your day, with the new videos and with the teachers who will guide you.
            </p>
            <button className="group w-full sm:w-auto bg-gradient-to-r from-pink-500 to-violet-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 md:gap-3">
              Get Started Free
              <ArrowRight size={20} className="md:w-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-md lg:max-w-full">
              <img 
                src={isDark ? "/img4-dark.png" : "/img4-light.png"}  
                alt="Fitness workout illustration" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnytimeSection;