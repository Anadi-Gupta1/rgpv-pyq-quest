
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

const ChatbotSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<{role: string, content: string}[]>([
    {
      role: 'bot',
      content: 'Hello! I'm your RGPV PYQ Quest assistant. Ask me about any previous year questions, subjects, or topics.'
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
      // Animation for the section
      gsap.from('.chatbot-heading', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.chatbot-heading',
          start: 'top 75%',
        }
      });
      
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
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-16 bg-rgpv-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 chatbot-heading">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 ai-gradient-text">
              Chat with Our AI Assistant
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Get instant answers about previous year questions, find papers by topic, or get study recommendations.
            </p>
          </div>
          
          <div className="chatbot-interface bg-white rounded-2xl shadow-xl overflow-hidden">
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
                className="bg-rgpv-red hover:bg-rgpv-red/90 text-white rounded-lg button-shadow"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </div>
          
          <div className="mt-8 text-center">
            <Button className="bg-rgpv-dark hover:bg-rgpv-dark/90 text-white rounded-full px-6">
              Start Chatting Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotSection;
