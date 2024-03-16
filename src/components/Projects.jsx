import card_1 from '../assets/images/card_1.webp';
import card_2 from '../assets/images/card_2.webp';
import card_3 from '../assets/images/card_3.webp';
import card_4 from '../assets/images/card_4.webp';

const Projects = () => (
  <section className='w-full py-10'>
    <div className='w-full px-10 border-b-[1px] mb-14 border-b-dark/60 '>
      <h2 className='font-["NeueMontreal"] text-[4vmax] font-bold tracking-normal'>
        Our Best Creations:
      </h2>
    </div>

    <div className='cards w-full flex flex-wrap justify-around items-center gap-y-20 p-7 mt-10 '>
      <div
        style={{ backgroundImage: `url(${card_1})` }}
        className='cardcontainer rounded-2xl drop-shadow-xl w-[45vmax] h-[60vmin] bg-no-repeat bg-center bg-cover border relative hover:scale-95 hover:shadow-xl transition-all hover:text-xl'>
        <div class='before-text  uppercase mb-2 absolute -top-10 left-2 flex items-center justify-center '>
          <span class='w-5 h-5 flex-shrink-0 rounded-full bg-dark mr-8'></span>
          <span className=''>Desktop App</span>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${card_2})` }}
        className='cardcontainer rounded-2xl drop-shadow-xl w-[45vmax] h-[60vmin] bg-no-repeat bg-center bg-cover border relative hover:scale-95 hover:shadow-xl transition-all hover:text-xl'>
        <div class='before-text uppercase mb-2 absolute -top-10 left-2 flex items-center justify-center'>
          <span class='w-5 h-5 flex-shrink-0 rounded-full bg-dark mr-8'></span>
          <span>Crypto Trading App</span>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${card_3})` }}
        className='cardcontainer rounded-2xl drop-shadow-xl w-[45vmax] h-[60vmin] bg-no-repeat bg-center bg-cover border relative hover:scale-95 hover:shadow-xl transition-all hover:text-xl '>
        <div class='before-text uppercase mb-2 absolute -top-10 left-2 flex items-center justify-center'>
          <span class='w-5 h-5 flex-shrink-0 rounded-full bg-dark mr-8'></span>
          <span>Car Dashboard OS</span>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${card_4})` }}
        className='cardcontainer rounded-2xl drop-shadow-xl w-[45vmax] h-[60vmin] bg-no-repeat bg-center bg-cover border relative hover:scale-95 hover:shadow-xl transition-all hover:text-xl'>
        <div class='before-text uppercase mb-2 absolute -top-10 left-2 flex items-center justify-center'>
          <span class='w-5 h-5 flex-shrink-0 rounded-full bg-dark mr-8'></span>
          <span>Business Dashboard</span>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
