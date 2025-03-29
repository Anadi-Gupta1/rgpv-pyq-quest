
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      name: "Ankit Sharma",
      role: "CSE Student, 6th Semester",
      image: "/lovable-uploads/06c7ccde-503b-4d6e-832f-046dc3f1740f.png",
      text: "RGPV PYQ Quest has been a game-changer for my exam preparation. I found all the previous year papers I needed in just a few clicks!"
    },
    {
      name: "Priya Patel",
      role: "IT Student, 4th Semester",
      image: "/lovable-uploads/fd9176da-5e45-4dd1-baab-0573b60e868a.png",
      text: "The AI chat assistant helped me understand question patterns and important topics. I've improved my scores significantly this semester."
    },
    {
      name: "Rohit Verma",
      role: "ECE Student, 8th Semester",
      image: "/lovable-uploads/7b7170aa-1a3f-41a4-b7a2-3f7110baeed0.png",
      text: "As a final year student, I wish I had this platform earlier! The search functionality is so intuitive and saves a lot of time."
    }
  ];
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for heading
      gsap.from('.testimonials-heading', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.testimonials-heading',
          start: 'top 75%',
        }
      });
      
      // Animation for testimonial cards
      gsap.from('.testimonial-card', {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.testimonials-grid',
          start: 'top 75%',
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 testimonials-heading">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 ai-gradient-text">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it - hear from students who use RGPV PYQ Quest
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-rgpv-dark">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-rgpv-dark rounded-xl shadow-lg p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-2">Join 10,000+ RGPV students</h3>
              <p>Who are already using our platform to ace their exams</p>
            </div>
            <div className="mt-6 md:mt-0 flex space-x-4">
              <img 
                src="/lovable-uploads/b8e3fbc9-c06a-4edf-b586-000e2256830b.png" 
                alt="Satisfaction Rate" 
                className="h-16 object-contain"
              />
              <img 
                src="/lovable-uploads/031731be-e52e-4b1f-8ed6-a159d0a1a7ae.png" 
                alt="Rating" 
                className="h-16 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
