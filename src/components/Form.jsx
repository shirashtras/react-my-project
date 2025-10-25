import React, { useState } from 'react'

const Form = () => {
   const [name, setName] = useState("")
  const [email, setEmail] = useState("")

    const handleChangeName=(e)=>{
        setName(e.target.value)

    }
    const handleChangeEmail=(e)=>{
      setEmail(e.target.value)
    }
  return (
    <div>
      <h3>Your name is:{name}</h3>
      <h3>Your email is:{email}</h3>
        <input placeholder="enter your name" onChange={handleChangeName}/>
      <input placeholder="enter your email"onChange={handleChangeEmail}/>
    </div>
  )
}

export default Form