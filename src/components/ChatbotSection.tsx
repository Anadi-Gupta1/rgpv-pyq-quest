
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send, ArrowRight, Bot } from 'lucide-react';
import gsap from 'gsap';

const ChatbotSection = () => {
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
      
      gsap.from('.ai-features', {
        x: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.ai-features',
          start: 'top 80%',
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="py-16 bg-rgpv-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 chatbot-heading">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 ai-gradient-text">
              Chat with Our AI Assistant
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Get instant answers about previous year questions, find papers by topic, or get study recommendations.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="w-full lg:w-7/12">
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
                      {msg.role === 'bot' && (
                        <div className="w-8 h-8 rounded-full bg-rgpv-red flex items-center justify-center mr-2 text-white">
                          <Bot className="w-5 h-5" />
                        </div>
                      )}
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
            </div>
            
            <div className="w-full lg:w-5/12">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-rgpv-dark">AI-Powered Features</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start ai-features">
                    <div className="bg-rgpv-red text-white rounded-full p-2 mr-3 mt-1">
                      <span className="font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Natural Language Search</h4>
                      <p className="text-gray-600">Ask in simple language and get precise results without complex filters.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start ai-features">
                    <div className="bg-rgpv-red text-white rounded-full p-2 mr-3 mt-1">
                      <span className="font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Topic Recommendations</h4>
                      <p className="text-gray-600">Get personalized suggestions based on your search patterns.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start ai-features">
                    <div className="bg-rgpv-red text-white rounded-full p-2 mr-3 mt-1">
                      <span className="font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Instant Answers</h4>
                      <p className="text-gray-600">Find exactly what you need in seconds, not minutes.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start ai-features">
                    <div className="bg-rgpv-red text-white rounded-full p-2 mr-3 mt-1">
                      <span className="font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Study Pattern Analysis</h4>
                      <p className="text-gray-600">Get insights into important topics based on previous year patterns.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
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
