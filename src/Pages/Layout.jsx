import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {FaBars, FaHome, FaHeart, FaQuestionCircle, FaUserCircle} from 'react-icons/fa'

const Layout = () => {
  return (
    <div>
        <header className='fixed top-0 w-full h-[60px] bg-white flex items-center border-2 border-t-0 border-r-0 border-l-0 border-gray-400'>
            <div className='ml-4 p-3 rounded-full transition-all duration-300 ease-in-out hover:bg-yellow-200'>
                <FaBars  size={25}/>
            </div>
        </header>

        <aside className='fixed left-0 top-15 h-full w-20 flex flex-col bg-white border-1 border-t-0 border-r-1 border-l-0 border-gray-400'>
          
            <div>
                <NavLink to="/home" className={`pt-6 pb-6 transition-all duration-300 ease-in-out hover:bg-yellow-200 hover:text-amber-800 rounded-xl w-full flex flex-col items-center`}>
                    <FaHome size={35}/>
                    <p className='text-xs text-center'>Home</p>
                </NavLink>
            </div>

            <div>
                <NavLink to="/saved" className={`pt-6 pb-6 transition-all duration-300 ease-in-out hover:bg-yellow-200 hover:text-amber-800 rounded-xl w-full flex flex-col items-center`}>
                    <FaHeart size={35} />
                    <p className='text-xs text-center'>Saved</p>
                </NavLink>
            </div>

            <div>
                <NavLink to="/you" className={`pt-6 pb-6 transition-all duration-300 ease-in-out hover:bg-yellow-200 hover:text-amber-800 rounded-xl w-full flex flex-col items-center`}>
                    <FaUserCircle size={35}/>
                    <p className='text-xs text-center'>You</p>
                </NavLink>
            </div>

            <div>
                <NavLink to="/about" className={`pt-6 pb-6 transition-all duration-300 ease-in-out hover:bg-yellow-200 hover:text-amber-800 rounded-xl w-full flex flex-col items-center`}>
                    <FaQuestionCircle size={35} />
                    <p className='text-xs text-center'>About</p>
                </NavLink>
            </div>

        </aside>

        <div className='bg-amber-100 pt-[60px] ml-[80px] min-h-screen'>
            <Outlet />
        </div>
    </div>
  )
}

export default Layout