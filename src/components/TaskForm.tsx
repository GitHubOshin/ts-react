import React from 'react'

function TaskForm(): JSX.Element {
  return (
    <form>
      <input type="text" placeholder="Type your task..." />
      <button type="submit">save</button>
    </form>
  )
}

export default TaskForm
