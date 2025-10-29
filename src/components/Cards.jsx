import React, { useState } from 'react'

const Cards = ({ corns, setCorns }) => {

      const handleDelete = (index) => {
    setCorns(corns.filter((_, i) => i !== index));
  };


  return (
    <div className='w-full'>

        {corns.length === 0 ? ( <p className='text-center text-gray-600 mt-10'>
            No corns yet, please add corns now.
        </p> ) : ( 
            <ul className='grid grid-cols-6 gap-4'>
                {corns.map((corn, i) => (
            <li key={i} className='bg-amber-400 p-4' >
                <h1>{corn.name}</h1>

                {corn.image && (
                <img src={corn.image}
                alt={corn.name}
                className='rounded-xl width-[250px] h-[200px]'
                />                    
                )}

                {corn.date && <p>Date: {corn.date}</p>}
                {corn.description && <p>{corn.description}</p>}

                <button className='bg-red-500 p-2 w-[100px]' onClick={() =>handleDelete(i)}
               >Delete</button>

            </li>
        ))}
    </ul>
    )}

    </div>
  )
}

export default Cards