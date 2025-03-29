
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const TestimonialSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      text: "RGPV PYQ Quest has been a game-changer for my exam preparation. The AI assistant helped me find exactly the questions I needed to practice.",
      name: "Priya Sharma",
      role: "CSE Student, 3rd Year"
    },
    {
      text: "I aced my exams thanks to the extensive collection of previous year papers. The organized categorization by subject and semester made studying extremely efficient.",
      name: "Rahul Verma",
      role: "IT Student, 4th Year"
    },
    {
      text: "The ability to download PDFs and access them offline was incredibly helpful during my study sessions. Highly recommend this platform to all RGPV students!",
      name: "Ananya Patel",
      role: "ECE Student, 2nd Year"
    }
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const autoplayInterval = setInterval(nextTestimonial, 5000);
    
    return () => clearInterval(autoplayInterval);
  }, []);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the heading
      gsap.from('.testimonial-heading', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.testimonial-heading',
          start: 'top 75%',
        }
      });
      
      // Animation for testimonial
      gsap.from('.testimonial-card', {
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.testimonial-card',
          start: 'top 75%',
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  // Animation for testimonial change
  useEffect(() => {
    const testimonialElement = document.querySelector('.testimonial-content');
    if (testimonialElement) {
      gsap.fromTo(
        testimonialElement,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }
  }, [activeIndex]);

  return (
    <div ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 testimonial-heading">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 ai-gradient-text">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Thousands of RGPV students use our platform to improve their exam preparation.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="testimonial-card bg-white rounded-2xl shadow-xl p-10 relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-rgpv-red opacity-10 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-rgpv-dark opacity-10 rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <svg className="w-12 h-12 text-rgpv-red opacity-20 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H7c0-1.7 1.3-3 3-3V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z"></path>
              </svg>
              
              <div className="testimonial-content">
                <p className="text-xl text-gray-700 italic mb-6">
                  "{testimonials[activeIndex].text}"
                </p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-rgpv-dark">{testimonials[activeIndex].name}</p>
                    <p className="text-sm text-gray-600">{testimonials[activeIndex].role}</p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button 
                      onClick={prevTestimonial}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    
                    <button 
                      onClick={nextTestimonial}
                      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 mx-1 rounded-full ${
                  index === activeIndex ? 'bg-rgpv-red' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
