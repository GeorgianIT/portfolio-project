import React from 'react'
import moviesData from '../constants/movies.json'
import { useEffect, useState } from 'react'
import MovieFilter from './MovieFilter'
import Movie from './Movie'

const HomePage = () => {

  const [allProjects, setAllProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setAllProjects(moviesData);
    setFiltered(moviesData);
  }

  

  return ( 
    <div id='projects' className='flex relative lg:flex-row flex-col items-center bg-black h-auto'>
      <div className='flex flex-col items-center bg-black h-auto m-auto'>
        <MovieFilter setActiveCategory={setActiveCategory} activeCategory={activeCategory} setFiltered={setFiltered} allProjects={allProjects} />
      <div  className='grid grid-cols-3 gap-0 flex-col w-[99%]'>
          {filtered.map((data) => {
            return<Movie key={data.unicKey} data={data} />
          })}
      </div>
        </div>
    </div>

  )
  
}

export default HomePage