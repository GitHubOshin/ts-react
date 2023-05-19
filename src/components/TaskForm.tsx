import React, { useRef } from 'react'

function TaskForm(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null)
  function saveTask(e: React.FormEvent) {
    e.preventDefault()
    console.log(inputRef)
  }
  return (
    <form onSubmit={saveTask}>
      <input type="text" placeholder="Type your task..." ref={inputRef} />
      <button type="submit">save</button>
    </form>
  )
}

export default TaskForm
