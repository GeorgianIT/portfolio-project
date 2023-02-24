import React from 'react'
// import { bookBg, readingGuy } from '../booksAssets/index'
// import quotesData from './quotes.json'
import { useState } from 'react';

const HomePage = () => {

  return (
      <div className='w-[100vw] h-[100vh] bg-bookBg flex'>
      <div className='flex m-auto justify-between w-[45%] h-[30%]'>
      <div className='text-white text-[35px] '>
          <span id='content' className='w-[80%]'></span>
          <h1>author</h1>
      </div>
      <div className='text-white text-[50px] font-bold'>
        <h1>Books Website</h1>
      </div>
      </div>
    </div>
  )
}

export default HomePage