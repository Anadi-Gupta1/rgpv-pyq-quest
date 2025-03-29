
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { BookOpen, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

const SubjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const subjects = [
    { 
      name: 'Computer Science', 
      count: 128,
      color: 'bg-blue-100 text-blue-800 border-blue-200'
    },
    { 
      name: 'Information Technology', 
      count: 112,
      color: 'bg-green-100 text-green-800 border-green-200'
    },
    { 
      name: 'Electronics & Communication', 
      count: 98,
      color: 'bg-purple-100 text-purple-800 border-purple-200'
    },
    { 
      name: 'Electrical Engineering', 
      count: 87,
      color: 'bg-yellow-100 text-yellow-800 border-yellow-200'
    },
    { 
      name: 'Mechanical Engineering', 
      count: 92,
      color: 'bg-red-100 text-red-800 border-red-200'
    },
    { 
      name: 'Civil Engineering', 
      count: 84,
      color: 'bg-orange-100 text-orange-800 border-orange-200'
    },
    { 
      name: 'Mathematics', 
      count: 56,
      color: 'bg-teal-100 text-teal-800 border-teal-200'
    },
    { 
      name: 'Physics', 
      count: 42,
      color: 'bg-indigo-100 text-indigo-800 border-indigo-200'
    }
  ];
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the heading
      gsap.from('.subjects-heading', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.subjects-heading',
          start: 'top 75%',
        }
      });
      
      // Staggered animation for subject items
      gsap.from('.subject-item', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.subjects-grid',
          start: 'top 75%',
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-16 bg-rgpv-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 subjects-heading">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ai-gradient-text">
            Browse by Subject
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore question papers organized by subject to find exactly what you need.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 subjects-grid">
          {subjects.map((subject, index) => (
            <div 
              key={index} 
              className={`subject-item border rounded-xl p-4 flex justify-between items-center card-hover ${subject.color}`}
            >
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-3" />
                <span className="font-medium">{subject.name}</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm mr-2">{subject.count}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-rgpv-dark hover:bg-rgpv-dark/90 text-white rounded-full px-6">
            View All Subjects <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubjectsSection;
