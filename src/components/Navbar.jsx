import React from 'react';
import tech_insta_logo from '../assets/images/tech_insta_logo.jpg';

const Navbar = () => (
  <section className="w-full text-dark top-0 sticky bg-transparent backdrop-blur-sm z-20 px-10 py-1 rounded-full font-black flex justify-between items-center font-['NeueMontreal'] flex-wrap">
    <div className='LOGO w-[full] flex-shrink-0 '>
      <img
        className=' w-20 h-20'
        src={tech_insta_logo}
        loading='lazy'
        alt=''
      />
    </div>

    <div className='LINKS flex gap-10 text-base'>
      {['Services', 'About Us', 'Blogs', 'Our Work', 'Contact Now'].map(
        (item, index) => (
          <a
            key={index}
            className={`flex-none ${
              index === 4 && 'border px-2 border-dark/90 hover:text-white hover:bg-dark/90 cursor-pointer rounded-full'
            } text-md font-medium capitalize`}>
            {item}
          </a>
        )
      )}
    </div>
  </section>
);

export default Navbar;
