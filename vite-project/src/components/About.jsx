import React from 'react';

const About = () => {
  return (
    <>
      <section
        className='aboutSec min-h-screen bg-[var(--bl-color)] lg:flex justify-evenly gap-40 items-center lg:px-20 gap-20 pt-12 lg:py-0 px-4 '
        id='About'
      >
        <div className='about-img w-60  lg:w-90 mx-auto my-4'>
          <img
            src='../images/aboutimg3.jpeg'
            alt=''
            className='w-full md:w-120 h-70 lg:w-120 lg:h-100 rounded-lg object-cover'
          />
        </div>
        <div className='about-text max-w-110 xl:max-w-160 py-8  mx-auto'>
          <h2 className='text-[var(--gr-color)] text-3xl lg:text-4xl font-bold mb-4 lg:mb-12 text-center lg:text-left font-sans'>
            About Me
          </h2>
          <p className='text-lg lg:text-2xl  text-left '></p>
        </div>
      </section>
    </>
  );
};

export default About;
