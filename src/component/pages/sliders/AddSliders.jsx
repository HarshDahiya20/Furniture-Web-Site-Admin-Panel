import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';

export default function AddSliders() {


  //  for image 

  let imgDefault= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVYFJoiQl5YPHK2xiOHeyplhJWUpFZT4m0vw&s'
  let [imgPreview,setImgPreview]=useState(imgDefault)

// api fatching

  let apiBaseUrl = import.meta.env.VITE_APIBASEURL

  let {id}=useParams()

  // let [path,setPath]=useState("")
     
  //  console.log(id);
  
  let [singledata,setSingleData] = useState([])

  let navigate=useNavigate()

  let handleSubmit = (e) => {
    e.preventDefault()
    let myData = new FormData(e.target)
  
    let url = id ? `slider/update/${id}` : 'slider/add'
    let method = id ? 'put' : 'post'

    axios[method](`${apiBaseUrl}${url}`, myData)
      .then((res) => res.data)
      .then((finalRes) => {

        if (finalRes._status) {
          
          toast.success(id ? 'slider updated successfully!' : 'slider added successfully!')
          setTimeout(() => {
            navigate('/slider/view')
          }, 2000)

        }
        else {
          
          toast.error(finalRes._message)
        }


      })
  }

  let updateData=()=>{

    if(!id){
      setImgPreview(imgDefault)
      return
    } 
  
      axios.get(`${apiBaseUrl}slider/single-data/${id}`)
      .then((res) => {

        setSingleData(res.data._data)

        // setPath(res.data.path)

        setImgPreview(res.data.path + res.data._data.image)
       
      })
      .catch((error) => {
        // console.log(error)
        toast.error("Failed to fetch category data")
      })


    
  }
  
  // console.log(imgPreview);
  
  

  useEffect(()=>{
    updateData()
  },[id])

  return (
    <div>
      <ToastContainer />
      <div className='w-full min-h-[610px]'>
        <p className='px-6 py-3 border-b-2 border-[#ccc] w-full font-semibold text-gray-700'>
          <Link to="/dashboard" className='hover:text-blue-500'>Home</Link>  /
          <Link to=" " className='hover:text-blue-500'> Slider</Link> /
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
              id ? 'Update Category' : 'Add Category'
              }
            </h2>
          </div>
          <div className='w-full py-3 px-4 rounded-b-md border-1 border-slate-400 border-t-0'>
            <form onSubmit={handleSubmit} action="">
              <div className='grid grid-cols-[30%_auto] gap-10 '>
                <div className=''>
                  <label htmlFor="" className='font-semibold mb-3'> Slider Image</label>
                  <div className='relative w-full h-[200px]  border-2 border-[#ccc] text-transparent'>

                   {
                      imgPreview == imgDefault
                        ?
                        " "
                        :
                        <button type='button' onClick={() => setImgPreview(imgDefault)} className='absolute z-3 right-0 font-bold bg-gray-500 text-[14px] text-white border-2 border-white p-[5px] '>REMOVE</button>

                    }

                    <input 
                      name='image' 
                      type="file" 
                      
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
                    <label htmlFor="" className='font-semibold mb-3'>Title</label>
                    <input 
                      type="text" 
                      name='title'
                      defaultValue={id  ? singledata.title : ''}
                      placeholder='Title' 
                      className='w-full border-2 border-[#ccc] py-2 px-3 rounded-[8px]' />
                  </div>

                  <div className='mb-5'>
                    <label htmlFor="" className='font-semibold mb-3'>Order</label>
                    <input 
                      type="text" 
                      name='order'
                      defaultValue={id ? singledata.order : ""}
                      placeholder='Order' 
                      className='w-full border-2 border-[#ccc] py-2 px-3 rounded-[8px]' />
                  </div>

                </div>
              </div>


              <button className='py-2 px-3 text-white bg-purple-600 rounded-[8px] my-5'>
                {
                    id ? 'Update slider' : 'Add slider'
                  }
              </button>
            </form>
          </div>


        </div>
      </div>
    </div>
  )
}
