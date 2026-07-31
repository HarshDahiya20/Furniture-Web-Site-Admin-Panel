
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';

export default function AddSubCategory() {

  //  for image 

   let imgDefault='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVYFJoiQl5YPHK2xiOHeyplhJWUpFZT4m0vw&s'
    let [imgPreview,setImgPreview]=useState(imgDefault)

   // api fatching

  let apiBaseUrl = import.meta.env.VITE_APIBASEURL

  let {id}=useParams()
     
  //  console.log(id);
  
  let [singledata,setSingleData] = useState([])
  let [parent,setParent]=useState([])

  let navigate=useNavigate()

  let handleSubmit = (e) => {
    e.preventDefault()
    let myData = new FormData(e.target)

    let url = id ? `subCategory/update/${id}` : 'subCategory/add'
    let method = id ? 'put' : 'post'

    axios[method](`${apiBaseUrl}${url}`, myData)
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes);

        if (finalRes._status) {
          // iziToast.success({
          //     title: 'OK',
          //     message: 'Successfully inserted record!',
          // });
          toast.success(id ? 'subCategory updated successfully!' : 'subCategory added successfully!')
          setTimeout(() => {
            navigate('/sub-category/view')
          }, 2000)

        }
        else {
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

   
      axios.get(`${apiBaseUrl}subCategory/single-data/${id}`)
      .then((res) => {
        console.log(res)

        setSingleData(res.data._data)
        setImgPreview(res.data.path + res.data._data.image)
       
      })
      .catch((error) => {
        // console.log(error)
        toast.error("Failed to fetch subCategory data")
      })


    
  }

  useEffect(()=>{
    updateData()
  },[id])

  let getParentCategory=()=>{
    axios.get(`${apiBaseUrl}subCategory/parent`)
      .then((res) => res.data)
      .then((finalRes) => {
        setParent(finalRes.data)
        
      })
  }

  

  useEffect(()=>{
    getParentCategory()
  },[])

  

  return (
    <div>
      <ToastContainer />
      <div className='w-full min-h-[610px]'>
        <p className='px-6 py-3 border-b-2 border-[#ccc] w-full font-semibold text-gray-700'>
          <Link to="/dashboard" className='hover:text-blue-500'>Home</Link>  /
          <Link to=" " className='hover:text-blue-500'> Sub Category</Link> /
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
              id ? 'Update subCategory' : 'Add subCategory'
              }
            </h2>
          </div>
          <div className='w-full py-3 px-4 rounded-b-md border-1 border-slate-400 border-t-0'>
            <form onSubmit={handleSubmit} action="">
              <div className='grid grid-cols-[30%_auto] gap-10 '>
                <div className=''>
                  <label htmlFor="" className='font-semibold mb-3'>Sub Category Image</label>
                  <div className='relative w-full h-[200px]  border-2 border-[#ccc] text-transparent'>

                        {
                          imgPreview==imgDefault 
                          ?
                          " "
                          :
                          <button type='button' onClick={()=>setImgPreview(imgDefault)} className='absolute z-3 right-0 font-bold bg-gray-500 text-[14px] text-white border-2 border-white p-[5px] '>REMOVE</button>
                          
                        }

                    <input 
                      name='image' 
                      type="file" 
                      defaultValue={singledata.image}
                      className='absolute top-0 left-0 w-[100%] h-full'
                      onChange={(e) => {
                        setImgPreview(URL.createObjectURL(e.target.files[0]))
                      }}
                    />
                    <img src={imgPreview} alt="" className='w-[100%] h-full ' />

                  </div>
                </div>
                <div>
                  <div className='mb-5'>
                    <label htmlFor="" className='font-semibold mb-3'>Parent Category Name</label>
                    <select 
                      className='w-full border-2 border-[#ccc] py-2 px-3 rounded-[8px]' 
                      name="parentCategory" 
                      >
                      <option className='cursor-pointer' value="">Select Category</option>

                      {
                        parent.map((obj,index)=>{
                          return(
                            <option selected={singledata?.parentCategory == obj._id}
                            className='cursor-pointer'  value={obj._id}>{obj.name}</option>
                          )
                        })
                      }
                    </select>
                  </div>

                  <div className='mb-5'>
                    <label htmlFor="" className='font-semibold mb-3'>Sub Category Name</label>
                    <input 
                      name='name'
                      type="text" 
                      defaultValue={singledata.name}
                      placeholder='Sub Category Name' 
                      className='w-full border-2 border-[#ccc] py-2 px-3 rounded-[8px]' />
                  </div>

                  <div className='mb-5'>
                    <label htmlFor="" className='font-semibold mb-3'>Order</label>
                    <input 
                      name='order'
                      type="text" 
                      defaultValue={singledata.order}
                      placeholder='Category Order' 
                      className='w-full border-2 border-[#ccc] py-2 px-3 rounded-[8px]' />
                  </div>
                </div>
              </div>


              <button className='py-2 px-10 text-white bg-purple-600 rounded-[8px] my-5'>
                {
                    id ? 'Update ' : 'Add '
                  }
              </button>
            </form>
          </div>


        </div>
      </div>
    </div>
  )
}
