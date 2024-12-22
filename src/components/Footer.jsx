import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer
