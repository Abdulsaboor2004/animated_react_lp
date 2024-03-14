import React from 'react';
import Tech_Insta_design from '../assets/images/Tech_Insta_design.png';
import { MdArrowOutward } from 'react-icons/md';

const LandingPage = () => (
  <div className='w-full text-dark h-screen -mb-44 bg-dim_white'>
    <div className='TEXT-STRUCTURE mt-14 px-14'>
      {['We Develop', 'Next-Level', 'Stuff for You'].map((item, index) => {
        return (
          // i don't know why text-size can't be changed via @layer directive
          <div className='masker flex items-center'>
            {index === 1 && (
              <div
              style={{backgroundImage: `url(${Tech_Insta_design})`}}
                className='mr-[1vw] w-[6.5vmax] rounded-md h-[5.2vmax] top-[2.1vw] relative 
             bg-center bg-no-repeat bg-cover'></div>
            )}
            <h1 className='pt-[2vw] -mb-[1vw] uppercase tracking-tight text-[10vmax] leading-[.60]'>
              {item}
            </h1>
          </div>
        );
      })}
    </div>
    <div className='font-["NeueMontreal"] border-t-[1px] border-dark/20 mt-64 flex justify-between items-center py-5 px-12'>
      {[
        'Unlimited revisions until you are satisfied',
        'Watch your ROI fly ground to sky-high',
      ].map((item) => {
        return <p className='text-lg leading-none tracking-tight'>{item}</p>;
      })}
      <div className='flex items-center gap-3'>
        <div className='py-2 px-5 border border-dark/20 rounded-full ml-40 text-xl leading-none tracking-tight '>
          Start My Project Today!
        </div>
        <div className='w-7 h-7 flex items-center justify-center border border-dark/20 rounded-full'>
          <MdArrowOutward />
        </div>
      </div>
    </div>
  </div>
);

export default LandingPage;
