import React from 'react'
import { useEffect, useState} from 'react'
import { motion } from "framer-motion"
import { Sling as Hamburger } from 'hamburger-react'

function MovieFilter({ setActiveCategory, activeCategory, setFiltered, allProjects})
{
    useEffect(() => {
        if (activeCategory === 0) {
          setFiltered(allProjects);
          return;
        }
      const filtered = allProjects.filter((data) =>
        data.id === (activeCategory)
      );
      setFiltered(filtered); 
    }, [activeCategory]);
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
      <Hamburger color='white'/>
    </button>
  )}
           <div className={`top-0 right-0 w-full bg-gradient-to-l from-neutral-900 to-transparent p-10 pl-20 text-white fixed h-full z-40 ${showSidebar ? "translate-x-0 " : "translate-x-full"} ease-in-out duration-300`}>
                <ul className='list-none flex flex-col justify-end place-items-end lg:mr-12 mr-4 mt-20 flex-1 ;'>
                    <a onClick={() => setActiveCategory(0)} className={`text-[30px] ${activeCategory === 0 ? "font-bold" : "" }`}>All</a>
                    <a onClick={() => setActiveCategory(1)} className={`text-[30px] ${activeCategory === 1 ? "font-bold" : "" }`}>Action</a>
                    <a onClick={() => setActiveCategory(2)} className={`text-[30px] ${activeCategory === 2 ? "font-bold" : "" }`}>Science Fiction</a>
                    <a onClick={() => setActiveCategory(3)} className={`text-[30px] ${activeCategory === 3 ? "font-bold" : "" }`}>Adventure</a>
        </ul>
  </div>
</>
  )   
}

export default MovieFilter