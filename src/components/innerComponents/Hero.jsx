import React from 'react'

const Hero = () => {
  return (
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
  )
}

export default Hero
