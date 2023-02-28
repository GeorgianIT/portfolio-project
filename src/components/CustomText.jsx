'use client';
import {motion} from 'framer-motion';
import {textContainer, textVariant2} from '../util/motion';

export const TypingText = ({ title , textStyles}) => (
  <motion.p
  variants = {textContainer}
  className ={`font-normal lg:text-[30px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span
      variants={textVariant2} key={index}
      >
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({title, textStyles}) => (
  <motion.h2
  variants={textVariant2}
  initial = 'hidden'
  whileInView='show'
  className={` text-[20px] ${textStyles}`}
  >
    {title}
  </motion.h2>
);

export const TitleHover = ({title, textStyles}) => (
  <motion.h2
  variants={textVariant2}
  initial = 'hidden'
  whileHover='show'
  className={`md:text-[64px] text-[50px] ${textStyles}`}
  >
    {title}
  </motion.h2>
);