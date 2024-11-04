import React from 'react'
import Image from 'next/image'
import './header.css'
import { BsCartFill } from "react-icons/bs";
import Link from 'next/link';

const Header = () => {
  return (
    <main >
        <div className='header'>
            <div className='logodiv'>
                <Image
                className='logo'
                height={500}
                width={500}
                src="/logo.png"
                alt='logo'/>
            </div>
            <div className='headcomp '>
                <div><Link href='/' className='link'>Home</Link></div>
                <div><Link href="/about" className='link'>About</Link></div>
                <div><Link href="/contact" className='link'>Contact</Link></div>  
            </div>
            <div className='btndiv '>
            <button className='btn'>Cart <BsCartFill /></button>
            </div>
        </div>
    </main>
  )
}

export default Header