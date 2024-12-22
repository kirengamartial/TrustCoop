import React from 'react'

const CTA = () => {
  return (
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
  )
}

export default CTA
