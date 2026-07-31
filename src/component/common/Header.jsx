import React, { useState } from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { FaBars } from "react-icons/fa6";
import { IoMdSettings } from 'react-icons/io'
import { MdDashboard } from 'react-icons/md'
import { Link } from 'react-router';


export default function Header() {

  const [open, setopen] = useState(false)

  return (
    <>
      <div className='py-3 px-6 w-full border-b-2 border-[#ccc] flex justify-between items-center'>
          <div className='flex items-center'>
              <span className='text-xl text-gray-400'><FaBars /></span>
              <h2 className='text-xl font-semibold ms-4 text-gray-500'>Dashboard</h2>
          </div>
          <div className='w-[50px] h-[50px] rounded-[50%] overflow-hidden'>
            <img className='hover:cursor-pointer' onClick={() => setopen(!open)} src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" alt=""  />
            
            {open && <div className='fixed z-9 bg-white border-2  px-7 mt-3 py-6 rounded-b-2xl rounded-tl-2xl uppercase hover:cursor-pointer text-[16px] font-normal -translate-x-25  leading-7 ' onClick={()=>setopen(false)}>
              <ul>
                <li className='flex items-center rounded  hover:text-blue-500 gap-2 items-center'>  <MdDashboard /> <Link to={'/profile'}> Profile  </Link> </li>
                  <hr/>
                <li className='flex items-center  rounded hover:text-blue-500 gap-2'> <IoMdSettings /> <Link to={'/componyprofile'}> Compony  </Link> </li>
                <hr/>
                <li className='flex items-center  rounded  hover:text-blue-500 gap-2'> <FaUserCircle/> <Link to={'/'} >Logout</Link> </li>
              </ul>
            </div>}

            
          </div>
      </div>
    </>

  )
}
