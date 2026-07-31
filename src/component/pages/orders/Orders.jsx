import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { FaFilter, FaEye, FaTrash } from "react-icons/fa";
import axios from 'axios'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';

export default function Orders() {
  let apiBaseUrl = import.meta.env.VITE_APIBASEURL

  let [data, setData] = useState([]);   // get data for view
  let [selectedRecord, setSelectedRecord] = useState([])  // for checkbox selection

  let getOrders = () => {
    axios.get(`${apiBaseUrl}order/view`)
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes._status) {
          setData(finalRes.data)
        } else {
          toast.error(finalRes._message || "Failed to fetch orders")
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error fetching orders")
      })
  }

  let getCheckValue = (e) => {
    let checkValue = e.target.value
    if (e.target.checked) {
      setSelectedRecord([...selectedRecord, checkValue])
    } else {
      setSelectedRecord(selectedRecord.filter((v) => v !== checkValue))
    }
  }

  let allCheck = (e) => {
    if (e.target.checked) {
      setSelectedRecord(data.map((obj) => obj._id))
    } else {
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
      }).then((result) => {
        if (result.isConfirmed) {
          axios.post(`${apiBaseUrl}order/delete`, { ids: selectedRecord })
            .then((res) => res.data)
            .then((finalres) => {
              if (finalres._status) {
                toast.success(finalres._message || "Orders deleted")
                getOrders()
                setSelectedRecord([])
                Swal.fire({
                  title: "Deleted!",
                  text: "Your selected orders have been deleted.",
                  icon: "success"
                });
              } else {
                toast.error(finalres._message || "Failed to delete orders")
              }
            })
            .catch((err) => {
              console.error(err)
              toast.error("Failed to delete orders")
            })
        }
      })
    } else {
      toast.error("Select at least one record to delete.")
    }
  }

  let deleteSingleRecord = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(`${apiBaseUrl}order/delete`, { ids: [id] })
          .then((res) => res.data)
          .then((finalres) => {
            if (finalres._status) {
              toast.success(finalres._message || "Order deleted")
              getOrders()
              setSelectedRecord(selectedRecord.filter(v => v !== id))
              Swal.fire({
                title: "Deleted!",
                text: "Order has been deleted.",
                icon: "success"
              });
            } else {
              toast.error(finalres._message || "Failed to delete order")
            }
          })
          .catch((err) => {
            console.error(err)
            toast.error("Failed to delete order")
          })
      }
    })
  }

  let updateOrderStatus = (id, newStatus) => {
    axios.put(`${apiBaseUrl}order/update-status/${id}`, { orderStatus: newStatus })
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes._status) {
          toast.success("Order status updated successfully")
          getOrders()
        } else {
          toast.error(finalRes._message || "Failed to update status")
        }
      })
      .catch((err) => {
        console.error(err)
        toast.error("Error updating order status")
      })
  }

  let showOrderItems = (order) => {
    const itemsHtml = `
      <div style="text-align: left; max-height: 400px; overflow-y: auto; font-family: sans-serif; padding: 5px;">
        <p style="margin: 4px 0;"><strong>Customer Email:</strong> ${order.shippingAddess?.email || 'N/A'}</p>
        <p style="margin: 4px 0;"><strong>Phone:</strong> ${order.shippingAddess?.mobile_number || 'N/A'}</p>
        <p style="margin: 4px 0;"><strong>Address:</strong> ${order.shippingAddess?.address || ''}, ${order.shippingAddess?.city || ''}, ${order.shippingAddess?.state || ''} - ${order.shippingAddess?.country || ''}</p>
        <hr style="margin: 12px 0; border: 0; border-top: 1px solid #ccc;" />
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="border-bottom: 2px solid #ccc; text-align: left; font-weight: bold; color: #4b5563;">
              <th style="padding: 8px 4px;">Product</th>
              <th style="padding: 8px 4px; text-align: center;">Qty</th>
              <th style="padding: 8px 4px; text-align: right;">Price</th>
              <th style="padding: 8px 4px; text-align: right;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${(order.orderItems || []).map(item => {
      const prodName = item._ProductID?.name || item.productName || item.name || 'Unknown Product';
      const qty = item._Quantity || item.qty || 1;
      const price = item._ProductPrice || item.productPrice || item.price || 0;
      return `
                <tr style="border-bottom: 1px solid #eee; color: #374151;">
                  <td style="padding: 8px 4px;">${prodName}</td>
                  <td style="padding: 8px 4px; text-align: center;">${qty}</td>
                  <td style="padding: 8px 4px; text-align: right;">₹${price}</td>
                  <td style="padding: 8px 4px; text-align: right;">₹${qty * price}</td>
                </tr>
              `;
    }).join('')}
          </tbody>
        </table>
        <div style="margin-top: 15px; text-align: right; font-weight: bold; font-size: 1.1em; color: #111827;">
          Total Amount: ₹${order.orderAmount}
        </div>
        <div style="text-align: right; font-weight: bold; font-size: 1.1em; color: #111827; margin-top: 5px;">
          Total with Tax/Charges: ₹${order.shippingCharges || order.orderAmount}
        </div>
      </div>
    `;

    Swal.fire({
      title: `Order Details (${order._id})`,
      html: itemsHtml,
      width: '650px',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Close'
    });
  }

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <div>
      <ToastContainer />
      <div className='w-full min-h-[610px]'>
        <p className='px-6 py-3 border-b-2 border-[#ccc] w-full font-semibold text-gray-700'>
          <Link to="/dashboard" className='hover:text-blue-500'>Home</Link>  /
          <Link to=" " className='hover:text-blue-500'> Orders</Link>
        </p>

        <div className='max-w-[1220px] mx-auto py-5  '>
          <div className='w-full py-3 px-4 bg-slate-100 rounded-t-md border-1 border-slate-400 flex justify-between items-center'>
            <h2 className='text-2xl font-semibold'>Order's List</h2>

            <div className='flex items-center gap-3'>
              <div className='w-[40px] h-[40px] rounded-[8px] bg-blue-600 hover:bg-blue-700 cursor-pointer text-white flex justify-center items-center'>
                <FaFilter />
              </div>
              <button onClick={deleteRecords} className='text-white rounded-[8px] py-2 px-4 bg-red-600 hover:bg-red-700 cursor-pointer '>Delete</button>
            </div>
          </div>

          <table className='w-full border border-slate-400'>
            <thead className='w-full bg-[#374151] text-left uppercase'>
              <tr className=' text-sm font-normal text-gray-400'>
                <th scope='col' className='p-4 w-[2%]'>
                  <input
                    type='checkbox'
                    onChange={allCheck}
                    checked={data.length > 0 && data.length === selectedRecord.length}
                    className='bg-white w-4 h-4' />
                </th>
                <th scope='col' className='px-5 py-3 text-[12px] text-center'>S. No.</th>
                <th scope='col' className='px-5 py-3 text-[12px] '>Order ID</th>
                <th scope='col' className='px-5 py-3 text-[12px] '>Name</th>
                <th scope='col' className='px-5 py-3 w-[15%] text-[12px] '>Address</th>
                <th scope='col' className='px-2 text-center text-[12px] '>Date</th>
                <th scope='col' className='px-5 py-3 text-center text-[12px] '>Qty.</th>
                <th scope='col' className='px-5 py-3 text-center text-[12px] '>Price</th>
                <th scope='col' className='px-5 py-3 text-center text-[12px] '>Payment Type</th>
                <th scope='col' className='w-[12%] text-center ps-2 text-[12px] '>Status</th>
                <th scope='col' className='w-[10%] text-center ps-2 text-[12px] '>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                data.length === 0 ? (
                  <tr className='bg-gray-800 hover:bg-gray-600 text-left text-gray-400 '>
                    <td colSpan={11} className="p-5 text-center">
                      No Data Found
                    </td>
                  </tr>
                ) : (
                  data.map((obj, index) => {
                    const addressStr = obj.shippingAddess
                      ? `${obj.shippingAddess.address || ''}, ${obj.shippingAddess.city || ''}, ${obj.shippingAddess.state || ''} - ${obj.shippingAddess.country || ''}`
                      : 'N/A';

                    return (
                      <tr key={obj._id} className='bg-gray-800 hover:bg-gray-600 text-left text-gray-400 border-b border-gray-700'>
                        <td scope='col' className='p-4 text-center'>
                          <input
                            type='checkbox'
                            value={obj._id}
                            onChange={getCheckValue}
                            checked={selectedRecord.includes(obj._id)}
                            className='bg-white w-4 h-4' />
                        </td>
                        <td scope='col' className='px-5 py-3 text-center text-white'>{index + 1}</td>
                        <td scope='col' className='px-5 py-3 font-normal text-white text-xs truncate max-w-[120px]' title={obj._id}>{obj._id}</td>
                        <td scope='col' className='px-5 py-3 font-normal text-white'>{obj.shippingAddess?.name || 'N/A'}</td>
                        <td scope='col' className='px-5 py-3 font-normal text-xs truncate max-w-[200px]' title={addressStr}>{addressStr}</td>
                        <td scope='col' className='px-3 py-3 font-normal text-center'>{new Date(obj.createdAt).toLocaleDateString()}</td>
                        <td scope='col' className='px-5 py-3 font-normal text-center'>{obj.orderQty}</td>
                        <td scope='col' className='px-5 py-3 font-normal text-center text-white'>₹{obj.shippingCharges || obj.orderAmount}</td>
                        <td scope='col' className='px-5 py-3 font-normal text-center'>{obj.paymentMethod === '2' ? 'Online Pay' : 'COD'}</td>
                        <td scope='col' className='ps-2 py-3 text-center'>
                          <select
                            value={obj.orderStatus}
                            onChange={(e) => updateOrderStatus(obj._id, e.target.value)}
                            className={`py-1 px-2 rounded-[5px] font-semibold border text-xs text-center cursor-pointer ${obj.orderStatus === 'pending'
                              ? 'bg-amber-100 text-amber-800 border-amber-300'
                              : obj.orderStatus === 'process'
                                ? 'bg-blue-100 text-blue-800 border-blue-300'
                                : 'bg-green-100 text-green-800 border-green-300'
                              }`}
                          >
                            <option value="pending">Pending</option>
                            <option value="process">Process</option>
                            <option value="completed">Completed</option>
                          </select>
                        </td>
                        <td scope='col' className='ps-2 py-3 text-center flex items-center justify-center gap-2'>
                          <button
                            onClick={() => showOrderItems(obj)}
                            className='text-white bg-blue-500 hover:bg-blue-600 p-2 rounded-full cursor-pointer transition-colors duration-200'
                            title="View Items"
                          >
                            <FaEye size={14} />
                          </button>
                          <button
                            onClick={() => deleteSingleRecord(obj._id)}
                            className='text-white bg-red-600 hover:bg-red-700 p-2 rounded-full cursor-pointer transition-colors duration-200'
                            title="Delete Order"
                          >
                            <FaTrash size={14} />
                          </button>
                        </td>
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
