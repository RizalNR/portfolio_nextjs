import React from 'react'
import { Element } from 'react-scroll'
import {SiGmail} from 'react-icons/si'
import {ImWhatsapp} from 'react-icons/im'
import {AiFillGithub} from 'react-icons/ai'
import {SiTelegram} from 'react-icons/si'

const Contact = () => {
  return (
    <Element id='contact' name='contact'>
        <div className='w-full my-20 h-auto flex flex-col justify-center items-center'>
            <p className='text-sm uppercase text-gray-400'>Contact</p>
            <h2 className='text-indigo-900 text-6xl font-bold text-center'>Contact</h2>
            
            <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
                <div className='flex flex-col justify-center items-center'>
                    {/* blog pertama */}
                    <div className='flex justify-center items-center cursor-pointer'>
                        <a href="https://mail.google.com/mail?text(rizalnr2@gmail.com)">
                          <SiGmail className='w-10 h-10 bg-red-500 text-gray-100 m-3 p-1 shadow-xl rounded-md'/>
                          <h2 className='text-xl text-indigo-900 font-semibold'>Gmail</h2>
                        </a>
                    </div>
                </div> 

                <div className='flex flex-col justify-center items-center'>
                    {/* blog kedua */}
                    <div className='flex justify-center items-center cursor-pointer'>
                        <a href="https://wa.me/081230211096?text=(Halo saya Rizal Nur Ramadhan , Ada yang bisa saya bantu?)">
                          <ImWhatsapp className='w-10 h-10 bg-green-500 text-gray-100 m-3 p-1 shadow-xl rounded-md'/>
                          <h2 className='text-xl text-indigo-900 font-semibold'>Whatsapp</h2>
                        </a>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    {/* blog ketiga */}
                    <div className='flex justify-center items-center cursor-pointer'>
                        <a href="">
                          <AiFillGithub className='w-10 h-10 bg-black text-gray-100 m-3 p-1 shadow-xl rounded-md'/>
                          <h2 className='text-xl text-indigo-900 font-semibold'>GitHub</h2>
                        </a>
                    </div>
                </div> 

                <div className='flex flex-col justify-center items-center'>
                    {/* blog keempat */}
                    <div className='flex justify-center items-center cursor-pointer'>
                        <a href="">
                          <SiTelegram className='w-10 h-10 bg-blue-500 text-gray-100 m-3 p-1 shadow-xl rounded-md'/>
                          <h2 className='text-xl text-indigo-900 font-semibold'>Telegram</h2>
                        </a>
                    </div>
                </div>

            </div>

            
        </div>
    </Element>
  )
}

export default Contact