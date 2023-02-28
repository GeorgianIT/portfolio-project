import React from 'react'
import { motion } from "framer-motion"

const Movie = ({ data }) => {
  return (

    <motion.div layout
    initial={{ transform: "scale(0)" }}
    animate={{ transform: "scale(1)" }}
    exit={{ transform: "scale(0)" }}
      transition={{ duration: 0.5 }}
      className={`h-auto w-auto group object-contain relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 ${data.span === 1 ? "col-span-3" : "" } ${data.span === 2 ? "col-span-2 row-span-2 object-cover" : "" }`}>
      <div>
        <img className={"h-auto w-auto object-cover transition-transform duration-500  group-hover:scale-125"} src={require(`../booksAssets/${data.image}`)} />
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div> */}
      <div className={`absolute inset-0 flex translate-y-[100%] flex-col justify-center px-9 text-start transition-transform duration-500 group-hover:translate-y-0 ${ data.span ===1 ? " items-start" :" items-center"}`}>
        <a href={data.linkName} target='_blank' className={` ${data.span === 1 ? "lg:text-5xl text-xs lg:w-[25%] w-[40%] text-white border-b-2 lg:pb-4 pb-2 border-red-600" : "font-dmserif text-center lg:text-5xl text-xs font-bold text-white"}`}>{data.title}</a>
        <a href={data.link} target='_blank' className="lg:text-3xl text:xs text-white font-bold lg:pt-4 pt-2">{data.trailer}</a>
      </div>
    </motion.div>
  )
}

export default Movie