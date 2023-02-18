import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import {GiHamburgerMenu} from 'react-icons/gi';

const Navbar = (props) => {

  const [openNav, setOpenNav] = useState(false)
  const navigate = useNavigate();

  const navigateToAboutUsPage = () => {
    navigate('/about');
    window.scrollTo(0, 0);
  }

  const navigateToHomePage = () => {
      navigate('/');
  }

  return (
    <div className={openNav ? 'flex flex-col md:w-[80%] w-[300px] md:flex-row py-4 px-24 justify-between items-center absolute z-50 ' : 'min-h-[70px] items-center w-screen flex flex-col md:w-[80%] md:flex-row py-4 px-24 justify-between align-middle absolute z-50'}>
      <GiHamburgerMenu className='absolute top-6 left-6 md:hidden text-white text-[24px]' onClick={() => setOpenNav(!openNav)} />
      <img src={logo} alt="" className={openNav ? 'w-[50px] mb-4 md:mb-0 select-none' : ' select-none hidden md:block md:w-[50px] md:mb-0'} onClick={() => { navigateToHomePage(); props.setSection('')}} />
      <div className={openNav ? 'flex flex-col md:flex-row gap-6 select-none' : 'hidden md:flex md:flex-row md:gap-6 md:select-none'}>
          <h1 className='text-[20px] font-semibold text-navy cursor-pointer neon' onClick={() => { navigateToHomePage(); props.setSection('services')}}>Services</h1>
          <h1 className='text-[20px] font-semibold text-navy cursor-pointer neon' onClick={() => { navigateToHomePage(); props.setSection('ourTeam')}}>Our Team</h1>
          <h1 className='text-[20px] font-semibold text-navy cursor-pointer neon' onClick={() => { navigateToHomePage(); props.setSection('partners')}}>Partners</h1>
          <h1 className='text-[20px] font-semibold text-navy cursor-pointer neon' onClick={() => { navigateToHomePage(); props.setSection('contactUs')}}>Contact Us</h1>
          <h1 className='text-[20px] font-semibold text-navy cursor-pointer neon' onClick={() => { navigateToAboutUsPage(); props.setSection('')}}>About Us</h1>
      </div>
    </div>
  );
}

export default Navbar;