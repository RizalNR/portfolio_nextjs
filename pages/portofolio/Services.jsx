import React from 'react'
import { Element } from 'react-scroll'
import {IoLogoHtml5} from 'react-icons/io5'
import {IoLogoJavascript} from 'react-icons/io5'
import {IoLogoReact} from 'react-icons/io5'
import {SiNextdotjs} from 'react-icons/si'

const services = () => {
  return (
    <Element id='services' name='services'>
        <div className='w-full my-40 h-auto flex flex-col justify-center items-center'>
            <p className='text-sm uppercase text-gray-400'>My Skills</p>
            <h1 className='text-indigo-900 text-6xl font-bold text-center'>My Expertise</h1>
            
            {/* section pertama  */}
            <div className='flex justify-items-start items-center mx-40 gap-10 mt-20'>
                <div className='flex flex-col justify-center items-center'>
                    {/* blog pertama */}
                    <div className='flex justify-center items-center cursor-pointer'>
                        <IoLogoHtml5 className='w-10 h-10 bg-orange-400 text-gray-100 m-3 p-1 shadow-xl rounded-md'/>
                        <h2 className='text-xl text-indigo-900 font-semibold'>Html 5</h2>
                    </div>
                </div> 

                <div className='flex flex-col justify-center items-center'>
                    {/* blog kedua */}
                    <div className='flex justify-center items-center cursor-pointer'>
                        <IoLogoJavascript className='w-10 h-10 bg-yellow-400 text-gray-100 m-3 p-1 shadow-xl rounded-md'/>
                        <h2 className='text-xl text-indigo-900 font-semibold'>JavaScript</h2>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    {/* blog ketiga */}
                    <div className='flex justify-center items-center cursor-pointer'>
                        <IoLogoReact className='w-10 h-10 bg-blue-400 text-gray-100 m-3 p-1 shadow-xl rounded-md'/>
                        <h2 className='text-xl text-indigo-900 font-semibold'>Reactjs</h2>
                    </div>
                </div> 

                <div className='flex flex-col justify-center items-center'>
                    {/* blog keempat */}
                    <div className='flex justify-center items-center cursor-pointer'>
                        <SiNextdotjs className='w-10 h-10 bg-black text-gray-100 m-3 p-1 shadow-xl rounded-md'/>
                        <h2 className='text-xl text-indigo-900 font-semibold'>Nextjs</h2>
                    </div>
                </div>

            </div>
        </div>

    </Element>
  )
}

export default services