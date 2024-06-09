import React from 'react'
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
const HeroSection = () => {
  return (
       // hero section container //

     <div className=" flex flex-col items-center mt-6 lg:mt-15">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
           VirtualR buil tools 
           <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">{" "} for developer</span>
        </h1>
        <p className='text-center mt-10 text-lg text-neutral-500 max-w-4xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi architecto quo molestiae saepe, eaque fugit voluptates ad vitae pariatur molestias deserunt dolores mollitia eligendi odio adipisci in iusto! Nisi quia fuga provident placeat ullam aperiam ipsam minima consequatur saepe doloribus.</p>

           {/* hero=buttons */}
        <div className="flex justify-center my-10">
          <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 
          rounded-md py-3 px-4 mx-3'>Start for free</a>

          <a href="#" className='rounded-md py-3 px-4 border'>documentation</a>
        </div>

        {/* videos autoplay */}
        <div className="flex justify-center mt-10">
          <video autoPlay loop muted className='rounded-lg border  w-1/2 border-orange-700 shadow-orange-400 mx-2 my-4'>
            <source src={video1} type='video/mp4'/>
            your browser does not support video tag
          </video>
          <video autoPlay loop muted className='rounded-lg border w-1/2 border-orange-700 shadow-orange-400 mx-2 my-4'>
            <source src={video2} type='video/mp4'/>
            your browser does not support video tag
          </video>
        </div>
     </div>
    
  )
}

export default HeroSection
