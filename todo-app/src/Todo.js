import React from 'react';

function Todo({ todo, toggleComplete, deleteTodo }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </li>
  );
}

export default Todo;
