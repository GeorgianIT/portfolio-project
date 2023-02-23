import React from 'react'
import { forest, editor, reading, } from '../assets';
import { TitleText } from './CustomText';
import { Link } from "react-router-dom";

const Hobbies = () => {
  return (<>
    <div id='hobbies'>
    <TitleText title='Hobbies' textStyles={'font-bold text-[40px] mt-14 mb-14 text-center'} />
        <div className="flex min-h-auto mb-14 items-center justify-center">
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 rounded-xl lg:grid-cols-3">
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:rounded-xl hover:shadow-black/30">
      <div className="h-96 w-72 lg:w-auto lg:h-auto">
        <img className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125" src={forest} alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white">Travels</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">I plan to build a travels project with places that I want to visit</p>
            <Link to = '/portfolio-project/travel'>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
            </Link>
      </div>
    </div>
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:rounded-xl hover:shadow-black/30">
      <div className="h-96 w-72 lg:w-auto lg:h-auto">
        <img className="h-full w-full rounded-xl  object-cover transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125" src={editor} alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white">Video Editing</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">You can check my youtube channel and others channels that I'm editor for below.</p>
        <a href='https://www.youtube.com/channel/UCz5q2dQtMHLuF5mBL74uwlg' target='_blank'>
            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button></a>
      </div>
    </div>
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:rounded-xl hover:shadow-black/30">
      <div className="h-96 w-72 lg:w-auto lg:h-auto">
        <img className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125" src={reading} alt="" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-3xl font-bold text-white">Reading</h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">I just love to read in my free time. You can check below some recommendations.</p>
              <Link to='/portfolio-project/booksapp'>
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
              </Link>
      </div>
    </div>
  </div>
      </div>
    </div>
  </>
  )
}

export default Hobbies