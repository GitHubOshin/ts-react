import React from 'react'

function TaskForm(): JSX.Element {
  function saveTask(e: React.FormEvent) {
    e.preventDefault()
    console.log('Saved the task!!')
  }
  return (
    <form onSubmit={saveTask}>
      <input type="text" placeholder="Type your task..." />
      <button type="submit">save</button>
    </form>
  )
}

export default TaskForm
