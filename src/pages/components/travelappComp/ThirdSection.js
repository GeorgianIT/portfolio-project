import React from 'react'
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import {storage} from './firebase'
import { v4 } from "uuid";
import './gallery.css';
import CloseIcon from '@mui/icons-material/Close';

const ThirdSection = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState('');

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

  const getImg = (url) => {
    setTempimgSrc(url);
    setModel(true);
  }

  return (
    <div className='bg-black'>
      <input className='bg-white'
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile} className='bg-white'> Upload Image</button>

      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)} /> 
      </div>

      <div className='gallery'>
        {imageUrls.map((url, index) => {
          return (
            <div className='pics' key={index} onClick={() => getImg(url)}>
              <img src={url} style={{width: '100%'}} />
            </div>
          )
      })}
      </div>
    </div>
  );
}
export default ThirdSection