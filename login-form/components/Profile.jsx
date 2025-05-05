import React from 'react'
import { useLocation } from 'react-router-dom'

function Profile() {
    const location = useLocation()
    const data = location.state

    const name = data?.FullName || 'Mary Doe'
    const email = data?.email || 'marydoe@example.com'
  return (
    <div className='w-full h-screen flex items-center justify-center  bg-[#F3F4F6] font-sans'>
      <div className='bg-white max-w-[29vw] min-h-[37vh] rounded shadow-md px-6 flex flex-col'>
        <h1 className='mt-6 text-2xl tracking-tight font-semibold'>Account Settings</h1>
        <div className='flex items-center gap-4 mt-4'>
            <div className='w-[5vw] h-[5vw] rounded-full overflow-hidden'>
                <img src="https://images.unsplash.com/photo-1744023238070-062811b3a702?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div>
            <h1 className='font-semibold text-lg'>{name}</h1>
            <p className='text-sm text-[#4B5563]'>{email}</p>
            </div>
        </div>
        <p className='text-[1.1vw] font-medium mt-4 text-[#656E7A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rerum itaque alias tempora vel optio sit quod voluptatibus nam, cumque, accusamus totam!</p>
      </div>
    </div>
  )
}

export default Profile
