import React from 'react'
import CarMode from './CarMode'

const Car = ({cars}) => {
    return (
     <div>
      {cars.map((c) => (
        <div key={c.model}>
          <h3>Model:{c.model}</h3>
          <p>Color:{c.color}</p>
          <p>Year:{c.year}</p>
          <p>Price:{c.price}</p>
           <CarMode/>
        </div>
        ))}
      
    </div>
  )
}

export default Car
