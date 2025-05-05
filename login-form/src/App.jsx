import React from 'react'
import {Link, Outlet} from 'react-router-dom'

function App() {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-[#F3F4F6] font-sans'>
      <div className='bg-white w-[29vw] h-[37vh] rounded shadow-md px-6 flex flex-col'>
        <h1 className='text-center mt-6 text-2xl font-bold'>Welcome to PopX</h1>
        <p className='text-center text-[1.1vw] font-medium mt-2 text-[#656E7A]'>Lorem ipsum dolor sit amet consectetur. ipsum</p>
        <Link to="/signup" className="bg-blue-600 mt-8 text-white font-semibold rounded h-12 w-full flex items-center justify-center transform transition-transform duration-100 hover:scale-105">Create Account</Link>
        <Link to="/login" className="bg-[#D4BBFC] mt-4 font-semibold text-[#53389E] rounded h-12 w-full flex items-center justify-center transform transition-transform duration-100 hover:scale-105">Already Registered? Login</Link>
      </div>
    </div>
  )
}

export default App
