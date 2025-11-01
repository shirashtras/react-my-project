import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Road from './components/Road'
import Car from './components/Car'
import CarMode from './components/CarMode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Road/>
     {/* <Car/> */}
      {/* <CarMode/> */} 
    </>
  )
}

export default App
