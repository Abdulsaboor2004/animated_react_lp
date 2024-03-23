import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Projects from './components/Projects';
import HireUs from './components/HireUs';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <section className='w-full min-h-screen bg-dim_white'>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Projects />
      <Eyes />
      <HireUs />
    </section>
  );
};

export default App;
