import React, { useRef } from 'react'

function TaskForm(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null)
  function saveTask(e: React.FormEvent) {
    e.preventDefault()
    const name = inputRef.current?.value
    console.log(name)
    // inputRef.current?.value = ''
  }
  return (
    <form onSubmit={saveTask}>
      <input type="text" placeholder="Type your task..." ref={inputRef} />
      <button type="submit">save</button>
    </form>
  )
}

export default TaskForm
