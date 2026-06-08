import React, { useEffect } from 'react';
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [Fixed, setFixed] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 320) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = ['Home', 'About', 'Skills', 'Project', 'Contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`nav flex justify-between items-center h-16 px-4  bg-[var(--bl-color)] bg-bottom-[var(--gr-color)] lg:px-8 xl:px-16 ${Fixed ? 'fixed top-0 left-0 right-0  bg-[var(--light-dark)] shadow-[0_0_12px_rgba(34,197,94,0.3)]' : ''}`}
    >
      <div className='flex items-center space-x-4'>
        <i
          className='fas fa-bars text-[var(--gr-color)] text-2xl cursor-pointer bars'
          onClick={() => setOpen(true)}
        ></i>
        <h1 className='nav-logo uppercase text-[var(--gr-color)] text-3xl font-bold'>
          Profile
        </h1>
      </div>
      <ul
        className={`nav-links  md:flex space-x-6 lg:space-x-16 list-none ${open ? 'open' : ''}`}
      >
        <i
          className='fas fa-close text-[var(--gr-color)] text-2xl close hover:text-[var(--gray)]'
          onClick={() => setOpen(false)}
        ></i>
        <li
          className={`nav-link border-b-2 ${
            activeSection === 'Home'
              ? 'text-[var(--gr-color)] border-[var(--gr-color)]font font-bold uppercase font-sans'
              : 'border-transparent'
          } `}
        >
          <a
            href='#'
            className=' text-2xl hover:text-[var(--gr-color)]'
            onClick={() => setOpen(false)}
          >
            Home
          </a>
        </li>
        <li
          className={`nav-link border-b-2 ${
            activeSection === 'About'
              ? 'text-[var(--gr-color)] border-[var(--gr-color)]font-bold uppercase font-sans'
              : 'border-transparent'
          } `}
        >
          <a
            href='#About'
            className='nav-link text-2xl hover:text-[var(--gr-color)]'
            onClick={() => setOpen(false)}
          >
            About
          </a>
        </li>
        <li
          className={`nav-link border-b-2 ${activeSection === 'Skills' ? 'text-[var(--gr-color)] border-[var(--gr-color)] font-bold uppercase font-sans' : 'border-transparent'}`}
        >
          <a
            href='#Skills'
            className='nav-link text-2xl hover:text-[var(--gr-color)]'
            onClick={() => setOpen(false)}
          >
            Skills
          </a>
        </li>
        <li
          className={`nav-link border-b-2 ${activeSection === 'Project' ? 'text-[var(--gr-color)] border-[var(--gr-color)] font-bold uppercase font-sans' : 'border-transparent'}`}
        >
          <a
            href='#Project'
            className='nav-link text-2xl hover:text-[var(--gr-color)]'
            onClick={() => setOpen(false)}
          >
            Projects
          </a>
        </li>
        <li
          className={`nav-link border-b-2 ${
            activeSection === 'Contact'
              ? 'text-[var(--gr-color)] border-[var(--gr-color)]font-bold uppercase font-sans'
              : 'border-transparent'
          } `}
        >
          <a
            href='#Contact'
            className='contactNav nav-link text-2xl hover:text-[var(--gr-color)]'
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>
      <div>
        <button className='nav-btn btn bg-[var(--gr-color)] text-white hover:bg-[var(--light-dark)] hover:text-[var(--gr-color)] '>
          <a
            href='https://wa.me/2349067890701'
            target='_blank'
            rel='noopener noreferrer'
          >
            Hire Me
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
