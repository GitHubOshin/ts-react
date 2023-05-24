import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import { Todo } from './models/todo'
import TaskForm from './components/TaskForm'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <>
      <TaskForm todos={todos} setTodos={setTodos} />
      <TaskList todos={todos} setTodos={setTodos} />
      {JSON.stringify(todos, null, 3)}
    </>
  )
}

export default App
