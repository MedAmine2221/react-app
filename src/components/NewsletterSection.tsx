  import { ArrowRight } from "lucide-react";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Newsletter = ({handleSubscribe, email, setEmail, emailSubscribed, isValidEmail}: any) => {
  return (
      <section className="py-20 animate-on-scroll">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-500 to-violet-500 rounded-3xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/50 to-violet-600/50 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Join our newsletter</h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to be aware of many things on discounts, gifts, training and much more. Just enter your email
              </p>
              
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4 p-2 bg-white rounded-full shadow-xl">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-3 bg-transparent border-none outline-none text-gray-900 placeholder-gray-500 text-lg"
                    required
                  />
                  <button
                    type="submit"
                    className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 justify-center ${
                      emailSubscribed 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gradient-to-r from-pink-500 to-violet-500 text-white hover:shadow-lg hover:scale-105'
                    }`}
                    disabled={emailSubscribed}
                  >
                    {emailSubscribed ? (
                      <>
                        <span>✓ Subscribed!</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <ArrowRight size={20} />
                      </>
                    )}
                  </button>
                </div>
                {email && !isValidEmail(email) && (
                  <p className="text-red-200 text-sm mt-2">Please enter a valid email address</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Newsletter;

  
