import React from 'react'
import { 
    User,  
    MessageCircle, 
    Layers, 
    CheckCircle2,
  } from 'lucide-react';

const KeyFeatures = () => {

    const features = [
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
    ]
    
  return (
    <section 
    id="features" 
    className="py-16 px-4 bg-gray-50"
  >
    <div className="container max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">
        Transforming Agricultural Cooperatives
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
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
  )
}

export default KeyFeatures
