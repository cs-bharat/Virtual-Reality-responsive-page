import React from 'react'
import { pricingOptions } from '../constants'
import { CheckCircle2 } from 'lucide-react'
const Pricing = () => {
  return (
    // cards //
    <div className='mt-20'>
        {/* card heading */}
       <h1 className='text-3xl sm:text-5xl lg:text-6xl tracking-wider
        my-8 text-center'>Pricing</h1>
     
           {/* container */}
        <div className="flex flex-wrap">
            {pricingOptions.map((option,index) => (
             <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2' >
                        {/* indevidual card for looping */}
                      <div className="p-10 border border-neutral-700 rounded-xl ">

                        <p className='text-4xl mb-8'>
                              {option.title}
                                  {option.title === "Pro" && (
                                    <span className="bg-gradient-to-r from-orange-500
                                     to-orange-900 text-transparent bg-clip-text text-xl 
                                      mb-4 ml-2">(Most popular)</span>
                                  )}
                        </p>

                        <p className="mb-8">
                               <span className='text-5xl mt-6 mr-2 '>{option.price}</span>
                               <span className='text-neutral-400'>/month</span>
                        </p>

                        <ul>
                            {option.features.map((feature,index) => (
                                <li key={index} className='mt-8 flex items-center'>
                                    <CheckCircle2/>
                                    <span className='ml-2'>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <a href="#" className="inline-flex justify-center 
                         items-center text-center w-full h-12 p-5 mt-20 
                         hover:bg-orange-900 border border-orange-800 rounded-xl tracking-tight
                         transition duration-200">subscribe
                         </a>

                     </div>    
             </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing
