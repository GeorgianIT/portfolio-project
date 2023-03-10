import React from 'react'
import { react, javascript, tailwind } from '../assets'
import {  TitleText } from './CustomText';
import { motion} from 'framer-motion';
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { boxVariant } from '../util/motion';


const Tehnologies = () => {
  const control = useAnimation();
const [ref, inView] = useInView();

useEffect(() => {
  if (inView) {
    control.start("visible");
  } else {
    control.start("hidden");
  }
}, [control, inView]);

  return (
    <div id='tehnologies' className=''>
      <div className='w-[70%] m-auto'>
        <TitleText title='Favorite tehnologies' textStyles={'font-bold text-[40px] mt-14 text-center'} />
        <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className='box flex flex-col lg:flex-row justify-center mt-14 gap-20'>
                <div>
                <img src={react} className='m-auto'/>
                <p className='text-center'>React</p>
                </div>
                <div>
                <img src={javascript} className='m-auto' />
                <p className='text-center'>Javascript</p>
                </div>
                <div>
                <img src={tailwind} className='m-auto' />
                <p className='text-center'>Tailwind CSS</p>
              </div>
        </motion.div>           
      </div>
    </div>
  )
}

export default Tehnologies