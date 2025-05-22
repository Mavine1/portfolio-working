 import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
 
 const navbar = () => {
   return (
     <>
     <nav>
        <a href="#">
        <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt="logo" />
        </a>
       <ul>
        <li>
            
        </li>
       </ul>

     </nav>
     </>
   )
 }
 
 export default navbar