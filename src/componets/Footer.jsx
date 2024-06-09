import React from 'react'
import { resourcesLinks ,platformLinks ,communityLinks } from '../constants'
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
         <div className="gap-4 grid lg:grid-cols-3 sm:grid-cols-3 grid-cols-2  max-w-[1200px] mx-auto">
            <div>
            <h3 className="text-md mb-4 font-semibold">Resources</h3>
            <ul className='space-y-2'>
                {resourcesLinks.map((link,index) => (
                     <li key={index}>
                        <a href={link.href} className='text-neutral-300 hover:text-white hover:underline'>{link.text}</a>
                     </li>
                ))}
            </ul>
            </div>

            <div>
            <h3 className="text-md mb-4 font-semibold">Plateform</h3>
            <ul className='space-y-2'>
                {platformLinks.map((link,index) => (
                     <li key={index}>
                        <a className="text-neutral-300 hover:text-white  hover:underline" href={link.href}>{link.text}</a>
                     </li>
                ))}
            </ul>
            </div>

            <div>
            <h3 className="text-md mb-4 font-semibold">community</h3>
            <ul className='space-y-2'>
                {communityLinks.map((link,index) => (
                     <li key={index}>
                        <a className='text-neutral-300 hover:text-white  hover:underline' href={link.href}>{link.text}</a>
                     </li>
                ))}
            </ul>
            </div>
         </div>
    </footer>
  )
}

export default Footer
