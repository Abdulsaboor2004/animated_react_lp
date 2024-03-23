import React from 'react';
import { IoGameController } from "react-icons/io5";
import { MdArrowOutward } from 'react-icons/md';
import { HiGlobeAlt } from "react-icons/hi";
import { FaPenNib } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";

const About = () => (
  <article className='w-full font-["NeueMontreal"] font-medium text-dark bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl -mt-5'>
    <h2 className='w-3/4 text-[3vmax] py-16 pl-[2vw]'>
      Tech Insta is a full service agency who create{' '}
      <a
        href='#'
        className='underline'>
        Cool Games
      </a>
      ,{' '}
      <a
        href='#'
        className='underline'>
        Responsive Websites
      </a>{' '}
      &{' '}
      <a
        href='#'
        className='underline'>
        pleasing designs
      </a>{' '}
      just for your success.
    </h2>
    <div className='w-full py-10 border mt-10 border-t-dark/20 border-b-dark/20 flex'>
      <div className='w-[100vw] md:w-1/2 pl-[2vw] flex flex-col '>
        <h1 className='text-center md:text-[3.7vmax] text-[4.9vmax]  font-bold'>Our Best Services</h1>
        <ul className='w-full md:text-[2.3vmax] text-[3.3vmax]  my-5 flex flex-col mt-14'>
          <a className='hover:animate-pulse flex' >
            <li className='flex items-center gap-5'><IoGameController className='border border-dark rounded-full p-1 '/> Game Development </li>
          </a>
          <a className='hover:animate-pulse flex' >
            <li className='flex items-center gap-5'><HiGlobeAlt className='border border-dark rounded-full p-1 '/> Website Development </li>
          </a>
          <a className='hover:animate-pulse flex' >
            <li className='flex items-center gap-5'><FaPenNib className='border border-dark rounded-full p-1 '/> Graphics Design </li>
          </a>
          <a className='hover:animate-pulse flex' >
            <li className='flex items-center gap-5'><HiSpeakerphone className='border border-dark rounded-full p-1 '/> Digital Marketing </li>
          </a>
        </ul>
        <button className='text-center w-1/2 py-3 px-4 text-dim_white my-5 outline-none bg-dark rounded-full leading-none uppercase flex md:gap-2 items-center justify-around '>
          Start My Project
          <MdArrowOutward  />
        </button>
      </div>
      <div className='hidden md:block w-1/2 h-[59vh] overflow-hidden drop-shadow-2xl rounded-2xl bg-dark/20 mr-[2vw]'>
        <div className="w-full h-full bg-cover bg-center bg-[url('./assets/images/developing_closeup.webp')]"></div>
      </div>
    </div>
  </article>
);

export default About;
