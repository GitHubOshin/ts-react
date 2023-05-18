interface Item {
  id: number
  name: string
}

interface TaskListProp {
  items: Item[]
}

function TaskList(props: TaskListProp): JSX.Element {
  return (
    <>
      <h1>All the things that I need todo...</h1>
      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
      </ul>
    </>
  )
}

export default TaskList
