import React from 'react'
import { Link } from 'react-router'
import { FaFilter } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

export default function ViewUser() {
  return (
    <div>
      <div className='w-full min-h-[610px]'>
        <p className='px-6 py-3 border-b-2 border-[#ccc] w-full font-semibold text-gray-700'>
          <Link to="/dashboard" className='hover:text-blue-500'>Home</Link>  /
          <Link to=" " className='hover:text-blue-500'> User</Link> /
          <span className='text-gray-600'> View</span>
        </p>

        <div className='max-w-[1220px] mx-auto py-5  '>
          <div className='w-full py-3 px-4 bg-slate-100 rounded-t-md border-1 border-slate-400 flex justify-between items-center'>
            <h2 className='text-2xl font-semibold'>View User</h2>

            <div className='flex items-center gap-3'>
              <div className='w-[40px] h-[40px] rounded-[8px] bg-blue-600 hover:bg-blue-700 cursor-pointer text-white flex justify-center items-center'>
                <FaFilter />
              </div>
              <button className='text-white rounded-[8px] py-2 px-4 bg-green-600 hover:bg-green-700 cursor-pointer '>Change Status</button>
              <button className='text-white rounded-[8px] py-2 px-4 bg-red-600 hover:bg-red-700 cursor-pointer '>Delete</button>
            </div>
          </div>

          <table className='w-full'>
              <thead className='w-full bg-[#374151] text-left uppercase'>
                  <tr className=' text-sm font-normal text-gray-400'>
                    <th scope='col' className='p-4 w-[3%] '>
                      <input type='checkbox' className='bg-white w-4 h-4' />
                    </th>
                    
                    <th scope='col' className='px-6 py-3 '> name</th>
                    <th scope='col' className='w-[15%]  ps-2'>email id</th>
                    
                    <th scope='col' className='w-[15%]  ps-2'>Mobile Number</th>
                    <th scope='col' className='w-[11%]  ps-2'>Status</th>
                    <th scope='col' className='w-[6%]  ps-2' >Action</th>
                  </tr>
              </thead>
              <tbody>
                  <tr className='bg-gray-800 hover:bg-gray-600 text-left text-gray-400 '>
                    <th scope='col' className='p-4  '>
                      <input type='checkbox' className='bg-white w-4 h-4' />
                    </th>
                    
                    <th scope='col' className='px-6 py-3 text-white'> Neil Sims</th>
                    <th scope='col' className='  ps-2'>xyz@gmail.com</th>
                    
                    <th scope='col' className='  ps-2'>9876543210</th>
                    <th scope='col' className='  ps-2'>
                      <button className='text-white bg-green-600 py-1 px-3 rounded-[5px] font-semibold'>Active</button>
                    </th>
                    <th scope='col' className='  ps-2 text-center text-white font-semibold' >
                      <button className='text-white p-3 rounded-[50%] bg-blue-500'><FaPen /></button>
                    </th>
                  </tr>

                  <tr className='bg-gray-800 hover:bg-gray-600 text-left text-gray-400'>
                    <th scope='col' className='p-4  '>
                      <input type='checkbox' className='bg-white w-4 h-4' />
                    </th>
                    
                    <th scope='col' className='px-6 py-3 text-white'> Neil Sims</th>
                    <th scope='col' className='  ps-2'>xyz@gmail.com</th>
                    
                    <th scope='col' className='  ps-2'>9876543210</th>
                    <th scope='col' className='  ps-2'>
                      <button className='text-white bg-red-500 py-1 px-3 rounded-[5px] font-semibold'>Deactive</button>
                    </th>
                    <th scope='col' className='  ps-2 text-center text-white font-semibold' >
                      <button className='text-white p-3 rounded-[50%] bg-blue-500'><FaPen /></button>
                    </th>
                  </tr>
              </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}
