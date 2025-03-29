
import React, { useEffect, useRef } from 'react';
import { Search, BookOpen, Download, Calendar } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for heading
      gsap.from('.features-heading', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.features-heading',
          start: 'top 80%',
        }
      });
      
      // Animation for feature cards
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
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: <Search className="w-10 h-10 text-rgpv-red" />,
      title: 'Smart Search',
      description: 'Find the exact question papers you need with our intelligent search system.'
    },
    {
      icon: <BookOpen className="w-10 h-10 text-rgpv-red" />,
      title: 'All Subjects',
      description: 'Access papers from all branches, semesters, and subjects at RGPV.'
    },
    {
      icon: <Download className="w-10 h-10 text-rgpv-red" />,
      title: 'Easy Downloads',
      description: 'Download any question paper as PDF with a single click.'
    },
    {
      icon: <Calendar className="w-10 h-10 text-rgpv-red" />,
      title: 'Latest Papers',
      description: 'Get access to the most recent exam papers as soon as they are available.'
    }
  ];

  return (
    <div ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 features-heading">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 ai-gradient-text">
            Why Choose RGPV PYQ Quest?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our platform is designed to make exam preparation easier and more efficient for RGPV students
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="mb-6 inline-flex p-4 rounded-full bg-rgpv-cream">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
