import React from 'react';

const Testimonials = () => {
  return (
    <section className='w-full h-screen bg-dim_white border-t-2 border-dark/30 mt-1 flex items-center justify-center flex-wrap p-4'>
      <form
        action='#'
        className='w-full font-["NeueMontreal"] font-semibold text-[2vmax]'>
        <p>
          Hi, My name is{' '}
          <input
            placeholder='Joseph alen'
            className='input-field w-3/12 text-dark/90 font-semibold'
            type='text'
          />{' '}
          & The thing I want from Tech Insta is{' '}
          <input
            placeholder='to develop an action game'
            className='input-field w-[48%] text-dark/90 font-semibold'
            type='text'
          />
        </p>
        <p>
          {' '}
          Here's my Email{' '}
          <input
            placeholder='abc@gmail.com'
            className='input-field w-1/3 text-dark/90 font-semibold'
            type='text'
          />
        </p>
      </form>
      {/* hire us content */}
      <div className='w-full h-full gap-4 flex items-center justify-center  '>
        <div className='relative w-1/4 h-3/5 border rounded-md bg-dark  flex items-center justify-center flex-col '>
          <img
            className=' w-32 '
            src='https://assets-global.website-files.com/603fea6471d9d8559d077603/606710a582de651f75b268f4_Upwork.svg'
            alt='upwork logo'
          />
          <blockquote className='absolute bottom-4 font-bold text-white text-[9vmax]  flex-wrap uppercase font-["NeueMontreal"]  '>
            <a
              className='btn'
              style={{
                backgroundImage: 'linear-gradient(180deg, #0D564D, #0D564D)',
              }}
              href='#'>
              Hire Now
            </a>
          </blockquote>
        </div>
        <div className='relative w-1/4 h-3/5 border rounded-md bg-[#CDEA68]  flex items-center justify-center flex-col'>
          <img
            className=' w-32 '
            src='https://cdn.worldvectorlogo.com/logos/fiverr-2.svg'
            alt='fiverr logo'
          />
          <blockquote className='absolute bottom-4 font-bold text-white text-[9vmax]  flex-wrap uppercase font-["NeueMontreal"]  '>
            <a
              className='btn'
              style={{
                backgroundImage: 'linear-gradient(180deg, #0D564D, #0D564D)',
              }}
              href='#'>
              Get My Package
            </a>
          </blockquote>
        </div>
        <div className='relative w-1/4 h-3/5 border rounded-md bg-dark flex items-center justify-center flex-col'>
          <img
            className=' w-24 '
            src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/freelancer-icon.png'
            alt='freelancer logo'
          />
          <blockquote className='absolute bottom-4 font-bold text-white text-[9vmax]  flex-wrap uppercase font-["NeueMontreal"]  '>
            <a
              className='btn'
              style={{
                backgroundImage: 'linear-gradient(180deg, #0D564D, #0D564D)',
              }}
              href='#'>
              Hire Now
            </a>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
