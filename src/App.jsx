import React, { useState, useEffect } from 'react';
import { 
  User, 
  ChevronRight, 
  MessageCircle, 
  Layers, 
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Menu,
  X
} from 'lucide-react';

const TrustCoopLandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement actual form submission logic
    alert('Thank you for your message! We will get back to you soon.');
    setContactForm({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="bg-white min-h-screen flex flex-col overflow-x-hidden">
      {/* Header */}
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

      {/* Main Content with Padding for Fixed Header */}
      <main className="flex-grow pt-20 md:pt-24 text-xs">
        {/* Hero Section */}
        <section 
          id="home" 
          className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-8 items-center"
        >
          <div className="space-y-6 text-center md:text-left animate-fade-in">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              Empowering Agricultural Cooperatives for a Stronger Future
            </h1>
            <p className="text-sm text-gray-600 max-w-md mx-auto md:mx-0">
              Join over 5 million farmers in Rwanda's agricultural sector. Manage your cooperative with ease, improve productivity, and grow with TrustCoop.
            </p>
            <div className="flex justify-center md:justify-start">
              <a 
                href="/get-started" 
                className="inline-flex items-center bg-green-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm hover:bg-green-600 transition shadow-lg"
              >
                Get Started Today 
                <span className="ml-2 bg-white text-green-600 px-2 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs">
                  1 Month Free
                </span>
              </a>
            </div>
          </div>
          <div className="hidden md:block relative animate-slide-in-right">
            <div className="bg-green-100 rounded-xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-green-50 p-6 rounded-xl">
                <div className="h-48 bg-green-200 rounded-lg animate-pulse"></div>
                <div className="mt-4 space-y-2">
                  <div className="h-4 bg-green-200 rounded w-3/4"></div>
                  <div className="h-4 bg-green-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why TrustCoop Section */}
        <section className="py-16 text-center px-4">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Why Choose TrustCoop?</h2>
            <p className="text-sm text-gray-600 px-4">
              Agriculture makes up 45.9% of cooperatives in Rwanda. At TrustCoop, we're focusing on this vital sector to help farmers manage their cooperatives, track crops, and streamline operations. With our platform, agricultural cooperatives can reduce costs, increase efficiency, and unlock new opportunities for growth.
            </p>
          </div>
        </section>

        {/* Key Features Section */}
        <section 
          id="features" 
          className="py-16 px-4 bg-gray-50"
        >
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">
              Transforming Agricultural Cooperatives
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Layers className="w-8 h-8 text-green-500" />,
                  title: "Cooperative Management",
                  description: "Easily manage membership, financials, and farming records."
                },
                {
                  icon: <CheckCircle2 className="w-8 h-8 text-green-500" />,
                  title: "Simple and Scalable",
                  description: "As your cooperative grows, TrustCoop grows with you."
                },
                {
                  icon: <MessageCircle className="w-8 h-8 text-green-500" />,
                  title: "Communication Tools",
                  description: "Inbuilt chat for better communication among members."
                },
                {
                  icon: <User className="w-8 h-8 text-green-500" />,
                  title: "One Month Free",
                  description: "Try TrustCoop risk-free for one month and see how it can benefit your cooperative."
                }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 text-center"
                >
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm font-semibold mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          id="contact" 
          className="py-16 px-4"
        >
          <div className="container max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md space-y-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-4">
                  {[
                    { 
                      icon: <Mail className="w-6 h-6 text-green-500" />, 
                      text: "support@trustcoop.rw" 
                    },
                    { 
                      icon: <Phone className="w-6 h-6 text-green-500" />, 
                      text: "+250 788 123 456" 
                    },
                    { 
                      icon: <MapPin className="w-6 h-6 text-green-500" />, 
                      text: "KN 5 Road, Kigali, Rwanda" 
                    }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      {contact.icon}
                      <span className="text-sm text-gray-700">
                        {contact.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-green-50 p-4 rounded-lg">
                  <p className="text-xs text-gray-600">
                    Our support team is available Monday to Friday, 
                    8:00 AM to 5:00 PM CAT. We're committed to helping 
                    agricultural cooperatives succeed.
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  {[
                    { 
                      name: "name", 
                      label: "Full Name", 
                      type: "text", 
                      placeholder: "Enter your full name" 
                    },
                    { 
                      name: "email", 
                      label: "Email Address", 
                      type: "email", 
                      placeholder: "Enter your email address" 
                    }
                  ].map((field) => (
                    <div key={field.name}>
                      <label 
                        htmlFor={field.name} 
                        className="block text-sm text-gray-700 mb-2"
                      >
                        {field.label}
                      </label>
                      <input 
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={contactForm[field.name]}
                        onChange={handleContactFormChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                  
                  <div>
                    <label 
                      htmlFor="message" 
                      className="block text-sm text-gray-700 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactFormChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-green-500 text-white px-4 py-3 rounded-full hover:bg-green-600 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-green-50 text-center px-4">
          <div className="container max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Ready to take your agricultural cooperative to the next level?
            </h2>
            <a 
              href="/get-started" 
              className="inline-flex items-center bg-green-500 text-white px-4 md:px-8 py-2 md:py-4 rounded-full text-xs md:text-sm hover:bg-green-600 transition shadow-lg"
            >
              Get Started Now
              <span className="ml-2 bg-white text-green-600 px-2 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs">
                1 Month Free!
              </span>
            </a>
          </div>
        </section>
      </main>

      
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-xl font-bold text-green-500 mb-4">TrustCoop</h3>
              <p className="text-sm text-gray-300">
                Empowering agricultural cooperatives through innovative technology and community-driven solutions.
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                {/* Social Media Icons - Placeholder */}
                {['Facebook', 'Twitter', 'LinkedIn'].map((platform) => (
                  <a 
                    key={platform} 
                    href="#" 
                    className="text-gray-400 hover:text-green-500 transition"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-4 text-center md:text-left">
              <div>
                <h4 className="font-semibold text-green-500 mb-4">Product</h4>
                <nav className="space-y-2">
                  {[
                    { name: 'Features', href: '#features' },
                    { name: 'Pricing', href: '#pricing' },
                    { name: 'Integrations', href: '#integrations' }
                  ].map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      className="block text-sm text-gray-400 hover:text-green-500 transition"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>
              <div>
                <h4 className="font-semibold text-green-500 mb-4">Company</h4>
                <nav className="space-y-2">
                  {[
                    { name: 'About Us', href: '#about' },
                    { name: 'Contact', href: '#contact' },
                    { name: 'Support', href: '#support' }
                  ].map((link) => (
                    <a 
                      key={link.name} 
                      href={link.href} 
                      className="block text-sm text-gray-400 hover:text-green-500 transition"
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-white mb-4">Stay Updated</h4>
              <p className="text-xs text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates and cooperative insights.
              </p>
              <form className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-3 py-2 rounded-md text-sm bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button 
                  type="submit" 
                  className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-8 pt-6 text-center">
            <p className="text-xs text-gray-500">
              © 2024 TrustCoop. All rights reserved. Proudly serving agricultural cooperatives in Rwanda.
            </p>
          </div>
        </div>
      </footer>

      {/* Custom Tailwind Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from { 
            opacity: 0; 
            transform: translateX(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-slide-in-right {
          animation: slideInRight 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default TrustCoopLandingPage;