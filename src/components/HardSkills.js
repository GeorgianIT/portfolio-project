import React from 'react'
import { TitleText, TypingText } from './CustomText';
import { Progress } from 'react-sweet-progress';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { boxVariant } from '../util/motion';


const HardSkills = () => {
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
    <>
      <div id='skills'>
      <TitleText title='Hard Skills' textStyles={'font-bold text-[40px] mt-14 text-center'} />
          <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control} className='box py-10 w-[80%] m-auto flex flex-col gap-3'>
            <p className='px-10'>Javascript</p>
            <Progress percent={80}  />
            <p className='px-10'>HTML/CSS</p>
            <Progress percent={80}  />
            <p className='px-10'>Tailwind CSS</p>
            <Progress percent={75} />
            <p className='px-10'>React</p>
            <Progress percent={70} />
            <p className='px-10'>Java</p>
            <Progress percent={50} />
            <p className='px-10'>SQL</p>
            <Progress percent={45} />
        </motion.div>
      </div>
      </>
  )
}

export default HardSkills