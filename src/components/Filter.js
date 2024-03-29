import React from 'react'
import { useEffect} from 'react'
import {motion} from "framer-motion"

function Filter({ setActiveCategory, activeCategory, setFiltered, setfilteredPDF, allProjects, allPDFProjects })
{
    useEffect(() => {
        if (activeCategory === 0) {
          setFiltered(allProjects);
          setfilteredPDF(allPDFProjects)
          return;
        }
      const filtered = allProjects.filter((data) =>
        data.id === (activeCategory)
      );
      setFiltered(filtered); 
      const filteredPDF = allPDFProjects.filter((data) =>
        data.id === (activeCategory)
      );
      setfilteredPDF(filteredPDF);
    }, [activeCategory]);

  return (
    <motion.div layout
    className='text-black mb-20 flex justify-between lg:gap-6 md:gap-4 gap-2 lg:text-[15px] md:text-[13px] text-xs text-center'>
        <button onClick={() => setActiveCategory(0)} className={`p-2 lg:w-28 w-20 text-black rounded-2xl font-bold hover:scale-[110%] transform transition duration-300 ${activeCategory === 0 ? "bg-[rgb(65,98,168)]" : "bg-white"}`}>All</button>
        <button onClick={() => setActiveCategory(4)} className={`p-2 lg:w-28 w-20 text-black rounded-2xl font-bold hover:scale-[110%] transform transition duration-300 ${activeCategory === 4 ? "bg-[rgb(65,98,168)]" : "bg-white"}`}>Full Stack</button>
        <button onClick={() => setActiveCategory(5)} className={`p-2 lg:w-28 w-20 text-black rounded-2xl font-bold hover:scale-[110%] transform transition duration-300 ${activeCategory === 5 ? "bg-[rgb(65,98,168)]" : "bg-white" }`}>Frontend</button>
        <button onClick={() => setActiveCategory(1)} className={`p-2 lg:w-28 w-20 text-black rounded-2xl font-bold hover:scale-[110%] transform transition duration-300 ${activeCategory === 1 ? "bg-[rgb(65,98,168)]" : "bg-white" }`}>React</button>
        {/* <button onClick={() => setActiveCategory(2)} className={`p-2 lg:w-28 w-20 text-black rounded-2xl font-bold ${activeCategory === 2 ? "bg-[rgb(65,98,168)]" : "bg-white" }`}>JavaScript</button> */}
        <button onClick={() => setActiveCategory(3)} className={`p-2 lg:w-28 w-20 text-black rounded-2xl font-bold hover:scale-[110%] transform transition duration-300 ${activeCategory === 3 ? "bg-[rgb(65,98,168)]" : "bg-white" }`}>College Projects</button>
    </motion.div>
  )
}

export default Filter