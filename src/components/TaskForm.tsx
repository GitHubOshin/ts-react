import React, { useRef } from 'react'
import { FormEventHandler } from 'react'

type TaskFormProps = {
  title: string
  completed: boolean
}

const TaskForm: React.FC<TaskFormProps> = ({ title, completed }) => {
  console.log({ title, completed })
  const inputRef = useRef<HTMLInputElement>(null)
  // function saveTask(e: React.FormEvent) {
  const saveTask: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const name = inputRef.current?.value || ''
    console.log(name)
    // if (inputRef.current !== undefined && inputRef.current !== null) {
    //   inputRef.current.value = ''
    // }
    // if (inputRef.current) {
    //   inputRef.current.value = ''
    // }
  }
  return (
    <form onSubmit={saveTask}>
      <input type="text" placeholder="Type your task..." ref={inputRef} />
      <button type="submit">save</button>
    </form>
  )
}

export default TaskForm
