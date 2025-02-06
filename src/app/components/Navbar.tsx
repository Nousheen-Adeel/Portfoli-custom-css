
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <Image src="/Images/nfa.png" alt="image" width={200} height={200}/>
      <ul className='md:flex hidden'>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <div>
        <button className='cv'>Download CV</button>
      </div>

    </div>
  )
}

export default Navbar
