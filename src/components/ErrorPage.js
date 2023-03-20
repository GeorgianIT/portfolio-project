import React from 'react'

const ErrorPage = () => {

  return (
    <div className='text-center '>
        <h1 className='font-bold text-lg'>Something went wrong!</h1>  
        <h2 className='text-lg'>Click here to see the project, or go back to portfolio</h2>
          <div className='mt-4'>
            <button className="mr-2  bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"><a href='https://georgianit.github.io/portfolio-project/' target='_blank'>Go back</a></button>
            <button className="ml-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"><a href='https://georgianit.github.io/coffee-shop/' target='_blank'>See Project</a></button>
          </div>
    </div>
  )
}

export default ErrorPage