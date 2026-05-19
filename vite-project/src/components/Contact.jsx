import React from 'react';

const Contact = () => {
  const [FormData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const isFormValid = FormData.name && FormData.email && FormData.message;

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className='Contact min-h-[80vh] w-full pt-15' id='Contact'>
        <h2 className='text-[var(--gr-color)] text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-center font-sans uppercase'>
          Contact Me
        </h2>
        <div className='contact-form w-full md:flex px-3  justify-center items-end gap-10'>
          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-4 p-5 rounded-xl w-full md:w-120 
  bg-transparent backdrop-blur-md border border-white/10 shadow-lg mb-4 md:mb-0'
          >
            <input
              type='text'
              placeholder='Name'
              className='p-3 rounded-lg outline-none border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-[var(--gr-color)] transition-colors duration-200'
              value={FormData.name}
              onChange={(e) =>
                setFormData({ ...FormData, name: e.target.value })
              }
            />

            <input
              type='email'
              placeholder='Email'
              className='p-3 rounded-lg outline-none border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-[var(--gr-color)] transition-colors duration-200'
              value={FormData.email}
              onChange={(e) =>
                setFormData({ ...FormData, email: e.target.value })
              }
            />

            <textarea
              name='message'
              cols='30'
              rows='4'
              placeholder='Message'
              className='p-3 rounded-lg outline-none border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-[var(--gr-color)] transition-colors duration-200 resize-none'
              value={FormData.message}
              onChange={(e) =>
                setFormData({ ...FormData, message: e.target.value })
              }
            ></textarea>

            <button
              type='submit'
              disabled={!isFormValid}
              className={`bg-[var(--gr-color)] text-white py-3 rounded-lg ${isFormValid ? 'hover:opacity-50 transition cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
            >
              Send Message
            </button>
          </form>
          <div className='pb-6 mx-12'>
            <span className='text-xl lg:text-2xl'>
              <i className='fa-solid fa-location-dot text-[var(--gr-color)] text-xl lg:text-2xl  '></i>
              Nigeria
            </span>
            <div
              className='flex gap-4 items-center 
              mt-2 lg:mt-4'
            >
              <h2 className='text-xl lg:text-2xl '>Socials:</h2>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
