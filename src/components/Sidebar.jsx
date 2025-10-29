import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <div className='fixed top-0 left-0 w-[120px] h-full bg-amber-500 flex justify-center'>
          <ul className='mt-4'>

            <li className='p-4' >Menu</li>
            <li className='mt-5 p-4'>        <NavLink to="/home">Home</NavLink></li>
            <li className='mt-5 p-4'> <NavLink to="/favorites">Favorites</NavLink></li>
            <li className='mt-5 p-4'>        <NavLink to="/about">About</NavLink></li>
          </ul>

          
        </div>
    </div>
  )
}

export default Sidebar