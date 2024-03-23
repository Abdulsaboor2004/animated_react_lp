import React, { useState } from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { GrLinkedin } from 'react-icons/gr';
import { FaGithub } from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import { RiMenu4Fill } from 'react-icons/ri';
import tech_insta_logo from '../assets/images/tech_insta_logo.jpg';

const Navbar = () => {
  const [navVisibility, setNavVisibility] = useState(false);

  return (
    <>
      {/* DIV for DESKTOP */}
      <nav className="w-full md:flex hidden text-dark top-0  bg-transparent backdrop-blur-sm z-20 px-10 py-1 rounded-full font-black  justify-between items-center font-['NeueMontreal'] flex-wrap">
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
                  index === 4 &&
                  'border px-2 border-dark/90 hover:text-white hover:bg-dark/90 cursor-pointer rounded-full'
                } text-md font-medium capitalize`}>
                {item}
              </a>
            )
          )}
        </div>
      </nav>

      {/* DIV FOR MOBILE */}

      {navVisibility ? (
        <nav className="w-full relative h-screen md:hidden flex flex-col top-0 bg-dark/95 backdrop-blur-sm z-20 font-['NeueMontreal'] transition-all duration-300 ease-in-out ">
          <div className='w-full h-screen absolute'>
            <div className='LOGO w-[full] flex-shrink-0 px-2 mb-6 mt-2 flex items-center '>
              <img
                className=' w-16 h-w-16'
                src={tech_insta_logo}
                loading='lazy'
                alt='tech insta logo'
              />
              <div className='fixed right-5 text-dim_white top-3 cursor-pointer'>
                <IoMdCloseCircle
                  size='6vmax'
                  onClick={() => {
                    setNavVisibility(false);
                  }}
                />
              </div>
            </div>

            <aside className='border-b-[1px] w-full border-dim_white/50 h-[1px]'></aside>

            <div className='LINKS flex flex-col p-[2.4vh] mt-[4vh]'>
              {['Services', 'About Us', 'Blogs', 'Our Work', 'Contact Now'].map(
                (item, index) => (
                  <a
                    key={index}
                    className={`font-["FoundersGrotesk"] flex-none text-[6.1vmax] text-dim_white/95 uppercase hover:text-dim_white/40 transition-all `}>
                    {item}
                  </a>
                )
              )}
            </div>

            <div className='socials w-full text-dim_white flex items-center justify-center flex-col gap-[3lvh] mt-[4lvh]'>
              <q className='text-bold italic'>
                I'm Saboor, Checkout My Socials 👇🏻
              </q>
              <div className='w-[90%] flex items-center justify-center'>
                <div className='flex flex-row space-x-10 cursor-pointer'>
                  <a
                    target='blank'
                    href='https://twitter.com/AbdulSaboor2004'>
                    <FaXTwitter
                      size='5vmax'
                      className=' hover:animate-bounce'
                    />
                  </a>
                  <a
                    target='blank'
                    href='https://www.linkedin.com/in/abdulsaboor2004/'>
                    <GrLinkedin
                      size='5vmax'
                      className='animate-pulse hover:animate-bounce'
                    />
                  </a>
                  <a
                    target='blank'
                    href='https://github.com/Abdulsaboor2004'>
                    <FaGithub
                      size='5vmax'
                      className=' hover:animate-bounce'
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="w-full md:hidden flex text-dark top-0 pt-6 bg-transparent backdrop-blur-sm z-20 p-5 rounded-full font-black justify-between items-center font-['NeueMontreal'] flex-wrap">
          <div className='LOGO w-[full] flex-shrink-0 '>
            <img
              className=' w-20 h-20'
              src={tech_insta_logo}
              loading='lazy'
              alt='tech insta logo'
            />
          </div>

          <div className='flex items-center justify-center gap-10 text-[5vmax]'>
            <RiMenu4Fill
              className='cursor-pointer hover:animate-pulse'
              onClick={() => setNavVisibility(true)}
            />
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
