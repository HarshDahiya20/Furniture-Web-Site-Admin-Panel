import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { FaFilter } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import axios from 'axios'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';

export default function ViewTestimonials() {

  let apiBaseUrl = import.meta.env.VITE_APIBASEURL

  let [data, setData] = useState([]);   //  get data for view
  let [path, setPath] = useState(' ');
  let [selectedRecord, setSelectedRecord] = useState([])  //  for check box


  let getTestimonial = () => {
    axios.get(`${apiBaseUrl}testimonial/view`)
      .then((res) => res.data)
      .then((finalRes) => {
        console.log(finalRes);
        setData(finalRes.data)
        setPath(finalRes.path)
      })
  }

  let getCheckValue = (e) => {
    let checkValue = e.target.value
    if (e.target.checked) {
      setSelectedRecord([...selectedRecord, checkValue])
    }
    else {
      setSelectedRecord(selectedRecord.filter((v) => v != checkValue))
    }
  }

  let allCheck = (e) => {

    if (e.target.checked) {
      setSelectedRecord(data.map((obj) => obj._id))
    }
    else {
      setSelectedRecord([])
    }

  }

  let deleteRecords = () => {

    if (selectedRecord.length >= 1) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      })


        .then((result) => {


          if (result.isConfirmed) {
            axios.post(`${apiBaseUrl}testimonial/delete`, { ids: selectedRecord })
              .then((res) => res.data)
              .then((finalres) => {
                toast.success(finalres._massage)
                getTestimonial()
                setSelectedRecord([])

              })

            Swal.fire({
              title: "Deleted!",
              text: "Your Color has been deleted.",
              icon: "success"
            });

          }
        })
    }
  }

  let changeStatus = () => {
    if (selectedRecord.length > 0) {
      axios
        .post(`${apiBaseUrl}testimonial/change-status`, { ids: selectedRecord })
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes._status) {
            getTestimonial();
            // iziToast.success({
            //   title: "Success",
            //   message: "Status Change suces",
            //   position: "topRight",
            // });
            toast.success('Status Change suces')

            instance.hide({ transitionOut: "fadeOut" }, toast);

            setSelectedRecord([]);

          }
        });

      setSelectedRecord([]);
    } else {
      // iziToast.error({
      //   title: "No Selection",
      //   message: "Please select at least one record to delete.",
      //   position: "topRight",
      // });
      toast.error("select at least one record to chang status.")
    }
  }


  useEffect(() => {
    getTestimonial()
  }, [])

  return (
    <div>
      <ToastContainer />
      <div className='w-full min-h-[610px]'>
        <p className='px-6 py-3 border-b-2 border-[#ccc] w-full font-semibold text-gray-700'>
          <Link to="/dashboard" className='hover:text-blue-500'>Home</Link>  /
          <Link to=" " className='hover:text-blue-500'> Testimonial</Link> /
          <span className='text-gray-600'> View</span>
        </p>

        <div className='max-w-[1220px] mx-auto py-5  '>
          <div className='w-full py-3 px-4 bg-slate-100 rounded-t-md border-1 border-slate-400 flex justify-between items-center'>
            <h2 className='text-2xl font-semibold'>View Testimonial</h2>

            <div className='flex items-center gap-3'>
              <div className='w-[40px] h-[40px] rounded-[8px] bg-blue-600 hover:bg-blue-700 cursor-pointer text-white flex justify-center items-center'>
                <FaFilter />
              </div>
              <button onClick={changeStatus} className='text-white rounded-[8px] py-2 px-4 bg-green-600 hover:bg-green-700 cursor-pointer '>Change Status</button>
              <button onClick={deleteRecords} className='text-white rounded-[8px] py-2 px-4 bg-red-600 hover:bg-red-700 cursor-pointer '>Delete</button>
            </div>
          </div>

          <table className='w-full'>
            <thead className='w-full bg-[#374151] text-left uppercase'>
              <tr className=' text-sm font-normal text-gray-400'>
                <th scope='col' className='p-4 w-[3%] '>
                  <input
                    type='checkbox'
                    onChange={allCheck}
                    checked={data.length == selectedRecord.length}
                    className='bg-white w-4 h-4' />
                </th>
                <th className='px-6 py-3 w-[100px]'> S.No.</th>
                <th scope='col' className='ps-6 py-3 w-[200px] '> Name</th>
                <th scope='col' className='w-[18%]  ps-2'> 	Description</th>
                <th scope='col' className='w-[150px] text-center ps-2'> Image</th>
                <th scope='col' className='w-[150px] text-center  ps-2'>	Rating</th>
                <th scope='col' className='w-[150px] text-center  ps-2'>	Order</th>
                <th scope='col' className='w-[150px] text-center ps-2'>Status</th>
                <th scope='col' className='w-[150px] text-center ps-2' >Action</th>
              </tr>
            </thead>
            <tbody className='py-3'>
              {
                data.lengt >= 1
                  ?


                  (<tr className='bg-gray-800 hover:bg-gray-600 text-left text-gray-400 '>
                    <td colSpan={7}>
                      Not Data Found
                    </td>


                  </tr>)
                  :
                  (

                    data.map((obj, index) => {
                      return (
                        <tr className='bg-gray-800 hover:bg-gray-600 text-left text-gray-400 '>
                          <th scope='col' className='p-4  '>
                            <input
                              type='checkbox'
                              value={obj._id}
                              onChange={getCheckValue}
                              checked={selectedRecord.includes(obj._id)}
                              className='bg-white w-4 h-4' />
                          </th>
                          <th scope='col' className='  ps-5'>{index+1}</th>

                          <th scope='col' className='px-6 py-3 text-white'> {obj.name}</th>

                          <th scope='col' className='  ps-2 font-normal'>	{obj.designation}</th>
                          <th scope='col' className=' flex justify-center pt-2 ps-2'> <img src={path + obj.image} alt="" width="60"   /></th>
                          <th scope='col' className=' text-center ps-2'>{obj.rating}</th>
                          <th scope='col' className=' text-center ps-2'>{obj.order}</th>
                          {
                            obj.status ?
                              <th className=' text-center ps-2'>
                                <button className='text-white bg-green-600 py-1 px-5 rounded-[5px] font-semibold'>Active</button>
                              </th>
                              :
                              <th className=' text-center ps-2'>
                                <button className='text-white bg-red-600 py-1 px-3 rounded-[5px] font-semibold'>DeActive</button>
                              </th>
                          }
                          <th className='  ps-2  text-white font-semibold' >
                            <Link
                              to={`/testimonial/add/${obj._id}`}
                              className=' flex justify-center'
                            >
                              <p className='text-white  p-3  w-[40px] rounded-[50%] bg-blue-500'>
                                <FaPen />
                              </p>

                            </Link>
                          </th>
                        </tr>
                      )
                    })

                  )
              }

            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}
