import React from 'react';
import './App.css';
import AddTodo from './features/todo/AddTodo';
import TodoList from './features/todo/TodoList';

function App() {
  return (
    <div className="App">
        <div className='TodoListContainer'>
          <h1>TODO LIST</h1>
          <AddTodo></AddTodo>
          <TodoList></TodoList>
        </div>
    </div>
  );
}

export default App;
