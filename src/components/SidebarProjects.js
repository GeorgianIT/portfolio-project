import React from 'react'
import { useState } from 'react'
import {projects} from '../constants/projects'
import { Sling as Hamburger } from 'hamburger-react'
import {pdf} from '../assets/index'



const SidebarProjects = () => {
  const [showSidebar, setShowSidebar] = useState(false);
    return (
        <>
        
  {showSidebar ? (
    <button
      className="z-30 flex items-center cursor-pointer left-10 top-6 text-black text-4xl p-[1rem] w-auto bg-[rgb(65,98,168)] text-black rounded-2xl font-bold"
      onClick={() => setShowSidebar(!showSidebar)}>Close
    </button>
  ) : (
    <button
      onClick={() => setShowSidebar(!showSidebar)}
      className="z-30 flex items-center cursor-pointer left-10 top-6 text-black text-4xl p-[1rem] w-auto bg-white text-black rounded-2xl font-bold"
      viewBox="0 0 100 80"
      width="40"
      height="40"
            >College Projects
              <img src={pdf} />
    </button>
  )}
            <div className={` top-0 left-0 bg-gradient-to-r from-neutral-900 to-transparent z-40 w-full  text-white h-full ${showSidebar ? "translate-x-[0] " : "-translate-x-full"} ease-in-out duration-300`}>
                <ul className='list-none flex flex-col justify-start place-items-start ml-20 mt-20 flex-1 ;'>
            {projects.map((nav, index) => (
                <li key={nav.title} className={`font-normal cursor-pointer text-[35px] ${index === nav.length -1 ? 'ml-0' : 'mb-4'} text-white`}>
                <a href={nav.file} className='text-white' download={`${nav.title}.pdf`}  >{nav.title}</a>
              </li>))}
                </ul>
                
  </div>
</>
  )
}

export default SidebarProjects