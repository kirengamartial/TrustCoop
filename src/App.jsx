import React, { useState } from 'react';
import { 
  Home, 
  User, 
  ChevronRight, 
  MessageCircle, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';

const TrustCoopLandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            {/* <img 
              src="/api/placeholder/100/100" 
              alt="TrustCoop Logo" 
              className="w-12 h-12 rounded-full"
            /> */}
            <span className="text-2xl font-bold text-green-700">TrustCoop</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <a href="#home" className="text-gray-800 hover:text-green-600 transition">Home</a>
            <a href="#features" className="text-gray-800 hover:text-green-600 transition">Features</a>
            <a href="#contact" className="text-gray-800 hover:text-green-600 transition">Contact</a>
            <a 
              href="/get-started" 
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition flex items-center"
            >
              Get Started
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute w-full bg-white shadow-lg">
            <nav className="flex flex-col p-4 space-y-3">
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

      {/* Hero Section */}
      <main className="flex-grow container mx-auto px-4 pt-16 lg:pt-24">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Empowering Agricultural Cooperatives for a Stronger Future
            </h1>
            <p className="text-xl text-gray-600">
              Join over 5 million farmers in Rwanda's agricultural sector. Manage your cooperative with ease, improve productivity, and grow with TrustCoop.
            </p>
            <a 
              href="/get-started" 
              className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-full text-lg hover:bg-green-600 transition shadow-lg"
            >
              Get Started Today 
              <span className="ml-2 bg-white text-green-600 px-2 py-1 rounded-full text-sm">
                1 Month Free
              </span>
            </a>
          </div>
          <div className="hidden md:block">
            {/* <img 
              src="/api/placeholder/600/400" 
              alt="Farmers working together" 
              className="rounded-xl shadow-2xl"
            /> */}
          </div>
        </section>

        {/* Why TrustCoop Section */}
        <section className="py-16 text-center" id="why-trustcoop">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose TrustCoop?</h2>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Agriculture makes up 45.9% of cooperatives in Rwanda. At TrustCoop, we're focusing on this vital sector to help farmers manage their cooperatives, track crops, and streamline operations. With our platform, agricultural cooperatives can reduce costs, increase efficiency, and unlock new opportunities for growth.
          </p>
        </section>

        {/* Key Features Section */}
        <section className="py-16" id="features">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Transforming Agricultural Cooperatives
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Layers className="w-12 h-12 text-green-500" />,
                title: "Cooperative Management",
                description: "Easily manage membership, financials, and farming records."
              },
              {
                icon: <CheckCircle2 className="w-12 h-12 text-green-500" />,
                title: "Simple and Scalable",
                description: "As your cooperative grows, TrustCoop grows with you."
              },
              {
                icon: <MessageCircle className="w-12 h-12 text-green-500" />,
                title: "Communication Tools",
                description: "Inbuilt chat for better communication among members."
              },
              {
                icon: <User className="w-12 h-12 text-green-500" />,
                title: "One Month Free",
                description: "Try TrustCoop risk-free for one month and see how it can benefit your cooperative."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center"
              >
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 bg-green-50 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Ready to take your agricultural cooperative to the next level?
          </h2>
          <a 
            href="/get-started" 
            className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-full text-xl hover:bg-green-600 transition shadow-lg"
          >
            Get Started Now
            <span className="ml-2 bg-white text-green-600 px-3 py-1 rounded-full text-base">
              1 Month Free!
            </span>
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="max-w-2xl mx-auto mb-6">
            TrustCoop is focused on empowering agricultural cooperatives today, with plans to expand our services to more sectors in the future. Join us in shaping the future of farming.
          </p>
          <nav className="flex justify-center space-x-6 mb-6">
            <a href="#home" className="hover:text-green-400 transition">Home</a>
            <a href="#features" className="hover:text-green-400 transition">Features</a>
            <a href="#contact" className="hover:text-green-400 transition">Contact</a>
            <a href="#support" className="hover:text-green-400 transition">Support</a>
          </nav>
          <p className="text-sm text-gray-400">
            © 2024 TrustCoop. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TrustCoopLandingPage;