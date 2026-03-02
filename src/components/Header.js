import React from 'react';

import Socials from './Socials';
import Logo from '../img/header/logo.png';
import MobileNav from './MobileNav';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* logo */}
        <Link to={'/'} className='max-w-[100px]'>
          <img src={Logo} alt='' />
        </Link>
        {/* nav - hidden - show on desktop mode */}
        <nav className='hidden xl:flex gap-x-12 font-semibold'>
          <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>Start</Link>
          <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>O mnie</Link>
          <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition'>Portfolio</Link>
          <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition'>Kontakt</Link>
        </nav>
      </div>
        {/* socials */}
        <Socials />
        {/* mobile nav*/}
        <MobileNav />
    </header>
  );
};

export default Header;
