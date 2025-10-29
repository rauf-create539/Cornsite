import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const AddCorn = ({setCorns}) => {

  const [newCorn, setNewCorn] = useState({
      name: "", 
      description: "", 
      image: "", 
      date: ""
    }
  );


  const navigate = useNavigate();

  const handleAdd = () => {
    setCorns((prev) => [...prev, newCorn]);
    navigate('/home');
  }

  return (
    <div>

      <Sidebar />

    <div className='ml-[120px] mt-[85px] p-5 flex justify-center'>

      <div>
        <h1 className='mb-6 text-center'>Add new corn to the list!</h1>

        <div className='flex flex-col gap-8 justify-center mt-10'>

          <input type='text' placeholder='Enter Corn Name'
          className='border w-[600px] p-2'
          value={newCorn.name}
          onChange={(e) => setNewCorn({ ...newCorn, name: e.target.value })}/>

          <input type='text' placeholder='Enter Corn Description'
          className='border w-[600px] p-2'
          value={newCorn.description}
          onChange={(e) => setNewCorn({ ...newCorn, description: e.target.value })}/>

          <input type='date'
          className='border w-[600px] p-2'
          value={newCorn.date}
          onChange={(e) => setNewCorn({ ...newCorn, date: e.target.value })}
          />

          <input type='file' accept='image/*'
          className='border w-[600px] p-2'
          onChange={(e) => { const file = e.target.files[0]; 
            if(file) {
              const imageUrl = URL.createObjectURL(file);
              setNewCorn({...newCorn, image: imageUrl});
            }}
          }/>
          
          <div className='flex justify-center'>
          <button className='w-[200px] bg-green-500 p-2' onClick={handleAdd}>Add Corn</button>
          </div>
    

          </div>
      </div>
      </div>
    </div>


  )
}

export default AddCorn