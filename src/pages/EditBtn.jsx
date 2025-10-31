import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditBtn = ({ corns, setCorns }) => {

    const { index } = useParams();
    const navigate = useNavigate();

    const corn = corns[parseInt(index)] || {};
    const [isUpdating, setIsUpdating] = useState(true);
    const [newName, setNewName] = useState(corn.name || "");
    const [newDescription, setNewDescription] = useState(corn.description || "");
    const [newDate, setNewDate] = useState(corn.date || "");
    const [newImage, setNewImage] = useState(corn.image || "");

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if(file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setNewImage(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };

    const handleUpdate = () => {
        const updatedCorns = [...corns];
        updatedCorns[parseInt(index)] = {
            ...updatedCorns[parseInt(index)],
            name: newName,
            description: newDescription,
            image: newImage,
            date: newDate,
        };
        setCorns(updatedCorns);
        navigate("/home");
    };

  return (
    <div>

        {isUpdating ? (
            <div>
    <input type='text' placeholder='Enter Item Name' value={newName}
    onChange={(e) => setNewName(e.target.value)}
    />

    <input type='text' placeholder='Enter Description' value={newDescription}
    onChange={(e) => setNewDescription(e.target.value)}/>

    <input type='date' value={newDate}
    onChange={(e) => setNewDate(e.target.value)} />

    <input type="file" accept="image/*" onChange={handleImageChange} />
    {newImage && (<img src={newImage} alt="Preview"/>)}

    <button onClick={handleUpdate}>Save</button>
    <button onClick={() => setIsUpdating(false)}>Cancel</button>

            </div>
        ) : (

    <button onClick={() => setIsUpdating(true)}>Edit</button>
        )}

    </div>
  )
}

export default EditBtn