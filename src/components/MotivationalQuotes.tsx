// components/MotivationalQuotes.tsx
import React, { useState, useEffect } from 'react';

interface Quote {
  content: string;
  author: string;
}

interface MotivationalQuotesProps {
  isDark: boolean;
}

const MotivationalQuotes: React.FC<MotivationalQuotesProps> = ({ isDark }) => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomQuote = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://api.quotable.io/random?tags=motivational');
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      
      const data = await response.json();
      setQuote(data);
    } catch (err) {
      setError('Impossible de charger la citation. Veuillez réessayer.');
      console.error('Erreur API:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <section className={`py-16 px-4 ${isDark ? 'bg-[#14092A]' : 'bg-[#f5f0ff]'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${isDark ? 'text-white' : 'text-purple-900'}`}>
          Inspirational Quotes
        </h2>
        
        <div className={`rounded-xl p-8 ${isDark ? 'bg-[#14092A]' : 'bg-[#f5f0ff]'}`}>
          {loading && (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
          )}
          
          {error && (
            <div className="text-center p-8">
              <p className="text-red-500 mb-4">{error}</p>
              <button
                onClick={fetchRandomQuote}
                className={`px-6 py-2 rounded-full font-semibold ${
                  isDark 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'bg-purple-500 hover:bg-purple-600 text-white'
                } transition-colors`}
              >
                Réessayer
              </button>
            </div>
          )}
          
          {quote && !loading && (
            <div className="animate-fadeIn">
              <blockquote className={`'text-xl md:text-2xl italic mb-6' ${isDark ? 'text-white' : 'text-purple-900'}`}>
                {quote.content}
              </blockquote>
              <p className={`text-lg ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>
                - {quote.author}
              </p>
              
              <button
                onClick={fetchRandomQuote}
                className={`mt-8 px-6 py-2 rounded-full font-semibold ${
                  isDark 
                    ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                    : 'bg-purple-500 hover:bg-purple-600 text-white'
                } transition-colors`}
              >
                New quote
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MotivationalQuotes;