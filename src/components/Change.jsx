import React, { useState } from 'react'

const Change = () => {
    const [dark,setDark]=useState(true)
    const handleClickChange=()=>{
        setDark(!dark);

    }
  return (
    <div>
      <h1> המצב הנוכחי:{dark?"כהה":"בהיר"}</h1>
      <button onClick={handleClickChange}>החלף למצב:{dark ? "בהיר" : "כהה"}</button>
    </div>
  )
}

export default Change