import React from 'react';

const Marquee = () => (
  <section className='w-full py-11 bg-[#0D564D] rounded-tr-2xl rounded-tl-2xl'>
    <div className='border-dim_white/20 border-t-2 overflow-hidden border-b-2 flex whitespace-nowrap text-dim_white '>
      <h2 className='animate-marquee uppercase text-[16vw] text-dim_white/80 hover:text-dim_white leading-none font-["FoundersGrotesk"] font-semibold transition-all'>
        Tech Insta Develops, Designs & Markets.. &nbsp; Get best web design,
        website development, graphic design, and branding services. &nbsp; Tech
        Insta is not just another company.. &nbsp;
      </h2>
    </div>
  </section>
);

export default Marquee;
