import React from 'react'
import {close, menu} from '../assets'
import { navLinks } from "../constants/index"
import {useState} from 'react'

const Menu = () => {
    const [toggle, settoggle] = useState(false)
    return (<nav className='bg-black w-full h-[20%px]'>
      {/* Middle Pc*/}  
    <div className='flex justify-end pt-8 pr-4'>
      <img src={toggle ? close : menu} alt='menu' className='w-[40px] h-[40px] object-contain' onClick={() => settoggle((prev) => !prev)} />
    </div> 
    <div className={`${toggle ? 'flex' : 'hidden'} p-5 bg-black absolute top-20 right-0 mx-2 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex flex-col justify-end items-center flex-1 ;'>
            {navLinks.map((nav,index) => (
            <li key={nav.id} className={`font-normal cursor-pointer  text-[20px] ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'} text-white`}>
                 <a href={process.env.PUBLIC_URL + `${nav.link}`}>{nav.title}</a>
            </li>))}
        </ul>
    </div>
</nav>
  )
}

export default Menu