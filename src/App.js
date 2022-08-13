import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/about';
import Support from './components/support';
import AllInOne from './components/Allinone';
import Pricing from './components/Pricing';
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Support />
    <AllInOne />
    <Pricing />
    <Footer/>
    </>
  );
}

export default App;