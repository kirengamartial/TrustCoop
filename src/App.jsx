import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const TrustCoopLandingPage = () => {

  return (
    <div className="bg-white min-h-screen flex flex-col overflow-x-hidden">
   
      <Header/>
      <Main/>
      <Footer/>      

    </div>
  );
};

export default TrustCoopLandingPage;