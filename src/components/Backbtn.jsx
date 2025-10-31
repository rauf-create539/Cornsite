import { useNavigate } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa"

const Backbtn = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

  return (
    <div>
        <button className="text-black font-bold text-2xl" onClick={handleBack}> <FaArrowLeft /> </button>
    </div>
  )
}

export default Backbtn