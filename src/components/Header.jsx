import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header className='fixed top-0 left-[120px] bg-amber-500 w-full h-[85px] flex gap-26 items-center'>
          <h1 className='text-2xl'>
            Corn-Site
          </h1>

          <div>
            <input  placeholder='Search' className=' bg-white w-[650px] p-2 rounded-3xl'/>
          </div>

          <div>

            <ul className='flex gap-4 '>
                <li className='p-2 w-[120px] flex justify-center rounded-3xl bg-black text-white hover:bg-gray-600'>
                    <NavLink to="/addcorn">Add Corn</NavLink>
                </li>
                <li className='p-2 w-[120px] flex justify-center rounded-3xl bg-gray-400 text-white'>
                    <NavLink to="/notif">Notif</NavLink>
                </li>
            </ul>

          </div>
          
          <h3>Profile</h3>
        </header>
    </div>
  )
}

export default Header