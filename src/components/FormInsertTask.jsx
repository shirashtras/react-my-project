import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FormInsertTask = ({ setTask, setisDisplayTask }) => {

  const [headerTask, setHeaderTask] = useState('')
  const [descriptionTask, setDescriptionTask] = useState('')

  const handleCreateTask = (e) => {
    e.preventDefault()
    const now = new Date()
    const dateNow=now.toLocaleTimeString('he')
    const newTask = {id: uuidv4(), headerTask,descriptionTask, date:dateNow,isCompleted: false}
    setTask(prev => [...prev, newTask])
    setHeaderTask('')
    setDescriptionTask('')
    setisDisplayTask(false)
  }
  const handleHeadertask=(e)=>{
    setHeaderTask(e.target.value)
  }
 const handleDescriptionTask=(e)=>{
    setDescriptionTask(e.target.value)
  }
  return (
    <div>
      <h2>Your Task</h2>
      <input placeholder="enter your Header task" onChange={handleHeadertask} />
      <br />
      <input placeholder="enter your Description task"  onChange={handleDescriptionTask} />
      <br />
      <button onClick={handleCreateTask}>Create Task</button>
    </div>
  )
}

export default FormInsertTask