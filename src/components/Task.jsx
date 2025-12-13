import React from 'react'
import FormInsertTask from './FormInsertTask'
import { useState } from 'react'
import AllTask from './AllTask'

const Task = () => {
const [tasks,setTask]=useState([])
const [isDisplayTask,setisDisplayTask]=useState(false)

const handleClickButton=()=>{
  setisDisplayTask(true)
}
  return (
    <div>
      {isDisplayTask ?<FormInsertTask setTask={setTask} setisDisplayTask={setisDisplayTask} /> : 
         <div>
          <button onClick={handleClickButton}> Open Form</button>
          <AllTask tasks={tasks} setTask={setTask}/> 
          </div> 
        }
    </div>
  )
}

export default Task
