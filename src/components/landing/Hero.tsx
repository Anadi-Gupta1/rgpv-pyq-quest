
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Search, ArrowRight, BookOpen } from 'lucide-react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main elements animation
      gsap.from('.hero-text > *', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
      
      // Search bar animation
      gsap.from('.search-container', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
        ease: 'back.out(1.5)'
      });
      
      // Background elements
      gsap.from('.bg-shape', {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: 'elastic.out(1, 0.5)'
      });
      
      // University image
      gsap.from('.university-image', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5
      });
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative pt-20 pb-16 overflow-hidden bg-gradient-to-b from-rgpv-cream to-white">
      {/* Background elements */}
      <div className="absolute top-20 right-[20%] w-64 h-64 bg-rgpv-lightBlue/20 rounded-full filter blur-3xl opacity-60 bg-shape"></div>
      <div className="absolute bottom-10 left-[10%] w-72 h-72 bg-rgpv-red/10 rounded-full filter blur-3xl opacity-60 bg-shape"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* Left content */}
          <div className="lg:w-1/2 hero-text pt-10 lg:pt-0">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 ai-gradient-text">
              RGPV Previous Year Question Papers
            </h1>
            
            <p className="text-lg text-gray-700 mb-6">
              Access thousands of RGPV question papers with our AI-powered search. 
              Find exactly what you need for exam preparation.
            </p>
            
            {/* Feature tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="tag">AI-Powered Search</span>
              <span className="tag">All Branches</span>
              <span className="tag">Latest Papers</span>
              <span className="tag">PDF Downloads</span>
            </div>
            
            {/* Search container */}
            <div className="search-container mb-8 relative max-w-xl">
              <div className="flex items-center">
                <Search className="absolute left-4 text-gray-500 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Search by subject, semester, branch..." 
                  className="w-full py-4 px-12 rounded-full border-0 shadow-lg focus:ring-2 focus:ring-rgpv-red/50 bg-white"
                />
                <Button className="absolute right-1 rounded-full bg-rgpv-red hover:bg-rgpv-red/90 text-white px-5 py-6">
                  <span className="hidden sm:inline mr-2">Search</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link to="/papers">
                <Button className="bg-rgpv-red hover:bg-rgpv-red/90 text-white rounded-full px-6 py-6 text-lg shadow-lg">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore Papers
                </Button>
              </Link>
              <Link to="/subjects">
                <Button className="bg-rgpv-dark hover:bg-rgpv-dark/90 text-white rounded-full px-6 py-6 text-lg">
                  Browse Subjects
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right content - University image */}
          <div className="lg:w-1/2 university-image">
            <div className="relative">
              <img 
                src="/lovable-uploads/18aed785-6b01-4e2a-be54-ad5f168df17c.png" 
                alt="RGPV University Building" 
                className="w-full h-auto rounded-2xl shadow-xl object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-rgpv-dark/90 text-white p-3 text-center rounded-b-2xl">
                <p>Rajiv Gandhi Proudyogiki Vishwavidyalaya - Main Campus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
