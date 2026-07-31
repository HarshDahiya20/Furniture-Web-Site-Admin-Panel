import React, { useState } from 'react'
import { Link } from 'react-router'
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import { FaRegCircleDot } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { MdColorLens } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { FaShoppingBag } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { MdOutlineBorderColor } from "react-icons/md";
import { FaSliders } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";
import { FcFaq } from "react-icons/fc";
import { IoDocumentText } from "react-icons/io5";


export default function SideBar() {

   let [faq,setFaq] = useState(0)

  return (
    <div className='sticky top-0 left-0 h-screen overflow-y-scroll bg-[#1F2937] px-3 py-4'>
      <div  className='flex justify-center border-b-[1px] border-[#ccc] h-[100px]'>
           <img src="/ChatGPT Image Jun 13, 2026, 06_18_56 PM.png" alt=""  width="200" />
      </div>
      <ul className='text-white pt-5'>

        <Link to="/dashboard">
          <li className='p-2 mb-4 flex items-center gap-3 font-semibold hover:bg-gray-700 rounded-[10px]'> <span className='text-xl'><MdDashboard /></span>  Dashboard</li>
        </Link>

        <div>
            <li onClick={()=> setFaq(1==faq? 0:1)} className='p-2 flex items-center gap-3 font-semibold hover:bg-gray-700 rounded-[10px] relative'> <span className='text-md'><FaUser /></span>  Users <span className='absolute right-4 text-gray-400'>{1==faq ? <FaAngleUp /> : <FaAngleDown /> }</span></li>

            <div className={`${1==faq ? '' : 'hidden' }`}>
              <Link to="/user">
                <li className='p-2  flex items-center gap-3 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span>  View User</li>
              </Link>
            </div>
        </div>

        <div>
            <li onClick={()=> setFaq(2==faq? 0:2)} className='p-2 mt-4 flex items-center gap-3 font-semibold hover:bg-gray-700 rounded-[10px] relative'> <span className='text-md'><FaMessage /></span>  Enquirys <span className='absolute right-4 text-gray-400'>{2==faq ? <FaAngleUp /> : <FaAngleDown /> }</span></li>

            <div className={`${2==faq ? '' : 'hidden' }`}>
              <Link to="enquiry/contact">
                <li className='p-2  flex items-center gap-3 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span>  Contact Enquirys</li>
              </Link>

              <Link to="enquiry/newsletter">
                <li className='p-2  flex items-center gap-3 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span>  Newsletters</li>
              </Link>
            </div>
        </div>
          
        <div>
            <li onClick={()=> setFaq(3==faq? 0:3)} className='p-2 mt-4 flex items-center gap-2 font-semibold hover:bg-gray-700 rounded-[10px] relative'> <span className='text-xl'><MdColorLens /></span>  Colors <span className='absolute right-4 text-gray-400'>{3==faq ? <FaAngleUp /> : <FaAngleDown /> }</span></li>

            <div className={`${3==faq ? '' : 'hidden' }`}>
              <Link to="color/add">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span>  Add Color</li>
              </Link>

              <Link to="color/view">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span>  View Color</li>
              </Link>
            </div>
        </div>  

        <div>
            <li onClick={()=> setFaq(4==faq? 0:4)} className='p-2 mt-4 flex items-center gap-2 font-semibold hover:bg-gray-700 rounded-[10px] relative'> <span className='text-md'><SiMaterialdesignicons /></span>  Materials <span className='absolute right-4 text-gray-400'>{4==faq ? <FaAngleUp /> : <FaAngleDown /> }</span></li>

            <div className={`${4==faq ? '' : 'hidden' }`}>
              <Link to="material/add">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span>  Add Material</li>
              </Link>

              <Link to="material/view">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span>  View Material</li>
              </Link>
            </div>
        </div>  

        <div>
            <li onClick={()=> setFaq(5==faq? 0:5)} className='p-2 mt-4 flex items-center gap-2 font-semibold hover:bg-gray-700 rounded-[10px] relative'> <span className='text-md'><HiMiniBars3CenterLeft /></span>  Parent Categorys<span className='absolute right-4 text-gray-400'>{5==faq ? <FaAngleUp /> : <FaAngleDown /> }</span></li>

            <div className={`${5==faq ? '' : 'hidden' }`}>
              <Link to="category/add">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span>  Add Category</li>
              </Link>

              <Link to="category/view ">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span>  View Category</li>
              </Link>
            </div>
        </div> 

        <div>
            <li onClick={()=> setFaq(6==faq? 0:6)} className='p-2 mt-4 flex items-center gap-2 font-semibold hover:bg-gray-700 rounded-[10px] relative'> <span className='text-md'><HiMiniBars3CenterLeft /></span>  Sub Categorys<span className='absolute right-4 text-gray-400'>{6==faq ? <FaAngleUp /> : <FaAngleDown /> }</span></li>

            <div className={`${6==faq ? '' : 'hidden' }`}>
              <Link to="sub-category/add">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span>  Add Sub Categorys</li>
              </Link>

              <Link to="sub-category/view">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span>  View Sub Categorys</li>
              </Link>
            </div>
        </div> 

        <div>
            <li onClick={()=> setFaq(7==faq? 0:7)} className='p-2 mt-4 flex items-center gap-2 font-semibold hover:bg-gray-700 rounded-[10px] relative'> <span className='text-md'><HiMiniBars3CenterLeft /></span>  Sub Sub Categorys<span className='absolute right-4 text-gray-400'>{7==faq ? <FaAngleUp /> : <FaAngleDown /> }</span></li>

            <div className={`${7==faq ? '' : 'hidden' }`}>
              <Link to="sub-sub-category/add">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span> Add Sub Sub Category</li>
              </Link>

              <Link to="sub-sub-category/view">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span> View Sub Sub Category</li>
              </Link>
            </div>
        </div> 

        <div>
            <li onClick={()=> setFaq(9==faq? 0:9)} className='p-2 mt-4 flex items-center gap-2 font-semibold hover:bg-gray-700 rounded-[10px] relative'> <span className='text-md'><FaShoppingBag /></span> Products<span className='absolute right-4 text-gray-400'>{9==faq ? <FaAngleUp /> : <FaAngleDown /> }</span></li>

            <div className={`${9==faq ? '' : 'hidden' }`}>
              <Link to="product/add">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span> Add Products</li>
              </Link>

              <Link to="product/view">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span> View Products</li>
              </Link>
            </div>
        </div> 

        <div>
            <li onClick={()=> setFaq(10==faq? 0:10)} className='p-2 mt-4 flex items-center gap-2 font-semibold hover:bg-gray-700 rounded-[10px] relative'> <span className='text-md'><FaClockRotateLeft /></span> Why Choose Us<span className='absolute right-4 text-gray-400'>{10==faq ? <FaAngleUp /> : <FaAngleDown /> }</span></li>

            <div className={`${10==faq ? '' : 'hidden' }`}>
              <Link to="why-choose-us/add">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span> Add Why Choose Us</li>
              </Link>

              <Link to="why-choose-us/view">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span> View Why Choose Us</li>
              </Link>
            </div>
        </div> 

        <div>
            <li onClick={()=> setFaq(11==faq? 0:11)} className='p-2 mt-4 flex items-center gap-2 font-semibold hover:bg-gray-700 rounded-[10px] relative'> <span className='text-md'><MdOutlineBorderColor /></span> Orders<span className='absolute right-4 text-gray-400'>{11==faq ? <FaAngleUp /> : <FaAngleDown /> }</span></li>

            <div className={`${11==faq ? '' : 'hidden' }`}>
              <Link to="orders/orders">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span> Orders</li>
              </Link>
            </div>
        </div> 

        <div>
            <li onClick={()=> setFaq(12==faq? 0:12)} className='p-2 mt-4 flex items-center gap-2 font-semibold hover:bg-gray-700 rounded-[10px] relative'> <span className='text-md'><FaSliders /></span> Sliders<span className='absolute right-4 text-gray-400'>{12==faq ? <FaAngleUp /> : <FaAngleDown /> }</span></li>

            <div className={`${12==faq ? '' : 'hidden' }`}>
              <Link to="slider/add">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span> Add Sliders</li>
              </Link>

              <Link to="slider/view">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span> View Sliders</li>
              </Link>
            </div>
        </div>

        <div>
            <li onClick={()=> setFaq(13==faq? 0:13)} className='p-2 mt-4 flex items-center gap-2 font-semibold hover:bg-gray-700 rounded-[10px] relative'> <span className='text-md'><IoIosSend /></span> Country<span className='absolute right-4 text-gray-400'>{13==faq ? <FaAngleUp /> : <FaAngleDown /> }</span></li>

            <div className={`${13==faq ? '' : 'hidden' }`}>
              <Link to="country/add">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span> Add Country</li>
              </Link>

              <Link to="country/view">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span> View Country</li>
              </Link>
            </div>
        </div>

        <div>
            <li onClick={()=> setFaq(14==faq? 0:14)} className='p-2 mt-4 flex items-center gap-2 font-semibold hover:bg-gray-700 rounded-[10px] relative'> <span className='text-md'><FaUserEdit /></span> Testimonials<span className='absolute right-4 text-gray-400'>{14==faq ? <FaAngleUp /> : <FaAngleDown /> }</span></li>

            <div className={`${14==faq ? '' : 'hidden' }`}>
              <Link to="testimonial/add">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span> Add Testimonials</li>
              </Link>

              <Link to="testimonial/view">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span> View Testimonials</li>
              </Link>
            </div>
        </div>
        
        <div>
            <li onClick={()=> setFaq(15==faq? 0:15)} className='p-2 mt-4 flex items-center gap-2 font-semibold hover:bg-gray-700 rounded-[10px] relative'> <span className='text-xl'><FcFaq /></span> Faqs<span className='absolute right-4 text-gray-400'>{15==faq ? <FaAngleUp /> : <FaAngleDown /> }</span></li>

            <div className={`${15==faq ? '' : 'hidden' }`}>
              <Link to="faqs/add">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span> Add Faq</li>
              </Link>

              <Link to="faqs/view">
                <li className='p-2  flex items-center gap-2 font-semibold  hover:bg-gray-700 rounded-[10px]'> <span className='text-sm text-gray-400'><FaRegCircleDot /></span> View Faq</li>
              </Link>
            </div>
        </div>

         <div>
            <li onClick={()=> setFaq(16==faq? 0:16)} className='p-2 mt-4 flex items-center gap-2 font-semibold hover:bg-gray-700 rounded-[10px] relative '> <span className='text-xl'><IoDocumentText /></span> Terms & Conditions<span className='absolute right-4 text-gray-400'>{16==faq ? <FaAngleUp /> : <FaAngleDown /> }</span></li>

        </div>
        
      </ul>
        
    </div>
  )
}
