import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import iziToast from "izitoast";


import { ToastContainer, toast } from 'react-toastify';

export default function AddMaterial() {

  let apiBaseUrl = import.meta.env.VITE_APIBASEURL

  let {id}=useParams()
   
  //  console.log(id);

  let [singledata,setSingleData] = useState([])
  
  let navigate=useNavigate()
  

  let handleSubmit=(e)=>{
    e.preventDefault()
    let obj = {
      name : e.target.name.value,
      order : e.target.order.value
    }
    // console.log(obj);

    let url = id ? `material/update/${id}` : 'material/add'
    let method = id ? 'put' : 'post'

    axios[method](`${apiBaseUrl}${url}`,obj)
    .then((res)=>res.data)
    .then((finalRes)=>{
      console.log(finalRes);

      if(finalRes._status){
        // iziToast.success({
        //     title: 'OK',
        //     message: 'Successfully inserted record!',
        // });
        toast.success(id ? 'material updated successfully!' : 'material added successfully!')
        setTimeout(()=>{
            navigate('/material/view')
        },2000)
        
      }
      else{
          // iziToast.error({
          //   title: "error",
          //   message:finalRes._message ,
          //   position: "topRight",
          // });
          toast.error(finalRes._message)
        }
      // console.log(finalRes._message.error[0]);
      
      
    })
    
  }


  let updateData=()=>{

    if(!id) return

    // axios.get(`${apiBaseUrl}color/single-data/${id}`)
    // .then((res)=>{
    //     console.log(res.data._data);
        
    //     setSingleData(res.data._data)
    // })   
      axios.get(`${apiBaseUrl}material/single-data/${id}`)
      .then((res) => {
        // console.log(res.data._data)

        setSingleData(res.data._data)

       
      })
      .catch((error) => {
        // console.log(error)
        toast.error("Failed to fetch material data")
      })


    
  }

  useEffect(()=>{
    updateData()
  },[id])
  return (
    <div>
      <ToastContainer />
      <div className='w-full min-h-[610px]'>
        <p className='px-6 py-3 border-b-2 border-[#ccc] w-full font-semibold text-gray-700'>
          <Link to="/dashboard" className='hover:text-blue-500'>Home</Link>  /
          <Link to=" " className='hover:text-blue-500'> Material</Link> /
          <span className='text-gray-600'> 
            {
              id ? 'Update' : 'Add'
             }
          </span>
        </p>

        <div className='max-w-[1220px] mx-auto py-5  '>
          <div className='w-full py-3 px-4 bg-slate-100 rounded-t-md border-1 border-slate-400'>
            <h2 className='text-xl font-semibold'>
              {
              id ? 'Update Material' : 'Add Material'
              }
            </h2>
          </div>
          <div className='w-full py-3 px-4 rounded-b-md border-1 border-slate-400 border-t-0'>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-5'>
                  <label htmlFor="" className='font-semibold mb-3'>Material Name</label>
                  <input 
                    type="text" 
                    name='name'
                    defaultValue={singledata.name}
                    placeholder='Material Name' 
                    className='w-full border-2 border-[#ccc] py-2 px-3 rounded-[8px]'/>
                </div>

                <div className='mb-5'>
                  <label htmlFor="" className='font-semibold mb-3'>Order</label>
                  <input 
                      type="text" 
                      name='order'
                      placeholder='Enter Order'
                      defaultValue={singledata.order} 
                      className='w-full border-2 border-[#ccc] py-2 px-3 rounded-[8px]'/>
                </div>

                <button className='py-2 px-3 text-white bg-purple-600 rounded-[8px] my-5'>
                  {
                    id ? 'Update material' : 'Add material'
                  }
                </button>
            </form>
              
          </div>

          
        </div>
      </div>  
    </div>
  )
}
