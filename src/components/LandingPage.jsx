import React from 'react';
import Tech_Insta_design from '../assets/images/Tech_Insta_design.webp';
import { MdArrowOutward } from 'react-icons/md';
import { motion } from 'framer-motion';

const LandingPage = () => (
  <main className='w-full text-dark h-screen -mb-44 bg-dim_white '>
    <div className='TEXT-STRUCTURE mt-12 px-14'>
      {['We Develop', 'Next-Level', 'Stuff for You'].map((item, index) => {
        return (
          // i don't know why text-size can't be changed via @layer directive
          <div className='masker flex items-center'>
            {index === 1 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '6.5vmax' }}
                transition={{ delay: 0.7, ease: [9, 8, 7, 6] }}
                style={{ backgroundImage: `url(${Tech_Insta_design})` }}
                className='mr-[1vw] w-[6.5vmax] rounded-md h-[5.2vmax] top-[2.1vw] relative 
             bg-center bg-no-repeat bg-cover'></motion.div>
            )}
            <h1 className='pt-[2vw] -mb-[1vw] uppercase tracking-tight text-[8vmax] leading-[.60]'>
              {item}
            </h1>
          </div>
        );
      })}
    </div>
    <div className='font-["NeueMontreal"] border-t-[1px] border-dark/20 mt-64 flex md:flex-row flex-col justify-between items-center py-5 px-12 gap-2'>
      {[
        'Unlimited revisions until you are satisfied',
        'Watch your ROI fly ground to sky-high',
      ].map((item) => {
        return <p className='text-[2.4lvh] leading-none tracking-tighter md:tracking-tight'>{item}</p>;
      })}
      <div className='flex items-center gap-3 md:mt-0 mt-10'>
        <div className='flex-shrink-0 transition-all cursor-pointer hover:bg-dark hover:text-dim_white py-2 px-5 border border-dark/20 rounded-full md:ml-40 text-xl leading-none tracking-tight flex flex-row justify-center items-center gap-2'>
          Start My Project Today! <MdArrowOutward className='w-7 h-7 flex items-center justify-center hover:border-2 border-dim_white rounded-full '/>
        </div>
       
          
       
      </div>
    </div>
  </main>
);

export default LandingPage;
