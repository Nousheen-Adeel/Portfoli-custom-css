'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='Navbar'>
      {/* Logo */}
      <Image src="/Images/nfa.png" alt="logo" width={120} height={120} />

      {/* Hamburger Menu (for mobile) */}
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Navigation Links (Desktop + Mobile) */}
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      {/* Download CV Button */}
      <button className='cv'>Download CV</button>
      

      
    </div>
  )
}

export default Navbar;
