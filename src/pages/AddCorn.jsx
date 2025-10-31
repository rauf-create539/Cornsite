import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Backbtn from '../components/Backbtn';

const AddCorn = ({setCorns}) => {

  const [newCorn, setNewCorn] = useState({
      name: "", 
      description: "", 
      image: "", 
      date: ""
    }
  );



  const handleImageChange = (e) => {
      const file = e.target.files[0];
      if(file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setNewCorn((prev) => ({ ...prev, image: reader.result }));
        };
        reader.readAsDataURL(file);
      }
    };


  const navigate = useNavigate();

  const handleAdd = () => {

    if(!newCorn.name || !newCorn.image || !newCorn.description || !newCorn.date){
      alert("All fields must be filled before adding.");
      return;
    }

    setCorns((prev) => [...prev, newCorn]);
    setNewCorn({
      name: "",
      image: "",
      description: "",
      date: ""
    });
    navigate('/home');
  };

  return (
    <div>

      <Sidebar />

    <div className='ml-[120px] mt-[85px] p-5 flex justify-center'>

      <div>

        <div className='flex justify-between'>
        <h1 className='mb-6'>Add new corn to the list!</h1>
        <Backbtn />
        </div>

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

          <input 
          className='border w-[600px] p-2'
          type='file' onChange={handleImageChange}/>
          {newCorn.image && (<img src={newCorn.image} alt='Previes' className='w-[300px] h-[250px]'/>)}
          
          <div className='flex justify-center'>

          
          <button className={`w-[200px] p-2 ${(!newCorn.name || !newCorn.image || !newCorn.description || !newCorn.date) ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-green-500'} `}
           onClick={handleAdd}
           disabled={!newCorn.name || !newCorn.image || !newCorn.description || !newCorn.date}
           >Add Corn</button>
          </div>
    

          </div>
      </div>
      </div>
    </div>


  )
}

export default AddCorn