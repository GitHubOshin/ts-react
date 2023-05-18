import './App.css'
import TaskList from './components/TaskList'

function App() {
  const items = [
    { id: 1, name: 'coding' },
    { id: 2, name: 'solving program' },
    { id: 3, name: 'testing program' }
  ]
  return (
    <>
      <TaskList items={items} />
    </>
  )
}

export default App
