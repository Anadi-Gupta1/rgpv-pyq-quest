
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ResourcesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const resources = [
    {
      title: "RGPV B.Tech Grading System & Question Papers",
      url: "https://www.rgpvnotes.in/btech/grading-system-old/qp/",
      description: "Access RGPV's official grading system and a comprehensive collection of previous year question papers."
    },
    {
      title: "B.Tech CSE Question Papers",
      url: "https://www.rgpvonline.com/btech-cse-question-papers.html#list",
      description: "Complete collection of Computer Science Engineering question papers sorted by semester."
    },
    {
      title: "RGPV First Year Resources",
      url: "https://www.rgpvonline.com/rgpv-first-year.html#list",
      description: "Essential question papers and study materials for first-year RGPV students."
    }
  ];
  
  const affiliatedColleges = [
    "UIT RGPV Bhopal",
    "SGSITS Indore",
    "MITS Gwalior",
    "SATI Vidisha",
    "JEC Jabalpur",
    "IET Davv",
    "NITTTR Bhopal",
    "LNCTS Bhopal"
  ];
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for heading
      gsap.from('.resources-heading', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.resources-heading',
          start: 'top 80%',
        }
      });
      
      // Animation for resource cards
      gsap.from('.resource-card', {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.resources-grid',
          start: 'top 75%',
        }
      });
      
      // Animation for affiliated colleges
      gsap.from('.college-item', {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.colleges-grid',
          start: 'top 80%',
        }
      });
      
      // Animation for resources image
      gsap.from('.resources-image', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.resources-image',
          start: 'top 75%',
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 resources-heading">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 ai-gradient-text">
            External RGPV Resources
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Additional educational resources to help you excel in your studies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 resources-grid mb-16">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-4 text-rgpv-dark">{resource.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{resource.description}</p>
                <div className="mt-auto">
                  <a 
                    href={resource.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full bg-rgpv-dark hover:bg-rgpv-dark/90 text-white">
                      Visit Resource <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mb-16 text-center resources-image">
          <img 
            src="/lovable-uploads/37d7163d-93e4-4afc-8c60-60ed98c4109f.png" 
            alt="RGPV Resources" 
            className="rounded-lg shadow-lg max-w-full md:max-w-2xl mx-auto"
          />
        </div>
        
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-center mb-8 ai-gradient-text">
            Affiliated Colleges
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 colleges-grid">
            {affiliatedColleges.map((college, index) => (
              <div 
                key={index} 
                className="college-item bg-rgpv-cream rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:bg-rgpv-red hover:text-white cursor-pointer"
              >
                <span className="font-medium">{college}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;
