'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='overflow-hidden'>
      <nav className='w-full p-6 flex flex-row justify-between items-center border-b-2 backdrop-blur-sm fixed z-10'>
        <h1 className='cursor-pointer text-xl font-bold'>Kelajak</h1>
        <ul className='flex flex-row gap-4 items-center max-sm:hidden'>
          <li className='cursor-pointer text-lg'>Kurslar</li>
          <li className='cursor-pointer text-lg'>Loyihalar</li>
          <li className='cursor-pointer text-lg'>Xizmalar</li>
          <li className='cursor-pointer'>Galereya</li>
        </ul>
        <Button variant="default" className='max-sm:hidden'>
          <MdOutlinePhoneInTalk size={15} className='mr-2' />
          <p>Bog'lanish</p>
        </Button>
        <Button variant="ghost" onClick={handleToggle} className='sm:hidden'>
          <RiMenu4Fill size={25} />
        </Button>
      </nav>

      <div className={`sm:hidden fixed top-0 left-0 w-full border-b-4 pt-32 h-screen gap-20 backdrop-blur-md flex flex-col items-center -translate-x-full transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <ul className='flex flex-col gap-8 items-center '>
          <li className='cursor-pointer text-lg'>Kurslar</li>
          <li className='cursor-pointer text-lg'>Loyihalar</li>
          <li className='cursor-pointer text-lg'>Xizmalar</li>
          <li className='cursor-pointer text-lg'>Galereya</li>
        </ul>
        <Button variant="default" className='md:flex'>
          <MdOutlinePhoneInTalk size={15} className='mr-2' />
          <p className='text-white'>Bog'lanish</p>
        </Button>
      </div>
    </div>

  )
}

export default Navbar