import React, { useRef } from 'react'
import { FormEventHandler } from 'react'
import { Todo } from '../models/todo'

type TaskFormProps = {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
  optionalStr?: string
}

const TaskForm: React.FC<TaskFormProps> = ({
  todos = [],
  setTodos /* , optionalStr = '' */
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  // function saveTask(e: React.FormEvent) {
  const saveTask: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    const title = inputRef.current?.value || ''
    const newTodo: Todo = { id: Date.now(), title, completed: false }
    setTodos([...todos, newTodo])

    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }
  return (
    <form onSubmit={saveTask}>
      <input type="text" placeholder="Type your task..." ref={inputRef} />
      <button type="submit">save</button>
    </form>
  )
}

export default TaskForm
