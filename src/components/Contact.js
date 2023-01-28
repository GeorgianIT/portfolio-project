import React from 'react'
import {mypicture} from '../assets'

const Contact = () => {
  return (
        <div className='flex justify-center hidden lg:block absolute ml-20 mt-20'>
                <div class="bg-white font-semibold text-center rounded-3xl border shadow-lg p-10 max-w-xs">
                <img class="mb-3 w-40 h-40 rounded-full shadow-lg object-contain mx-auto" src={mypicture} alt="product designer"/>
                <h1 class="text-[30px] text-gray-700"> Georgian Tudor </h1>
                <h3 class="text-[25px] text-gray-400 "> Junior Frontend Developer </h3>
                <p class="text-[20px] text-gray-400 mt-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <button class="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">Contact Me</button>
        </div>
    </div>
  )
}

export default Contact