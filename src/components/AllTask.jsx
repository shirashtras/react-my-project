import React from 'react'
import DetailsTask from './DetailsTask'

const AllTask = ({tasks}) => {
  return (
    <div>
      <h2>All Task</h2>
    <div>
        {tasks.map(t=><DetailsTask t={t} setIsCompleted={setIsCompleted}/> )}
    </div>
   

    </div>



  )
}

export default AllTask
