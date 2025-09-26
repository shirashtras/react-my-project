import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookList from './components/BookList'
import PersonDetails from './components/PersonDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    {/* Rendering List */}
     <BookList/>
     {/*Props*/}
     <PersonDetails/>

    </>
  )
}

export default App
