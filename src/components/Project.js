import React from 'react'

const Project = ({ data }) => {
  return (
    <div className='hover:scale-[110%]'>
      <h2 className='text-white text-center'>{data.title}</h2>
      {/* <a href=''><img src={require(`../assets/${data.image}`)} width="200" className='object-cover' /></a> */}
      <a href={process.env.PUBLIC_URL + `${data.path}`} target='_blank'><img src={require(`../assets/${data.image}`)} className='object-cover w-[10vw] h-[20vh]' /></a>
    </div>
  )
}

export default Project