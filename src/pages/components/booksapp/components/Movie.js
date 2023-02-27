import React from 'react'
import { motion } from "framer-motion"

const Movie = ({ data }) => {
  return (

    <motion.div layout
    initial={{ transform: "scale(0)" }}
    animate={{ transform: "scale(1)" }}
    exit={{ transform: "scale(0)" }}
    transition={{ duration: 0.5 }} className={data.size}>
      <div>
        <img className={data.imageClass} src={require(`../booksAssets/${data.image}`)} />
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div> */}
      <div className={data.hover}>
        <h1 className={data.text}>{data.title}</h1>
        <h1 className={data.trailerStyle}>{data.trailer}</h1>
      </div>
    </motion.div>
  )
}

export default Movie