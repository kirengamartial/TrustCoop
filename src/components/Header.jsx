import React, { useEffect, useState } from 'react'
import { 
  ChevronRight, 
  Menu,
  X 
} from 'lucide-react';

const Header = () => {
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
     const [isScrolled, setIsScrolled] = useState(false);

    // Scroll effect for header
      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

  return (
    <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center text-xs max-w-6xl">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <span className="text-xl font-bold text-green-700">TrustCoop</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center text-xs">
            <a href="#home" className="text-gray-800 hover:text-green-600 transition">Home</a>
            <a href="#features" className="text-gray-800 hover:text-green-600 transition">Features</a>
            <a href="#contact" className="text-gray-800 hover:text-green-600 transition">Contact</a>
            <a 
              href="/get-started" 
              className="bg-green-500 text-white px-3 py-1.5 rounded-full hover:bg-green-600 transition flex items-center text-xs"
            >
              Get Started
              <ChevronRight className="ml-1 w-4 h-4" />
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute w-full bg-white shadow-lg">
            <nav className="flex flex-col p-4 space-y-3 text-xs">
              <a href="#home" className="text-gray-800 hover:bg-green-50 p-2 rounded">Home</a>
              <a href="#features" className="text-gray-800 hover:bg-green-50 p-2 rounded">Features</a>
              <a href="#contact" className="text-gray-800 hover:bg-green-50 p-2 rounded">Contact</a>
              <a 
                href="/get-started" 
                className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition text-center"
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </header>
  )
}

export default Header
