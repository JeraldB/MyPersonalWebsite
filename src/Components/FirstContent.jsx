import React from 'react'
import {BsMeta, BsMessenger} from 'react-icons/bs'
import {AiFillGithub, AiFillLinkedin, AiOutlineArrowDown} from 'react-icons/ai'
import { BiLogoGmail } from 'react-icons/bi'

export const FirstContent = () => {
  return (
    <div className=' items-center justify-center  text-center'>
        <div className='  text-[#67e8f9] mt-[250px] max-w-[1240px] px-4 mx-auto' >
            <h1 className='text-8xl text-center font-Montserrat'>Hi, I'm JERALD D. BANALAN</h1>
            <p className='text-[#b9bcc1] text-4xl text-center mt-2'>BSIT STUDENT</p>
          <div className=' flex items-center justify-center'>
            <div className='p-4'><BsMeta size={30}/></div>
            <div className='p-4'><BsMessenger size={30}/></div>
            <div className='p-4'><AiFillGithub size={30}/></div>
            <div className='p-4'><BiLogoGmail size={30}/></div>
            <div className='p-4'><AiFillLinkedin size={30}/></div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
        <AiOutlineArrowDown className=' justify-center  animate-bounce h-16  w-24 rounded-md text-[#67e8f9] mt-[140px] mb-16'/>
        </div>
    </div>
  )
}
