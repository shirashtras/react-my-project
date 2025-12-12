import React from 'react'
import FormInsertTask from './FormInsertTask'
import { useState } from 'react'
import AllTask from './AllTask'

const Task = () => {
const {tasks,setTask}=useState([])
const {isDisplayTask,setisDisplayTask}=useState(false)
  return (

 
    <div>
      {isDisplayTask ? (
        <FormInsertTask
        setTask={setTask}
        setisDisplayTask={setisDisplayTask}
        />
      ) : (
        <>
          <button onClick={() => setIsDisplayNewTaskForm(true)}>
          Open Form
          </button>
          <AllTask tasks={tasks} setTask={setTask} />
        </>
      )}
    </div>
  )
}

export default Task
