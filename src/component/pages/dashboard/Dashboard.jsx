import React from 'react'
import { Link } from 'react-router'
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";

export default function Dashboard() {
  return (
    <div className='w-full min-h-[610px]'>
        <p className='px-6 py-3 border-b-2 border-[#ccc] w-full font-semibold text-gray-700'> <Link to=" " className='hover:text-blue-500'>Home</Link>  / <Link to="/dashboard" className='hover:text-blue-500'>Dashboard</Link></p>

        <div className='max-w-[1220px] mx-auto py-5  '> 
            <div className='grid grid-cols-3 gap-5'>
                <div className='w-full h-48 p-5 rounded-md bg-[#5956D3]'>
                    <div className='flex justify-between text-white'>
                        <div className=''>
                          <h2 className='font-bold text-3xl'>26K <span className='text-[20px] font-bold'>(-12.4% ↓)</span> </h2>
                          <h4 className='mt-3 text-2xl font-semibold'>Users</h4>
                        </div>
                        <div className='text-xl mt-2'>
                          <PiDotsThreeOutlineVerticalFill />
                        </div>
                    </div>
                </div>

                <div className='w-full h-48 p-5 rounded-md bg-blue-500'>
                    <div className='flex justify-between text-white'>
                        <div className=''>
                          <h2 className='font-bold text-3xl'>$6,200  <span className='text-[20px] font-bold'>(40.9% ↑)</span> </h2>
                          <h4 className='mt-3 text-2xl font-semibold'>Product</h4>
                        </div>
                        <div className='text-xl mt-2'>
                          <PiDotsThreeOutlineVerticalFill />
                        </div>
                    </div>
                </div>

                <div className='w-full h-48 p-5 rounded-md bg-yellow-500'>
                    <div className='flex justify-between text-white'>
                        <div className=''>
                          <h2 className='font-bold text-3xl'>2.49%  <span className='text-[20px] font-bold'>(84.7% ↑)</span> </h2>
                          <h4 className='mt-3 text-2xl font-semibold'>Category</h4>
                        </div>
                        <div className='text-xl mt-2'>
                          <PiDotsThreeOutlineVerticalFill />
                        </div>
                    </div>
                </div>

                <div className='w-full h-48 p-5 rounded-md bg-red-400'>
                    <div className='flex justify-between text-white'>
                        <div className=''>
                          <h2 className='font-bold text-3xl'>44K  <span className='text-[20px] font-bold'>(-23.6% ↓)</span> </h2>
                          <h4 className='mt-3 text-2xl font-semibold'>Orders</h4>
                        </div>
                        <div className='text-xl mt-2'>
                          <PiDotsThreeOutlineVerticalFill />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
