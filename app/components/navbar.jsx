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
            <a href="#">Home</a>
            <a href ="#">About me</a>
            <a href="#work">Projects</a>
            <a href="#contact">Contact me </a>
        </li>
       </ul>

     </nav>
     </>
   )
 }
 
 export default navbar