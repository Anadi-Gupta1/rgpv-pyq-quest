
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ChatbotPreview = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<{role: string, content: string}[]>([
    {
      role: 'bot',
      content: "Hello! I'm your RGPV PYQ Quest assistant. Ask me about any previous year questions, subjects, or topics."
    }
  ]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message to chat
    setChat(prev => [...prev, { role: 'user', content: message }]);
    
    // Simulate bot response
    setTimeout(() => {
      setChat(prev => [
        ...prev, 
        { 
          role: 'bot', 
          content: 'I found several question papers related to your query. Would you like to browse them by year or topic?' 
        }
      ]);
    }, 1000);
    
    setMessage('');
  };
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for heading
      gsap.from('.chatbot-heading', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.chatbot-heading',
          start: 'top 75%',
        }
      });
      
      // Animation for chatbot interface
      gsap.from('.chatbot-interface', {
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: '.chatbot-interface',
          start: 'top 75%',
        }
      });
      
      // Animation for capabilities
      gsap.from('.capability-item', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.capabilities-list',
          start: 'top 80%',
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);
  
  const capabilities = [
    "Find question papers by subject, semester, or year",
    "Get recommended study materials for any topic",
    "Understand question patterns and important topics",
    "Receive tips on how to approach specific questions",
    "Compare syllabi across different years"
  ];

  return (
    <div ref={sectionRef} className="py-20 bg-rgpv-cream/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left side */}
          <div className="lg:w-1/2">
            <div className="text-left chatbot-heading">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 ai-gradient-text">
                Chat with Our AI Assistant
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Get instant answers about previous year questions, find papers by topic, or get study recommendations.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Our AI can help you:</h3>
              <ul className="space-y-3 mb-8 capabilities-list">
                {capabilities.map((capability, index) => (
                  <li key={index} className="flex items-center capability-item">
                    <span className="bg-rgpv-red text-white rounded-full w-6 h-6 inline-flex items-center justify-center mr-3">
                      <span className="text-xs">✓</span>
                    </span>
                    <span>{capability}</span>
                  </li>
                ))}
              </ul>
              
              <Button className="bg-rgpv-dark hover:bg-rgpv-dark/90 text-white rounded-full px-8 py-6 text-lg shadow-lg">
                Start Chatting Now <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Right side - Chatbot interface */}
          <div className="lg:w-1/2 chatbot-interface">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-rgpv-dark text-white p-4 flex items-center">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="ml-2 font-medium">RGPV PYQ Assistant</span>
              </div>
              
              <div className="p-4 h-80 overflow-y-auto bg-gray-50">
                {chat.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] p-3 rounded-lg ${
                        msg.role === 'user' 
                          ? 'bg-rgpv-blue text-white rounded-tr-none' 
                          : 'bg-gray-200 text-gray-800 rounded-tl-none'
                      }`}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}
              </div>
              
              <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-rgpv-red"
                  placeholder="Ask about any PYQ or subject..."
                />
                <Button 
                  type="submit" 
                  className="bg-rgpv-red hover:bg-rgpv-red/90 text-white rounded-lg shadow-md"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPreview;
