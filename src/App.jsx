import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';

const App = () => (
  <section className='w-full min-h-screen bg-dim_white'>
    <Navbar />
    <LandingPage />
    <Marquee />
    <About />
    <Eyes />
    <Projects />
    <Testimonials />
  </section>
);

export default App;
