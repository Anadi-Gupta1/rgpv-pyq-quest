
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Search, ArrowRight, BookOpen } from 'lucide-react';
import gsap from 'gsap';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered animation for hero elements
      gsap.from('.hero-element', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
      
      // Animation for the background elements
      gsap.from('.bg-shape', {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)'
      });
      
      // Animation for the search bar
      gsap.from(searchRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
        ease: 'back.out(1.5)'
      });
      
      // Animation for the university image
      gsap.from('.university-building', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power2.out'
      });
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative bg-gradient-to-b from-rgpv-cream via-white to-white pt-24 pb-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-[20%] w-64 h-64 bg-rgpv-lightBlue/20 rounded-full filter blur-3xl opacity-60 bg-shape"></div>
      <div className="absolute bottom-10 left-[10%] w-72 h-72 bg-rgpv-red/10 rounded-full filter blur-3xl opacity-60 bg-shape"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 hero-element">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ai-gradient-text">
              RGPV Previous Year Question Papers
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Access thousands of RGPV question papers with our AI-powered search. Study smarter, score better.
            </p>
          </div>
          
          {/* Search bar */}
          <div 
            ref={searchRef}
            className="relative max-w-2xl mx-auto mb-8 search-bar-shadow rounded-full glass-effect"
          >
            <div className="flex items-center">
              <Search className="absolute left-4 text-gray-500 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search by subject, semester, topic..." 
                className="w-full py-4 px-12 rounded-full border-0 focus:ring-0 focus:outline-none bg-transparent text-gray-800"
              />
              <Button className="absolute right-1 rounded-full bg-rgpv-red hover:bg-rgpv-red/90 text-white px-5 py-2 h-auto button-shadow">
                <span className="hidden sm:inline">Search</span>
                <ArrowRight className="w-4 h-4 ml-0 sm:ml-2" />
              </Button>
            </div>
          </div>
          
          {/* Feature tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 hero-element">
            <span className="tag">
              <span className="bg-rgpv-dark text-white rounded-full w-5 h-5 inline-flex items-center justify-center mr-1">
                <span className="text-xs">✓</span>
              </span>
              AI-Powered Search
            </span>
            <span className="tag">
              <span className="bg-rgpv-dark text-white rounded-full w-5 h-5 inline-flex items-center justify-center mr-1">
                <span className="text-xs">✓</span>
              </span>
              All Branches
            </span>
            <span className="tag">
              <span className="bg-rgpv-dark text-white rounded-full w-5 h-5 inline-flex items-center justify-center mr-1">
                <span className="text-xs">✓</span>
              </span>
              Latest Papers
            </span>
            <span className="tag">
              <span className="bg-rgpv-dark text-white rounded-full w-5 h-5 inline-flex items-center justify-center mr-1">
                <span className="text-xs">✓</span>
              </span>
              PDF Downloads
            </span>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 hero-element">
            <Button className="bg-rgpv-red hover:bg-rgpv-red/90 text-white rounded-full px-6 py-6 text-lg button-shadow">
              <BookOpen className="w-5 h-5 mr-2" />
              Explore Papers
            </Button>
            <Button className="bg-rgpv-dark hover:bg-rgpv-dark/90 text-white rounded-full px-6 py-6 text-lg">
              Chat with AI
            </Button>
          </div>
        </div>
        
        {/* University Building Image */}
        <div className="mt-16 mx-auto max-w-4xl university-building rounded-xl overflow-hidden shadow-xl">
          <img 
            src="/lovable-uploads/18aed785-6b01-4e2a-be54-ad5f168df17c.png" 
            alt="RGPV University Building" 
            className="w-full h-auto object-cover"
          />
          <div className="bg-rgpv-dark text-white p-3 text-center">
            <p>Rajiv Gandhi Proudyogiki Vishwavidyalaya - Main Campus</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
