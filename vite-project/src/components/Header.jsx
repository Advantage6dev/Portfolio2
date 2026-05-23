import React from 'react';

const Header = () => {
  return (
    <>
      <header
        className='min-h-[calc(100vh-4rem)] pt-15
       lg:py-40 px-4 lg:flex justify-evenly gap-40 header font-sans leading-none '
        id='Home'
      >
        <div
          className='headerImg w-60 md:w-80 mx-auto text-center
         lg:hidden rounded-full overflow-hidden'
        >
          <img
            src='../images/profile-img.jpeg'
            alt='ProfileImg'
            className='w-full rounded-full'
          />
        </div>
        <div
          className='headerinfo text-white 
          bg-[radial-gradient(ellipse_55%_25%_at_15%_20%,rgba(82,183,10,0.9)_0%,rgba(82,183,10,0.4)_30%,transparent_70%)] lg:bg-[radial-gradient(ellipse_125%_25%_at_15%_23%,rgba(82,183,10,0.9)_0%,rgba(82,183,10,0.4)_30%,transparent_70%)] py-6 mx-8 lg:mx-0'
        >
          <h1 className='text-2xl lg:text-3xl font-bold'>
            Hi I am <br /> Ojekunle David-Joy
          </h1>
          <p className='typing text-2xl lg:text-3xl text-[var(--gr-color)] py-2 lg:py-4'>
            A Front-End Developer
          </p>
          <div className='headersocials flex space-x-7 mt-3 pl-3.5'>
            <a
              href='https://github.com/Daveed-dev'
              target='_blank'
              rel='noopener noreferrer'
              className='w-9 h-8 lg:w-11 lg:h-10 rounded-full border-[2px] border-dashed border-[var(--light-dark)] flex items-center justify-center   hover:border-[var(--gray)] transition-all duration-300 ease-in-out'
            >
              <i className='fab fa-github text-xl text-[var(--gray)] lg:text-2xl '></i>
            </a>
            <a
              href='https://x.com/David_JoyDD'
              target='_blank'
              rel='noopener noreferrer'
              className='w-9 h-8 lg:w-11 lg:h-10 rounded-full border-[2px] border-dashed border-[var(--light-dark)] flex items-center justify-center   hover:border-[var(--gray)] transition-all duration-300 ease-in-out'
            >
              <i className='fab fa-twitter text-xl text-[var(--gray)] lg:text-2xl'></i>
            </a>
          </div>
          <div className='header-btns flex space-x-7 py-8 lg:py-12'>
            <button className='nav-btn btn bg-[var(--gr-color)] text-white hover:bg-[var(--light-dark)] hover:text-[var(--gr-color)] '>
              <a
                href='https://wa.me/2349067890701'
                target='_blank'
                rel='noopener noreferrer'
              >
                Hire Me
              </a>
            </button>
            <button className=' dl-btn bg-transparent hover:text-[var(--gray)] '>
              <a href='/OJEKUNLE-DAVID-CV.pdf' download>
                Download CV
              </a>
            </button>
          </div>
        </div>
        <div className='headerImg w-80 hidden lg:block rounded-full overflow-hidden'>
          <img
            src='../images/profile-img.jpeg'
            alt='ProfileImg'
            className='w-full rounded-full'
          />
        </div>
      </header>
    </>
  );
};

export default Header;
