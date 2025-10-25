import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import Change from './components/Change'
import PasswordStrengthIndicator from './components/PasswordStrengthIndicator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Form/>
    <Change/>
 <PasswordStrengthIndicator/>
    </>
  )
}

export default App
