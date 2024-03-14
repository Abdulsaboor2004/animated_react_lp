import React from 'react';

const Projects = () => (
  <div className='w-full py-10'>
    <div className='w-full px-10 border-b-[1px] border-b-dark '>
      <h2 className='font-["NeueMontreal"] text-[4vmax] font-bold tracking-tight'>
        Our Work
      </h2>
    </div>
    <div className='cards w-full flex flex-wrap justify-around items-center gap-y-20 p-1 bg-emerald-600 mt-10'>
      <div className='cardcontainer rounded-xl w-[45vmax] h-[60vmin] bg-emerald-950 overflow-hidden'></div>
      <div className='cardcontainer rounded-xl w-[45vmax] h-[60vmin] bg-emerald-950 overflow-hidden'></div>
      <div className='cardcontainer rounded-xl w-[45vmax] h-[60vmin] bg-emerald-950 overflow-hidden'></div>
      <div className='cardcontainer rounded-xl w-[45vmax] h-[60vmin] bg-emerald-950 overflow-hidden'></div>
    </div>
  </div>
);

export default Projects;
