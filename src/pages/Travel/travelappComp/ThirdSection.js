import React from 'react'
import { useState, useEffect } from "react";
import {ref,uploadBytes,getDownloadURL,listAll,list,} from "firebase/storage";
import {storage} from './firebase'
import { v4 } from "uuid";
import './gallery.css';
import CloseIcon from '@mui/icons-material/Close';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const ThirdSection = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState('');
  const [current, setCurrent] = useState(0);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };


  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  const getImg = (url, index) => {
    setTempimgSrc(url);
    setCurrent(index);
    setModel(true);
  }

  return (
    <div className='bg-black pt-10'>
      <p className='text-white text-center pb-5 lg:text-xl text-sm'>You can upload your own photo to our database right below</p>
      <div className='flex m-auto justify-items-center lg:w-[30%] md:w-[70%] w-[100%] pb-20'>
          <input className='bg-white m-auto'
            type="file"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
          <button onClick={uploadFile} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"> Upload Image</button>
      </div>
       <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <CloseIcon className='close' onClick={() => setModel(false)} /> 
        {/* <NavigateBeforeIcon className='before'/>
        <NavigateNextIcon className='next'/> */}
      </div>

      <div className='gallery'>
        {imageUrls.map((url, index) => {
          return (
            <div className='pics' key={index} onClick={() => getImg(url, index)}>
              <img src={url} style={{width: '100%'}} />
            </div>
          )
      })}
      </div>
    </div>
  );
}
export default ThirdSection