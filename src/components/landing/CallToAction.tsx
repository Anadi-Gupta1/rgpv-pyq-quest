
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Search, BookOpen } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for CTA content
      gsap.from('.cta-content', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 75%',
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-20 bg-gradient-to-r from-rgpv-dark to-rgpv-dark/90 text-white cta-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center cta-content">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Ace Your RGPV Exams?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
            Join thousands of students who are using RGPV PYQ Quest to prepare smarter and score better in their exams.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <Button className="bg-rgpv-red hover:bg-rgpv-red/90 text-white rounded-full px-8 py-6 text-lg shadow-lg">
              <Search className="w-5 h-5 mr-2" />
              Find Question Papers
            </Button>
            <Button className="bg-white text-rgpv-dark hover:bg-gray-100 rounded-full px-8 py-6 text-lg shadow-lg">
              <BookOpen className="w-5 h-5 mr-2" />
              Chat with AI
            </Button>
          </div>
          
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/fddb17e5-d847-4463-aea8-4d324f08fb41.png" 
              alt="RGPV Logo" 
              className="h-16 invert opacity-70"
            />
          </div>
          
          <p className="text-gray-400">
            Made with ❤️ by Anadi Gupta and Devansh Mishra
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
