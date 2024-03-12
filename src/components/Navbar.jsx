import React from 'react';
import tech_insta_logo from '../assets/images/tech_insta_logo.jpg';

const Navbar = () => (
  <div className="w-full text-dark top-0 sticky bg-transparent backdrop-blur-sm z-20 px-10 py-1 rounded-full font-black flex justify-between items-center font-['NeueMontreal']">
    <div className="LOGO w-[full]  flex-shrink-0">
      <img className=" w-20 h-20" src={tech_insta_logo} alt="" />
    </div>

    <div className="LINKS flex gap-10 text-base">
      {['Services', 'About Us', 'Blogs', 'Our Work', 'Contact Now'].map(
        (item, index) => (
          <a
            key={index}
            className={` ${
              index === 4 && 'ml-32'
            } text-md font-medium capitalize`}
          >
            {item}
          </a>
        )
      )}
    </div>
  </div>
);

export default Navbar;
