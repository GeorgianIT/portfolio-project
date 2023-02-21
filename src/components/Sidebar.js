import React from 'react'
import { useState } from 'react'
import { navLinks } from "../constants/index"
import { Sling as Hamburger } from 'hamburger-react'


const Sidebar = () => {
    const [isActive, setIsActive] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <>
        
  {showSidebar ? (
    <button
      className="flex text-4xl text-white items-center cursor-pointer fixed lg:right-8 lg:top-6 right-2 top-2 z-50 text-[40px]"
      onClick={() => setShowSidebar(!showSidebar)}>
    <Hamburger color='white' direction='right'/>
    </button>
  ) : (
    <button
      onClick={() => setShowSidebar(!showSidebar)}
      className="fixed z-30 flex items-center cursor-pointer lg:right-8 lg:top-6 right-2 top-2"
      viewBox="0 0 100 80"
      width="40"
      height="40"
    >
      <Hamburger color='grey'/>
    </button>
  )}
    <div className={`top-0 right-0 w-full bg-gradient-to-l from-neutral-900 to-transparent p-10 pl-20 text-white fixed h-full z-40 ${showSidebar ? "translate-x-0 " : "translate-x-full"} ease-in-out duration-300`}>
                <ul className='list-none flex flex-col justify-end place-items-end lg:mr-12 mr-4 mt-20 flex-1 ;'>
            {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-normal cursor-pointer lg:text-[35px] text-[25px] ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'} text-white`}>
                <a href={`${nav.link}`} className={`flex cursor-pointer active:text-slate-500 ${isActive === index ? 'font-bold' : 'text-white'}`} onClick={() => setIsActive(index)}>{nav.title}</a>
              </li>))}
        </ul>
  </div>
</>
  )
}

export default Sidebar