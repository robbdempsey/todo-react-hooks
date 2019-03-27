
import React, { createContext, useReducer } from 'react'
import { reducer as Todos } from '../../reducers/todos'

export const ListContext = createContext(<withContext />)
export const ListProvider = ListContext.Provider
export const ListConsumer = ListContext.Consumer

const loadState = () => {
  const serializedState = localStorage.getItem('todoState')

  return serializedState
}

export default function withContext (props) {
  return (
    <ListProvider >
       {props.children}
    </ListProvider>
  )
}
