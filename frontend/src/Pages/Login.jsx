import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const Login = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1);
    }

  return (
    <div className='flex bg-amber-100 h-[100vh] justify-center items-center '>
   
        <div className='bg-white p-6 w-[500px] rounded-xl flex flex-col gap-4 shadow-2xl border-3 border-t-0 border-l-0'>
            <div className='flex justify-start'>
                <button onClick={(handleClick)}> <FaArrowAltCircleLeft size={30} className={`text-amber-600 hover:text-black transition-all ease-in-out hover:scale-105`}/> </button>
            </div>
            
            <div className='p-6'>
                <h1 className='text-2xl font-semibold text-center'>Welcome Back!</h1>
            </div>
            <div className='flex flex-col'>
                <label>Email Address</label>
                <input placeholder='person123@gmail.com' type='email' 
                className='border border-gray-400 p-2 rounded-lg'/>
            </div>
            <div className='flex flex-col'>
                <label>Confirm Password</label>
                <input placeholder='*******' type='password' 
                className='border border-gray-400 p-2 rounded-lg'/>
            </div>
            <button className='bg-amber-500 p-2 rounded-lg'>Log in</button>
            <Link className={`text-center text-blue-500`}>Forgot Password</Link>
            <p className='text-center'>Don't have an account? <Link className={`text-blue-500`}>Sign up</Link></p>
        </div>
    </div>
  )
}

export default Login