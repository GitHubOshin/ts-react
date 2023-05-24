import { ChangeEventHandler, FC, MouseEventHandler } from 'react'
import { Todo } from '../models/todo'

interface TaskListProp {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
}

const TaskList: FC<TaskListProp> = ({ todos = [], setTodos }) => {
  const handleToggleTodo: (
    todoID: number
  ) => ChangeEventHandler<HTMLInputElement> =
    (selectedTodoID: number) => (e) => {
      const newTodoList = todos.map((todo) => {
        return todo.id === selectedTodoID
          ? { ...todo, completed: e.currentTarget.checked }
          : todo
      })

      setTodos(newTodoList)
    }

  const handleDeleteTodo: (
    todoID: number
  ) => MouseEventHandler<HTMLButtonElement> =
    (selectedTodoID: number) => () => {
      const remainingTodos = todos.filter((todo) => todo.id !== selectedTodoID)
      setTodos(remainingTodos)
    }

  return (
    <>
      <h1>All the things that I need todo...</h1>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              listStyle: 'none',
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
              <input
                id={`completed-${todo.id}`}
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggleTodo(todo.id)}
              />
              <label htmlFor={`completed-${todo.id}`}>{todo.title}</label>
              <button onClick={handleDeleteTodo(todo.id)}>X</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TaskList
