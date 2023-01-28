import React from 'react'
import { TitleText, TypingText } from './CustomText';

const EducationalJourney = () => {
  return (
      <>
        <TitleText title='Educational Journey' textStyles={'font-bold text-[40px] mt-14 text-center'} />
        <ol className="relative border-l border-sky-400 dark:border-sky-400 w-[60%] m-auto mt-10 mb-20">                  
    <li className="mb-10 ml-4">
            <div id='education' className="animate-ping absolute w-3 h-3 bg-sky-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-sky-400 dark:bg-sky-400"></div>
            <div id='education' className="absolute w-3 h-3 bg-sky-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-sky-400 dark:bg-sky-400"></div>
        <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">July 2018</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white"></h3>
        <p className="mb-4 text-xl font-normal text-gray-500 dark:text-gray-400">Finished highschool in Mathematics-Informatics profile</p>
        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg class="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a> */}
    </li>
    <li className="mb-10 ml-4">
            <div className="animate-ping absolute w-3 h-3 bg-sky-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-sky-400 dark:bg-sky-400"></div>
            <div className=" absolute w-3 h-3 bg-sky-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-sky-400 dark:bg-sky-400"></div>
        <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">July 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white"></h3>
        <p className="text-xl font-normal text-gray-500 dark:text-gray-400">Get my degree in Computer Science</p>
    </li>
    <li className="ml-4">
            <div className="animate-ping absolute w-3 h-3 bg-sky-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-sky-400 dark:bg-sky-400"></div>
            <div className=" absolute w-3 h-3 bg-sky-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-sky-400 dark:bg-sky-400"></div>
        <time className="mb-1 text-lg font-normal leading-none text-gray-400 dark:text-gray-500">Aug 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white"></h3>
        <p className="text-xl font-normal text-gray-500 dark:text-gray-400">Start self learning Web Develoment</p>
    </li>
        </ol>
      </>
  )
}

export default EducationalJourney