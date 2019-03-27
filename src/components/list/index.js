import React, {
  Fragment,
  useState,
  useReducer,
  useEffect
} from 'react';
import {
  reducer as Todos,
  requestSaveTodo,
  requestDeleteTodo,
  requestCompleteTodo
} from '../../reducers/todos'
import Item from '../item'
import styles from './list.module.css'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todos')

    if (serializedState === null) {
      return []
    } else {
      return JSON.parse(serializedState)
    }
  } catch (err) {
    return []
  }
}

export default function List () {
  const initialState = loadState()
  const [todoName, setTodoName] = useState('')
  const [showComplete, setShowComplete] = useState(false)
  const [todos, dispatch] = useReducer(Todos, initialState)
  const filterLabel = (showComplete) ? 'Hide Completed' : 'Show Completed'
  const renderList = []
 
  useEffect(() => {
    return () => {
      const serializedState = JSON.stringify(todos)
      localStorage.setItem('todos', serializedState)
    }
  })

  const handleChange = (event) => {
    const { target } = event
    setTodoName(target.value)  
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(requestSaveTodo(todoName))
    setTodoName('')
  }

  const handleFilter = () => {
    setShowComplete(!showComplete)
  }

  const handleDelete = (data) => {
    dispatch(requestDeleteTodo(data)) 
  }

  const handleCompleted = (data) => {
    dispatch(requestCompleteTodo(data)) 
  }

  todos
    .filter(todo => showComplete || todo.complete === false) 
    .forEach(todo => {
      renderList.push(
        <Item
          id={todo.id}
          onComplete={() => handleCompleted(todo.id)}
          onDelete={() => handleDelete(todo.id)}
          key={`todo-${todo.id}`} 
          item={todo} />
      )
    })

  return (
    <Fragment> 
      <div className={styles['todo-form']}>
        <form onSubmit={handleSubmit}>
          <input type="text"
            placeholder="enter a todo"
            value={todoName}
            onChange={handleChange}
            className="todo-form-name" />
        </form>
      </div>

      <div className={styles['todo-list-filters']}
        onClick={handleFilter} >
        {filterLabel}
      </div>

      {renderList}
    </Fragment>
  )
}
