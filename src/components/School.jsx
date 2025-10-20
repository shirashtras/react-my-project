import React from 'react'
import Student from './Student';

const School = () => {
    const students=[
        {id:"123",name:"Shira",age:19,avg:90},
        {id:"234",name:"Yael",age:23,avg:45},
        {id:"345",name:"Michal",age:14,avg:30},
        {id:"456",name:"Hadas",age:18,avg:70},
        {id:"567",name:"Tamar",age:12,avg:60}
    ]
    const handleStudentExit=()=>{
        console.log("השער נפתח")
    }
    
  return (
    <>
    <h1> My School</h1>
    <div>
        {students.map(s => (<Student key={s.id} student={s} onExit={handleStudentExit} />
        ))}
      </div>
    </>
  )
}

export default School
