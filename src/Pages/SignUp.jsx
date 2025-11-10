import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowAltCircleLeft } from 'react-icons/fa';

const SignUp = () => {

    const navigate = useNavigate();

    const handleSignUp = () => {
        
    }

    const handleClick = () => {
        navigate(-1);
    }

  return (
    <div className='flex justify-center items-center h-[100vh] bg-amber-100'>
        <div className='w-[500px] flex flex-col gap-4 bg-white p-6 rounded-xl shadow-2xl border-3 border-t-0 border-l-0'>
            <div className='flex justify-start'>
                <button onClick={(handleClick)}> <FaArrowAltCircleLeft size={30} className={`text-amber-600 hover:text-black transition-all ease-in-out hover:scale-105`}/> </button>
            </div>
            <div className='mb-4'>
                <h1 className='text-xl text-center font-semibold'>Create your account!</h1>
            </div>
            <div className='flex flex-col'>
                <label>Username</label>
                <input placeholder='Person-name' type='text' 
                className='border border-gray-400 p-2 rounded-lg'/>
            </div>
            <div className='flex flex-col'>
                <label>Email Address</label>
                <input placeholder='person123@gmail.com' type='email' 
                className='border border-gray-400 p-2 rounded-lg'/>
            </div>
            <div className='flex flex-col'>
                <label>Create Password</label>
                <input placeholder='*******' type='password' 
                className='border border-gray-400 p-2 rounded-lg'/>
            </div>
            <div className='flex flex-col'>
                <label>Confirm Password</label>
                <input placeholder='*******' type='password' 
                className='border border-gray-400 p-2 rounded-lg'/>
            </div>
            <button className='bg-amber-500 p-2 rounded-lg'>Create account</button>
       
            <p className='text-center'>Already have an account? <Link className={`text-blue-600`}>Log in</Link></p>
        </div>
    </div>
  )
}

export default SignUp