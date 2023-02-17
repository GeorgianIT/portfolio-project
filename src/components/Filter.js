import React from 'react'
import { useEffect, useState } from 'react'
import {motion} from "framer-motion"

function Filter({ setActiveCategory, activeCategory, setFiltered, allProjects })
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

  return (
    <motion.div layout
    className='text-black mb-20 flex justify-between lg:gap-6 gap-2 lg:text-md text-xs'>
        <button onClick={() => setActiveCategory(0)} className={` p-[1rem] lg:w-28 w-20 bg-white text-black rounded-2xl font-bold ${activeCategory === 0 ? "bg-[rgb(65,98,168)]" : "" }`}>All</button>
        <button onClick={() => setActiveCategory(1)} className={` p-[1rem] lg:w-28 w-20 bg-white text-black rounded-2xl font-bold ${activeCategory === 1 ? "bg-[rgb(65,98,168)]" : "" }`}>React</button>
        <button onClick={() => setActiveCategory(2)} className={` p-[1rem] lg:w-28 w-20 bg-white text-black rounded-2xl font-bold ${activeCategory === 2 ? "bg-[rgb(65,98,168)]" : "" }`}>JavaScript</button>
        <button onClick={() => setActiveCategory(3)} className={` p-[1rem] lg:w-28 w-20 bg-white text-black rounded-2xl font-bold ${activeCategory === 3 ? "bg-[rgb(65,98,168)]" : "" }`}>College Projects</button>
    </motion.div>
  )
}

export default Filter