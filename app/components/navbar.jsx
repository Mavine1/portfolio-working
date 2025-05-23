 import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
 
 const Navbar = () => {
   return (
     <>
     <nav>
        <a href="#">
        <Image src={assets.logo} className='w-28 cursor-pointer mr-14' alt="logo" />
        </a>
       <ul>
            <li><a href="#top">Home</a></li>
            <li> <a href ="#about">About me</a></li>
            <li><a href="#work">Projects</a></li>
            <li> <a href="#contact">Contact me </a></li>
       </ul>
       <div>
        <a href="#contact">Contact <Image src={assets.arrow_icon } className='w-3' alt='icon'/></a>
       </div>
     </nav>
     </>
   )
 }
 //navabar
 export default Navbar