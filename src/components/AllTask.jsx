import DetailsTask from './DetailsTask'

const AllTask = ({ tasks, setTask }) => {
  return (
    <div>
      <h2>All Task</h2>
      <div>
        {tasks.map(task =><DetailsTask key={task.id} task={task} setTask={setTask} />)}
      </div>
    </div>
  )
}

export default AllTask