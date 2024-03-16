import React, { useEffect, useState } from 'react';
import eye from '../assets/images/eye.png';


const Eyes = () => {
  const [rotate, setrotate] = useState(0);

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setrotate(angle - 180);
    });
  });

  return (
    <div className='w-full h-[80vh] bg-dark flex flex-row rounded-t-3xl -mt-5'>
      <div
        className='w-full h-full object-contain bg-no-repeat bg-center relative'
        style={{ backgroundImage: `url(${eye})` }}>
        <div className='absolute top-1/2 left-1/2 translate-x-[40%] -translate-y-[100%] '>
          <div className='w-[9vw] h-[9vw] flex items-center justify-center bg-dim_white rounded-full'>
            <div className='eye relative w-2/3 h-2/3 bg-gradient-to-r from-purple-900 via-red-900 to-pink-900 flex items-center justify-center rounded-full'>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg) `,
                }}
                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7'>
                <div className='pupil w-4 h-4 bg-dim_white rounded-full'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
