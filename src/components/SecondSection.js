import React from 'react'
import { TitleText, TypingText } from './CustomText';
import { motion } from 'framer-motion';
import { staggerContainer } from '../util/motion';
import "react-sweet-progress/lib/style.css";
import Tehnologies from './Tehnologies';
import Hobbies from './Hobbies';
import SoftSkills from './SoftSkills';
import EducationalJourney from './EducationalJourney';
import HardSkills from './HardSkills';
// import Contact from './Contact';

const SecondSection = () => {
  return (
    <div className=' w-full h-auto flex justify-center mt-20'>
      <div className=' h-full lg:w-1/2 md:w-2/3 w-3/4'>
        <div className='w-[80%] text-[25px] m-auto'>
          <p id='about' className='text-[40px] text-center font-bold mb-14'>About me</p>
          <TitleText title='I am a graduate of the college of Electrical Engineering and Computer Science.' textStyles={' lg:text-[25px]'} />
          <motion.div
                  variants={staggerContainer}
                  initial='hidden'
                  whileInView='show'
                  viewport={{once:false, amount:0.25}}
                  className=''>
                  <TypingText title={'Frontend Developer Enthusiast'} textStyles='text-start text-[20px] text-gray-400'/>
          </motion.div>
          <EducationalJourney/>
          <HardSkills/>
          <Tehnologies />
          <SoftSkills/>
      </div>
    </div>
    </div>
  )
}

export default SecondSection