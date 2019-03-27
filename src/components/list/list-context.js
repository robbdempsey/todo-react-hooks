
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
  /*
    load state from localStorage
      if it doesnt exists create state with initialState shape
    useReducer for todos
    export provider as component to wrap the list

  */ 
  


  // const persistedState = loadState()

  console.log('withContext')
  
  return (
    <ListProvider >
       {props.children}
    </ListProvider>
  )
}
