import React from 'react';
import './App.css';
import AddTodo from './features/todo/AddTodo';
import TodoList from './features/todo/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>TODO LIST</div>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
      </header>
    </div>
  );
}

export default App;
