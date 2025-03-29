
import React, { useEffect, useRef } from 'react';
import { Search, BookOpen, Download, Calendar, Image } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the heading
      gsap.from('.features-heading', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.features-heading',
          start: 'top 80%',
        }
      });
      
      // Staggered animation for feature cards
      gsap.from('.feature-card', {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top 75%',
        }
      });
      
      // Animation for university image
      gsap.from('.university-image', {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: '.university-image',
          start: 'top 75%',
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <Search className="w-8 h-8 text-rgpv-red" />,
      title: 'Smart Search',
      description: 'Find the exact question papers you need with our intelligent search system.'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-rgpv-red" />,
      title: 'All Subjects',
      description: 'Access papers from all branches, semesters, and subjects at RGPV.'
    },
    {
      icon: <Download className="w-8 h-8 text-rgpv-red" />,
      title: 'Easy Downloads',
      description: 'Download any question paper as PDF with a single click.'
    },
    {
      icon: <Calendar className="w-8 h-8 text-rgpv-red" />,
      title: 'Latest Papers',
      description: 'Get access to the most recent exam papers as soon as they are available.'
    }
  ];

  return (
    <div ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 features-heading">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ai-gradient-text">
            Why Choose RGPV PYQ Quest?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our platform is designed to make exam preparation easier and more efficient for RGPV students.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 features-grid mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card paper-card flex flex-col items-center text-center p-6"
            >
              <div className="mb-4 p-4 rounded-full bg-rgpv-cream">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 university-image rounded-xl overflow-hidden shadow-xl">
          <img 
            src="/lovable-uploads/031731be-e52e-4b1f-8ed6-a159d0a1a7ae.png" 
            alt="RGPV University Campus" 
            className="w-full h-auto object-cover"
          />
          <div className="bg-rgpv-dark text-white p-4 text-center">
            <p className="text-lg">Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
