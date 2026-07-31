import React from 'react'
import { useNavigate } from 'react-router'

export default function Login() {

  let navigate =useNavigate()
  let login=(e)=>{
    e.preventDefault()
    navigate('/dashboard')
  }
  return (
    <div>
      <div className="min-h-screen flex  items-center justify-center bg-gray-100 p-6">
        <div >
            <div className='flex justify-center mb-4'>
              <img src="https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png"  alt=""  width="200" height="100"/>
            </div>
            
            <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign in to your account</h2>

              <form onSubmit={login} className="space-y-5" >
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </form>

              
            </div>
        </div>
        
      </div>
    </div>
  )
}
