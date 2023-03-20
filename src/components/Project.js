import React from 'react'
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const Project = ({ data }) => {

  return (
    <motion.div layout
    initial={{ transform: "scale(0)" }}
    animate={{ transform: "scale(1)" }}
    exit={{ transform: "scale(0)" }}
    transition={{ duration: 0.5 }} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:rounded-xl hover:shadow-black/30">
      <div className="lg:h-96 lg:w-72 h-auto w-auto">
        <img className="h-full w-full rounded-xl object-cover transition-transform duration-500  group-hover:scale-125" src={require(`../assets/${data.image}`)} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif lg:text-3xl text-xl  font-bold text-white">{data.title}</h1>
        {/* <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">I plan to build a travels project with places that I want to visit</p> */}
        {/* <a href={process.env.PUBLIC_URL + `${data.path}`} target='_blank' download={`${data.title}.pdf`} className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See Project</a> */}
        <Link to={`${data.path}`} className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
        See Project
        </Link>
        
      </div>
    </motion.div>
  )
}
{/* <h2 className='text-white text-center'>{data.title}</h2> */}
      {/* <a href=''><img src={require(`../assets/${data.image}`)} width="200" className='object-cover' /></a> */}
      {/* <a href={process.env.PUBLIC_URL + `${data.path}`} target='_blank'><img src={require(`../assets/${data.image}`)} className='object-cover w-[10vw] h-[20vh]' /></a> */}
export default Project