import React from 'react'
import { react, javascript, tailwind } from '../assets'
import { TitleHover, TitleText, TypingText } from './CustomText';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer } from '../util/motion';


const Tehnologies = () => {
  return (
    <div id='tehnologies' className=''>
      <div className='w-[70%] m-auto'>
        <TitleText title='Favorite tehnologies' textStyles={'font-bold text-[40px] mt-14 text-center'} />
          <motion.div
                      variants={staggerContainer}
                      initial='hidden'
                      whileInView='show'
                  viewport={{once:false, amount:0.25}}
                  className='flex flex-col lg:flex-row justify-center mt-14 gap-20'>
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