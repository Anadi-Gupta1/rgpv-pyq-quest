
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-rgpv-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10 overflow-hidden">
                <img 
                  src="/lovable-uploads/9b456c4d-dd8d-4859-ba10-c002596bb6b6.png" 
                  alt="RGPV Logo" 
                  className="w-full h-full object-contain invert" 
                />
              </div>
              <div className="font-bold text-xl">
                RGPV <span className="text-rgpv-red">PYQ Quest</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Helping RGPV students access previous year question papers through an intuitive interface and AI assistance.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-rgpv-red transition-colors">Home</Link></li>
              <li><Link to="/papers" className="hover:text-rgpv-red transition-colors">Question Papers</Link></li>
              <li><Link to="/subjects" className="hover:text-rgpv-red transition-colors">Subjects</Link></li>
              <li><Link to="/about" className="hover:text-rgpv-red transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-rgpv-red transition-colors">How to Use</a></li>
              <li><a href="#" className="hover:text-rgpv-red transition-colors">Chat with AI</a></li>
              <li><a href="#" className="hover:text-rgpv-red transition-colors">Download App</a></li>
              <li><a href="#" className="hover:text-rgpv-red transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>support@rgpvpyqquest.com</li>
              <li>+91 1234567890</li>
              <li>RGPV Campus, Bhopal</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} RGPV PYQ Quest. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Made with ❤️ by <span className="text-rgpv-red">Anadi Gupta and Devansh Mishra</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
