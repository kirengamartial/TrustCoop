import React from 'react'
import Hero from './innerComponents/Hero';
import Why from './innerComponents/Why';
import KeyFeatures from './innerComponents/KeyFeatures';
import ContactForm from './innerComponents/ContactForm';
import CTA from './innerComponents/CTA';

const Main = () => {

  return (
    <main className="flex-grow pt-20 md:pt-24 text-xs">
   <Hero/>
   <Why/>
   <KeyFeatures/>
   <ContactForm/>
   <CTA/>   
  </main>
  )
}

export default Main
