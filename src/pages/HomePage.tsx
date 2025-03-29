
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import PopularPapers from '@/components/landing/PopularPapers';
import ResourcesSection from '@/components/landing/ResourcesSection';
import ChatbotPreview from '@/components/landing/ChatbotPreview';
import Testimonials from '@/components/landing/Testimonials';
import CallToAction from '@/components/landing/CallToAction';
import gsap from 'gsap';

const HomePage = () => {
  useEffect(() => {
    // Initialize GSAP animations
    gsap.config({ 
      nullTargetWarn: false 
    });
    
    // Preloader animation
    const tl = gsap.timeline();
    tl.to(".preloader", {
      opacity: 0,
      duration: 0.5,
      delay: 0.5,
      onComplete: () => {
        document.querySelector(".preloader")?.classList.add("hidden");
      }
    });
  }, []);

  return (
    <Layout>
      {/* Preloader */}
      <div className="preloader fixed inset-0 bg-white z-50 flex items-center justify-center">
        <img 
          src="/lovable-uploads/9b456c4d-dd8d-4859-ba10-c002596bb6b6.png" 
          alt="RGPV Logo" 
          className="w-20 h-20 animate-pulse" 
        />
      </div>
      
      {/* Main content */}
      <div className="landing-page">
        <Hero />
        <Features />
        <PopularPapers />
        <ResourcesSection />
        <ChatbotPreview />
        <Testimonials />
        <CallToAction />
      </div>
    </Layout>
  );
};

export default HomePage;
