import React from 'react'
import { use } from 'react'
import { useState } from 'react'
const FormInsertTask = ({setTask}) => {
  const {headerTask,setHeaderTask}=useState("")
  const {descriptionTask,setdescriptionTask}=useState("")

  const handleChangeHeader=(e)=>{
    setHeaderTask(e.target.value)
  }
  const handleChangeDescription=(e)=>{
    setHeaderTask(e.target.value)
  }
  const handleCreateTask=(e)=>{
    e.preventDefault()
    const newTask={id:uuidv4(),headerTask,descriptionTask,date:DateNow}
   setTask(p=>[...p,newTask])
   setHeaderTask("")
   setdescriptionTask("")

  }

  const now = new Date();
  const DateNow = now.toLocaleTimeString('he'); 
  return (
    <div>
      <button onChange={handleInsertTask} >Add Task </button>
      <h2>Your Task</h2>
      <input placeholder='enter your Header task' onBlur={handleChangeHeader}/>
      <br/>
      <input placeholder='enter your Description task' onBlur={handleChangeDescription}/>
      <br/>
      <button onClick={handleCreateTask}> Create Task</button>
    </div>
  )
}

export default FormInsertTask

