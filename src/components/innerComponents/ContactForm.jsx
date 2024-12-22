import React, { useState } from 'react'
import { 
  Mail,
  Phone,
  MapPin
} from 'lucide-react';


const ContactForm = () => {

    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        message: ''
      });
    
    
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

      const contactInformation = [
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
      ]

      const formFields = [
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
      ]

  return (
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
            {contactInformation.map((contact, index) => (
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
            {formFields.map((field) => (
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
  )
}

export default ContactForm
