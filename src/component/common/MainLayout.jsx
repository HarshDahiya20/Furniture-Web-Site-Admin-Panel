import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

export default function MainLayout() {
  return (
    <div className='grid grid-cols-[17%_auto] '>
        <SideBar/>
        <div>
           <Header/>
           <Outlet/>
           <Footer/>
        </div>
    </div>
  )
}
