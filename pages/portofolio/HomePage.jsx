import React from 'react'
import Image from "next/image"
import heroImage from "../../assets/heroImage.png"
import { Element } from 'react-scroll'

function HomePage() {
  return (
    <Element id='home' name='home'>
      <div>
        <div className='flex justify-between text-center md:mx-20 md:pt-32 pt-28'>
        <div className='w-full h-auto shadow-sm rounded-full relative px-10 hidden md:block'>
            <Image src={heroImage} alt="heroImage" layout="fill" objectFit="cover" className="rounded-full cursor-pointer hidden md:block"/>
        </div>
        <div className='flex flex-col md:ml-20 mx-10 mt-10'>
            <h1 className='font-serif text-5xl text-left mb-5'>
                Haii.. Saya<span className='text-indigo-900'> Rizal</span>
            </h1>
            <p className='text-left font-italic italic mb-5 flex-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis tenetur molestias pariatur quia ab! Sapiente ullam rerum natus. Vel optio ad ullam rem harum. Facilis illo minima ratione cum non!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni officia quas unde consectetur sed fugit quae similique magnam. Totam perferendis commodi magni! Ratione minima neque, consequatur sunt voluptates nesciunt quibusdam.
            </p>
            <a href="#" className='font-serif italic text-white md:mt-10 mt-5 pt-5 bg-green-600 rounded-md w-60 h-16 text-lg hover:bg-black'>My Portofolio!</a>
        </div>
    </div>
    </div>
    </Element> 
  )
}

export default HomePage