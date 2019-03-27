
const uuid = require('uuid/v4')

export const requestSaveTodo = (data) => ({
  type: 'REQUEST_SAVE_TODO',
  data
})

export const requestDeleteTodo = (data) => ({
  type: 'REQUEST_DELETE_TODO',
  data
})

export const requestCompleteTodo = (data) => ({
  type: 'REQUEST_COMPLETE_TODO',
  data
})

export const reducer = (state = [], action) => {
  const { type, data } = action

  switch (type) {
    case 'REQUEST_SAVE_TODO': {
      return [
        ...state, 
        {
          id: uuid(),
          name: data,
          complete: false
        }
      ]
    }
    case 'REQUEST_DELETE_TODO': {
      return [
        ...state.filter(todo => todo.id !== data)
      ]
    }
    case 'REQUEST_COMPLETE_TODO': {
      const _index = state.findIndex(todo => todo.id === data)
      const modifiedState = [].concat(state)

      modifiedState[_index].complete = !state[_index].complete

      return modifiedState
    }
    default:
      return state
  }
}
