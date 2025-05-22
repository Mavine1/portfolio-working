 import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
 
 const navbar = () => {
   return (
     <>
     <nav>
        <a href="#">
        <Image src={assets.logo} alt="logo" />
        </a>
     </nav>
     </>
   )
 }
 
 export default navbar