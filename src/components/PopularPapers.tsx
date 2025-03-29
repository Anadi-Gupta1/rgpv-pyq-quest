
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

const PopularPapers = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const papers = [
    {
      title: 'Software Engineering',
      semester: '5th Semester',
      year: '2022',
      branch: 'Computer Science Engineering',
      downloadCount: '3.2k'
    },
    {
      title: 'Data Structures',
      semester: '3rd Semester',
      year: '2022',
      branch: 'Information Technology',
      downloadCount: '2.8k'
    },
    {
      title: 'Database Management Systems',
      semester: '4th Semester',
      year: '2022',
      branch: 'Computer Science Engineering',
      downloadCount: '2.5k'
    },
    {
      title: 'Digital Electronics',
      semester: '3rd Semester',
      year: '2022',
      branch: 'Electronics & Communication',
      downloadCount: '2.1k'
    },
    {
      title: 'Computer Networks',
      semester: '6th Semester',
      year: '2022',
      branch: 'Computer Science Engineering',
      downloadCount: '1.9k'
    },
    {
      title: 'Operating Systems',
      semester: '5th Semester',
      year: '2022',
      branch: 'Information Technology',
      downloadCount: '1.7k'
    }
  ];
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the heading
      gsap.from('.papers-heading', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.papers-heading',
          start: 'top 75%',
        }
      });
      
      // Staggered animation for paper cards
      gsap.from('.paper-item', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.papers-grid',
          start: 'top 75%',
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 papers-heading">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ai-gradient-text">
            Most Popular Question Papers
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore the most downloaded papers from various branches and semesters.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 papers-grid">
          {papers.map((paper, index) => (
            <div key={index} className="paper-item paper-card flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block bg-rgpv-red text-white text-xs font-semibold px-2.5 py-1 rounded mb-2">
                    {paper.year}
                  </span>
                  <h3 className="text-xl font-semibold text-rgpv-dark">{paper.title}</h3>
                </div>
                <span className="text-xs bg-gray-100 text-gray-600 rounded-full px-2 py-1">
                  {paper.downloadCount} downloads
                </span>
              </div>
              
              <div className="text-gray-600 text-sm mb-4">
                <p>{paper.semester} • {paper.branch}</p>
              </div>
              
              <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-100">
                <Button variant="outline" size="sm" className="rounded-lg border-rgpv-red text-rgpv-red hover:bg-rgpv-red hover:text-white">
                  View Paper
                </Button>
                <Button variant="ghost" size="sm" className="rounded-lg text-rgpv-dark">
                  <Download className="w-4 h-4 mr-1" /> Download
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="bg-rgpv-dark hover:bg-rgpv-dark/90 text-white rounded-full px-6">
            View All Papers <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopularPapers;
