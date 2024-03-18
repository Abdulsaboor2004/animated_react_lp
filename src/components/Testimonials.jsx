import React from 'react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFlip,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-flip';

const Testimonials = () => {
  return (
    <section className='w-full bg-dim_white border-t-2 border-dark/30 mt-1 flex items-center justify-center flex-wrap p-10 relative overflow-hidden'>
      <h3 className='capitalize absolute top-10 font-["NeueMontreal"] text-[3vmax] font-bold tracking-normal text-center'>
        Fill the form & begin your dream project!
      </h3>
      <form
        action='#'
        className='w-[100%] h-[10vh] font-["NeueMontreal"] font-semibold text-[2.5vmax] inline my-20'>
        <span>
          Hi, My name is{' '}
          <input
            placeholder='Joseph alen'
            className='input-field w-3/12 text-dark/90 font-semibold'
            type='text'
          />{' '}
          <br />& The thing I want from Tech Insta is{' '}
          <input
            placeholder='to develop an action game'
            className='input-field w-[48%] text-dark/90 font-semibold text-ellipsis'
            type='text'
          />
        </span>
        <br />
        <span>
          {' '}
          Here's my Email:{' '}
          <input
            placeholder='abc@gmail.com'
            className='input-field w-1/3 text-dark/90 font-semibold'
            type='email'
          />
        </span>
      </form>

      <div className='w-full block border-y-4 text-center font-["NeueMontreal"] font-semibold text-[2vmax] mt-1 mb-10'>
        {' '}
        OR{' '}
      </div>

      {/* DIV FOR MOBILE */}
      <div className='xs:visible ss:visible sm:hidden md:hidden lg:hidden xl:hidden w-[90%] h-[50vh] flex-none gap-2 flex items-center justify-center  '>
        {/* cards */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={0}
          centeredSlides={true}
          slidesPerView={2}
          loop={true}
          effect='flip'>
          <SwiperSlide>
            <div className='relative w-[250px] h-[270px] flex-none border rounded-md bg-dark  flex items-center justify-center  hover:bg-dark/90  shadow'>
              <img
                className=' w-32 '
                src='https://assets-global.website-files.com/603fea6471d9d8559d077603/606710a582de651f75b268f4_Upwork.svg'
                alt='upwork logo'
              />
              <blockquote className='absolute bottom-4 font-bold  text-[9vmax]  flex-wrap uppercase font-["NeueMontreal"]  '>
                <a
                  className='btn'
                  style={{
                    backgroundImage:
                      'linear-gradient(140deg, #F2F2F2, #F1F1F1)',
                    color: 'black',
                  }}
                  href='#'>
                  Hire Now
                </a>
              </blockquote>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='relative w-[250px] h-[270px] flex-none  border rounded-md bg-[#CDEA68] flex items-center justify-center  hover:bg-[#ceea68ac] shadow'>
              <img
                className=' w-32 '
                src='https://cdn.worldvectorlogo.com/logos/fiverr-2.svg'
                alt='fiverr logo'
              />
              <blockquote className='absolute bottom-4 font-bold text-white text-[9vmax]  flex-wrap uppercase font-["NeueMontreal"]  '>
                <a
                  className='btn'
                  style={{
                    backgroundImage:
                      'linear-gradient(180deg, #0D564D, #0D564D)',
                  }}
                  href='#'>
                  Get My Package
                </a>
              </blockquote>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='relative w-[250px] flex-none h-[270px] border rounded-md bg-dark flex items-center justify-center hover:bg-dark/90 shadow'>
              <img
                className=' w-24 '
                src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/freelancer-icon.png'
                alt='freelancer logo'
              />
              <blockquote className='absolute bottom-4 font-bold text-white text-[9vmax]  flex-wrap uppercase font-["NeueMontreal"]  '>
                <a
                  className='btn'
                  style={{
                    backgroundImage:
                      'linear-gradient(140deg, #F2F2F2, #F1F1F1)',
                    color: 'black',
                  }}
                  href='#'>
                  Hire Now
                </a>
              </blockquote>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* DIV FOR DESKTOP */}

      <div className=' sm:visible md:visible lg:visible xl:visible w-[90%] h-[50vh] flex-none gap-2 flex items-center justify-center  '>
        {/* cards */}

        <div className='relative w-[250px] h-[270px] flex-none border rounded-md bg-dark  flex items-center justify-center  hover:bg-dark/90  shadow'>
          <img
            className=' w-32 '
            src='https://assets-global.website-files.com/603fea6471d9d8559d077603/606710a582de651f75b268f4_Upwork.svg'
            alt='upwork logo'
          />
          <blockquote className='absolute bottom-4 font-bold  text-[9vmax]  flex-wrap uppercase font-["NeueMontreal"]  '>
            <a
              className='btn'
              style={{
                backgroundImage: 'linear-gradient(140deg, #F2F2F2, #F1F1F1)',
                color: 'black',
              }}
              href='#'>
              Hire Now
            </a>
          </blockquote>
        </div>

        <div className='relative w-[250px] h-[270px] flex-none  border rounded-md bg-[#CDEA68] flex items-center justify-center  hover:bg-[#ceea68ac] shadow'>
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

        <div className='relative w-[250px] flex-none h-[270px] border rounded-md bg-dark flex items-center justify-center hover:bg-dark/90 shadow'>
          <img
            className=' w-24 '
            src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/freelancer-icon.png'
            alt='freelancer logo'
          />
          <blockquote className='absolute bottom-4 font-bold text-white text-[9vmax]  flex-wrap uppercase font-["NeueMontreal"]  '>
            <a
              className='btn'
              style={{
                backgroundImage: 'linear-gradient(140deg, #F2F2F2, #F1F1F1)',
                color: 'black',
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
