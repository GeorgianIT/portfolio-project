import React from 'react'
import { motion } from "framer-motion"

const Project = ({ data }) => {

  return (
    <motion.div layout
    initial={{ transform: "scale(0)" }}
    animate={{ transform: "scale(1)" }}
    exit={{ transform: "scale(0)" }}
    transition={{ duration: 0.5 }} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:rounded-xl hover:shadow-black/30">
      <div className="lg:h-96 lg:w-72 h-auto w-auto">
        <img className="h-full w-full rounded-xl object-cover transition-transform duration-500  group-hover:scale-125" src={require(`../assets/${data.image}`)} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif lg:text-3xl text-xl font-bold text-white">{data.title}</h1>
        <button href='#' onClick={eval(data.fetch)} className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See Project</button>
      </div>
    </motion.div>
  )
}

const fetchASCN = () => {
  // using Java Script method to get PDF file
  fetch('Project_ASCN.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Project_ASCN.pdf';
          alink.click();
      })
  })
}
const fetchFPLA = () => {
  // using Java Script method to get PDF file
  fetch('FPLA.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'FPLA.pdf';
          alink.click();
      })
  })
}

const fetchInsulin = () => {
  // using Java Script method to get PDF file
  fetch('Insulin_regulator.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Project_ASCN.pdf';
          alink.click();
      })
  })
}

const fetchCodeConverter = () => {
  // using Java Script method to get PDF file
  fetch('Code_Converter.pdf').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = 'Code_Converter.pdf';
          alink.click();
      })
  })
}
export default Project