import React, { Component } from 'react';
import './App.css';

import TodoList from './components/list'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          TODOs with hooks
        </header>
        <TodoList />
      </div>
    );
  }
}

export default App;
