import { useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = ({ corns}) => {

    const {index} = useParams();
    const corn = corns[parseInt(index)];

    if(!corn) return <p>No details found.</p>;

  return (
    <div>

        <div>
            <h1>{corn.name}</h1>
            {corn.image && <img src={corn.image} alt={corn.name} />}
            <p>{corn.date}</p>
            <p>{corn.description}</p>
        </div>

    </div>
  )
}

export default CardDetails