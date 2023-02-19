import React from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Headline from '../../components/Headline';

const About = () => {
  return (
    <Container className='bg-secondary flex gap-10'>
      <div className='w-1/2'> </div>
      <div className='flex flex-col gap-10 w-1/2'>
          <Headline className='text-navy'>About Us</Headline>
          <p className='text-navy text-[22px] text-justify'>EkoPak Sal is managed by a team of experienced and dedicated professionals who are committed to ensuring the success of the company. They bring a wealth of knowledge, experience, and expertise to their roles and are dedicated to delivering high-quality work that meets the needs of the company and its clients</p>
          <Button className=' self-end hover:bg-navy hover:text-secondary duration-200' arrowHoverColor={"secondary"}>Read More</Button>
      </div>
    </Container>
  );
}

export default About;
