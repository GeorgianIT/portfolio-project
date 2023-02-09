import React from 'react'
import { useState } from 'react'
import {projects} from '../constants/projects'
import { Sling as Hamburger } from 'hamburger-react'


const SidebarProjects = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <>
        
  {showSidebar ? (
    <button
      className="flex text-4xl text-white items-center cursor-pointer  left-10 top-6 z-50 text-[40px]"
      onClick={() => setShowSidebar(!showSidebar)}>
    <Hamburger color='grey' direction='left'/>
    </button>
  ) : (
    <button
      onClick={() => setShowSidebar(!showSidebar)}
      className=" z-30 flex items-center cursor-pointer left-10 top-6"
      viewBox="0 0 100 80"
      width="40"
      height="40"
    >
      <Hamburger color='grey'/>
    </button>
  )}
            <div className={` top-0 left-0 bg-gradient-to-r from-neutral-900 to-transparent z-40 w-full  text-white h-full ${showSidebar ? "translate-x-0 " : "-translate-x-full"} ease-in-out duration-300`}>
                <ul className='list-none flex flex-col justify-start place-items-start ml-20 mt-20 flex-1 ;'>
            {projects.map((nav, index) => (
                <li key={nav.title} className={`font-normal cursor-pointer text-[35px] ${index === nav.length -1 ? 'ml-0' : 'mb-4'} text-white`}>
                    {/* <button className='text-white' onClick={downloadPDF(nav.id)}>{nav.title}</button> */}
              </li>))}
                </ul>
                
  </div>
</>
  )
}

// const downloadPDF = (ID) => {
//     // using Java Script method to get PDF Fil
//   fetch("Proiect ASCN II 2021.pdf").then(response => {
//     if(ID === "home"){
//             response.blob().then(blob => {
//                 // Creating new object of PDF file
//                 const fileURL = window.URL.createObjectURL(blob);
//                 // Setting various property values
//                 let alink = document.createElement('a');
//                 alink.href = fileURL;
//                 alink.download = "Proiect ASCN II 2021.pdf";
//                 alink.click();
//         })}
//         })


//   fetch("CVGeorgian.pdf").then(response => {
//     if (ID === "about")
//     {
//         response.blob().then(blob => {
//             // Creating new object of PDF file
//             const fileURL = window.URL.createObjectURL(blob);
//             // Setting various property values
//             let alink = document.createElement('a');
//             alink.href = fileURL;
//             alink.download = "CVGeorgian.pdf";
//             alink.click();
//     })}
//     })

// }

export default SidebarProjects