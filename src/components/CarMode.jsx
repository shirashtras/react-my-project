import React, { use, useState } from 'react'

const CarMode = () => {
    const [speed,setSpeed]=useState(0)
    const [isDrive,setIsDrive]=useState(false);

    const handleToggleMoving=()=>{
        if (isDrive) 
        {
         setIsDrive(false);
         setSpeed(0);
        }
       else
        {
         setIsDrive(true);
        }
    }
    const handleSpeed=(e)=>{
    setSpeed(e.target.value)
    }

  return (
    <div>
       <p> {isDrive ?"Speed:"+ speed + "km/h" : "Stopped"}</p>
      {isDrive &&<input  type="number" value={speed}  onChange={handleSpeed} />}
      <button onClick={handleToggleMoving} > {isDrive?"Stopped Car":"Set Car Moving"}</button>
    </div>
  )
}

export default CarMode
;
