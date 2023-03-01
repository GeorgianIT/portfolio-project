import React from 'react'
import myData from '../constants/images.json'
import ImagesBeta from './ImagesBeta';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion'

const SectionTwo = () => {
  let [isClicked, setIsClicked] = useState(false);
  const [images, setImages] = useState([]);

  const carousel = useRef(0);
  useEffect(() => {
    fetchImages();
  }, []);
  
  const fetchImages = async () => {
    setImages(myData);
}
  return (
    <motion.div id='discover' className=' bg-black snap-start flex justify-center h-[80vh]'>
      <motion.div ref={carousel} className={`carousel overflow-hidden w-[80vw]`}>
        <motion.div drag={`${isClicked ? "x" : 'x'}`}  dragSnapToOrigin={isClicked} dragElastic={0.2} dragConstraints={{ right: 1600, left: -1000 }} id='image-track' className={`inner-carousel flex h-full gap-10 justify-center w-[50vw]`}>
          {images.map((data) => { return <ImagesBeta key={data.unicKey} data={data} isClicked={isClicked} setIsClicked={setIsClicked} /> })}
      </motion.div> 
      </motion.div>
    </motion.div>
  )
}

export default SectionTwo