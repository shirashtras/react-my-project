import React from 'react'

const DetailsTask = (t,setIsCompleted) => {
  return (
    <div key={t.id}> <div><h3>{t.name}</h3> </div>
    <input type='checkbox' />
    </div>
  )
}

export default DetailsTask
