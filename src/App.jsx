import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';

const App = () => (
  <div className="w-full min-h-screen bg-dim_white">
    <Navbar />
    <LandingPage />
    <Marquee />
    <About />
  </div>
);

export default App;
