import React from 'react'
import { TitleText, TypingText } from './CustomText';
import { Progress } from 'react-sweet-progress';

const SoftSkills = () => {
    return (
        <div>
      <div>
    <TitleText title='Soft Skills' textStyles={'font-bold text-[40px] mt-20 text-center'} />
          <div className='m-auto flex justify-around hidden lg:flex py-14 w-[80%]'>
            <p className='w-[132px] text-center '>Attention to details</p>
            <p className='w-[132px] text-center'>Research</p>
          </div>
          <div className='m-auto flex justify-around hidden lg:flex w-[80%]'>
            <Progress type="circle" strokeWidth={5} percent={90}/>
            <Progress type="circle" strokeWidth={5} percent={85} />
          </div>
          <div className='m-auto flex justify-around hidden lg:flex py-10 w-[80%] gap-4'>
            <p className='w-[132px] text-center'>Fast Learner</p>
            <p className='w-[132px] text-center'>Problem Solving</p>
          </div>
          <div className='m-auto flex justify-around hidden w-[80%] lg:flex'>
            <Progress type="circle" strokeWidth={5} percent={80}/>
            <Progress type="circle" strokeWidth={5} percent={75} />
          </div>
        </div>
        <div className='flex flex-col lg:hidden block items-center text-center gap-7'>

            <p className='px-10 '>Attention to details</p>
            <Progress type="circle" className='' strokeWidth={5} percent={90}/>
            <p className='px-24'>Research</p>
            <Progress type="circle" className='' strokeWidth={5} percent={85}/>
            <p className='px-10 '>Attention to details</p>
            <Progress type="circle" className='' strokeWidth={5} percent={80}/>
            <p className='px-24 o'>Research</p>
            <Progress type="circle" className='' strokeWidth={5} percent={75}/>
        </div>
        </div>
  )
}

export default SoftSkills