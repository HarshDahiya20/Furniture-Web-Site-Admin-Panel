import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';

export default function AddProduct() {

  let imgDefault='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVYFJoiQl5YPHK2xiOHeyplhJWUpFZT4m0vw&s'
  let [imgPreview,setImgPreview]=useState(imgDefault)
  let [galleryimgPreview,setGalleryImgPreview]=useState(imgDefault)

 // api fatching

  let apiBaseUrl = import.meta.env.VITE_APIBASEURL

  let {id}=useParams()
     
  //  console.log(id);
  
  
  let [parent,setParent]=useState([])
  let [subCategory,setSubCategory]=useState([])
  let [subSubCategory,setSubSubCategory]=useState([])
  let [material,setMaterail]=useState([])
  let [color,setColor]=useState([])

  let [singledata,setSingleData] = useState(null)
  let [path,setPath]= useState("")

  let navigate=useNavigate()
 
  let handleSubmit = (e) => {
    e.preventDefault()
    let myData = new FormData(e.target)

    let url = id ? `product/update/${id}` : 'product/add'
    let method = id ? 'put' : 'post'

    axios[method](`${apiBaseUrl}${url}`, myData)
      .then((res) => res.data)
      .then((finalRes) => {
        console.log(finalRes);

        if (finalRes._status) {

          toast.success(id ? 'product updated successfully!' : 'product added successfully!')
          setTimeout(() => {
            navigate('/product/view')
          }, 2000)

        }
        else {

          toast.error(finalRes._message)
        }

      })
  }

  let updateData=()=>{

    if(!id) return

 
      axios.get(`${apiBaseUrl}product/single-data/${id}`)
      .then((res) => res.data ) 
      .then((finalRes)=>  {
        console.log(finalRes)
        let productData = finalRes._data

        setSingleData(productData)

        setImgPreview(finalRes._path + finalRes._data.image)
        setGalleryImgPreview(finalRes._path + finalRes._data.gallery[0])
      })
      .catch((error) => {
        // console.log(error)
        toast.error("Failed to fetch product data")
      })


    
  }
  // console.log(singledata);
  

  useEffect(()=>{
    updateData()
  },[id])

  let getParentCategory=()=>{
    axios.get(`${apiBaseUrl}product/parent`)
      .then((res) => res.data)
      .then((finalRes) => {
        setParent(finalRes.data)
      })
  }

  let getSubCategory=(e)=>{
    let parentId=e.target.value;
    axios.get(`${apiBaseUrl}product/subCategory/${parentId}`)
      .then((res) => res.data)
      .then((finalRes) => {
        setSubCategory(finalRes.data)
      })
  }

  let getSubCategoryEdit=(parentId)=>{
    axios.get(`${apiBaseUrl}product/subCategory/${parentId}`)
      .then((res) => res.data)
      .then((finalRes) => {
        setSubCategory(finalRes.data)
      })
  }

  let getSubSubCategory=(e)=>{
    let parentId=e.target.value;
    axios.get(`${apiBaseUrl}product/subSubCategory/${parentId}`)
      .then((res) => res.data)
      .then((finalRes) => {
        setSubSubCategory(finalRes.data)
      })
  }

  let getSubSubCategoryEdit=(parentId)=>{
    axios.get(`${apiBaseUrl}product/subSubCategory/${parentId}`)
      .then((res) => res.data)
      .then((finalRes) => {
        setSubSubCategory(finalRes.data)
      })
  }

  let getMaterial=()=>{
    axios.get(`${apiBaseUrl}product/material`)
      .then((res) => res.data)
      .then((finalRes) => {
        setMaterail(finalRes.data)
      })
  }

  let getColor=()=>{
    axios.get(`${apiBaseUrl}product/color`)
      .then((res) => res.data)
      .then((finalRes) => {
        setColor(finalRes.data)
      })
  }

  useEffect(()=>{
    getParentCategory(),getMaterial(),getColor()
  },[])

  useEffect(()=>{
    getSubCategoryEdit(singledata?.parentCategory._id),
    getSubSubCategoryEdit(singledata?.subCategory._id)
  },[singledata])

  

  return (
    <div>
      <ToastContainer />
      <div className='w-full min-h-[610px]'>
        <p className='px-6 py-3 border-b-2 border-[#ccc] w-full font-semibold text-gray-700'>
          <Link to="/dashboard" className='hover:text-blue-500'>Home</Link>  /
          <Link to=" " className='hover:text-blue-500'> Product</Link> /
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
              id ? 'Update Product' : 'Add Product'
              }
            </h2>
          </div>
          
          <div className='w-full py-3 px-4 rounded-b-md border-1 border-slate-400 border-t-0'>
            <form onSubmit={handleSubmit} action="">
              <div className='grid grid-cols-[30%_auto] gap-5 mb-10'>

                <div className=''> 

                  <div>
                      <label htmlFor="" className='font-semibold mb-3'> Product Image</label>
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
                          className='absolute top-0 left-0 w-[100%] h-full'
                          onChange={(e) => {
                            setImgPreview(URL.createObjectURL(e.target.files[0]))
                          }}
                        />
                        <img src={imgPreview} alt="" className='w-[100%] h-full ' />

                      </div>
                  </div>

                  <div className='mt-5'>
                      <label htmlFor="" className='font-semibold mb-3'> Gallery Image</label>
                      <div className='relative w-full h-[200px]  border-2 border-[#ccc] text-transparent'>

                        {
                          galleryimgPreview==imgDefault 
                          ?
                          " "
                          :
                          <button type='button' onClick={()=>setGalleryImgPreview(imgDefault)} className='absolute z-3 right-0 font-bold bg-gray-500 text-[14px] text-white border-2 border-white p-[5px] '>REMOVE</button>
                          
                        }

                        <input
                          type="file"
                          multiple
                          name='gallery'
                          className='absolute top-0 left-0 w-[100%] h-full'
                          onChange={(e) => {
                            setGalleryImgPreview(URL.createObjectURL(e.target.files[0]))
                          }}
                        />
                        <img src={galleryimgPreview} alt="" className='w-[100%] h-full ' />

                      </div>
                  </div>
                  
                </div>

                <div className='grid grid-cols-2 gap-3'>
                  <div className=''>
                    <label htmlFor="" className='font-semibold mb-3'>Product Name</label>
                    <input 
                      type="text" 
                      name='name'
                      defaultValue={singledata?.name }
                      placeholder='Product Name' 
                      className='w-full border-2 border-[#ccc] py-2 px-3 rounded-[8px]' />
                  </div>

                  <div className=''>
                    <label htmlFor="" className='font-semibold mb-3'>Select Parent Category</label>
                    <select
                      onChange={getSubCategory}
                      
                      className='w-full border-2 border-[#ccc] py-2 px-3 rounded-[8px]' name="parentCategory" >
                      <option value="">Select Category</option>
                      {
                        parent.map((obj,index)=>{
                          return(
                            <option selected={singledata?.parentCategory._id == obj._id} className='cursor-pointer'  value={obj._id}>{obj.name}</option>
                          )
                        })
                      }
                    </select>
                  </div>

                  <div className=''>
                    <label htmlFor="" className='font-semibold mb-3'>Select Sub Category</label>
                    <select
                      onChange={getSubSubCategory}
                      id="default"
                      className='w-full border-2 border-[#ccc] py-2 px-3 rounded-[8px]' name="subCategory" >
                      <option value="">Select Sub Category</option>
                      {
                        subCategory.map((obj,index)=>{
                          return(
                            <option selected={singledata?.subCategory._id == obj._id} className='cursor-pointer'  value={obj._id}>{obj.name}</option>
                          )
                        })
                      }
                    </select>
                  </div>

                  <div className=''>
                    <label htmlFor="" className='font-semibold mb-3'> Select Sub Sub Category</label>
                    <select
                      
                      id="default"
                      className='w-full border-2 border-[#ccc] py-2 px-3 rounded-[8px]' name="subSubCategory" >
                      <option value="">Select Sub Sub Category</option>
                      {
                        subSubCategory.map((obj,index)=>{
                          return(
                            <option selected={singledata?.subSubCategory._id == obj._id} 
                              className='cursor-pointer'  value={obj._id}>{obj.name}</option>
                          )
                        })
                      }
                    </select>
                  </div>

                  <div className=''>
                    <label htmlFor="" className='font-semibold mb-3'> Select Material</label>
                    <select
                      id="default"
                      name="material" 
                      multiple size={1}
                      className='w-full border-2 border-[#ccc] py-2 px-3 rounded-[8px]'  >
                      <option value="">Select Material</option>
                      {
                        material.map((obj,index)=>{
                          return(
                            <option selected={singledata?.material.some( mObj => mObj._id == obj._id)} className='cursor-pointer'  value={obj._id}>{obj.name}</option>
                          )
                        })
                      }
                    </select>
                  </div>

                  <div className=''>
                    <label htmlFor="" className='font-semibold mb-3'> Select Color</label>
                    <select
                      name="color"
                      multiple size={1} 
                      id="default"
                      className='w-full border-2 border-[#ccc] py-2 px-3 rounded-[8px]'
                      >
                      <option value="">Select Color</option>
                      {
                        color.map((obj,index)=>{
                          return(
                            <option selected={singledata?.color.some( cObj => cObj._id == obj._id) }
                             className='cursor-pointer'  value={obj._id}>{obj.name}</option>
                          )
                        })
                      }
                    </select>
                  </div>

                  <div className=''>
                    <label htmlFor="" className='font-semibold mb-3'> Select Product Type</label>
                    <select className='w-full border-2 border-[#ccc] py-2 px-3 rounded-[8px]' name="productType" id="">
                      <option value="">Select Product Type</option>
                      <option selected={singledata?.productType == 1} value="1">Featured</option>
                      <option selected={singledata?.productType == 2} value="2">New Arrivals</option>
                      <option selected={singledata?.productType == 3} value="3">OnSale</option>
                    </select>
                  </div>

                  <div className=''>
                    <label htmlFor="" className='font-semibold mb-3'> Is Best Selling</label>
                    <select className='w-full border-2 border-[#ccc] py-2 px-3 rounded-[8px]' name="bestSelling" id="">
                      <option value="">Select Best Selling</option>
                      <option selected={singledata?.bestSelling == true} value="1">Yes</option>
                      <option selected={singledata?.bestSelling == false} value="0">No</option>
                    </select>
                  </div>

                  <div className=''>
                    <label htmlFor="" className='font-semibold mb-3'> Is Top Rated</label>
                    <select className='w-full border-2 border-[#ccc] py-2 px-3 rounded-[8px]' name="topRated" id="">
                      <option value="">Select Top Rated</option>
                      <option selected={singledata?.topRated == true} value="1">Yes</option>
                      <option selected={singledata?.topRated == false} value="0">No</option>
                    </select>
                  </div>

                  <div className=''>
                    <label htmlFor="" className='font-semibold mb-3'> Is Upsell</label>
                    <select className='w-full border-2 border-[#ccc] py-2 px-3 rounded-[8px]' name="upSell" id="">
                      <option value="">Select Upsell</option>
                      <option selected={singledata?.upSell == true} value="1">Yes</option>
                      <option selected={singledata?.upSell == false} value="0">No</option>
                    </select>
                  </div>

                  <div className=''>
                    <label htmlFor="" className='font-semibold mb-3'>Actual Price</label>
                    <input 
                      type="number" 
                      name='actualPrice'
                      defaultValue={singledata?.actualPrice || ""}
                      placeholder='Actual Price' 
                      className='w-full border-2 border-[#ccc] py-2 px-3 rounded-[8px]' />
                  </div>

                  <div className=''>
                    <label htmlFor="" className='font-semibold mb-3'>Sale Price</label>
                    <input 
                      type="number" 
                      name='price'
                      defaultValue={singledata?.price || ""}
                      placeholder='Sale Price' 
                      className='w-full border-2 border-[#ccc] py-2 px-3 rounded-[8px]' />
                  </div>

                  <div className=''>
                    <label htmlFor="" className='font-semibold mb-3'>Total In Stocks</label>
                    <input 
                      type="number" 
                      name='stock'
                      defaultValue={singledata?.stock || ""}
                      placeholder='Product Stock' 
                      className='w-full border-2 border-[#ccc] py-2 px-3 rounded-[8px]' />
                  </div>

                  <div className=''>
                    <label htmlFor="" className='font-semibold mb-3'>Order</label>
                    <input 
                      type="number" 
                      name='order'
                      defaultValue={singledata?.order || ""}
                      placeholder='Product Order' 
                      className='w-full border-2 border-[#ccc] py-2 px-3 rounded-[8px]' />
                  </div>
                </div>

              </div>

              <div className=' '>
                  <h2 className='font-semibold text-[18px]'>Description</h2>

                  <div className='w-full h-[200px]   rounded-md border-1 border-slate-400'>
                      <div className='w-full border-b-[1px] py-2 px-3 flex gap-3 text-sm border-slate-400'> 
                        <span>Normal</span>
                        <b>B</b>
                        <i>I</i>
                        <u>U</u>
                        <span>🔗</span>
                        <span>≡</span>
                        <span>Tx</span>
                      </div>
                      <div className='p-4'>
                          <input 
                            type="text" 
                            name='description'
                            defaultValue={singledata?.description || ""}
                            placeholder='Enter Description' 
                            className='w-full' />
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
