import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import EditBtn from '../pages/EditBtn';
import { FaTrash, FaEdit } from "react-icons/fa";

const Cards = ({ corns, setCorns }) => {

    const navigate = useNavigate();

      const handleDelete = (index) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this?");
        if(confirmDelete) {
          setCorns(corns.filter((_, i) => i !== index));
        }
  };


  return (
    <div className='w-full'>

        {corns.length === 0 ? ( <p className='text-center text-gray-600 mt-10'>
            No corns yet, please add corns now.
        </p> ) : ( 
            <ul className='grid grid-cols-6 gap-4'>
                {corns.map((corn, i) => (
            <li key={i} className='bg-amber-400 p-4 flex flex-col justify-center text-center' >
                <h1>{corn.name}</h1>

                {corn.image && (
                <img src={corn.image}
                alt={corn.name}
                className='rounded-xl width-[250px] h-[200px]'
                />                    
                )}

                {corn.date && <p>Date: {corn.date}</p>}

                <button className='mt-4 mb-4'>
                  <NavLink to={`/details/${i}`} className={`w-full p-2 bg-gray-400`}>View Details</NavLink>
                </button>
                
                <div className='flex gap-4 justify-center'>
                  <button className='text-center text-red-500' onClick={() =>handleDelete(i)}
                > <FaTrash /> </button>
                <button>
                    <NavLink to={`/edit/${i}`} className={`text-green-500`}>
                    <FaEdit />
                    </NavLink>
                </button>
                </div>


            </li>
        ))}
    </ul>
    )}

    </div>
  )
}

export default Cards