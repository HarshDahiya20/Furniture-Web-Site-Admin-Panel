import React from 'react'

export default function Footer() {
  return (
    <div className='p-4 flex justify-between items-center border-t-2 border-[#ccc]'>
        <p className='text-[14px]'>© 2026 <span className='hover:underline'>Monsta™</span> . All Rights Reserved.</p>
        <p className='hover:underline text-gray-600 text-[14px] font-semibold'>Design By <span className='text-blue-500'>Harsh</span></p>
    </div>
  )
}
