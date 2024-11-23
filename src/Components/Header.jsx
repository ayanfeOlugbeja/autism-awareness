import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const mobileNavRef = useRef();

  // Toggle mobile navigation
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  // Close mobile navigation if clicked outside
  useEffect(() => {
    const closeMobileNav = (event) => {
      if (
        isMobileNavOpen &&
        !event.target.closest('.hamburger-menu') &&
        !event.target.closest('.mobile-nav-content')
      ) {
        setIsMobileNavOpen(false);
      }
    };

    const handleOrientationChange = () => {
      setIsMobileNavOpen(false);
    };

    document.addEventListener('mousedown', closeMobileNav);
    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      document.removeEventListener('mousedown', closeMobileNav);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [isMobileNavOpen]);

  const primaryNavLinks = [
    { path: '/about-autism-awareness-africa', name: 'About Us' },
    { path: '/common-misconceptions', name: 'Common Misconceptions' },
    { path: '/blog', name: 'Blog' },
    { path: '/events', name: 'Events' },
    { path: '/careers', name: 'Careers' },
  ];

  const secondaryNavLinks = [
    { path: '/what-is-autism', name: 'What is Autism?' },
    { path: '/help-information', name: 'Help & Information' },
    { path: '/our-work', name: 'Our Work' },
    { path: '/get-involved', name: 'Get Involved' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className='navbar bg-white shadow-md fixed top-0 left-0 w-full z-50'>
      <div className='container mx-auto flex items-center justify-between py-4 px-16'>
        {/* Logo */}
        <Link to='/' aria-label='Home'>
          <img
            src={logo}
            alt='Autism Awareness Africa logo'
            className='w-20 h-20 object-contain'
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden lg:flex flex-col flex-1 items-end gap-4'>
          {/* First Row of Navigation */}
          <ul className='flex gap-8'>
            {primaryNavLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  onClick={scrollToTop}
                  className='hover:underline hover:text-black text-black transition font-thin text-lg'>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Second Row of Navigation */}
          <ul className='flex gap-8 items-center'>
            {secondaryNavLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  onClick={scrollToTop}
                  className='hover:underline text-blue-500 transition font-normal text-pretty text-xl'>
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to='/donate'
                className='flex items-center gap-2 py-2 px-6 
        bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold text-xl
         transform transition-all duration-300 hover:scale-105 hover:text-white'>
                Donate
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          className='hamburger-menu lg:hidden text-black p-2'
          onClick={toggleMobileNav}
          aria-label='Toggle mobile menu'>
          <span className='block w-6 h-0.5 bg-black mb-1'></span>
          <span className='block w-6 h-0.5 bg-black mb-1'></span>
          <span className='block w-6 h-0.5 bg-black'></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileNavOpen && (
        <div
          ref={mobileNavRef}
          className='mobile-nav-content absolute top-20 left-0 w-full bg-white shadow-lg z-40'
          role='navigation'>
          <ul className='flex flex-col items-center gap-4 py-6 text-gray-700 font-medium'>
            {[...primaryNavLinks, ...secondaryNavLinks].map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  onClick={() => {
                    scrollToTop();
                    setIsMobileNavOpen(false);
                  }}
                  className='hover:text-blue-500 transition'>
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to='/donate'
                className='bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition'>
                Donate
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
