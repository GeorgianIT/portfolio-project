import React from 'react'
import { TitleText } from './CustomText';
import { Progress } from 'react-sweet-progress';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { boxVariant } from '../util/motion';

const SoftSkills = () => {
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
      <TitleText title='Soft Skills' textStyles={'font-bold text-[40px] mt-20 text-center'} />
        <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}>
      <div>
    
          <div className='m-auto flex justify-around hidden lg:flex py-14 w-[80%]'>
            <p className='w-[132px] text-center '>Attention to details</p>
            <p className='w-[132px] text-center'>Research</p>
          </div>
          <div className='m-auto flex justify-around hidden lg:flex w-[80%]'>
            <Progress type="circle" strokeWidth={5} percent={95}/>
            <Progress type="circle" strokeWidth={5} percent={90} />
          </div>
          <div className='m-auto flex justify-around hidden lg:flex py-10 w-[80%] gap-4'>
            <p className='w-[132px] text-center'>Fast Learner</p>
            <p className='w-[132px] text-center'>Problem Solving</p>
          </div>
          <div className='m-auto flex justify-around hidden w-[80%] lg:flex'>
            <Progress type="circle" strokeWidth={5} percent={85}/>
            <Progress type="circle" strokeWidth={5} percent={80} />
          </div>
        </div>
        <div className='flex flex-col lg:hidden block items-center text-center gap-7'>

            <p className='px-10 '>Attention to details</p>
            <Progress type="circle" className='' strokeWidth={5} percent={95}/>
            <p className='px-24'>Research</p>
            <Progress type="circle" className='' strokeWidth={5} percent={90}/>
            <p className='px-10 '>Fast Learner</p>
            <Progress type="circle" className='' strokeWidth={5} percent={85}/>
            <p className='px-24 o'>Problem Solving</p>
            <Progress type="circle" className='' strokeWidth={5} percent={80}/>
        </div>
        </motion.div></>
  )
}

export default SoftSkills