const DetailsTask = ({task, setTask }) => {
  const handleCompletedTask = () => {
    setTask(p => p.map(t=>  t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t) )
  }

  return (
    <div style={task.isCompleted ? { textDecoration: 'line-through'}:{} }>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <input type="checkbox" checked={task.isCompleted}  disabled={task.isCompleted} onChange={handleCompletedTask}/>
        <h2>{task.headerTask}</h2>
      </div>
      <p>Description: {task.descriptionTask}</p>
      <p>Task Date: {task.date}</p>
    </div>
     )
}

export default DetailsTask