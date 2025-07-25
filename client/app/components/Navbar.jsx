import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'



const Navbar = () => {

  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  }

  const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(scrollY > 50){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
    })},[])


  return (
    <>
      {/* Background gradient texture image */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt='header-bg-color' className='w-full'/>
      </div>

      {/* Navbar starts here */}
      <nav className={`w-full fixed flex items-center justify-between px-5 lg:px-8 xl:px-[8%] py-4 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
        <a href="#top">
            <Image src={assets.logo} alt='logo-icon' className='w-28 cursor-pointer mr-14'/>
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full py-3 px-12 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}`}>
          <li><a className='font-Ovo' href='#top'>Home</a></li>
          <li><a className='font-Ovo' href='#about'>About me</a></li>
          <li><a className='font-Ovo' href='#services'>Services</a></li>
          <li><a className='font-Ovo' href='#work'>My work</a></li>
          <li><a className='font-Ovo' href='#contact'>Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          {/* Dark mode  */}
          <button> <Image src={assets.moon_icon} alt='darkmode' className='w-6'/></button>

          {/* Conatct option */}
          <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo'>Contact <Image src={assets.arrow_icon} alt='arrow-icon' className='w-3'/></a>

          {/* Menu tags for small screen - responsive */}
          <button className='block md:hidden ml-3' onClick={openMenu}> <Image src={assets.menu_black} alt='phone-menu' className='w-6'/></button>
        </div>
         
         {/* Menu items for small screen  */}
        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>

          {/* Option for side-menu */}
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={assets.close_black} alt='cross-menu' className='cursor-pointer w-5'/>
          </div>

          <li><a className='font-Ovo' onClick={closeMenu} href='#top'>Home</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href='#about'>About me</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href='#services'>Services</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href='#work'>My work</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href='#contact'>Contact me</a></li>
        </ul>


      </nav>
    </>
  )
}


export default Navbar

