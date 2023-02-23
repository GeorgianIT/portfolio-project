import React from 'react'
import { bookBg, readingGuy } from '../booksAssets/index'
import quotesData from './quotes.json'
import { useEffect, useState } from 'react'

const HomePage = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    setQuotes(quotesData);
  }

  return (
      <div className='w-[100vw] h-[100vh] bg-bookBg'>
          {/* <div className='w-[50%] h-[100%] bg-white'>
              <img src={readingGuy} alt='reading guy' className='aspect-auto object-cover w-full h-[100vh]'></img></div> */}
      <div className='text-white'>
        {quotes.map((data) =>{
          return<p>{`${data.quote} - ${data.author}`}</p>
        })}
      </div>
    </div>
  )
}

export default HomePage