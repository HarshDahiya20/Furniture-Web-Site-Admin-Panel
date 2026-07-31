
import { Link, useParams } from 'react-router'
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetail() {


  let [mainImg, setmainImg] = useState('');
  let [galleryImg, setGalleryImg] = useState([])
  const { slug } = useParams();

  // console.log(slug);

  let [product, setProduct] = useState([]);
  let [path, setPath] = useState("");
  let [material,setMaterail]=useState([])
  let [color,setColor]=useState([])

  let apiBaseUrl = import.meta.env.VITE_APIBASEURL
  let getProductDetails = () => {
    axios
      .get(`${apiBaseUrl}product/view/${slug}`)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes._status) {
          // console.log(finalRes);

          setProduct(finalRes.data);
          setmainImg(finalRes.data.image)
          setGalleryImg(finalRes.data.gallery)
          setMaterail(finalRes.data.material)
          setColor(finalRes.data.color)
          setPath(finalRes.path);

        }
      });
  };
  console.log(color);

  useEffect(() => {
    getProductDetails();
  }, [slug]);



  // if (!product) {
  //   return (
  //     <div className="px-6 py-8">
  //       <p className="text-red-600">Product not found.</p>
  //       <Link
  //         to="/product/view"
  //         className="mt-4 inline-block text-blue-700 hover:underline"
  //       >
  //         Back to Products
  //       </Link>
  //     </div>
  //   );
  // }



  return (
    <div>
      <div className='w-full min-h-[610px]'>
        <p className='px-6 py-3 border-b-2 border-[#ccc] w-full font-semibold text-gray-700'>
          <Link to="/dashboard" className='hover:text-blue-500'>Home</Link>  /
          <Link to=" " className='hover:text-blue-500'> Product</Link> /
          <span className='text-gray-600'> Detail</span>
        </p>

        <div className='max-w-[1220px] mx-auto py-5  '>
          <div className='w-full py-3 px-4 bg-slate-100 rounded-t-md border-1 border-slate-400 flex justify-between items-center'>
            <h2 className='text-2xl font-semibold'>Product Detail</h2>


          </div>

          <div>
            <section className="p-8 bg-white md:py-16 dark:bg-gray-900 antialiased">
              <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16 ">

                  <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                    <img
                      className="w-[300px] mx-auto h-[400px] object-fit-cover "
                      src={path + mainImg}
                      alt=""
                    />
                    <div className='flex justify-center'>

                      {
                        galleryImg.map((src, index) => {
                          return (
                            <img key={index} onClick={() => setmainImg(src)} width={80} src={path + src} />
                          )

                        })
                      }





                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 lg:mt-0">
                    <div className="bg-slate-50 p-5 rounded-md mb-6 border border-slate-200">
                      {/* {
                        product.map((obj)=>{
                          return(
                            
                          )
                        })
                      } */}
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        Product Overview
                      </h3>
                      <p className="text-xl font-semibold text-slate-500 mb-4">
                        {product.name}
                      </p>
                      <p className="text-xl font-semibold text-slate-500 mb-4">
                        {product?.parentCategory?.name} / {product?.subCategory?.name} / {product?.subSubCategory?.name} 
                      </p>
                      <p className="text-xl font-semibold text-slate-500 mb-4"> 
                        Material :- {
                          material.map((obj)=>{
                            return(
                              <span>{obj.name} / </span>
                            )
                          })
                        } 
                      </p>
                      <p className="text-xl font-semibold text-slate-500 mb-4"> 
                        Color :- {
                          color.map((obj)=>{
                            return(
                              <span>{obj.name} / </span>
                            )
                          })
                        }

                      </p>
                      <p className="text-xl font-semibold text-slate-500 mb-4"> Product Type :-       {product?.productType == 1 ? "Featured" : ""}
                        {product?.productType == 2 ? "New Arrival" : ""}
                        {product?.productType == 3 ? "On Sale" : ""}
                        {product?.productType != 1 && product?.productType != 2 && product?.productType != 3 ? "N/A" :""}
                      </p>
                      <p className="text-xl font-semibold text-slate-500 mb-4"> Best selling :-  {product?.bestSelling ? "Yes" : "No"}</p>
                      <p className="text-xl font-semibold text-slate-500 mb-4"> Top rated :- {product?.topRated ? "Yes" : "No"}</p>
                      <p className="text-xl font-semibold text-slate-500 mb-4"> Up Sell :- {product?.upSell ? "Yes" : "No"}</p>
                      <p className="text-xl font-semibold text-slate-500 mb-4">order :- {product.order}</p>

                      <div className="flex flex-wrap gap-3 items-center mt-5">

                        <span className="text-sm font-semibold text-emerald-700 bg-emerald-100 px-2 py-1 rounded">In Stock</span>
                        <span className="text-sm font-semibold text-slate-600">Qty: Rs. {product.stock}</span>
                      </div>
                      <div className="flex flex-wrap gap-3 items-center mt-5">
                        <span className="text-3xl font-bold text-indigo-600 line-through ">Rs. {product.actualPrice}</span>
                        <span className="text-2xl font-bold text-indigo-600">Rs.{product.price }</span>
                      </div>
                      <div className="mt-4 flex gap-3">
                        {
                          product.status ?
                            <th className=' text-center ps-2'>
                              <button className='text-white bg-green-600 py-1 px-5 rounded-[5px] font-semibold'>Active</button>
                            </th>
                            :
                            <th className=' text-center ps-2'>
                              <button className='text-white bg-red-600 py-1 px-3 rounded-[5px] font-semibold'>DeActive</button>
                            </th>
                        }
                        <div className=''>
                          <Link
                            to={`/product/view`}
                            className=' flex justify-center'
                          >
                            <p className='text-white py-1  px-3 rounded-[5px] bg-gray-500'>
                              Product List
                            </p>

                          </Link>
                        </div>

                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </section>
          </div>


        </div>
      </div>
    </div>
  )
}
