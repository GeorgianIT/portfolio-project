import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { color } from '@mui/system';


const BackButton = () => {
    return (
      <div className='absolute mt-4 ml-2 z-50'>
        <Link to='/portfolio-project/'>
          <button><ArrowBackIcon style={{ color: 'white', width: '40px', height: '40px' }}/></button>
        </Link>
    </div>
  )
}

export default BackButton