"use client";
import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Pose from '@/components/Pose';
import BringSection from '@/components/BringSection';
import InstagramSection from '@/components/InstagramSection';
import AnytimeSection from '@/components/AnytimeSection';
import Newsletter from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import MotivationalQuotes from '@/components/MotivationalQuotes';

const Home = () => {
  // Récupérer le thème depuis le localStorage ou utiliser 'light' par défaut
  const [theme, setTheme] = useState(() => {
    // Vérifier si window est défini (côté client)
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme || 'light';
    }
    return 'light';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const [navbarBg, setNavbarBg] = useState(false);
  const observerRef = useRef(null);

  // Theme toggle functionality
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Save theme to localStorage on every change
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Apply theme on initial load
  useEffect(() => {
  // Check system preference on initial load
    if (typeof window !== 'undefined' && !localStorage.getItem('theme')) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        setTheme('dark');
      }
    }
  }, []);

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setNavbarBg(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Email validation
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && isValidEmail(email)) {
      setEmailSubscribed(true);
      setEmail('');
      setTimeout(() => setEmailSubscribed(false), 3000);
    }
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen transition-all duration-300 ${!isDark ? 'dark bg-gradient-to-br from-[#f5f0ff] via-[#f5f0ff] to-[#f5f0ff]' : 'bg-gradient-to-br from-[#14092A] via-[#14092A] to-[#14092A]'}`}>
      <Header isDark={isDark} navbarBg={navbarBg} setIsMenuOpen={setIsMenuOpen} toggleTheme={toggleTheme} isMenuOpen= {isMenuOpen} scrollToSection={scrollToSection} />

      {/* Hero Section */}

      <Hero isDark={isDark} />

      <MotivationalQuotes isDark={isDark} />
      {/* Yoga Pose Section */}

      <Pose isDark={isDark} />

      {/* Bring Happiness Section */}
      <BringSection isDark = {isDark} />



      {/* Anytime Section */}
      <AnytimeSection isDark={isDark} />

      {/* Instagram Section */}
      <InstagramSection isDark={isDark} />

      {/* Newsletter Section */}
      <Newsletter handleSubscribe={handleSubscribe} email={email} setEmail={setEmail} emailSubscribed={emailSubscribed} isValidEmail={isValidEmail} />
      
      {/* Footer */}
      <Footer />

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }
        
        .animate-on-scroll.animate-fadeInUp {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom gradient border for buttons */
        .border-gradient {
          position: relative;
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          border-radius: 50px;
          padding: 2px;
        }
        
        .border-gradient::before {
          content: '';
          position: absolute;
          inset: 2px;
          background: white;
          border-radius: 48px;
          z-index: -1;
        }
        
        .dark .border-gradient::before {
          background: #1e1b4b;
        }
      `}</style>
    </div>
  );
};

export default Home;