This project is a refactor of an existing todo app that used redux to a first pass of using react hooks. It uses the same reducer and action creators from the redux implementation along with three hooks, which are:

[useState()](https://reactjs.org/docs/hooks-reference.html#usestate)
[useReducer()](https://reactjs.org/docs/hooks-reference.html#usereducer)
[useEffect()](https://reactjs.org/docs/hooks-reference.html#useeffect)

### persitence

In the original app the state was persited to localStorage using a middleware that was [throttled](https://www.npmjs.com/package/lodash.throttle). The same idea is in play here minus the throttle. [useEffect()](https://reactjs.org/docs/hooks-reference.html#useeffect) persists our state and then when the `List` component is instantiated we read that state and use it as our intial state in the reducer.

### setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

