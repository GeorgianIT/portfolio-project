import React from 'react'
import Heart from '../icons/Heart'
// import Post from '../icons/Post'
import Comment from '../icons/Comment'
import { useState, useEffect } from 'react'
import FullScreen from '../icons/FullScreen'
import FullScreenClosed from '../icons/FullScreenClosed'
import { useComments } from "@commont/react";
import { AddComment } from "./AddComment";
import './wsp-gallery.css'

const ImagesBeta = ({ data ,isClicked, setIsClicked  }) => {

    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = () => {
    setOpenModal(true)
  }
  const handleCloseModal = () => {
    setOpenModal(false)
  }

    return (
      <>
    <div>

          {openModal &&
                    <div className='sliderWrap'>
                        <button className={` mt-20 ml-4 absolute`}onClick={() => {
                                handleCloseModal();
                                setIsClicked(!isClicked);
                            }}><FullScreen /></button>
                  <div className='fullScreenImage'>
                            <img src={require(`../assetsTravelApp/${data.image}`)} alt='' />
                  </div>
              </div>}
    </div>
    {/* <div  className={`pt-28 ${isClicked ? "w-[600px] h-[400px] scale-150 transition-transform transition duration-350 ease-in-out visible" : "h-96 w-72"}`}> */}
    <div  className={`pt-28 h-96 w-72 `}>
        <div className="h-96 w-72">
            <div className='flex group/item w-full h-full'>
                  <button className={`invisible group-hover/item:visible mt-2 ml-[255px] absolute`}
                            onClick={() => {
                                handleOpenModal();
                                setIsClicked(!isClicked);
                            }}>
                    <FullScreen />
                </button>
                <img id='image' className='w-auto h-auto object-cover' src={require(`../assetsTravelApp/${data.image}`)} draggable='false' />
            </div>
        </div>
    </div>
    </>        
  )
}

export default ImagesBeta