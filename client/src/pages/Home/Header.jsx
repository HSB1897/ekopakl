import React from 'react';
import images from '../../assets';


const Header = () => {
  return (
    <section className='bg-primary-100 w-full xl:h-screen h-[1100px] flex flex-col xl:flex-row justify-end items-center min-h-[800px]' id='header'>

        <div className='hero bg-secondary h-screen min-h-[800px] 2xl:px-24 px-12 flex flex-col justify-center absolute top-0 left-0 w-full'>
              <h1 className='text-[70px] font-bold text-navy 2xl:text-[90px] select-none'>EkoPak Sal</h1>
              <p className='text-navy text-[22px] 2xl:text-[28px] max-w-[650px] mt-6'>Quality supplies for every aspect of your business</p>
              <i className='text-navy text-[22px] 2xl:text-[22px] 2xl:max-w-[650px] max-w-[500px] mt-4'> Quality is essential in every aspect of business, and our products are designed to meet that need. Whether you need industry paper, diaries, or restaurant kitchen equipment, we provide top</i>
        </div>

        <div className='w-[50%] h-full'></div>

        <div className='xl:w-[50%] w-full h-full relative'>
            <img src={images.diariesIMG} className='absolute right-[50%] translate-x-[50%] 2xl:w-[400px] w-[70%] max-w-[400px] z-10 rounded-2xl xl:top-[150px] top-[50px] hover:scale-110 hover:z-50 duration-300' alt="" />
            <img src={images.paperIndustryIMG} className='absolute mx-auto right-[50%] -translate-x-6 2xl:w-[300px] sm:w-[250px] w-[40%] 2xl:top-[400px] xl:top-[380px] sm:top-[280px] top-[260px] rounded-2xl z-20 hover:scale-110 duration-300 hover:z-50' alt="" />
            <img src={images.kitchenIMG} alt="" className='2xl:w-[300px] sm:w-[250px] w-[40%] rounded-2xl absolute mx-auto left-[50%] translate-x-6 2xl:top-[400px] xl:top-[380px] sm:top-[280px] top-[260px] hover:scale-110 duration-300 hover:z-50' />
        </div>

    </section>
  );
}

export default Header;
