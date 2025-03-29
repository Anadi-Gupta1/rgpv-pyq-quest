
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, BookOpen, Search, Download } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // GSAP animation for navbar
    gsap.from('.nav-animation', {
      y: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 nav-animation">
            <div className="relative w-10 h-10 overflow-hidden">
              <img 
                src="/lovable-uploads/9b456c4d-dd8d-4859-ba10-c002596bb6b6.png" 
                alt="RGPV Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
            <div className="font-bold text-xl sm:text-2xl text-rgpv-dark">
              RGPV <span className="text-rgpv-red">PYQ Quest</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="nav-animation">
              <Link to="/" className="nav-item">Home</Link>
            </div>
            <div className="nav-animation">
              <Link to="/papers" className="nav-item">Papers</Link>
            </div>
            <div className="nav-animation">
              <Link to="/subjects" className="nav-item">Subjects</Link>
            </div>
            <div className="nav-animation">
              <Link to="/about" className="nav-item">About</Link>
            </div>
            <div className="nav-animation">
              <Button className="bg-rgpv-red hover:bg-rgpv-red/90 text-white rounded-full px-6 button-shadow">
                <BookOpen className="w-4 h-4 mr-2" />
                Chat with AI
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden nav-animation">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-rgpv-dark" />
              ) : (
                <Menu className="h-6 w-6 text-rgpv-dark" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col space-y-3">
            <Link 
              to="/" 
              className="nav-item py-3 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/papers" 
              className="nav-item py-3 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Papers
            </Link>
            <Link 
              to="/subjects" 
              className="nav-item py-3 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              Subjects
            </Link>
            <Link 
              to="/about" 
              className="nav-item py-3 border-b"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Button 
              className="bg-rgpv-red hover:bg-rgpv-red/90 text-white rounded-full mt-3 w-full button-shadow"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Chat with AI
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
