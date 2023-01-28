import React from 'react'
// import laptop from '../assets/laptop.jpg'
import linkedin from '../assets/linkedin.svg'
import github2 from '../assets/github2.svg'
import { red } from '../assets'
import { TitleText, TypingText } from './CustomText';
import { motion } from 'framer-motion';
import { staggerContainer } from '../util/motion';




// mx-auto flex lg-flex-row flex-col gap-5
const FirstSection = () => {
    return (
      <div className='dark bg-black flex w-full h-[100vh]'>
          <div className='bg-black hidden lg:block  w-1/2 h-[100vh]'>
          <img src={red} alt='photo' className='aspect-auto object-contain w-full h-[100vh]' />
          </div>
        <div className='bg-black flex-1 w-1/2 py-20 h-[100vh] text-white'>
              <div className='mt-64 ml-20 pb-5 w-9/12 border-b border-gray'>
                  <TitleText title='Tudor' textStyles={'text-[50px] font-bold'}/>
                  <TitleText  title='Georgian-Iulian' textStyles={'text-[50px]'}/>
              </div>
              <div className='flex flex-col lg:flex-row justify-between w-9/12 ml-20'>
              <motion.div
                  variants={staggerContainer}
                  initial='hidden'
                  whileInView='show'
                  viewport={{once:false, amount:0.25}}
                  className='pt-5'>
                  <TypingText title={'Junior Frontend Developer'} textStyles='text-start text-[30px]' />
            </motion.div>  
            <div className=' w-90% flex justify-start gap-3 pt-5'>
                <a href='https://www.linkedin.com/in/georgian-tudor/' target='_blank'><img src={linkedin} alt='linkedin' className='w-[45px]' /></a>                  
                <a href='https://www.github.com' target='_blank' ><img src={github2} alt='github' className='w-[44px]' /></a>      
            </div>
          </div> 
          </div>
    </div>
  )
}

export default FirstSection