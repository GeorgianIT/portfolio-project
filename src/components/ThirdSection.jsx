import React from 'react'
import Project from './Project'
import myData from '../constants/projects.json'
import { useEffect, useState } from 'react'
import Filter from './Filter'
import SidebarProjects from './SidebarProjects'


const ThirdSection = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setAllProjects(myData);
    setFiltered(myData);
  }
  

  return ( 
    <div id='projects' className='flex relative flex-row items-center bg-black h-auto'>
      <div className=' absolute top-0 left-0  h-[100%]'>
        <SidebarProjects />
      </div>
      <div className='flex flex-col items-center bg-black h-auto m-auto'>
      <p className='text-[40px] text-white font-bold mt-14 mb-14'>Projects </p>
      <Filter setActiveCategory={setActiveCategory} activeCategory={activeCategory} setFiltered={setFiltered} allProjects={allProjects} />
      <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-col gap-10 w-auto w-auto mx-40 mb-20'>
        {filtered.map((data) => { return <Project key={data.unicKey} data={data} /> })}
      </div>
      </div>
      </div>

  )
  
}

export default ThirdSection