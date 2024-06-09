import React from 'react'
import { testimonials } from '../constants'

const Testimonial = () => {
  return (
    <div className='mt-20 tracking-wide '>

      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-10">
        What people are saying
        </h2>   

        <div className="flex flex-wrap justify-center items-center max-w-[1200px] mx-auto">
             {testimonials.map((testimonials,index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800
                font-thin">
                      <p>{testimonials.text}</p>
                      <div className="flex mt-8 items-start">
                        <img src={testimonials.image} alt={testimonials.image} className="
                        h-12 w-12 mr-6 rounded-full border border-neutral-300"/>
                        <div>
                          <h6>{testimonials.user}</h6>
                          <span className='text-sm font-normal italic text-neutral-600'>{testimonials.company}</span>
                        </div>
        
                      </div>
                </div>
                        

              </div>
             ))}
         </div> 
    </div>
  )
}

export default Testimonial
