import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <div className='fixed top-0 left-0 w-[120px] h-full bg-amber-500 flex justify-center'>
          <ul className='mt-4'>

            <li className='p-4' >Menu</li>
            <li className='mt-5'> <NavLink to="/home" className="block w-full p-4 hover:bg-black hover:text-white">Home</NavLink></li>
            <li className='mt-5'> <NavLink to="/favorites"  className="block w-full p-4 hover:bg-black hover:text-white">Favorites</NavLink></li>
            <li className='mt-5'> <NavLink to="/about"  className="block w-full p-4 hover:bg-black hover:text-white">About</NavLink></li>
          </ul>

          
        </div>
    </div>
  )
}

export default Sidebar