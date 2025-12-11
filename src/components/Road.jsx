import React, { useState } from 'react'
import Car from './Car'

const Road = () => {
  const [speed, setSpeed] =useState(0);
  const [isDrive, setIsDrive] = useState(false);
      const carList=[
        { model: "Corolla",year:2022,price:13000,color: "Blue"},
        { model: "Toyota",year:2010,price:17000,color: "Black"},
        { model: "Cherry",year:2025,price:120000,color: "White"},
        { model: "BYD",year:2020,price:20000,color: "Red"}

    ]
  return (
    <div>
      <h2>Cars</h2>
     <Car cars={carList} speed={speed} setSpeed={setSpeed}isDrive={isDrive} setIsDrive={setIsDrive}/>
    </div>
  )
}

export default Road
