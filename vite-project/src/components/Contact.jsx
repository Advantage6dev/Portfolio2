import React, { useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const isFormValid = formData.name && formData.email && formData.message;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch(
        'https://davidportfolio-xw7m.onrender.com/send',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      setSuccess(data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {}
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
            {error && (
              <p className='text-red-500 text-sm text-center'>{error}</p>
            )}
            {success && (
              <p className='text-green-500 text-sm text-center'>{success}</p>
            )}
            <input
              type='text'
              placeholder='Name'
              className='p-3 rounded-lg outline-none border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-[var(--gr-color)] transition-colors duration-200'
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type='email'
              placeholder='Email'
              className='p-3 rounded-lg outline-none border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-[var(--gr-color)] transition-colors duration-200'
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <textarea
              name='message'
              cols='30'
              rows='4'
              placeholder='Message'
              className='p-3 rounded-lg outline-none border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-[var(--gr-color)] transition-colors duration-200 resize-none'
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>

            <button
              type='submit'
              disabled={!isFormValid}
              className={`bg-[var(--gr-color)] text-white py-3 rounded-lg ${isFormValid ? 'hover:opacity-80 transition cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
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
