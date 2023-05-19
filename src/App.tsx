import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import Item from './models/item'
import TaskForm from './components/TaskForm'

function App() {
  const [items, setItems] = useState<Item[]>([])
  return (
    <>
      <TaskForm />
      <TaskList items={items} />
    </>
  )
}

export default App
