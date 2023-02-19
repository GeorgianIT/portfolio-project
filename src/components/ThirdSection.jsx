import React from 'react'
import Project from './Project'
import myData from '../constants/projects.json'
import PDFData from '../constants/projectsPDF.json'
import { useEffect, useState } from 'react'
import Filter from './Filter'
import ProjectsPDF from './ProjectsPDF'


const ThirdSection = () => {
  const [allProjects, setAllProjects] = useState([]);
  const [allPDFProjects, setAllPDFProjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filteredPDF, setfilteredPDF] = useState([]);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setAllProjects(myData);
    setAllPDFProjects(PDFData);
    setFiltered(myData);
    setfilteredPDF(PDFData);
  }

  

  return ( 
    <div id='projects' className='flex relative lg:flex-row flex-col items-center bg-black h-auto'>
      <div className='flex flex-col items-center bg-black h-auto m-auto'>
      <p className='text-[40px] text-white text-center font-bold mt-14 mb-14'>Projects </p>
        <Filter setActiveCategory={setActiveCategory} activeCategory={activeCategory} setFiltered={setFiltered} setfilteredPDF={setfilteredPDF} allProjects={allProjects} allPDFProjects={allPDFProjects} />
      <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-col gap-10 w-auto w-auto mx-40 mb-20'>
          {filtered.map((data) => {
            return<Project key={data.unicKey} data={data} />
          })}
          {filteredPDF.map((data) => {
            return<ProjectsPDF key={data.unicKey} data={data} />
          })}
      </div>
        </div>
    </div>

  )
  
}

export default ThirdSection