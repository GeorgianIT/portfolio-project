import React from 'react'

const Project = ({ data }) => {
  return (
    <div className='hover:scale-[110%]'>
      <h2 className='text-white text-center'>{data.title}</h2>
          <a href=''><img src={require(`../assets/${data.image}`)} width="200" className='object-contain' /></a>
    </div>
  )
}

export default Project