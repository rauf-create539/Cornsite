import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaUser, FaUsers, FaHeartbeat } from "react-icons/fa"

const LandingPage = () => {
  return (
    <div>
        <header className='shadow-md w-full bg-amber-100 h-[80px] flex justify-between items-center'>
            <div className='ml-6'>
                <h1 className='font-semibold'>Corn-App</h1>
            </div>
            
            <div className='flex gap-4 mr-6'>
                <NavLink to="/signup" className={`bg-amber-400 font-medium  p-2 rounded-md w-[100px] text-center  `}>Sign up</NavLink>
                <NavLink to="/login" className={`bg-gray-300  font-medium p-2 rounded-md w-[100px] text-center `}>Log in</NavLink>
            </div>
        </header>
        
        <main className='h-[calc(100vh-80px)] flex  flex-col justify-center items-center bg-amber-100'>
            <div className='text-center mb-6'>
                <h1 className='text-4xl font-bold text-yellow-400 ' style={{ textShadow: '2px 2px 0 black, -1px 1px 0 black, 1px -1px 0 black, -1px -1px black'}}>Corn-tastic!</h1>
                <h1 className='text-3xl font-semibold'>For anything impressively corny.</h1>
            </div>

            <div className='flex gap-4 mb-6'>
                <div className='bg-amber-200 flex flex-col gap-2 justify-center items-center p-4 border-3 border-t-0 border-l-0 w-[350px] h-[230px] rounded-2xl shadow-lg'>
                    <div className='bg-amber-300 p-2 w-[100px] flex justify-center rounded-xl'>
                        <FaUser size={50} className={`text-amber-700`}/>
                    </div>
                        <div>
                            <h2 className='font-semibold'>For You</h2>
                        </div>
                </div>

                <div className='bg-amber-200 flex flex-col gap-2 justify-center items-center p-4 border-3 border-t-0 border-l-0 w-[350px] h-[230px] rounded-2xl shadow-lg'>
                    <div className='bg-amber-300 p-2 w-[100px] flex justify-center rounded-xl' >
                        <FaUsers size={50} className={`text-amber-700`}/>
                    </div>
                        <div>
                            <h2 className='font-semibold'>For Everyone</h2>
                        </div>
                </div>


                <div className='bg-amber-200 p-4 flex flex-col gap-2 justify-center items-center border-3 border-t-0 border-l-0 w-[350px] h-[230px] rounded-2xl shadow-lg'>
                    <div className='bg-amber-300 p-2 w-[100px] flex justify-center rounded-xl'>
                        <FaHeartbeat size={50} className={`text-amber-700`}/>
                    </div>
                        <div>
                            <h2 className='font-semibold'>For All Health</h2>
                        </div>
                </div>
            </div>

            <div className='mt-4 mb-6' >
                <NavLink to="/signup" className={`bg-amber-400 font-medium  p-3 rounded-md w-[400px] text-center  border-3 border-t-0 border-l-0`}>Get Started - it's free!</NavLink>               
            </div>

            <div>
                <p className='w-[450px] text-center text-gray-600' >Get on you seat! and prepare for some heat! corn streams available for people who loves juicy yellow corns</p>
            </div>

        </main>
    </div>
  )
}

export default LandingPage