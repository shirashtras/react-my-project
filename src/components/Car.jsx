import React from 'react'
import CarMode from './CarMode'

const Car = ({cars,speed, setSpeed,isDrive, setIsDrive}) => {
    return (
     <div>
      {cars.map((c) => (
        <div key={c.model}>
          <h3>Model:{c.model}</h3>
          <p>Color:{c.color}</p>
          <p>Year:{c.year}</p>
          <p>Price:{c.price}</p>
           <CarMode speed={speed} setSpeed={setSpeed} isDrive={isDrive} setIsDrive={setIsDrive}/>
        </div>
        ))}
      
    </div>
  )
}

export default Car
