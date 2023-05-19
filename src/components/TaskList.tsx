import Item from '../models/item'

interface TaskListProp {
  items: Item[]
}

function TaskList(props: TaskListProp): JSX.Element {
  return (
    <>
      <h1>All the things that I need todo...</h1>
      <ul>
        {props.items.map((elememt) => (
          <li key={elememt.id}>{elememt.name}</li>
        ))}
      </ul>
    </>
  )
}

export default TaskList
