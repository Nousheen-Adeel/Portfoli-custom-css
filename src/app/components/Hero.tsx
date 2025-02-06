import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='profile'>
            <Image src="/Images/profile.png" alt="img" width={200} height={200} className="img" />
        </div>
        <div className='info'>
            <h1>Hello <br />I am <br /> Nousheen Fatima Adeel</h1>
           
            <div className='btn2'>
                <button className='btn1'><Link href="/about">About Me</Link></button>
                <button className='btn1'><Link href="/contact">Contact Me</Link></button>
            </div>
    
            </div>
            </div>
  )
}

export default Hero
