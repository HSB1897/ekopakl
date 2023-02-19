import React from 'react';
import images from '../../assets';


const Header = () => {
  return (
    <section className='bg-primary-100 w-full h-screen flex justify-end items-center min-h-[800px]' id='header'>

        <div className='hero bg-secondary h-screen min-h-[800px] md:px-24 flex flex-col justify-center absolute top-0 left-0 w-full'>
              <h1 className='text-[60px] font-bold text-navy md:text-[90px] select-none'>EkoPak Sal</h1>
              <p className='text-navy text-[18px] md:text-[28px] max-w-[650px] mt-6'>Quality supplies for every aspect of your business</p>
              <i className='text-navy text-[18px] md:text-[22px] max-w-[650px] mt-4'> Quality is essential in every aspect of business, and our products are designed to meet that need. Whether you need industry paper, diaries, or restaurant kitchen equipment, we provide top</i>
        </div>

        <div className='w-[50%] h-full relative mr-24'>
            <img src={images.diariesIMG} alt="" className='w-[400px] rounded-2xl absolute top-[150px] right-[100px] z-10 hover:scale-110 hover:z-50 duration-300' />
            <img src={images.paperIndustryIMG} alt="" className='w-[300px] rounded-2xl absolute top-[400px] right-[350px] z-20 hover:scale-110 duration-300 hover:z-50' />
            <img src={images.kitchenIMG} alt="" className='w-[300px] rounded-2xl absolute right-0 top-[400px] hover:scale-110 duration-300 hover:z-50' />
        </div>

    </section>
  );
}

export default Header;
