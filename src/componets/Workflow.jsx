import React from 'react'
import { CheckCircle2 } from 'lucide-react';
import coderImg from "../assets/code.jpg"; 
import { checklistItems } from '../constants';
const Workflow = () => {
  return (
    <div className='mt-20'>
      {/* heading on workflow */}
       <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
          Accelerate your{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 
          text-transparent bg-clip-text">coding Workflow</span>
       </h2>

       {/* coder image and some checklist */}
       <div className='flex flex-wrap justify-center mx-auto max-w-[1200px]'>
          <div className="p-2 w-full lg:w-1/2">
          <img src={coderImg} alt="code-img" />
          </div>

        <div className="pt-12 w-full lg:w-1/2">
           {checklistItems.map((item,index) => (
                 <div key={index} className='flex mb-12 '>
                        <div className='text-green-400 mx-6 bg-neutral-900
                          h-10 w-10 rounded-full p-2'>
                          <CheckCircle2/>
                        </div>
                        <div>
                          <h5 className='mt-1 mb-2 text-xl'>{item.title}</h5>
                          <p className='test-md text-neutral-500'>{item.description}</p>
                        </div>
                 </div>
           ))}
        </div>

       </div>
    </div>
  )
}

export default Workflow
