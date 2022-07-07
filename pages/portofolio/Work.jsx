import React from 'react'
import { Element } from 'react-scroll'
import satu from "../../assets/satu.png"
import dua from "../../assets/dua.png"
import tiga from "../../assets/tiga.png"
import Image from 'next/image'

const Work = () => {
  return (
    <Element id='work' name='work'>
        <div className='w-full my-20 h-auto flex flex-col justify-center items-center'>
            <p className='text-sm uppercase text-gray-400'>Portfolio</p>
            <h2 className='text-indigo-900 text-6xl font-bold text-center'>All Creative Project</h2>
            
            <div className='md:flex sm:flex-col md:flex-row justify-center items-center gap-10 mt-10'>
                
                <div className='rounded w-40 h-60 shadow-xl relative'>
                    <a href="https://rizal-nabillah-wedding.vercel.app/">
                    <Image src={satu} alt="satu" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                    </a>
                </div>
                <div className='rounded w-60 h-60 shadow-xl relative'>
                    <a href="https://rizal-note.vercel.app/">
                    <Image src={dua} alt="dua" layout="fill" objectFit="relative" className="p-2 rounded cursor-pointer"/>
                    </a>
                </div>  
                <div className='rounded w-40 h-60 shadow-xl relative'>
                    <a href="https://portofolio-rizalnurramadhan.vercel.app/">
                    <Image src={tiga} alt="tiga" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                    </a>
                </div>
                
            </div>

            
        </div>

    </Element>
  )
}

export default Work