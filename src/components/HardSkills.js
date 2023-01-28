import React from 'react'
import { TitleText, TypingText } from './CustomText';
import { Progress } from 'react-sweet-progress';

const HardSkills = () => {
  return (
      <>
      <TitleText title='Hard Skills' textStyles={'font-bold text-[40px] mt-14 text-center'} />
          <div className='py-10 w-[80%] m-auto flex flex-col gap-3'>
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
          </div>
      </>
  )
}

export default HardSkills