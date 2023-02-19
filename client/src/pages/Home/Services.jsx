import React, {useState} from 'react';
import images from '../../assets';

const Services = () => {

  const [service, setService] = useState("paper");

  return (
    <section className=' bg-primary-100 lg:px-24 py-12'>
          <h1 className='text-[52px] font-bold text-white'>Services</h1>
          <div className='flex mt-12 justify-between'>
            <img src={service==="paper" ? images.paperServices1 : service==="restaurant" ? images.restaurantServices1 : service==="diaries" ? images.diariesServices1 : null} alt="" className='h-[500px] w-[400px] object-cover rounded-2xl' />
            <div className='flex flex-col gap-10'>
               <div className='flex flex-col gap-10 text-center'>
                  <h2 className='text-white text-[32px] border-b-2 border-b-white neon duration-200 select-none cursor-pointer' onClick={() => setService("paper")}>Industry Paper</h2> 
                  <h2 className='text-white text-[32px] border-b-2 border-b-white neon duration-200 select-none cursor-pointer' onClick={() => setService("restaurant")}>Restaurants Kitchen Equipment</h2> 
                  <h2 className='text-white text-[32px] border-b-2 border-b-white neon duration-200 select-none cursor-pointer' onClick={() => setService("diaries")}>Diaries</h2>
               </div>
               <div className={`${service} w-full bg-cover bg-center bg-no-repeat flex-1 bg-white rounded-2xl`}></div>
            </div>
            <div className='flex flex-col h-[500px]'>
                <img src={service==="paper" ? images.paperServices3 : service==="restaurant" ? images.restaurantServices3 : service==="diaries" ? images.diariesServices3 : null}  alt="" className='w-[400px] object-cover mb-10 h-1/2 rounded-2xl' />
                <img src={service==="paper" ? images.paperServices4 : service==="restaurant" ? images.restaurantServices4 : service==="diaries" ? images.diariesServices4 : null}  alt="" className='w-[400px] object-cover h-1/2 rounded-2xl' />
            </div>
          </div>
    </section>
  );
}

export default Services;
