import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import Item from './models/item'

function App() {
  const [items, setItems] = useState<Item[]>([])
  return (
    <>
      <TaskList items={items} />
    </>
  )
}

export default App
