import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';

const App = () => (
  <div className="w-full min-h-screen bg-dim_white">
    <Navbar />
    <LandingPage />
    <Marquee />
    <About />
    <Eyes />
  </div>
);

export default App;
