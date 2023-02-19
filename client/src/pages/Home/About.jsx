import React from 'react';
import Button from '../../components/Button';

const About = () => {
  return (
    <section className='bg-secondary px-24 py-12 flex gap-10'>
      <div className='w-1/2'> </div>
      <div className='flex flex-col gap-10 w-1/2'>
          <h1 className='text-navy text-[52px] font-bold'>About Us</h1>
          <p className='text-navy text-[22px] text-justify'>EkoPak Sal is managed by a team of experienced and dedicated professionals who are committed to ensuring the success of the company. They bring a wealth of knowledge, experience, and expertise to their roles and are dedicated to delivering high-quality work that meets the needs of the company and its clients</p>
          <Button className=' self-end hover:bg-navy hover:text-secondary duration-200' arrowHoverColor={"secondary"}>Read More</Button>
      </div>
    </section>
  );
}

export default About;
