import React, {useState} from 'react';
import logo from '../assets/logo.png';
import {GiHamburgerMenu} from 'react-icons/gi';
import Scroll from './Scroll';

const Navbar = () => {

  const [openNav, setOpenNav] = useState(false)

  return (
    <div className={openNav ? 'flex flex-col md:w-[80%] w-[300px] md:flex-row py-4 px-24 justify-between items-center absolute z-50 ' : 'min-h-[70px] items-center w-screen flex flex-col md:w-[80%] md:flex-row py-4 px-24 justify-between align-middle absolute z-50'}>
      <GiHamburgerMenu className='absolute top-6 left-6 md:hidden text-white text-[24px]' onClick={() => setOpenNav(!openNav)} />
      <img src={logo} alt="" className={openNav ? 'w-[60px] mb-4 md:mb-0 select-none' : ' select-none hidden md:block md:w-[60px] md:mb-0'} />
      <div className={openNav ? 'flex flex-col md:flex-row gap-6 select-none' : 'hidden md:flex md:flex-row md:gap-6 md:select-none'}>
          <li className='text-[20px] font-semibold text-navy cursor-pointer relative nav-item list-none'><Scroll to='services'>Services</Scroll></li>
          <li className='text-[20px] font-semibold text-navy cursor-pointer relative nav-item list-none'><Scroll to='about'>About</Scroll></li>
          <li className='text-[20px] font-semibold text-navy cursor-pointer relative nav-item list-none'><Scroll to='team'>Team</Scroll></li>
          <li className='text-[20px] font-semibold text-navy cursor-pointer relative nav-item list-none'><Scroll to='partners'>Partners</Scroll></li>
          <li className='text-[20px] font-semibold text-navy cursor-pointer relative nav-item list-none'><Scroll to='contact'>Contact</Scroll></li>
      </div>
    </div>
  );
}

export default Navbar;