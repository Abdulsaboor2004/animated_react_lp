import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

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
    <div className='w-full py-10 border mt-10 border-t-dark/20 border-b-dark/20 flex '>
      <div className='w-1/2 pl-[2vw]'>
        <h1 className='text-[3vmax] font-bold'>Our Best Services</h1>
        <ul className='text-2xl pl-[2vw] my-5 list-disc '>
          <a>
            <li>Game Development</li>
          </a>
          <a>
            <li>Website Development</li>
          </a>
          <a>
            <li>Graphics Design</li>
          </a>
          <a>
            <li>Digital Marketing</li>
          </a>
        </ul>
        <button className='py-3 px-5 text-dim_white my-6 outline-none bg-dark rounded-full leading-none uppercase flex gap-2 items-center justify-around '>
          I want to Know More
          <MdArrowOutward className='' />
        </button>
      </div>
      <div className='w-1/2 h-[59vh] overflow-hidden drop-shadow-2xl rounded-2xl bg-dark/20 mr-[2vw]'>
        <div className="w-full h-full bg-cover bg-center bg-[url('./assets/images/developing_closeup.webp')]"></div>
      </div>
    </div>
  </article>
);

export default About;
