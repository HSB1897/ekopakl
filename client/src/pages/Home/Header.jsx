import React from 'react';
import images from '../../assets';


const Header = () => {
  return (
    <section className='bg-primary-100 w-full h-screen flex justify-end items-center min-h-[800px]' id='header'>

        <div className='hero bg-secondary h-screen min-h-[800px] 2xl:px-24 px-12 flex flex-col justify-center absolute top-0 left-0 w-full'>
              <h1 className='text-[70px] font-bold text-navy 2xl:text-[90px] select-none'>EkoPak Sal</h1>
              <p className='text-navy text-[22px] 2xl:text-[28px] max-w-[650px] mt-6'>Quality supplies for every aspect of your business</p>
              <i className='text-navy text-[22px] 2xl:text-[22px] 2xl:max-w-[650px] max-w-[500px] mt-4'> Quality is essential in every aspect of business, and our products are designed to meet that need. Whether you need industry paper, diaries, or restaurant kitchen equipment, we provide top</i>
        </div>

        <div className='w-[50%] h-full relative 2xl:mr-24 mr-12'>
            <img src={images.diariesIMG} alt="" className='2xl:w-[400px] w-[300px] rounded-2xl absolute 2xl:top-[150px] top-[200px] 2xl:right-[100px] right-[60px] z-10 hover:scale-110 hover:z-50 duration-300' />
            <img src={images.paperIndustryIMG} alt="" className='2xl:w-[300px] w-[250px] rounded-2xl absolute 2xl:top-[400px] top-[380px] 2xl:right-[350px] right-[300px] z-20 hover:scale-110 duration-300 hover:z-50' />
            <img src={images.kitchenIMG} alt="" className='2xl:w-[300px] w-[250px] rounded-2xl absolute right-0 2xl:top-[400px] top-[380px] hover:scale-110 duration-300 hover:z-50' />
        </div>

    </section>
  );
}

export default Header;
