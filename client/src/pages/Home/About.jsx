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
          <p className='text-navy text-[22px] text-justify'>Welcome to EkoPak Sal, a leading trading company. With a presence in Nigeria, Senegal, and Ghana, we have established a reputation as a reliable and trusted provider of high-quality products. Our company is committed to sourcing the best products from around the world, including Austria, Sweden, Brazil, China, and India, and delivering them to factories in West Africa.</p>
          <Button className=' self-end hover:bg-navy hover:text-secondary duration-200' arrowHoverColor={"secondary"}>Read More</Button>
      </div>
    </Container>
  );
}

export default About;
