import React from 'react'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import BackButton from '../BackButton'

const Movies = () => {
  return (
    <>
    <BackButton/>
    <div className='bg-black'>
    <HomePage />
    <Footer />
      </div>
    </>
  )
}

export default Movies